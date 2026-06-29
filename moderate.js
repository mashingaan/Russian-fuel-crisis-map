(function () {
  const config = window.FUEL_MAP_CONFIG || {};
  const tableName = config.publicTable || "fuel_signals";
  const client = window.supabase?.createClient?.(config.supabaseUrl || "", config.supabaseAnonKey || "");

  const state = {
    session: null,
    rows: [],
    selectedId: null,
    statusFilter: "pending",
    busy: false,
  };

  const els = {
    authPanel: document.getElementById("authPanel"),
    reviewPanel: document.getElementById("reviewPanel"),
    authForm: document.getElementById("authForm"),
    emailInput: document.getElementById("emailInput"),
    passwordInput: document.getElementById("passwordInput"),
    magicLinkButton: document.getElementById("magicLinkButton"),
    passwordButton: document.getElementById("passwordButton"),
    signOutButton: document.getElementById("signOutButton"),
    refreshButton: document.getElementById("refreshButton"),
    repairLaunchButton: document.getElementById("repairLaunchButton"),
    sessionLabel: document.getElementById("sessionLabel"),
    statusFilter: document.getElementById("statusFilter"),
    queueMeta: document.getElementById("queueMeta"),
    signalList: document.getElementById("signalList"),
    emptyDetail: document.getElementById("emptyDetail"),
    detailForm: document.getElementById("detailForm"),
    detailStatus: document.getElementById("detailStatus"),
    detailTitle: document.getElementById("detailTitle"),
    rejectButton: document.getElementById("rejectButton"),
    approveButton: document.getElementById("approveButton"),
    saveButton: document.getElementById("saveButton"),
    sourceLink: document.getElementById("sourceLink"),
    toast: document.getElementById("toast"),
    fields: {
      title: document.getElementById("titleField"),
      status: document.getElementById("statusField"),
      type: document.getElementById("typeField"),
      severity: document.getElementById("severityField"),
      observed_at: document.getElementById("observedField"),
      region: document.getElementById("regionField"),
      place: document.getElementById("placeField"),
      lat: document.getElementById("latField"),
      lng: document.getElementById("lngField"),
      fuel: document.getElementById("fuelField"),
      loss_weight: document.getElementById("lossField"),
      media_url: document.getElementById("mediaField"),
      note: document.getElementById("noteField"),
      confidence: document.getElementById("confidenceField"),
      reviewer_note: document.getElementById("reviewerField"),
    },
  };

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showToast(message, type) {
    els.toast.textContent = message;
    els.toast.hidden = false;
    els.toast.dataset.type = type || "info";
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      els.toast.hidden = true;
    }, 4200);
  }

  function formatError(error) {
    const message = error?.message || String(error || "Unknown error");
    if (/row-level security|permission denied|not authorized|JWT/i.test(message)) {
      return `${message}. Run supabase-moderation-auth.sql and add your moderator email.`;
    }
    return message;
  }

  function setBusy(isBusy) {
    state.busy = isBusy;
    updateControls();
  }

  function updateControls() {
    const signedIn = Boolean(state.session);
    const hasSelection = Boolean(selectedRow());
    els.magicLinkButton.disabled = state.busy;
    els.passwordButton.disabled = state.busy;
    els.signOutButton.disabled = state.busy || !signedIn;
    els.refreshButton.disabled = state.busy || !signedIn;
    els.repairLaunchButton.disabled = state.busy || !signedIn;
    els.rejectButton.disabled = state.busy || !hasSelection;
    els.approveButton.disabled = state.busy || !hasSelection;
    els.saveButton.disabled = state.busy || !hasSelection;
  }

  function selectedRow() {
    return state.rows.find((row) => row.id === state.selectedId) || null;
  }

  function setSession(session) {
    state.session = session;
    const email = session?.user?.email;
    els.authPanel.hidden = Boolean(session);
    els.reviewPanel.hidden = !session;
    els.signOutButton.hidden = !session;
    els.refreshButton.disabled = !session;
    els.sessionLabel.textContent = email ? `Signed in as ${email}` : "Signed out";
    updateControls();
  }

  async function loadRows() {
    if (!client || !state.session) return;
    setBusy(true);
    try {
      let query = client
        .from(tableName)
        .select("*")
        .order("created_at", { ascending: false })
        .limit(300);

      if (state.statusFilter !== "all") {
        query = query.eq("status", state.statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;

      state.rows = data || [];
      if (!state.rows.some((row) => row.id === state.selectedId)) {
        state.selectedId = state.rows[0]?.id || null;
      }
      renderQueue();
      renderDetail();
      showToast(`Loaded ${state.rows.length} signal${state.rows.length === 1 ? "" : "s"}.`, "success");
    } catch (error) {
      showToast(formatError(error), "error");
    } finally {
      setBusy(false);
    }
  }

  function renderQueue() {
    const counts = state.rows.reduce(
      (acc, row) => {
        acc[row.status] = (acc[row.status] || 0) + 1;
        return acc;
      },
      { pending: 0, approved: 0, rejected: 0 },
    );
    els.queueMeta.textContent = `${state.rows.length} loaded, ${counts.pending || 0} pending`;

    if (!state.rows.length) {
      els.signalList.innerHTML = '<div class="empty-detail"><h2>No signals</h2><p>Nothing matches this status filter.</p></div>';
      return;
    }

    els.signalList.innerHTML = state.rows
      .map((row) => {
        const active = row.id === state.selectedId ? " active" : "";
        const title = escapeHtml(row.title || "Untitled signal");
        const place = escapeHtml(row.place || row.region || "No place");
        const date = escapeHtml(row.observed_at || "No date");
        const severity = escapeHtml(row.severity || "watch");
        const status = escapeHtml(row.status || "pending");
        return `
          <button class="signal-row${active}" type="button" data-id="${escapeHtml(row.id)}">
            <span class="row-title">${title}</span>
            <span class="row-meta">
              <span class="badge ${severity}">${severity}</span>
              <span class="badge">${status}</span>
              <span>${date}</span>
              <span>${place}</span>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function setField(name, value) {
    const field = els.fields[name];
    if (field) field.value = value ?? "";
  }

  function renderDetail() {
    const row = selectedRow();
    els.emptyDetail.hidden = Boolean(row);
    els.detailForm.hidden = !row;

    if (!row) return;

    els.detailStatus.textContent = row.status || "pending";
    els.detailTitle.textContent = row.title || "Signal";
    setField("title", row.title);
    setField("status", row.status || "pending");
    setField("type", row.type || "station");
    setField("severity", row.severity || "watch");
    setField("observed_at", row.observed_at);
    setField("region", row.region);
    setField("place", row.place);
    setField("lat", row.lat);
    setField("lng", row.lng);
    setField("fuel", row.fuel);
    setField("loss_weight", row.loss_weight ?? 2);
    setField("media_url", row.media_url);
    setField("note", row.note);
    setField("confidence", row.confidence);
    setField("reviewer_note", row.reviewer_note);

    if (row.media_url) {
      els.sourceLink.hidden = false;
      els.sourceLink.href = row.media_url;
    } else {
      els.sourceLink.hidden = true;
      els.sourceLink.href = "#";
    }
    updateControls();
  }

  function requiredText(name) {
    return els.fields[name].value.trim();
  }

  function optionalText(name) {
    const value = els.fields[name].value.trim();
    return value || null;
  }

  function numberValue(name) {
    const raw = els.fields[name].value.trim();
    const value = Number(raw);
    if (!Number.isFinite(value)) throw new Error(`${name} must be a valid number`);
    return value;
  }

  function buildPatch(overrides = {}) {
    const patch = {
      title: requiredText("title"),
      status: requiredText("status"),
      type: requiredText("type"),
      severity: requiredText("severity"),
      observed_at: requiredText("observed_at") || new Date().toISOString().slice(0, 10),
      region: optionalText("region"),
      place: optionalText("place"),
      lat: numberValue("lat"),
      lng: numberValue("lng"),
      fuel: optionalText("fuel"),
      loss_weight: numberValue("loss_weight"),
      media_url: optionalText("media_url"),
      note: optionalText("note"),
      confidence: optionalText("confidence") || "Verified by moderator",
      reviewer_note: optionalText("reviewer_note"),
      ...overrides,
    };

    if (!patch.title) throw new Error("Title is required");
    if (!["pending", "approved", "rejected"].includes(patch.status)) throw new Error("Invalid status");
    return patch;
  }

  const launchRepairRows = [
    {
      id: "10bee310-1b41-46fa-9f0d-e8dcadc590ae",
      patch: {
        status: "approved",
        observed_at: "2026-06-28",
        title: "Slavyansk-on-Kuban refinery fire, multiple fires reported",
        region: "Krasnodar Krai",
        place: "Slavyansk-on-Kuban, rounded",
        lat: 45.25,
        lng: 38.12,
        type: "infrastructure",
        severity: "critical",
        note: "X video report: burning refinery in Slavyansk-on-Kuban, Krasnodar region, with several independent fires reported, including silo farm area. Public point is rounded.",
        fuel: "Refinery",
        media_url: "https://x.com/Tendar/status/2071293970357895340",
        confidence: "Verified by moderator: public X video source",
        reviewer_note: "Repaired in moderator console after accidental Sevastopol field overwrite.",
      },
    },
    {
      id: "5b88a21f-46a0-480e-aa38-6a3827eb7dae",
      patch: {
        status: "approved",
        observed_at: "2026-06-29",
        title: "Taganrog fuel access anomaly at gas station",
        region: "Rostov Oblast",
        place: "Taganrog, rounded",
        lat: 47.2,
        lng: 38.9,
        type: "station",
        severity: "watch",
        note: "X report: fuel was reportedly available but not for everyone; regular drivers were not served while selected vehicles and jerrycans were reportedly refueled. Treat as an unconfirmed fuel-access anomaly.",
        fuel: "Gasoline, availability disputed",
        media_url: "https://x.com/LXSummer1/status/2071338652337307974",
        confidence: "Verified by moderator: public X video/source; anomaly details still source-dependent.",
        reviewer_note: "Repaired in moderator console after accidental Sevastopol field overwrite.",
      },
    },
    {
      id: "59af680f-c11e-4589-b5f2-e2f57b6a5cdd",
      patch: {
        status: "approved",
        observed_at: "2026-06-28",
        title: "Novorossiysk gasoline queue",
        region: "Krasnodar Krai",
        place: "Novorossiysk, rounded",
        lat: 44.7,
        lng: 37.8,
        type: "station",
        severity: "serious",
        note: "X video report: queue for gasoline in Novorossiysk, Russia. Public point is rounded.",
        fuel: "Gasoline",
        media_url: "https://x.com/Maks_NAFO_FELLA/status/2071279694243143812",
        confidence: "Verified by moderator: public X video source",
        reviewer_note: "Repaired in moderator console after accidental Sevastopol field overwrite.",
      },
    },
    {
      id: "5b542034-9a2f-4c94-ae1c-af8174b4555c",
      patch: {
        status: "approved",
        observed_at: "2026-06-28",
        title: "Surgut gasoline availability problem",
        region: "Khanty-Mansi Autonomous Okrug",
        place: "Surgut, rounded",
        lat: 61.3,
        lng: 73.4,
        type: "station",
        severity: "watch",
        note: "X video report: Surgut, Khanty-Mansi Autonomous Okrug. Gasoline is reportedly already a problem even there. Treat as gasoline availability anomaly until exact fuel type and station status are verified.",
        fuel: "Gasoline, availability problem reported",
        media_url: "https://x.com/Maks_NAFO_FELLA/status/2071088282708889786",
        confidence: "Verified by moderator: public X video source",
        reviewer_note: "Repaired in moderator console; approved as the only public Surgut signal for this source.",
      },
    },
    {
      id: "30f3fdd4-5809-41ba-be84-62f7ce0f2545",
      patch: {
        status: "rejected",
        observed_at: "2026-06-28",
        title: "Rejected duplicate: Oryol misclassification of Surgut source",
        region: "Rejected duplicate",
        place: "Rejected duplicate",
        lat: 61.3,
        lng: 73.4,
        type: "station",
        severity: "watch",
        note: "Rejected duplicate. User did not submit an Oryol signal for this source; the source signal is Surgut only.",
        fuel: "Gasoline, duplicate rejected",
        media_url: "https://x.com/Maks_NAFO_FELLA/status/2071088282708889786",
        confidence: "Rejected by moderator",
        reviewer_note: "Rejected in moderator console: misclassified Oryol / duplicate Surgut row.",
      },
    },
    {
      id: "d14e81be-a610-4d74-8cb0-8728a17c6e5f",
      patch: {
        status: "approved",
        observed_at: "2026-06-28",
        title: "Yaroslavl YANOS refinery-area explosion reports",
        region: "Yaroslavl Oblast",
        place: "Yaroslavl, YANOS refinery area, rounded",
        lat: 57.6,
        lng: 39.9,
        type: "infrastructure",
        severity: "watch",
        note: "Telegram screenshot/source: reports explosion or incident around the YANOS refinery area in Yaroslavl on 2026-06-28. Damage remains unverified.",
        fuel: "Refinery-area report, damage unverified",
        media_url: null,
        confidence: "Verified by moderator: Telegram screenshot/source reviewed; damage unverified.",
        reviewer_note: "Repaired in moderator console after accidental Sevastopol field overwrite.",
      },
    },
    {
      id: "7e7715bf-fb9c-4cb4-a731-00727c8807e9",
      patch: {
        status: "approved",
        observed_at: "2026-06-29",
        title: "Occupied Kherson Oblast full or partial blackout report",
        region: "Occupied Kherson Oblast",
        place: "Kherson Oblast, rounded",
        lat: 46.6,
        lng: 33,
        type: "region",
        severity: "serious",
        note: "Telegram screenshot/source: Saldo claimed all or part of Kherson Oblast was without power; energy and emergency services were reportedly working. Regional infrastructure disruption, not fuel-specific.",
        fuel: "Power infrastructure / electricity",
        media_url: null,
        confidence: "Verified by moderator: Telegram screenshot/source reviewed.",
        reviewer_note: "Repaired in moderator console after accidental Sevastopol field overwrite.",
      },
    },
    {
      id: "eb593506-4b17-45bd-8036-78bf9d7861b6",
      patch: {
        status: "approved",
        observed_at: "2026-06-29",
        title: "Sevastopol parcel delivery disruption report",
        region: "Sevastopol / Crimea",
        place: "Destination: Sevastopol; source location unknown",
        lat: 44.6,
        lng: 33.53,
        type: "region",
        severity: "watch",
        note: "User-submitted report: parcels to Sevastopol are not arriving. Approved only as an affected-destination logistics disruption; source/origin location remains unknown.",
        fuel: "Not fuel-specific",
        media_url: null,
        confidence: "Verified by moderator: user-submitted local video/context; source location unknown.",
        reviewer_note: "Approved as affected-destination logistics anomaly; not an exact incident-location point.",
      },
    },
  ];

  async function updateSelected(overrides, successMessage) {
    const row = selectedRow();
    if (!row) return;
    setBusy(true);
    try {
      const patch = buildPatch(overrides);
      const { data, error } = await client
        .from(tableName)
        .update(patch)
        .eq("id", row.id)
        .select("*")
        .single();
      if (error) throw error;

      state.rows = state.rows.map((item) => (item.id === row.id ? data : item));
      renderQueue();
      renderDetail();
      showToast(successMessage, "success");
    } catch (error) {
      showToast(formatError(error), "error");
    } finally {
      setBusy(false);
    }
  }

  async function repairLaunchRows() {
    if (!state.session) {
      showToast("Sign in as a moderator first.", "error");
      return;
    }

    setBusy(true);
    try {
      let repaired = 0;
      for (const item of launchRepairRows) {
        const { error } = await client.from(tableName).update(item.patch).eq("id", item.id);
        if (error) throw error;
        repaired += 1;
      }
      showToast(`Repaired ${repaired} launch row${repaired === 1 ? "" : "s"}.`, "success");
      await loadRows();
    } catch (error) {
      showToast(formatError(error), "error");
    } finally {
      setBusy(false);
    }
  }

  async function signInWithMagicLink() {
    const email = els.emailInput.value.trim();
    if (!email) {
      showToast("Enter your email first.", "error");
      return;
    }
    setBusy(true);
    try {
      const redirectTo = config.moderatorRedirectUrl || window.location.href.split("#")[0];
      const { error } = await client.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo },
      });
      if (error) throw error;
      showToast("Magic link sent. Open it in this browser.", "success");
    } catch (error) {
      showToast(formatError(error), "error");
    } finally {
      setBusy(false);
    }
  }

  async function signInWithPassword(event) {
    event.preventDefault();
    const email = els.emailInput.value.trim();
    const password = els.passwordInput.value;
    if (!email) {
      showToast("Enter your email first.", "error");
      return;
    }
    if (!password) {
      await signInWithMagicLink();
      return;
    }
    setBusy(true);
    try {
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setSession(data.session);
      await loadRows();
    } catch (error) {
      showToast(formatError(error), "error");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    setBusy(true);
    try {
      await client.auth.signOut();
      setSession(null);
      state.rows = [];
      state.selectedId = null;
      renderQueue();
      renderDetail();
    } finally {
      setBusy(false);
    }
  }

  function bindEvents() {
    els.magicLinkButton.addEventListener("click", signInWithMagicLink);
    els.authForm.addEventListener("submit", signInWithPassword);
    els.signOutButton.addEventListener("click", signOut);
    els.refreshButton.addEventListener("click", loadRows);
    els.repairLaunchButton.addEventListener("click", repairLaunchRows);
    els.statusFilter.addEventListener("change", async () => {
      state.statusFilter = els.statusFilter.value;
      await loadRows();
    });
    els.signalList.addEventListener("click", (event) => {
      const button = event.target.closest(".signal-row");
      if (!button) return;
      state.selectedId = button.dataset.id;
      renderQueue();
      renderDetail();
    });
    els.detailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      updateSelected({}, "Saved.");
    });
    els.approveButton.addEventListener("click", () => {
      updateSelected(
        {
          status: "approved",
          confidence: optionalText("confidence") || "Verified by moderator",
          reviewer_note: optionalText("reviewer_note") || `Approved in moderator console on ${new Date().toISOString()}.`,
        },
        "Approved.",
      );
    });
    els.rejectButton.addEventListener("click", () => {
      updateSelected(
        {
          status: "rejected",
          reviewer_note: optionalText("reviewer_note") || `Rejected in moderator console on ${new Date().toISOString()}.`,
        },
        "Rejected.",
      );
    });
  }

  async function init() {
    bindEvents();
    if (!client || !config.supabaseUrl || !config.supabaseAnonKey) {
      showToast("Supabase is not configured in config.js.", "error");
      return;
    }

    const { data } = await client.auth.getSession();
    setSession(data.session);
    client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) loadRows();
    });
    if (data.session) await loadRows();
  }

  init();
})();

const i18n = {
  en: {
    eyebrow: "OSINT map",
    title: "Russia fuel stress",
    live: "Live",
    demo: "Demo",
    metricRegions: "stress regions",
    metricStations: "stations at risk",
    metricLoss: "RUB bn/day",
    searchLabel: "Search",
    searchPlaceholder: "Region, city, asset, source",
    layerAll: "All",
    layerStations: "Gas stations",
    layerRefineries: "Refineries",
    layerRegions: "Regions",
    critical: "Critical",
    serious: "Serious",
    watch: "Watch",
    uploadTitle: "Signal upload",
    localOnly: "local",
    coordsLabel: "Coordinates",
    typeLabel: "Type",
    optionStation: "Gas station",
    optionInfra: "Infrastructure",
    optionRegion: "Regional signal",
    noteLabel: "Description",
    notePlaceholder: "40+ car queue, no AI-95, diesel by voucher",
    placeLabel: "Region/city",
    placePlaceholder: "Irkutsk Oblast, Angarsk",
    mediaLabel: "Media URL",
    videoFileLabel: "Video file",
    chooseFileButton: "Choose file",
    noFileChosen: "No file chosen",
    videoUploadDisabled: "Video upload is not configured. Use media URL.",
    videoTooLarge: "Video is too large. Use a link or a smaller file.",
    videoInvalidType: "Only MP4, WebM and MOV video files are supported.",
    videoMaxSize: "Max size",
    uploadingVideo: "Uploading video...",
    videoUploadedRetry: "Video uploaded. Signal submit failed, retry with the generated media URL.",
    signalDateLabel: "Signal date",
    issueLabel: "Problem",
    issueTypeLabel: "Problem",
    problemFilterLabel: "Problem type",
    issueAll: "All problems",
    issueNoGasoline: "No gasoline",
    issueNoDiesel: "No diesel",
    issueLongQueues: "Long queues",
    issuePurchaseLimits: "Purchase limits",
    issuePriceSpike: "Price spike",
    issueStationClosure: "Station closures",
    issueRegionalRationing: "Regional rationing",
    issueInfrastructureDamage: "Infrastructure damage",
    issueUnconfirmed: "Unconfirmed anomaly",
    stationIntelTitle: "Station intel",
    stationIntelHint: "optional, for gas-station signals",
    fuelStatusLabel: "Fuel status",
    fuelStatusUnknown: "Unknown",
    fuelStatusAvailable: "Fuel available",
    fuelStatusPartial: "Some grades missing",
    fuelStatusDry: "No fuel",
    fuelStatusLimit: "Limit or voucher sale",
    fuelDiesel: "Diesel",
    fuelLpg: "LPG",
    queueLabel: "Queue",
    queueUnknown: "Unknown",
    queueNone: "No queue",
    queueShort: "2-5 cars",
    queueMedium: "6-15 cars",
    queueLong: "15+ cars",
    queueExtreme: "Road queue",
    priceLabel: "Price or limit",
    pricePlaceholder: "AI-95 82 RUB, limit 30 L",
    stationStatusPrefix: "Station status",
    fuelGradesPrefix: "Reported fuel",
    queuePrefix: "Queue",
    pricePrefix: "Price or limit",
    roundPublic: "Round public map point",
    addSignal: "Add to map",
    submitReview: "Submit for review",
    lossTitle: "Damage counter",
    copyX: "Copy X post",
    copied: "Copied",
    legendInfra: "refinery / infrastructure",
    selectedEyebrow: "Selected item",
    overviewTitle: "Russia overview",
    overviewSubtitle: "Gas stations, refineries, regional rationing and uploaded videos",
    emptyDetailTitle: "Click a point or region",
    emptyDetailText: "The map shows aggregated public signals. Exact sensitive infrastructure coordinates are not exposed.",
    localSignal: "User signal",
    newSignal: "new signal",
    noDescription: "No description added",
    localConfidence: "User signal, unverified",
    noPlace: "Place not provided",
    noFuel: "not specified",
    openSource: "Open source",
    verification: "Verification",
    fuel: "Fuel",
    stressIndex: "Stress index",
    stationsRisk: "stations at risk",
    modelAssessment: "Model assessment",
    regionalAggregation: "Regional aggregation",
    signalSelected: "Signal selected",
    promptCopy: "Copy text",
    localModeHint: "Public sync is not connected.",
    publicMode: "public sync",
    localMode: "local demo",
    publicModeReady: "Public submissions go to review.",
    syncOffline: "Public sync is offline. Saved locally.",
    submittedForReview: "Submitted for review.",
    submitFailed: "Could not submit publicly. Saved locally.",
  },
  ru: {
    eyebrow: "OSINT карта",
    title: "Топливный стресс России",
    live: "Live",
    demo: "Demo",
    metricRegions: "регионов с сигналами",
    metricStations: "АЗС в зонах риска",
    metricLoss: "млрд руб/день, оценка",
    searchLabel: "Поиск",
    searchPlaceholder: "Регион, город, объект, источник",
    layerAll: "Все",
    layerStations: "АЗС",
    layerRefineries: "НПЗ",
    layerRegions: "Регионы",
    critical: "Критично",
    serious: "Серьезно",
    watch: "Наблюдение",
    uploadTitle: "Загрузка сигнала",
    localOnly: "локально",
    coordsLabel: "Координаты",
    typeLabel: "Тип",
    optionStation: "АЗС",
    optionInfra: "Инфраструктура",
    optionRegion: "Региональный сигнал",
    noteLabel: "Описание",
    notePlaceholder: "Очередь 40+ машин, АИ-95 нет, дизель по талонам",
    placeLabel: "Регион/город",
    placePlaceholder: "Иркутская область, Ангарск",
    mediaLabel: "Медиа URL",
    videoFileLabel: "Видеофайл",
    chooseFileButton: "Выберите файл",
    noFileChosen: "Файл не выбран",
    videoUploadDisabled: "Загрузка видео не настроена. Используйте ссылку на медиа.",
    videoTooLarge: "Видео слишком большое. Используйте ссылку или файл меньше.",
    uploadingVideo: "Загружаю видео...",
    signalDateLabel: "Дата сигнала",
    issueLabel: "Проблема",
    issueTypeLabel: "Проблема",
    problemFilterLabel: "Тип проблемы",
    issueAll: "Все проблемы",
    issueNoGasoline: "Нет бензина",
    issueNoDiesel: "Нет дизеля",
    issueLongQueues: "Длинные очереди",
    issuePurchaseLimits: "Лимиты покупки",
    issuePriceSpike: "Рост цены",
    issueStationClosure: "Закрытие АЗС",
    issueRegionalRationing: "Региональное нормирование",
    issueInfrastructureDamage: "Повреждение инфраструктуры",
    issueUnconfirmed: "Неподтвержденная аномалия",
    stationIntelTitle: "Статус АЗС",
    stationIntelHint: "необязательно, только для АЗС",
    fuelStatusLabel: "Наличие топлива",
    fuelStatusUnknown: "Неизвестно",
    fuelStatusAvailable: "Топливо есть",
    fuelStatusPartial: "Часть марок отсутствует",
    fuelStatusDry: "Топлива нет",
    fuelStatusLimit: "Лимит или талоны",
    fuelDiesel: "Дизель",
    fuelLpg: "Газ",
    queueLabel: "Очередь",
    queueUnknown: "Неизвестно",
    queueNone: "Нет очереди",
    queueShort: "2-5 машин",
    queueMedium: "6-15 машин",
    queueLong: "15+ машин",
    queueExtreme: "Очередь на дороге",
    priceLabel: "Цена или лимит",
    pricePlaceholder: "АИ-95 82 руб, лимит 30 л",
    stationStatusPrefix: "Статус АЗС",
    fuelGradesPrefix: "Марки топлива",
    queuePrefix: "Очередь",
    pricePrefix: "Цена или лимит",
    roundPublic: "Округлять точку на публичной карте",
    addSignal: "Добавить на карту",
    submitReview: "Отправить на проверку",
    lossTitle: "Счетчик ущерба",
    copyX: "Текст для X",
    copied: "Скопировано",
    legendInfra: "НПЗ / инфраструктура",
    selectedEyebrow: "Выбранный объект",
    overviewTitle: "Вся Россия",
    overviewSubtitle: "АЗС, НПЗ, региональные ограничения и пользовательские видео",
    emptyDetailTitle: "Нажмите на точку или регион",
    emptyDetailText: "Карта показывает агрегированные публичные сигналы. Точные координаты чувствительной инфраструктуры не раскрываются.",
    localSignal: "Пользовательский сигнал",
    newSignal: "новый сигнал",
    noDescription: "Описание не добавлено",
    localConfidence: "Пользовательский сигнал, не верифицирован",
    noPlace: "Место не указано",
    noFuel: "не указано",
    openSource: "Открыть источник",
    verification: "Проверка",
    fuel: "Топливо",
    stressIndex: "Индекс стресса",
    stationsRisk: "АЗС под риском",
    modelAssessment: "Модельная оценка",
    regionalAggregation: "Региональная агрегация",
    signalSelected: "Сигнал выбран",
    promptCopy: "Скопируйте текст",
  },
};

const sources = {
  ap: {
    en: "AP, June 29, 2026: public reporting on shortages, refinery strikes and gas-station queues.",
    ru: "AP, 29 июня 2026: публичные сообщения о дефиците, ударах по НПЗ и очередях на АЗС.",
  },
  guardian: {
    en: "The Guardian, June 29, 2026: reporting on rationing, Crimea shortages and refinery damage.",
    ru: "The Guardian, 29 июня 2026: сообщения о нормировании, дефиците в Крыму и повреждениях НПЗ.",
  },
  rferl: {
    en: "RFE/RL, June 2026: gas-station queues, vouchers and sales restrictions in occupied Crimea.",
    ru: "RFE/RL, июнь 2026: очереди, талоны и ограничения продаж на АЗС в оккупированном Крыму.",
  },
  rferlSpread: {
    en: "RFE/RL, June 24, 2026: 55 of 83 Russian federal entities had restrictions or company-level limits; nearly two dozen more had local shortage reports.",
    ru: "RFE/RL, 24 июня 2026: в 55 из 83 субъектов РФ были ограничения или лимиты компаний; еще почти в двух десятках были локальные сообщения о дефиците.",
  },
  rferlCrimeaHalt: {
    en: "RFE/RL, June 21, 2026: occupied Crimea halted fuel sales to private individuals and businesses, except state agencies.",
    ru: "RFE/RL, 21 июня 2026: в оккупированном Крыму остановили продажу топлива частным лицам и бизнесу, кроме госструктур.",
  },
  guardianShortage: {
    en: "The Guardian, June 29, 2026: Putin acknowledged fuel shortages; analysts estimate about a quarter of refining capacity hit and a 15% supply shortfall.",
    ru: "The Guardian, 29 июня 2026: Путин признал дефицит топлива; аналитики оценивают удар примерно по четверти переработки и 15% дефицит предложения.",
  },
  meduzaRegions: {
    en: "Meduza, June 24-27, 2026: restrictions and shortage indicators across Central, Volga, Southern and Siberian regions.",
    ru: "Meduza, 24-27 июня 2026: ограничения и признаки дефицита в Центральном, Приволжском, Южном и Сибирском регионах.",
  },
  reutersEvening: {
    en: "Reuters, June 29 evening: shortages spread to Moscow, Crimea and more Russian regions, with queues, station closures and price spikes.",
    ru: "Reuters, вечер 29 июня 2026: дефицит расширился до Москвы, Крыма и других регионов, есть очереди, закрытия АЗС и скачки цен.",
  },
  reutersFactbox: {
    en: "Reuters factbox, June 29, 2026: regional fuel disruptions, limits and canister bans across Russia.",
    ru: "Фактбокс Reuters, 29 июня 2026: региональные перебои, лимиты и запреты на заправку канистр в России.",
  },
  reutersIndiaImports: {
    en: "Reuters, July 1, 2026: Russia started seaborne gasoline imports from India to tackle domestic shortages.",
    ru: "Reuters, 1 июля 2026: Россия начала морской импорт бензина из Индии для покрытия внутреннего дефицита.",
  },
  reutersKazakhstanAid: {
    en: "Reuters, July 1, 2026: Kazakhstan is sending 50,000 tons of gasoline to Russia as humanitarian aid.",
    ru: "Reuters, 1 июля 2026: Казахстан отправляет 50 000 тонн бензина в Россию как гуманитарную помощь.",
  },
  kremlinFuel: {
    en: "Kremlin, June 28, 2026: official meeting on domestic fuel supply and acknowledged station queues.",
    ru: "Кремль, 28 июня 2026: совещание по снабжению внутреннего рынка топливом и признанные очереди на АЗС.",
  },
  minenergoBalance: {
    en: "Russian Energy Ministry, June 29, 2026: gasoline output, exports and stock data from the monitoring meeting.",
    ru: "Минэнерго РФ, 29 июня 2026: данные штаба по производству бензина, экспорту и товарным остаткам.",
  },
  rosstatPrices: {
    en: "Rosstat, June 16-22, 2026: weekly fuel price growth before the June 29 evening reports.",
    ru: "Росстат, 16-22 июня 2026: недельный рост цен на топливо перед вечерними сообщениями 29 июня.",
  },
  seed: {
    en: "Seed OSINT: starter dataset, verify before treating as fact.",
    ru: "Seed OSINT: стартовая выборка, требует верификации перед публикацией как факт.",
  },
  public: {
    en: "Public submission, approved after moderation.",
    ru: "Публичный сигнал, подтвержден после модерации.",
  },
  local: {
    en: "Local browser signal, not public.",
    ru: "Локальный сигнал браузера, не публичный.",
  },
};

const BASELINE_REPORTED_REGIONS = 56;
let lang = localStorage.getItem("fuelCrisisLang") || "en";
const syncConfig = window.FUEL_MAP_CONFIG || {};
const publicSyncEnabled = Boolean(
  syncConfig.mode === "supabase" &&
    syncConfig.supabaseUrl &&
    syncConfig.supabaseAnonKey &&
    syncConfig.publicTable,
);

const T = (en, ru) => ({ en, ru });

const issueLabels = {
  no_gasoline: "issueNoGasoline",
  no_diesel: "issueNoDiesel",
  long_queues: "issueLongQueues",
  purchase_limits: "issuePurchaseLimits",
  price_spike: "issuePriceSpike",
  station_closure: "issueStationClosure",
  regional_rationing: "issueRegionalRationing",
  infrastructure_damage: "issueInfrastructureDamage",
  unconfirmed_anomaly: "issueUnconfirmed",
};

function issueLabel(value) {
  return tr(issueLabels[value] || "issueUnconfirmed");
}

function inferIssueType(item) {
  const text = `${searchableText(item.title)} ${searchableText(item.status)} ${searchableText(item.fuel)}`.toLowerCase();
  if (item.type === "infrastructure") return "infrastructure_damage";
  if (text.includes("diesel") || text.includes("дизел")) return "no_diesel";
  if (text.includes("limit") || text.includes("ration") || text.includes("талон") || text.includes("лимит") || text.includes("нормирован")) return "purchase_limits";
  if (text.includes("price") || text.includes("цен")) return "price_spike";
  if (text.includes("closed") || text.includes("closure") || text.includes("закрыт")) return "station_closure";
  if (text.includes("queue") || text.includes("очеред")) return "long_queues";
  if (text.includes("gasoline") || text.includes("ai-") || text.includes("аи-") || text.includes("бензин")) return "no_gasoline";
  return "unconfirmed_anomaly";
}

function issueTypeOf(item) {
  return item.issueType || item.issue_type || inferIssueType(item);
}

function selectedFuelGrades() {
  return [...document.querySelectorAll('input[name="fuelGrade"]:checked')].map((input) => input.value)
}

function stationStatusLabel(value) {
  const labels = {
    available: "fuelStatusAvailable",
    partial: "fuelStatusPartial",
    dry: "fuelStatusDry",
    limit: "fuelStatusLimit",
    none: "queueNone",
    short: "queueShort",
    medium: "queueMedium",
    long: "queueLong",
    extreme: "queueExtreme",
  }
  return tr(labels[value] || "fuelStatusUnknown")
}

function buildStationIntel() {
  const fuelStatus = document.getElementById("fuelStatusInput")?.value || ""
  const queue = document.getElementById("queueInput")?.value || ""
  const price = document.getElementById("priceInput")?.value.trim() || ""
  const grades = selectedFuelGrades()
  const parts = []

  if (fuelStatus) parts.push(`${tr("stationStatusPrefix")}: ${stationStatusLabel(fuelStatus)}`)
  if (grades.length) parts.push(`${tr("fuelGradesPrefix")}: ${grades.join(", ")}`)
  if (queue) parts.push(`${tr("queuePrefix")}: ${stationStatusLabel(queue)}`)
  if (price) parts.push(`${tr("pricePrefix")}: ${price}`)

  const fuelSummary = grades.length ? grades.join(" / ") : fuelStatus ? stationStatusLabel(fuelStatus) : tr("noFuel")

  return {
    text: parts.join(". "),
    fuel: fuelSummary,
    hasStationIntel: Boolean(parts.length),
  }
}

const seedEvents = [
  {
    id: "russia-india-seaborne-gasoline-imports",
    type: "region",
    title: T("Russia: seaborne gasoline imports from India reported", "Russia: seaborne gasoline imports from India reported"),
    region: T("Russia fuel import logistics", "Russia fuel import logistics"),
    place: T("Russian seaborne import corridor, rounded to Black Sea port area", "Russian seaborne import corridor, rounded to Black Sea port area"),
    lat: 44.72,
    lng: 37.77,
    severity: "serious",
    status: T("Reuters screenshot report: Russia has started seaborne gasoline imports from India to tackle shortages, with at least 60,000 metric tons dispatched and another source citing two tankers carrying 30,000 to 40,000 tons each", "Reuters screenshot report: Russia has started seaborne gasoline imports from India to tackle shortages, with at least 60,000 metric tons dispatched and another source citing two tankers carrying 30,000 to 40,000 tons each"),
    fuel: T("Seaborne gasoline imports / shortage mitigation", "Seaborne gasoline imports / shortage mitigation"),
    lossWeight: 6,
    impactMode: "support",
    impactMetric: "60,000+ t",
    impactMetricLabel: T("gasoline dispatched", "gasoline dispatched"),
    impactScope: T("Seaborne import corridor, exact discharge port not mapped", "Seaborne import corridor, exact discharge port not mapped"),
    impactCaveat: T("Supply-relief signal: do not read as affected stations or direct economic loss", "Supply-relief signal: do not read as affected stations or direct economic loss"),
    confidence: T("High for Reuters report screenshot, exact discharge port and cargo timing not mapped", "High for Reuters report screenshot, exact discharge port and cargo timing not mapped"),
    source: "reutersIndiaImports",
    sourceUrl: "https://x.com/bayraktar_1love/status/2072294656612635088",
    mediaUrl: "media/russia-gasoline-imports-from-india-reuters-2026-07-01.jpg",
    observedAt: "2026-07-01",
    issueType: "regional_rationing",
  },
  {
    id: "russia-kazakhstan-gasoline-aid-shipment",
    type: "region",
    title: T("Russia: Kazakhstan gasoline aid shipment reported", "Russia: Kazakhstan gasoline aid shipment reported"),
    region: T("Russia / Kazakhstan fuel supply route", "Russia / Kazakhstan fuel supply route"),
    place: T("Kazakhstan to Russia fuel aid corridor, rounded to Orenburg region", "Kazakhstan to Russia fuel aid corridor, rounded to Orenburg region"),
    lat: 51.77,
    lng: 55.1,
    severity: "serious",
    status: T("X report citing Reuters says Kazakhstan is sending 50,000 tons of gasoline to Russia as humanitarian aid", "X report citing Reuters says Kazakhstan is sending 50,000 tons of gasoline to Russia as humanitarian aid"),
    fuel: T("Gasoline aid shipment / shortage mitigation", "Gasoline aid shipment / shortage mitigation"),
    lossWeight: 5,
    impactMode: "support",
    impactMetric: "50,000 t",
    impactMetricLabel: T("planned gasoline aid", "planned gasoline aid"),
    impactScope: T("July-August supply support, corridor rounded to Orenburg region", "July-August supply support, corridor rounded to Orenburg region"),
    impactCaveat: T("Supply-relief signal from industry sources: not a local outage metric", "Supply-relief signal from industry sources: not a local outage metric"),
    confidence: T("Medium to high: public X post attributes the figure to Reuters, direct Reuters article not attached", "Medium to high: public X post attributes the figure to Reuters, direct Reuters article not attached"),
    source: "reutersKazakhstanAid",
    sourceUrl: "https://x.com/Maks_NAFO_FELLA/status/2072332812313629103",
    observedAt: "2026-07-01",
    issueType: "regional_rationing",
  },
  {
    id: "crimea-queue",
    type: "station",
    title: T("Crimea: private fuel sales halted", "Крым: продажи топлива частникам остановлены"),
    region: T("Crimea", "Крым"),
    place: T("Simferopol / peninsula roads", "Симферополь / трассы полуострова"),
    lat: 44.95,
    lng: 34.1,
    severity: "critical",
    status: T("Sales halted for private buyers and businesses; state agencies exempted", "Продажи частным покупателям и бизнесу остановлены; госструктуры исключены"),
    fuel: T("AI-92 / AI-95", "АИ-92 / АИ-95"),
    lossWeight: 9,
    confidence: T("High", "Высокая"),
    observedAt: "2026-06-21",
    source: "rferlCrimeaHalt",
    sourceUrl: "https://www.rferl.org/a/fuel-crisis-hits-russian-occupied-crimea/33773280.html",
    issueType: "regional_rationing",
  },
  {
    id: "sevastopol-evening-price-spike",
    type: "station",
    title: T("Sevastopol: limited fuel sale price spike", "Севастополь: скачок цены при ограниченной продаже"),
    region: T("Sevastopol / Crimea", "Севастополь / Крым"),
    place: T("Sevastopol, rounded", "Севастополь, округлено"),
    lat: 44.61,
    lng: 33.52,
    severity: "critical",
    status: T("Reuters reported limited fuel sales near 189 RUB/L, almost triple the regular level", "Reuters сообщил об ограниченной продаже около 189 руб/л, почти втрое выше обычного уровня"),
    fuel: T("Gasoline", "Бензин"),
    lossWeight: 9,
    confidence: T("High", "Высокая"),
    source: "reutersEvening",
    sourceUrl: "https://www.straitstimes.com/world/europe/fuel-shortages-spread-to-more-parts-of-russia-as-ukrainian-attacks-bite",
    observedAt: "2026-06-29",
    issueType: "price_spike",
  },
  {
    id: "yalta-gasoline-1000-rub-price-spike",
    type: "station",
    title: T("Yalta: gasoline reportedly sold for 1,000 RUB/L", "Yalta: gasoline reportedly sold for 1,000 RUB/L"),
    region: T("Crimea", "Crimea"),
    place: T("Yalta city area, rounded", "Yalta city area, rounded"),
    lat: 44.50,
    lng: 34.17,
    severity: "critical",
    status: T("X video report: occupied Yalta is reportedly breaking fuel price records, with gasoline sold for 1,000 rubles per liter", "X video report: occupied Yalta is reportedly breaking fuel price records, with gasoline sold for 1,000 rubles per liter"),
    fuel: T("Gasoline price spike", "Gasoline price spike"),
    lossWeight: 8,
    confidence: T("Medium: public X video source, city-level location only", "Medium: public X video source, city-level location only"),
    source: "seed",
    sourceUrl: "https://x.com/Maks_NAFO_FELLA/status/2071945877220921636",
    mediaUrl: "media/yalta-gasoline-price-1000-rub-maks-2071945877220921636.mp4",
    observedAt: "2026-06-30",
    issueType: "price_spike",
  },
  {
    id: "irkutsk-rationing",
    type: "station",
    title: T("Irkutsk Oblast: 50 L/day limit", "Иркутская область: лимит 50 л/день"),
    region: T("Irkutsk Oblast", "Иркутская область"),
    place: T("Irkutsk / Angarsk", "Иркутск / Ангарск"),
    lat: 52.3,
    lng: 104.3,
    severity: "serious",
    status: T("Sales rationing", "Нормирование продаж"),
    fuel: T("Gasoline", "Бензин"),
    lossWeight: 6,
    confidence: T("Medium", "Средняя"),
    observedAt: "2026-06-29",
    source: "guardian",
    sourceUrl: "https://www.theguardian.com/world/2026/jun/29/ukraine-war-briefing-putin-expects-us-negotiators-moscow-fuel-rationing-siberia",
    issueType: "purchase_limits",
  },
  {
    id: "krasnodar-stations",
    type: "station",
    title: T("Krasnodar Krai: pressure on stations", "Краснодарский край: давление на АЗС"),
    region: T("Krasnodar Krai", "Краснодарский край"),
    place: T("Krasnodar / Slavyansk-on-Kuban", "Краснодар / Славянск-на-Кубани"),
    lat: 45.05,
    lng: 38.98,
    severity: "serious",
    status: T("Queues near disruption zones", "Очереди рядом с зонами перебоев"),
    fuel: T("Gasoline", "Бензин"),
    lossWeight: 6,
    confidence: T("Medium", "Средняя"),
    observedAt: "2026-06-29",
    source: "ap",
    sourceUrl: "https://apnews.com/article/88370faa1a49504438388f2854d7afd3",
    issueType: "long_queues",
  },
  {
    id: "krasnodar-queue-spot-resale-vijesti-video",
    type: "region",
    title: T("Krasnodar: fuel-queue spots reportedly resold", "Krasnodar: fuel-queue spots reportedly resold"),
    region: T("Krasnodar Krai", "Krasnodar Krai"),
    place: T("Krasnodar city area, rounded", "Krasnodar city area, rounded"),
    lat: 45.04,
    lng: 38.97,
    severity: "serious",
    status: T("X video report: people have started selling spots in gas-station queues, with 3,000 rubles reportedly asked for one spot in Krasnodar and 5,000 rubles or more in some other cities", "X video report: people have started selling spots in gas-station queues, with 3,000 rubles reportedly asked for one spot in Krasnodar and 5,000 rubles or more in some other cities"),
    fuel: T("Fuel queue resale / informal queue market", "Fuel queue resale / informal queue market"),
    lossWeight: 4,
    confidence: T("Medium: public X video source, exact stations and other cities not independently verified", "Medium: public X video source, exact stations and other cities not independently verified"),
    source: "seed",
    sourceUrl: "https://x.com/Vijesti11111/status/2072622893800816815",
    mediaUrl: "media/krasnodar-queue-spot-resale-vijesti-2072622893800816815.mp4",
    observedAt: "2026-07-02",
    issueType: "long_queues",
  },
  {
    id: "anapa-fuel-station-queue-maks-video",
    type: "station",
    title: T("Anapa: long fuel station queue reported", "Anapa: long fuel station queue reported"),
    region: T("Krasnodar Krai", "Krasnodar Krai"),
    place: T("Anapa city area, rounded", "Anapa city area, rounded"),
    lat: 44.90,
    lng: 37.32,
    severity: "serious",
    status: T("X video report: long queue at a fuel station in Anapa, Russia", "X video report: long queue at a fuel station in Anapa, Russia"),
    fuel: T("Gasoline queue, product unspecified", "Gasoline queue, product unspecified"),
    lossWeight: 4,
    confidence: T("Medium: public X video source, city-level location only", "Medium: public X video source, city-level location only"),
    source: "seed",
    sourceUrl: "https://x.com/Maks_NAFO_FELLA/status/2071924113350791303",
    mediaUrl: "media/anapa-fuel-station-queue-maks-2071924113350791303.mp4",
    observedAt: "2026-06-30",
    issueType: "long_queues",
  },
  {
    id: "moscow-oblast-queues",
    type: "station",
    title: T("Moscow / Moscow Oblast: supply risk after refinery hits", "Москва / Московская область: риск поставок после ударов по НПЗ"),
    region: T("Moscow Oblast", "Московская область"),
    place: T("Moscow supply zone, rounded", "Зона снабжения Москвы, округлено"),
    lat: 55.75,
    lng: 37.62,
    severity: "serious",
    status: T("Refinery supply disruption risk; station-level queues need video confirmation", "Риск перебоев поставок с НПЗ; очереди на уровне АЗС требуют видео-проверки"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 6,
    confidence: T("Medium", "Средняя"),
    observedAt: "2026-06-24",
    source: "rferlSpread",
    sourceUrl: "https://www.rferl.org/a/ukraine-russia-oil-refinery-fuel-shortages-kremlin/33787903.html",
    issueType: "regional_rationing",
  },
  {
    id: "moscow-evening-shortage",
    type: "station",
    title: T("Moscow: queues and closed stations reported", "Москва: сообщения об очередях и закрытых АЗС"),
    region: T("Moscow / Moscow Oblast", "Москва / Московская область"),
    place: T("Moscow city, rounded", "Москва, округлено"),
    lat: 55.78,
    lng: 37.64,
    severity: "critical",
    status: T("Reuters reported queues, some closed gas stations and private-station prices above 80 RUB/L", "Reuters сообщил об очередях, отдельных закрытых АЗС и ценах у частных АЗС выше 80 руб/л"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 9,
    confidence: T("High", "Высокая"),
    source: "reutersEvening",
    sourceUrl: "https://www.straitstimes.com/world/europe/fuel-shortages-spread-to-more-parts-of-russia-as-ukrainian-attacks-bite",
    observedAt: "2026-06-29",
    issueType: "long_queues",
  },
  {
    id: "moscow-aurus-fuel-queue-nasutki-video",
    type: "station",
    title: T("Moscow: government Aurus cars queue for fuel", "Moscow: government Aurus cars queue for fuel"),
    region: T("Moscow / Moscow Oblast", "Moscow / Moscow Oblast"),
    place: T("Moscow city, rounded", "Moscow city, rounded"),
    lat: 55.78,
    lng: 37.64,
    severity: "critical",
    status: T("X video report: government Aurus cars with flashing lights are reportedly waiting in gas-station queues in Moscow", "X video report: government Aurus cars with flashing lights are reportedly waiting in gas-station queues in Moscow"),
    fuel: T("Gasoline / official vehicle queue", "Gasoline / official vehicle queue"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, city-level location only", "Medium: public X video source, city-level location only"),
    source: "seed",
    sourceUrl: "https://x.com/NaSutkiOdessa/status/2072004071679013202",
    mediaUrl: "media/moscow-aurus-fuel-queue-nasutki-2072004071679013202.mp4",
    observedAt: "2026-06-30",
    issueType: "long_queues",
  },
  {
    id: "mytishchi-imperial-opened-fuel-tanks-video",
    type: "incident",
    title: T("Mytishchi: fuel tanks reportedly opened at residential complex", "Mytishchi: fuel tanks reportedly opened at residential complex"),
    region: T("Moscow Oblast", "Moscow Oblast"),
    place: T("Imperial Mytishchi residential complex area, rounded", "Imperial Mytishchi residential complex area, rounded"),
    lat: 55.91,
    lng: 37.73,
    severity: "watch",
    status: T("X video report: fuel tanks of several cars were suspiciously opened at the Imperial Mytishchi residential complex", "X video report: fuel tanks of several cars were suspiciously opened at the Imperial Mytishchi residential complex"),
    fuel: T("Gasoline theft / fuel scarcity side effect", "Gasoline theft / fuel scarcity side effect"),
    lossWeight: 2,
    confidence: T("Low to medium: public X video source, incident details and motive unconfirmed", "Low to medium: public X video source, incident details and motive unconfirmed"),
    source: "seed",
    sourceUrl: "https://x.com/LXSummer1/status/2072269588264567030",
    mediaUrl: "media/mytishchi-imperial-opened-fuel-tanks-lxsummer-2072269588264567030.mp4",
    observedAt: "2026-07-01",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "far-east-stress",
    type: "region",
    title: T("Far East: early shortage signs", "Дальний Восток: ранние признаки дефицита"),
    region: T("Far East", "Дальний Восток"),
    place: T("Khabarovsk / Primorye", "Хабаровск / Приморье"),
    lat: 48.48,
    lng: 135.07,
    severity: "watch",
    status: T("Price growth and irregular supply", "Рост цен и неритмичные поставки"),
    fuel: T("Gasoline", "Бензин"),
    lossWeight: 4,
    confidence: T("Low", "Низкая"),
    source: "seed",
    observedAt: "2026-06-24",
    issueType: "price_spike",
  },
  {
    id: "zabaykalsky-amur-r297-gasoline-unavailable",
    type: "region",
    title: T("Zabaykalsky Krai: R-297 Amur gasoline unavailability report", "Zabaykalsky Krai: R-297 Amur gasoline unavailability report"),
    region: T("Zabaykalsky Krai", "Zabaykalsky Krai"),
    place: T("R-297 Amur highway, 107 km near Urulga, rounded", "R-297 Amur highway, 107 km near Urulga, rounded"),
    lat: 51.88,
    lng: 114.66,
    severity: "serious",
    status: T("Public X and Telegram video report: truck driver says he stopped with cargo on the Amur highway because gasoline was unavailable. Location is rounded and medium confidence.", "Public X and Telegram video report: truck driver says he stopped with cargo on the Amur highway because gasoline was unavailable. Location is rounded and medium confidence."),
    fuel: T("Gasoline unavailable, diesel status unclear", "Gasoline unavailable, diesel status unclear"),
    lossWeight: 3,
    confidence: T("Medium: public X and Telegram video source, geolocation inferred from visible road context", "Medium: public X and Telegram video source, geolocation inferred from visible road context"),
    source: "seed",
    sourceUrl: "https://x.com/Sandy_mustache/status/2071569090104180760",
    observedAt: "2026-06-29",
    issueType: "no_gasoline",
  },
  {
    id: "chita-truck-fuel-line-gerashchenko-video",
    type: "station",
    title: T("Chita: huge truck line for fuel reported", "Chita: huge truck line for fuel reported"),
    region: T("Zabaykalsky Krai", "Zabaykalsky Krai"),
    place: T("Chita city area, rounded", "Chita city area, rounded"),
    lat: 52.03,
    lng: 113.41,
    severity: "serious",
    status: T("X video report shows a huge line of trucks waiting to get fuel in Chita, indicating fuel access stress and possible logistics disruption", "X video report shows a huge line of trucks waiting to get fuel in Chita, indicating fuel access stress and possible logistics disruption"),
    fuel: T("Truck fuel queue, product unspecified", "Truck fuel queue, product unspecified"),
    lossWeight: 4,
    confidence: T("Medium: public X video source, city-level location only", "Medium: public X video source, city-level location only"),
    source: "seed",
    sourceUrl: "https://x.com/Gerashchenko_en/status/2071679019393888326",
    mediaUrl: "media/chita-truck-fuel-line-gerashchenko-2071679019393888326.mp4",
    observedAt: "2026-06-29",
    issueType: "long_queues",
  },
  {
    id: "atamanovka-28-hour-4km-fuel-queue-bayraktar-video",
    type: "station",
    title: T("Atamanovka: 28-hour wait and 4.3 km fuel queue reported", "Atamanovka: 28-hour wait and 4.3 km fuel queue reported"),
    region: T("Zabaykalsky Krai", "Zabaykalsky Krai"),
    place: T("Atamanovka fuel station area, rounded", "Atamanovka fuel station area, rounded"),
    lat: 51.93,
    lng: 113.63,
    severity: "critical",
    status: T("X video report: a driver in Atamanovka leaves a gas station after finally refueling following a 28-hour wait, then drives past a reported 4.3 km queue for the same station", "X video report: a driver in Atamanovka leaves a gas station after finally refueling following a 28-hour wait, then drives past a reported 4.3 km queue for the same station"),
    fuel: T("Gasoline queue / 28-hour wait", "Gasoline queue / 28-hour wait"),
    lossWeight: 6,
    confidence: T("Medium: public X video source, settlement location confirmed from open sources, exact station not independently verified", "Medium: public X video source, settlement location confirmed from open sources, exact station not independently verified"),
    source: "seed",
    sourceUrl: "https://x.com/bayraktar_1love/status/2072448471823499770",
    mediaUrl: "media/atamanovka-28-hour-4km-fuel-queue-bayraktar-2072448471823499770.mp4",
    observedAt: "2026-07-02",
    issueType: "long_queues",
  },
  {
    id: "transbaikal-no-gasoline-two-day-line-heroiam-video",
    type: "region",
    title: T("Transbaikal Krai: two-day line at the only fuel station reported", "Transbaikal Krai: two-day line at the only fuel station reported"),
    region: T("Zabaykalsky Krai", "Zabaykalsky Krai"),
    place: T("Remote Transbaikal fuel corridor, rounded", "Remote Transbaikal fuel corridor, rounded"),
    lat: 52.0,
    lng: 116.0,
    severity: "critical",
    status: T("X video report: no gasoline in the area, with drivers reportedly waiting for two days at the only gas station with fuel within roughly 500 km", "X video report: no gasoline in the area, with drivers reportedly waiting for two days at the only gas station with fuel within roughly 500 km"),
    fuel: T("No gasoline / two-day queue", "No gasoline / two-day queue"),
    lossWeight: 6,
    confidence: T("Medium: public X video source, exact station location not verified", "Medium: public X video source, exact station location not verified"),
    source: "seed",
    sourceUrl: "https://x.com/Heroiam_Slava/status/2071957835433267466",
    mediaUrl: "media/transbaikal-no-gasoline-two-day-line-heroiam-2071957835433267466.mp4",
    observedAt: "2026-06-30",
    issueType: "no_gasoline",
  },
  {
    id: "chita-transbaikal-no-gasoline-35000-place",
    type: "region",
    title: T("Transbaikal Krai: gasoline absent around Chita, queue places resold", "Transbaikal Krai: gasoline absent around Chita, queue places resold"),
    region: T("Zabaykalsky Krai", "Zabaykalsky Krai"),
    place: T("Remote Transbaikal fuel corridor, rounded", "Remote Transbaikal fuel corridor, rounded"),
    lat: 52.0,
    lng: 116.0,
    severity: "critical",
    status: T("X video report: no gasoline in Chita and roughly 500 km around it, queues stretch for kilometers, people wait for a second day, and the first place in line is reportedly offered for 35,000 rubles", "X video report: no gasoline in Chita and roughly 500 km around it, queues stretch for kilometers, people wait for a second day, and the first place in line is reportedly offered for 35,000 rubles"),
    fuel: T("No gasoline / queue resale", "No gasoline / queue resale"),
    lossWeight: 7,
    confidence: T("Medium: public X video source, exact station location not verified", "Medium: public X video source, exact station location not verified"),
    source: "seed",
    sourceUrl: "https://x.com/anarhist363/status/2071963353312894990",
    mediaUrl: "media/chita-transbaikal-no-gasoline-35000-place-anarhist-2071963353312894990.mp4",
    observedAt: "2026-06-30",
    issueType: "no_gasoline",
  },
  {
    id: "central-volga-restrictions",
    type: "region",
    title: T("Central Russia / Volga: limits and shortage cluster", "Центральная Россия / Поволжье: кластер лимитов и дефицита"),
    region: T("Central Russia / Volga", "Центральная Россия / Поволжье"),
    place: T("Tatarstan, Samara, Saratov, Ulyanovsk, Mordovia, rounded", "Татарстан, Самара, Саратов, Ульяновск, Мордовия, округлено"),
    lat: 54.7,
    lng: 48.2,
    severity: "serious",
    status: T("Regional and company-level sales restrictions reported across multiple regions", "Региональные и корпоративные ограничения продаж отмечены в нескольких регионах"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 7,
    confidence: T("Medium", "Средняя"),
    observedAt: "2026-06-27",
    source: "meduzaRegions",
    sourceUrl: "https://meduza.io/feature/2026/06/27/karta-benzinovogo-krizisa-v-kakih-regionah-rossii-topliva-ne-hvataet-osobenno-silno",
    issueType: "regional_rationing",
  },
  {
    id: "bashkortostan-30-liters-per-car-idel-realii",
    type: "region",
    title: T("Bashkortostan: 30-liter fuel limit per vehicle reported", "Bashkortostan: 30-liter fuel limit per vehicle reported"),
    region: T("Republic of Bashkortostan", "Republic of Bashkortostan"),
    place: T("Bashkortostan, rounded to Ufa region", "Bashkortostan, rounded to Ufa region"),
    lat: 54.74,
    lng: 55.97,
    severity: "serious",
    status: T("X video report from Idel.Realii describes fuel restrictions in Bashkortostan, including a 30-liter limit per vehicle", "X video report from Idel.Realii describes fuel restrictions in Bashkortostan, including a 30-liter limit per vehicle"),
    fuel: T("Gasoline / diesel purchase limit", "Gasoline / diesel purchase limit"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, exact station locations not verified", "Medium: public X video source, exact station locations not verified"),
    source: "seed",
    sourceUrl: "https://x.com/Idel_Realii/status/2071603588728537473",
    mediaUrl: "media/bashkortostan-30-liters-per-car-idel-realii-2071603588728537473.mp4",
    observedAt: "2026-06-29",
    issueType: "regional_rationing",
  },
  {
    id: "tula-tulanefteprodukt-no-gasoline-video",
    type: "region",
    title: T("Tula: Tulanefteprodukt gasoline shortage warning", "Tula: Tulanefteprodukt gasoline shortage warning"),
    region: T("Tula Oblast", "Tula Oblast"),
    place: T("Tula city area, rounded", "Tula city area, rounded"),
    lat: 54.19,
    lng: 37.62,
    severity: "serious",
    status: T("X video report references PAO Tulanefteprodukt and claims that gasoline will not be available in Tula", "X video report references PAO Tulanefteprodukt and claims that gasoline will not be available in Tula"),
    fuel: T("Gasoline availability warning", "Gasoline availability warning"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, supplier context and exact station impact need confirmation", "Medium: public X video source, supplier context and exact station impact need confirmation"),
    source: "seed",
    sourceUrl: "https://x.com/dedzaebal/status/2072277435727442082",
    mediaUrl: "media/tula-tulanefteprodukt-no-gasoline-dedzaebal-2072277435727442082.mp4",
    observedAt: "2026-07-01",
    issueType: "no_gasoline",
  },
  {
    id: "western-central-factbox",
    type: "region",
    title: T("Western and Central Russia: fresh shortage factbox", "Запад и центр России: свежая сводка дефицита"),
    region: T("Western and Central Russia", "Запад и центр России"),
    place: T("Belgorod, Bryansk, Vladimir, Kursk, Lipetsk, Oryol, Tver, rounded", "Белгород, Брянск, Владимир, Курск, Липецк, Орел, Тверь, округлено"),
    lat: 53.9,
    lng: 36.6,
    severity: "serious",
    status: T("Reuters factbox lists regional disruptions, limits or local shortages across multiple oblasts", "Фактбокс Reuters перечисляет региональные перебои, лимиты или локальный дефицит в нескольких областях"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 7,
    confidence: T("High", "Высокая"),
    source: "reutersFactbox",
    sourceUrl: "https://ru.themoscowtimes.com/2026/06/29/factbox-pereboi-v-postavkakh-topliva-na-vnutrennem-rynke-rf-v-2026g-a199459",
    observedAt: "2026-06-29",
    issueType: "regional_rationing",
  },
  {
    id: "southern-factbox",
    type: "region",
    title: T("Rostov and Volgograd corridor: reported disruptions", "Ростовско-волгоградский коридор: сообщения о перебоях"),
    region: T("Rostov / Volgograd", "Ростов / Волгоград"),
    place: T("Rostov Oblast and Volgograd Oblast, rounded", "Ростовская и Волгоградская области, округлено"),
    lat: 48.8,
    lng: 42.4,
    severity: "serious",
    status: T("Reuters factbox includes southern-region fuel disruptions and logistics stress", "Фактбокс Reuters включает перебои с топливом и логистический стресс в южных регионах"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 7,
    confidence: T("High", "Высокая"),
    source: "reutersFactbox",
    sourceUrl: "https://ru.themoscowtimes.com/2026/06/29/factbox-pereboi-v-postavkakh-topliva-na-vnutrennem-rynke-rf-v-2026g-a199459",
    observedAt: "2026-06-29",
    issueType: "regional_rationing",
  },
  {
    id: "rostov-lukoil-malinovsky-fuel-queue",
    type: "station",
    title: T("Rostov-on-Don: long queue at Lukoil on Malinovsky", "Rostov-on-Don: long queue at Lukoil on Malinovsky"),
    region: T("Rostov Oblast", "Rostov Oblast"),
    place: T("Rostov-on-Don, Malinovsky area, rounded", "Rostov-on-Don, Malinovsky area, rounded"),
    lat: 47.23,
    lng: 39.61,
    severity: "serious",
    status: T("X video report: evening long queue at a Lukoil station on Malinovsky, described as one of the few still open while many other stations have run out of fuel or closed", "X video report: evening long queue at a Lukoil station on Malinovsky, described as one of the few still open while many other stations have run out of fuel or closed"),
    fuel: T("Gasoline queue / station closures nearby", "Gasoline queue / station closures nearby"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, point rounded to Malinovsky area", "Medium: public X video source, point rounded to Malinovsky area"),
    source: "seed",
    sourceUrl: "https://x.com/LXSummer1/status/2071713778950082789",
    mediaUrl: "media/rostov-lukoil-malinovsky-fuel-queue-lxsummer-2071713778950082789.mp4",
    observedAt: "2026-06-30",
    issueType: "long_queues",
  },
  {
    id: "kaliningrad-novgorod-factbox",
    type: "region",
    title: T("Northwest Russia: Kaliningrad and Novgorod signals", "Северо-Запад: сигналы по Калининграду и Новгороду"),
    region: T("Northwest Russia", "Северо-Запад России"),
    place: T("Kaliningrad Oblast and Novgorod Oblast, rounded", "Калининградская и Новгородская области, округлено"),
    lat: 58.5,
    lng: 31.3,
    severity: "watch",
    status: T("Reuters factbox lists local shortage or restriction signals in northwest regions", "Фактбокс Reuters перечисляет локальные сигналы дефицита или ограничений в северо-западных регионах"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 4,
    confidence: T("Medium", "Средняя"),
    source: "reutersFactbox",
    sourceUrl: "https://ru.themoscowtimes.com/2026/06/29/factbox-pereboi-v-postavkakh-topliva-na-vnutrennem-rynke-rf-v-2026g-a199459",
    observedAt: "2026-06-29",
    issueType: "regional_rationing",
  },
  {
    id: "st-petersburg-leningrad-carriers-fuel-shortage",
    type: "region",
    title: T("St Petersburg / Leningrad: carriers seek help over fuel shortages", "St Petersburg / Leningrad: carriers seek help over fuel shortages"),
    region: T("St Petersburg / Leningrad Oblast", "St Petersburg / Leningrad Oblast"),
    place: T("St Petersburg and Leningrad Oblast, rounded", "St Petersburg and Leningrad Oblast, rounded"),
    lat: 59.94,
    lng: 30.32,
    severity: "serious",
    status: T("Screenshot report: regional carriers are appealing to authorities over fuel shortages and exchange price rises, warning that transport companies, ambulance companies and agricultural enterprises may be affected by supply disruptions and penalties", "Screenshot report: regional carriers are appealing to authorities over fuel shortages and exchange price rises, warning that transport companies, ambulance companies and agricultural enterprises may be affected by supply disruptions and penalties"),
    fuel: T("Transport fuel supply / emergency services exposure", "Transport fuel supply / emergency services exposure"),
    lossWeight: 6,
    confidence: T("Medium: user-provided screenshot of regional press article, exact service impact still needs local confirmation", "Medium: user-provided screenshot of regional press article, exact service impact still needs local confirmation"),
    source: "seed",
    mediaUrl: "media/st-petersburg-leningrad-carriers-fuel-shortage-2026-07-01.jpg",
    observedAt: "2026-07-01",
    issueType: "regional_rationing",
  },
  {
    id: "kaliningrad-fuel-queues-chriso-video",
    type: "region",
    title: T("Kaliningrad: fuel queues, rationing and pump failures reported", "Kaliningrad: fuel queues, rationing and pump failures reported"),
    region: T("Kaliningrad Oblast", "Kaliningrad Oblast"),
    place: T("Kaliningrad Oblast, rounded", "Kaliningrad Oblast, rounded"),
    lat: 54.7,
    lng: 20.5,
    severity: "serious",
    status: T("X video report claims fuel prices soared, rationing was introduced, gas stations had kilometre-long queues, many stations had no fuel, and extreme heat was causing pump failures", "X video report claims fuel prices soared, rationing was introduced, gas stations had kilometre-long queues, many stations had no fuel, and extreme heat was causing pump failures"),
    fuel: T("Gasoline / diesel, availability and rationing reported", "Gasoline / diesel, availability and rationing reported"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, needs local corroboration", "Medium: public X video source, needs local corroboration"),
    source: "seed",
    sourceUrl: "https://x.com/ChrisO_wiki/status/2071677103037198632",
    mediaUrl: "https://ajvhsopxivqgdvkqytik.supabase.co/storage/v1/object/public/signal-videos/pending/2026-06-29-kaliningrad-chriso-2071677103037198632.mp4",
    observedAt: "2026-06-29",
    issueType: "regional_rationing",
  },
  {
    id: "kaliningrad-daily-fuel-queue-vijesti-video",
    type: "region",
    title: T("Kaliningrad: daily long fuel queue reported", "Kaliningrad: daily long fuel queue reported"),
    region: T("Kaliningrad Oblast", "Kaliningrad Oblast"),
    place: T("Kaliningrad city area, rounded", "Kaliningrad city area, rounded"),
    lat: 54.71,
    lng: 20.51,
    severity: "serious",
    status: T("X video report describes a long fuel queue in Kaliningrad as a daily routine", "X video report describes a long fuel queue in Kaliningrad as a daily routine"),
    fuel: T("Gasoline queue", "Gasoline queue"),
    lossWeight: 4,
    confidence: T("Medium: public X video source, exact station location not verified", "Medium: public X video source, exact station location not verified"),
    source: "seed",
    sourceUrl: "https://x.com/Vijesti11111/status/2071983878210744570",
    mediaUrl: "media/kaliningrad-daily-fuel-queue-vijesti-2071983878210744570.mp4",
    observedAt: "2026-06-30",
    issueType: "long_queues",
  },
  {
    id: "kaliningrad-gasoline-shortage-comment-screenshot",
    type: "region",
    title: T("Kaliningrad: local comment reports week-long gasoline shortages", "Kaliningrad: local comment reports week-long gasoline shortages"),
    region: T("Kaliningrad Oblast", "Kaliningrad Oblast"),
    place: T("Kaliningrad Oblast, rounded", "Kaliningrad Oblast, rounded"),
    lat: 54.7,
    lng: 20.5,
    severity: "serious",
    status: T("User-provided screenshot: local comment says Kaliningrad also has gasoline problems, queues at gas stations, insufficient gasoline for everyone, and many stations without gasoline for a week", "User-provided screenshot: local comment says Kaliningrad also has gasoline problems, queues at gas stations, insufficient gasoline for everyone, and many stations without gasoline for a week"),
    fuel: T("Gasoline shortage / queues", "Gasoline shortage / queues"),
    lossWeight: 4,
    confidence: T("Medium: user-provided screenshot of local comment, not station-level verified", "Medium: user-provided screenshot of local comment, not station-level verified"),
    source: "seed",
    mediaUrl: "media/kaliningrad-gasoline-shortage-comment-2026-06-30.jpg",
    observedAt: "2026-06-30",
    issueType: "no_gasoline",
  },
  {
    id: "petrozavodsk-gas-station-death-nexta-image",
    type: "station",
    title: T("Petrozavodsk: death reported at gas station", "Petrozavodsk: death reported at gas station"),
    region: T("Republic of Karelia", "Republic of Karelia"),
    place: T("Petrozavodsk city area, rounded", "Petrozavodsk city area, rounded"),
    lat: 61.79,
    lng: 34.36,
    severity: "critical",
    status: T("X image report: a 75-year-old man died at a gas station in Petrozavodsk after paying for fuel and filling his tank almost to the top, with preliminary reports citing cardiac arrest", "X image report: a 75-year-old man died at a gas station in Petrozavodsk after paying for fuel and filling his tank almost to the top, with preliminary reports citing cardiac arrest"),
    fuel: T("Gas station human impact / gasoline", "Gas station human impact / gasoline"),
    lossWeight: 5,
    confidence: T("Medium: public X image source, station-level address not verified", "Medium: public X image source, station-level address not verified"),
    source: "seed",
    sourceUrl: "https://x.com/nexta_tv/status/2071971527319302295",
    mediaUrl: "media/petrozavodsk-gas-station-death-nexta-2071971527319302295.jpg",
    observedAt: "2026-06-30",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "crimea-poshtove-traction-substation",
    type: "infrastructure",
    title: T("Crimea: Poshtove railway traction substation hit", "Crimea: Poshtove railway traction substation hit"),
    region: T("Crimea", "Crimea"),
    place: T("Poshtove railway station area, rounded", "Poshtove railway station area, rounded"),
    lat: 44.83,
    lng: 33.96,
    severity: "critical",
    status: T("X report: Ukrainian attack drones reportedly hit the traction substation powering part of the Sevastopol-Simferopol railway overnight, setting it ablaze and knocking it offline", "X report: Ukrainian attack drones reportedly hit the traction substation powering part of the Sevastopol-Simferopol railway overnight, setting it ablaze and knocking it offline"),
    fuel: T("Railway power / electric traction substation", "Railway power / electric traction substation"),
    lossWeight: 7,
    confidence: T("Medium: public X report with attached satellite context, public point rounded to the Poshtove area", "Medium: public X report with attached satellite context, public point rounded to the Poshtove area"),
    source: "seed",
    sourceUrl: "https://x.com/Osinttechnical/status/2071812706026270833",
    observedAt: "2026-06-30",
    issueType: "infrastructure_damage",
  },
  {
    id: "russia-euro-2-gasoline-quality-waiver",
    type: "region",
    title: T("Russia: Euro 2 gasoline quality waiver proposed", "Russia: Euro 2 gasoline quality waiver proposed"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel policy signal, not a point incident", "Nationwide fuel policy signal, not a point incident"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X report: authorities may allow Euro 2-standard gasoline production for one year to increase supplies by avoiding deeper refining, with potential risk for modern vehicles", "X report: authorities may allow Euro 2-standard gasoline production for one year to increase supplies by avoiding deeper refining, with potential risk for modern vehicles"),
    fuel: T("Gasoline quality / Euro 2 waiver", "Gasoline quality / Euro 2 waiver"),
    lossWeight: 5,
    confidence: T("Medium: public X report, policy signal pending primary regulatory confirmation", "Medium: public X report, policy signal pending primary regulatory confirmation"),
    source: "seed",
    sourceUrl: "https://x.com/nexta_tv/status/2071669147117756763",
    mediaUrl: "media/russia-euro-2-gasoline-quality-nexta-2071669147117756763.jpg",
    observedAt: "2026-06-29",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "russia-euro-2-kommersant-screenshot",
    type: "region",
    title: T("Russia: Kommersant reports Euro-2 gasoline approval expected", "Russia: Kommersant reports Euro-2 gasoline approval expected"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel policy signal, not a point incident", "Nationwide fuel policy signal, not a point incident"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("Screenshot report: Kommersant says Russia is considering Euro-2 gasoline approval next year to saturate the market, increasing supply without deep refining while raising risks for modern cars", "Screenshot report: Kommersant says Russia is considering Euro-2 gasoline approval next year to saturate the market, increasing supply without deep refining while raising risks for modern cars"),
    fuel: T("Gasoline quality / Euro-2 policy", "Gasoline quality / Euro-2 policy"),
    lossWeight: 5,
    confidence: T("Medium: user-provided screenshot citing Kommersant, primary article not attached", "Medium: user-provided screenshot citing Kommersant, primary article not attached"),
    source: "seed",
    mediaUrl: "media/russia-euro-2-kommersant-screenshot-2026-06-30.jpg",
    observedAt: "2026-06-30",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "russia-euro-3-fuel-car-breakdowns",
    type: "region",
    title: T("Russia: car breakdowns reported after lower fuel standard", "Russia: car breakdowns reported after lower fuel standard"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel-quality damage signal, location not verified", "Nationwide fuel-quality damage signal, location not verified"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X video report: motorists complain about warning lights, detonation, power loss and failed fuel pumps after refueling with older Euro-3 gasoline at gas stations", "X video report: motorists complain about warning lights, detonation, power loss and failed fuel pumps after refueling with older Euro-3 gasoline at gas stations"),
    fuel: T("Fuel quality / Euro-3 vehicle damage and pump failure reports", "Fuel quality / Euro-3 vehicle damage and pump failure reports"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, reports are not tied to a verified station location", "Medium: public X video source, reports are not tied to a verified station location"),
    source: "seed",
    sourceUrl: "https://x.com/Beefeater_Fella/status/2071882519767572620",
    mediaUrl: "media/russia-euro-3-fuel-car-breakdowns-beefeater-2071882519767572620.mp4",
    observedAt: "2026-06-30",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "russia-euro-3-check-engine-nexta-video",
    type: "region",
    title: T("Russia: Check Engine warnings linked to Euro-3 gasoline", "Russia: Check Engine warnings linked to Euro-3 gasoline"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel-quality damage signal, location not verified", "Nationwide fuel-quality damage signal, location not verified"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X video report: drivers report Check Engine warnings, misfires, knocking, power loss and attempts to dilute low-grade Euro-3 fuel with higher-octane gasoline, with turbocharged and direct-injection engines especially exposed", "X video report: drivers report Check Engine warnings, misfires, knocking, power loss and attempts to dilute low-grade Euro-3 fuel with higher-octane gasoline, with turbocharged and direct-injection engines especially exposed"),
    fuel: T("Fuel quality / Euro-3 Check Engine and misfire reports", "Fuel quality / Euro-3 Check Engine and misfire reports"),
    lossWeight: 5,
    confidence: T("Medium: public X video source, reports are not tied to a verified station location", "Medium: public X video source, reports are not tied to a verified station location"),
    source: "seed",
    sourceUrl: "https://x.com/nexta_tv/status/2071921504229417131",
    mediaUrl: "media/russia-euro-3-check-engine-nexta-2071921504229417131.mp4",
    observedAt: "2026-06-30",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "russia-fcc-refinery-targeting-campaign",
    type: "infrastructure",
    title: T("Russia: FCC refinery units targeted as prolonged fuel-risk driver", "Russia: FCC refinery units targeted as prolonged fuel-risk driver"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide refinery network context, rounded", "Nationwide refinery network context, rounded"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X analysis: Ukraine is reportedly targeting fluid catalytic cracking units at Russian refineries, aiming at complex machinery that Russia may struggle to repair or replace quickly", "X analysis: Ukraine is reportedly targeting fluid catalytic cracking units at Russian refineries, aiming at complex machinery that Russia may struggle to repair or replace quickly"),
    fuel: T("Refinery FCC units / gasoline output risk", "Refinery FCC units / gasoline output risk"),
    lossWeight: 6,
    confidence: T("Medium: public X analysis with explanatory image, strategic pattern needs facility-level corroboration", "Medium: public X analysis with explanatory image, strategic pattern needs facility-level corroboration"),
    source: "seed",
    sourceUrl: "https://x.com/ChrisO_wiki/status/2071860127112593893",
    mediaUrl: "media/russia-fcc-refinery-targeting-chriso-2071860127112593893.jpg",
    observedAt: "2026-06-30",
    issueType: "infrastructure_damage",
  },
  {
    id: "russia-fuel-line-parking-ticket-enforcement",
    type: "region",
    title: T("Russia: parking tickets issued to vehicles waiting for fuel", "Russia: parking tickets issued to vehicles waiting for fuel"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel-queue enforcement signal, location not verified", "Nationwide fuel-queue enforcement signal, location not verified"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X video report: vehicles waiting in fuel lines are reportedly being ticketed en masse where queues pass through no-parking zones, adding enforcement pressure around shortages", "X video report: vehicles waiting in fuel lines are reportedly being ticketed en masse where queues pass through no-parking zones, adding enforcement pressure around shortages"),
    fuel: T("Fuel queue enforcement / product unspecified", "Fuel queue enforcement / product unspecified"),
    lossWeight: 3,
    confidence: T("Medium: public X video source, exact location not verified", "Medium: public X video source, exact location not verified"),
    source: "seed",
    sourceUrl: "https://x.com/maria_drutska/status/2071857014896996567",
    mediaUrl: "media/russia-fuel-line-parking-tickets-drutska-2071857014896996567.mp4",
    observedAt: "2026-06-30",
    issueType: "long_queues",
  },
  {
    id: "russia-fuel-line-dump-truck-ramming",
    type: "region",
    title: T("Russia: dump truck rams cars after fuel-line wait", "Russia: dump truck rams cars after fuel-line wait"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel-queue social impact, location not verified", "Nationwide fuel-queue social impact, location not verified"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X video report: an enraged dump truck driver, reportedly fed up after hours in a fuel line, rammed 17 passenger cars", "X video report: an enraged dump truck driver, reportedly fed up after hours in a fuel line, rammed 17 passenger cars"),
    fuel: T("Fuel queue social impact", "Fuel queue social impact"),
    lossWeight: 4,
    confidence: T("Medium: public X video source, exact location not verified", "Medium: public X video source, exact location not verified"),
    source: "seed",
    sourceUrl: "https://x.com/VictorKvert2008/status/2071951957074366536",
    mediaUrl: "media/russia-fuel-line-dump-truck-ramming-victorkvert-2071951957074366536.mp4",
    observedAt: "2026-06-30",
    issueType: "long_queues",
  },
  {
    id: "russia-duma-fuel-restrictions-task-force",
    type: "region",
    title: T("Russia: Duma says fuel restrictions may persist", "Russia: Duma says fuel restrictions may persist"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide fuel policy messaging signal", "Nationwide fuel policy messaging signal"),
    lat: 58.5,
    lng: 76.0,
    severity: "serious",
    status: T("X video report: after Putin established a task force to stabilize fuel supplies, Duma messaging reportedly said supplies will not stabilize quickly and Russians should get used to fuel restrictions", "X video report: after Putin established a task force to stabilize fuel supplies, Duma messaging reportedly said supplies will not stabilize quickly and Russians should get used to fuel restrictions"),
    fuel: T("Fuel restrictions / official messaging", "Fuel restrictions / official messaging"),
    lossWeight: 4,
    confidence: T("Medium: public X video source, policy messaging signal rather than point incident", "Medium: public X video source, policy messaging signal rather than point incident"),
    source: "seed",
    sourceUrl: "https://x.com/maria_drutska/status/2071836630525329498",
    mediaUrl: "media/russia-duma-fuel-restrictions-task-force-drutska-2071836630525329498.mp4",
    observedAt: "2026-06-30",
    issueType: "regional_rationing",
  },
  {
    id: "russia-ambulances-idle-fuel-shortage",
    type: "region",
    title: T("Russia: ambulances reportedly idle due to fuel shortage", "Russia: ambulances reportedly idle due to fuel shortage"),
    region: T("Russia nationwide", "Russia nationwide"),
    place: T("Nationwide emergency-services fuel impact, location not verified", "Nationwide emergency-services fuel impact, location not verified"),
    lat: 58.5,
    lng: 76.0,
    severity: "critical",
    status: T("X video report: a Russian medic says the fuel shortage is causing a crisis for ambulances, with vehicles standing idle despite fuel supposedly being reserved for emergency services", "X video report: a Russian medic says the fuel shortage is causing a crisis for ambulances, with vehicles standing idle despite fuel supposedly being reserved for emergency services"),
    fuel: T("Emergency-services fuel availability", "Emergency-services fuel availability"),
    lossWeight: 7,
    confidence: T("Medium: public X video source, exact location not verified", "Medium: public X video source, exact location not verified"),
    source: "seed",
    sourceUrl: "https://x.com/ChrisO_wiki/status/2071951547571855455",
    mediaUrl: "media/russia-ambulances-idle-fuel-shortage-chriso-2071951547571855455.mp4",
    observedAt: "2026-06-30",
    issueType: "regional_rationing",
  },
  {
    id: "russia-official-evening-balance",
    type: "region",
    title: T("Russia: official fuel balance update", "Россия: официальное обновление топливного баланса"),
    region: T("Russia nationwide", "Россия, общероссийский уровень"),
    place: T("Nationwide aggregation, rounded", "Общероссийская агрегация, округлено"),
    lat: 58.5,
    lng: 76.0,
    severity: "watch",
    status: T("Energy Ministry reported 3.0215 Mt gasoline output in June, 1.6334 Mt stocks on June 29 and 176.5 kt June gasoline exports", "Минэнерго сообщило о 3,0215 млн т выпуска бензина в июне, 1,6334 млн т остатков на 29 июня и 176,5 тыс т экспорта бензина за июнь"),
    fuel: T("Gasoline balance", "Баланс бензина"),
    lossWeight: 3,
    confidence: T("High", "Высокая"),
    source: "minenergoBalance",
    sourceUrl: "https://minenergo.gov.ru/press-center/news-and-events?news-item=itogi-ocherednogo-shtaba-po-monitoringu-proizvodstva-i-potrebleniya-nefteproduktov-v-rossii-22",
    observedAt: "2026-06-29",
    issueType: "unconfirmed_anomaly",
  },
  {
    id: "kremlin-fuel-acknowledgement",
    type: "region",
    title: T("Federal level: queues acknowledged", "Федеральный уровень: очереди признаны"),
    region: T("Russia nationwide", "Россия, общероссийский уровень"),
    place: T("Government fuel meeting", "Совещание по топливу"),
    lat: 57.8,
    lng: 65.0,
    severity: "serious",
    status: T("Official meeting acknowledged supply problems and gas-station queues while describing the situation as manageable", "На официальном совещании признали проблемы снабжения и очереди на АЗС, одновременно называя ситуацию управляемой"),
    fuel: T("Gasoline / diesel", "Бензин / дизель"),
    lossWeight: 5,
    confidence: T("High", "Высокая"),
    source: "kremlinFuel",
    sourceUrl: "https://www.kremlin.ru/events/president/news/80174/print",
    observedAt: "2026-06-28",
    issueType: "regional_rationing",
  },
  {
    id: "slavyansk-refinery",
    type: "infrastructure",
    title: T("Slavyansk-on-Kuban: refinery fire after strike", "Славянск-на-Кубани: пожар на НПЗ после удара"),
    region: T("Krasnodar Krai", "Краснодарский край"),
    place: T("Slavyansk-on-Kuban, rounded", "Славянск-на-Кубани, округлено"),
    lat: 45.25,
    lng: 38.12,
    severity: "critical",
    status: T("Refining disruption", "Повреждение переработки"),
    fuel: T("Refinery", "НПЗ"),
    lossWeight: 8,
    confidence: T("High", "Высокая"),
    observedAt: "2026-06-28",
    source: "ap",
    sourceUrl: "https://apnews.com/article/88370faa1a49504438388f2854d7afd3",
    issueType: "infrastructure_damage",
  },
  {
    id: "slavyansk-refinery-still-burning-bayraktar-image",
    type: "infrastructure",
    title: T("Slavyansk-on-Kuban: refinery smoke plume still visible", "Slavyansk-on-Kuban: refinery smoke plume still visible"),
    region: T("Krasnodar Krai", "Krasnodar Krai"),
    place: T("Slavyansk-on-Kuban, rounded", "Slavyansk-on-Kuban, rounded"),
    lat: 45.25,
    lng: 38.12,
    severity: "critical",
    status: T("X image report: large smoke plume still visible from Slavyansk-on-Kuban after the refinery fire, indicating continued burning or aftermath on June 30", "X image report: large smoke plume still visible from Slavyansk-on-Kuban after the refinery fire, indicating continued burning or aftermath on June 30"),
    fuel: T("Refinery fire / smoke plume", "Refinery fire / smoke plume"),
    lossWeight: 6,
    confidence: T("Medium: public X image source, city-level incident context", "Medium: public X image source, city-level incident context"),
    source: "seed",
    sourceUrl: "https://x.com/bayraktar_1love/status/2071909622806437921",
    mediaUrl: "media/slavyansk-refinery-still-burning-bayraktar-2071909622806437921.jpg",
    observedAt: "2026-06-30",
    issueType: "infrastructure_damage",
  },
  {
    id: "kstovo-lukoil-refinery-process-unit-fire-osinttechnical-video",
    type: "infrastructure",
    title: T("Kstovo: Lukoil refinery process unit fire reported", "Kstovo: Lukoil refinery process unit fire reported"),
    region: T("Nizhny Novgorod Oblast", "Nizhny Novgorod Oblast"),
    place: T("Kstovo refinery area, rounded", "Kstovo refinery area, rounded"),
    lat: 56.13,
    lng: 44.18,
    severity: "critical",
    status: T("X video report: Ukrainian attack drones reportedly hit Russia's Kstovo oil refinery, setting a process unit ablaze", "X video report: Ukrainian attack drones reportedly hit Russia's Kstovo oil refinery, setting a process unit ablaze"),
    fuel: T("Oil refinery process unit fire", "Oil refinery process unit fire"),
    lossWeight: 8,
    confidence: T("Medium: public X video source, refinery location confirmed from open sources, damage extent needs further confirmation", "Medium: public X video source, refinery location confirmed from open sources, damage extent needs further confirmation"),
    source: "seed",
    sourceUrl: "https://x.com/Osinttechnical/status/2072529990575329411",
    mediaUrl: "media/kstovo-lukoil-refinery-process-unit-fire-osinttechnical-2072529990575329411.mp4",
    observedAt: "2026-07-02",
    issueType: "infrastructure_damage",
  },
  {
    id: "kstovo-avt6-unit-capacity-offline-jayinkyiv-image",
    type: "infrastructure",
    title: T("Kstovo: AVT-6 unit reportedly taken offline", "Kstovo: AVT-6 unit reportedly taken offline"),
    region: T("Nizhny Novgorod Oblast", "Nizhny Novgorod Oblast"),
    place: T("Kstovo refinery area, rounded", "Kstovo refinery area, rounded"),
    lat: 56.13,
    lng: 44.18,
    severity: "critical",
    status: T("X image analysis claims the struck facility was the AVT-6 unit, taking 190,000 barrels per day offline, about 53% of the plant's processing capacity", "X image analysis claims the struck facility was the AVT-6 unit, taking 190,000 barrels per day offline, about 53% of the plant's processing capacity"),
    fuel: T("AVT-6 primary processing unit / claimed capacity offline", "AVT-6 primary processing unit / claimed capacity offline"),
    lossWeight: 9,
    confidence: T("Medium: public X image analysis, capacity claim needs corroboration from plant or industry reporting", "Medium: public X image analysis, capacity claim needs corroboration from plant or industry reporting"),
    source: "seed",
    sourceUrl: "https://x.com/JayinKyiv/status/2072548832533963213",
    mediaUrl: "media/kstovo-avt6-unit-190kbpd-capacity-jayinkyiv-2072548832533963213.jpg",
    observedAt: "2026-07-02",
    issueType: "infrastructure_damage",
  },
  {
    id: "kstovo-smoke-plume-supernova-image",
    type: "infrastructure",
    title: T("Kstovo: smoke plume photo linked to refinery strike", "Kstovo: smoke plume photo linked to refinery strike"),
    region: T("Nizhny Novgorod Oblast", "Nizhny Novgorod Oblast"),
    place: T("Kstovo refinery area, rounded", "Kstovo refinery area, rounded"),
    lat: 56.13,
    lng: 44.18,
    severity: "serious",
    status: T("User-provided image shows a smoke plume reportedly connected to the Kstovo refinery strike area", "User-provided image shows a smoke plume reportedly connected to the Kstovo refinery strike area"),
    fuel: T("Refinery smoke plume / visual evidence", "Refinery smoke plume / visual evidence"),
    lossWeight: 3,
    confidence: T("Low to medium: user-provided image, visible smoke but exact viewpoint and timestamp need confirmation", "Low to medium: user-provided image, visible smoke but exact viewpoint and timestamp need confirmation"),
    source: "seed",
    mediaUrl: "media/kstovo-smoke-plume-supernova-2026-07-02.jpg",
    observedAt: "2026-07-02",
    issueType: "infrastructure_damage",
  },
  {
    id: "novoazovsk-bridge-land-corridor",
    type: "infrastructure",
    title: T("Novoazovsk: bridge damage on land corridor to Crimea", "Novoazovsk: bridge damage on land corridor to Crimea"),
    region: T("Donetsk Oblast", "Donetsk Oblast"),
    place: T("Novoazovsk bridge, rounded", "Novoazovsk bridge, rounded"),
    lat: 47.12,
    lng: 38.07,
    severity: "critical",
    status: T("X report: Russian sources claim the bridge partially collapsed after a second Ukrainian drone strike. The same bridge was reportedly attacked on June 15, with earlier damage limited to roadway holes. Infrastructure and logistics corridor disruption, public point rounded.", "X report: Russian sources claim the bridge partially collapsed after a second Ukrainian drone strike. The same bridge was reportedly attacked on June 15, with earlier damage limited to roadway holes. Infrastructure and logistics corridor disruption, public point rounded."),
    fuel: T("Road bridge / land logistics corridor", "Road bridge / land logistics corridor"),
    lossWeight: 8,
    confidence: T("Medium: public X report and attached imagery, exact damage state requires further confirmation", "Medium: public X report and attached imagery, exact damage state requires further confirmation"),
    source: "seed",
    sourceUrl: "https://x.com/bayraktar_1love/status/2071603971848802601",
    observedAt: "2026-06-29",
    issueType: "infrastructure_damage",
  },
  {
    id: "yaroslavl-refinery",
    type: "infrastructure",
    title: T("Yaroslavl: refinery strike publicly reported", "Ярославль: публичные сообщения об ударе по НПЗ"),
    region: T("Yaroslavl Oblast", "Ярославская область"),
    place: T("Yaroslavl, rounded", "Ярославль, округлено"),
    lat: 57.63,
    lng: 39.87,
    severity: "serious",
    status: T("Damage / repair", "Повреждение / ремонт"),
    fuel: T("Refinery", "НПЗ"),
    lossWeight: 7,
    confidence: T("Medium", "Средняя"),
    observedAt: "2026-06-28",
    source: "guardian",
    sourceUrl: "https://www.theguardian.com/world/2026/jun/29/ukraine-war-briefing-putin-expects-us-negotiators-moscow-fuel-rationing-siberia",
    issueType: "infrastructure_damage",
  },
  {
    id: "ryazan-refinery",
    type: "infrastructure",
    title: T("Ryazan: refinery watchlist, needs fresh confirmation", "Рязань: НПЗ в watchlist, нужно свежее подтверждение"),
    region: T("Ryazan Oblast", "Рязанская область"),
    place: T("Ryazan, rounded", "Рязань, округлено"),
    lat: 54.62,
    lng: 39.72,
    severity: "watch",
    status: T("Infrastructure exposure, not a current confirmed incident", "Инфраструктурный риск, не текущий подтвержденный инцидент"),
    fuel: T("Refinery", "НПЗ"),
    lossWeight: 2,
    confidence: T("Low", "Низкая"),
    source: "seed",
    observedAt: "2026-06-29",
    issueType: "infrastructure_damage",
  },
  {
    id: "volgograd-refinery",
    type: "infrastructure",
    title: T("Volgograd: refinery watchlist, needs fresh confirmation", "Волгоград: НПЗ в watchlist, нужно свежее подтверждение"),
    region: T("Volgograd Oblast", "Волгоградская область"),
    place: T("Volgograd, rounded", "Волгоград, округлено"),
    lat: 48.7,
    lng: 44.5,
    severity: "watch",
    status: T("Infrastructure exposure, not a current confirmed incident", "Инфраструктурный риск, не текущий подтвержденный инцидент"),
    fuel: T("Refinery", "НПЗ"),
    lossWeight: 2,
    confidence: T("Low", "Низкая"),
    source: "seed",
    observedAt: "2026-06-29",
    issueType: "infrastructure_damage",
  },
];

const regionStress = [
  { region: T("Crimea", "Крым"), lat: 45.3, lng: 34.4, severity: "critical", score: 96, affectedStations: 220, note: T("Private fuel sales halted; state agencies exempted.", "Продажи топлива частникам остановлены; госструктуры исключены.") },
  { region: T("Irkutsk Oblast", "Иркутская область"), lat: 56.0, lng: 104.8, severity: "serious", score: 68, affectedStations: 95, note: T("50 L/day limit in public reporting.", "Лимит 50 л/день в публичных сообщениях.") },
  { region: T("Krasnodar Krai", "Краснодарский край"), lat: 45.4, lng: 39.0, severity: "serious", score: 64, affectedStations: 120, note: T("Supply pressure near refinery disruption.", "Давление на поставки рядом с поврежденной переработкой.") },
  { region: T("Moscow / Moscow Oblast", "Москва / Московская область"), lat: 55.7, lng: 37.3, severity: "serious", score: 57, affectedStations: 95, note: T("Supply risk from refinery disruption; point-level queues still need verification.", "Риск поставок из-за перебоев НПЗ; точечные очереди требуют верификации.") },
  { region: T("Central Russia / Volga", "Центральная Россия / Поволжье"), lat: 54.7, lng: 48.2, severity: "serious", score: 63, affectedStations: 140, note: T("Multi-region cluster of limits and shortage reports.", "Межрегиональный кластер лимитов и сообщений о дефиците.") },
  { region: T("Ivanovo Oblast", "Ивановская область"), lat: 57.1, lng: 41.0, severity: "watch", score: 31, affectedStations: 28, note: T("Social signal cluster, low confidence.", "Сигналы из соцсетей, низкая уверенность.") },
  { region: T("Far East", "Дальний Восток"), lat: 48.7, lng: 134.9, severity: "watch", score: 36, affectedStations: 70, note: T("Remote logistics raise shortage risk.", "Удаленная логистика повышает риск перебоев.") },
  { region: T("Ryazan Oblast", "Рязанская область"), lat: 54.6, lng: 39.7, severity: "serious", score: 54, affectedStations: 45, note: T("Risk from refining disruption.", "Риск от перебоев переработки.") },
  { region: T("Volgograd Oblast", "Волгоградская область"), lat: 49.1, lng: 44.6, severity: "serious", score: 56, affectedStations: 72, note: T("Southern transport corridor and refinery exposure.", "Южный транспортный коридор и НПЗ.") },
  { region: T("Moscow evening shortage", "Москва: вечерний дефицит"), lat: 55.8, lng: 37.6, severity: "critical", score: 82, affectedStations: 180, note: T("Reuters reported queues, closed stations and private-station prices above 80 RUB/L on June 29 evening.", "Reuters сообщил об очередях, закрытых АЗС и ценах у частных АЗС выше 80 руб/л вечером 29 июня.") },
  { region: T("Sevastopol price spike", "Севастополь: скачок цены"), lat: 44.6, lng: 33.5, severity: "critical", score: 94, affectedStations: 70, note: T("Limited-sale gasoline price was reported near 189 RUB/L.", "При ограниченной продаже сообщалась цена около 189 руб/л.") },
  { region: T("Western and Central Russia", "Запад и центр России"), lat: 53.9, lng: 36.6, severity: "serious", score: 72, affectedStations: 260, note: T("Reuters factbox lists disruptions or restrictions in Belgorod, Bryansk, Vladimir, Kursk, Lipetsk, Oryol and Tver oblasts.", "Фактбокс Reuters перечисляет перебои или ограничения в Белгородской, Брянской, Владимирской, Курской, Липецкой, Орловской и Тверской областях.") },
  { region: T("Southern corridor", "Южный коридор"), lat: 48.8, lng: 42.4, severity: "serious", score: 70, affectedStations: 210, note: T("Rostov and Volgograd signals point to pressure on southern road and fuel logistics.", "Сигналы Ростова и Волгограда указывают на давление на южную дорожную и топливную логистику.") },
  { region: T("Northwest shortage signals", "Северо-западные сигналы дефицита"), lat: 58.5, lng: 31.3, severity: "watch", score: 48, affectedStations: 85, note: T("Kaliningrad and Novgorod were included in the June 29 regional factbox.", "Калининград и Новгород включены в региональную сводку 29 июня.") },
  { region: T("Nationwide shortage reports", "Общероссийские сообщения о дефиците"), lat: 58.5, lng: 76.0, severity: "serious", score: 66, affectedStations: 1100, note: T("Public reporting indicates restrictions or company-level limits across 55-56 regions.", "Публичные сообщения указывают на ограничения или корпоративные лимиты в 55-56 регионах.") },
];

const state = {
  activeLayer: "all",
  activeIssue: "all",
  severities: new Set(["critical", "serious", "watch"]),
  query: "",
  localEvents: JSON.parse(localStorage.getItem("fuelCrisisSignals") || "[]"),
  publicEvents: [],
  selected: null,
  selectedTab: "overview",
};

const map = L.map("map", { zoomControl: false, preferCanvas: true }).setView([57, 74], 4);
L.control.zoom({ position: "bottomright" }).addTo(map);
L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 12,
  attribution: "&copy; OpenStreetMap &copy; CARTO",
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const regionLayer = L.layerGroup().addTo(map);

function tr(key) {
  return i18n[lang][key] || i18n.en[key] || key;
}

function textOf(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) return value[lang] || value.en || "";
  return value || "";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function searchableText(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) return Object.values(value).join(" ");
  return value || "";
}

function sourceText(sourceKey) {
  const source = sources[sourceKey];
  if (!source) return sourceKey || tr("localSignal");
  return source[lang] || source.en;
}

function applyTranslations() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = tr(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = tr(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  const badge = document.getElementById("connectionBadge");
  badge.textContent = publicSyncEnabled ? tr("live") : tr("demo");
  badge.classList.toggle("demo", !publicSyncEnabled);
  badge.title = publicSyncEnabled ? tr("publicModeReady") : tr("localModeHint");
  document.getElementById("syncMode").textContent = publicSyncEnabled ? tr("publicMode") : tr("localMode");
  document.querySelector(".primary-action").textContent = publicSyncEnabled ? tr("submitReview") : tr("addSignal");
  updateVideoFileControl()
  setSubmissionStatus(publicSyncEnabled ? tr("publicModeReady") : tr("localModeHint"));
  if (state.selected) selectItem(state.selected);
  else {
    document.getElementById("focusTitle").textContent = tr("overviewTitle");
    document.getElementById("focusSubtitle").textContent = tr("overviewSubtitle");
  }
}

function setSubmissionStatus(message, tone = "") {
  const node = document.getElementById("submissionStatus");
  node.textContent = message;
  node.className = `submission-status ${tone}`.trim();
}

function pinIcon(item) {
  const cls = ["pin", item.severity, item.type === "infrastructure" ? "infrastructure" : ""].join(" ");
  return L.divIcon({
    className: "",
    html: `<span class="${cls}" aria-hidden="true"></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });
}

function incidentIcon(incident) {
  const count = incident.signals.length;
  const iconLabels = incident.kinds.map((kind) => kind.slice(0, 1).toUpperCase()).join("");
  const place = textOf(incident.place) || textOf(incident.region) || textOf(incident.title);
  const label = `${place}, ${count} signal${count === 1 ? "" : "s"}`;
  return L.divIcon({
    className: "",
    html: `
      <span class="incident-marker" aria-label="${escapeHtml(label)}">
        <span class="incident-pin ${incident.severity}">
          <strong>${count}</strong>
          <span>${escapeHtml(iconLabels || "F")}</span>
        </span>
        <span class="incident-label">${escapeHtml(label)}</span>
      </span>
    `,
    iconSize: [150, 50],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

function severityColor(severity) {
  if (severity === "critical") return "#e04f3f";
  if (severity === "serious") return "#d7a235";
  return "#4d94c9";
}

function severityRank(severity) {
  if (severity === "critical") return 3;
  if (severity === "serious") return 2;
  return 1;
}

function incidentKeyFor(item) {
  const place = searchableText(item.place || item.region || item.title)
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, " ")
    .trim()
    .split(" ")
    .slice(0, 4)
    .join("-");
  const lat = Number(item.lat || 0).toFixed(1);
  const lng = Number(item.lng || 0).toFixed(1);
  return `${place || item.id || "signal"}:${lat}:${lng}`;
}

function signalKinds(item) {
  const text = `${searchableText(item.title)} ${searchableText(item.status)} ${searchableText(item.fuel)} ${searchableText(item.note)}`.toLowerCase();
  const kinds = new Set();
  if (item.type === "infrastructure" || text.includes("refinery") || text.includes("нпз")) kinds.add("infrastructure");
  if (text.includes("power") || text.includes("electric") || text.includes("blackout") || text.includes("substation")) kinds.add("power");
  if (text.includes("parcel") || text.includes("logistics") || text.includes("cdek") || text.includes("посыл")) kinds.add("logistics");
  if (item.type === "station" || text.includes("gasoline") || text.includes("diesel") || text.includes("fuel") || text.includes("бензин")) kinds.add("fuel");
  if (!kinds.size) kinds.add(item.type === "region" ? "fuel" : item.type);
  return [...kinds];
}

function buildIncidents(events) {
  const groups = new Map();
  events.forEach((item) => {
    const key = incidentKeyFor(item);
    if (!groups.has(key)) {
      groups.set(key, {
        id: key,
        title: item.title,
        region: item.region,
        place: item.place,
        lat: item.lat,
        lng: item.lng,
        type: item.type,
        severity: item.severity || "watch",
        status: item.status,
        fuel: item.fuel,
        confidence: item.confidence,
        source: item.source,
        sourceUrl: item.sourceUrl,
        mediaUrl: item.mediaUrl,
        lossWeight: 0,
        signals: [],
        issueTypes: new Set(),
        sources: new Set(),
        kinds: new Set(),
        lastObservedAt: eventDateValue(item),
      });
    }
    const incident = groups.get(key);
    incident.signals.push(item);
    incident.issueTypes.add(issueTypeOf(item));
    signalKinds(item).forEach((kind) => incident.kinds.add(kind));
    const source = item.mediaUrl || item.sourceUrl || item.source || "unknown";
    if (source) incident.sources.add(source);
    incident.lossWeight += item.lossWeight || 1;
    const itemDate = eventDateValue(item);
    if (severityRank(item.severity) > severityRank(incident.severity) || itemDate > incident.lastObservedAt) {
      incident.title = item.title;
      incident.region = item.region;
      incident.place = item.place;
      incident.lat = item.lat;
      incident.lng = item.lng;
      incident.type = item.type;
      incident.status = item.status;
      incident.fuel = item.fuel;
      incident.confidence = item.confidence;
      incident.source = item.source;
      incident.sourceUrl = item.sourceUrl;
      incident.mediaUrl = item.mediaUrl;
      incident.lastObservedAt = itemDate;
    }
    if (severityRank(item.severity) > severityRank(incident.severity)) {
      incident.severity = item.severity;
    }
  });

  return [...groups.values()].map((incident) => ({
    ...incident,
    issueTypes: [...incident.issueTypes],
    sources: [...incident.sources],
    kinds: [...incident.kinds],
    signals: incident.signals.sort((a, b) => eventDateValue(b).localeCompare(eventDateValue(a))),
  }));
}

function matchesFilters(item) {
  const itemIssue = issueTypeOf(item);
  const haystack = `${searchableText(item.title)} ${searchableText(item.region)} ${searchableText(item.place)} ${searchableText(item.status)} ${searchableText(item.fuel)} ${issueLabel(itemIssue)} ${sourceText(item.source)}`.toLowerCase();
  const layerOk = state.activeLayer === "all" || item.type === state.activeLayer;
  const issueOk = state.activeIssue === "all" || itemIssue === state.activeIssue;
  const severityOk = state.severities.has(item.severity);
  const queryOk = !state.query || haystack.includes(state.query);
  return layerOk && issueOk && severityOk && queryOk;
}

function matchesIncident(incident) {
  const itemIssue = incident.issueTypes[0] || issueTypeOf(incident);
  const signalsText = incident.signals.map((signal) => `${searchableText(signal.title)} ${searchableText(signal.place)} ${searchableText(signal.status)} ${searchableText(signal.fuel)}`).join(" ");
  const haystack = `${searchableText(incident.title)} ${searchableText(incident.region)} ${searchableText(incident.place)} ${searchableText(incident.status)} ${searchableText(incident.fuel)} ${incident.issueTypes.map(issueLabel).join(" ")} ${signalsText}`.toLowerCase();
  const layerOk = state.activeLayer === "all" || incident.signals.some((signal) => signal.type === state.activeLayer);
  const issueOk = state.activeIssue === "all" || incident.issueTypes.includes(state.activeIssue) || itemIssue === state.activeIssue;
  const severityOk = state.severities.has(incident.severity);
  const queryOk = !state.query || haystack.includes(state.query);
  return layerOk && issueOk && severityOk && queryOk;
}

function popupHtml(item) {
  const directMediaHtml = item.sourceUrl && item.mediaUrl ? mediaPreviewHtml(item.mediaUrl) : ""
  const link = item.sourceUrl || item.mediaUrl;
  const safeLink = escapeHtml(link);
  const linkHtml = link ? `<a class="popup-link" href="${safeLink}" target="_blank" rel="noreferrer">${tr("openSource")}</a>` : "";
  const videoHtml = mediaPreviewHtml(link);
  return `
    <h3 class="popup-title">${escapeHtml(textOf(item.title))}</h3>
    <p class="popup-meta">${escapeHtml(textOf(item.place))}<br>${formatSignalDate(item.observedAt)}${escapeHtml(textOf(item.status))}<br>${tr("issueTypeLabel")}: ${escapeHtml(issueLabel(issueTypeOf(item)))}<br>${tr("fuel")}: ${escapeHtml(textOf(item.fuel) || tr("noFuel"))}<br>${tr("verification")}: ${escapeHtml(textOf(item.confidence) || tr("noFuel"))}</p>
    ${directMediaHtml}
    ${videoHtml}
    <p class="popup-meta">${escapeHtml(sourceText(item.source))}</p>
    ${linkHtml}
  `;
}

function formatSignalDate(value) {
  if (!value) return "";
  return `${value}<br>`;
}

function isDirectVideoUrl(url) {
  return /\.(mp4|webm|mov)(\?|#|$)/i.test(url || "")
}

function isDirectImageUrl(url) {
  return /\.(png|jpe?g|webp|gif)(\?|#|$)/i.test(url || "")
}

function isAllowedVideoFile(file) {
  if (!file) return false
  const allowedTypes = ["video/mp4", "video/webm", "video/quicktime"]
  const allowedName = /\.(mp4|webm|mov)$/i.test(file.name || "")
  return allowedTypes.includes(file.type) || allowedName
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return ""
  if (bytes >= 1048576) return `${Math.round(bytes / 1048576)} MB`
  return `${Math.round(bytes / 1024)} KB`
}

function videoFileValidationError(file) {
  if (!file) return ""
  if (!isAllowedVideoFile(file)) return tr("videoInvalidType")
  const maxBytes = syncConfig.maxVideoBytes || 52428800
  if (file.size > maxBytes) return `${tr("videoTooLarge")} ${tr("videoMaxSize")}: ${formatBytes(maxBytes)}.`
  return ""
}

function mediaPreviewHtml(url) {
  if (isDirectImageUrl(url)) return `<img class="signal-media signal-image" src="${escapeHtml(url)}" alt="" loading="lazy">`
  if (!isDirectVideoUrl(url)) return ""
  return `<video class="signal-media signal-video" src="${escapeHtml(url)}" controls preload="metadata" playsinline></video>`
}

const UNKNOWN_DATE_SORT = "0000-00-00";

function dateOnly(value) {
  if (!value) return "";
  const text = String(value).trim();
  const match = text.match(/^\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : text;
}

function isUnknownDate(value) {
  return !value || value === UNKNOWN_DATE_SORT || value === "1970-01-01";
}

function eventDateValue(item) {
  return dateOnly(item.observedAt || item.createdAt) || UNKNOWN_DATE_SORT;
}

function prettyDate(value) {
  if (isUnknownDate(value)) return lang === "ru" ? "Дата неизвестна" : "Date unknown";
  const displayValue = dateOnly(value);
  const date = new Date(`${displayValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", { day: "2-digit", month: "short" });
}

function isSupplySupportSignal(signal) {
  if (signal?.impactMode === "support") return true
  const text = `${searchableText(signal?.title)} ${searchableText(signal?.status)} ${searchableText(signal?.fuel)} ${searchableText(signal?.place)}`.toLowerCase()
  return text.includes("import") || text.includes("aid shipment") || text.includes("humanitarian aid") || text.includes("shortage mitigation") || text.includes("supply support")
}

function incidentSummary(incident) {
  const supportSignal = incident.signals.find(isSupplySupportSignal)
  if (supportSignal) {
    return `${escapeHtml(textOf(supportSignal.status || incident.status) || tr("noDescription"))} Supply signal: ${escapeHtml(textOf(supportSignal.fuel || incident.fuel) || "fuel support")}.`
  }
  const issueText = incident.issueTypes.map(issueLabel).join(", ");
  const latest = incident.signals[0];
  return `${escapeHtml(textOf(latest?.status || incident.status) || tr("noDescription"))} ${issueText ? `${tr("issueTypeLabel")}: ${escapeHtml(issueText)}.` : ""}`;
}

function incidentMetaText(incident) {
  const sourceCount = incident.sources.length;
  return `${prettyDate(incident.lastObservedAt)} · ${incident.signals.length} signal${incident.signals.length === 1 ? "" : "s"} · ${sourceCount} source${sourceCount === 1 ? "" : "s"} · ${escapeHtml(textOf(incident.confidence) || tr("localConfidence"))}`;
}

function sourceUrlOf(signal) {
  return signal.sourceUrl || signal.mediaUrl || "";
}

function signalCard(signal) {
  const directMediaHtml = signal.sourceUrl && signal.mediaUrl ? mediaPreviewHtml(signal.mediaUrl) : ""
  const link = sourceUrlOf(signal);
  const sourceLink = link ? `<a class="source-link" href="${escapeHtml(link)}" target="_blank" rel="noreferrer">${tr("openSource")}</a>` : "";
  return `
    <article class="evidence-card">
      <div>
        <strong>${escapeHtml(textOf(signal.title))}</strong>
        <p>${prettyDate(eventDateValue(signal))} · ${escapeHtml(textOf(signal.place) || textOf(signal.region) || tr("noPlace"))}</p>
      </div>
      <p>${escapeHtml(textOf(signal.status) || tr("noDescription"))}</p>
      <p class="evidence-meta">${tr("issueTypeLabel")}: ${escapeHtml(issueLabel(issueTypeOf(signal)))} · ${tr("verification")}: ${escapeHtml(textOf(signal.confidence) || tr("localConfidence"))}</p>
      ${directMediaHtml}
      ${mediaPreviewHtml(link)}
      ${sourceLink}
    </article>
  `;
}

function timelineHtml(incident) {
  return `
    <ol class="timeline-list">
      ${incident.signals
        .map(
          (signal) => `
            <li>
              <time>${prettyDate(eventDateValue(signal))}</time>
              <div>
                <strong>${escapeHtml(textOf(signal.title))}</strong>
                <p>${escapeHtml(textOf(signal.status) || tr("noDescription"))}</p>
              </div>
            </li>
          `,
        )
        .join("")}
    </ol>
  `;
}

function supportImpactSignal(incident) {
  return incident.signals.find(isSupplySupportSignal)
}

function supportMetricFrom(signal) {
  if (signal?.impactMetric) return textOf(signal.impactMetric)
  const text = `${textOf(signal?.status)} ${textOf(signal?.title)}`
  const match = text.match(/(\d[\d,\s]*)(?:\s*metric)?\s*(?:tons|t)\b/i)
  return match ? `${match[1].replace(/\s+/g, " ").trim()} t` : "not quantified"
}

function supportImpactHtml(incident, signal) {
  const metric = supportMetricFrom(signal)
  const metricLabel = textOf(signal?.impactMetricLabel) || "supply volume"
  const scope = textOf(signal?.impactScope) || textOf(signal?.place) || textOf(incident.place) || tr("noPlace")
  const caveat = textOf(signal?.impactCaveat) || "Macro supply signal. It is not a station outage estimate or direct loss score."
  return `
    <div class="impact-grid impact-grid-contextual">
      <div><strong>${escapeHtml(metric)}</strong><span>${escapeHtml(metricLabel)}</span></div>
      <div><strong>${escapeHtml(textOf(signal?.fuel || incident.fuel) || "fuel supply")}</strong><span>supply effect</span></div>
      <div><strong>${escapeHtml(scope)}</strong><span>mapped scope</span></div>
      <div><strong>${escapeHtml(caveat)}</strong><span>impact reading</span></div>
    </div>
  `
}

function impactWeightText(value) {
  const weight = Number(value) || 1;
  return `${Math.max(1, Math.min(10, Math.round(weight)))}/10`;
}

function legacyImpactHtml(incident) {
  const supportSignal = supportImpactSignal(incident)
  if (supportSignal) return supportImpactHtml(incident, supportSignal)
  const stationEstimate = Math.max(1, Math.round((incident.lossWeight || 1) * (incident.severity === "critical" ? 8 : incident.severity === "serious" ? 5 : 2)));
  return `
    <div class="impact-grid">
      <div><strong>${stationEstimate}</strong><span>stations affected estimate</span></div>
      <div><strong>${impactWeightText(incident.lossWeight)}</strong><span>economic loss weight</span></div>
      <div><strong>${incident.issueTypes.map(issueLabel).join(", ")}</strong><span>issue types</span></div>
      <div><strong>${incident.kinds.join(", ")}</strong><span>signal classes</span></div>
    </div>
  `;
}

function impactEvidenceText(incident) {
  const sourceCount = incident.sources.length
  const signalCount = incident.signals.length
  const confidenceText = textOf(incident.confidence) || tr("localConfidence")
  const level = /low/i.test(confidenceText)
    ? "needs confirmation"
    : sourceCount > 1
      ? "cross-source"
      : "single-source"
  return `${level}, ${signalCount} signal${signalCount === 1 ? "" : "s"}, ${sourceCount} source${sourceCount === 1 ? "" : "s"}`
}

function impactReadingText(incident) {
  const issues = new Set(incident.issueTypes)
  if (incident.kinds.includes("infrastructure")) {
    return incident.severity === "critical" ? "plant disruption risk" : "infrastructure exposure"
  }
  if (issues.has("regional_rationing") || issues.has("purchase_limits")) return "access restrictions"
  if (issues.has("station_closure") || issues.has("no_gasoline") || issues.has("no_diesel")) return "local availability shock"
  if (issues.has("long_queues")) return "consumer queue pressure"
  if (issues.has("price_spike")) return "price stress"
  return "early warning signal"
}

function impactScopeText(incident) {
  if (incident.kinds.includes("infrastructure")) return "supply-side risk, exact capacity effect unverified"
  if (incident.signals.length > 1) return "clustered public reports, not a station census"
  return "point report, mapped area is rounded"
}

function impactWhyText(incident) {
  const issues = new Set(incident.issueTypes)
  const reasons = []
  if (issues.has("regional_rationing")) reasons.push("rationing")
  if (issues.has("purchase_limits")) reasons.push("purchase limits")
  if (issues.has("long_queues")) reasons.push("queues")
  if (issues.has("station_closure")) reasons.push("closures")
  if (issues.has("no_gasoline")) reasons.push("gasoline shortages")
  if (issues.has("no_diesel")) reasons.push("diesel shortages")
  if (issues.has("price_spike")) reasons.push("price spike")
  if (issues.has("infrastructure_damage")) reasons.push("reported infrastructure damage")
  return reasons.length ? reasons.join(", ") : incident.kinds.join(", ")
}

function impactHtml(incident) {
  const supportSignal = supportImpactSignal(incident)
  if (supportSignal) return supportImpactHtml(incident, supportSignal)
  return `
    <div class="impact-grid impact-grid-contextual">
      <div><strong>${escapeHtml(impactReadingText(incident))}</strong><span>operational reading</span></div>
      <div><strong>${escapeHtml(impactWhyText(incident))}</strong><span>observable basis</span></div>
      <div><strong>${escapeHtml(impactEvidenceText(incident))}</strong><span>evidence strength</span></div>
      <div><strong>${escapeHtml(impactScopeText(incident))}</strong><span>interpretation limit</span></div>
    </div>
  `
}

function renderIncidentPanel() {
  const incident = state.selected;
  const panel = document.getElementById("incidentPanel");
  if (!incident?.signals) {
    panel.innerHTML = "";
    return;
  }
  if (state.selectedTab === "timeline") {
    panel.innerHTML = timelineHtml(incident);
  } else if (state.selectedTab === "evidence") {
    panel.innerHTML = `<div class="evidence-list">${incident.signals.map(signalCard).join("")}</div>`;
  } else if (state.selectedTab === "impact") {
    panel.innerHTML = impactHtml(incident);
  } else {
    panel.innerHTML = `
      <div class="overview-block">
        <p>${incidentSummary(incident)}</p>
        <p>${escapeHtml(textOf(incident.place) || tr("noPlace"))}. ${incident.signals.length} signal${incident.signals.length === 1 ? "" : "s"} are grouped into this incident. Map point is rounded when needed.</p>
      </div>
    `;
  }
}

function clearSelection() {
  state.selected = null;
  state.selectedTab = "overview";
  document.querySelectorAll(".incident-tab").forEach((item) => item.classList.toggle("active", item.dataset.tab === "overview"));
  document.getElementById("detailDrawer").hidden = true;
  document.getElementById("incidentPanel").innerHTML = "";
  applyTranslations();
}

function render() {
  updateClearLocalButton()
  markerLayer.clearLayers();
  regionLayer.clearLayers();

  const events = [...seedEvents, ...state.publicEvents, ...state.localEvents].sort((a, b) =>
    eventDateValue(b).localeCompare(eventDateValue(a)),
  );
  const visibleIncidents = buildIncidents(events).filter(matchesIncident);

  regionStress
    .filter((region) => (state.activeLayer === "all" || state.activeLayer === "region") && state.severities.has(region.severity))
    .filter((region) => !state.query || `${searchableText(region.region)} ${searchableText(region.note)}`.toLowerCase().includes(state.query))
    .forEach((region) => {
      const radius = 9000 + Math.sqrt(region.score) * 3200;
      const circle = L.circle([region.lat, region.lng], {
        radius,
        color: severityColor(region.severity),
        fillColor: severityColor(region.severity),
        fillOpacity: 0.08,
        opacity: 0.72,
        weight: 0.8,
        interactive: true,
      }).addTo(regionLayer);

      circle.on("click", () =>
        selectItem({
          title: region.region,
          region: region.region,
          place: tr("regionalAggregation"),
          status: `${tr("stressIndex")} ${region.score}/100. ${textOf(region.note)}`,
          confidence: tr("modelAssessment"),
        }),
      );
    });

  visibleIncidents.forEach((incident) => {
    const marker = L.marker([incident.lat, incident.lng], { icon: incidentIcon(incident), title: textOf(incident.title) }).addTo(markerLayer);
    marker.on("click", () => selectItem(incident));
  });

  updateMetrics(events);
}

function selectItem(item) {
  state.selected = item;
  document.getElementById("detailDrawer").hidden = false;
  document.getElementById("detailTitle").textContent = textOf(item.title);
  const isIncident = Array.isArray(item.signals);
  document.getElementById("incidentTabs").hidden = !isIncident;
  document.getElementById("incidentStats").hidden = !isIncident;
  document.getElementById("incidentMeta").textContent = isIncident ? incidentMetaText(item) : "Aggregated public signals";
  if (isIncident) {
    document.getElementById("detailText").innerHTML = incidentSummary(item);
    document.getElementById("incidentStats").innerHTML = `
      <span>${escapeHtml(item.severity)}</span>
      <span>${item.signals.length} signal${item.signals.length === 1 ? "" : "s"}</span>
      <span>${item.sources.length} source${item.sources.length === 1 ? "" : "s"}</span>
      <span>${escapeHtml(item.kinds.join(" / "))}</span>
    `;
    renderIncidentPanel();
  } else {
    const mediaUrl = item.sourceUrl || item.mediaUrl || "";
    document.getElementById("detailText").innerHTML = `${escapeHtml(textOf(item.place) || tr("noPlace"))}. ${
      item.observedAt ? `${escapeHtml(item.observedAt)}. ` : ""
    }${escapeHtml(textOf(item.status) || "")} ${tr("issueTypeLabel")}: ${escapeHtml(issueLabel(issueTypeOf(item)))}. ${tr("verification")}: ${
      escapeHtml(textOf(item.confidence) || tr("noFuel"))
    }.${mediaPreviewHtml(mediaUrl)}`;
    document.getElementById("incidentPanel").innerHTML = "";
  }
  document.getElementById("focusTitle").textContent = textOf(item.region) || textOf(item.title);
  document.getElementById("focusSubtitle").textContent = isIncident ? `${textOf(item.place) || textOf(item.region)} · ${item.signals.length} signal${item.signals.length === 1 ? "" : "s"}` : textOf(item.status) || tr("signalSelected");
}

function updateMetrics(events) {
  const affectedRegions = Math.max(BASELINE_REPORTED_REGIONS, new Set(events.map((item) => textOf(item.region)).filter(Boolean)).size);
  const stationsAtRisk = regionStress.reduce((sum, region) => sum + Math.round(region.affectedStations * (region.score / 100)), 0);
  const severityLoad = events.reduce((sum, item) => sum + (item.lossWeight || 1), 0);
  const offlineCapacityPct = Math.min(20, 4 + severityLoad * 0.55);
  const dailyLossBln = (offlineCapacityPct * 0.42 + stationsAtRisk * 0.006 + affectedRegions * 0.08).toFixed(1);

  document.getElementById("affectedRegions").textContent = affectedRegions;
  document.getElementById("dryStations").textContent = stationsAtRisk;
  document.getElementById("dailyLoss").textContent = dailyLossBln;
  document.getElementById("lossNarrative").textContent =
    lang === "ru"
      ? `Текущая модель: около ${offlineCapacityPct.toFixed(1)}% мощности переработки под риском, ${stationsAtRisk} АЗС в зонах дефицита, расчетный ущерб ${dailyLossBln} млрд руб/день. Это не бухгалтерская оценка, а публичный индекс для сравнения динамики.`
      : `Current model: about ${offlineCapacityPct.toFixed(1)}% of refining capacity under risk, ${stationsAtRisk} gas stations in shortage zones, estimated damage ${dailyLossBln} RUB bn/day. This is not an accounting figure, it is a public index for comparing trend changes.`;
}

function parseCoords(value, shouldRound) {
  const parts = value.trim().split(/[,\s]+/).map(Number).filter(Number.isFinite);
  if (parts.length < 2) return null;
  const [lat, lng] = parts;
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
  const precision = shouldRound ? 1 : 4;
  return { lat: Number(lat.toFixed(precision)), lng: Number(lng.toFixed(precision)) };
}

function saveLocalEvents() {
  localStorage.setItem("fuelCrisisSignals", JSON.stringify(state.localEvents));
}

function updateClearLocalButton() {
  const button = document.getElementById("clearLocal")
  const hasLocalEvents = state.localEvents.length > 0
  const label = hasLocalEvents
    ? lang === "ru"
      ? "Очистить локальные сигналы"
      : "Clear local browser signals"
    : lang === "ru"
      ? "Локальных сигналов для очистки нет"
      : "No local browser signals to clear"

  button.disabled = !hasLocalEvents
  button.title = label
  button.setAttribute("aria-label", label)
}

async function supabaseRequest(path, options = {}) {
  const baseUrl = syncConfig.supabaseUrl.replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: syncConfig.supabaseAnonKey,
      Authorization: `Bearer ${syncConfig.supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Supabase request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function uploadVideoFile(file, observedAt) {
  if (!publicSyncEnabled || !syncConfig.videoUploadEnabled) {
    throw new Error(tr("videoUploadDisabled"));
  }
  const validationError = videoFileValidationError(file)
  if (validationError) {
    throw new Error(validationError)
  }

  const bucket = encodeURIComponent(syncConfig.videoBucket || "signal-videos");
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "signal-video.mp4";
  const path = `pending/${observedAt || new Date().toISOString().slice(0, 10)}/${Date.now()}-${crypto.randomUUID()}-${safeName}`;
  const baseUrl = syncConfig.supabaseUrl.replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/storage/v1/object/${bucket}/${path}`, {
    method: "POST",
    headers: {
      apikey: syncConfig.supabaseAnonKey,
      Authorization: `Bearer ${syncConfig.supabaseAnonKey}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false",
    },
    body: file,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Video upload failed: ${response.status}`);
  }

  return `${baseUrl}/storage/v1/object/public/${bucket}/${path}`;
}

function rowToEvent(row) {
  return {
    id: row.id,
    type: row.type,
    title: row.title,
    region: row.region || "",
    place: row.place || "",
    lat: row.lat,
    lng: row.lng,
    observedAt: row.observed_at || "",
    createdAt: row.created_at || "",
    severity: row.severity || "watch",
    issueType: row.issue_type || "unconfirmed_anomaly",
    status: row.note || "",
    fuel: row.fuel || tr("noFuel"),
    lossWeight: row.loss_weight || 2,
    confidence: row.confidence || tr("localConfidence"),
    source: "public",
    mediaUrl: row.media_url || "",
  };
}

function eventToRow(item) {
  const row = {
    type: item.type,
    severity: item.severity,
    status: "pending",
    observed_at: item.observedAt || new Date().toISOString().slice(0, 10),
    title: textOf(item.title),
    region: textOf(item.region),
    place: textOf(item.place),
    lat: item.lat,
    lng: item.lng,
    note: textOf(item.status),
    fuel: textOf(item.fuel),
    media_url: item.mediaUrl || null,
    confidence: tr("localConfidence"),
    loss_weight: item.lossWeight || 2,
  };
  if (syncConfig.supportsIssueType) row.issue_type = issueTypeOf(item);
  return row;
}

async function loadPublicSignals() {
  if (!publicSyncEnabled) return;
  try {
    const table = encodeURIComponent(syncConfig.publicTable);
    const rows = await supabaseRequest(
      `${table}?select=*&status=eq.approved&order=observed_at.desc,created_at.desc&limit=500`,
      { method: "GET", headers: { Prefer: "" } },
    );
    state.publicEvents = rows.map(rowToEvent);
    render();
    setSubmissionStatus(tr("publicModeReady"), "success");
  } catch {
    setSubmissionStatus(tr("syncOffline"), "error");
  }
}

async function submitPublicSignal(item) {
  const table = encodeURIComponent(syncConfig.publicTable);
  await supabaseRequest(table, {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(eventToRow(item)),
  });
}

function buildDigest() {
  const affectedRegions = document.getElementById("affectedRegions").textContent;
  const stationsAtRisk = document.getElementById("dryStations").textContent;
  const dailyLoss = document.getElementById("dailyLoss").textContent;
  const critical = [...seedEvents, ...state.localEvents].filter((item) => item.severity === "critical");
  const bullets = critical.slice(0, 3).map((item) => `• ${textOf(item.region)}: ${textOf(item.status)}`).join("\n");

  if (lang === "ru") {
    return `Карта топливного стресса РФ: ${affectedRegions} регионов с сигналами, ${stationsAtRisk} АЗС в зонах дефицита, оценка ущерба ${dailyLoss} млрд руб/день.\n\n${bullets}\n\nДанные: публичные источники + пользовательские видео. Координаты критической инфраструктуры округлены.`;
  }

  return `Russia fuel stress map: ${affectedRegions} regions with reported stress, ${stationsAtRisk} gas stations in shortage zones, estimated damage ${dailyLoss} RUB bn/day.\n\n${bullets}\n\nData: public sources + uploaded user videos. Sensitive infrastructure coordinates are rounded.`;
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.dataset.lang;
    localStorage.setItem("fuelCrisisLang", lang);
    applyTranslations();
    render();
  });
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.activeLayer = button.dataset.layer;
    render();
  });
});

document.querySelectorAll(".filter-row input").forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) state.severities.add(input.value);
    else state.severities.delete(input.value);
    render();
  });
});

document.getElementById("issueFilter").addEventListener("change", (event) => {
  state.activeIssue = event.target.value;
  render();
});

document.querySelectorAll(".incident-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedTab = button.dataset.tab;
    document.querySelectorAll(".incident-tab").forEach((item) => item.classList.toggle("active", item === button));
    renderIncidentPanel();
  });
});

document.getElementById("closeDetail").addEventListener("click", clearSelection);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.selected) {
    clearSelection();
  }
});

document.getElementById("typeInput").addEventListener("change", (event) => {
  if (event.target.value === "infrastructure") {
    document.getElementById("issueTypeInput").value = "infrastructure_damage";
  }
  if (event.target.value === "region") {
    document.getElementById("issueTypeInput").value = "regional_rationing";
  }
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

let uploadPreviewUrl = ""

function clearUploadPreview() {
  const preview = document.getElementById("videoPreview")
  if (uploadPreviewUrl) URL.revokeObjectURL(uploadPreviewUrl)
  uploadPreviewUrl = ""
  preview.hidden = true
  preview.removeAttribute("src")
}

function updateVideoFileControl() {
  const input = document.getElementById("videoFileInput")
  const name = document.getElementById("videoFileName")
  if (!input || !name) return
  const file = input.files[0]
  name.textContent = file ? file.name : tr("noFileChosen")
}

document.getElementById("videoFileInput").addEventListener("change", (event) => {
  const file = event.target.files[0]
  clearUploadPreview()
  updateVideoFileControl()
  if (!file) return
  const validationError = videoFileValidationError(file)
  if (validationError) {
    event.target.value = ""
    updateVideoFileControl()
    setSubmissionStatus(validationError, "error")
    return
  }
  uploadPreviewUrl = URL.createObjectURL(file)
  const preview = document.getElementById("videoPreview")
  preview.src = uploadPreviewUrl
  preview.hidden = false
  setSubmissionStatus(`${file.name} - ${formatBytes(file.size)}`, "success")
})

document.getElementById("signalForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const coords = parseCoords(document.getElementById("coordsInput").value, document.getElementById("roundInput").checked);
  if (!coords) {
    document.getElementById("coordsInput").focus();
    return;
  }

  const place = document.getElementById("placeInput").value.trim() || tr("localSignal");
  const type = document.getElementById("typeInput").value;
  const issueType = document.getElementById("issueTypeInput").value;
  const note = document.getElementById("noteInput").value.trim() || tr("noDescription");
  const observedAt = document.getElementById("signalDateInput").value || new Date().toISOString().slice(0, 10);
  let mediaUrl = document.getElementById("mediaInput").value.trim();
  const videoFile = document.getElementById("videoFileInput").files[0];

  if (videoFile) {
    try {
      setSubmissionStatus(tr("uploadingVideo"));
      mediaUrl = await uploadVideoFile(videoFile, observedAt);
      document.getElementById("mediaInput").value = mediaUrl
      document.getElementById("videoFileInput").value = ""
      updateVideoFileControl()
      clearUploadPreview()
    } catch (error) {
      setSubmissionStatus(error.message || tr("videoUploadDisabled"), "error");
      return;
    }
  }
  const stationIntel = type === "station"
    ? buildStationIntel()
    : { text: "", fuel: tr("noFuel"), hasStationIntel: false }
  const fullNote = stationIntel.text ? `${note}. ${stationIntel.text}` : note
  const item = {
    id: `local-${Date.now()}`,
    type,
    title: `${place}: ${tr("newSignal")}`,
    region: place.split(",")[0],
    place,
    lat: coords.lat,
    lng: coords.lng,
    observedAt,
    severity: type === "station" ? "serious" : "watch",
    issueType,
    status: fullNote,
    fuel: stationIntel.hasStationIntel ? stationIntel.fuel : tr("noFuel"),
    lossWeight: type === "station" ? 4 : 2,
    confidence: tr("localConfidence"),
    source: "local",
    mediaUrl,
  };

  if (publicSyncEnabled) {
    try {
      await submitPublicSignal(item);
      item.confidence = tr("submittedForReview");
      setSubmissionStatus(tr("submittedForReview"), "success");
    } catch (error) {
      console.error("Public signal submit failed", error);
      setSubmissionStatus(mediaUrl ? tr("videoUploadedRetry") : tr("submitFailed"), "error")
    }
  }

  state.localEvents.unshift(item);
  saveLocalEvents();
  event.target.reset();
  clearUploadPreview()
  document.getElementById("signalDateInput").value = new Date().toISOString().slice(0, 10);
  document.getElementById("roundInput").checked = true;
  render();
  map.setView([item.lat, item.lng], 7);
  selectItem(item);
});

document.getElementById("fitRussia").addEventListener("click", () => {
  clearSelection();
  map.fitBounds([
    [41, 19],
    [77, 170],
  ]);
});

document.getElementById("clearLocal").addEventListener("click", (event) => {
  event.stopImmediatePropagation()
  state.localEvents = []
  saveLocalEvents()
  clearSelection()
  render()
}, true)


applyTranslations();
document.getElementById("signalDateInput").value = new Date().toISOString().slice(0, 10);
render();
loadPublicSignals();
map.fitBounds([
  [41, 19],
  [77, 170],
]);

// Shared by the three stable CCNA study routes.
const app = document.querySelector("#app");
const modeLinks = [...document.querySelectorAll("[data-mode]")];

const STUDY_CONFIG = window.CCNA_STUDY_CONFIG || {};
const COURSE_TITLE = STUDY_CONFIG.courseTitle || "CCNA 1 Final Study";
const STORAGE_KEY =
  STUDY_CONFIG.storageKey || "ccna-study-progress-fsrs-v1";
const STORAGE_VERSION = 1;
const DAY_MS = 86_400_000;
const MINUTE_MS = 60_000;
const DESIRED_RETENTION = 0.9;
const FSRS_DECAY = -0.5;
const FSRS_FACTOR = 19 / 81;
const FSRS_WEIGHTS = [
  0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234,
  1.616, 0.1544, 1.0824, 1.9813, 0.0953, 0.2975, 2.2042, 0.2407,
  2.9466,
];

const NOT_USED = "Not used";

function matchingQuestion(choices, rows, explanationHtml, questionHtml = null) {
  return {
    kind: "matching",
    choices,
    rows: rows.map(([prompt, answer]) => {
      const answerIndex = choices.indexOf(answer);
      if (answerIndex < 0) throw new Error(`Missing matching choice: ${answer}`);
      return { prompt, answer: answerIndex };
    }),
    explanationHtml,
    questionHtml,
  };
}

const CCNA1_NONSTANDARD_QUESTIONS = {
  19995: matchingQuestion(
    ["message encoding", "message sizing", "message encapsulation", NOT_USED],
    [
      ["the process of determining when to begin sending messages on a network", NOT_USED],
      ["the process of converting information from one format into another acceptable for transmission", "message encoding"],
      ["the process of placing one message format inside another message format", "message encapsulation"],
      ["the process of unpacking one message format from another message format", NOT_USED],
      ["the process of breaking up a long message into individual pieces before being sent over the network", "message sizing"],
    ],
    "<p>Message encoding changes the representation of information, message encapsulation nests one message format inside another, and message sizing breaks long messages into transmittable pieces. Access timing and de-encapsulation are separate concepts.</p>",
  ),
  19997: matchingQuestion(
    ["acknowledgment", "retransmission", "FCS", "sequence numbers", "window size"],
    [
      ["number of bytes a destination device can accept and process at one time", "window size"],
      ["used to identify missing segments of data", "sequence numbers"],
      ["method of managing segments of data loss", "retransmission"],
      ["received by a sender before transmitting more segments in a session", "acknowledgment"],
    ],
    "<p>Window size advertises receive capacity, sequence numbers expose missing segments, retransmission replaces lost data, and acknowledgments confirm receipt. FCS is a data-link error-detection field rather than the TCP mechanism requested here.</p>",
  ),
  19998: matchingQuestion(
    ["physical topology diagram", "logical topology diagram", NOT_USED],
    [
      ["IP address of a server", "logical topology diagram"],
      ["location of a desktop PC in a classroom", "physical topology diagram"],
      ["USB port on a desktop PC in a classroom", NOT_USED],
      ["path of cables that connect rooms to wiring closets", "physical topology diagram"],
    ],
    "<p>A logical topology records addressing and logical device relationships. A physical topology records device locations, ports, and the cabling between them.</p>",
  ),
  19999: matchingQuestion(
    ["127.0.0.1", "172.18.45.9", "240.2.6.255", "198.133.219.2", "169.254.1.5"],
    [
      ["a link-local address", "169.254.1.5"],
      ["a public address", "198.133.219.2"],
      ["an experimental address", "240.2.6.255"],
      ["a loopback address", "127.0.0.1"],
    ],
    "<p>IPv4 loopback uses 127.0.0.0/8, link-local uses 169.254.0.0/16, and the former Class E range 240.0.0.0/4 is reserved for experimental use. The remaining routable address is public.</p>",
  ),
  20001: matchingQuestion(
    ["hardware threats", "environmental threats", "electrical threats", "maintenance threats", NOT_USED],
    [
      ["poor handling of key electrical components, lack of critical spare parts, poor cabling, and poor labeling", "maintenance threats"],
      ["unauthorized access resulting in loss of data", NOT_USED],
      ["temperature extremes or humidity extremes", "environmental threats"],
      ["physical damage to servers, routers, switches, cabling plant, and workstations", "hardware threats"],
      ["voltage spikes, brownouts, power noise, and total power loss", "electrical threats"],
    ],
    "<p>Hardware threats physically damage equipment, environmental threats come from temperature or humidity, electrical threats come from unstable power, and maintenance threats arise from poor handling or upkeep. Unauthorized access is a security threat outside these four categories.</p>",
  ),
  20008: matchingQuestion(
    ["peer-to-peer network", "peer-to-peer application", NOT_USED],
    [
      ["requires a specific user interface", "peer-to-peer application"],
      ["no dedicated server is required", "peer-to-peer network"],
      ["a background service is required", "peer-to-peer application"],
      ["client and server roles are set on a per-request basis", "peer-to-peer network"],
      ["devices can only function in one role at a time", NOT_USED],
    ],
    "<p>A peer-to-peer network needs no dedicated server and devices can change roles per request. A peer-to-peer application supplies the user interface and background service. A peer can act as both client and server, so the one-role statement is unused.</p>",
    "Match a statement to the related network model. (Not all options are used.)",
  ),
  20009: matchingQuestion(
    ["addressing", "error detection", "type", "frame start", NOT_USED],
    [
      ["This field checks whether the frame was damaged during transfer.", "error detection"],
      ["This field identifies special flow-control services.", NOT_USED],
      ["This field helps direct the frame toward its destination.", "addressing"],
      ["This field identifies the beginning of a frame.", "frame start"],
      ["This field is used by LLC to identify the Layer 3 protocol.", "type"],
    ],
    "<p>Addressing directs the frame, error detection validates it, the frame-start field marks its beginning, and the type field identifies the encapsulated Layer 3 protocol. The flow-control statement is not used.</p>",
  ),
  20010: matchingQuestion(
    ["packet filtering", "URL filtering", "network address translation", "stateful packet inspection", "application filtering"],
    [
      ["prevents access by port number", "application filtering"],
      ["prevents access based on an IP or MAC address", "packet filtering"],
      ["prevents unsolicited incoming sessions", "stateful packet inspection"],
      ["prevents access to websites", "URL filtering"],
    ],
    "<p>Packet filters use network addresses, application filters use ports or application types, URL filters control website access, and stateful inspection rejects unsolicited traffic that is not part of a legitimate session. NAT is not a filtering method in this match.</p>",
  ),
  20011: matchingQuestion(
    ["IP address", "MAC address", NOT_USED],
    [
      ["contained in the Layer 3 header", "IP address"],
      ["contained in the Layer 2 header", "MAC address"],
      ["separated into an OUI and a unique identifier", "MAC address"],
      ["separated into a network portion and a unique identifier", "IP address"],
      ["32 or 128 bits", "IP address"],
      ["48 bits", "MAC address"],
      ["64 bits", NOT_USED],
    ],
    "<p>IP addresses operate at Layer 3, identify a network and interface, and are 32 or 128 bits. Ethernet MAC addresses operate at Layer 2, contain an OUI plus a device identifier, and are 48 bits.</p>",
  ),
  20015: matchingQuestion(
    ["global routing prefix", "subnet mask", "subnet ID", "interface ID"],
    [
      ["This part of the address is used by an organization to identify subnets.", "subnet ID"],
      ["This network portion of the address is assigned by the provider.", "global routing prefix"],
      ["This part of the address is equivalent to the host portion of an IPv4 address.", "interface ID"],
    ],
    "<p>The provider assigns the global routing prefix, the organization uses the subnet ID internally, and the interface ID identifies the individual interface. Subnet mask is the unused option.</p>",
  ),
  20016: matchingQuestion(
    ["cut-through", "store-and-forward", NOT_USED],
    [
      ["always stores the entire frame", "store-and-forward"],
      ["checks the CRC before forwarding", "store-and-forward"],
      ["checks the frame length before forwarding", "store-and-forward"],
      ["does not forward broadcasts", NOT_USED],
      ["has low latency", "cut-through"],
      ["may forward runt frames", "cut-through"],
      ["begins forwarding when the destination address is received", "cut-through"],
    ],
    "<p>Store-and-forward receives and validates the full frame. Cut-through begins forwarding after reading the destination address, which lowers latency but can propagate corrupt or runt frames. Both methods forward broadcasts.</p>",
  ),
  20018: matchingQuestion(
    ["192.168.0.128/25", "192.168.0.0/26", "192.168.0.96/27", "192.168.0.80/30"],
    [
      ["Network A", "192.168.0.128/25"],
      ["Network B", "192.168.0.0/26"],
      ["Network C", "192.168.0.96/27"],
      ["Network D", "192.168.0.80/30"],
    ],
    "<p>Allocate the largest LAN first: /25 for 100 hosts, /26 for 50 hosts, /27 for 25 hosts, and /30 for the two-host point-to-point link. The selected network IDs avoid overlap.</p>",
  ),
  20019: matchingQuestion(
    ["192.168.0.0/24", "192.168.0.192/27", "192.168.0.228/32", "192.168.0.0/25", "192.168.0.224/30", "192.168.0.128/26"],
    [
      ["Network A", "192.168.0.0/25"],
      ["Network B", "192.168.0.128/26"],
      ["Network C", "192.168.0.192/27"],
      ["Network D", "192.168.0.224/30"],
    ],
    "<p>Allocate the largest LAN first: /25 for 100 hosts, /26 for 50 hosts, /27 for 25 hosts, and /30 for the point-to-point link. The /24 and /32 choices do not satisfy the required allocation.</p>",
    'Refer to the exhibit. Match each network with the correct IP address and prefix. (Not all options are used.) <img src="./assets/i207918v1n1_207918-1-1-2fb9d6a9.jpg" alt="Network topology with host requirements" loading="lazy">',
  ),
  20020: matchingQuestion(
    ["TCP", "UDP"],
    [
      ["FTP", "TCP"],
      ["HTTP", "TCP"],
      ["SMTP", "TCP"],
      ["DHCP", "UDP"],
      ["TFTP", "UDP"],
    ],
    "<p>In this CCNA model, FTP, HTTP, and SMTP use TCP for reliable delivery. DHCP and TFTP use UDP.</p>",
  ),
  20021: matchingQuestion(
    ["peer-to-peer network", "peer-to-peer application", NOT_USED],
    [
      ["requires a specific user interface", "peer-to-peer application"],
      ["no dedicated server is required", "peer-to-peer network"],
      ["a background service is required", "peer-to-peer application"],
      ["client and server roles are set on a per-request basis", "peer-to-peer network"],
      ["devices can only function in one role at a time", NOT_USED],
    ],
    "<p>A peer-to-peer network needs no dedicated server and devices can change roles per request. A peer-to-peer application supplies the user interface and background service. A peer can act as both client and server, so the one-role statement is unused.</p>",
    "Match a statement to the related network model. (Not all options are used.)",
  ),
  20022: matchingQuestion(
    ["TCP", "UDP"],
    [
      ["FTP", "TCP"],
      ["HTTP", "TCP"],
      ["SMTP", "TCP"],
      ["DHCP", "UDP"],
      ["TFTP", "UDP"],
    ],
    "<p>In this CCNA model, FTP, HTTP, and SMTP use TCP for reliable delivery. DHCP and TFTP use UDP.</p>",
    "Match the application protocols to the correct transport protocols.",
  ),
  17243: {
    kind: "image-choice",
    questionHtml: "Which connector is used with twisted-pair cabling in an Ethernet LAN?",
    questionText: "Which connector is used with twisted-pair cabling in an Ethernet LAN?",
    options: [
      { html: '<span class="image-option"><img src="./assets/i192179v1n1_LC-connector-a73b6519.png" alt="LC connector" loading="lazy"><span>LC</span></span>', text: "LC", correct: false },
      { html: '<span class="image-option"><img src="./assets/i192179v1n1_SC-connector-6d494ed0.png" alt="SC connector" loading="lazy"><span>SC</span></span>', text: "SC", correct: false },
      { html: '<span class="image-option"><img src="./assets/i192179v1n1_BNC-2fc71cb5.png" alt="BNC connector" loading="lazy"><span>BNC</span></span>', text: "BNC", correct: false },
      { html: '<span class="image-option"><img src="./assets/i192179v1n1_RJ-11-2-a4764d12.png" alt="RJ-11 connector" loading="lazy"><span>RJ-11</span></span>', text: "RJ-11", correct: false },
      { html: '<span class="image-option"><img src="./assets/i192179v1n1_RJ-45-27d69eb4.png" alt="RJ-45 connector" loading="lazy"><span>RJ-45</span></span>', text: "RJ-45", correct: true },
    ],
    explanationHtml: "<p>Twisted-pair Ethernet cabling terminates in an RJ-45 connector. LC and SC are fiber connectors, BNC is used with coaxial cable, and RJ-11 is commonly used for telephone wiring.</p>",
  },
  17247: matchingQuestion(
    ["Layer 2", "Layer 3", "Layer 4", NOT_USED],
    [
      ["Source IP Address", "Layer 3"],
      ["Destination Port Number", "Layer 4"],
      ["Destination Options", NOT_USED],
      ["FCS (Frame Check Sequence)", "Layer 2"],
      ["802.2 header", "Layer 2"],
      ["TTL", "Layer 3"],
      ["Acknowledgment Number", "Layer 4"],
      ["Destination MAC Address", "Layer 2"],
    ],
    "<p>MAC addressing, 802.2, and FCS are Layer 2 fields; IP addresses and TTL are Layer 3 fields; and port and acknowledgment numbers are Layer 4 fields. Destination Options is unused in this match.</p>",
  ),
};

const NONSTANDARD_QUESTIONS =
  STUDY_CONFIG.nonstandardQuestions || CCNA1_NONSTANDARD_QUESTIONS;

let questions = [];
let mode = readMode();
let searchTerm = "";
const listState = new Map();
let progressData = loadProgress();

let coverageDeck = [];
let practiceDeck = [];
let retryQueue = [];
let sessionTurns = 0;
let sessionCorrect = 0;
let recentIds = [];
let randomQuestion = null;
const lastOptionOrders = new Map();
let randomState = emptyState();

function shuffledOrder(length, key) {
  if (length <= 1) return Array.from({ length }, (_, index) => index);

  let order = shuffle(Array.from({ length }, (_, index) => index));
  const previous = lastOptionOrders.get(key);
  if (previous?.every((value, index) => value === order[index])) {
    order = [...order.slice(1), order[0]];
  }
  lastOptionOrders.set(key, order);
  return order;
}

function emptyState(question = null) {
  const special = question ? nonstandardFor(question) : null;
  const shownQuestion = question ? displayQuestion(question) : null;
  return {
    selected: [],
    matches: {},
    checked: false,
    correct: null,
    scored: false,
    optionOrder: shownQuestion
      ? shuffledOrder(shownQuestion.options.length, `options-${question.id}`)
      : [],
    matchingChoiceOrder: special?.kind === "matching"
      ? shuffledOrder(special.choices.length, `matches-${question.id}`)
      : [],
  };
}

function nonstandardFor(question) {
  return NONSTANDARD_QUESTIONS[question.id] || null;
}

function displayQuestion(question) {
  const special = nonstandardFor(question);
  if (!special) return question;
  return {
    ...question,
    questionHtml: special.questionHtml || question.questionHtml,
    questionText: special.questionText || question.questionText,
    options: special.options || question.options,
    explanationHtml: special.explanationHtml || question.explanationHtml,
  };
}

function readMode() {
  return new URLSearchParams(window.location.search).get("mode") === "list"
    ? "list"
    : "random";
}

function setMode(nextMode, updateHistory = true) {
  mode = nextMode === "random" ? "random" : "list";
  if (updateHistory) {
    const url = new URL(window.location.href);
    if (mode === "list") url.searchParams.set("mode", "list");
    else url.searchParams.delete("mode");
    try {
      window.history.pushState({}, "", url);
    } catch {
      // Some browsers restrict history updates for pages opened from disk.
    }
  }
  updateModeLinks();
  render();
}

function updateModeLinks() {
  modeLinks.forEach((link) => {
    if (link.dataset.mode === mode) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (
      parsed?.version === STORAGE_VERSION &&
      parsed.cards &&
      typeof parsed.cards === "object"
    ) {
      return parsed;
    }
  } catch {
    // A corrupt or blocked store should never prevent studying.
  }
  return { version: STORAGE_VERSION, cards: {} };
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  } catch {
    // The current session still works when persistent storage is unavailable.
  }
}

function cardFor(questionId) {
  return {
    reps: 0,
    lapses: 0,
    successes: 0,
    consecutiveCorrect: 0,
    lastResult: null,
    difficulty: null,
    stability: null,
    due: null,
    lastReview: null,
    ...progressData.cards[questionId],
  };
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function initialDifficulty(rating) {
  return clamp(
    FSRS_WEIGHTS[4] - Math.exp(FSRS_WEIGHTS[5] * (rating - 1)) + 1,
    1,
    10,
  );
}

function initialStability(rating) {
  return FSRS_WEIGHTS[rating - 1];
}

function retrievability(elapsedDays, stability) {
  if (!stability) return 0;
  return Math.pow(
    1 + (FSRS_FACTOR * Math.max(elapsedDays, 0)) / stability,
    FSRS_DECAY,
  );
}

function nextDifficulty(difficulty, rating) {
  const shifted = difficulty - FSRS_WEIGHTS[6] * (rating - 3);
  const meanReverted =
    FSRS_WEIGHTS[7] * initialDifficulty(3) +
    (1 - FSRS_WEIGHTS[7]) * shifted;
  return clamp(meanReverted, 1, 10);
}

function nextRecallStability(difficulty, stability, recall, rating) {
  const hardPenalty = rating === 2 ? FSRS_WEIGHTS[15] : 1;
  const easyBonus = rating === 4 ? FSRS_WEIGHTS[16] : 1;
  return (
    stability *
    (1 +
      Math.exp(FSRS_WEIGHTS[8]) *
        (11 - difficulty) *
        Math.pow(stability, -FSRS_WEIGHTS[9]) *
        (Math.exp((1 - recall) * FSRS_WEIGHTS[10]) - 1) *
        hardPenalty *
        easyBonus)
  );
}

function nextForgetStability(difficulty, stability, recall) {
  return Math.min(
    stability,
    FSRS_WEIGHTS[11] *
      Math.pow(difficulty, -FSRS_WEIGHTS[12]) *
      (Math.pow(stability + 1, FSRS_WEIGHTS[13]) - 1) *
      Math.exp((1 - recall) * FSRS_WEIGHTS[14]),
  );
}

function nextInterval(stability) {
  const interval =
    (stability / FSRS_FACTOR) *
    (Math.pow(DESIRED_RETENTION, 1 / FSRS_DECAY) - 1);
  return Math.round(clamp(interval, 1, 36_500));
}

function recordReview(questionId, wasCorrect) {
  const now = Date.now();
  const rating = wasCorrect ? 3 : 1;
  const previous = cardFor(questionId);
  let difficulty;
  let stability;

  if (previous.reps === 0) {
    difficulty = initialDifficulty(rating);
    stability = initialStability(rating);
  } else {
    const elapsedDays = Math.max((now - previous.lastReview) / DAY_MS, 0);
    const recall = retrievability(elapsedDays, previous.stability);
    difficulty = nextDifficulty(previous.difficulty, rating);
    stability = wasCorrect
      ? nextRecallStability(difficulty, previous.stability, recall, rating)
      : nextForgetStability(difficulty, previous.stability, recall);
  }

  const consecutiveCorrect = wasCorrect ? previous.consecutiveCorrect + 1 : 0;
  const updatedCard = {
    reps: previous.reps + 1,
    lapses: previous.lapses + (wasCorrect ? 0 : 1),
    successes: previous.successes + (wasCorrect ? 1 : 0),
    consecutiveCorrect,
    lastResult: wasCorrect ? "correct" : "wrong",
    difficulty,
    stability,
    due: !wasCorrect
      ? now + 10 * MINUTE_MS
      : consecutiveCorrect === 1
        ? now + 25 * MINUTE_MS
        : now + nextInterval(stability) * DAY_MS,
    lastReview: now,
  };
  progressData.cards[questionId] = updatedCard;
  saveProgress();
  return updatedCard;
}

function studyTierForCard(card) {
  if (card.reps === 0) return "unseen";

  // Legacy cards do not have streak data, so infer the best available streak
  // from their total successes without overstating it beyond Solid.
  if (card.lastResult === "wrong" || (!card.lastResult && card.successes === 0)) {
    return "retry";
  }
  const correctRun = card.lastResult
    ? card.consecutiveCorrect
    : Math.min(card.successes, 2);
  return correctRun >= 2 ? "solid" : "retry";
}

function progressStats() {
  const stats = {
    unseen: 0,
    retry: 0,
    solid: 0,
    seen: 0,
    attempts: 0,
    successes: 0,
  };

  questions.forEach((question) => {
    const card = cardFor(question.id);
    if (card.reps === 0) {
      stats.unseen += 1;
      return;
    }

    stats.seen += 1;
    stats.attempts += card.reps;
    stats.successes += card.successes;
    stats[studyTierForCard(card)] += 1;
  });

  return stats;
}

function renderProgress() {
  const stats = progressStats();
  const accuracy = stats.attempts
    ? `${Math.round((stats.successes / stats.attempts) * 100)}%`
    : "—";

  return `<section class="study-status" aria-label="Study progress">
    <div class="status-summary">
      <dl class="tier-list">
        <div><dt><abbr title="Not answered yet.">Unseen</abbr></dt><dd data-stat="unseen">${stats.unseen}</dd></div>
        <div><dt><abbr title="Not yet answered correctly twice in a row. It returns after a spaced gap.">Needs review</abbr></dt><dd data-stat="retry">${stats.retry}</dd></div>
        <div><dt><abbr title="Answered correctly twice in a row. A wrong answer resets it.">Solid</abbr></dt><dd data-stat="solid">${stats.solid}</dd></div>
      </dl>
      <div class="status-tools">
        <span class="accuracy" title="Accuracy across all attempts">${accuracy}</span>
        <details class="tier-help">
          <summary>How it works</summary>
          <div class="tier-help-copy">
            <p><strong>Unseen</strong><br />Not answered yet.</p>
            <p><strong>Needs review</strong><br />Fewer than two correct answers in a row. A miss returns after about ten other questions; the second-chance review returns after about twenty-five.</p>
            <p><strong>Solid</strong><br />Two correct answers in a row. Any miss resets the streak.</p>
            <p><strong>Ordering</strong><br />Every Unseen question is shown before any repeat. After that first pass, ready Needs review questions come first, followed by the rest of the bank without immediate repeats.</p>
          </div>
        </details>
        <button class="text-button" type="button" data-action="reset-progress">Reset</button>
      </div>
    </div>
  </section>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(value) {
  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent.trim();
}

function prepareHtml(value, scope) {
  return scope === "random"
    ? value.replaceAll('loading="lazy"', 'loading="eager"')
    : value;
}

function isSelfCheck(question) {
  return !nonstandardFor(question) && question.options.length === 1;
}

function isCorrect(question, selected, matches = {}) {
  const special = nonstandardFor(question);
  if (special?.kind === "matching") {
    return special.rows.every(
      (row, index) => Number(matches[index]) === row.answer,
    );
  }

  const shownQuestion = displayQuestion(question);
  const correct = shownQuestion.options
    .map((option, index) => (option.correct ? index : -1))
    .filter((index) => index >= 0);
  return (
    selected.length === correct.length &&
    selected.every((index) => correct.includes(index))
  );
}

function answerSummary(question, scope) {
  const special = nonstandardFor(question);
  if (special?.kind === "matching") {
    return `<dl class="matching-key">${special.rows
      .map(
        (row) => `<div>
          <dt>${escapeHtml(row.prompt)}</dt>
          <dd>${escapeHtml(special.choices[row.answer])}</dd>
        </div>`,
      )
      .join("")}</dl>`;
  }

  const shownQuestion = displayQuestion(question);
  const answers = shownQuestion.options.filter((option) => option.correct);
  if (answers.some((answer) => answer.html.includes("<img"))) {
    return answers.map((answer) => prepareHtml(answer.html, scope)).join("");
  }
  return `<ul>${answers
    .map((answer) => `<li>${prepareHtml(answer.html, scope)}</li>`)
    .join("")}</ul>`;
}

function explanationFor(question, scope) {
  const shownQuestion = displayQuestion(question);
  const special = nonstandardFor(question);
  if (special?.explanationHtml) {
    return prepareHtml(special.explanationHtml, scope);
  }

  const text = stripHtml(shownQuestion.explanationHtml || "");
  if (
    isSelfCheck(question) &&
    text.replace(/^Topic\s+[\d.]+/i, "").trim().length < 20
  ) {
    return `${prepareHtml(shownQuestion.explanationHtml || "", scope)}<p>Compare each part of your response with the completed answer shown above.</p>`;
  }
  if (!text && shownQuestion.questionText.includes("twisted-pair cabling")) {
    return "<p>Ethernet over twisted-pair cabling uses an RJ-45 connector. LC and SC are fiber connectors, BNC is used with coaxial cable, and RJ-11 is smaller and typically used for telephone wiring.</p>";
  }
  if (!text) {
    return "<p>The correct response is shown above. Review the highlighted choice before trying the question again.</p>";
  }
  return prepareHtml(shownQuestion.explanationHtml, scope);
}

function renderMatchingControls(question, state, special) {
  const choiceOrder = state.matchingChoiceOrder.length
    ? state.matchingChoiceOrder
    : special.choices.map((_, index) => index);
  return `<fieldset class="matching-fieldset">
    <legend class="sr-only">Match every prompt with the correct answer</legend>
    ${special.rows
      .map((row, index) => {
        const selected = state.matches[index];
        const rowCorrect = Number(selected) === row.answer;
        const classes = ["match-row"];
        if (state.checked && rowCorrect) classes.push("is-correct");
        if (state.checked && !rowCorrect) classes.push("is-wrong");
        return `<label class="${classes.join(" ")}">
          <span class="match-prompt">${escapeHtml(row.prompt)}</span>
          <select class="match-select" data-match-index="${index}" ${state.checked ? "disabled" : ""}>
            <option value="">Choose a match</option>
            ${choiceOrder
              .map(
                (choiceIndex) =>
                  `<option value="${choiceIndex}" ${Number(selected) === choiceIndex ? "selected" : ""}>${escapeHtml(special.choices[choiceIndex])}</option>`,
              )
              .join("")}
          </select>
        </label>`;
      })
      .join("")}
  </fieldset>`;
}

function renderQuestion(question, scope, state) {
  const special = nonstandardFor(question);
  const shownQuestion = displayQuestion(question);
  const selfCheck = isSelfCheck(question);
  const inputType = shownQuestion.type === "multiple" ? "checkbox" : "radio";
  const optionOrder = state.optionOrder.length
    ? state.optionOrder
    : shownQuestion.options.map((_, index) => index);
  const choices = special?.kind === "matching"
    ? renderMatchingControls(question, state, special)
    : selfCheck
    ? ""
    : `<fieldset class="choice-fieldset">
        <legend class="sr-only">${shownQuestion.type === "multiple" ? "Select all correct answers" : "Choose the correct answer"}</legend>
        ${optionOrder
          .map((index, displayIndex) => {
            const option = shownQuestion.options[index];
            const selected = state.selected.includes(index);
            const classes = ["choice"];
            if (state.checked && option.correct) classes.push("is-correct");
            if (state.checked && selected && !option.correct) classes.push("is-wrong");
            return `<label class="${classes.join(" ")}">
              <input
                type="${inputType}"
                name="${scope}-${question.id}"
                value="${index}"
                ${selected ? "checked" : ""}
                ${state.checked ? "disabled" : ""}
                aria-keyshortcuts="${displayIndex + 1}"
              />
              <span class="choice-number" aria-hidden="true">${displayIndex + 1}</span>
              <span class="choice-content">${prepareHtml(option.html, scope)}</span>
            </label>`;
          })
          .join("")}
      </fieldset>`;

  const checkButton = state.checked
    ? ""
    : `<button
        class="button"
        type="button"
        data-action="check"
        ${
          special?.kind === "matching"
            ? Object.keys(state.matches).length !== special.rows.length
              ? "disabled"
              : ""
            : !selfCheck && state.selected.length === 0
              ? "disabled"
              : ""
        }
      >${selfCheck ? "Reveal answer" : "Check answer"}</button>`;

  const questionClasses = ["question"];
  if (special) questionClasses.push(`is-${special.kind}`);

  return `<article class="${questionClasses.join(" ")}" data-question-id="${question.id}" data-scope="${scope}">
    <div class="question-prompt">${prepareHtml(shownQuestion.questionHtml, scope)}</div>
    ${choices}
    <div class="question-actions">${checkButton}</div>
    ${state.checked ? renderResult(question, scope, state) : ""}
  </article>`;
}

function renderResult(question, scope, state) {
  const selfCheck = isSelfCheck(question);
  let status;
  if (selfCheck && !state.scored) status = "Answer revealed.";
  else if (state.correct) status = "Correct.";
  else status = "Study this one again.";

  let actions;
  if (selfCheck && !state.scored) {
    actions = `<button class="button" type="button" data-action="self-score" data-score="correct">I got it</button>
      <button class="button secondary" type="button" data-action="self-score" data-score="incorrect">Study again</button>`;
  } else if (scope === "list") {
    actions = `<button class="button secondary" type="button" data-action="reset-question">Try again</button>`;
  } else {
    actions = `<button class="button" type="button" data-action="next-random">Next question</button>`;
  }

  return `<section class="result${state.scored && !state.correct ? " is-wrong" : ""}" aria-label="Answer result" tabindex="-1">
    <p class="result-status"><strong>${status}</strong></p>
    <div class="answer-key">
      <p class="answer-label">Correct answer</p>
      ${answerSummary(question, scope)}
    </div>
    <div class="explanation">
      <p class="explanation-label">Explanation</p>
      ${explanationFor(question, scope)}
    </div>
    <div class="question-actions">${actions}</div>
  </section>`;
}

const STUDY_TIERS = [
  { key: "retry", label: "Needs review" },
  { key: "unseen", label: "Unseen" },
  { key: "solid", label: "Solid" },
];

function studyTierFor(question) {
  return studyTierForCard(cardFor(question.id));
}

function sortByMasteryNeed(left, right) {
  const leftCard = cardFor(left.id);
  const rightCard = cardFor(right.id);
  if (leftCard.reps === 0 && rightCard.reps === 0) {
    return left.number - right.number;
  }
  if (leftCard.due !== rightCard.due) {
    return (leftCard.due || Infinity) - (rightCard.due || Infinity);
  }
  if (leftCard.stability !== rightCard.stability) {
    return (leftCard.stability || 0) - (rightCard.stability || 0);
  }
  return left.number - right.number;
}

function renderReferenceQuestion(question, masteryLabel) {
  const shownQuestion = displayQuestion(question);
  return `<article class="question reference-question" data-question-id="${question.id}" data-scope="list" aria-label="${masteryLabel} question">
    <div class="question-prompt">${prepareHtml(shownQuestion.questionHtml, "list")}</div>
    <section class="reference-answer" aria-label="Answer">
      <div class="answer-key">
        <p class="answer-label">Correct answer</p>
        ${answerSummary(question, "list")}
      </div>
      <div class="explanation">
        <p class="explanation-label">Explanation</p>
        ${explanationFor(question, "list")}
      </div>
    </section>
  </article>`;
}

function renderList() {
  const query = searchTerm.trim().toLowerCase();
  const filtered = questions.filter((question) => {
    if (!query) return true;
    const special = nonstandardFor(question);
    const shownQuestion = displayQuestion(question);
    return (
      shownQuestion.questionText.toLowerCase().includes(query) ||
      shownQuestion.options.some((option) => option.text.toLowerCase().includes(query)) ||
      special?.rows?.some(
        (row) =>
          row.prompt.toLowerCase().includes(query) ||
          special.choices[row.answer].toLowerCase().includes(query),
      )
    );
  });

  const groups = STUDY_TIERS.map((tier) => ({
    ...tier,
    questions: filtered
      .filter((question) => studyTierFor(question) === tier.key)
      .sort(sortByMasteryNeed),
  })).filter((tier) => tier.questions.length > 0);

  app.innerHTML = `${renderProgress()}
    <section aria-label="Question list">
      <label class="search-label">
        <span class="sr-only">Search questions</span>
        <input class="search-input" type="search" placeholder="Search questions" value="${escapeHtml(searchTerm)}" />
      </label>
      <div class="question-list">
        ${
          filtered.length
            ? groups
                .map(
                  (tier) => `<section class="mastery-group" data-mastery="${tier.key}" aria-labelledby="mastery-${tier.key}">
                    <header class="mastery-heading">
                      <h2 id="mastery-${tier.key}">${tier.label}</h2>
                      <span>${tier.questions.length}</span>
                    </header>
                    ${tier.questions
                      .map((question) => renderReferenceQuestion(question, tier.label))
                      .join("")}
                  </section>`,
                )
                .join("")
            : '<p class="empty-state">No questions match that search.</p>'
        }
      </div>
    </section>`;
}

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function enqueueRetry(questionId, gap) {
  retryQueue = retryQueue.filter((item) => item.id !== questionId);
  retryQueue.push({ id: questionId, availableAt: sessionTurns + gap });
}

function pickNewQuestion(newIds) {
  const newSet = new Set(newIds);
  coverageDeck = coverageDeck.filter((id) => newSet.has(id));
  if (coverageDeck.length === 0) coverageDeck = shuffle(newIds);
  return coverageDeck.pop();
}

function pickPracticeQuestion() {
  const validIds = new Set(questions.map((question) => question.id));
  practiceDeck = practiceDeck.filter((id) => validIds.has(id));
  if (practiceDeck.length === 0) practiceDeck = shuffle([...validIds]);

  let pickIndex = practiceDeck.length - 1;
  for (let index = practiceDeck.length - 1; index >= 0; index -= 1) {
    if (!recentIds.includes(practiceDeck[index])) {
      pickIndex = index;
      break;
    }
  }
  return practiceDeck.splice(pickIndex, 1)[0];
}

function chooseNextQuestionId() {
  const now = Date.now();
  const newIds = questions
    .filter((question) => cardFor(question.id).reps === 0)
    .map((question) => question.id);
  const readyRetryIndex = retryQueue.findIndex(
    (item) => item.availableAt <= sessionTurns,
  );
  const dueQuestions = questions
    .filter((question) => {
      const card = cardFor(question.id);
      return card.reps > 0 && card.due <= now;
    })
    .sort((left, right) => cardFor(left.id).due - cardFor(right.id).due);

  // Keep the first pass uninterrupted so learners see the entire test before
  // returning to questions that need reinforcement.
  if (newIds.length) {
    return pickNewQuestion(newIds);
  }

  if (readyRetryIndex >= 0) {
    return retryQueue.splice(readyRetryIndex, 1)[0].id;
  }

  if (dueQuestions.length) {
    return dueQuestions[0].id;
  }

  return pickPracticeQuestion();
}

function nextRandomQuestion() {
  const nextId = chooseNextQuestionId();
  randomQuestion = questions.find((question) => question.id === nextId);
  recentIds = [...recentIds.filter((id) => id !== nextId), nextId].slice(-6);
  randomState = emptyState(randomQuestion);
}

function renderRandom() {
  if (!randomQuestion) nextRandomQuestion();
  app.innerHTML = `${renderProgress()}
    <section aria-label="Spaced repetition review">
      <div class="random-question">
        ${renderQuestion(randomQuestion, "random", randomState)}
      </div>
    </section>`;
}

function render() {
  if (questions.length === 0) return;
  document.title = `${mode === "random" ? "Review" : "All Questions"} · ${COURSE_TITLE}`;
  if (mode === "random") renderRandom();
  else renderList();
}

function stateFor(questionId, scope) {
  if (scope === "random") return randomState;
  if (!listState.has(questionId)) {
    const question = questions.find((item) => item.id === questionId);
    listState.set(questionId, emptyState(question));
  }
  return listState.get(questionId);
}

function scoreQuestion(question, state, wasCorrect, scope) {
  if (state.scored) return;
  state.correct = wasCorrect;
  state.scored = true;
  const updatedCard = recordReview(question.id, wasCorrect);
  if (scope === "random") {
    sessionTurns += 1;
    if (wasCorrect) sessionCorrect += 1;
  }
  if (studyTierForCard(updatedCard) === "solid") {
    retryQueue = retryQueue.filter((item) => item.id !== question.id);
  } else {
    const gap = wasCorrect ? 25 : 10;
    enqueueRetry(question.id, gap);
  }
}

function resetAllProgress() {
  if (!window.confirm(`Reset all ${COURSE_TITLE} progress on this browser?`)) return;
  progressData = { version: STORAGE_VERSION, cards: {} };
  saveProgress();
  listState.clear();
  coverageDeck = [];
  practiceDeck = [];
  retryQueue = [];
  sessionTurns = 0;
  sessionCorrect = 0;
  recentIds = [];
  randomQuestion = null;
  randomState = emptyState();
  render();
}

app.addEventListener("change", (event) => {
  const matchSelect = event.target.closest(".match-select");
  if (matchSelect) {
    const questionElement = matchSelect.closest(".question");
    const questionId = Number(questionElement.dataset.questionId);
    const state = stateFor(questionId, questionElement.dataset.scope);
    const index = Number(matchSelect.dataset.matchIndex);
    if (matchSelect.value === "") delete state.matches[index];
    else state.matches[index] = Number(matchSelect.value);
    const special = NONSTANDARD_QUESTIONS[questionId];
    questionElement.querySelector('[data-action="check"]').disabled =
      Object.keys(state.matches).length !== special.rows.length;
    return;
  }

  const input = event.target.closest(".choice input");
  if (!input) return;
  const questionElement = input.closest(".question");
  const questionId = Number(questionElement.dataset.questionId);
  const state = stateFor(questionId, questionElement.dataset.scope);
  state.selected = [
    ...questionElement.querySelectorAll(".choice input:checked"),
  ].map((item) => Number(item.value));
  questionElement.querySelector('[data-action="check"]').disabled =
    state.selected.length === 0;
});

app.addEventListener("input", (event) => {
  if (!event.target.matches(".search-input")) return;
  const cursor = event.target.selectionStart;
  searchTerm = event.target.value;
  renderList();
  const nextInput = app.querySelector(".search-input");
  nextInput.focus();
  nextInput.setSelectionRange(cursor, cursor);
});

window.addEventListener("keydown", (event) => {
  const isNumberShortcut = /^[1-9]$/.test(event.key);
  const isEnterShortcut = event.key === "Enter";
  if (
    event.defaultPrevented ||
    event.repeat ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    (!isNumberShortcut && !isEnterShortcut)
  ) {
    return;
  }

  const target = event.target instanceof Element ? event.target : null;
  if (
    target?.closest(
      'textarea, select, [contenteditable="true"], input:not([type="radio"]):not([type="checkbox"])',
    )
  ) {
    return;
  }

  const questionElement = app.querySelector(".random-question .question");
  if (!questionElement) return;

  if (isEnterShortcut) {
    if (target?.closest("button, a")) return;
    const action = questionElement.querySelector(
      '[data-action="check"]:not(:disabled), [data-action="next-random"]',
    );
    if (!action) return;
    event.preventDefault();
    action.click();
    return;
  }

  if (questionElement.querySelector(".result")) return;

  const inputs = [...questionElement.querySelectorAll(".choice input")];
  const input = inputs[Number(event.key) - 1];
  if (!input || input.disabled) return;

  event.preventDefault();
  input.click();
  input.focus({ preventScroll: true });
});

app.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "reset-progress") {
    resetAllProgress();
    return;
  }

  if (action === "next-random") {
    nextRandomQuestion();
    renderRandom();
    window.scrollTo({ top: app.offsetTop - 12, behavior: "smooth" });
    return;
  }

  const questionElement = button.closest(".question");
  const questionId = Number(questionElement.dataset.questionId);
  const scope = questionElement.dataset.scope;
  const question = questions.find((item) => item.id === questionId);
  const state = stateFor(questionId, scope);

  if (action === "check") {
    state.checked = true;
    if (!isSelfCheck(question)) {
      scoreQuestion(
        question,
        state,
        isCorrect(question, state.selected, state.matches),
        scope,
      );
    }
    render();
    document
      .querySelector(`[data-question-id="${questionId}"] .result`)
      ?.focus();
    return;
  }

  if (action === "reset-question") {
    listState.set(questionId, emptyState(question));
    renderList();
    document.querySelector(`[data-question-id="${questionId}"]`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    return;
  }

  if (action === "self-score") {
    const wasCorrect = button.dataset.score === "correct";
    scoreQuestion(question, state, wasCorrect, scope);
    if (scope === "random") {
      nextRandomQuestion();
      renderRandom();
      window.scrollTo({ top: app.offsetTop - 12, behavior: "smooth" });
    } else {
      renderList();
      document
        .querySelector(`[data-question-id="${questionId}"] .result`)
        ?.focus();
    }
  }
});

modeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setMode(link.dataset.mode);
  });
});

window.addEventListener("popstate", () => {
  setMode(readMode(), false);
});

async function start() {
  if (mode === "random") {
    const url = new URL(window.location.href);
    if (url.searchParams.has("mode")) {
      url.searchParams.delete("mode");
      try {
        window.history.replaceState({}, "", url);
      } catch {
        // Some browsers restrict history updates for pages opened from disk.
      }
    }
  }
  updateModeLinks();
  try {
    if (!Array.isArray(window.CCNA_OFFLINE_QUESTIONS)) {
      throw new Error("The packaged question data is missing");
    }
    questions = window.CCNA_OFFLINE_QUESTIONS;
    render();
  } catch (error) {
    app.innerHTML = `<p class="error-state">The question data could not be loaded. ${escapeHtml(error.message)}</p>`;
  }
}

start();

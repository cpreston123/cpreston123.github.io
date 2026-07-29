(() => {
  const NOT_USED = "Not used";
  const matching = (choices, pairs, explanationHtml) => ({
    kind: "matching",
    choices,
    rows: pairs.map(([prompt, answer]) => {
      const answerIndex = choices.indexOf(answer);
      if (answerIndex < 0) throw new Error(`Missing matching choice: ${answer}`);
      return { prompt, answer: answerIndex };
    }),
    explanationHtml,
  });
  const crudMatch = () => matching(
    ["POST", "GET", "PUT/PATCH", "DELETE"],
    [
      ["read", "GET"],
      ["create", "POST"],
      ["delete", "DELETE"],
      ["update", "PUT/PATCH"],
    ],
    "<p>REST commonly maps CRUD operations to HTTP methods as follows: create uses POST, read uses GET, update uses PUT or PATCH, and delete uses DELETE.</p>",
  );

  window.CCNA_STUDY_CONFIG = {
    courseTitle: "CCNA 3 Final Study",
    storageKey: "ccna-3-study-progress-fsrs-v1",
    nonstandardQuestions: {
      20055: matching(
        ["CPE", "DCE", "DTE", "local loop", NOT_USED],
        [
          ["service provider facility that connects the CPE to the provider network", NOT_USED],
          ["devices and inside wiring on the enterprise edge that connect to a carrier link", "CPE"],
          ["physical connection from the customer to the service provider point of presence", "local loop"],
          ["location where connection responsibility changes from customer to service provider", NOT_USED],
          ["customer devices that pass data from a customer network for WAN transmission", "DTE"],
          ["devices that provide an interface for customers to connect to the WAN cloud", "DCE"],
        ],
        "<p>CPE is the equipment at the customer edge, the local loop connects the customer to the provider, DTE originates customer data, and DCE supplies the WAN-facing interface. The point of presence and demarcation point are separate terms.</p>",
      ),
      20060: crudMatch(),
      16350: {
        kind: "choice",
        options: [
          { html: "permitted", text: "permitted", correct: true },
          { html: "denied", text: "denied", correct: false },
        ],
        explanationHtml: "<p>The source address is inside 172.18.20.0/27, the destination is inside 172.18.20.32/27, and TCP port 21 matches <code>eq ftp</code>, so the packet is permitted.</p>",
      },
      20082: matching(
        ["fragment", "Uniform Resource Identifier (URI)", "protocol", "Uniform Resource Name (URN)", "page information", "Uniform Resource Locator (URL)"],
        [
          ["http", "protocol"],
          ["www.buycarsfromus.com/2020models/ford/suv.html", "Uniform Resource Name (URN)"],
          ["http://www.buycarsfromus.com/2020models/ford/suv.html", "Uniform Resource Locator (URL)"],
          ["http://www.buycarsfromus.com/2020models/ford/suv.html#Escape", "Uniform Resource Identifier (URI)"],
          ["#Escape", "fragment"],
        ],
        "<p>HTTP is the protocol, the host and path form the named resource, the full address without a fragment is the URL, the complete reference is the URI, and #Escape is the fragment. Page information is unused.</p>",
      ),
      20085: crudMatch(),
      20087: matching(
        ["access layer", "distribution layer", "core layer", NOT_USED],
        [
          ["provides high-speed backbone connectivity", "core layer"],
          ["implements personal firewalls on client computers", NOT_USED],
          ["provides network access to the user", "access layer"],
          ["implements network access policy", "distribution layer"],
          ["represents the network edge", "access layer"],
          ["establishes Layer 3 routing boundaries", "distribution layer"],
          ["functions as an aggregator for all campus blocks", "core layer"],
        ],
        "<p>The access layer connects users at the edge, the distribution layer enforces policy and establishes Layer 3 boundaries, and the core supplies fast resilient backbone connectivity.</p>",
      ),
      20090: matching(
        ["customer premises equipment", "demarcation point", "data terminal equipment", "data communications equipment", NOT_USED],
        [
          ["devices that put data on the local loop", "data communications equipment"],
          ["devices and inside wiring at the enterprise edge that connect to a carrier link", "customer premises equipment"],
          ["point separating customer equipment from service provider equipment", "demarcation point"],
          ["service provider facility that connects CPE to the provider network", NOT_USED],
          ["customer devices that pass data from a host or network for WAN transmission", "data terminal equipment"],
        ],
        "<p>DCE places signals on the local loop, CPE is located at the customer edge, the demarcation point divides customer and provider responsibility, and DTE originates customer data. The provider facility is the point of presence.</p>",
      ),
      20092: crudMatch(),
    },
  };
})();

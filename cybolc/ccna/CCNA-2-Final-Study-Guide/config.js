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

  window.CCNA_STUDY_CONFIG = {
    courseTitle: "CCNA 2 Final Study",
    storageKey: "ccna-2-study-progress-fsrs-v1",
    nonstandardQuestions: {
      20025: matching(
        ["cut-through", "store-and-forward"],
        [
          ["appropriate for high-performance computing applications", "cut-through"],
          ["performs error checking before forwarding", "store-and-forward"],
          ["can begin forwarding after receiving the destination address", "cut-through"],
          ["only begins forwarding after receiving the entire frame", "store-and-forward"],
          ["may forward invalid frames", "cut-through"],
          ["only forwards valid frames", "store-and-forward"],
        ],
        "<p>Cut-through switching starts as soon as the destination address is read, which lowers latency but can forward damaged frames. Store-and-forward receives and validates the entire frame before sending it.</p>",
      ),
      20027: matching(
        ["administratively down", "down/down", "up/disabled", "up/down", "up/up"],
        [
          ["disabled", "administratively down"],
          ["Layer 1 problem", "down/down"],
          ["Layer 2 problem", "up/down"],
          ["operational", "up/up"],
        ],
        "<p>An administratively disabled interface reports administratively down. A Layer 1 failure produces down/down, a Layer 2 failure produces up/down, and a fully operational interface reports up/up.</p>",
      ),
      20028: matching(
        ["default VLAN", "management VLAN", "data VLAN", "native VLAN", NOT_USED],
        [
          ["configured to carry user-generated traffic", "data VLAN"],
          ["all switch ports are assigned to this VLAN after the switch initially boots", "default VLAN"],
          ["carries untagged traffic on an 802.1Q trunk", "native VLAN"],
          ["has an IP address and subnet mask so the switch can be managed", "management VLAN"],
          ["is only accessible by the network administrator", NOT_USED],
        ],
        "<p>Data VLANs carry user traffic, the default VLAN initially contains every port, the native VLAN carries untagged trunk traffic, and the management VLAN gives the switch an address for administrative access.</p>",
      ),
      22313: matching(
        ["step 1", "step 2", "step 3", "step 4", "step 5", "step 6"],
        [
          ["execute POST", "step 1"],
          ["load the boot loader from ROM", "step 2"],
          ["perform low-level CPU initialization", "step 3"],
          ["initialize the flash file system", "step 4"],
          ["load the IOS", "step 5"],
          ["transfer switch control to the IOS", "step 6"],
        ],
        "<p>A switch runs POST, loads and initializes the boot loader and CPU, initializes flash, loads IOS, and finally hands control to IOS.</p>",
      ),
      20038: matching(
        ["DHCPREQUEST", "DHCPDISCOVER", "DHCPNAK", "DHCPOFFER", "DHCPACK"],
        [
          ["locates any available DHCP server on a network", "DHCPDISCOVER"],
          ["identifies the server and lease offer the client accepts", "DHCPREQUEST"],
          ["acknowledges that the lease was successful", "DHCPACK"],
          ["suggests a lease to a client", "DHCPOFFER"],
        ],
        "<p>DHCP follows DORA: the client discovers, the server offers, the client requests the selected offer, and the server acknowledges the lease. DHCPNAK is used when a requested lease cannot be honored.</p>",
      ),
      20040: matching(
        ["DHCPACK", "DHCPREQUEST", "DHCPNAK", "DHCPDISCOVER", "DHCPOFFER"],
        [
          ["a client initiates a message to find a DHCP server", "DHCPDISCOVER"],
          ["a DHCP server responds to the client's initial request", "DHCPOFFER"],
          ["the client accepts the IP address offered by the server", "DHCPREQUEST"],
          ["the DHCP server confirms that the address lease was accepted", "DHCPACK"],
        ],
        "<p>The four-message DHCPv4 exchange is DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, then DHCPACK. DHCPNAK is not part of a successful lease exchange.</p>",
      ),
      20042: matching(
        ["Step 1", "Step 2", "Step 3", "Step 4", NOT_USED],
        [
          ["DHCPACK", "Step 4"],
          ["DHCPREQUEST", "Step 3"],
          ["DHCPDISCOVER", "Step 1"],
          ["DHCPREPLY", NOT_USED],
          ["DHCPINFORMATION-REQUEST", NOT_USED],
          ["DHCPOFFER", "Step 2"],
        ],
        "<p>The DHCPv4 order is Discover, Offer, Request, Acknowledge. DHCPREPLY and DHCPINFORMATION-REQUEST are DHCPv6 messages and are not used here.</p>",
      ),
      20043: matching(
        ["Step 1", "Step 2", "Step 3", NOT_USED],
        [
          ["the standby router assumes the forwarding role with the virtual IP and MAC addresses", "Step 3"],
          ["the standby router stops seeing hello messages from the forwarding router", "Step 2"],
          ["the forwarding router fails", "Step 1"],
          ["the host initiates an ARP request for the forwarding router's MAC address", NOT_USED],
        ],
        "<p>After the active router fails, the standby detects the missing hello messages and assumes the active role using the same virtual IP and MAC addresses. Hosts do not need to relearn a physical router MAC.</p>",
      ),
    },
  };
})();

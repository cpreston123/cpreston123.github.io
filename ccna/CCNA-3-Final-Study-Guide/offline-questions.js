window.CCNA_OFFLINE_QUESTIONS = [
  {
    "id": 16300,
    "number": 1,
    "type": "single",
    "questionHtml": "Which design feature will limit the size of a failure domain in an enterprise network?",
    "questionText": "Which design feature will limit the size of a failure domain in an enterprise network?",
    "options": [
      {
        "html": "the purchase of enterprise equipment that is designed for large traffic volume",
        "text": "the purchase of enterprise equipment that is designed for large traffic volume",
        "correct": false
      },
      {
        "html": "the installation of redundant power supplies",
        "text": "the installation of redundant power supplies",
        "correct": false
      },
      {
        "html": "the use of a collapsed core design",
        "text": "the use of a collapsed core design",
        "correct": false
      },
      {
        "html": "the use of the building switch block approach",
        "text": "the use of the building switch block approach",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 11.2.3<br> In order to best limit the of a failure domain, routers or multilayer switches can be deployed in pairs. The failure of a single device should not cause the network to go down. Installing redundant power supplies may protect a single device from a power failure, but if that device suffers from another type of problem, a redundant device would have been a better solution. Purchasing enterprise equipment that handles large flows of traffic will not provide extra reliability in times of an outage. If a collapsed core design is used, the core and distribution are collapsed into a single device, increasing the chance of a devastating outage.</p>"
  },
  {
    "id": 16301,
    "number": 2,
    "type": "multiple",
    "questionHtml": "Which two things should a network administrator modify on a router to perform password recovery? (Choose two.)",
    "questionText": "Which two things should a network administrator modify on a router to perform password recovery? (Choose two.)",
    "options": [
      {
        "html": "the system image file",
        "text": "the system image file",
        "correct": false
      },
      {
        "html": "the NVRAM file system",
        "text": "the NVRAM file system",
        "correct": false
      },
      {
        "html": "the configuration register value",
        "text": "the configuration register value",
        "correct": true
      },
      {
        "html": "the startup configuration file",
        "text": "the startup configuration file",
        "correct": true
      },
      {
        "html": "system ROM",
        "text": "system ROM",
        "correct": false
      }
    ],
    "explanationHtml": "To perform password recovery, the administrator must first change the <strong>configuration register value</strong> (typically to 0x2142) while in ROMMON mode. This setting instructs the router to <strong>ignore the startup configuration file</strong> during the boot process, allowing access to the device without a password. Once the router has loaded, the administrator copies the original configuration into RAM, sets a new password, and then <strong>modifies the startup configuration file</strong> by saving the new settings to ensure the recovery is permanent."
  },
  {
    "id": 16302,
    "number": 3,
    "type": "single",
    "questionHtml": "What type of network uses one common infrastructure to carry voice, data, and video signals?",
    "questionText": "What type of network uses one common infrastructure to carry voice, data, and video signals?",
    "options": [
      {
        "html": "borderless",
        "text": "borderless",
        "correct": false
      },
      {
        "html": "converged",
        "text": "converged",
        "correct": true
      },
      {
        "html": "managed",
        "text": "managed",
        "correct": false
      },
      {
        "html": "switched",
        "text": "switched",
        "correct": false
      }
    ],
    "explanationHtml": "<p>Topic 11.1.2<br> A converged network has only one physical network to install and manage. This results in substantial savings over the installation and management of separate voice, video, and data networks.</p>"
  },
  {
    "id": 16303,
    "number": 4,
    "type": "multiple",
    "questionHtml": "What are three advantages of using private IP addresses and NAT? (Choose three.)",
    "questionText": "What are three advantages of using private IP addresses and NAT? (Choose three.)",
    "options": [
      {
        "html": "hides private LAN addressing from outside devices that are connected to the Internet",
        "text": "hides private LAN addressing from outside devices that are connected to the Internet",
        "correct": true
      },
      {
        "html": "permits LAN expansion without additional public IP addresses",
        "text": "permits LAN expansion without additional public IP addresses",
        "correct": true
      },
      {
        "html": "reduces CPU usage on customer routers",
        "text": "reduces CPU usage on customer routers",
        "correct": false
      },
      {
        "html": "creates multiple public IP addresses",
        "text": "creates multiple public IP addresses",
        "correct": false
      },
      {
        "html": "improves the performance of the router that is connected to the Internet",
        "text": "improves the performance of the router that is connected to the Internet",
        "correct": false
      },
      {
        "html": "conserves registered public IP addresses",
        "text": "conserves registered public IP addresses",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 6.3.1<br> Private IP addresses are designed to be exclusively used for internal networks and they cannot be used on the Internet. Thus they are not visible directly from the Internet and they can be used freely by network administrators for internal networks. In order for the internal hosts to access the Internet, NAT is used to translate between private and public IP addresses. NAT takes an internal private IP address and translates it to a global public IP address before the packet is forwarded.</p>"
  },
  {
    "id": 16304,
    "number": 5,
    "type": "multiple",
    "questionHtml": "Which two scenarios are examples of remote access VPNs? (Choose two.)",
    "questionText": "Which two scenarios are examples of remote access VPNs? (Choose two.)",
    "options": [
      {
        "html": "All users at a large branch office can access company resources through a single VPN connection.",
        "text": "All users at a large branch office can access company resources through a single VPN connection.",
        "correct": false
      },
      {
        "html": "A small branch office with three employees has a Cisco ASA that is used to create a VPN connection to the HQ.",
        "text": "A small branch office with three employees has a Cisco ASA that is used to create a VPN connection to the HQ.",
        "correct": false
      },
      {
        "html": "A toy manufacturer has a permanent VPN connection to one of its parts suppliers.",
        "text": "A toy manufacturer has a permanent VPN connection to one of its parts suppliers.",
        "correct": false
      },
      {
        "html": "A mobile sales agent is connecting to the company network via the Internet connection at a hotel.",
        "text": "A mobile sales agent is connecting to the company network via the Internet connection at a hotel.",
        "correct": true
      },
      {
        "html": "An employee who is working from home uses VPN client software on a laptop in order to connect to the company network.",
        "text": "An employee who is working from home uses VPN client software on a laptop in order to connect to the company network.",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 8.2.1<br> Remote access VPNs connect individual users to another network via a VPN client that is installed on the user device. Site-to-site VPNs are “always on” connections that use VPN gateways to connect two sites together. Users at each site can access the network on the other site without having to use any special clients or configurations on their individual devices.</p>"
  },
  {
    "id": 16305,
    "number": 6,
    "type": "multiple",
    "questionHtml": "What are three benefits of cloud computing? (Choose three.)",
    "questionText": "What are three benefits of cloud computing? (Choose three.)",
    "options": [
      {
        "html": "It utilizes end-user clients to do a substantial amount of data preprocessing and storage.",
        "text": "It utilizes end-user clients to do a substantial amount of data preprocessing and storage.",
        "correct": false
      },
      {
        "html": "It uses open-source software for distributed processing of large datasets.",
        "text": "It uses open-source software for distributed processing of large datasets.",
        "correct": false
      },
      {
        "html": "It streamlines the IT operations of an organization by subscribing only to needed services.",
        "text": "It streamlines the IT operations of an organization by subscribing only to needed services.",
        "correct": true
      },
      {
        "html": "It enables access to organizational data anywhere and at any time.",
        "text": "It enables access to organizational data anywhere and at any time.",
        "correct": true
      },
      {
        "html": "It turns raw data into meaningful information by discovering patterns and relationships.",
        "text": "It turns raw data into meaningful information by discovering patterns and relationships.",
        "correct": false
      },
      {
        "html": "It eliminates or reduces the need for onsite IT equipment, maintenance, and management.",
        "text": "It eliminates or reduces the need for onsite IT equipment, maintenance, and management.",
        "correct": true
      }
    ],
    "explanationHtml": "There are many benefits to using cloud computing, including these: – Access to organizational data anywhere and at any time – Streamlined IT operations in an organization by subscribing only to needed services – Elimination or reduction of the need for onsite IT equipment, maintenance, and management"
  },
  {
    "id": 16306,
    "number": 7,
    "type": "single",
    "questionHtml": "What is a characteristic of a single-area OSPF network?",
    "questionText": "What is a characteristic of a single-area OSPF network?",
    "options": [
      {
        "html": "All routers share a common forwarding database.",
        "text": "All routers share a common forwarding database.",
        "correct": false
      },
      {
        "html": "All routers have the same neighbor table.",
        "text": "All routers have the same neighbor table.",
        "correct": false
      },
      {
        "html": "All routers are in the backbone area.",
        "text": "All routers are in the backbone area.",
        "correct": true
      },
      {
        "html": "All routers have the same routing table.",
        "text": "All routers have the same routing table.",
        "correct": false
      }
    ],
    "explanationHtml": "In a <strong>single-area OSPF</strong> implementation, all participating routers are located within one administrative area. Best practice dictates that this single area should be <strong>Area 0</strong>, also known as the <strong>backbone area</strong>. This ensures that if the network scales to a multiarea design in the future, all other areas can connect directly to this required backbone. While routers in the same area share an identical <strong>Link-State Database (topology table)</strong>, their <strong>neighbor tables</strong> and <strong>routing tables (forwarding databases)</strong> are unique to each individual router based on its specific location and adjacencies."
  },
  {
    "id": 16307,
    "number": 8,
    "type": "single",
    "questionHtml": "What is a WAN?",
    "questionText": "What is a WAN?",
    "options": [
      {
        "html": "a network infrastructure that spans a limited physical area such as a city",
        "text": "a network infrastructure that spans a limited physical area such as a city",
        "correct": false
      },
      {
        "html": "a network infrastructure that provides access to other networks over a large geographic area",
        "text": "a network infrastructure that provides access to other networks over a large geographic area",
        "correct": true
      },
      {
        "html": "a network infrastructure that provides access in a small geographic area",
        "text": "a network infrastructure that provides access in a small geographic area",
        "correct": false
      },
      {
        "html": "a network infrastructure designed to provide data storage, retrieval, and replication",
        "text": "a network infrastructure designed to provide data storage, retrieval, and replication",
        "correct": false
      }
    ],
    "explanationHtml": "A <strong>Wide Area Network (WAN)</strong> is a telecommunications network designed to span a <strong>relatively large geographical area</strong>, such as between cities, countries, or continents. Unlike a Local Area Network (LAN), which is restricted to a small area like a single building or campus, a WAN is used to <strong>interconnect remote users, networks, and sites</strong> that are geographically separated."
  },
  {
    "id": 16308,
    "number": 9,
    "type": "single",
    "questionHtml": "A network administrator has been tasked with creating a disaster recovery plan. As part of this plan, the administrator is looking for a backup site for all of the data on the company servers. What service or technology would support this requirement?",
    "questionText": "A network administrator has been tasked with creating a disaster recovery plan. As part of this plan, the administrator is looking for a backup site for all of the data on the company servers. What service or technology would support this requirement?",
    "options": [
      {
        "html": "data center",
        "text": "data center",
        "correct": true
      },
      {
        "html": "virtualization",
        "text": "virtualization",
        "correct": false
      },
      {
        "html": "dedicated servers",
        "text": "dedicated servers",
        "correct": false
      },
      {
        "html": "software defined networking",
        "text": "software defined networking",
        "correct": false
      }
    ],
    "explanationHtml": "A <strong>data center</strong> is a dedicated facility used for the storage and processing of data, which can be managed by an in-house IT department or leased from an offsite provider. Because data centers provide the physical infrastructure for compute and storage needs, they serve as the primary <strong>backup site</strong> for disaster recovery plans, especially for smaller organizations that lease these services to reduce the cost of ownership. While virtualization is a technology used to <em>improve</em> disaster recovery, the data center is the actual service or facility that supports the requirement for a physical backup site."
  },
  {
    "id": 16309,
    "number": 10,
    "type": "single",
    "questionHtml": "Which type of OSPF packet is used by a router to discover neighbor routers and establish neighbor adjacency?",
    "questionText": "Which type of OSPF packet is used by a router to discover neighbor routers and establish neighbor adjacency?",
    "options": [
      {
        "html": "link-state update",
        "text": "link-state update",
        "correct": false
      },
      {
        "html": "hello",
        "text": "hello",
        "correct": true
      },
      {
        "html": "database description",
        "text": "database description",
        "correct": false
      },
      {
        "html": "link-state request",
        "text": "link-state request",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>Hello packet</strong> (OSPF Type 1) is specifically used to <strong>discover neighbors</strong> and <strong>establish neighbor adjacencies</strong> between OSPF routers. These packets are sent out of OSPF-enabled interfaces to identify neighboring routers and to advertise parameters that both routers must agree upon before sharing routing information."
  },
  {
    "id": 20047,
    "number": 11,
    "type": "multiple",
    "questionHtml": "Which two statements are characteristics of a virus? (Choose two.)",
    "questionText": "Which two statements are characteristics of a virus? (Choose two.)",
    "options": [
      {
        "html": "A virus has an enabling vulnerability, a propagation mechanism, and a payload.",
        "text": "A virus has an enabling vulnerability, a propagation mechanism, and a payload.",
        "correct": false
      },
      {
        "html": "A virus can be dormant and then activate at a specific time or date.",
        "text": "A virus can be dormant and then activate at a specific time or date.",
        "correct": true
      },
      {
        "html": "A virus provides the attacker with sensitive data, such as passwords.",
        "text": "A virus provides the attacker with sensitive data, such as passwords.",
        "correct": false
      },
      {
        "html": "A virus replicates itself by independently exploiting vulnerabilities in networks.",
        "text": "A virus replicates itself by independently exploiting vulnerabilities in networks.",
        "correct": false
      },
      {
        "html": "A virus typically requires end-user activation.",
        "text": "A virus typically requires end-user activation.",
        "correct": true
      }
    ],
    "explanationHtml": "The type of end user interaction required to launch a virus is typically opening an application, opening a web page, or powering on the computer. Once activated, a virus may infect other files located on the computer or other computers on the same network."
  },
  {
    "id": 16311,
    "number": 12,
    "type": "single",
    "questionHtml": "Which public WAN access technology utilizes copper telephone lines to provide access to subscribers that are multiplexed into a single T3 link connection?",
    "questionText": "Which public WAN access technology utilizes copper telephone lines to provide access to subscribers that are multiplexed into a single T3 link connection?",
    "options": [
      {
        "html": "ISDN",
        "text": "ISDN",
        "correct": false
      },
      {
        "html": "DSL",
        "text": "DSL",
        "correct": true
      },
      {
        "html": "cable",
        "text": "cable",
        "correct": false
      },
      {
        "html": "dialup",
        "text": "dialup",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Digital Subscriber Line (DSL)</strong> is a high-speed WAN technology that utilizes existing twisted-pair <strong>copper telephone lines</strong>. In a typical deployment, the provider uses a <strong>DSL Access Multiplexer (DSLAM)</strong> at the Central Office to concentrate and <strong>multiplex signals from multiple DSL subscribers</strong> into a single high-capacity backhaul connection, such as a <strong>T3 link</strong> or an optical fiber, to connect them to the internet."
  },
  {
    "id": 16312,
    "number": 13,
    "type": "single",
    "questionHtml": "A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?",
    "questionText": "A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?",
    "options": [
      {
        "html": "packet-switched network",
        "text": "packet-switched network",
        "correct": false
      },
      {
        "html": "Ethernet WAN",
        "text": "Ethernet WAN",
        "correct": true
      },
      {
        "html": "circuit-switched network",
        "text": "circuit-switched network",
        "correct": false
      },
      {
        "html": "MPLS",
        "text": "MPLS",
        "correct": false
      }
    ],
    "explanationHtml": "<p>Topic 7.4.3<br> MPLS can use a variety of underlying technologies such as T- and E-Carriers, Carrier Ethernet, ATM, Frame Relay, and DSL, all of which support lower speeds than an Ethernet WAN. Neither a circuit-switched network, such as the public switched telephone network (PSTN) or Integrated Service Digital Network (ISDN), nor a packet-switched network, is considered high speed.</p>"
  },
  {
    "id": 16313,
    "number": 14,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use debuggers?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use debuggers?",
    "options": [
      {
        "html": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "text": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "correct": false
      },
      {
        "html": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "text": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "correct": true
      },
      {
        "html": "to obtain specially designed operating systems preloaded with tools optimized for hacking",
        "text": "to obtain specially designed operating systems preloaded with tools optimized for hacking",
        "correct": false
      },
      {
        "html": "to detect any evidence of a hack or malware in a computer or network",
        "text": "to detect any evidence of a hack or malware in a computer or network",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Debuggers</strong> are penetration testing tools used by security professionals to <strong>reverse engineer binary files</strong>. This technique allows them to understand how a program functions at a low level, which is necessary for <strong>writing exploits</strong> during a penetration test or for <strong>analyzing malware</strong> to determine its behavior and impact. Examples of such tools include GDB, WinDbg, and IDA Pro."
  },
  {
    "id": 20048,
    "number": 15,
    "type": "single",
    "questionHtml": "Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown? <pre>R1# Standard IP access list 2 10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches) 20 deny any (1 match)</pre>",
    "questionText": "Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown? R1# Standard IP access list 2 10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches) 20 deny any (1 match)",
    "options": [
      {
        "html": "Two devices connected to the router have IP addresses of 192.168.10. x .",
        "text": "Two devices connected to the router have IP addresses of 192.168.10. x .",
        "correct": false
      },
      {
        "html": "Two devices were able to use SSH or Telnet to gain access to the router.",
        "text": "Two devices were able to use SSH or Telnet to gain access to the router.",
        "correct": true
      },
      {
        "html": "Traffic from one device was not allowed to come into one router port and be routed outbound a different router port.",
        "text": "Traffic from one device was not allowed to come into one router port and be routed outbound a different router port.",
        "correct": false
      },
      {
        "html": "Traffic from two devices was allowed to enter one router port and be routed outbound to a different router port.",
        "text": "Traffic from two devices was allowed to enter one router port and be routed outbound to a different router port.",
        "correct": false
      }
    ],
    "explanationHtml": "The access-class command is used only on VTY ports. VTY ports support Telnet and/or SSH traffic. The match permit ACE is how many attempts were allowed using the VTY ports. The match deny ACE shows that a device from a network other than 192.168.10.0 was not allowed to access the router through the VTY ports."
  },
  {
    "id": 16315,
    "number": 16,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to clear dynamic entries before the timeout has expired?",
    "questionText": "What command would be used as part of configuring NAT or PAT to clear dynamic entries before the timeout has expired?",
    "options": [
      {
        "html": "clear ip dhcp",
        "text": "clear ip dhcp",
        "correct": false
      },
      {
        "html": "clear ip nat translation",
        "text": "clear ip nat translation",
        "correct": true
      },
      {
        "html": "clear access-list counters",
        "text": "clear access-list counters",
        "correct": false
      },
      {
        "html": "clear ip pat statistics",
        "text": "clear ip pat statistics",
        "correct": false
      }
    ],
    "explanationHtml": "By default, dynamic translation entries remain in the NAT table for 24 hours unless reconfigured. The <strong>clear ip nat translation</strong> privileged EXEC mode command is used to manually clear these dynamic entries from the table before the timeout has expired, which is specifically useful for clearing past translations during configuration testing or when modifying NAT pools. While clear ip nat statistics clears the hit/miss counters, it does not remove the actual address mappings from the translation table."
  },
  {
    "id": 16316,
    "number": 17,
    "type": "multiple",
    "questionHtml": "What are two characteristics of video traffic? (Choose two.)",
    "questionText": "What are two characteristics of video traffic? (Choose two.)",
    "options": [
      {
        "html": "Video traffic consumes less network resources than voice traffic consumes.",
        "text": "Video traffic consumes less network resources than voice traffic consumes.",
        "correct": false
      },
      {
        "html": "Video traffic latency should not exceed 400 ms.",
        "text": "Video traffic latency should not exceed 400 ms.",
        "correct": true
      },
      {
        "html": "Video traffic is more resilient to loss than voice traffic is.",
        "text": "Video traffic is more resilient to loss than voice traffic is.",
        "correct": false
      },
      {
        "html": "Video traffic requires a minimum of 30 kbs of bandwidth.",
        "text": "Video traffic requires a minimum of 30 kbs of bandwidth.",
        "correct": false
      },
      {
        "html": "Video traffic is unpredictable and inconsistent.",
        "text": "Video traffic is unpredictable and inconsistent.",
        "correct": true
      }
    ],
    "explanationHtml": "Video traffic is characterized as <strong>unpredictable, inconsistent, and bursty</strong> because the number and size of packets vary depending on the content being transmitted (e.g., action sequences require more data than static scenes). To maintain an acceptable user experience and prevent degradation like blurriness or unsynchronized audio, the network must ensure that <strong>latency does not exceed 400 ms</strong>. Conversely, video is <em>less</em> resilient to loss than voice and requires significantly higher bandwidth (at least 384 Kbps)."
  },
  {
    "id": 16317,
    "number": 18,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server? <img src=\"./assets/2017-06-26_224429-1853f30f.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server?",
    "options": [
      {
        "html": "The IP NAT statement is incorrect.",
        "text": "The IP NAT statement is incorrect.",
        "correct": false
      },
      {
        "html": "Interface Fa0/1 should be identified as the outside NAT interface.",
        "text": "Interface Fa0/1 should be identified as the outside NAT interface.",
        "correct": false
      },
      {
        "html": "Interface S0/0/0 should be identified as the outside NAT interface.",
        "text": "Interface S0/0/0 should be identified as the outside NAT interface.",
        "correct": true
      },
      {
        "html": "The configuration is missing a valid access control list.",
        "text": "The configuration is missing a valid access control list.",
        "correct": false
      }
    ],
    "explanationHtml": "Interface S0/0/0 should be identified as the outside NAT interface. The command to do this would be R2(config-if)# ip nat outside."
  },
  {
    "id": 20049,
    "number": 19,
    "type": "single",
    "questionHtml": "In setting up a small office network, the network administrator decides to assign private IP addresses dynamically to workstations and mobile devices. Which feature must be enabled on the company router in order for office devices to access the internet?",
    "questionText": "In setting up a small office network, the network administrator decides to assign private IP addresses dynamically to workstations and mobile devices. Which feature must be enabled on the company router in order for office devices to access the internet?",
    "options": [
      {
        "html": "UPnP",
        "text": "UPnP",
        "correct": false
      },
      {
        "html": "MAC filtering",
        "text": "MAC filtering",
        "correct": false
      },
      {
        "html": "NAT",
        "text": "NAT",
        "correct": true
      },
      {
        "html": "QoS",
        "text": "QoS",
        "correct": false
      }
    ],
    "explanationHtml": "Network Address Translation (NAT) is the process used to convert private addresses to internet-routable addresses that allow office devices to access the internet."
  },
  {
    "id": 16319,
    "number": 20,
    "type": "single",
    "questionHtml": "A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?",
    "questionText": "A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?",
    "options": [
      {
        "html": "online collaboration",
        "text": "online collaboration",
        "correct": false
      },
      {
        "html": "BYOD",
        "text": "BYOD",
        "correct": false
      },
      {
        "html": "virtualization",
        "text": "virtualization",
        "correct": true
      },
      {
        "html": "maintaining communication integrity",
        "text": "maintaining communication integrity",
        "correct": false
      }
    ],
    "explanationHtml": "<p>Topic 13.2.3<br> Virtualization technology can run several different operating systems in parallel on a single CPU.</p>"
  },
  {
    "id": 16320,
    "number": 21,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Which address or addresses represent the inside global address? <img src=\"./assets/2017-06-26_224149-3a6d8e6c.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Which address or addresses represent the inside global address?",
    "options": [
      {
        "html": "192.168.0.100",
        "text": "192.168.0.100",
        "correct": false
      },
      {
        "html": "10.1.1.2",
        "text": "10.1.1.2",
        "correct": false
      },
      {
        "html": "any address in the 10.1.1.0 network",
        "text": "any address in the 10.1.1.0 network",
        "correct": false
      },
      {
        "html": "209.165.20.25",
        "text": "209.165.20.25",
        "correct": true
      }
    ],
    "explanationHtml": "In NAT terminology, an <strong>inside global address</strong> is the address of an internal host as seen from the outside network, typically a globally routable IPv4 address. According to the static NAT configuration syntax ip nat inside source static [inside local address] [inside global address], the address <strong>209.165.20.25</strong> is explicitly defined as the global representation for the internal host 192.168.0.100. Additionally, this address is assigned to the router’s <strong>outside interface</strong> (Serial 0/0/2), which is where translated traffic exits to reach external destinations."
  },
  {
    "id": 20050,
    "number": 22,
    "type": "multiple",
    "questionHtml": "Which two IPsec protocols are used to provide data integrity?",
    "questionText": "Which two IPsec protocols are used to provide data integrity?",
    "options": [
      {
        "html": "MD5",
        "text": "MD5",
        "correct": true
      },
      {
        "html": "DH",
        "text": "DH",
        "correct": false
      },
      {
        "html": "AES",
        "text": "AES",
        "correct": false
      },
      {
        "html": "SHA",
        "text": "SHA",
        "correct": true
      },
      {
        "html": "RSA",
        "text": "RSA",
        "correct": false
      }
    ],
    "explanationHtml": "The IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms used to ensure that data is not intercepted and modified (data integrity) are MD5 and SHA. AES is an encryption protocol and provides data confidentiality. DH (Diffie-Hellman) is an algorithm used for key exchange. RSA is an algorithm used for authentication."
  },
  {
    "id": 20051,
    "number": 23,
    "type": "single",
    "questionHtml": "If an outside host does not have the Cisco AnyConnect client preinstalled, how would the host gain access to the client image?",
    "questionText": "If an outside host does not have the Cisco AnyConnect client preinstalled, how would the host gain access to the client image?",
    "options": [
      {
        "html": "The Cisco AnyConnect client is installed by default on most major operating systems.",
        "text": "The Cisco AnyConnect client is installed by default on most major operating systems.",
        "correct": false
      },
      {
        "html": "The host initiates a clientless VPN connection using a compliant web browser to download the client.",
        "text": "The host initiates a clientless VPN connection using a compliant web browser to download the client.",
        "correct": true
      },
      {
        "html": "The host initiates a clientless connection to a TFTP server to download the client.",
        "text": "The host initiates a clientless connection to a TFTP server to download the client.",
        "correct": false
      },
      {
        "html": "The host initiates a clientless connection to an FTP server to download the client.",
        "text": "The host initiates a clientless connection to an FTP server to download the client.",
        "correct": false
      }
    ],
    "explanationHtml": "If an outside host does not have the Cisco AnyConnect client preinstalled, the remote user must initiate a clientless SSL VPN connection via a compliant web browser, and then download and install the AnyConnect client on the remote host."
  },
  {
    "id": 20052,
    "number": 24,
    "type": "multiple",
    "questionHtml": "A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
    "questionText": "A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
    "options": [
      {
        "html": "leased line",
        "text": "leased line",
        "correct": true
      },
      {
        "html": "cable",
        "text": "cable",
        "correct": false
      },
      {
        "html": "digital subscriber line",
        "text": "digital subscriber line",
        "correct": false
      },
      {
        "html": "Ethernet WAN",
        "text": "Ethernet WAN",
        "correct": true
      },
      {
        "html": "municipal Wi-Fi",
        "text": "municipal Wi-Fi",
        "correct": false
      }
    ],
    "explanationHtml": "An organization can connect to a WAN through basic two options: <ul><li><b>Private WAN infrastructure</b> – such as dedicated point-to-point leased lines, PSTN, ISDN, Ethernet WAN, ATM, or Frame Relay</li><li><b>Public WAN infrastructure</b> – such as digital subscriber line (DSL), cable, satellite access, municipal Wi-Fi, WiMAX, or wireless cellular including 3G/4G</li></ul>"
  },
  {
    "id": 16324,
    "number": 25,
    "type": "single",
    "questionHtml": "Which type of QoS marking is applied to Ethernet frames?",
    "questionText": "Which type of QoS marking is applied to Ethernet frames?",
    "options": [
      {
        "html": "IP precedence",
        "text": "IP precedence",
        "correct": false
      },
      {
        "html": "DSCP",
        "text": "DSCP",
        "correct": false
      },
      {
        "html": "ToS",
        "text": "ToS",
        "correct": false
      },
      {
        "html": "CoS",
        "text": "CoS",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 9.5.5<br> The class of service (CoS) marking allows a Layer 2 Ethernet frame to be marked with eight levels of priority (values 0–7). This marking can be used by QoS-enabled network devices to provide preferential traffic treatment.</p>"
  },
  {
    "id": 16325,
    "number": 26,
    "type": "multiple",
    "questionHtml": "Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.) <img src=\"./assets/2017-03-11_115313-c48d5094.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.)",
    "options": [
      {
        "html": "Both routers are configured to use NTPv2.",
        "text": "Both routers are configured to use NTPv2.",
        "correct": false
      },
      {
        "html": "Router R1 is the master, and R2 is the client",
        "text": "Router R1 is the master, and R2 is the client",
        "correct": true
      },
      {
        "html": "The IP address of R2 is 192 168.1.2.",
        "text": "The IP address of R2 is 192 168.1.2.",
        "correct": false
      },
      {
        "html": "Router R2 is the master, and R1 is the client",
        "text": "Router R2 is the master, and R1 is the client",
        "correct": false
      },
      {
        "html": "The IP address of R1 is 192.168.1.2",
        "text": "The IP address of R1 is 192.168.1.2",
        "correct": true
      }
    ],
    "explanationHtml": "With the show NTP associations command, the IP address of the NTP master is given."
  },
  {
    "id": 20053,
    "number": 27,
    "type": "multiple",
    "questionHtml": "Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.) <img src=\"./assets/i209858v1n1_209858-66d8fffc.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)",
    "options": [
      {
        "html": "R1(config)# interface s0/0/0 R1(config-if)# ip access-group 105 outR2(config)# interface gi0/0 R2(config-if)# ip access-group 105 in",
        "text": "R1(config)# interface s0/0/0 R1(config-if)# ip access-group 105 outR2(config)# interface gi0/0 R2(config-if)# ip access-group 105 in",
        "correct": false
      },
      {
        "html": "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20 access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21 access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www access-list 105 deny ip any host 10.0.54.5 access-list 105 permit ip any any",
        "text": "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20 access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21 access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www access-list 105 deny ip any host 10.0.54.5 access-list 105 permit ip any any",
        "correct": true
      },
      {
        "html": "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5 access-list 105 permit tcp any host 10.0.54.5 eq www access-list 105 permit ip any any",
        "text": "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5 access-list 105 permit tcp any host 10.0.54.5 eq www access-list 105 permit ip any any",
        "correct": false
      },
      {
        "html": "R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out",
        "text": "R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out",
        "correct": true
      },
      {
        "html": "access-list 105 permit tcp host 10.0.54.5 any eq www access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20 access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21",
        "text": "access-list 105 permit tcp host 10.0.54.5 any eq www access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20 access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21",
        "correct": false
      }
    ],
    "explanationHtml": "The first two lines of the ACL allow host 10.0.70.23 FTP access to the server that has the IP address of 10.0.54.5. The next line of the ACL allows HTTP access to the server from any host that has an IP address that starts with the number 10. The fourth line of the ACL denies any other type of traffic to the server from any source IP address. The last line of the ACL permits anything else in case there are other servers or devices added to the 10.0.54.0/28 network. Because traffic is being filtered from all other locations and for the 10.0.70.23 host device, the best place to put this ACL is closest to the server."
  },
  {
    "id": 16327,
    "number": 28,
    "type": "single",
    "questionHtml": "Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied? <img src=\"./assets/i282157v1n1_282156-05dbec7f.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied?",
    "options": [
      {
        "html": "inbound on the R2 G0/0 interface",
        "text": "inbound on the R2 G0/0 interface",
        "correct": false
      },
      {
        "html": "outbound on the R1 G0/1 interface",
        "text": "outbound on the R1 G0/1 interface",
        "correct": true
      },
      {
        "html": "inbound on the R1 G0/1 interface",
        "text": "inbound on the R1 G0/1 interface",
        "correct": false
      },
      {
        "html": "outbound on the R2 S0/0/1 interface",
        "text": "outbound on the R2 S0/0/1 interface",
        "correct": false
      }
    ],
    "explanationHtml": "Because standard access lists only filter on the source IP address, they are commonly placed closest to the destination network. In this example, the source packets will be coming from the R2 G0/0 network. The destination is the R1 G0/1 network. The proper ACL placement is outbound on the R1 G0/1 interface."
  },
  {
    "id": 16328,
    "number": 29,
    "type": "single",
    "questionHtml": "Which is a characteristic of a Type 2 hypervisor?​",
    "questionText": "Which is a characteristic of a Type 2 hypervisor?​",
    "options": [
      {
        "html": "does not require management console software",
        "text": "does not require management console software",
        "correct": true
      },
      {
        "html": "has direct access to server hardware resources",
        "text": "has direct access to server hardware resources",
        "correct": false
      },
      {
        "html": "best suited for enterprise environments",
        "text": "best suited for enterprise environments",
        "correct": false
      },
      {
        "html": "installs directly on hardware",
        "text": "installs directly on hardware",
        "correct": false
      }
    ],
    "explanationHtml": "<p>Topic 13.2.6<br> Type 2 hypervisors are hosted on an underlaying operating system and are best suited for consumer applications and those experimenting with virtualization. Unlike Type 1 hypervisors, Type 2 hypervisors do not require a management console and do not have direct access to hardware.​</p>"
  },
  {
    "id": 20054,
    "number": 30,
    "type": "multiple",
    "questionHtml": "What are the two types of VPN connections? (Choose two.)",
    "questionText": "What are the two types of VPN connections? (Choose two.)",
    "options": [
      {
        "html": "PPPoE",
        "text": "PPPoE",
        "correct": false
      },
      {
        "html": "Frame Relay",
        "text": "Frame Relay",
        "correct": false
      },
      {
        "html": "site-to-site",
        "text": "site-to-site",
        "correct": true
      },
      {
        "html": "remote access",
        "text": "remote access",
        "correct": true
      },
      {
        "html": "leased line",
        "text": "leased line",
        "correct": false
      }
    ],
    "explanationHtml": "PPPoE, leased lines, and Frame Relay are types of WAN technology, not types of VPN connections."
  },
  {
    "id": 16330,
    "number": 31,
    "type": "multiple",
    "questionHtml": "Refer to the exhibit. What three conclusions can be drawn from the displayed output? (Choose three.) <img src=\"./assets/i212860v1n1_212860-1-52375937.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. What three conclusions can be drawn from the displayed output? (Choose three.)",
    "options": [
      {
        "html": "The DR can be reached through the GigabitEthernet 0/0 interface.",
        "text": "The DR can be reached through the GigabitEthernet 0/0 interface.",
        "correct": true
      },
      {
        "html": "There have been 9 seconds since the last hello packet sent.",
        "text": "There have been 9 seconds since the last hello packet sent.",
        "correct": true
      },
      {
        "html": "This interface is using the default priority.",
        "text": "This interface is using the default priority.",
        "correct": false
      },
      {
        "html": "The router ID values were not the criteria used to select the DR and the BDR.",
        "text": "The router ID values were not the criteria used to select the DR and the BDR.",
        "correct": true
      },
      {
        "html": "The router ID on the DR router is 3.3.3.3",
        "text": "The router ID on the DR router is 3.3.3.3",
        "correct": false
      },
      {
        "html": "The BDR has three neighbors.",
        "text": "The BDR has three neighbors.",
        "correct": false
      }
    ],
    "explanationHtml": "The displayed output from the show ip ospf interface command provides the following insights: <ul><li><strong>Interface Reachability:</strong> The command output specifically describes the OSPF state and roles for the <strong>GigabitEthernet 0/0 interface</strong>, confirming that the <strong>Designated Router</strong> (ID 1.1.1.1) is the elected leader for this specific multiaccess segment.</li><li><strong>Hello Timer:</strong> The default OSPF <strong>Hello interval</strong> for broadcast networks is <strong>10 seconds</strong>. The output shows “Hello due in 00:00:01,” which means <strong>9 seconds have elapsed</strong> since the last Hello packet was transmitted.</li><li><strong>Election Criteria:</strong> In an OSPF election where all priorities are equal, the router with the <strong>highest Router ID</strong> is elected DR. In this exhibit, <strong>R1 (ID 1.1.1.1)</strong> is the DR despite having a lower Router ID than <strong>R2 (ID 2.2.2.2)</strong> or the local router <strong>R3 (ID 3.3.3.3)</strong>. Furthermore, R3 is a <strong>DROTHER</strong> because its <strong>priority is 0</strong>, which makes it ineligible for election regardless of its high Router ID. This confirms that Router ID values were not the primary criteria for the current election results.</li></ul>"
  },
  {
    "id": 16331,
    "number": 32,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator is configuring an ACL to limit the connection to R1 vty lines to only the IT group workstations in the network 192.168.22.0/28. The administrator verifies the successful Telnet connections from a workstation with IP 192.168.22.5 to R1 before the ACL is applied. However, after the ACL is applied to the interface Fa0/0, Telnet connections are denied. What is the cause of the connection failure? <img src=\"./assets/i209884v1n1_209884-369e374e.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator is configuring an ACL to limit the connection to R1 vty lines to only the IT group workstations in the network 192.168.22.0/28. The administrator verifies the successful Telnet connections from a workstation with IP 192.168.22.5 to R1 before the ACL is applied. However, after the ACL is applied to the interface Fa0/0, Telnet connections are denied. What is the cause of the connection failure?",
    "options": [
      {
        "html": "The enable secret password is not configured on R1.",
        "text": "The enable secret password is not configured on R1.",
        "correct": false
      },
      {
        "html": "The IT group network is included in the deny statement.",
        "text": "The IT group network is included in the deny statement.",
        "correct": true
      },
      {
        "html": "The permit ACE specifies a wrong port number.",
        "text": "The permit ACE specifies a wrong port number.",
        "correct": false
      },
      {
        "html": "The permit ACE should specify protocol ip instead of tcp.",
        "text": "The permit ACE should specify protocol ip instead of tcp.",
        "correct": false
      },
      {
        "html": "The login command has not been entered for vty lines.",
        "text": "The login command has not been entered for vty lines.",
        "correct": false
      }
    ],
    "explanationHtml": "The source IP range in the deny ACE is 192.168.20.0 0.0.3.255, which covers IP addresses from 192.168.20.0 to 192.168.23.255. The IT group network 192.168.22.0/28 is included in the 192.168.20/22 network. Therefore, the connection is denied. To fix it, the order of the deny and permit ACE should be switched."
  },
  {
    "id": 16332,
    "number": 33,
    "type": "single",
    "questionHtml": "What functionality does mGRE provide to the DMVPN technology?",
    "questionText": "What functionality does mGRE provide to the DMVPN technology?",
    "options": [
      {
        "html": "It allows the creation of dynamically allocated tunnels through a permanent tunnel source at the hub and dynamically allocated tunnel destinations at the spokes.",
        "text": "It allows the creation of dynamically allocated tunnels through a permanent tunnel source at the hub and dynamically allocated tunnel destinations at the spokes.",
        "correct": true
      },
      {
        "html": "It provides secure transport of private information over public networks, such as the Internet.",
        "text": "It provides secure transport of private information over public networks, such as the Internet.",
        "correct": false
      },
      {
        "html": "It is a Cisco software solution for building multiple VPNs in an easy, dynamic, and scalable manner.",
        "text": "It is a Cisco software solution for building multiple VPNs in an easy, dynamic, and scalable manner.",
        "correct": false
      },
      {
        "html": "It creates a distributed mapping database of public IP addresses for all VPN tunnel spokes.",
        "text": "It creates a distributed mapping database of public IP addresses for all VPN tunnel spokes.",
        "correct": false
      }
    ],
    "explanationHtml": "DMVPN is built on three protocols, NHRP, IPsec, and mGRE. NHRP is the distributed address mapping protocol for VPN tunnels. IPsec encrypts communications on VPN tunnels. The mGRE protocol allows the dynamic creation of multiple spoke tunnels from one permanent VPN hub."
  },
  {
    "id": 16333,
    "number": 34,
    "type": "single",
    "questionHtml": "What is used to pre-populate the adjacency table on Cisco devices that use CEF to process packets?",
    "questionText": "What is used to pre-populate the adjacency table on Cisco devices that use CEF to process packets?",
    "options": [
      {
        "html": "the FIB",
        "text": "the FIB",
        "correct": false
      },
      {
        "html": "the routing table",
        "text": "the routing table",
        "correct": false
      },
      {
        "html": "the ARP table",
        "text": "the ARP table",
        "correct": true
      },
      {
        "html": "the DSP",
        "text": "the DSP",
        "correct": false
      }
    ],
    "explanationHtml": "CEF uses the FIB and adjacency table to make fast forwarding decisions without control plane processing. The adjacency table is pre-populated by the ARP table and the FIB is pre-populated by the routing table.​"
  },
  {
    "id": 16334,
    "number": 35,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to display information about NAT configuration parameters and the number of addresses in the pool?",
    "questionText": "What command would be used as part of configuring NAT or PAT to display information about NAT configuration parameters and the number of addresses in the pool?",
    "options": [
      {
        "html": "show running-config",
        "text": "show running-config",
        "correct": false
      },
      {
        "html": "show ip nat statistics",
        "text": "show ip nat statistics",
        "correct": true
      },
      {
        "html": "show ip cache",
        "text": "show ip cache",
        "correct": false
      },
      {
        "html": "show version",
        "text": "show version",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>show ip nat statistics</strong> command is used to display a summary of NAT operations. It specifically provides information regarding <strong>NAT configuration parameters</strong> (such as designated inside and outside interfaces), the total number of active translations, and detailed data about <strong>address pools</strong>, including the total number of addresses in the pool and how many have been allocated. While show running-config can show the pool’s configuration commands, only show ip nat statistics provides the real-time operational count of addresses within those pools."
  },
  {
    "id": 16335,
    "number": 36,
    "type": "single",
    "questionHtml": "What is a purpose of establishing a network baseline?",
    "questionText": "What is a purpose of establishing a network baseline?",
    "options": [
      {
        "html": "It provides a statistical average for network performance.",
        "text": "It provides a statistical average for network performance.",
        "correct": false
      },
      {
        "html": "It creates a point of reference for future network evaluations.",
        "text": "It creates a point of reference for future network evaluations.",
        "correct": true
      },
      {
        "html": "It manages the performance of network devices.",
        "text": "It manages the performance of network devices.",
        "correct": false
      },
      {
        "html": "It checks the security configuration of network devices.",
        "text": "It checks the security configuration of network devices.",
        "correct": false
      }
    ],
    "explanationHtml": "A baseline is used to establish normal network or system performance. It can be used to compare with future network or system performances in order to detect abnormal situations."
  },
  {
    "id": 20055,
    "number": 37,
    "type": "single",
    "questionHtml": "Match the type of WAN device or service to the description. (Not all options are used.)",
    "questionText": "Match the type of WAN device or service to the description. (Not all options are used.)",
    "options": [
      {
        "html": "<img src=\"./assets/2020-07-11_172005-c4adfd0a.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 7.2.3<br></p>"
  },
  {
    "id": 16337,
    "number": 38,
    "type": "single",
    "questionHtml": "Which statement describes a characteristic of standard IPv4 ACLs?",
    "questionText": "Which statement describes a characteristic of standard IPv4 ACLs?",
    "options": [
      {
        "html": "They filter traffic based on source IP addresses only.",
        "text": "They filter traffic based on source IP addresses only.",
        "correct": true
      },
      {
        "html": "They can be created with a number but not with a name.",
        "text": "They can be created with a number but not with a name.",
        "correct": false
      },
      {
        "html": "They are configured in the interface configuration mode.",
        "text": "They are configured in the interface configuration mode.",
        "correct": false
      },
      {
        "html": "They can be configured to filter traffic based on both source IP addresses and source ports.",
        "text": "They can be configured to filter traffic based on both source IP addresses and source ports.",
        "correct": false
      }
    ],
    "explanationHtml": "A standard IPv4 ACL can filter traffic based on source IP addresses only. Unlike an extended ACL, it cannot filter traffic based on Layer 4 ports. However, both standard and extended ACLs can be identified with either a number or a name, and both are configured in global configuration mode."
  },
  {
    "id": 16338,
    "number": 39,
    "type": "single",
    "questionHtml": "Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration? <img src=\"./assets/i212258v1n1_212258-2-e3567ee0.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?",
    "options": [
      {
        "html": "NAT-POOL2 is not bound to ACL 1.",
        "text": "NAT-POOL2 is not bound to ACL 1.",
        "correct": true
      },
      {
        "html": "Interface Fa0/0 should be identified as an outside NAT interface.",
        "text": "Interface Fa0/0 should be identified as an outside NAT interface.",
        "correct": false
      },
      {
        "html": "The NAT pool is incorrect.",
        "text": "The NAT pool is incorrect.",
        "correct": false
      },
      {
        "html": "Access-list 1 is misconfigured.",
        "text": "Access-list 1 is misconfigured.",
        "correct": false
      }
    ],
    "explanationHtml": "R1 has to have NAT-POOL2 bound to ACL 1. This is accomplished with the command R1(config)#ip nat inside source list 1 pool NAT-POOL2. This would enable the router to check for all interesting traffic and if it matches ACL 1 it would be translated by use of the addresses in NAT-POOL2."
  },
  {
    "id": 20056,
    "number": 40,
    "type": "single",
    "questionHtml": "Refer to the exhibit. What method can be used to enable an OSPF router to advertise a default route to neighboring OSPF routers? <img src=\"./assets/p53-1-1-c7e8eb43.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. What method can be used to enable an OSPF router to advertise a default route to neighboring OSPF routers?",
    "options": [
      {
        "html": "Use a static route pointing to the ISP and redistribute it.",
        "text": "Use a static route pointing to the ISP and redistribute it.",
        "correct": false
      },
      {
        "html": "Use the redistribute static command on R0-A.",
        "text": "Use the redistribute static command on R0-A.",
        "correct": false
      },
      {
        "html": "Use the default-information originate command on ISP.",
        "text": "Use the default-information originate command on ISP.",
        "correct": false
      },
      {
        "html": "Use the default-information originate command on R0-A.",
        "text": "Use the default-information originate command on R0-A.",
        "correct": true
      }
    ],
    "explanationHtml": "To enable an OSPF router to advertise a default route to its neighbors, the edge router (known as the <strong>Autonomous System Boundary Router</strong> or ASBR) must be configured with a <strong>default static route</strong> and the <strong>default-information originate</strong> command. In this scenario, <strong>R0-A</strong> is the edge router connected to the ISP; therefore, entering this command on R0-A instructs it to become the source of the default route information and propagate that route in OSPF updates to R0-B and R0-C."
  },
  {
    "id": 16340,
    "number": 41,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as John the Ripper,THC Hydra, RainbowCrack, and Medusa?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as John the Ripper,THC Hydra, RainbowCrack, and Medusa?",
    "options": [
      {
        "html": "to capture and analyze packets within traditional Ethernet LANs or WLANs",
        "text": "to capture and analyze packets within traditional Ethernet LANs or WLANs",
        "correct": false
      },
      {
        "html": "to probe and test the robustness of a firewall by using specially created forged packets",
        "text": "to probe and test the robustness of a firewall by using specially created forged packets",
        "correct": false
      },
      {
        "html": "to make repeated guesses in order to crack a password",
        "text": "to make repeated guesses in order to crack a password",
        "correct": true
      }
    ],
    "explanationHtml": "Applications such as John the Ripper, THC Hydra, RainbowCrack, and Medusa are specifically categorized as <strong>password crackers</strong>. These tools are used during penetration tests to recover or discover critical system passwords by <strong>repeatedly making guesses</strong> or by bypassing data encryption. Identifying weak or compromised passwords is a vital part of a security assessment because they can provide threat actors with easy access to valuable corporate data."
  },
  {
    "id": 16341,
    "number": 42,
    "type": "multiple",
    "questionHtml": "What are two syntax rules for writing a JSON array? (Choose two.)",
    "questionText": "What are two syntax rules for writing a JSON array? (Choose two.)",
    "options": [
      {
        "html": "Each value in the array is separated by a comma.",
        "text": "Each value in the array is separated by a comma.",
        "correct": true
      },
      {
        "html": "The array can include only one value type.",
        "text": "The array can include only one value type.",
        "correct": false
      },
      {
        "html": "A space must separate each value in the array.",
        "text": "A space must separate each value in the array.",
        "correct": false
      },
      {
        "html": "A semicolon separates the key and list of values.",
        "text": "A semicolon separates the key and list of values.",
        "correct": false
      },
      {
        "html": "Values are enclosed in square brackets.",
        "text": "Values are enclosed in square brackets.",
        "correct": true
      }
    ],
    "explanationHtml": "A JSON array is a collection of ordered values within square brackets [ ]. The values in the array are separated by a comma. For example “users” : [“bob”, “alice”, “eve”]."
  },
  {
    "id": 20057,
    "number": 43,
    "type": "single",
    "questionHtml": "What is a characteristic of a Trojan horse as it relates to network security?",
    "questionText": "What is a characteristic of a Trojan horse as it relates to network security?",
    "options": [
      {
        "html": "An electronic dictionary is used to obtain a password to be used to infiltrate a key network device.",
        "text": "An electronic dictionary is used to obtain a password to be used to infiltrate a key network device.",
        "correct": false
      },
      {
        "html": "Malware is contained in a seemingly legitimate executable program.",
        "text": "Malware is contained in a seemingly legitimate executable program.",
        "correct": true
      },
      {
        "html": "Extreme quantities of data are sent to a particular network device interface.",
        "text": "Extreme quantities of data are sent to a particular network device interface.",
        "correct": false
      },
      {
        "html": "Too much information is destined for a particular memory block, causing additional memory areas to be affecte",
        "text": "Too much information is destined for a particular memory block, causing additional memory areas to be affecte",
        "correct": false
      }
    ],
    "explanationHtml": "A Trojan horse carries out malicious operations under the guise of a legitimate program. Denial of service attacks send extreme quantities of data to a particular host or network device interface. Password attacks use electronic dictionaries in an attempt to learn passwords. Buffer overflow attacks exploit memory buffers by sending too much information to a host to render the system inoperable."
  },
  {
    "id": 20058,
    "number": 44,
    "type": "single",
    "questionHtml": "An attacker is redirecting traffic to a false default gateway in an attempt to intercept the data traffic of a switched network. What type of attack could achieve this?",
    "questionText": "An attacker is redirecting traffic to a false default gateway in an attempt to intercept the data traffic of a switched network. What type of attack could achieve this?",
    "options": [
      {
        "html": "TCP SYN flood",
        "text": "TCP SYN flood",
        "correct": false
      },
      {
        "html": "DNS tunneling",
        "text": "DNS tunneling",
        "correct": false
      },
      {
        "html": "DHCP spoofing",
        "text": "DHCP spoofing",
        "correct": true
      },
      {
        "html": "ARP cache poisoning",
        "text": "ARP cache poisoning",
        "correct": false
      }
    ],
    "explanationHtml": "In DHCP spoofing attacks, an attacker configures a fake DHCP server on the network to issue DHCP addresses to clients with the aim of forcing the clients to use a false default gateway, and other false services. DHCP snooping is a Cisco switch feature that can mitigate DHCP attacks. MAC address starvation and MAC address snooping are not recognized security attacks. MAC address spoofing is a network security threat."
  },
  {
    "id": 20059,
    "number": 45,
    "type": "single",
    "questionHtml": "A company is developing a security policy for secure communication. In the exchange of critical messages between a headquarters office and a branch office, a hash value should only be recalculated with a predetermined code, thus ensuring the validity of data source. Which aspect of secure communications is addressed?",
    "questionText": "A company is developing a security policy for secure communication. In the exchange of critical messages between a headquarters office and a branch office, a hash value should only be recalculated with a predetermined code, thus ensuring the validity of data source. Which aspect of secure communications is addressed?",
    "options": [
      {
        "html": "data integrity",
        "text": "data integrity",
        "correct": false
      },
      {
        "html": "non-repudiation",
        "text": "non-repudiation",
        "correct": false
      },
      {
        "html": "origin authentication",
        "text": "origin authentication",
        "correct": true
      },
      {
        "html": "data confidentiality",
        "text": "data confidentiality",
        "correct": false
      }
    ],
    "explanationHtml": "Secure communications consists of four elements: Data confidentiality – guarantees that only authorized users can read the message Data integrity – guarantees that the message was not altered Origin authentication – guarantees that the message is not a forgery and does actually come from whom it states Data nonrepudiation – guarantees that the sender cannot repudiate, or refute, the validity of a message sent"
  },
  {
    "id": 16345,
    "number": 46,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use packet sniffers?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use packet sniffers?",
    "options": [
      {
        "html": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "text": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "correct": false
      },
      {
        "html": "to detect any evidence of a hack or malware in a computer or network",
        "text": "to detect any evidence of a hack or malware in a computer or network",
        "correct": false
      },
      {
        "html": "to probe and test the robustness of a firewall by using specially created forged packets",
        "text": "to probe and test the robustness of a firewall by using specially created forged packets",
        "correct": false
      },
      {
        "html": "to capture and analyze packets within traditional Ethernet LANs or WLANs",
        "text": "to capture and analyze packets within traditional Ethernet LANs or WLANs",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Packet sniffers</strong> are specialized tools used by security professionals to <strong>capture, monitor, and analyze network data exchanges</strong> in real-time. These tools, such as <strong>Wireshark or Tcpdump</strong>, allow a penetration testing team to decode various protocol layers within recorded frames to identify potential security gaps or unencrypted sensitive information. While they provide a full view of the data inside a packet, they are primarily designed for <strong>capturing traffic</strong> rather than active tasks like probing firewalls with forged packets or reverse engineering binary files."
  },
  {
    "id": 16346,
    "number": 47,
    "type": "single",
    "questionHtml": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.20.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "questionText": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.20.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "options": [
      {
        "html": "0.0.15.255",
        "text": "0.0.15.255",
        "correct": false
      },
      {
        "html": "0.0.3.255",
        "text": "0.0.3.255",
        "correct": true
      },
      {
        "html": "0.0.7.255",
        "text": "0.0.7.255",
        "correct": false
      },
      {
        "html": "0.0.1.255",
        "text": "0.0.1.255",
        "correct": false
      }
    ],
    "explanationHtml": "The easiest method to calculate an OSPF <strong>wildcard mask</strong> is to subtract the network’s <strong>subnet mask</strong> from <strong>255.255.255.255</strong>. For the network 172.20.0.0 with a subnet mask of 255.255.252.0, the calculation is: 255.255.255.255 – 255.255.252. 0 —————– <strong>0. 0. 3.255</strong>."
  },
  {
    "id": 20060,
    "number": 48,
    "type": "single",
    "questionHtml": "Match the HTTP method with the RESTful operation.",
    "questionText": "Match the HTTP method with the RESTful operation.",
    "options": [
      {
        "html": "<img src=\"./assets/Match-the-HTTP-method-with-the-RESTful-operation.-07dfee8e.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 14.4.3<br></p>"
  },
  {
    "id": 20061,
    "number": 49,
    "type": "single",
    "questionHtml": "Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?​ <img src=\"./assets/49-fbb42d7c.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?​",
    "options": [
      {
        "html": "65",
        "text": "65",
        "correct": true
      },
      {
        "html": "782",
        "text": "782",
        "correct": false
      },
      {
        "html": "74",
        "text": "74",
        "correct": false
      },
      {
        "html": "128",
        "text": "128",
        "correct": false
      }
    ],
    "explanationHtml": "The OSPF cost for a route is the <strong>accumulated value</strong> of all outgoing interfaces from the source router to the destination network. To reach the West LAN (172.16.2.0/24) from the East router, the packet must exit two interfaces: <ol><li>The <strong>Serial interface</strong> on the East router connecting to West (1544 Kbps): By default, OSPF calculates the cost for a T1 link as <strong>64</strong>.</li><li>The <strong>GigabitEthernet 0/0 interface</strong> on the West router leading to the LAN: The default OSPF cost for a Gigabit Ethernet interface is <strong>1</strong>.</li></ol> Adding these together (64+1), the total cumulative cost is <strong>65</strong>."
  },
  {
    "id": 20062,
    "number": 50,
    "type": "single",
    "questionHtml": "What is one reason to use the ip ospf priority command when the OSPF routing protocol is in use?",
    "questionText": "What is one reason to use the ip ospf priority command when the OSPF routing protocol is in use?",
    "options": [
      {
        "html": "to activate the OSPF neighboring process",
        "text": "to activate the OSPF neighboring process",
        "correct": false
      },
      {
        "html": "to influence the DR/BDR election process",
        "text": "to influence the DR/BDR election process",
        "correct": true
      },
      {
        "html": "to provide a backdoor for connectivity during the convergence process",
        "text": "to provide a backdoor for connectivity during the convergence process",
        "correct": false
      },
      {
        "html": "to streamline and speed up the convergence process",
        "text": "to streamline and speed up the convergence process",
        "correct": false
      }
    ],
    "explanationHtml": "The OSPF priority can be set to a number between 0 and 255. The higher the number set, the more likely the router becomes the DR. A priority 0 stops a router from participating in the election process and the router does not become a DR or a BDR."
  },
  {
    "id": 16350,
    "number": 51,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp .</pre> If a packet with a source address of 172.18.20.14, a destination address of 172.18.20.40, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp . If a packet with a source address of 172.18.20.14, a destination address of 172.18.20.40, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "permitted",
        "text": "permitted",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Source Address Match:</strong> The source wildcard mask of 0.0.0.31 combined with the network 172.18.20.0 defines a range from <strong>172.18.20.0 to 172.18.20.31</strong>. The packet’s source address, <strong>172.18.20.14</strong>, falls within this permitted range. <strong>Destination Address Match:</strong> The destination wildcard mask of 0.0.0.31 combined with 172.18.20.32 defines a range from <strong>172.18.20.32 to 172.18.20.63</strong>. The packet’s destination address, <strong>172.18.20.40</strong>, falls within this permitted range. <strong>Protocol and Port Match:</strong> The ACL specifies <strong>TCP</strong> and the operator <strong>eq ftp</strong> (port 21). The packet uses protocol <strong>21</strong> (FTP), satisfying the final criteria. Since all conditions (source, destination, protocol, and port) match the permit statement, the packet is allowed."
  },
  {
    "id": 16351,
    "number": 52,
    "type": "single",
    "questionHtml": "What is a characteristic of the two-tier spine-leaf topology of the Cisco ACI fabric architecture?​",
    "questionText": "What is a characteristic of the two-tier spine-leaf topology of the Cisco ACI fabric architecture?​",
    "options": [
      {
        "html": "The spine and leaf switches are always linked through core switches.",
        "text": "The spine and leaf switches are always linked through core switches.",
        "correct": false
      },
      {
        "html": "The spine switches attach to the leaf switches and attach to each other for redundancy.",
        "text": "The spine switches attach to the leaf switches and attach to each other for redundancy.",
        "correct": false
      },
      {
        "html": "The leaf switches always attach to the spines and they are interlinked through a trunk line.",
        "text": "The leaf switches always attach to the spines and they are interlinked through a trunk line.",
        "correct": false
      },
      {
        "html": "The leaf switches always attach to the spines, but they never attach to each other.",
        "text": "The leaf switches always attach to the spines, but they never attach to each other.",
        "correct": true
      }
    ],
    "explanationHtml": "In the <strong>two-tier spine-leaf topology</strong> used by Cisco ACI, the architecture follows a specific connection rule: every <strong>leaf switch</strong> must connect to every <strong>spine switch</strong>, but leaf switches <strong>never attach directly to one another</strong>. This design ensures that all devices connected to the fabric are exactly <strong>one hop away</strong> from each other, providing predictable and low-latency communication. Similarly, spine switches only connect to leaf switches and core switches, not to other spine switches."
  },
  {
    "id": 16352,
    "number": 53,
    "type": "multiple",
    "questionHtml": "Which two scenarios would result in a duplex mismatch? (Choose two.)",
    "questionText": "Which two scenarios would result in a duplex mismatch? (Choose two.)",
    "options": [
      {
        "html": "connecting a device with autonegotiation to another that is manually set to full-duplex",
        "text": "connecting a device with autonegotiation to another that is manually set to full-duplex",
        "correct": true
      },
      {
        "html": "starting and stopping a router interface during a normal operation",
        "text": "starting and stopping a router interface during a normal operation",
        "correct": false
      },
      {
        "html": "connecting a device with an interface running at 100 Mbps to another with an interface running at 1000 Mbps",
        "text": "connecting a device with an interface running at 100 Mbps to another with an interface running at 1000 Mbps",
        "correct": false
      },
      {
        "html": "configuring dynamic routing incorrectly",
        "text": "configuring dynamic routing incorrectly",
        "correct": false
      },
      {
        "html": "manually setting the two connected devices to different duplex modes",
        "text": "manually setting the two connected devices to different duplex modes",
        "correct": true
      }
    ],
    "explanationHtml": "A duplex mismatch occurs when the two ends of an Ethernet link operate in different duplex modes. This happens if <strong>both ends are manually configured</strong> to different settings (one full and one half) or if <strong>one end is set to autonegotiate while the other is manually fixed</strong> at full-duplex. In the latter case, the autonegotiating end typically fails to detect the duplex and defaults to half-duplex, resulting in a mismatch that causes interface errors and late collisions."
  },
  {
    "id": 20063,
    "number": 54,
    "type": "single",
    "questionHtml": "A network technician is configuring SNMPv3 and has set a security level of auth . What is the effect of this setting?",
    "questionText": "A network technician is configuring SNMPv3 and has set a security level of auth . What is the effect of this setting?",
    "options": [
      {
        "html": "authenticates a packet by a string match of the username or community string",
        "text": "authenticates a packet by a string match of the username or community string",
        "correct": false
      },
      {
        "html": "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
        "text": "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
        "correct": true
      },
      {
        "html": "authenticates a packet by using either the HMAC MD5 or 3.HMAC SHA algorithms and encrypts the packet with either the DES, 3DES or AES algorithms",
        "text": "authenticates a packet by using either the HMAC MD5 or 3.HMAC SHA algorithms and encrypts the packet with either the DES, 3DES or AES algorithms",
        "correct": false
      },
      {
        "html": "authenticates a packet by using the SHA algorithm only",
        "text": "authenticates a packet by using the SHA algorithm only",
        "correct": false
      }
    ],
    "explanationHtml": "For enabling SNMPv3 one of three security levels can be configured: 1) noAuth 2) auth 3) priv The security level configured determines which security algorithms are performed on SNMP packets. The auth security level uses either HMAC with MD5 or SHA."
  },
  {
    "id": 20064,
    "number": 55,
    "type": "multiple",
    "questionHtml": "What are two types of attacks used on DNS open resolvers? (Choose two.)",
    "questionText": "What are two types of attacks used on DNS open resolvers? (Choose two.)",
    "options": [
      {
        "html": "amplification and reflection",
        "text": "amplification and reflection",
        "correct": true
      },
      {
        "html": "resource utilization",
        "text": "resource utilization",
        "correct": true
      },
      {
        "html": "fast flux",
        "text": "fast flux",
        "correct": false
      },
      {
        "html": "ARP poisoning",
        "text": "ARP poisoning",
        "correct": false
      },
      {
        "html": "cushioning",
        "text": "cushioning",
        "correct": false
      }
    ],
    "explanationHtml": "Three types of attacks used on DNS open resolvers are as follows:DNS cache poisoning – attacker sends spoofed falsified information to redirect users from legitimate sites to malicious sites DNS amplification and reflection attacks – attacker sends an increased volume of attacks to mask the true source of the attack DNS resource utilization attacks – a denial of service (DoS) attack that consumes server resources"
  },
  {
    "id": 16355,
    "number": 56,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet .</pre> If a packet with a source address of 192.168.101.45, a destination address of 64.100.40.4, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet . If a packet with a source address of 192.168.101.45, a destination address of 64.100.40.4, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "denied",
        "text": "denied",
        "correct": true
      },
      {
        "html": "permitted",
        "text": "permitted",
        "correct": false
      }
    ],
    "explanationHtml": "<ul><li><strong>Protocol Mismatch:</strong> The ACL is configured to permit <strong>UDP</strong> traffic, but Telnet (port 23) is a <strong>TCP</strong> protocol service.</li><li><strong>Source Address Mismatch:</strong> The source address 192.168.101.45 does not match the range defined by 192.168.100.0 0.0.2.255. The wildcard 2 in the third octet (00000010) requires the last bit to be 0 (matching only 100 and 102), whereas 101 ends in 1.</li><li><strong>Implicit Deny:</strong> Since the packet does not match the specific permit statement, it is discarded by the <strong>implicit deny any</strong> statement that exists at the end of every ACL.</li></ul>"
  },
  {
    "id": 16555,
    "number": 57,
    "type": "single",
    "questionHtml": "Which type of resources are required for a Type 1 hypervisor?",
    "questionText": "Which type of resources are required for a Type 1 hypervisor?",
    "options": [
      {
        "html": "a dedicated VLAN",
        "text": "a dedicated VLAN",
        "correct": false
      },
      {
        "html": "a management console",
        "text": "a management console",
        "correct": true
      },
      {
        "html": "a host operating system",
        "text": "a host operating system",
        "correct": false
      }
    ],
    "explanationHtml": "Type 1 hypervisors, also known as <strong>“bare metal”</strong> hypervisors, are installed directly on the physical hardware rather than on a host operating system. Because they do not have a full graphical interface or local OS to create virtual machine instances, they require a <strong>management console</strong> to manage the hypervisor, consolidate servers, and handle operations like powering on or moving virtual machines between servers. VMware Fusion is an example of a Type 2 hypervisor, which does not require such a console."
  },
  {
    "id": 16556,
    "number": 58,
    "type": "single",
    "questionHtml": "In JSON, what is held within square brackets [ ]?",
    "questionText": "In JSON, what is held within square brackets [ ]?",
    "options": [
      {
        "html": "nested values",
        "text": "nested values",
        "correct": false
      },
      {
        "html": "key/value pairs",
        "text": "key/value pairs",
        "correct": false
      },
      {
        "html": "an object",
        "text": "an object",
        "correct": false
      },
      {
        "html": "an array",
        "text": "an array",
        "correct": true
      }
    ],
    "explanationHtml": "In JSON syntax, <strong>square brackets [ ]</strong> are used to hold <strong>arrays</strong>, which are defined as ordered lists of values. In contrast, curly braces <strong>{ }</strong> are used to hold <strong>objects</strong>, which consist of one or more key/value pairs."
  },
  {
    "id": 16941,
    "number": 59,
    "type": "multiple",
    "questionHtml": "What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
    "questionText": "What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
    "options": [
      {
        "html": "resources",
        "text": "resources",
        "correct": false
      },
      {
        "html": "protocol",
        "text": "protocol",
        "correct": false
      },
      {
        "html": "API server",
        "text": "API server",
        "correct": false
      },
      {
        "html": "format",
        "text": "format",
        "correct": true
      },
      {
        "html": "key",
        "text": "key",
        "correct": true
      },
      {
        "html": "parameters",
        "text": "parameters",
        "correct": true
      }
    ],
    "explanationHtml": "The query portion in a RESTful API request specifies the data format and information the client is requesting from the API service. Queries can include the following: <ul><li><b>Format</b> – JSON, YAML, XML, and other supported data format</li><li><b>Key</b> – for authentication of the requesting source</li><li><b>Parameters</b> – used to send information pertaining to the query request</li></ul>"
  },
  {
    "id": 16359,
    "number": 60,
    "type": "single",
    "questionHtml": "A user reports that when the corporate web page URL is entered on a web browser, an error message indicates that the page cannot be displayed. The help-desk technician asks the user to enter the IP address of the web server to see if the page can be displayed. Which troubleshooting method is being used by the technician?",
    "questionText": "A user reports that when the corporate web page URL is entered on a web browser, an error message indicates that the page cannot be displayed. The help-desk technician asks the user to enter the IP address of the web server to see if the page can be displayed. Which troubleshooting method is being used by the technician?",
    "options": [
      {
        "html": "top-down",
        "text": "top-down",
        "correct": false
      },
      {
        "html": "bottom-up",
        "text": "bottom-up",
        "correct": false
      },
      {
        "html": "divide-and-conquer",
        "text": "divide-and-conquer",
        "correct": true
      },
      {
        "html": "substitution",
        "text": "substitution",
        "correct": false
      }
    ],
    "explanationHtml": "The technician is using the <strong>divide-and-conquer</strong> method by making an informed guess based on symptoms to select a specific layer to start the investigation. By asking the user to enter the IP address instead of the URL, the technician is attempting to determine if the issue is a <strong>name resolution (DNS)</strong> problem or a connectivity issue at a lower layer. If the web page displays using the IP address, the technician has successfully “divided” the problem and knows the layers below the Application layer are functioning correctly."
  },
  {
    "id": 16360,
    "number": 61,
    "type": "single",
    "questionHtml": "Which protocol provides authentication, integrity, and confidentiality services and is a type of VPN?",
    "questionText": "Which protocol provides authentication, integrity, and confidentiality services and is a type of VPN?",
    "options": [
      {
        "html": "MD5",
        "text": "MD5",
        "correct": false
      },
      {
        "html": "AES",
        "text": "AES",
        "correct": false
      },
      {
        "html": "IPsec",
        "text": "IPsec",
        "correct": true
      },
      {
        "html": "ESP",
        "text": "ESP",
        "correct": false
      }
    ],
    "explanationHtml": "IPsec services allow for authentication, integrity, access control, and confidentiality. With IPsec, the information exchanged between remote sites can be encrypted and verified. Both remote-access and site-to-site VPNs can be deployed using IPsec."
  },
  {
    "id": 16361,
    "number": 62,
    "type": "single",
    "questionHtml": "Which statement describes a characteristic of Cisco Catalyst 2960 switches?",
    "questionText": "Which statement describes a characteristic of Cisco Catalyst 2960 switches?",
    "options": [
      {
        "html": "They are best used as distribution layer switches.",
        "text": "They are best used as distribution layer switches.",
        "correct": false
      },
      {
        "html": "New Cisco Catalyst 2960-C switches support PoE pass-through.",
        "text": "New Cisco Catalyst 2960-C switches support PoE pass-through.",
        "correct": true
      },
      {
        "html": "They are modular switches.",
        "text": "They are modular switches.",
        "correct": false
      },
      {
        "html": "They do not support an active switched virtual interface (SVI) with IOS versions prior to 15.x.",
        "text": "They do not support an active switched virtual interface (SVI) with IOS versions prior to 15.x.",
        "correct": false
      }
    ],
    "explanationHtml": "Cisco Catalyst 2960 switches support one active switched virtual interface (SVI) with IOS versions prior to 15.x. They are commonly used as access layer switches and they are fixed configuration switches."
  },
  {
    "id": 16362,
    "number": 63,
    "type": "single",
    "questionHtml": "Which component of the ACI architecture translates application policies into network programming?",
    "questionText": "Which component of the ACI architecture translates application policies into network programming?",
    "options": [
      {
        "html": "the hypervisor​",
        "text": "the hypervisor​",
        "correct": false
      },
      {
        "html": "the Application Policy Infrastructure Controller",
        "text": "the Application Policy Infrastructure Controller",
        "correct": true
      },
      {
        "html": "the Nexus 9000 switch",
        "text": "the Nexus 9000 switch",
        "correct": false
      },
      {
        "html": "the Application Network Profile endpoints",
        "text": "the Application Network Profile endpoints",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>Application Policy Infrastructure Controller (APIC)</strong> is the centralized software controller and “brains” of the Cisco ACI architecture. Its primary role is to provide centralized management and programmability, specifically by <strong>translating high-level application policies into the network programming</strong> required to configure the fabric. While the Application Network Profile defines the requirements, it is the APIC that performs the translation into actionable network configurations."
  },
  {
    "id": 20065,
    "number": 64,
    "type": "multiple",
    "questionHtml": "Which two pieces of information should be included in a logical topology diagram of a network? (Choose two.)",
    "questionText": "Which two pieces of information should be included in a logical topology diagram of a network? (Choose two.)",
    "options": [
      {
        "html": "device type",
        "text": "device type",
        "correct": false
      },
      {
        "html": "cable specification",
        "text": "cable specification",
        "correct": false
      },
      {
        "html": "interface identifier",
        "text": "interface identifier",
        "correct": true
      },
      {
        "html": "OS/IOS version",
        "text": "OS/IOS version",
        "correct": false
      },
      {
        "html": "connection type",
        "text": "connection type",
        "correct": true
      },
      {
        "html": "cable type and identifier",
        "text": "cable type and identifier",
        "correct": false
      }
    ],
    "explanationHtml": "The interface identifier and connection type should be included in a logical topology diagram because they indicate which interface is connected to other devices in the network with a specific type such as LAN, WAN, point-to-point, etc. The OS/IOS version, device type, cable type and identifier, and cable specification are typically included in a physical topology diagram."
  },
  {
    "id": 16364,
    "number": 65,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A PC at address 10.1.1.45 is unable to access the Internet. What is the most likely cause of the problem? <img src=\"./assets/41-77152fe6.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A PC at address 10.1.1.45 is unable to access the Internet. What is the most likely cause of the problem?",
    "options": [
      {
        "html": "The NAT pool has been exhausted.",
        "text": "The NAT pool has been exhausted.",
        "correct": true
      },
      {
        "html": "The wrong netmask was used on the NAT pool.",
        "text": "The wrong netmask was used on the NAT pool.",
        "correct": false
      },
      {
        "html": "Access-list 1 has not been configured properly.",
        "text": "Access-list 1 has not been configured properly.",
        "correct": false
      },
      {
        "html": "The inside and outside interfaces have been configured backwards.",
        "text": "The inside and outside interfaces have been configured backwards.",
        "correct": false
      }
    ],
    "explanationHtml": "The output of show ip nat statistics shows that there are 2 total addresses and that 2 addresses have been allocated (100%). This indicates that the NAT pool is out of global addresses to give new clients. Based on the show ip nat translations, PCs at 10.1.1.33 and 10.1.1.123 have used the two available addresses to send ICMP messages to a host on the outside network."
  },
  {
    "id": 16365,
    "number": 66,
    "type": "multiple",
    "questionHtml": "What are two benefits of using SNMP traps? (Choose two.)",
    "questionText": "What are two benefits of using SNMP traps? (Choose two.)",
    "options": [
      {
        "html": "They eliminate the need for some periodic polling requests.",
        "text": "They eliminate the need for some periodic polling requests.",
        "correct": true
      },
      {
        "html": "They reduce the load on network and agent resources.",
        "text": "They reduce the load on network and agent resources.",
        "correct": true
      },
      {
        "html": "They limit access for management systems only.",
        "text": "They limit access for management systems only.",
        "correct": false
      },
      {
        "html": "They can provide statistics on TCP/IP packets that flow through Cisco devices.",
        "text": "They can provide statistics on TCP/IP packets that flow through Cisco devices.",
        "correct": false
      },
      {
        "html": "They can passively listen for exported NetFlow datagrams.",
        "text": "They can passively listen for exported NetFlow datagrams.",
        "correct": false
      }
    ],
    "explanationHtml": "SNMP traps are <strong>unsolicited messages</strong> sent by an agent to the SNMP manager to report an event immediately as it occurs. By notifying the manager only when significant events happen, traps <strong>eliminate the need for continuous, periodic polling</strong>, which in turn <strong>reduces the consumption of network bandwidth and processing resources</strong> on both the network and the managed devices (agents)."
  },
  {
    "id": 20066,
    "number": 67,
    "type": "single",
    "questionHtml": "Which statement accurately describes a characteristic of IPsec?",
    "questionText": "Which statement accurately describes a characteristic of IPsec?",
    "options": [
      {
        "html": "IPsec works at the application layer and protects all application data.",
        "text": "IPsec works at the application layer and protects all application data.",
        "correct": false
      },
      {
        "html": "IPsec is a framework of standards developed by Cisco that relies on OSI algorithms.",
        "text": "IPsec is a framework of standards developed by Cisco that relies on OSI algorithms.",
        "correct": false
      },
      {
        "html": "IPsec is a framework of proprietary standards that depend on Cisco specific algorithms.",
        "text": "IPsec is a framework of proprietary standards that depend on Cisco specific algorithms.",
        "correct": false
      },
      {
        "html": "IPsec works at the transport layer and protects data at the network layer.",
        "text": "IPsec works at the transport layer and protects data at the network layer.",
        "correct": false
      },
      {
        "html": "IPsec is a framework of open standards that relies on existing algorithms.",
        "text": "IPsec is a framework of open standards that relies on existing algorithms.",
        "correct": true
      }
    ],
    "explanationHtml": "IPsec can secure a path between two network devices. IPsec can provide the following security functions: Confidentiality – IPsec ensures confidentiality by using encryption. Integrity – IPsec ensures that data arrives unchanged at the destination using a hash algorithm, such as MD5 or SHA. Authentication – IPsec uses Internet Key Exchange (IKE) to authenticate users and devices that can carry out communication independently. IKE uses several types of authentication, including username and password, one-time password, biometrics, pre-shared keys (PSKs), and digital certificates. Secure key exchange- IPsec uses the Diffie-Hellman (DH) algorithm to provide a public key exchange method for two peers to establish a shared secret key."
  },
  {
    "id": 16367,
    "number": 68,
    "type": "multiple",
    "questionHtml": "In a large enterprise network, which two functions are performed by routers at the distribution layer? (Choose two.)",
    "questionText": "In a large enterprise network, which two functions are performed by routers at the distribution layer? (Choose two.)",
    "options": [
      {
        "html": "connect users to the network",
        "text": "connect users to the network",
        "correct": false
      },
      {
        "html": "provide a high-speed network backbone",
        "text": "provide a high-speed network backbone",
        "correct": false
      },
      {
        "html": "connect remote networks",
        "text": "connect remote networks",
        "correct": true
      },
      {
        "html": "provide Power over Ethernet to devices",
        "text": "provide Power over Ethernet to devices",
        "correct": false
      },
      {
        "html": "provide data traffic security",
        "text": "provide data traffic security",
        "correct": true
      }
    ],
    "explanationHtml": "In a large enterprise network, the provision of a high-speed network backbone is a function of the core layer. Access layer switches connect users to the network and provide Power over Ethernet to devices. Distribution layer routers provide data traffic security and connections to other networks."
  },
  {
    "id": 20067,
    "number": 69,
    "type": "multiple",
    "questionHtml": "Which two statements describe the use of asymmetric algorithms? (Choose two.)",
    "questionText": "Which two statements describe the use of asymmetric algorithms? (Choose two.)",
    "options": [
      {
        "html": "Public and private keys may be used interchangeably.",
        "text": "Public and private keys may be used interchangeably.",
        "correct": false
      },
      {
        "html": "If a public key is used to encrypt the data, a public key must be used to decrypt the data.",
        "text": "If a public key is used to encrypt the data, a public key must be used to decrypt the data.",
        "correct": false
      },
      {
        "html": "If a private key is used to encrypt the data, a public key must be used to decrypt the data.",
        "text": "If a private key is used to encrypt the data, a public key must be used to decrypt the data.",
        "correct": true
      },
      {
        "html": "If a public key is used to encrypt the data, a private key must be used to decrypt the data.",
        "text": "If a public key is used to encrypt the data, a private key must be used to decrypt the data.",
        "correct": true
      },
      {
        "html": "If a private key is used to encrypt the data, a private key must be used to decrypt the data.",
        "text": "If a private key is used to encrypt the data, a private key must be used to decrypt the data.",
        "correct": false
      }
    ],
    "explanationHtml": "Asymmetric algorithms use two keys: a public key and a private key. Both keys are capable of the encryption process, but the complementary matched key is required for decryption. If a public key encrypts the data, the matching private key decrypts the data. The opposite is also true. If a private key encrypts the data, the corresponding public key decrypts the data."
  },
  {
    "id": 16369,
    "number": 70,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator has deployed QoS and has configured the network to mark traffic on the VoIP phones as well as the Layer 2 and Layer 3 switches. Where should initial marking occur to establish the trust boundary? <img src=\"./assets/i290000v1n1_Trust-Boundary2-22c92ddf.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator has deployed QoS and has configured the network to mark traffic on the VoIP phones as well as the Layer 2 and Layer 3 switches. Where should initial marking occur to establish the trust boundary?",
    "options": [
      {
        "html": "Trust Boundary 4",
        "text": "Trust Boundary 4",
        "correct": false
      },
      {
        "html": "Trust Boundary 3",
        "text": "Trust Boundary 3",
        "correct": false
      },
      {
        "html": "Trust Boundary 1",
        "text": "Trust Boundary 1",
        "correct": true
      },
      {
        "html": "Trust Boundary 2",
        "text": "Trust Boundary 2",
        "correct": false
      }
    ],
    "explanationHtml": "Traffic should be classified and marked as close to its source as possible. The trust boundary identifies at which device marked traffic should be trusted. Traffic marked on VoIP phones would be considered trusted as it moves into the enterprise network."
  },
  {
    "id": 16370,
    "number": 71,
    "type": "multiple",
    "questionHtml": "What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
    "questionText": "What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
    "options": [
      {
        "html": "reduced costs",
        "text": "reduced costs",
        "correct": true
      },
      {
        "html": "decreased number of critical points of failure",
        "text": "decreased number of critical points of failure",
        "correct": false
      },
      {
        "html": "increased flexibility",
        "text": "increased flexibility",
        "correct": true
      },
      {
        "html": "increased bandwidth availability",
        "text": "increased bandwidth availability",
        "correct": false
      },
      {
        "html": "increased network management options",
        "text": "increased network management options",
        "correct": false
      }
    ],
    "explanationHtml": "Wireless connectivity at the access layer provides increased flexibility, reduced costs, and the ability to grow and adapt to changing business requirements. Utilizing wireless routers and access points can provide an increase in the number of central points of failure. Wireless routers and access points will not provide an increase in bandwidth availability."
  },
  {
    "id": 16371,
    "number": 72,
    "type": "multiple",
    "questionHtml": "What are two purposes of launching a reconnaissance attack on a network? (Choose two.)",
    "questionText": "What are two purposes of launching a reconnaissance attack on a network? (Choose two.)",
    "options": [
      {
        "html": "to scan for accessibility",
        "text": "to scan for accessibility",
        "correct": true
      },
      {
        "html": "to retrieve and modify data",
        "text": "to retrieve and modify data",
        "correct": false
      },
      {
        "html": "to gather information about the network and devices",
        "text": "to gather information about the network and devices",
        "correct": true
      },
      {
        "html": "to prevent other users from accessing the system",
        "text": "to prevent other users from accessing the system",
        "correct": false
      },
      {
        "html": "to escalate access privileges",
        "text": "to escalate access privileges",
        "correct": false
      }
    ],
    "explanationHtml": "Gathering information about a network and scanning for access is a reconnaissance attack. Preventing other users from accessing a system is a denial of service attack. Attempting to retrieve and modify data, and attempting to escalate access privileges are types of access attacks."
  },
  {
    "id": 16372,
    "number": 73,
    "type": "single",
    "questionHtml": "A group of users on the same network are all complaining about their computers running slowly. After investigating, the technician determines that these computers are part of a zombie network. Which type of malware is used to control these computers?",
    "questionText": "A group of users on the same network are all complaining about their computers running slowly. After investigating, the technician determines that these computers are part of a zombie network. Which type of malware is used to control these computers?",
    "options": [
      {
        "html": "botnet",
        "text": "botnet",
        "correct": true
      },
      {
        "html": "spyware",
        "text": "spyware",
        "correct": false
      },
      {
        "html": "virus",
        "text": "virus",
        "correct": false
      },
      {
        "html": "rootkit",
        "text": "rootkit",
        "correct": false
      }
    ],
    "explanationHtml": "A botnet is a network of infected computers called a zombie network. The computers are controlled by a hacker and are used to attack other computers or to steal data."
  },
  {
    "id": 16373,
    "number": 74,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.31.7.45 eq dns .</pre> If a packet with a source address of 10.1.1.201, a destination address of 192.31.7.45, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.31.7.45 eq dns . If a packet with a source address of 10.1.1.201, a destination address of 192.31.7.45, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "permitted",
        "text": "permitted",
        "correct": false
      },
      {
        "html": "denied",
        "text": "denied",
        "correct": true
      }
    ],
    "explanationHtml": "<ul><li><strong>Port/Service Mismatch:</strong> The ACL specifically permits <strong>TCP</strong> traffic where the destination port is <strong>DNS</strong> (port 53). However, the incoming packet is using protocol <strong>23</strong>, which is the well-known port for <strong>Telnet</strong>.</li><li><strong>Implicit Deny:</strong> Since the packet’s port (23) does not match the port specified in the permit statement (53), the router moves past that entry. Because there are no other permit statements, the packet is discarded by the <strong>implicit deny any</strong> statement that is automatically applied to the end of every ACL.</li></ul>"
  },
  {
    "id": 16374,
    "number": 75,
    "type": "single",
    "questionHtml": "Refer to the exhibit. From which location did this router load the IOS? <img src=\"./assets/i208382v1n1_208382-bd273508.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. From which location did this router load the IOS?",
    "options": [
      {
        "html": "flash memory",
        "text": "flash memory",
        "correct": true
      },
      {
        "html": "NVRAM?",
        "text": "NVRAM?",
        "correct": false
      },
      {
        "html": "RAM",
        "text": "RAM",
        "correct": false
      },
      {
        "html": "ROM",
        "text": "ROM",
        "correct": false
      },
      {
        "html": "a TFTP server?",
        "text": "a TFTP server?",
        "correct": false
      }
    ],
    "explanationHtml": "In the provided show version output, the line System image file is “flash:c1841-advipservicesk9-mz.124-15.Tl.bin” explicitly identifies the source of the Cisco IOS. The prefix flash: indicates that the router successfully located and loaded the operating system image from its internal <strong>flash memory</strong> during the boot process. Additionally, the configuration register value of <strong>0x2102</strong> confirms the router is set to follow standard boot procedures, which typically involve loading the first valid IOS image found in flash if no other specific boot instructions are present."
  },
  {
    "id": 16375,
    "number": 76,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Which data format is used to represent the data for network automation applications? <img src=\"./assets/i349058v2n1_347058-b2a7f126.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
    "options": [
      {
        "html": "XML",
        "text": "XML",
        "correct": false
      },
      {
        "html": "YAML",
        "text": "YAML",
        "correct": false
      },
      {
        "html": "HTML",
        "text": "HTML",
        "correct": false
      },
      {
        "html": "JSON",
        "text": "JSON",
        "correct": true
      }
    ],
    "explanationHtml": "The common data formats that are used in many applications including network automation and programmability are as follows: <ul><li><strong>JavaScript Object Notation (JSON)</strong> – In JSON, the data known as an object is one or more key/value pairs enclosed in braces { }. Keys must be strings within double quotation marks ” “. Keys and values are separated by a colon.</li><li><strong>eXtensible Markup Language (XML)</strong> – In XML, the data is enclosed within a related set of tags &lt;tag&gt;data&lt;/tag&gt;.</li><li><strong>YAML Ain’t Markup Language (YAML)</strong> – In YAML, the data known as an object is one or more key value pairs. Key value pairs are separated by a colon without the use of quotation marks. YAML uses indentation to define its structure, without the use of brackets or commas.</li></ul>"
  },
  {
    "id": 16376,
    "number": 77,
    "type": "single",
    "questionHtml": "What QoS step must occur before packets can be marked?",
    "questionText": "What QoS step must occur before packets can be marked?",
    "options": [
      {
        "html": "classifying",
        "text": "classifying",
        "correct": true
      },
      {
        "html": "shaping",
        "text": "shaping",
        "correct": false
      },
      {
        "html": "queuing",
        "text": "queuing",
        "correct": false
      },
      {
        "html": "policing",
        "text": "policing",
        "correct": false
      }
    ],
    "explanationHtml": "Before a packet can be marked, it must first be <strong>classified</strong>. Classification is the process of analyzing network traffic flows to determine which specific class they belong to based on defined criteria. Once the traffic class is determined through classification, the packet can then be <strong>marked</strong> with a priority value in its header (such as DSCP or CoS) so that other QoS tools can identify and treat the traffic according to the established policy."
  },
  {
    "id": 16377,
    "number": 78,
    "type": "single",
    "questionHtml": "What is the main function of a hypervisor?",
    "questionText": "What is the main function of a hypervisor?",
    "options": [
      {
        "html": "It is used to create and manage multiple VM instances on a host machine.",
        "text": "It is used to create and manage multiple VM instances on a host machine.",
        "correct": true
      },
      {
        "html": "It is a device that filters and checks security credentials.",
        "text": "It is a device that filters and checks security credentials.",
        "correct": false
      },
      {
        "html": "It is a device that synchronizes a group of sensors.",
        "text": "It is a device that synchronizes a group of sensors.",
        "correct": false
      },
      {
        "html": "It is software used to coordinate and prepare data for analysis.",
        "text": "It is software used to coordinate and prepare data for analysis.",
        "correct": false
      },
      {
        "html": "It is used by ISPs to monitor cloud computing resources.",
        "text": "It is used by ISPs to monitor cloud computing resources.",
        "correct": false
      }
    ],
    "explanationHtml": "A hypervisor is a key component of virtualization. A hypervisor is often software-based and is used to create and manage multiple VM instances."
  },
  {
    "id": 16378,
    "number": 79,
    "type": "single",
    "questionHtml": "A company needs to interconnect several branch offices across a metropolitan area. The network engineer is seeking a solution that provides high-speed converged traffic, including voice, video, and data on the same network infrastructure. The company also wants easy integration to their existing LAN infrastructure in their office locations. Which technology should be recommended?",
    "questionText": "A company needs to interconnect several branch offices across a metropolitan area. The network engineer is seeking a solution that provides high-speed converged traffic, including voice, video, and data on the same network infrastructure. The company also wants easy integration to their existing LAN infrastructure in their office locations. Which technology should be recommended?",
    "options": [
      {
        "html": "Frame Relay",
        "text": "Frame Relay",
        "correct": false
      },
      {
        "html": "Ethernet WAN",
        "text": "Ethernet WAN",
        "correct": true
      },
      {
        "html": "VSAT",
        "text": "VSAT",
        "correct": false
      },
      {
        "html": "ISDN",
        "text": "ISDN",
        "correct": false
      }
    ],
    "explanationHtml": "Ethernet WAN uses many Ethernet standards and it connects easily to existing Ethernet LANs. It provides a switched, high-bandwidth Layer 2 network capable of managing data, voice, and video all on the same infrastructure. ISDN, while capable of supporting both voice and data, does not provide high bandwidth. VSAT uses satellite connectivity to establish a private WAN connection but with relatively low bandwidth. Use of VSAT, ISDN, and Frame Relay require specific network devices for the WAN connection and data conversion between LAN and WAN."
  },
  {
    "id": 16379,
    "number": 80,
    "type": "single",
    "questionHtml": "Refer to the exhibit. As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used? <img src=\"./assets/i288031v1n1_Traffic_Policing-07cf9143.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used?",
    "options": [
      {
        "html": "traffic shaping",
        "text": "traffic shaping",
        "correct": false
      },
      {
        "html": "weighted random early detection",
        "text": "weighted random early detection",
        "correct": false
      },
      {
        "html": "classification and marking",
        "text": "classification and marking",
        "correct": false
      },
      {
        "html": "traffic policing",
        "text": "traffic policing",
        "correct": true
      }
    ],
    "explanationHtml": "Traffic shaping buffers excess packets in a queue and then forwards the traffic over increments of time, which creates a smoothed packet output rate. Traffic policing drops traffic when the amount of traffic reaches a configured maximum rate, which creates an output rate that appears as a saw-tooth with crests and troughs."
  },
  {
    "id": 16380,
    "number": 81,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 10.1.3.8 eq dns .</pre> If a packet with a source address of 10.1.3.8, a destination address of 10.10.3.8, and a protocol of 53 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 10.1.3.8 eq dns . If a packet with a source address of 10.1.3.8, a destination address of 10.10.3.8, and a protocol of 53 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "denied",
        "text": "denied",
        "correct": true
      },
      {
        "html": "permitted",
        "text": "permitted",
        "correct": false
      }
    ],
    "explanationHtml": "The packet is <strong>denied</strong> because it fails to match the specific criteria of the single permit entry in the ACL: <ul><li><strong>Source Address Mismatch:</strong> The ACL permits traffic from the source range <strong>10.1.1.0 to 10.1.1.255</strong>. The packet’s source address, <strong>10.1.3.8</strong>, falls outside this permitted range.</li><li><strong>Destination Address Mismatch:</strong> The ACL permits traffic destined for the specific host <strong>10.1.3.8</strong>. The packet’s destination address is <strong>10.10.3.8</strong>, which does not match.</li><li><strong>Implicit Deny:</strong> Because the packet does not match the explicit permit statement, it is discarded by the <strong>implicit deny any</strong> statement that is automatically applied to the end of every ACL.</li></ul>"
  },
  {
    "id": 16381,
    "number": 82,
    "type": "single",
    "questionHtml": "Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router? <img src=\"./assets/2017-06-26_224832-1-f7b9f7b3.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?",
    "options": [
      {
        "html": "defines which addresses are allowed into the router",
        "text": "defines which addresses are allowed into the router",
        "correct": false
      },
      {
        "html": "defines which addresses can be translated",
        "text": "defines which addresses can be translated",
        "correct": true
      },
      {
        "html": "defines which addresses are assigned to a NAT pool",
        "text": "defines which addresses are assigned to a NAT pool",
        "correct": false
      },
      {
        "html": "defines which addresses are allowed out of the router",
        "text": "defines which addresses are allowed out of the router",
        "correct": false
      }
    ],
    "explanationHtml": "In the provided configuration, <strong>access-list 102</strong> is used in conjunction with the <strong>ip nat inside source</strong> command to identify the “inside local” traffic that is eligible for translation. Specifically, the statement access-list 102 permit ip 10.10.10.0 0.0.0.255 any identifies the internal network range, and the NAT command instructs the router to <strong>translate</strong> any source addresses matching that list to the public IP address of the FastEthernet 0/1 interface before forwarding the traffic to the outside network."
  },
  {
    "id": 16382,
    "number": 83,
    "type": "single",
    "questionHtml": "If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?",
    "questionText": "If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?",
    "options": [
      {
        "html": "12",
        "text": "12",
        "correct": false
      },
      {
        "html": "4",
        "text": "4",
        "correct": false
      },
      {
        "html": "8",
        "text": "8",
        "correct": true
      },
      {
        "html": "16",
        "text": "16",
        "correct": false
      },
      {
        "html": "6",
        "text": "6",
        "correct": false
      }
    ],
    "explanationHtml": "In calculating how many ACLs can be configured, use the rule of “three Ps”: one ACL per protocol, per direction, per interface. In this case, 2 interfaces x 2 protocols x 2 directions yields 8 possible ACLs."
  },
  {
    "id": 16383,
    "number": 84,
    "type": "multiple",
    "questionHtml": "Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command. The administrator then edited this access-list by issuing the commands below. <img src=\"./assets/i241882v4n1_241882-74179733.png\" alt=\"Question diagram\" loading=\"lazy\"><pre>Router(config)# ip access-list extended 101 Router(config-ext-nacl)# no 20 Router(config-ext-nacl)# 5 permit tcp any any eq 22 Router(config-ext-nacl)# 20 deny udp any any</pre> Which two conclusions can be drawn from this new configuration?​ (Choose two.)",
    "questionText": "Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command. The administrator then edited this access-list by issuing the commands below. Router(config)# ip access-list extended 101 Router(config-ext-nacl)# no 20 Router(config-ext-nacl)# 5 permit tcp any any eq 22 Router(config-ext-nacl)# 20 deny udp any any Which two conclusions can be drawn from this new configuration?​ (Choose two.)",
    "options": [
      {
        "html": "TFTP packets will be permitted.​",
        "text": "TFTP packets will be permitted.​",
        "correct": false
      },
      {
        "html": "Ping packets will be permitted.",
        "text": "Ping packets will be permitted.",
        "correct": true
      },
      {
        "html": "Telnet packets will be permitted.",
        "text": "Telnet packets will be permitted.",
        "correct": false
      },
      {
        "html": "SSH packets will be permitted.",
        "text": "SSH packets will be permitted.",
        "correct": true
      },
      {
        "html": "All TCP and UDP packets will be denied.​",
        "text": "All TCP and UDP packets will be denied.​",
        "correct": false
      }
    ],
    "explanationHtml": "After the editing, the final configuration is as follows: Router#<strong> show access-lists</strong> Extended IP access list 101 5 permit tcp any any eq ssh 10 deny tcp any any 20 deny udp any any 30 permit icmp any any So, only SSH packets and ICMP packets will be permitted."
  },
  {
    "id": 16384,
    "number": 85,
    "type": "single",
    "questionHtml": "Which troubleshooting approach is more appropriate for a seasoned network administrator rather than a less-experienced network administrator?",
    "questionText": "Which troubleshooting approach is more appropriate for a seasoned network administrator rather than a less-experienced network administrator?",
    "options": [
      {
        "html": "a less-structured approach based on an educated guess",
        "text": "a less-structured approach based on an educated guess",
        "correct": true
      },
      {
        "html": "an approach comparing working and nonworking components to spot significant differences",
        "text": "an approach comparing working and nonworking components to spot significant differences",
        "correct": false
      },
      {
        "html": "a structured approach starting with the physical layer and moving up through the layers of the OSI model until the cause of the problem is identified",
        "text": "a structured approach starting with the physical layer and moving up through the layers of the OSI model until the cause of the problem is identified",
        "correct": false
      },
      {
        "html": "an approach that starts with the end-user applications and moves down through the layers of the OSI model until the cause of the problem has been identified",
        "text": "an approach that starts with the end-user applications and moves down through the layers of the OSI model until the cause of the problem has been identified",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>educated guess</strong> (also known as the “shoot-from-the-hip” approach) is more appropriate for <strong>seasoned technicians</strong> because they can rely on their <strong>extensive knowledge and experience</strong> to decisively isolate and solve network issues. While structured methods like bottom-up or top-down are safer for less-experienced administrators to avoid wasted time, an experienced admin can use intuition to skip steps and find the most probable cause quickly. For those without such experience, this approach often results in random and ineffective troubleshooting."
  },
  {
    "id": 16385,
    "number": 86,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
    "questionText": "Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "extended ACL outbound on R2 WAN interface towards the internet",
        "text": "extended ACL outbound on R2 WAN interface towards the internet",
        "correct": false
      },
      {
        "html": "standard ACL outbound on R2 WAN interface towards the internet",
        "text": "standard ACL outbound on R2 WAN interface towards the internet",
        "correct": false
      },
      {
        "html": "standard ACL outbound on R2 S0/0/0",
        "text": "standard ACL outbound on R2 S0/0/0",
        "correct": false
      },
      {
        "html": "extended ACLs inbound on R1 G0/0 and G0/1",
        "text": "extended ACLs inbound on R1 G0/0 and G0/1",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Type:</strong><strong>Extended ACLs</strong> are required for this scenario because they can filter traffic based on <strong>destination addresses, protocols, and port numbers</strong> (such as specific social media sites or HTTP/HTTPS traffic), whereas standard ACLs only filter based on source addresses. <strong>Placement:</strong> According to network design guidelines, extended ACLs should be located <strong>as close as possible to the source</strong> of the traffic being filtered. Placing these ACLs <strong>inbound</strong> on the R1 interfaces (G0/0 and G0/1) ensures that undesirable traffic is denied before it consumes any bandwidth or resources within the network infrastructure."
  },
  {
    "id": 16386,
    "number": 87,
    "type": "single",
    "questionHtml": "Refer to the exhibit. An administrator is trying to configure PAT on R1, but PC-A is unable to access the Internet. The administrator tries to ping a server on the Internet from PC-A and collects the debugs that are shown in the exhibit. Based on this output, what is most likely the cause of the problem? <img src=\"./assets/2017-03-09_142831-7318fa3c.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. An administrator is trying to configure PAT on R1, but PC-A is unable to access the Internet. The administrator tries to ping a server on the Internet from PC-A and collects the debugs that are shown in the exhibit. Based on this output, what is most likely the cause of the problem?",
    "options": [
      {
        "html": "The inside and outside NAT interlaces have been configured backwards",
        "text": "The inside and outside NAT interlaces have been configured backwards",
        "correct": false
      },
      {
        "html": "The inside global address is not on the same subnet as the ISP",
        "text": "The inside global address is not on the same subnet as the ISP",
        "correct": true
      },
      {
        "html": "The address on Fa0/0 should be 64.100.0.1.",
        "text": "The address on Fa0/0 should be 64.100.0.1.",
        "correct": false
      },
      {
        "html": "The NAT source access list matches the wrong address range.",
        "text": "The NAT source access list matches the wrong address range.",
        "correct": false
      }
    ],
    "explanationHtml": "The output of debug ip nat shows each packet that is translated by the router. The “s” is the source IP address of the packet and the “d” is the destination. The address after the arrow (“-&gt;”) shows the translated address. In this case, the translated address is on the 209.165.201.0 subnet but the ISP facing interface is in the 209.165.200.224/27 subnet. The ISP may drop the incoming packets, or might be unable to route the return packets back to the host because the address is in an unknown subnet."
  },
  {
    "id": 16387,
    "number": 88,
    "type": "single",
    "questionHtml": "Why is QoS an important issue in a converged network that combines voice, video, and data communications?",
    "questionText": "Why is QoS an important issue in a converged network that combines voice, video, and data communications?",
    "options": [
      {
        "html": "Data communications must be given the first priority.",
        "text": "Data communications must be given the first priority.",
        "correct": false
      },
      {
        "html": "Voice and video communications are more sensitive to latency.",
        "text": "Voice and video communications are more sensitive to latency.",
        "correct": true
      },
      {
        "html": "Legacy equipment is unable to transmit voice and video without QoS.",
        "text": "Legacy equipment is unable to transmit voice and video without QoS.",
        "correct": false
      },
      {
        "html": "Data communications are sensitive to jitter.",
        "text": "Data communications are sensitive to jitter.",
        "correct": false
      }
    ],
    "explanationHtml": "Without any QoS mechanisms in place, time-sensitive packets, such as voice and video, will be dropped with the same frequency as email and web browsing traffic."
  },
  {
    "id": 20068,
    "number": 89,
    "type": "single",
    "questionHtml": "Which statement describes a VPN?",
    "questionText": "Which statement describes a VPN?",
    "options": [
      {
        "html": "VPNs use logical connections to create public networks through the Internet.",
        "text": "VPNs use logical connections to create public networks through the Internet.",
        "correct": false
      },
      {
        "html": "VPNs use open source virtualization software to create the tunnel through the Internet.",
        "text": "VPNs use open source virtualization software to create the tunnel through the Internet.",
        "correct": false
      },
      {
        "html": "VPNs use dedicated physical connections to transfer data between remote users.",
        "text": "VPNs use dedicated physical connections to transfer data between remote users.",
        "correct": false
      },
      {
        "html": "VPNs use virtual connections to create a private network through a public network.",
        "text": "VPNs use virtual connections to create a private network through a public network.",
        "correct": true
      }
    ],
    "explanationHtml": "A VPN is a private network that is created over a public network. Instead of using dedicated physical connections, a VPN uses virtual connections routed through a public network between two network devices."
  },
  {
    "id": 16389,
    "number": 90,
    "type": "single",
    "questionHtml": "In which OSPF state is the DR/BDR election conducted?",
    "questionText": "In which OSPF state is the DR/BDR election conducted?",
    "options": [
      {
        "html": "ExStart",
        "text": "ExStart",
        "correct": false
      },
      {
        "html": "Init",
        "text": "Init",
        "correct": false
      },
      {
        "html": "Two-Way",
        "text": "Two-Way",
        "correct": true
      },
      {
        "html": "Exchange",
        "text": "Exchange",
        "correct": false
      }
    ],
    "explanationHtml": "The DR and BDR election is conducted during the <strong>Two-Way state</strong>. In this state, communication between neighboring routers is confirmed as bidirectional. On multiaccess networks, such as Ethernet LANs, routers use this bidirectional communication to elect a Designated Router (DR) and a Backup Designated Router (BDR) before transitioning to the next state (ExStart) to begin synchronizing their databases."
  },
  {
    "id": 20069,
    "number": 91,
    "type": "single",
    "questionHtml": "Two corporations have just completed a merger. The network engineer has been asked to connect the two corporate networks without the expense of leased lines. Which solution would be the most cost effective method of providing a proper and secure connection between the two corporate networks?",
    "questionText": "Two corporations have just completed a merger. The network engineer has been asked to connect the two corporate networks without the expense of leased lines. Which solution would be the most cost effective method of providing a proper and secure connection between the two corporate networks?",
    "options": [
      {
        "html": "Cisco Secure Mobility Clientless SSL VPN",
        "text": "Cisco Secure Mobility Clientless SSL VPN",
        "correct": false
      },
      {
        "html": "Frame Relay",
        "text": "Frame Relay",
        "correct": false
      },
      {
        "html": "remote access VPN using IPsec",
        "text": "remote access VPN using IPsec",
        "correct": false
      },
      {
        "html": "Cisco AnyConnect Secure Mobility Client with SSL",
        "text": "Cisco AnyConnect Secure Mobility Client with SSL",
        "correct": false
      },
      {
        "html": "site-to-site VPN",
        "text": "site-to-site VPN",
        "correct": true
      }
    ],
    "explanationHtml": "The site-to-site VPN is an extension of a classic WAN network that provides a static interconnection of entire networks. Frame Relay would be a better choice than leased lines, but would be more expensive than implementing site-to-site VPNs. The other options refer to remote access VPNs which are better suited for connecting users to the corporate network versus interconnecting two or more networks."
  },
  {
    "id": 16391,
    "number": 92,
    "type": "single",
    "questionHtml": "What is the final operational state that will form between an OSPF DR and a DROTHER once the routers reach convergence?",
    "questionText": "What is the final operational state that will form between an OSPF DR and a DROTHER once the routers reach convergence?",
    "options": [
      {
        "html": "loading",
        "text": "loading",
        "correct": false
      },
      {
        "html": "established",
        "text": "established",
        "correct": false
      },
      {
        "html": "full",
        "text": "full",
        "correct": true
      },
      {
        "html": "two-way",
        "text": "two-way",
        "correct": false
      }
    ],
    "explanationHtml": "In OSPF multiaccess networks, a <strong>DROTHER</strong> forms a <strong>full adjacency</strong> with the <strong>Designated Router (DR)</strong> and Backup Designated Router (BDR) to synchronize link-state databases. While two DROTHERs remain in a <strong>Two-Way</strong> state to acknowledge each other’s presence, the relationship between a DR and a DROTHER progresses through the <strong>Loading</strong> state until it reaches the <strong>Full</strong> state, indicating that their databases are identical and convergence is complete."
  },
  {
    "id": 16392,
    "number": 93,
    "type": "single",
    "questionHtml": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR? <img src=\"./assets/i255836v1n1_255836-031d41cb.gif\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
    "options": [
      {
        "html": "Router R4 will become the DR and router R1 will become the BDR.",
        "text": "Router R4 will become the DR and router R1 will become the BDR.",
        "correct": true
      },
      {
        "html": "Router R2 will become the DR and router R3 will become the BDR.",
        "text": "Router R2 will become the DR and router R3 will become the BDR.",
        "correct": false
      },
      {
        "html": "Router R1 will become the DR and router R2 will become the BDR.",
        "text": "Router R1 will become the DR and router R2 will become the BDR.",
        "correct": false
      },
      {
        "html": "Router R4 will become the DR and router R3 will become the BDR.",
        "text": "Router R4 will become the DR and router R3 will become the BDR.",
        "correct": false
      }
    ],
    "explanationHtml": "OSPF elections of a DR are based on the following in order of precedence: <ul><li>highest pritority from 1 -255 (0 = never a DR)</li><li>highest router ID</li><li>highest IP address of a loopback or active interface in the absence of a manually configured router ID. Loopback IP addresses take higher precedence than other interfaces.</li></ul> In this case routers R4 and R1 have the highest router priority. Between the two, R3 has the higher router ID. Therefore, R4 will become the DR and R1 will become the BDR."
  },
  {
    "id": 16393,
    "number": 94,
    "type": "single",
    "questionHtml": "Which type of server would be used to keep a historical record of messages from monitored network devices?",
    "questionText": "Which type of server would be used to keep a historical record of messages from monitored network devices?",
    "options": [
      {
        "html": "DNS",
        "text": "DNS",
        "correct": false
      },
      {
        "html": "print",
        "text": "print",
        "correct": false
      },
      {
        "html": "DHCP",
        "text": "DHCP",
        "correct": false
      },
      {
        "html": "syslog",
        "text": "syslog",
        "correct": true
      },
      {
        "html": "authentication",
        "text": "authentication",
        "correct": false
      }
    ],
    "explanationHtml": "A syslog server is used as a centralized location for logged messages from monitored network devices."
  },
  {
    "id": 20070,
    "number": 95,
    "type": "multiple",
    "questionHtml": "When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)",
    "questionText": "When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)",
    "options": [
      {
        "html": "packet addressing",
        "text": "packet addressing",
        "correct": false
      },
      {
        "html": "delay",
        "text": "delay",
        "correct": true
      },
      {
        "html": "jitter",
        "text": "jitter",
        "correct": true
      },
      {
        "html": "packet routing",
        "text": "packet routing",
        "correct": false
      },
      {
        "html": "link speed",
        "text": "link speed",
        "correct": false
      }
    ],
    "explanationHtml": "Delay is the latency between a sending and receiving device. Jitter is the variation in the delay of the received packets. Both delay and jitter need to be controlled in order to support real-time voice and video traffic."
  },
  {
    "id": 16395,
    "number": 96,
    "type": "single",
    "questionHtml": "In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?",
    "questionText": "In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?",
    "options": [
      {
        "html": "Determine ownership.",
        "text": "Determine ownership.",
        "correct": false
      },
      {
        "html": "Determine the symptoms.",
        "text": "Determine the symptoms.",
        "correct": false
      },
      {
        "html": "Narrow the scope.",
        "text": "Narrow the scope.",
        "correct": true
      },
      {
        "html": "Document the symptoms.",
        "text": "Document the symptoms.",
        "correct": false
      },
      {
        "html": "Gather information.",
        "text": "Gather information.",
        "correct": false
      }
    ],
    "explanationHtml": "In the “narrow the scope” step of gathering symptoms, a network engineer will determine if the network problem is at the core, distribution, or access layer of the network. Once this step is complete and the layer is identified, the network engineer can determine which pieces of equipment are the most likely cause."
  },
  {
    "id": 16396,
    "number": 97,
    "type": "single",
    "questionHtml": "What protocol sends periodic advertisements between connected Cisco devices in order to learn device name, IOS version, and the number and type of interfaces?",
    "questionText": "What protocol sends periodic advertisements between connected Cisco devices in order to learn device name, IOS version, and the number and type of interfaces?",
    "options": [
      {
        "html": "CDP",
        "text": "CDP",
        "correct": true
      },
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": false
      },
      {
        "html": "NTP",
        "text": "NTP",
        "correct": false
      },
      {
        "html": "LLDP",
        "text": "LLDP",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Cisco Discovery Protocol (CDP)</strong> is a Cisco proprietary Layer 2 protocol that runs on all Cisco devices. It sends <strong>periodic advertisements</strong> to physically connected Cisco neighbors to share critical information, including the <strong>device name</strong> (hostname), the hardware platform, the <strong>IOS version</strong>, and the <strong>number and type of interfaces</strong>. While LLDP performs similar functions, it is a vendor-neutral protocol, whereas CDP is specifically designed for connected Cisco equipment."
  },
  {
    "id": 16397,
    "number": 98,
    "type": "single",
    "questionHtml": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "questionText": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "options": [
      {
        "html": "0.0.0.127",
        "text": "0.0.0.127",
        "correct": false
      },
      {
        "html": "0.0.0.31",
        "text": "0.0.0.31",
        "correct": false
      },
      {
        "html": "0.0.3.255",
        "text": "0.0.3.255",
        "correct": true
      },
      {
        "html": "0.0.0.63",
        "text": "0.0.0.63",
        "correct": false
      }
    ],
    "explanationHtml": "To determine the correct <strong>wildcard mask</strong> for an OSPF network statement, you subtract the subnet mask from <strong>255.255.255.255</strong>. In this scenario, subtracting the subnet mask of <strong>255.255.252.0</strong> from <strong>255.255.255.255</strong> results in <strong>0.0.3.255</strong>."
  },
  {
    "id": 16398,
    "number": 99,
    "type": "single",
    "questionHtml": "Refer to the exhibit. An administrator configures the following ACL in order to prevent devices on the 192.168.1.0 subnet from accessing the server at 10.1.1.5: <pre>access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 access-list 100 permit ip any any</pre><img src=\"./assets/2020-06-13_113133-4816a913.jpg\" alt=\"Question diagram\" loading=\"lazy\"> Where should the administrator place this ACL for the most efficient use of network resources?",
    "questionText": "Refer to the exhibit. An administrator configures the following ACL in order to prevent devices on the 192.168.1.0 subnet from accessing the server at 10.1.1.5: access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 access-list 100 permit ip any any Where should the administrator place this ACL for the most efficient use of network resources?",
    "options": [
      {
        "html": "inbound on router A Fa0/0",
        "text": "inbound on router A Fa0/0",
        "correct": true
      },
      {
        "html": "outbound on router B Fa0/0",
        "text": "outbound on router B Fa0/0",
        "correct": false
      },
      {
        "html": "outbound on router A Fa0/1",
        "text": "outbound on router A Fa0/1",
        "correct": false
      },
      {
        "html": "inbound on router B Fa0/1",
        "text": "inbound on router B Fa0/1",
        "correct": false
      }
    ],
    "explanationHtml": "The configured ACL (100) is an <strong>Extended ACL</strong> because it filters traffic based on both source and destination IP addresses. According to standard design guidelines, <strong>Extended ACLs should be placed as close to the source of the traffic as possible</strong>. By applying this ACL <strong>inbound on Router A’s Fa0/0 interface</strong>, the unwanted traffic from the 192.168.1.0 subnet is discarded immediately upon entering the router, which prevents it from consuming bandwidth or processing resources across the point-to-point link and the rest of the network."
  },
  {
    "id": 16399,
    "number": 100,
    "type": "single",
    "questionHtml": "Which type of OSPFv2 packet is used to forward OSPF link change information?",
    "questionText": "Which type of OSPFv2 packet is used to forward OSPF link change information?",
    "options": [
      {
        "html": "link-state acknowledgment",
        "text": "link-state acknowledgment",
        "correct": false
      },
      {
        "html": "link-state update",
        "text": "link-state update",
        "correct": true
      },
      {
        "html": "hello",
        "text": "hello",
        "correct": false
      },
      {
        "html": "database description",
        "text": "database description",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>Type 4 Link-State Update (LSU)</strong> packet is specifically designed to announce new routing information and forward OSPF updates, such as <strong>link changes</strong>, to neighboring routers. While LSUs are used to reply to Link-State Requests (LSRs), they also serve as the primary vehicle for flooding <strong>Link-State Advertisements (LSAs)</strong> throughout an area when the network topology changes."
  },
  {
    "id": 16400,
    "number": 101,
    "type": "single",
    "questionHtml": "What protocol synchronizes with a private master clock or with a publicly available server on the internet?",
    "questionText": "What protocol synchronizes with a private master clock or with a publicly available server on the internet?",
    "options": [
      {
        "html": "MPLS",
        "text": "MPLS",
        "correct": false
      },
      {
        "html": "CBWFQ",
        "text": "CBWFQ",
        "correct": false
      },
      {
        "html": "TFTP",
        "text": "TFTP",
        "correct": false
      },
      {
        "html": "NTP",
        "text": "NTP",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Network Time Protocol (NTP)</strong> allows network devices to synchronize their software clocks with an NTP server to ensure accurate and consistent timestamping across the infrastructure. When implemented, the protocol can be configured to synchronize with a <strong>private master clock</strong> or with a <strong>publicly available NTP server on the internet</strong>. Consistent time settings are critical for correlating events in system logs and for effective network troubleshooting."
  },
  {
    "id": 20071,
    "number": 102,
    "type": "single",
    "questionHtml": "Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?",
    "questionText": "Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?",
    "options": [
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": false
      },
      {
        "html": "SSL VPN",
        "text": "SSL VPN",
        "correct": false
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": false
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Generic Routing Encapsulation (GRE)</strong> is a tunneling protocol that supports both <strong>multicast and broadcast traffic</strong>, which is essential for the operation of routing protocols over a VPN. Because standard IPsec tunnels are limited to unicast traffic, <strong>GRE over IPsec</strong> is used to encapsulate these non-unicast frames into GRE packets, which are then securely encrypted by IPsec for transport across the public network."
  },
  {
    "id": 16402,
    "number": 103,
    "type": "single",
    "questionHtml": "An OSPF router has three directly connected networks; 10.0.0.0/16, 10.1.0.0/16, and 10.2.0.0/16. Which OSPF network command would advertise only the 10.1.0.0 network to neighbors?",
    "questionText": "An OSPF router has three directly connected networks; 10.0.0.0/16, 10.1.0.0/16, and 10.2.0.0/16. Which OSPF network command would advertise only the 10.1.0.0 network to neighbors?",
    "options": [
      {
        "html": "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
        "text": "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
        "correct": true
      },
      {
        "html": "router(config-router)# network 10.1.0.0 0.0.15.255 area 0",
        "text": "router(config-router)# network 10.1.0.0 0.0.15.255 area 0",
        "correct": false
      },
      {
        "html": "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
        "text": "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
        "correct": false
      },
      {
        "html": "router(config-router)# network 10.1.0.0 0.0.0.0 area 0",
        "text": "router(config-router)# network 10.1.0.0 0.0.0.0 area 0",
        "correct": false
      }
    ],
    "explanationHtml": "To advertise only the 10.1.0.0/16 network the wildcard mask used in the network command must match the first 16-bits exactly. To match bits exactly, a wildcard mask uses a binary zero. This means that the first 16-bits of the wildcard mask must be zero. The low order 16-bits can all be set to 1."
  },
  {
    "id": 20072,
    "number": 104,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Which sequence of commands should be used to configure router A for OSPF?",
    "questionText": "Refer to the exhibit. Which sequence of commands should be used to configure router A for OSPF?",
    "options": [
      {
        "html": "router ospf 1 network 192.168.10.0 area 0",
        "text": "router ospf 1 network 192.168.10.0 area 0",
        "correct": false
      },
      {
        "html": "router ospf 1 network 192.168.10.0",
        "text": "router ospf 1 network 192.168.10.0",
        "correct": false
      },
      {
        "html": "router ospf 1 network 192.168.10.64 255.255.255.192 network 192.168.10.192 255.255.255.252",
        "text": "router ospf 1 network 192.168.10.64 255.255.255.192 network 192.168.10.192 255.255.255.252",
        "correct": false
      },
      {
        "html": "router ospf 1 network 192.168.10.64 0.0.0.63 area 0 network 192.168.10.192 0.0.0.3 area 0",
        "text": "router ospf 1 network 192.168.10.64 0.0.0.63 area 0 network 192.168.10.192 0.0.0.3 area 0",
        "correct": true
      }
    ],
    "explanationHtml": "To configure OSPFv2, you must first enable the OSPF process using the router ospf [process-id] command. You then use the network statement to identify which interfaces participate in the routing process for a specific area. The configuration requires two key components for each subnet: <ol><li><strong>Wildcard Mask:</strong> This is calculated by subtracting the subnet mask from <strong>255.255.255.255</strong>. <ul><li>For the /26 subnet (<strong>255.255.255.192</strong>), the wildcard is <strong>0.0.0.63</strong>.</li><li>For the /30 WAN link (<strong>255.255.255.252</strong>), the wildcard is <strong>0.0.0.3</strong>.</li></ul></li><li><strong>Area ID:</strong> Since the topology specifies the backbone area, both network statements must include area 0.</li></ol>"
  },
  {
    "id": 16404,
    "number": 105,
    "type": "single",
    "questionHtml": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "questionText": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "options": [
      {
        "html": "0.0.7.255",
        "text": "0.0.7.255",
        "correct": false
      },
      {
        "html": "0.0.1.255",
        "text": "0.0.1.255",
        "correct": true
      },
      {
        "html": "0.0.3.255",
        "text": "0.0.3.255",
        "correct": false
      },
      {
        "html": "0.0.15.255",
        "text": "0.0.15.255",
        "correct": false
      }
    ],
    "explanationHtml": "The simplest method to calculate a <strong>wildcard mask</strong> is to subtract the network’s subnet mask from a “quad-255” address (<strong>255.255.255.255</strong>). In this case, subtracting <strong>255.255.254.0</strong> from <strong>255.255.255.255</strong> results in <strong>0.0.1.255</strong>. This mask tells the OSPF process to match the first 23 bits of the address exactly while ignoring the remaining bits."
  },
  {
    "id": 16405,
    "number": 106,
    "type": "single",
    "questionHtml": "How does virtualization help with disaster recovery within a data center?",
    "questionText": "How does virtualization help with disaster recovery within a data center?",
    "options": [
      {
        "html": "improvement of business practices",
        "text": "improvement of business practices",
        "correct": false
      },
      {
        "html": "supply of consistent air flow",
        "text": "supply of consistent air flow",
        "correct": false
      },
      {
        "html": "support of live migration",
        "text": "support of live migration",
        "correct": true
      },
      {
        "html": "guarantee of power",
        "text": "guarantee of power",
        "correct": false
      }
    ],
    "explanationHtml": "Live migration allows moving of one virtual server to another virtual server that could be in a different location that is some distance from the original data center."
  },
  {
    "id": 20073,
    "number": 107,
    "type": "single",
    "questionHtml": "Refer to the exhibit. If no router ID was manually configured, what would router R1 use as its OSPF router ID? <img src=\"./assets/i254795v1n1_254795-88364a14.gif\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. If no router ID was manually configured, what would router R1 use as its OSPF router ID?",
    "options": [
      {
        "html": "10.0.0.1",
        "text": "10.0.0.1",
        "correct": false
      },
      {
        "html": "10.1.0.1",
        "text": "10.1.0.1",
        "correct": false
      },
      {
        "html": "192.168.1.100",
        "text": "192.168.1.100",
        "correct": true
      },
      {
        "html": "209.165.201.1",
        "text": "209.165.201.1",
        "correct": false
      }
    ],
    "explanationHtml": "Cisco routers determine the OSPF router ID based on a specific <strong>order of precedence</strong>. If an administrator does not explicitly configure a router ID using the router-id command, the router will automatically select the <strong>highest IPv4 address of any configured loopback interfaces</strong>. Because R1 has a loopback interface (Lo0) configured with the address <strong>192.168.1.100</strong>, this address is chosen as the router ID, even if there are physical interfaces with active addresses. Physical interface addresses are only used as a last resort if no loopback interfaces exist."
  },
  {
    "id": 16407,
    "number": 108,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Which devices exist in the failure domain when switch S3 loses power? <img src=\"./assets/i278658v1n1_222708-1-67b72219.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Which devices exist in the failure domain when switch S3 loses power?",
    "options": [
      {
        "html": "S4 and PC_2",
        "text": "S4 and PC_2",
        "correct": false
      },
      {
        "html": "PC_3 and AP_2",
        "text": "PC_3 and AP_2",
        "correct": true
      },
      {
        "html": "AP_2 and AP_1",
        "text": "AP_2 and AP_1",
        "correct": false
      },
      {
        "html": "PC_3 and PC_2",
        "text": "PC_3 and PC_2",
        "correct": false
      },
      {
        "html": "S1 and S4",
        "text": "S1 and S4",
        "correct": false
      }
    ],
    "explanationHtml": "A failure domain is the area of a network that is impacted when a critical device such as switch S3 has a failure or experiences problems."
  },
  {
    "id": 20074,
    "number": 109,
    "type": "single",
    "questionHtml": "Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
    "questionText": "Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
    "options": [
      {
        "html": "access-list 103 deny tcp host 192.168.10.0 any eq 23 access-list 103 permit tcp host 192.168.10.1 eq 80",
        "text": "access-list 103 deny tcp host 192.168.10.0 any eq 23 access-list 103 permit tcp host 192.168.10.1 eq 80",
        "correct": false
      },
      {
        "html": "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80 access-list 103 deny tcp ​192.168.10.0 0.0.0.255 any eq 23",
        "text": "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80 access-list 103 deny tcp ​192.168.10.0 0.0.0.255 any eq 23",
        "correct": true
      },
      {
        "html": "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80 access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
        "text": "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80 access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
        "correct": false
      },
      {
        "html": "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1 access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet",
        "text": "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1 access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet",
        "correct": false
      }
    ],
    "explanationHtml": "For an extended ACL to meet these requirements the following need to be included in the access control entries: identification number in the range 100-199 or 2000-2699 permit or deny parameter protocol source address and wildcard destination address and wildcard port number or name"
  },
  {
    "id": 16409,
    "number": 110,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement? <img src=\"./assets/2017-07-05_182607-1-fa6231df.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
    "options": [
      {
        "html": "5 deny 172.23.16.0 0.0.15.255",
        "text": "5 deny 172.23.16.0 0.0.15.255",
        "correct": true
      },
      {
        "html": "5 deny 172.23.16.0 0.0.255.255",
        "text": "5 deny 172.23.16.0 0.0.255.255",
        "correct": false
      },
      {
        "html": "15 deny 172.23.16.0 0.0.15.255",
        "text": "15 deny 172.23.16.0 0.0.15.255",
        "correct": false
      },
      {
        "html": "30 deny 172.23.16.0 0.0.15.255",
        "text": "30 deny 172.23.16.0 0.0.15.255",
        "correct": false
      }
    ],
    "explanationHtml": "The only filtering criteria specified for a standard access list is the source IPv4 address. The wild card mask is written to identify what parts of the address to match, with a 0 bit, and what parts of the address should be ignored, which a 1 bit. The router will parse the ACE entries from lowest sequence number to highest. If an ACE must be added to an existing access list, the sequence number should be specified so that the ACE is in the correct place during the ACL evaluation process."
  },
  {
    "id": 16410,
    "number": 111,
    "type": "single",
    "questionHtml": "Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
    "questionText": "Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
    "options": [
      {
        "html": "executing the SPF algorithm",
        "text": "executing the SPF algorithm",
        "correct": false
      },
      {
        "html": "building the topology table",
        "text": "building the topology table",
        "correct": true
      },
      {
        "html": "selecting the router ID",
        "text": "selecting the router ID",
        "correct": false
      },
      {
        "html": "declaring a neighbor to be inaccessible",
        "text": "declaring a neighbor to be inaccessible",
        "correct": false
      }
    ],
    "explanationHtml": "In the generic link-state routing process, the third step is to <strong>build the Link-State Database (LSDB)</strong>. After Link-State Advertisements (LSAs) are received from adjacent neighbors, OSPF-enabled routers use that information to build the <strong>topology table</strong> (LSDB), which contains information about all other routers in the network area and represents the overall network topology. Once this database is synchronized, the router can then execute the SPF algorithm to find the best paths."
  },
  {
    "id": 16411,
    "number": 112,
    "type": "single",
    "questionHtml": "What protocol uses agents, that reside on managed devices, to collect and store information about the device and its operation?",
    "questionText": "What protocol uses agents, that reside on managed devices, to collect and store information about the device and its operation?",
    "options": [
      {
        "html": "SYSLOG",
        "text": "SYSLOG",
        "correct": false
      },
      {
        "html": "TFTP",
        "text": "TFTP",
        "correct": false
      },
      {
        "html": "CBWFQ",
        "text": "CBWFQ",
        "correct": false
      },
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": true
      }
    ],
    "explanationHtml": "In the generic link-state routing process, the third step is to <strong>build the Link-State Database (LSDB)</strong>. After Link-State Advertisements (LSAs) are received from adjacent neighbors, OSPF-enabled routers use that information to build the <strong>topology table</strong> (LSDB), which contains information about all other routers in the network area and represents the overall network topology. Once this database is synchronized, the router can then execute the SPF algorithm to find the best paths."
  },
  {
    "id": 16412,
    "number": 113,
    "type": "single",
    "questionHtml": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 10.27.27.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "questionText": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 10.27.27.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "options": [
      {
        "html": "0.0.0.63",
        "text": "0.0.0.63",
        "correct": false
      },
      {
        "html": "0.0.0.255",
        "text": "0.0.0.255",
        "correct": true
      },
      {
        "html": "0.0.0.31",
        "text": "0.0.0.31",
        "correct": false
      },
      {
        "html": "0.0.0.15",
        "text": "0.0.0.15",
        "correct": false
      }
    ],
    "explanationHtml": "To calculate the <strong>wildcard mask</strong> for an OSPF network statement, you subtract the subnet mask from a “quad-255” address (<strong>255.255.255.255</strong>). For the subnet mask <strong>255.255.255.0</strong>, the calculation is 255.255.255.255 minus 255.255.255.0, which equals <strong>0.0.0.255</strong>. This mask tells the OSPF process to match the first three octets exactly while ignoring the last octet."
  },
  {
    "id": 22113,
    "number": 114,
    "type": "single",
    "questionHtml": "When will an OSPF-enabled router transition from the Down state to the Init state?",
    "questionText": "When will an OSPF-enabled router transition from the Down state to the Init state?",
    "options": [
      {
        "html": "when an OSPF-enabled interface becomes active",
        "text": "when an OSPF-enabled interface becomes active",
        "correct": true
      },
      {
        "html": "as soon as the router starts",
        "text": "as soon as the router starts",
        "correct": false
      },
      {
        "html": "when the router receives a hello packet from a neighbor router",
        "text": "when the router receives a hello packet from a neighbor router",
        "correct": false
      },
      {
        "html": "as soon as the DR/BDR election process is complete",
        "text": "as soon as the DR/BDR election process is complete",
        "correct": false
      }
    ],
    "explanationHtml": "When OSPFv2 is enabled, the enabled Gigabit Ethernet 0/0 interface transitions from the Down state to the Init state. R1 starts sending Hello packets out all OSPF-enabled interfaces to discover OSPF neighbors to develop adjacencies with. <img src=\"./assets/2023-06-13_110526-e65800ee.jpg\" alt=\"Question diagram\" loading=\"lazy\">"
  },
  {
    "id": 16414,
    "number": 115,
    "type": "single",
    "questionHtml": "What type of traffic is described as having a high volume of data per packet?",
    "questionText": "What type of traffic is described as having a high volume of data per packet?",
    "options": [
      {
        "html": "data",
        "text": "data",
        "correct": false
      },
      {
        "html": "video",
        "text": "video",
        "correct": true
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      }
    ],
    "explanationHtml": "Compared to voice traffic, <strong>video</strong> is described as having a <strong>higher volume of data per packet</strong>. While voice packets are typically small and predictable (approximately 200 bytes), video packets are significantly larger and vary in size based on the complexity and motion of the content being transmitted."
  },
  {
    "id": 16415,
    "number": 116,
    "type": "single",
    "questionHtml": "What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
    "questionText": "What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
    "options": [
      {
        "html": "LLDP",
        "text": "LLDP",
        "correct": true
      },
      {
        "html": "NTP",
        "text": "NTP",
        "correct": false
      },
      {
        "html": "TFTP",
        "text": "TFTP",
        "correct": false
      },
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Link Layer Discovery Protocol (LLDP)</strong> is a <strong>vendor-neutral</strong> Layer 2 neighbor discovery protocol similar to CDP. It is designed to work with network devices from different manufacturers, allowing them to <strong>advertise their identity and capabilities</strong> (such as device name, type, and management address) to other physically connected Layer 2 devices. This makes LLDP an essential tool for mapping network topologies in multi-vendor environments."
  },
  {
    "id": 16416,
    "number": 117,
    "type": "single",
    "questionHtml": "Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
    "questionText": "Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
    "options": [
      {
        "html": "building the topology table",
        "text": "building the topology table",
        "correct": false
      },
      {
        "html": "selecting the router ID",
        "text": "selecting the router ID",
        "correct": false
      },
      {
        "html": "declaring a neighbor to be inaccessible",
        "text": "declaring a neighbor to be inaccessible",
        "correct": false
      },
      {
        "html": "executing the SPF algorithm",
        "text": "executing the SPF algorithm",
        "correct": true
      }
    ],
    "explanationHtml": "In the link-state routing process, <strong>executing the SPF algorithm</strong> is the step where a router runs the Dijkstra Shortest Path First (SPF) algorithm against its Link-State Database (topology table). This calculation creates an <strong>SPF tree</strong>, which determines the <strong>best (shortest) path</strong> to every destination network based on cumulative link costs. Once this algorithm finishes, the best routes are then offered to the routing table."
  },
  {
    "id": 16417,
    "number": 118,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Which conclusion can be drawn from this OSPF multiaccess network? <img src=\"./assets/i247459v1n1_Item-247459-1-ff6e17f0.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Which conclusion can be drawn from this OSPF multiaccess network?",
    "options": [
      {
        "html": "If the DR stops producing Hello packets, a BDR will be elected, and then it promotes itself to assume the role of DR.​",
        "text": "If the DR stops producing Hello packets, a BDR will be elected, and then it promotes itself to assume the role of DR.​",
        "correct": false
      },
      {
        "html": "With an election of the DR, the number of adjacencies is reduced from 6 to 3.",
        "text": "With an election of the DR, the number of adjacencies is reduced from 6 to 3.",
        "correct": true
      },
      {
        "html": "​When a DR is elected all other non-DR routers become DROTHER.",
        "text": "​When a DR is elected all other non-DR routers become DROTHER.",
        "correct": false
      },
      {
        "html": "​All DROTHER routers will send LSAs to the DR and BDR to multicast 224.0.0.5.",
        "text": "​All DROTHER routers will send LSAs to the DR and BDR to multicast 224.0.0.5.",
        "correct": false
      }
    ],
    "explanationHtml": "On OSPF multiaccess networks, a DR is elected to be the collection and distribution point for LSAs sent and received. A BDR is also elected in case the DR fails. All other non-DR or BDR routers become DROTHER. Instead of flooding LSAs to all routers in the network, DROTHERs only send their LSAs to the DR and BDR using the multicast address 224.0.0.6. If there is no DR/BDR election, the number of required adjacencies is n(n-1)/2 = &gt; 4(4-1)/2 = 6. With the election, this number is reduced to 3.​"
  },
  {
    "id": 16418,
    "number": 119,
    "type": "single",
    "questionHtml": "Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation? <img src=\"./assets/i350680v1n1_C3M4-Diagram-711b5b9c.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "extended ACL outbound on R2 WAN interface towards the internet",
        "text": "extended ACL outbound on R2 WAN interface towards the internet",
        "correct": false
      },
      {
        "html": "standard ACL inbound on R1 vty lines",
        "text": "standard ACL inbound on R1 vty lines",
        "correct": true
      },
      {
        "html": "extended ACLs inbound on R1 G0/0 and G0/1",
        "text": "extended ACLs inbound on R1 G0/0 and G0/1",
        "correct": false
      },
      {
        "html": "extended ACL outbound on R2 S0/0/1",
        "text": "extended ACL outbound on R2 S0/0/1",
        "correct": false
      }
    ],
    "explanationHtml": "Standard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible. Extended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure."
  },
  {
    "id": 16419,
    "number": 120,
    "type": "single",
    "questionHtml": "Which type of VPN connects using the Transport Layer Security (TLS) feature?",
    "questionText": "Which type of VPN connects using the Transport Layer Security (TLS) feature?",
    "options": [
      {
        "html": "SSL VPN",
        "text": "SSL VPN",
        "correct": true
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": false
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": false
      },
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": false
      }
    ],
    "explanationHtml": "When a client negotiates an SSL VPN connection with the VPN gateway, it connects using Transport Layer Security (TLS). TLS is the newer version of SSL and is sometimes expressed as SSL/TLS. The two terms are often used interchangeably."
  },
  {
    "id": 16420,
    "number": 121,
    "type": "single",
    "questionHtml": "Which group of APIs are used by an SDN controller to communicate with various applications?",
    "questionText": "Which group of APIs are used by an SDN controller to communicate with various applications?",
    "options": [
      {
        "html": "eastbound APIs",
        "text": "eastbound APIs",
        "correct": false
      },
      {
        "html": "westbound APIs",
        "text": "westbound APIs",
        "correct": false
      },
      {
        "html": "northbound APIs",
        "text": "northbound APIs",
        "correct": true
      },
      {
        "html": "southbound APIs",
        "text": "southbound APIs",
        "correct": false
      }
    ],
    "explanationHtml": "The SDN controller uses <strong>northbound APIs</strong> to communicate with <strong>upstream applications</strong> (such as business or SDN applications) to help administrators shape traffic and deploy services. In contrast, <strong>southbound APIs</strong> are used by the controller to communicate with and define the behavior of <strong>downstream network elements</strong> like switches and routers."
  },
  {
    "id": 16421,
    "number": 122,
    "type": "single",
    "questionHtml": "A company has consolidated a number of servers and it is looking for a program or firmware to create and control virtual machines which have access to all the hardware of the consolidated servers. What service or technology would support this requirement?",
    "questionText": "A company has consolidated a number of servers and it is looking for a program or firmware to create and control virtual machines which have access to all the hardware of the consolidated servers. What service or technology would support this requirement?",
    "options": [
      {
        "html": "Cisco ACI",
        "text": "Cisco ACI",
        "correct": false
      },
      {
        "html": "software defined networking",
        "text": "software defined networking",
        "correct": false
      },
      {
        "html": "Type-1 hypervisor",
        "text": "Type-1 hypervisor",
        "correct": true
      },
      {
        "html": "APIC-EM",
        "text": "APIC-EM",
        "correct": false
      }
    ],
    "explanationHtml": "A <strong>Type-1 hypervisor</strong>, also known as a “bare metal” approach, is a program or firmware installed <strong>directly on the physical hardware</strong> of a server. This allows the hypervisor to create and control virtual machines (VMs) that have <strong>direct access to all hardware resources</strong>, such as CPUs, memory, and disk controllers. Because they lack the overhead of a host operating system, Type-1 hypervisors are highly efficient and are the standard choice for <strong>server consolidation</strong> in enterprise and data center environments."
  },
  {
    "id": 20075,
    "number": 123,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to identify inside local addresses that are to be translated?",
    "questionText": "What command would be used as part of configuring NAT or PAT to identify inside local addresses that are to be translated?",
    "options": [
      {
        "html": "ip nat inside source list 24 interface serial 0/1/0 overload",
        "text": "ip nat inside source list 24 interface serial 0/1/0 overload",
        "correct": false
      },
      {
        "html": "ip nat inside source list 14 pool POOL-STAT overload",
        "text": "ip nat inside source list 14 pool POOL-STAT overload",
        "correct": false
      },
      {
        "html": "access-list 10 permit 172.19.89.0 0.0.0.255",
        "text": "access-list 10 permit 172.19.89.0 0.0.0.255",
        "correct": true
      },
      {
        "html": "ip nat inside source list ACCTNG pool POOL-STAT",
        "text": "ip nat inside source list ACCTNG pool POOL-STAT",
        "correct": false
      }
    ],
    "explanationHtml": "In the process of configuring NAT or PAT, a standard <strong>Access Control List (ACL)</strong> is used specifically to <strong>identify</strong> (permit) the range of internal private addresses—known as inside local addresses—that are eligible for translation. While the other commands listed (starting with ip nat inside source) are used to <strong>bind</strong> that identification to a global address pool or interface and execute the translation, it is the access-list statement itself that defines which packets the router will translate."
  },
  {
    "id": 16423,
    "number": 124,
    "type": "single",
    "questionHtml": "Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting, what service or technology would support requirement?",
    "questionText": "Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting, what service or technology would support requirement?",
    "options": [
      {
        "html": "Cloud services",
        "text": "Cloud services",
        "correct": true
      },
      {
        "html": "Data center",
        "text": "Data center",
        "correct": false
      },
      {
        "html": "APIC-EM",
        "text": "APIC-EM",
        "correct": false
      },
      {
        "html": "Cisco ACI",
        "text": "Cisco ACI",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Cloud services</strong> directly support these requirements by eliminating or reducing the need for onsite IT equipment, which significantly lowers <strong>energy costs</strong> and <strong>physical plant requirements</strong> (allowing for a <strong>smaller facility</strong>). Furthermore, cloud computing enables employees to access organizational data and applications <strong>anywhere and at any time</strong>, which is essential for promoting <strong>telecommuting</strong>. The underlying virtualization technology also helps companies achieve a <strong>smaller carbon footprint</strong> by consolidating hardware and reducing power and cooling needs."
  },
  {
    "id": 16424,
    "number": 125,
    "type": "single",
    "questionHtml": "Refer to the exhibit. An administrator is trying to back up the current running configuration of the router to a USB drive, and enters the command <code>copy usbflash0:/R1-config running-config</code> on the router command line. After removing the USB drive and connecting it to a PC, the administrator discovers that the running configuration was not properly backed up to the R1-config file. What is the problem? <img src=\"./assets/i208111v6n1_Question-8-98869f03.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. An administrator is trying to back up the current running configuration of the router to a USB drive, and enters the command copy usbflash0:/R1-config running-config on the router command line. After removing the USB drive and connecting it to a PC, the administrator discovers that the running configuration was not properly backed up to the R1-config file. What is the problem?",
    "options": [
      {
        "html": "The file already exists on the USB drive and cannot be overwritten.",
        "text": "The file already exists on the USB drive and cannot be overwritten.",
        "correct": false
      },
      {
        "html": "The drive was not properly formatted with the FAT16 file system.",
        "text": "The drive was not properly formatted with the FAT16 file system.",
        "correct": false
      },
      {
        "html": "There is no space left on the USB drive.",
        "text": "There is no space left on the USB drive.",
        "correct": false
      },
      {
        "html": "The USB drive is not recognized by the router.",
        "text": "The USB drive is not recognized by the router.",
        "correct": false
      },
      {
        "html": "The command that the administrator used was incorrect.",
        "text": "The command that the administrator used was incorrect.",
        "correct": true
      }
    ],
    "explanationHtml": "The Cisco IOS copy command follows the syntax copy [source] [destination]. In this scenario, the administrator entered copy usbflash0:/R1-config running-config, which attempts to copy a file <strong>from</strong> the USB drive <strong>to</strong> the router’s RAM (a restore operation). To properly back up the current configuration <strong>to</strong> the USB drive, the command should have been copy running-config usbflash0:/R1-config. The show file systems output confirms the USB drive was recognized, had write permissions (rw), and plenty of free space, so the only issue was the command syntax."
  },
  {
    "id": 16425,
    "number": 126,
    "type": "multiple",
    "questionHtml": "Which three types of VPNs are examples of enterprise-managed site-to-site VPNs? (Choose three.)",
    "questionText": "Which three types of VPNs are examples of enterprise-managed site-to-site VPNs? (Choose three.)",
    "options": [
      {
        "html": "Layer 3 MPLS VPN",
        "text": "Layer 3 MPLS VPN",
        "correct": false
      },
      {
        "html": "IPsec VPN",
        "text": "IPsec VPN",
        "correct": true
      },
      {
        "html": "Cisco Dynamic Multipoint VPN",
        "text": "Cisco Dynamic Multipoint VPN",
        "correct": true
      },
      {
        "html": "GRE over IPsec VPN",
        "text": "GRE over IPsec VPN",
        "correct": true
      },
      {
        "html": "clientless SSL VPN",
        "text": "clientless SSL VPN",
        "correct": false
      },
      {
        "html": "client-based IPsec VPN",
        "text": "client-based IPsec VPN",
        "correct": false
      }
    ],
    "explanationHtml": "Enterprise-managed VPNs are created and managed by the organization using their own infrastructure to secure traffic across the internet. Within this category, <strong>IPsec VPNs</strong>, <strong>GRE over IPsec</strong>, and <strong>Cisco Dynamic Multipoint VPN (DMVPN)</strong> are specifically classified as <strong>site-to-site</strong> solutions used to connect remote branch offices to a main site. Conversely, Layer 3 MPLS is a service provider-managed solution, while clientless SSL and client-based IPsec are types of <strong>remote access</strong> VPNs intended for individual mobile users."
  },
  {
    "id": 16426,
    "number": 127,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation? <img src=\"./assets/i350782v1n1_C3M4-Diagram-1-6e4553c7.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "standard ACL inbound on R1 vty lines",
        "text": "standard ACL inbound on R1 vty lines",
        "correct": false
      },
      {
        "html": "extended ACL inbound on R1 G0/0",
        "text": "extended ACL inbound on R1 G0/0",
        "correct": false
      },
      {
        "html": "standard ACL inbound on R1 G0/1",
        "text": "standard ACL inbound on R1 G0/1",
        "correct": true
      },
      {
        "html": "extended ACL inbound on R3 S0/0/1",
        "text": "extended ACL inbound on R3 S0/0/1",
        "correct": false
      }
    ],
    "explanationHtml": "A <strong>standard ACL</strong> is the best choice here because the security policy requires filtering traffic based solely on the <strong>source IP address</strong> (the 192.168.11.0/24 network). Placing the ACL <strong>inbound on the R1 G0/1 interface</strong> is most efficient because it discards unauthorized packets immediately upon entering the router. This “close to the source” placement prevents unwanted traffic from consuming any routing resources or bandwidth on the rest of the network."
  },
  {
    "id": 16427,
    "number": 128,
    "type": "multiple",
    "questionHtml": "In an OSPF network which two statements describe the link-state database (LSDB)? (Choose two.)",
    "questionText": "In an OSPF network which two statements describe the link-state database (LSDB)? (Choose two.)",
    "options": [
      {
        "html": "It can be viewed by using the show ip ospf database command.",
        "text": "It can be viewed by using the show ip ospf database command.",
        "correct": true
      },
      {
        "html": "A neighbor table is created based on the LSDB.",
        "text": "A neighbor table is created based on the LSDB.",
        "correct": false
      },
      {
        "html": "It contains a list of only the best routes to a particular network.",
        "text": "It contains a list of only the best routes to a particular network.",
        "correct": false
      },
      {
        "html": "It contains a list of all neighbor routers to which a router has established bidirectional communication.",
        "text": "It contains a list of all neighbor routers to which a router has established bidirectional communication.",
        "correct": false
      },
      {
        "html": "All routers within an area have an identical link-state database.",
        "text": "All routers within an area have an identical link-state database.",
        "correct": true
      }
    ],
    "explanationHtml": "The <strong>Link-state Database (LSDB)</strong> functions as the <strong>topology table</strong> for an OSPF area, containing comprehensive information about all other routers and links within that specific area. To ensure a consistent view of the network and accurate route calculations using the SPF algorithm, <strong>all routers within an area must maintain an identical LSDB</strong>. This database is stored in RAM and can be specifically inspected using the show ip ospf database command."
  },
  {
    "id": 16428,
    "number": 129,
    "type": "single",
    "questionHtml": "In an OSPF network which OSPF structure is used to create the neighbor table on a router?",
    "questionText": "In an OSPF network which OSPF structure is used to create the neighbor table on a router?",
    "options": [
      {
        "html": "adjacency database",
        "text": "adjacency database",
        "correct": true
      },
      {
        "html": "link-state database",
        "text": "link-state database",
        "correct": false
      },
      {
        "html": "routing table",
        "text": "routing table",
        "correct": false
      },
      {
        "html": "forwarding database",
        "text": "forwarding database",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>adjacency database</strong> is one of the three primary data structures used by OSPF. Its specific function is to create and maintain the <strong>neighbor table</strong>, which contains a unique list of all neighboring routers with which the router has established bidirectional communication. To view this table, administrators use the show ip ospf neighbor command."
  },
  {
    "id": 20076,
    "number": 130,
    "type": "single",
    "questionHtml": "What protocol is used in a system that consists of <code>three elements--a manager</code>, agents, and an information database?",
    "questionText": "What protocol is used in a system that consists of three elements--a manager, agents, and an information database?",
    "options": [
      {
        "html": "MPLS",
        "text": "MPLS",
        "correct": false
      },
      {
        "html": "SYSLOG",
        "text": "SYSLOG",
        "correct": false
      },
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": true
      },
      {
        "html": "TFTP",
        "text": "TFTP",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Simple Network Management Protocol (SNMP)</strong> is an application layer protocol that enables network administrators to monitor and manage network performance. An SNMP system is architecturally defined by three key elements: the <strong>SNMP manager</strong> (which runs management software), <strong>SNMP agents</strong> (software modules residing on managed devices), and the <strong>Management Information Base (MIB)</strong>, which serves as the information database for storing device data and operational statistics."
  },
  {
    "id": 20077,
    "number": 131,
    "type": "single",
    "questionHtml": "What type of traffic is described as not resilient to loss?",
    "questionText": "What type of traffic is described as not resilient to loss?",
    "options": [
      {
        "html": "data",
        "text": "data",
        "correct": false
      },
      {
        "html": "video",
        "text": "video",
        "correct": true
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      }
    ],
    "explanationHtml": "Video traffic tends to be unpredictable, inconsistent, and bursty compared to voice traffic. Compared to voice, video is less resilient to loss and has a higher volume of data per packet."
  },
  {
    "id": 16431,
    "number": 132,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Router R1 is configured with static NAT. Addressing on the router and the web server are correctly configured, but there is no connectivity between the web server and users on the Internet. What is a possible reason for this lack of connectivity? <img src=\"./assets/i212256v1n3_212256-4a872ee5.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Router R1 is configured with static NAT. Addressing on the router and the web server are correctly configured, but there is no connectivity between the web server and users on the Internet. What is a possible reason for this lack of connectivity?",
    "options": [
      {
        "html": "Interface Fa0/0 should be configured with the command ip nat outside.",
        "text": "Interface Fa0/0 should be configured with the command ip nat outside.",
        "correct": false
      },
      {
        "html": "The inside global address is incorrect.",
        "text": "The inside global address is incorrect.",
        "correct": false
      },
      {
        "html": "The router NAT configuration has an incorrect inside local address.",
        "text": "The router NAT configuration has an incorrect inside local address.",
        "correct": true
      },
      {
        "html": "The NAT configuration on interface S0/0/1 is incorrect.",
        "text": "The NAT configuration on interface S0/0/1 is incorrect.",
        "correct": false
      }
    ],
    "explanationHtml": "To configure static NAT, the command syntax is ip nat inside source static [inside local address] [inside global address]. The <strong>inside local address</strong> should be the actual private IP address assigned to the internal device (the web server). In the exhibit description, the web server’s IP is <strong>192.168.11.11</strong>, but the command entered (192.168.11.254) mistakenly uses the IP address of the router’s FastEthernet 0/0 interface. Because the mapping does not point to the server’s real address, the NAT process will not function for the web server’s traffic."
  },
  {
    "id": 16432,
    "number": 133,
    "type": "single",
    "questionHtml": "Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?",
    "questionText": "Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?",
    "options": [
      {
        "html": "open",
        "text": "open",
        "correct": false
      },
      {
        "html": "partner",
        "text": "partner",
        "correct": false
      },
      {
        "html": "public",
        "text": "public",
        "correct": false
      },
      {
        "html": "private",
        "text": "private",
        "correct": true
      }
    ],
    "explanationHtml": "Private, or internal, APIs are used only within an organization and are for company access to data and services for internal use."
  },
  {
    "id": 16433,
    "number": 134,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Which data format is used to represent the data for network automation applications? <img src=\"./assets/i349060v2n1_347060-09415283.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
    "options": [
      {
        "html": "XML",
        "text": "XML",
        "correct": true
      },
      {
        "html": "HTML",
        "text": "HTML",
        "correct": false
      },
      {
        "html": "YAML",
        "text": "YAML",
        "correct": false
      },
      {
        "html": "JSON",
        "text": "JSON",
        "correct": false
      }
    ],
    "explanationHtml": "Common data formats that are used in many applications including network automation and programmability include these: JavaScript Object Notation (JSON) – In JSON, the data known as an object is one or more key/value pairs enclosed in braces { }. Keys must be strings within double quotation marks ” “. Keys and values are separated by a colon. eXtensible Markup Language (XML) – In XML, the data is enclosed within a related set of tags data. YAML Ain’t Markup Language (YAML) – In YAML, the data known as an object is one or more key value pairs. Key value pairs are separated by a colon without the use of quotation marks. YAML uses indentation to define its structure, without the use of brackets or commas."
  },
  {
    "id": 20078,
    "number": 135,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 101 permit udp 192.168.100.32 0.0.0.7 host 198.133.219.76 eq telnet .</pre> If a packet with a source address of 198.133.219.100, a destination address of 198.133.219.170, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 101 permit udp 192.168.100.32 0.0.0.7 host 198.133.219.76 eq telnet . If a packet with a source address of 198.133.219.100, a destination address of 198.133.219.170, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "denied",
        "text": "denied",
        "correct": true
      },
      {
        "html": "permitted",
        "text": "permitted",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Parameter Mismatch:</strong> The incoming packet fails to match the single Access Control Entry (ACE) on multiple fields. Specifically, its <strong>source address</strong> (198.133.219.100) and <strong>destination address</strong> (198.133.219.170) do not match the ACE’s required source (192.168.100.32 0.0.0.7) and host destination (198.133.219.76). <strong>Implicit Deny:</strong> According to the sources, when a packet does not match any defined ACE in a list, it is automatically discarded due to the <strong>implicit deny any</strong> statement that is present at the end of every ACL. Because this packet matches no permit criteria, it is <strong>denied</strong>."
  },
  {
    "id": 20079,
    "number": 136,
    "type": "single",
    "questionHtml": "How does virtualization help with disaster recovery within a data center?",
    "questionText": "How does virtualization help with disaster recovery within a data center?",
    "options": [
      {
        "html": "Hardware does not have to be identical.",
        "text": "Hardware does not have to be identical.",
        "correct": true
      },
      {
        "html": "Power is always provided.",
        "text": "Power is always provided.",
        "correct": false
      },
      {
        "html": "Less energy is consumed.",
        "text": "Less energy is consumed.",
        "correct": false
      },
      {
        "html": "Server provisioning is faster.",
        "text": "Server provisioning is faster.",
        "correct": false
      }
    ],
    "explanationHtml": "Disaster recovery is how a company goes about accessing applications, data, and the hardware that might be affected during a disaster. Virtualization provides hardware independence which means the disaster recovery site does not have to have the exact equipment as the equipment in production. Server provisioning is relevant when a server is built for the first time. Although data centers do have backup generators, the entire data center is designed for disaster recovery. One particular data center could never guarantee that the data center itself would never be without power."
  },
  {
    "id": 16436,
    "number": 137,
    "type": "single",
    "questionHtml": "What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
    "questionText": "What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
    "options": [
      {
        "html": "NTP",
        "text": "NTP",
        "correct": false
      },
      {
        "html": "LLDP",
        "text": "LLDP",
        "correct": true
      },
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": false
      },
      {
        "html": "MPLS",
        "text": "MPLS",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Link Layer Discovery Protocol (LLDP)</strong> is a <strong>vendor-neutral</strong> Layer 2 neighbor discovery protocol similar to CDP. It is designed to work across devices from different manufacturers, allowing them to <strong>advertise their identity and capabilities</strong> (such as device name and management address) to other physically connected network devices. This protocol is essential for mapping network topologies in multi-vendor environments."
  },
  {
    "id": 16437,
    "number": 138,
    "type": "single",
    "questionHtml": "Which type of VPN uses a hub-and-spoke configuration to establish a full mesh topology?",
    "questionText": "Which type of VPN uses a hub-and-spoke configuration to establish a full mesh topology?",
    "options": [
      {
        "html": "MPLS VPN",
        "text": "MPLS VPN",
        "correct": false
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": false
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": false
      },
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Dynamic Multipoint VPN (DMVPN)</strong> is a Cisco software solution designed to build multiple VPN tunnels in a dynamic and scalable manner. It specifically uses a <strong>hub-and-spoke configuration</strong> to establish what effectively becomes a <strong>full mesh topology</strong>; while spokes initially establish tunnels with a central hub, they can also obtain information from that hub to establish direct secure tunnels with each other as needed."
  },
  {
    "id": 16438,
    "number": 139,
    "type": "single",
    "questionHtml": "What is a characteristic of the REST API?",
    "questionText": "What is a characteristic of the REST API?",
    "options": [
      {
        "html": "evolved into what became SOAP",
        "text": "evolved into what became SOAP",
        "correct": false
      },
      {
        "html": "used for exchanging XML structured information over HTTP or SMTP",
        "text": "used for exchanging XML structured information over HTTP or SMTP",
        "correct": false
      },
      {
        "html": "considered slow, complex, and rigid",
        "text": "considered slow, complex, and rigid",
        "correct": false
      },
      {
        "html": "most widely used API for web services",
        "text": "most widely used API for web services",
        "correct": true
      }
    ],
    "explanationHtml": "REST accounts for more than 80% of all API types used for web services, making it the most widely used web service API."
  },
  {
    "id": 19167,
    "number": 140,
    "type": "single",
    "questionHtml": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR? <img src=\"./assets/2021-11-22_102145-a067b76a.jpg\" alt=\"Enterprise Networking, Security, and Automation (Version 7.00) - ENSA Final Exam\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
    "options": [
      {
        "html": "Router R3 will become the DR and router R1 will become the BDR.",
        "text": "Router R3 will become the DR and router R1 will become the BDR.",
        "correct": true
      },
      {
        "html": "Router R4 will become the DR and router R3 will become the BDR.",
        "text": "Router R4 will become the DR and router R3 will become the BDR.",
        "correct": false
      },
      {
        "html": "Router R1 will become the DR and router R2 will become the BDR.",
        "text": "Router R1 will become the DR and router R2 will become the BDR.",
        "correct": false
      },
      {
        "html": "Router R3 will become the DR and router R2 will become the BDR.",
        "text": "Router R3 will become the DR and router R2 will become the BDR.",
        "correct": false
      }
    ],
    "explanationHtml": "OSPF elections of a DR are based on the following in order of precedence: <ul><li>highest pritority from 1 -255 (0 = never a DR)</li><li>highest router ID</li><li>highest IP address of a loopback or active interface in the absence of a manually configured router ID. Loopback IP addresses take higher precedence than other interfaces.</li></ul> In this case routers R3 and R1 have the highest router priority. Between the two, R3 has the higher router ID. Therefore, R3 will become the DR and R1 will become the BDR."
  },
  {
    "id": 16440,
    "number": 141,
    "type": "single",
    "questionHtml": "A student, doing a summer semester of study overseas, has taken hundreds of pictures on a smartphone and wants to back them up in case of loss. What service or technology would support this requirement?",
    "questionText": "A student, doing a summer semester of study overseas, has taken hundreds of pictures on a smartphone and wants to back them up in case of loss. What service or technology would support this requirement?",
    "options": [
      {
        "html": "Cisco ACI",
        "text": "Cisco ACI",
        "correct": false
      },
      {
        "html": "cloud services",
        "text": "cloud services",
        "correct": true
      },
      {
        "html": "software defined networking",
        "text": "software defined networking",
        "correct": false
      },
      {
        "html": "dedicated servers",
        "text": "dedicated servers",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Cloud services</strong> provide off-premise, on-demand access to a shared pool of storage resources. This technology enables the student to access and back up their data <strong>anywhere and at any time</strong>, which is essential for someone studying overseas. Much like a physical storage unit for personal belongings, cloud computing serves as a digital storage solution for the “overflow” of data from a device like a smartphone."
  },
  {
    "id": 20080,
    "number": 142,
    "type": "single",
    "questionHtml": "Consider the following access list that allows IP phone configuration file transfers from a particular host to a TFTP server: <pre>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000 R1(config)# access-list 105 deny ip any any R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out</pre> Which method would allow the network administrator to modify the ACL and include FTP transfers from any source IP address?",
    "questionText": "Consider the following access list that allows IP phone configuration file transfers from a particular host to a TFTP server: R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000 R1(config)# access-list 105 deny ip any any R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out Which method would allow the network administrator to modify the ACL and include FTP transfers from any source IP address?",
    "options": [
      {
        "html": "R1(config)# interface gi0/0 R1(config-if)# no ip access-group 105 out R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21 R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out",
        "text": "R1(config)# interface gi0/0 R1(config-if)# no ip access-group 105 out R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21 R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out",
        "correct": false
      },
      {
        "html": "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
        "text": "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
        "correct": false
      },
      {
        "html": "R1(config)# interface gi0/0 R1(config-if)# no ip access-group 105 out R1(config)# no access-list 105 R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21 R1(config)# access-list 105 deny ip any any R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out",
        "text": "R1(config)# interface gi0/0 R1(config-if)# no ip access-group 105 out R1(config)# no access-list 105 R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21 R1(config)# access-list 105 deny ip any any R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out",
        "correct": true
      },
      {
        "html": "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21 R1(config)# access-list 105 deny ip any any",
        "text": "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20 R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21 R1(config)# access-list 105 deny ip any any",
        "correct": false
      }
    ],
    "explanationHtml": "When modifying a numbered ACL, new ACEs (Access Control Entries) are <strong>appended to the end</strong> of the list by default. Because the existing ACL already contains an explicit deny ip any any statement, simply adding new permit commands would place them after the deny statement, making them unreachable and ineffective. The most reliable method is to <strong>remove the ACL from the interface</strong>, delete it entirely with the no access-list command, and then recreate the entire sequence with the new entries placed before the final deny statement."
  },
  {
    "id": 20081,
    "number": 143,
    "type": "multiple",
    "questionHtml": "Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)",
    "questionText": "Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)",
    "options": [
      {
        "html": "Filter unwanted traffic before it travels onto a low-bandwidth link.",
        "text": "Filter unwanted traffic before it travels onto a low-bandwidth link.",
        "correct": true
      },
      {
        "html": "Place standard ACLs close to the destination IP address of the traffic.",
        "text": "Place standard ACLs close to the destination IP address of the traffic.",
        "correct": true
      },
      {
        "html": "Place standard ACLs close to the source IP address of the traffic.",
        "text": "Place standard ACLs close to the source IP address of the traffic.",
        "correct": false
      },
      {
        "html": "Place extended ACLs close to the destination IP address of the traffic.",
        "text": "Place extended ACLs close to the destination IP address of the traffic.",
        "correct": false
      },
      {
        "html": "Place extended ACLs close to the source IP address of the traffic.",
        "text": "Place extended ACLs close to the source IP address of the traffic.",
        "correct": true
      },
      {
        "html": "For every inbound ACL placed on an interface, there should be a matching outbound ACL.",
        "text": "For every inbound ACL placed on an interface, there should be a matching outbound ACL.",
        "correct": false
      }
    ],
    "explanationHtml": "Extended ACLs should be placed as close as possible to the source IP address, so that traffic that needs to be filtered does not cross the network and use network resources. Because standard ACLs do not specify a destination address, they should be placed as close to the destination as possible. Placing a standard ACL close to the source may have the effect of filtering all traffic, and limiting services to other hosts. Filtering unwanted traffic before it enters low-bandwidth links preserves bandwidth and supports network functionality. Decisions on placing ACLs inbound or outbound are dependent on the requirements to be met."
  },
  {
    "id": 20082,
    "number": 144,
    "type": "single",
    "questionHtml": "Match the term to the web link http://www.buycarsfromus.com/2020models/ford/suv.html#Escape component. (Not all options are used.)",
    "questionText": "Match the term to the web link http://www.buycarsfromus.com/2020models/ford/suv.html#Escape component. (Not all options are used.)",
    "options": [
      {
        "html": "<img src=\"./assets/2020-07-11_172522-e13f7009.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 14.4.4</p><table><tbody><tr><td>protocol</td><td>http</td></tr><tr><td>Uniform Resource Name (URN)</td><td>www.buycarsfromus.com/2020models/ford/suv.html</td></tr><tr><td>Uniform Resource Locator (URL)</td><td>http://www.buycarsfromus.com/2020models/ford/suv.html</td></tr><tr><td>Uniform Resource Identifier (URI)</td><td>http://www.buycarsfromus.com/2020models/ford/suv.html#Escape</td></tr><tr><td>fragment</td><td>#Escape</td></tr></tbody></table><p></p>"
  },
  {
    "id": 16444,
    "number": 145,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to display all static translations that have been configured?",
    "questionText": "What command would be used as part of configuring NAT or PAT to display all static translations that have been configured?",
    "options": [
      {
        "html": "show ip nat translations",
        "text": "show ip nat translations",
        "correct": true
      },
      {
        "html": "show ip pat translations",
        "text": "show ip pat translations",
        "correct": false
      },
      {
        "html": "show ip cache",
        "text": "show ip cache",
        "correct": false
      },
      {
        "html": "show running-config",
        "text": "show running-config",
        "correct": false
      }
    ],
    "explanationHtml": "The show ip nat translations command is used to display all active entries within the NAT translation table. According to the sources, this output specifically includes <strong>all static translations</strong> that have been configured, alongside any dynamic translations or PAT entries currently generated by network traffic. Because static mappings are permanent, they remain visible in this table regardless of whether there is active communication."
  },
  {
    "id": 16445,
    "number": 146,
    "type": "single",
    "questionHtml": "A network administrator modified an OSPF-enabled router to have a hello timer setting of 20 seconds. What is the new dead interval time setting by default?",
    "questionText": "A network administrator modified an OSPF-enabled router to have a hello timer setting of 20 seconds. What is the new dead interval time setting by default?",
    "options": [
      {
        "html": "40 seconds",
        "text": "40 seconds",
        "correct": false
      },
      {
        "html": "60 seconds",
        "text": "60 seconds",
        "correct": false
      },
      {
        "html": "80 seconds",
        "text": "80 seconds",
        "correct": true
      },
      {
        "html": "100 seconds",
        "text": "100 seconds",
        "correct": false
      }
    ],
    "explanationHtml": "By default, Cisco IOS calculates the OSPF <strong>Dead interval</strong> as <strong>four times the Hello interval</strong>. When a network administrator modifies the Hello timer to <strong>20 seconds</strong>, the router automatically adjusts the default Dead interval to <strong>80 seconds</strong> (20 seconds * 4)."
  },
  {
    "id": 16446,
    "number": 147,
    "type": "single",
    "questionHtml": "Which type of VPN is the preferred choice for support and ease of deployment for remote access?",
    "questionText": "Which type of VPN is the preferred choice for support and ease of deployment for remote access?",
    "options": [
      {
        "html": "SSL VPN",
        "text": "SSL VPN",
        "correct": true
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": false
      },
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": false
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": false
      }
    ],
    "explanationHtml": "An <strong>SSL VPN</strong> is the preferred choice when <strong>support and ease of deployment</strong> are the primary considerations for remote access. While IPsec provides stronger security, SSL VPNs offer <strong>low connection complexity</strong> because they typically only require a <strong>web browser</strong> to establish a connection, making them easier to deploy across a wide range of devices without requiring specialized client software."
  },
  {
    "id": 16447,
    "number": 148,
    "type": "single",
    "questionHtml": "What type of traffic is described as predictable and smooth?",
    "questionText": "What type of traffic is described as predictable and smooth?",
    "options": [
      {
        "html": "video",
        "text": "video",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": false
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Voice traffic</strong> is specifically described as being <strong>predictable and smooth</strong>. It has known packet arrival times and a consistent bandwidth requirement, with packets typically arriving every 20 ms at a predictable size of 200 bytes. In contrast, video traffic is described as unpredictable and bursty, while general data traffic often has unpredictable bandwidth needs."
  },
  {
    "id": 16448,
    "number": 149,
    "type": "single",
    "questionHtml": "Which queuing mechanism has no provision for prioritizing or buffering but simply forwards packets in the order they arrive?",
    "questionText": "Which queuing mechanism has no provision for prioritizing or buffering but simply forwards packets in the order they arrive?",
    "options": [
      {
        "html": "FIFO",
        "text": "FIFO",
        "correct": true
      },
      {
        "html": "LLQ",
        "text": "LLQ",
        "correct": false
      },
      {
        "html": "CBWFQ",
        "text": "CBWFQ",
        "correct": false
      },
      {
        "html": "WFQ",
        "text": "WFQ",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>FIFO (First-In, First-Out)</strong>, also known as first-come, first-served, is the simplest queuing mechanism that <strong>buffers and forwards packets in the exact order they arrive</strong>. It has <strong>no concept of priority or traffic classes</strong>, meaning it makes no decisions to reorder packets based on importance; instead, it treats all packets equally within a single queue."
  },
  {
    "id": 16449,
    "number": 150,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers. The routers are unable to form a neighbor adjacency. What should be done to fix the problem on router R2? <img src=\"./assets/p56-1874f8c3.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers. The routers are unable to form a neighbor adjacency. What should be done to fix the problem on router R2?",
    "options": [
      {
        "html": "Implement the command no passive-interface Serial0/1.",
        "text": "Implement the command no passive-interface Serial0/1.",
        "correct": true
      },
      {
        "html": "Implement the command network 192.168.2.6 0.0.0.0 area 0 on router R2.",
        "text": "Implement the command network 192.168.2.6 0.0.0.0 area 0 on router R2.",
        "correct": false
      },
      {
        "html": "Change the router-id of router R2 to 2.2.2.2.",
        "text": "Change the router-id of router R2 to 2.2.2.2.",
        "correct": false
      },
      {
        "html": "Implement the command network 192.168.3.1 0.0.0.0 area 0 on router R2.",
        "text": "Implement the command network 192.168.3.1 0.0.0.0 area 0 on router R2.",
        "correct": false
      }
    ],
    "explanationHtml": "OSPF-enabled routers must exchange <strong>Hello packets</strong> to discover neighbors and establish adjacencies. However, the passive-interface command suppresses these OSPF messages, preventing the router from sending and receiving routing updates on that specific interface. Because the show ip protocols output for <strong>R2</strong> indicates that <strong>Serial0/1</strong> (the interface connecting it to R1) is configured as a passive interface, R2 is not sending the necessary Hello packets to form an adjacency with R1. Removing this configuration on Serial0/1 will allow OSPF communication to resume on that link."
  },
  {
    "id": 16450,
    "number": 151,
    "type": "single",
    "questionHtml": "A network administrator is troubleshooting an OSPF problem that involves neighbor adjacency. What should the administrator do?",
    "questionText": "A network administrator is troubleshooting an OSPF problem that involves neighbor adjacency. What should the administrator do?",
    "options": [
      {
        "html": "Make sure that the router priority is unique on each router.",
        "text": "Make sure that the router priority is unique on each router.",
        "correct": false
      },
      {
        "html": "Make sure that the DR/BDR election is complete.",
        "text": "Make sure that the DR/BDR election is complete.",
        "correct": false
      },
      {
        "html": "Make sure that the router ID is included in the hello packet.",
        "text": "Make sure that the router ID is included in the hello packet.",
        "correct": false
      },
      {
        "html": "Make sure that the hello and dead interval timers are the same on all routers.",
        "text": "Make sure that the hello and dead interval timers are the same on all routers.",
        "correct": true
      }
    ],
    "explanationHtml": "For OSPF to establish a neighbor adjacency, certain parameters must match between neighboring routers. The <strong>Hello and Dead intervals</strong> are among these essential requirements; if these timers are not identical on the connected interfaces, the routers will fail to form an adjacency. Other requirements for adjacency include matching subnet masks, matching OSPF area IDs, and matching OSPF network types. While router IDs must be unique, the timers must be consistent across the link."
  },
  {
    "id": 16451,
    "number": 152,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation? <img src=\"./assets/i350685v1n1_C3M4-Diagram-ecf8d40a.jpg\" alt=\"CCNA 3 v7 Modules 3 - 5: Network Security Exam Answers 49\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "standard ACL inbound on R2 WAN interface connecting to the internet",
        "text": "standard ACL inbound on R2 WAN interface connecting to the internet",
        "correct": false
      },
      {
        "html": "standard ACL outbound on R2 WAN interface towards the internet",
        "text": "standard ACL outbound on R2 WAN interface towards the internet",
        "correct": true
      },
      {
        "html": "standard ACL inbound on R1 G0/0",
        "text": "standard ACL inbound on R1 G0/0",
        "correct": false
      },
      {
        "html": "standard ACL outbound on R1 G0/0",
        "text": "standard ACL outbound on R1 G0/0",
        "correct": false
      }
    ],
    "explanationHtml": "– Standard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible. – Extended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure."
  },
  {
    "id": 16452,
    "number": 153,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 100 permit tcp 192.168.10.0 0.0.0.255 172.17.200.0 0.0.0.255 eq www .</pre> If a packet with a source address of 192.168.10.244, a destination address of 172.17.200.56, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 100 permit tcp 192.168.10.0 0.0.0.255 172.17.200.0 0.0.0.255 eq www . If a packet with a source address of 192.168.10.244, a destination address of 172.17.200.56, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "denied",
        "text": "denied",
        "correct": false
      },
      {
        "html": "permitted",
        "text": "permitted",
        "correct": true
      }
    ],
    "explanationHtml": "The packet is <strong>permitted</strong> because it successfully matches every field specified in the Access Control Entry (ACE): <ul><li><strong>Source Address:</strong> The packet’s source (192.168.10.244) matches the network 192.168.10.0 with the wildcard mask 0.0.0.255.</li><li><strong>Destination Address:</strong> The destination (172.17.200.56) matches the target network 172.17.200.0 with the wildcard mask 0.0.0.255.</li><li><strong>Protocol and Port:</strong> The packet uses protocol <strong>80</strong>, which is the numerical equivalent of the <strong>www</strong> keyword used in the configuration for TCP traffic.</li></ul>"
  },
  {
    "id": 16453,
    "number": 154,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as Nmap, SuperScan, and Angry IP Scanner?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as Nmap, SuperScan, and Angry IP Scanner?",
    "options": [
      {
        "html": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "text": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "correct": false
      },
      {
        "html": "to detect any evidence of a hack or malware in a computer or network",
        "text": "to detect any evidence of a hack or malware in a computer or network",
        "correct": false
      },
      {
        "html": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "text": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "correct": false
      },
      {
        "html": "to probe network devices, servers, and hosts for open TCP or UDP ports",
        "text": "to probe network devices, servers, and hosts for open TCP or UDP ports",
        "correct": true
      }
    ],
    "explanationHtml": "Applications such as <strong>Nmap</strong>, <strong>SuperScan</strong>, and <strong>Angry IP Scanner</strong> are classified as <strong>network scanning tools</strong>. During a penetration test, these tools are used to perform <strong>reconnaissance</strong> by probing network devices, servers, and hosts to identify <strong>active IP addresses</strong> and discover which <strong>TCP or UDP ports</strong> are open. This information helps security professionals determine which services are running and locate potential entry points into the network."
  },
  {
    "id": 16454,
    "number": 155,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to display any dynamic PAT translations that have been created by traffic?",
    "questionText": "What command would be used as part of configuring NAT or PAT to display any dynamic PAT translations that have been created by traffic?",
    "options": [
      {
        "html": "show ip pat translations",
        "text": "show ip pat translations",
        "correct": false
      },
      {
        "html": "show ip cache",
        "text": "show ip cache",
        "correct": false
      },
      {
        "html": "show running-config",
        "text": "show running-config",
        "correct": false
      },
      {
        "html": "show ip nat translations",
        "text": "show ip nat translations",
        "correct": true
      }
    ],
    "explanationHtml": "The show ip nat translations command is used to display all active entries within the NAT translation table. According to the sources, this command output includes <strong>all static translations</strong> that have been configured as well as any <strong>dynamic NAT or PAT translations</strong> that have been automatically created by network traffic. For PAT specifically, the table will show how unique source port numbers are used to differentiate between multiple internal hosts sharing the same public IP address."
  },
  {
    "id": 16455,
    "number": 156,
    "type": "single",
    "questionHtml": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.16.91.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
    "questionText": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.16.91.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
    "options": [
      {
        "html": "0.0.31.255",
        "text": "0.0.31.255",
        "correct": false
      },
      {
        "html": "0.0.0.63",
        "text": "0.0.0.63",
        "correct": true
      },
      {
        "html": "0.0.15.255",
        "text": "0.0.15.255",
        "correct": false
      },
      {
        "html": "0.0.7.255",
        "text": "0.0.7.255",
        "correct": false
      }
    ],
    "explanationHtml": "In OSPF, a <strong>wildcard mask</strong> is used to determine which bits of an IPv4 address must be matched to enable the protocol on an interface. The most efficient method to calculate this is to <strong>subtract the subnet mask from 255.255.255.255</strong>. For the network 172.16.91.0 with a subnet mask of <strong>255.255.255.192</strong>, the calculation is: <ul><li>255.255.255.255 – 255.255.255.192 = <strong>0.0.0.63</strong>.</li></ul> This wildcard mask instructs the router to match the first 26 bits of the network address and ignore the last 6 bits."
  },
  {
    "id": 16456,
    "number": 157,
    "type": "single",
    "questionHtml": "What type of traffic is described as requiring latency to be no more than 400 milliseconds (ms)?",
    "questionText": "What type of traffic is described as requiring latency to be no more than 400 milliseconds (ms)?",
    "options": [
      {
        "html": "video",
        "text": "video",
        "correct": true
      },
      {
        "html": "data",
        "text": "data",
        "correct": false
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Video traffic</strong> is described as requiring a one-way latency (delay) of no more than <strong>400 milliseconds (ms)</strong> to maintain an acceptable user experience. In contrast, <strong>voice traffic</strong> is much more sensitive to delay and requires latency to be no more than <strong>150 ms</strong>. General data traffic is typically classified as being relatively insensitive to both drops and delays."
  },
  {
    "id": 20083,
    "number": 158,
    "type": "multiple",
    "questionHtml": "Refer to the exhibit. Which two configurations would be used to create and apply a standard access list on R1, so that only the 10.0.70.0/25 network devices are allowed to access the internal database server? (Choose two.) <img src=\"./assets/ccna-5.0-s2-43-eb1ff746.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Which two configurations would be used to create and apply a standard access list on R1, so that only the 10.0.70.0/25 network devices are allowed to access the internal database server? (Choose two.)",
    "options": [
      {
        "html": "R1(config)# interface GigabitEthernet0/0 R1(config-if)# ip access-group 5 out",
        "text": "R1(config)# interface GigabitEthernet0/0 R1(config-if)# ip access-group 5 out",
        "correct": true
      },
      {
        "html": "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
        "text": "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
        "correct": false
      },
      {
        "html": "R1(config)# interface Serial0/0/0 R1(config-if)# ip access-group 5 in",
        "text": "R1(config)# interface Serial0/0/0 R1(config-if)# ip access-group 5 in",
        "correct": false
      },
      {
        "html": "R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127",
        "text": "R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127",
        "correct": true
      },
      {
        "html": "R1(config)# access-list 5 permit any",
        "text": "R1(config)# access-list 5 permit any",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Creating the ACL (D):</strong> Standard ACLs filter traffic based solely on the <strong>source IPv4 address</strong>. To permit only the 10.0.70.0/25 network, the correct wildcard mask is 0.0.0.127 (calculated by subtracting the subnet mask 255.255.255.128 from 255.255.255.255). <strong>Applying the ACL (A):</strong> According to best practices, <strong>standard ACLs should be placed as close to the destination as possible</strong>. Since the internal database server is the destination and is connected to R1’s <strong>GigabitEthernet0/0</strong> interface, the ACL should be applied <strong>outbound</strong> (out) on that interface to filter traffic just before it exits the router toward the server. Applying it elsewhere (like inbound on the serial interface) could unnecessarily block the 10.0.70.0/25 network from reaching other segments connected to R1, such as the 10.0.55.0/24 workstation."
  },
  {
    "id": 16458,
    "number": 159,
    "type": "multiple",
    "questionHtml": "A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
    "questionText": "A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
    "options": [
      {
        "html": "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
        "text": "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
        "correct": false
      },
      {
        "html": "Router(config)# access-list 95 permit any",
        "text": "Router(config)# access-list 95 permit any",
        "correct": true
      },
      {
        "html": "Router(config)# access-list 95 host 172.16.0.0",
        "text": "Router(config)# access-list 95 host 172.16.0.0",
        "correct": false
      },
      {
        "html": "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
        "text": "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
        "correct": true
      },
      {
        "html": "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
        "text": "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
        "correct": false
      },
      {
        "html": "Router(config)# access-list 95 deny any",
        "text": "Router(config)# access-list 95 deny any",
        "correct": false
      }
    ],
    "explanationHtml": "To deny traffic from the 172.16.0.0/16 network, the <strong>access-list 95 deny 172.16.0.0 0.0.255.255</strong> command is used. To permit all other traffic, the <strong>access-list 95 permit any</strong> statement is added."
  },
  {
    "id": 20084,
    "number": 160,
    "type": "single",
    "questionHtml": "Refer to the exhibit. The company has decided that no traffic initiating from any other existing or future network can be transmitted to the Research and Development network. Furthermore, no traffic that originates from the Research and Development network can be transmitted to any other existing or future networks in the company. The network administrator has decided that extended ACLs are better suited for these requirements. Based on the information given, what will the network administrator do? <img src=\"./assets/temp-1593110686.3832-bf4d9562.png\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. The company has decided that no traffic initiating from any other existing or future network can be transmitted to the Research and Development network. Furthermore, no traffic that originates from the Research and Development network can be transmitted to any other existing or future networks in the company. The network administrator has decided that extended ACLs are better suited for these requirements. Based on the information given, what will the network administrator do?",
    "options": [
      {
        "html": "One ACL will be placed on the R1 Gi0/0 interface and one ACL will be placed on the R2 Gi0/0 interface.",
        "text": "One ACL will be placed on the R1 Gi0/0 interface and one ACL will be placed on the R2 Gi0/0 interface.",
        "correct": false
      },
      {
        "html": "Only a numbered ACL will work for this situation.",
        "text": "Only a numbered ACL will work for this situation.",
        "correct": false
      },
      {
        "html": "One ACL will be placed on the R2 Gi0/0 interface and one ACL will be placed on the R2 S0/0/0 interface.",
        "text": "One ACL will be placed on the R2 Gi0/0 interface and one ACL will be placed on the R2 S0/0/0 interface.",
        "correct": false
      },
      {
        "html": "Two ACLs (one in each direction) will be placed on the R2 Gi0/0 interface.",
        "text": "Two ACLs (one in each direction) will be placed on the R2 Gi0/0 interface.",
        "correct": true
      }
    ],
    "explanationHtml": "Extended ACLs should be placed as close to the <strong>source</strong> of the traffic as possible to filter undesirable traffic before it crosses the network infrastructure. To prevent traffic originating from the Research and Development network from reaching others, an ACL is placed <strong>inbound</strong> on R2’s Gi0/0 interface to filter the traffic as it enters the router. To block traffic from all other existing or future networks from reaching Research and Development, a second ACL is applied <strong>outbound</strong> on the same Gi0/0 interface, ensuring any traffic destined for that network is dropped before exiting the router toward the destination. A single router interface can support one inbound and one outbound ACL per protocol."
  },
  {
    "id": 16460,
    "number": 161,
    "type": "single",
    "questionHtml": "What protocol uses smaller stratum numbers to indicate that the server is closer to the authorized time source than larger stratum numbers?",
    "questionText": "What protocol uses smaller stratum numbers to indicate that the server is closer to the authorized time source than larger stratum numbers?",
    "options": [
      {
        "html": "TFTP",
        "text": "TFTP",
        "correct": false
      },
      {
        "html": "SYSLOG",
        "text": "SYSLOG",
        "correct": false
      },
      {
        "html": "NTP",
        "text": "NTP",
        "correct": true
      },
      {
        "html": "MPLS",
        "text": "MPLS",
        "correct": false
      }
    ],
    "explanationHtml": "The <strong>Network Time Protocol (NTP)</strong> utilizes a hierarchical system of time sources where each level is known as a <strong>stratum</strong>. <strong>Smaller stratum numbers</strong> indicate that a server is <strong>closer to the authoritative time source</strong> (Stratum 0 high-precision devices) compared to larger stratum numbers. For example, Stratum 1 devices are directly connected to the primary time source, while Stratum 2 devices synchronize their time using packets from Stratum 1 servers."
  },
  {
    "id": 16461,
    "number": 162,
    "type": "single",
    "questionHtml": "Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID? <img src=\"./assets/2020-06-28_210428-5206bcce.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?",
    "options": [
      {
        "html": "10.0.0.1",
        "text": "10.0.0.1",
        "correct": false
      },
      {
        "html": "10.1.0.1",
        "text": "10.1.0.1",
        "correct": false
      },
      {
        "html": "192.168.1.100",
        "text": "192.168.1.100",
        "correct": true
      },
      {
        "html": "209.165.201.1",
        "text": "209.165.201.1",
        "correct": false
      }
    ],
    "explanationHtml": "In OSPFv2, a Cisco router uses a three-tier method to derive its router ID. The first choice is the manually configured router ID with the router-id command. If the router ID is not manually configured, the router will choose the highest IPv4 address of the configured loopback interfaces. Finally if no loopback interfaces are configured, the router chooses the highest active IPv4 address of its physical interfaces."
  },
  {
    "id": 20085,
    "number": 163,
    "type": "single",
    "questionHtml": "Match the HTTP method with the RESTful operation.",
    "questionText": "Match the HTTP method with the RESTful operation.",
    "options": [
      {
        "html": "<img src=\"./assets/Match-the-HTTP-method-with-the-RESTful-operation.-07dfee8e.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 14.4.3<br></p>"
  },
  {
    "id": 20086,
    "number": 164,
    "type": "multiple",
    "questionHtml": "Refer to the exhibit. A web designer calls to report that the web server web-s1.cisco.com is not reachable through a web browser. The technician uses command line utilities to verify the problem and to begin the troubleshooting process. Which two things can be determined about the problem? (Choose two.) <img src=\"./assets/i286191v1n1_15178-043a60f6.jpg\" alt=\"CCNA 3 v7.0 Final Exam Answers Full - Enterprise Networking, Security, and Automation 38\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A web designer calls to report that the web server web-s1.cisco.com is not reachable through a web browser. The technician uses command line utilities to verify the problem and to begin the troubleshooting process. Which two things can be determined about the problem? (Choose two.)",
    "options": [
      {
        "html": "The web server at 192.168.0.10 is reachable from the source host.",
        "text": "The web server at 192.168.0.10 is reachable from the source host.",
        "correct": true
      },
      {
        "html": "The default gateway between the source host and the server at 192.168.0.10 is down.",
        "text": "The default gateway between the source host and the server at 192.168.0.10 is down.",
        "correct": false
      },
      {
        "html": "There is a problem with the web server software on web-s1.cisco.com.",
        "text": "There is a problem with the web server software on web-s1.cisco.com.",
        "correct": false
      },
      {
        "html": "A router is down between the source host and the server web-s1.cisco.com.",
        "text": "A router is down between the source host and the server web-s1.cisco.com.",
        "correct": false
      },
      {
        "html": "DNS cannot resolve the IP address for the server web-s1.cisco.com.",
        "text": "DNS cannot resolve the IP address for the server web-s1.cisco.com.",
        "correct": true
      }
    ],
    "explanationHtml": "The successful result of the ping to the IP address indicates that the network is operational and the web server is online. However, the fact that the ping to the domain name of the server fails indicates there is a DNS issue, namely that the host cannot resolve the domain name to its associated IP address."
  },
  {
    "id": 17263,
    "number": 165,
    "type": "single",
    "questionHtml": "What type of traffic is described as tending to be unpredictable, inconsistent, and bursty?",
    "questionText": "What type of traffic is described as tending to be unpredictable, inconsistent, and bursty?",
    "options": [
      {
        "html": "video",
        "text": "video",
        "correct": true
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Video traffic</strong> is specifically described as tending to be <strong>unpredictable, inconsistent, and bursty</strong>. This is because the number and size of video packets vary significantly every 33 ms based on the complexity of the content; for example, rapidly changing action sequences require larger packets and higher volume compared to more static scenes. In contrast, voice traffic is defined as predictable and smooth."
  },
  {
    "id": 20087,
    "number": 166,
    "type": "single",
    "questionHtml": "Match the functions to the corresponding layers. (Not all options are used.)",
    "questionText": "Match the functions to the corresponding layers. (Not all options are used.)",
    "options": [
      {
        "html": "<img src=\"./assets/2020-07-11_174231-ffae71c2.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 11.1.5</p><table><thead><tr><th>access layer</th><th>distribution layer</th><th>core layer</th></tr></thead><tbody><tr><td>provides network access to the user</td><td>implements network access policy</td><td>provides high-speed backbone connectivity</td></tr><tr><td>represents the network edge</td><td>establishes Layer 3 routing boundaries</td><td>functions as an aggregator for all the campus blocks</td></tr></tbody></table><p></p>"
  },
  {
    "id": 17265,
    "number": 167,
    "type": "single",
    "questionHtml": "What type of traffic is described as consisting of traffic that requires a higher priority if interactive?",
    "questionText": "What type of traffic is described as consisting of traffic that requires a higher priority if interactive?",
    "options": [
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": true
      },
      {
        "html": "video",
        "text": "video",
        "correct": false
      }
    ],
    "explanationHtml": "While voice and video traffic are inherently sensitive to delay and always require high priority, <strong>data traffic</strong> priority is determined by specific factors. According to the sources, a network administrator must evaluate if data comes from an <strong>interactive application</strong>; if it is interactive and mission-critical, it should be <strong>prioritized</strong> to achieve a response time of 1 to 2 seconds. Non-interactive data, by contrast, is less sensitive to delay and can use leftover bandwidth."
  },
  {
    "id": 17266,
    "number": 168,
    "type": "single",
    "questionHtml": "Which type of VPN provides a flexible option to connect a central site with branch sites?",
    "questionText": "Which type of VPN provides a flexible option to connect a central site with branch sites?",
    "options": [
      {
        "html": "IPsec VPN",
        "text": "IPsec VPN",
        "correct": false
      },
      {
        "html": "client-based IPsec VPN",
        "text": "client-based IPsec VPN",
        "correct": false
      },
      {
        "html": "Layer 3 MPLS VPN",
        "text": "Layer 3 MPLS VPN",
        "correct": false
      },
      {
        "html": "clientless SSL VPN",
        "text": "clientless SSL VPN",
        "correct": false
      },
      {
        "html": "Cisco Dynamic Multipoint VPN",
        "text": "Cisco Dynamic Multipoint VPN",
        "correct": true
      },
      {
        "html": "GRE over IPsec VPN",
        "text": "GRE over IPsec VPN",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Dynamic Multipoint VPN (DMVPN)</strong> is a Cisco software solution that simplifies tunnel configuration and provides a <strong>flexible option to connect a central site with branch sites</strong>. It uses a hub-and-spoke configuration to establish what effectively becomes a <strong>full mesh topology</strong>, allowing branch (spoke) sites to communicate through a central (hub) site and dynamically establish direct tunnels with each other."
  },
  {
    "id": 17267,
    "number": 169,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use fuzzers?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use fuzzers?",
    "options": [
      {
        "html": "to discover security vulnerabilities of a computer",
        "text": "to discover security vulnerabilities of a computer",
        "correct": true
      },
      {
        "html": "to detect any evidence of a hack or malware in a computer or network",
        "text": "to detect any evidence of a hack or malware in a computer or network",
        "correct": false
      },
      {
        "html": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "text": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "correct": false
      },
      {
        "html": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "text": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Fuzzers</strong> are specialized penetration testing tools used to <strong>discover security vulnerabilities</strong> within a computer or application. They operate by providing large amounts of random or unexpected data as input to a system to identify potential weaknesses, crashes, or unintended behaviors that could be exploited by a threat actor. Examples of such tools mentioned in the sources include Skipfish, Wapiti, and W3af."
  },
  {
    "id": 17268,
    "number": 170,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface, but not the G0/0 interface. When following the best practices, in what location should the standard ACL be applied? <img src=\"./assets/i282155v1n2_282152-0118803b.png\" alt=\"CCNA 3 v7.0 Final Exam Answers Full - Enterprise Networking, Security, and Automation 40\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface, but not the G0/0 interface. When following the best practices, in what location should the standard ACL be applied?",
    "options": [
      {
        "html": "R1 S0/0/0 outbound",
        "text": "R1 S0/0/0 outbound",
        "correct": false
      },
      {
        "html": "R2 G0/0 outbound",
        "text": "R2 G0/0 outbound",
        "correct": true
      },
      {
        "html": "R2 S0/0/1 outbound",
        "text": "R2 S0/0/1 outbound",
        "correct": false
      },
      {
        "html": "R1 S0/0/0 inbound",
        "text": "R1 S0/0/0 inbound",
        "correct": false
      },
      {
        "html": "R2 G0/1 inbound",
        "text": "R2 G0/1 inbound",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Standard ACLs</strong> should be placed <strong>as close to the destination as possible</strong>. This is because standard ACLs only filter based on the source IPv4 address; applying them too close to the source would block the traffic from reaching all other possible destinations. By applying the ACL <strong>outbound on R2’s G0/0 interface</strong>, the administrator specifically prevents traffic from R1’s LANs from entering that particular network while ensuring the packets can still successfully reach the network connected to R2’s G0/1 interface."
  },
  {
    "id": 17269,
    "number": 171,
    "type": "single",
    "questionHtml": "Two OSPF-enabled routers are connected over a point-to-point link. During the ExStart state, which router will be chosen as the first one to send DBD packets?",
    "questionText": "Two OSPF-enabled routers are connected over a point-to-point link. During the ExStart state, which router will be chosen as the first one to send DBD packets?",
    "options": [
      {
        "html": "the router with the highest router ID",
        "text": "the router with the highest router ID",
        "correct": true
      },
      {
        "html": "the router with the lowest IP address on the connecting interface",
        "text": "the router with the lowest IP address on the connecting interface",
        "correct": false
      },
      {
        "html": "the router with the highest IP address on the connecting interface",
        "text": "the router with the highest IP address on the connecting interface",
        "correct": false
      },
      {
        "html": "the router with the lowest router ID",
        "text": "the router with the lowest router ID",
        "correct": false
      }
    ],
    "explanationHtml": "In the ExStart state, the two routers decide which router will send the DBD packets first. The router with the higher router ID will be the first router to send DBD packets during the Exchange state"
  },
  {
    "id": 20088,
    "number": 172,
    "type": "single",
    "questionHtml": "Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?",
    "questionText": "Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?",
    "options": [
      {
        "html": "exchanging link-state advertisements",
        "text": "exchanging link-state advertisements",
        "correct": false
      },
      {
        "html": "electing the designated router",
        "text": "electing the designated router",
        "correct": false
      },
      {
        "html": "injecting the default route",
        "text": "injecting the default route",
        "correct": false
      },
      {
        "html": "establishing neighbor adjacencies",
        "text": "establishing neighbor adjacencies",
        "correct": true
      }
    ],
    "explanationHtml": "OSPF-enabled routers must recognize each other on the network before they can share information. An OSPF-enabled router sends Hello packets out all OSPF-enabled interfaces to determine if neighbors are present on those links. If a neighbor is present, the OSPF-enabled router attempts to establish a neighbor adjacency with that neighbor."
  },
  {
    "id": 17271,
    "number": 173,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use forensic tools?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use forensic tools?",
    "options": [
      {
        "html": "to obtain specially designed operating systems preloaded with tools optimized for hacking",
        "text": "to obtain specially designed operating systems preloaded with tools optimized for hacking",
        "correct": false
      },
      {
        "html": "to detect any evidence of a hack or malware in a computer or network",
        "text": "to detect any evidence of a hack or malware in a computer or network",
        "correct": true
      },
      {
        "html": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "text": "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
        "correct": false
      },
      {
        "html": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "text": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Forensic tools</strong> are used by security professionals to <strong>sniff out any trace of evidence</strong> existing in a computer. During a penetration test, these tools allow a team to identify residues of previous hacks or the presence of malware that may otherwise remain hidden within the system. Examples of such tools include Sleuth Kit, Helix, Maltego, and Encase."
  },
  {
    "id": 17272,
    "number": 174,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem? <img src=\"./assets/i285134v1n1_285134-155d091e.png\" alt=\"CCNA 3 v7.0 Final Exam Answers Full - Enterprise Networking, Security, and Automation 41\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?",
    "options": [
      {
        "html": "Interface Fa0/0 has not been activated for OSPFv2 on router R2.",
        "text": "Interface Fa0/0 has not been activated for OSPFv2 on router R2.",
        "correct": true
      },
      {
        "html": "Interface Fa0/0 is configured as a passive-interface on router R2.",
        "text": "Interface Fa0/0 is configured as a passive-interface on router R2.",
        "correct": false
      },
      {
        "html": "Interface S0/0 is configured as a passive-interface on router R2.",
        "text": "Interface S0/0 is configured as a passive-interface on router R2.",
        "correct": false
      },
      {
        "html": "Interface s0/0 has not been activated for OSPFv2 on router R2.",
        "text": "Interface s0/0 has not been activated for OSPFv2 on router R2.",
        "correct": false
      }
    ],
    "explanationHtml": "If a LAN network is not advertised using OSPFv2, a remote network will not be reachable. The output displays a successful neighbor adjacency between router R1 and R2 on the interface S0/0 of both routers."
  },
  {
    "id": 17273,
    "number": 175,
    "type": "single",
    "questionHtml": "ABCTech is investigating the use of automation for some of its products. In order to control and test these products, the programmers require Windows, Linux, and MAC OS on their computers. What service or technology would support this requirement?",
    "questionText": "ABCTech is investigating the use of automation for some of its products. In order to control and test these products, the programmers require Windows, Linux, and MAC OS on their computers. What service or technology would support this requirement?",
    "options": [
      {
        "html": "dedicated servers",
        "text": "dedicated servers",
        "correct": false
      },
      {
        "html": "software defined networking",
        "text": "software defined networking",
        "correct": false
      },
      {
        "html": "virtualization",
        "text": "virtualization",
        "correct": true
      },
      {
        "html": "Cisco ACI",
        "text": "Cisco ACI",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Virtualization</strong> is the technology that <strong>separates the operating system (OS) from the underlying hardware</strong>. This separation allows <strong>multiple operating systems</strong>—such as Windows, Linux, and MAC OS—to exist and run simultaneously on a <strong>single hardware platform</strong>. Specifically, Type 2 hypervisors can be installed on a programmer’s computer to create virtual machine instances for each required OS, providing isolated environments for controlling and testing automated products."
  },
  {
    "id": 17274,
    "number": 176,
    "type": "multiple",
    "questionHtml": "A network engineer has noted that some expected network route entries are not displayed in the routing table. Which two commands will provide additional information about the state of router adjacencies, timer intervals, and the area ID? (Choose two.)",
    "questionText": "A network engineer has noted that some expected network route entries are not displayed in the routing table. Which two commands will provide additional information about the state of router adjacencies, timer intervals, and the area ID? (Choose two.)",
    "options": [
      {
        "html": "show ip protocols",
        "text": "show ip protocols",
        "correct": false
      },
      {
        "html": "show ip ospf neighbor",
        "text": "show ip ospf neighbor",
        "correct": true
      },
      {
        "html": "show running-configuration",
        "text": "show running-configuration",
        "correct": false
      },
      {
        "html": "show ip ospf interface",
        "text": "show ip ospf interface",
        "correct": true
      },
      {
        "html": "show ip route ospf",
        "text": "show ip route ospf",
        "correct": false
      }
    ],
    "explanationHtml": "The show ip ospf interface command will display routing table information that is already known. The show running-configuration and show ip protocols commands will display aspects of the OSPF configuration on the router but will not display adjacency state details or timer interval details."
  },
  {
    "id": 17275,
    "number": 177,
    "type": "single",
    "questionHtml": "Which type of VPN involves the forwarding of traffic over the backbone through the use of labels distributed among core routers?",
    "questionText": "Which type of VPN involves the forwarding of traffic over the backbone through the use of labels distributed among core routers?",
    "options": [
      {
        "html": "MPLS VPN",
        "text": "MPLS VPN",
        "correct": true
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": false
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": false
      },
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Multiprotocol Label Switching (MPLS)</strong> is used by service providers in their core networks to forward traffic through the <strong>MPLS backbone</strong>. This process involves the use of <strong>labels</strong> that are previously <strong>distributed among the core routers</strong> to determine the next hop for a packet. This mechanism allows the provider to create secure, virtual paths between client sites that effectively segregate their traffic from other customers."
  },
  {
    "id": 17276,
    "number": 178,
    "type": "single",
    "questionHtml": "Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
    "questionText": "Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
    "options": [
      {
        "html": "SSL VPN",
        "text": "SSL VPN",
        "correct": false
      },
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": false
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": true
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Generic Routing Encapsulation (GRE)</strong> is a <strong>non-secure</strong> tunneling protocol that can encapsulate various network layer protocols but lacks built-in encryption services. To secure the communication, a <strong>GRE packet</strong> is <strong>encapsulated into an IPsec packet</strong>, which provides the necessary encryption and authentication to protect the data as it travels across an untrusted network. This approach allows for the secure transport of multicast and routing protocol traffic, which standard IPsec VPNs cannot handle alone."
  },
  {
    "id": 17277,
    "number": 179,
    "type": "single",
    "questionHtml": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use hacking operation systems?",
    "questionText": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use hacking operation systems?",
    "options": [
      {
        "html": "to detect any evidence of a hack or malware in a computer or network",
        "text": "to detect any evidence of a hack or malware in a computer or network",
        "correct": false
      },
      {
        "html": "to obtain specially designed operating systems preloaded with tools optimized for hacking",
        "text": "to obtain specially designed operating systems preloaded with tools optimized for hacking",
        "correct": true
      },
      {
        "html": "to encode data, using algorithm schemes, to prevent unauthorized access to the encrypted data",
        "text": "to encode data, using algorithm schemes, to prevent unauthorized access to the encrypted data",
        "correct": false
      },
      {
        "html": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "text": "to reverse engineer binary files when writing exploits and when analyzing malware",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Hacking operating systems</strong> are <strong>specially designed operating systems</strong> that come <strong>preloaded with tools optimized for hacking</strong>. These environments, such as <strong>Kali Linux</strong>, <strong>Knoppix</strong>, and <strong>BackBox Linux</strong>, provide security professionals with a comprehensive suite of integrated tools necessary to perform various stages of a penetration test efficiently. In contrast, forensic tools are used to detect evidence of hacks, and debuggers are used for reverse engineering."
  },
  {
    "id": 17278,
    "number": 180,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to identify an interface as part of the external global network?",
    "questionText": "What command would be used as part of configuring NAT or PAT to identify an interface as part of the external global network?",
    "options": [
      {
        "html": "ip pat inside",
        "text": "ip pat inside",
        "correct": false
      },
      {
        "html": "access-list 10 permit 172.19.89.0 0.0.0.255",
        "text": "access-list 10 permit 172.19.89.0 0.0.0.255",
        "correct": false
      },
      {
        "html": "ip nat inside",
        "text": "ip nat inside",
        "correct": false
      },
      {
        "html": "ip nat outside",
        "text": "ip nat outside",
        "correct": true
      }
    ],
    "explanationHtml": "To configure NAT or PAT, a network administrator must identify the role of each interface involved in the translation process. The ip nat outside command is used in interface configuration mode to designate an interface as being connected to the <strong>external global network</strong>, which is typically the public internet. Traffic exiting this interface will have its source address translated from a private (local) address to a public (global) address."
  },
  {
    "id": 17279,
    "number": 181,
    "type": "single",
    "questionHtml": "To avoid purchasing new hardware, a company wants to take advantage of idle system resources and consolidate the number of servers while allowing for multiple operating systems on a single hardware platform. What service or technology would support this requirement?",
    "questionText": "To avoid purchasing new hardware, a company wants to take advantage of idle system resources and consolidate the number of servers while allowing for multiple operating systems on a single hardware platform. What service or technology would support this requirement?",
    "options": [
      {
        "html": "data center",
        "text": "data center",
        "correct": false
      },
      {
        "html": "cloud services",
        "text": "cloud services",
        "correct": false
      },
      {
        "html": "virtualization",
        "text": "virtualization",
        "correct": true
      },
      {
        "html": "dedicated servers",
        "text": "dedicated servers",
        "correct": false
      }
    ],
    "explanationHtml": "Server virtualization takes advantage of idle resources and consolidates the number of required servers. This also allows for multiple operating systems to exist on a single hardware platform."
  },
  {
    "id": 17280,
    "number": 182,
    "type": "single",
    "questionHtml": "Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
    "questionText": "Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
    "options": [
      {
        "html": "MPLS VPN",
        "text": "MPLS VPN",
        "correct": false
      },
      {
        "html": "IPsec virtual tunnel interface",
        "text": "IPsec virtual tunnel interface",
        "correct": true
      },
      {
        "html": "dynamic multipoint VPN",
        "text": "dynamic multipoint VPN",
        "correct": false
      },
      {
        "html": "GRE over IPsec",
        "text": "GRE over IPsec",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>IPsec Virtual Tunnel Interface (VTI)</strong> simplifies VPN configuration by applying IPsec settings to a <strong>virtual interface</strong> rather than mapping them statically to a physical interface. In this mechanism, packets are <strong>routed directly to the VTI</strong>, which then <strong>encrypts and forwards</strong> the traffic to the physical exit interface. Because the VTI is seen as a routable interface, it natively supports both unicast and multicast encrypted traffic, including routing protocols, without the need for additional GRE encapsulation."
  },
  {
    "id": 17281,
    "number": 183,
    "type": "single",
    "questionHtml": "Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?",
    "questionText": "Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?",
    "options": [
      {
        "html": "building the topology table",
        "text": "building the topology table",
        "correct": false
      },
      {
        "html": "selecting the router ID",
        "text": "selecting the router ID",
        "correct": false
      },
      {
        "html": "exchanging link-state advertisements",
        "text": "exchanging link-state advertisements",
        "correct": true
      },
      {
        "html": "injecting the default route",
        "text": "injecting the default route",
        "correct": false
      }
    ],
    "explanationHtml": "According to the link-state routing process, once neighbor adjacencies are established, routers begin <strong>exchanging link-state advertisements (LSAs)</strong>. During this step, each router floods information regarding the <strong>state and cost of its directly connected links</strong> to its neighbors. These neighbors then immediately forward the information to their own neighbors until <strong>all routers in the OSPF area</strong> possess identical link-state information."
  },
  {
    "id": 17282,
    "number": 184,
    "type": "single",
    "questionHtml": "What type of traffic is described as using either TCP or UDP depending on the need for error recovery?",
    "questionText": "What type of traffic is described as using either TCP or UDP depending on the need for error recovery?",
    "options": [
      {
        "html": "video",
        "text": "video",
        "correct": false
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Data traffic</strong> consists of applications that use <strong>either TCP or UDP</strong> based on their specific requirements. While real-time traffic like voice and video typically use UDP, data applications that have no tolerance for data loss (such as email and web pages) use <strong>TCP</strong> because it performs <strong>error recovery</strong> to ensure that any packets lost in transit are resent."
  },
  {
    "id": 17283,
    "number": 185,
    "type": "single",
    "questionHtml": "Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation? <img src=\"./assets/What-is-the-best-ACL-type-and-placement-to-use-in-this-situation-9c64c7e5.jpg\" alt=\"CCNA 3 v7.0 Final Exam Answers Full - Enterprise Networking, Security, and Automation 42\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "extended ACL outbound on R2 WAN interface towards the internet",
        "text": "extended ACL outbound on R2 WAN interface towards the internet",
        "correct": true
      },
      {
        "html": "standard ACL outbound on R2 S0/0/0",
        "text": "standard ACL outbound on R2 S0/0/0",
        "correct": false
      },
      {
        "html": "extended ACL inbound on R2 S0/0/0",
        "text": "extended ACL inbound on R2 S0/0/0",
        "correct": false
      },
      {
        "html": "standard ACL inbound on R2 WAN interface connecting to the internet",
        "text": "standard ACL inbound on R2 WAN interface connecting to the internet",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>ACL Type:</strong> An <strong>extended ACL</strong> is required because the CEO’s demand involves filtering traffic based on specific applications (<strong>email</strong> and <strong>FTP</strong>), which necessitates inspecting <strong>Layer 4 protocol and port information</strong>. Standard ACLs are insufficient as they only filter based on the source IPv4 address. <strong>Placement:</strong> To satisfy the requirement of using only <strong>one ACL</strong> to control traffic from multiple internal segments (R1’s LANs and R3’s Server), the ACL must be placed at a common exit point. Applying the ACL <strong>outbound on the R2 WAN interface</strong> ensures that all traffic from the entire organization is inspected and filtered before it enters the internet."
  },
  {
    "id": 17284,
    "number": 186,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to define a pool of addresses for translation?",
    "questionText": "What command would be used as part of configuring NAT or PAT to define a pool of addresses for translation?",
    "options": [
      {
        "html": "ip nat inside source static 172.19.89.13 198.133.219.65",
        "text": "ip nat inside source static 172.19.89.13 198.133.219.65",
        "correct": false
      },
      {
        "html": "ip nat inside source list 24 interface serial 0/1/0 overload",
        "text": "ip nat inside source list 24 interface serial 0/1/0 overload",
        "correct": false
      },
      {
        "html": "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
        "text": "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
        "correct": true
      },
      {
        "html": "ip nat outside",
        "text": "ip nat outside",
        "correct": false
      }
    ],
    "explanationHtml": "The ip nat pool command is used to <strong>define the pool of public IPv4 addresses</strong> that will be used for translation in dynamic NAT or PAT configurations. This command requires a pool name, a starting and ending IPv4 address, and either a netmask or prefix-length to specify the range of available global addresses. The other commands listed are used for static mapping, applying PAT to a specific interface, or identifying the NAT outside interface."
  },
  {
    "id": 20089,
    "number": 187,
    "type": "single",
    "questionHtml": "What is the name of the layer in the Cisco borderless switched network design that is considered to be the backbone used for high-speed connectivity and fault isolation?",
    "questionText": "What is the name of the layer in the Cisco borderless switched network design that is considered to be the backbone used for high-speed connectivity and fault isolation?",
    "options": [
      {
        "html": "data link",
        "text": "data link",
        "correct": false
      },
      {
        "html": "access",
        "text": "access",
        "correct": false
      },
      {
        "html": "core",
        "text": "core",
        "correct": true
      },
      {
        "html": "network",
        "text": "network",
        "correct": false
      },
      {
        "html": "network access",
        "text": "network access",
        "correct": false
      }
    ],
    "explanationHtml": "The three layers of the Cisco borderless switch network design are access, distribution, and core. The access layer switches are the ones used to connect end devices to the network. The distribution layer switches accept connections from access layer switches and provides switching, routing, and access policy functions. The core layer is called the backbone and core switches commonly have high-speed redundant connections."
  },
  {
    "id": 17286,
    "number": 188,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on router interface. The ACL consists of a single entry: <pre>access-list 210 permit tcp 172.18.20.0 0.0.0.47 any eq ftp</pre> If a packet with a source address of 172.18.20.40, a destination address of 10.33.19.2, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on router interface. The ACL consists of a single entry: access-list 210 permit tcp 172.18.20.0 0.0.0.47 any eq ftp If a packet with a source address of 172.18.20.40, a destination address of 10.33.19.2, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "permitted",
        "text": "permitted",
        "correct": true
      },
      {
        "html": "denied",
        "text": "denied",
        "correct": false
      }
    ],
    "explanationHtml": "The packet is <strong>permitted</strong> because it satisfies all the criteria defined in the Access Control Entry (ACE): <ul><li><strong>Protocol and Port:</strong> The ACE specifies <strong>TCP</strong> and the port <strong>ftp</strong> (which corresponds to port <strong>21</strong>). The packet uses protocol 21, creating a match.</li><li><strong>Source Address:</strong> The ACE uses the network 172.18.20.0 with a wildcard mask of 0.0.0.47. In binary, the mask 47 is 00101111, meaning the router must match the bits in the 128, 64, and 16 positions (where the wildcard is <strong>0</strong>). The packet source .40 in binary is 00101000. Since the bits in the 128, 64, and 16 positions are all <strong>0</strong> in both the ACE and the packet, the source address is a match.</li><li><strong>Destination:</strong> The ACE specifies <strong>any</strong>, which matches the packet’s destination address of 10.33.19.2.</li></ul> Since a match is found on this permit statement, the router carries out the instruction and allows the packet to pass."
  },
  {
    "id": 17287,
    "number": 189,
    "type": "single",
    "questionHtml": "What type of traffic is described as consisting of traffic that gets a lower priority if it is not mission-critical?",
    "questionText": "What type of traffic is described as consisting of traffic that gets a lower priority if it is not mission-critical?",
    "options": [
      {
        "html": "video",
        "text": "video",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": true
      },
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      }
    ],
    "explanationHtml": "The priority of <strong>data traffic</strong> is determined by whether the application is interactive or mission-critical. While voice and video traffic inherently require high priority, data traffic that is <strong>not mission-critical</strong> and not interactive is assigned a <strong>lower priority</strong>, essentially receiving only the leftover bandwidth after all other needs are met. In contrast, voice and video are always sensitive to delay and typically receive higher priority."
  },
  {
    "id": 17288,
    "number": 190,
    "type": "single",
    "questionHtml": "Which OSPF table is identical on all converged routers within the same OSPF area?",
    "questionText": "Which OSPF table is identical on all converged routers within the same OSPF area?",
    "options": [
      {
        "html": "routing",
        "text": "routing",
        "correct": false
      },
      {
        "html": "neighbor",
        "text": "neighbor",
        "correct": false
      },
      {
        "html": "adjacency",
        "text": "adjacency",
        "correct": false
      },
      {
        "html": "topology",
        "text": "topology",
        "correct": true
      }
    ],
    "explanationHtml": "The topology table, also known as the <strong>Link-state Database (LSDB)</strong>, represents the network map by listing information about all other routers in the area. For OSPF to calculate accurate routes using the SPF algorithm, all converged routers within a specific area must maintain an <strong>identical LSDB</strong>. In contrast, the neighbor and routing tables are unique to each individual router."
  },
  {
    "id": 17289,
    "number": 191,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <pre>access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www .</pre> If a packet with a source address of 192.168.10.45, a destination address of 10.10.3.27, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www . If a packet with a source address of 192.168.10.45, a destination address of 10.10.3.27, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "permitted",
        "text": "permitted",
        "correct": true
      },
      {
        "html": "denied",
        "text": "denied",
        "correct": false
      }
    ],
    "explanationHtml": "The packet matches all criteria defined in the extended ACL entry. Specifically, the source address <strong>192.168.10.45</strong> falls within the range of the <strong>192.168.10.0 0.0.0.255</strong> subnet. The destination address matches the <strong>any</strong> keyword. Finally, protocol <strong>80</strong> is the standard port for <strong>www</strong> (HTTP), which uses the <strong>tcp</strong> protocol as specified in the entry. Since all conditions match, the packet is permitted."
  },
  {
    "id": 17290,
    "number": 192,
    "type": "single",
    "questionHtml": "What protocol allows the manager to poll agents to access information from the agent MIB?",
    "questionText": "What protocol allows the manager to poll agents to access information from the agent MIB?",
    "options": [
      {
        "html": "CBWFQ",
        "text": "CBWFQ",
        "correct": false
      },
      {
        "html": "SYSLOG",
        "text": "SYSLOG",
        "correct": false
      },
      {
        "html": "TFTP",
        "text": "TFTP",
        "correct": false
      },
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>SNMP</strong> (Simple Network Management Protocol) is an application layer protocol that facilitates communication between network managers and agents. The <strong>SNMP manager</strong> uses the agent to <strong>poll</strong> and query the <strong>MIB</strong> (Management Information Base) for device data and operational statistics using “get” requests."
  },
  {
    "id": 20090,
    "number": 193,
    "type": "single",
    "questionHtml": "Match each component of a WAN connection to its description. (Not all options are used.)",
    "questionText": "Match each component of a WAN connection to its description. (Not all options are used.)",
    "options": [
      {
        "html": "<img src=\"./assets/Match-each-component-of-a-WAN-connection-to-its-description-5d7db479.jpg\" alt=\"Question diagram\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 7.2.3<br></p>"
  },
  {
    "id": 17292,
    "number": 194,
    "type": "single",
    "questionHtml": "What type of traffic is described as being able to tolerate a certain amount of latency, jitter, and loss without any noticeable effects?",
    "questionText": "What type of traffic is described as being able to tolerate a certain amount of latency, jitter, and loss without any noticeable effects?",
    "options": [
      {
        "html": "voice",
        "text": "voice",
        "correct": true
      },
      {
        "html": "video",
        "text": "video",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Voice</strong> traffic is described as smooth and predictable but very sensitive to delays. It can tolerate a specific amount of latency (up to <strong>150 ms</strong>), jitter (up to <strong>30 ms</strong>), and packet loss (up to <strong>1%</strong>) without users experiencing any noticeable effects on quality. While video traffic has similar tolerances, it is considered <strong>less resilient to loss</strong> than voice. In contrast, <strong>data</strong> traffic is typically insensitive to delay and jitter but cannot tolerate any loss."
  },
  {
    "id": 17293,
    "number": 195,
    "type": "single",
    "questionHtml": "What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
    "questionText": "What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
    "options": [
      {
        "html": "policing",
        "text": "policing",
        "correct": false
      },
      {
        "html": "traffic marking",
        "text": "traffic marking",
        "correct": true
      },
      {
        "html": "weighted random early detection (WRED)",
        "text": "weighted random early detection (WRED)",
        "correct": false
      },
      {
        "html": "traffic shaping",
        "text": "traffic shaping",
        "correct": false
      },
      {
        "html": "tail drop",
        "text": "tail drop",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Traffic marking</strong> is the process of adding a specific value to the packet header (such as CoS at Layer 2 or DSCP at Layer 3). This allows subsequent network devices to identify the traffic class and apply defined forwarding policies accordingly. For maximum efficiency, marking should be performed as close to the source as possible to establish a <strong>trust boundary</strong>."
  },
  {
    "id": 17294,
    "number": 196,
    "type": "multiple",
    "questionHtml": "Which three traffic-related factors would influence selecting a particular WAN link type? (Choose three.)",
    "questionText": "Which three traffic-related factors would influence selecting a particular WAN link type? (Choose three.)",
    "options": [
      {
        "html": "cost of the link",
        "text": "cost of the link",
        "correct": false
      },
      {
        "html": "amount of traffic",
        "text": "amount of traffic",
        "correct": true
      },
      {
        "html": "distance between sites",
        "text": "distance between sites",
        "correct": false
      },
      {
        "html": "reliability",
        "text": "reliability",
        "correct": false
      },
      {
        "html": "security needs",
        "text": "security needs",
        "correct": true
      },
      {
        "html": "type of traffic",
        "text": "type of traffic",
        "correct": true
      }
    ],
    "explanationHtml": "The traffic-related factors that influence selecting a particular WAN link type include the type of traffic, amount of traffic, quality requirements, and security requirements. Quality requirements include ensuring that traffic that cannot tolerate delay gets priority treatment as well as important business transactional traffic."
  },
  {
    "id": 17295,
    "number": 197,
    "type": "single",
    "questionHtml": "What command would be used as part of configuring NAT or PAT to link the inside local addresses to the pool of addresses available for PAT translation?",
    "questionText": "What command would be used as part of configuring NAT or PAT to link the inside local addresses to the pool of addresses available for PAT translation?",
    "options": [
      {
        "html": "ip nat inside source list ACCTNG pool POOL-STAT",
        "text": "ip nat inside source list ACCTNG pool POOL-STAT",
        "correct": false
      },
      {
        "html": "ip nat translation timeout 36000",
        "text": "ip nat translation timeout 36000",
        "correct": false
      },
      {
        "html": "ip nat inside source list 14 pool POOL-STAT overload",
        "text": "ip nat inside source list 14 pool POOL-STAT overload",
        "correct": true
      },
      {
        "html": "ip nat inside source static 172.19.89.13 198.133.219.65",
        "text": "ip nat inside source static 172.19.89.13 198.133.219.65",
        "correct": false
      }
    ],
    "explanationHtml": "The traffic-related factors that influence selecting a particular WAN link type include the type of traffic, amount of traffic, quality requirements, and security requirements. Quality requirements include ensuring that traffic that cannot tolerate delay gets priority treatment as well as important business transactional traffic."
  },
  {
    "id": 17296,
    "number": 198,
    "type": "single",
    "questionHtml": "What protocol is a vendor-neutral Layer 2 discovery protocol that must be configured separately to transmit and receive information packets?",
    "questionText": "What protocol is a vendor-neutral Layer 2 discovery protocol that must be configured separately to transmit and receive information packets?",
    "options": [
      {
        "html": "SNMP",
        "text": "SNMP",
        "correct": false
      },
      {
        "html": "MPLS",
        "text": "MPLS",
        "correct": false
      },
      {
        "html": "LLDP",
        "text": "LLDP",
        "correct": true
      },
      {
        "html": "NTP",
        "text": "NTP",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Link Layer Discovery Protocol (LLDP)</strong> is a <strong>vendor-neutral</strong> Layer 2 discovery protocol. Unlike Cisco proprietary protocols, LLDP requires separate configuration for an interface to <strong>transmit</strong> and <strong>receive</strong> information packets using specific commands like lldp transmit and lldp receive."
  },
  {
    "id": 17297,
    "number": 199,
    "type": "single",
    "questionHtml": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: <code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp .</code> If a packet with a source address of 172.18.20.55, a destination address of 172.18.20.3, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
    "questionText": "An ACL is applied inbound on a router interface. The ACL consists of a single entry: access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp . If a packet with a source address of 172.18.20.55, a destination address of 172.18.20.3, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
    "options": [
      {
        "html": "permitted",
        "text": "permitted",
        "correct": false
      },
      {
        "html": "denied",
        "text": "denied",
        "correct": true
      }
    ],
    "explanationHtml": "The packet is denied because it fails to match the criteria of the single permit entry, triggering the <strong>implicit deny</strong>. Specifically, the source address <strong>172.18.20.55</strong> falls outside the permitted range of <strong>172.18.20.0 to 172.18.20.31</strong> (defined by wildcard 0.0.0.31). Additionally, the destination address <strong>172.18.20.3</strong> does not match the permitted range of <strong>172.18.20.32 to 172.18.20.63</strong>. In ACL processing, if a packet does not match any explicit permit statement, it is automatically discarded."
  },
  {
    "id": 17298,
    "number": 200,
    "type": "single",
    "questionHtml": "Refer to the exhibit. Corporate policy demands that access to the server network be restricted to internal employees only. What is the best ACL type and placement to use in this situation? <img src=\"./assets/i350786v1n1_C3M4-Diagram-7ee0a08e.jpg\" alt=\"CCNA 3 v7.0 Final Exam Answers Full - Enterprise Networking, Security, and Automation 44\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. Corporate policy demands that access to the server network be restricted to internal employees only. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "extended ACL outbound on R2 S0/0/1",
        "text": "extended ACL outbound on R2 S0/0/1",
        "correct": true
      },
      {
        "html": "standard ACL outbound on R2 S0/0/0",
        "text": "standard ACL outbound on R2 S0/0/0",
        "correct": false
      },
      {
        "html": "standard ACL inbound on R2 WAN interface connecting to the internet",
        "text": "standard ACL inbound on R2 WAN interface connecting to the internet",
        "correct": false
      },
      {
        "html": "extended ACL inbound on R2 S0/0/0",
        "text": "extended ACL inbound on R2 S0/0/0",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>ACL Type</strong>: An <strong>extended ACL</strong> is the best choice because it allows for filtering based on both the <strong>source address</strong> (identifying internal employees versus internet users) and the <strong>destination address</strong> (the specific server network). <strong>Placement</strong>: According to the sources, <strong>outbound ACLs</strong> are most effective when a single filter must be applied to traffic arriving from <strong>multiple inbound interfaces</strong>. In this topology, traffic destined for the server network enters R2 through two different points: the internet WAN interface and the R1 serial interface (S0/0/0). Placing the ACL <strong>outbound on R2 S0/0/1</strong> ensures that all traffic from both sources is filtered at this single “choke point” before it is sent to R3 and the server network."
  },
  {
    "id": 17299,
    "number": 201,
    "type": "single",
    "questionHtml": "A technician is working on a Layer 2 switch and notices that a %CDP-4-DUPLEX_MISMATCH message keeps appearing for port G0/5. What command should the technician issue on the switch to start the troubleshooting process?",
    "questionText": "A technician is working on a Layer 2 switch and notices that a %CDP-4-DUPLEX_MISMATCH message keeps appearing for port G0/5. What command should the technician issue on the switch to start the troubleshooting process?",
    "options": [
      {
        "html": "show cdp neighbors",
        "text": "show cdp neighbors",
        "correct": false
      },
      {
        "html": "show ip interface brief",
        "text": "show ip interface brief",
        "correct": false
      },
      {
        "html": "show interface g0/5",
        "text": "show interface g0/5",
        "correct": true
      },
      {
        "html": "show cdp",
        "text": "show cdp",
        "correct": false
      }
    ],
    "explanationHtml": "The %CDP-4-DUPLEX_MISMATCH message indicates that the local interface and its connected neighbor have conflicting duplex settings. To start troubleshooting, the technician must verify the operational status and configuration of the specific port mentioned in the error. The <strong>show interface g0/5</strong> command provides detailed information, including whether the port is currently operating in <strong>full-duplex</strong> or <strong>half-duplex</strong> mode, allowing the technician to identify the mismatch."
  },
  {
    "id": 17300,
    "number": 202,
    "type": "single",
    "questionHtml": "Which virtual resource would be installed on a network server to provide direct access to hardware resources?",
    "questionText": "Which virtual resource would be installed on a network server to provide direct access to hardware resources?",
    "options": [
      {
        "html": "VMware Fusion",
        "text": "VMware Fusion",
        "correct": false
      },
      {
        "html": "a management console",
        "text": "a management console",
        "correct": false
      },
      {
        "html": "a dedicated VLAN",
        "text": "a dedicated VLAN",
        "correct": false
      },
      {
        "html": "a Type 1 hypervisor",
        "text": "a Type 1 hypervisor",
        "correct": true
      }
    ],
    "explanationHtml": "Type 1 hypervisors, the hypervisor is installed directly on the server or networking hardware. Then, instances of an OS are installed on the hypervisor, as shown in the figure. Type 1 hypervisors have direct access to the hardware resources. Therefore, they are more efficient than hosted architectures. Type 1 hypervisors improve scalability, performance, and robustness."
  },
  {
    "id": 20091,
    "number": 203,
    "type": "single",
    "questionHtml": "Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface. When following the best practices, in what location should the standard ACL be applied? <img src=\"./assets/i282155v1n2_282152-0118803b.png\" alt=\"Enterprise Networking, Security, and Automation ( Version 7.00) - ENSA Final Exam\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface. When following the best practices, in what location should the standard ACL be applied?",
    "options": [
      {
        "html": "R2 G0/1 inbound",
        "text": "R2 G0/1 inbound",
        "correct": false
      },
      {
        "html": "R2 S0/0/1 outbound",
        "text": "R2 S0/0/1 outbound",
        "correct": false
      },
      {
        "html": "R1 S0/0/0 outbound",
        "text": "R1 S0/0/0 outbound",
        "correct": false
      },
      {
        "html": "R2 G0/1 outbound",
        "text": "R2 G0/1 outbound",
        "correct": true
      },
      {
        "html": "R2 G0/0 outbound",
        "text": "R2 G0/0 outbound",
        "correct": false
      }
    ],
    "explanationHtml": "Following network best practices, <strong>standard ACLs</strong> should be placed <strong>as close to the destination as possible</strong>. In this topology, the destination is the network connected to interface <strong>G0/1 on R2</strong>. Applying the ACL <strong>outbound on R2 G0/1</strong> ensures that traffic from the R1 LANs is permitted to that specific network without inadvertently blocking traffic destined for other networks, such as the LAN connected to R2 G0/0. Placing a standard ACL closer to the source (e.g., on R1) would block those source networks from reaching <strong>any</strong> other destination reachable through that interface."
  },
  {
    "id": 17302,
    "number": 204,
    "type": "single",
    "questionHtml": "Which OSPF database is identical on all converged routers within the same OSPF area?",
    "questionText": "Which OSPF database is identical on all converged routers within the same OSPF area?",
    "options": [
      {
        "html": "neighbor",
        "text": "neighbor",
        "correct": false
      },
      {
        "html": "forwarding",
        "text": "forwarding",
        "correct": false
      },
      {
        "html": "link-state",
        "text": "link-state",
        "correct": true
      },
      {
        "html": "adjacency",
        "text": "adjacency",
        "correct": false
      }
    ],
    "explanationHtml": "Regardless of which OSPF area a router resides in, the adjacency database, routing table, and forwarding database are unique for each router. The link-state database lists information about all other routers within an area and is identical across all OSPF routers participating in that area."
  },
  {
    "id": 17303,
    "number": 205,
    "type": "multiple",
    "questionHtml": "What are two features to consider when creating a named ACL? (Choose two.)",
    "questionText": "What are two features to consider when creating a named ACL? (Choose two.)",
    "options": [
      {
        "html": "Use alphanumeric characters if needed.",
        "text": "Use alphanumeric characters if needed.",
        "correct": true
      },
      {
        "html": "Use special characters, such as ! or * to show the importance of the ACL.",
        "text": "Use special characters, such as ! or * to show the importance of the ACL.",
        "correct": false
      },
      {
        "html": "Modify the ACL using a text editor.",
        "text": "Modify the ACL using a text editor.",
        "correct": false
      },
      {
        "html": "Be descriptive when creating the ACL name.",
        "text": "Be descriptive when creating the ACL name.",
        "correct": true
      },
      {
        "html": "Use a space for ease of reading to separate the name from the description",
        "text": "Use a space for ease of reading to separate the name from the description",
        "correct": false
      }
    ],
    "explanationHtml": "The following summarizes the rules to follow for named ACLs: <ul><li>Assign a name to identify the purpose of the ACL.</li><li>Names can contain alphanumeric characters.</li><li>Names cannot contain spaces or punctuation.</li><li>It is suggested that the name be written in CAPITAL LETTERS.</li><li>Entries can be added or deleted within the ACL.</li></ul>"
  },
  {
    "id": 20092,
    "number": 206,
    "type": "single",
    "questionHtml": "Match the RESTful API method to CRUD function.",
    "questionText": "Match the RESTful API method to CRUD function.",
    "options": [
      {
        "html": "<img src=\"./assets/2020-10-25_185415-79d3fda0.jpg\" alt=\"Match the RESTful API method to CRUD function.\" loading=\"lazy\">",
        "text": "",
        "correct": true
      }
    ],
    "explanationHtml": "<p>Topic 14.4.3<br></p>"
  },
  {
    "id": 17305,
    "number": 207,
    "type": "single",
    "questionHtml": "What type of traffic is described as requiring at least 384 Kbps of bandwidth?",
    "questionText": "What type of traffic is described as requiring at least 384 Kbps of bandwidth?",
    "options": [
      {
        "html": "voice",
        "text": "voice",
        "correct": false
      },
      {
        "html": "data",
        "text": "data",
        "correct": false
      },
      {
        "html": "video",
        "text": "video",
        "correct": true
      }
    ],
    "explanationHtml": "<strong>Video traffic</strong> is more demanding than voice traffic because of its higher volume of data per packet. It is specifically described as requiring <strong>at least 384 Kbps</strong> of bandwidth to maintain an acceptable user experience. In contrast, voice traffic requires a minimum of only 30 Kbps."
  },
  {
    "id": 17306,
    "number": 208,
    "type": "single",
    "questionHtml": "Which step in the link-state routing process is described by a router inserting best paths into the routing table?",
    "questionText": "Which step in the link-state routing process is described by a router inserting best paths into the routing table?",
    "options": [
      {
        "html": "declaring a neighbor to be inaccessible",
        "text": "declaring a neighbor to be inaccessible",
        "correct": false
      },
      {
        "html": "executing the SPF algorithm",
        "text": "executing the SPF algorithm",
        "correct": false
      },
      {
        "html": "load balancing equal-cost paths",
        "text": "load balancing equal-cost paths",
        "correct": false
      },
      {
        "html": "choosing the best route",
        "text": "choosing the best route",
        "correct": true
      }
    ],
    "explanationHtml": "This is the final step in the generic link-state routing process. After the SPF algorithm creates the SPF tree, the router identifies the shortest paths to each destination and offers them to the IP routing table. These best paths are then <strong>inserted into the routing table</strong> unless a route to the same network with a lower administrative distance exists."
  },
  {
    "id": 17307,
    "number": 209,
    "type": "single",
    "questionHtml": "Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
    "questionText": "Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
    "options": [
      {
        "html": "data center",
        "text": "data center",
        "correct": false
      },
      {
        "html": "virtualization",
        "text": "virtualization",
        "correct": false
      },
      {
        "html": "cloud services",
        "text": "cloud services",
        "correct": true
      },
      {
        "html": "dedicated servers",
        "text": "dedicated servers",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Cloud services</strong> support these requirements by providing off-premise, on-demand access to a shared pool of computing resources. By reducing or eliminating the need for <strong>onsite IT equipment</strong>, cloud services allow an organization to move to a <strong>smaller facility</strong> and reduce overhead related to the physical plant. This technology reduces <strong>energy costs</strong> and the overall environmental footprint by utilizing resources more efficiently and shifting infrastructure needs to the provider. Finally, it facilitates <strong>telecommuting</strong> by enabling secure access to organizational data from any location and at any time."
  },
  {
    "id": 17308,
    "number": 210,
    "type": "single",
    "questionHtml": "Which QoS technique smooths packet output rate?",
    "questionText": "Which QoS technique smooths packet output rate?",
    "options": [
      {
        "html": "policing",
        "text": "policing",
        "correct": false
      },
      {
        "html": "shaping",
        "text": "shaping",
        "correct": true
      },
      {
        "html": "weighted random early detection",
        "text": "weighted random early detection",
        "correct": false
      },
      {
        "html": "Integrated Services (IntServ)",
        "text": "Integrated Services (IntServ)",
        "correct": false
      },
      {
        "html": "marking",
        "text": "marking",
        "correct": false
      }
    ],
    "explanationHtml": "<strong>Traffic shaping</strong> is a QoS mechanism that retains excess packets in a queue and schedules them for transmission over time. This process results in a <strong>smoothed packet output rate</strong>. Unlike policing, which drops excess traffic immediately, shaping requires a queue and sufficient memory to buffer and delay packets for later transmission."
  },
  {
    "id": 17309,
    "number": 211,
    "type": "single",
    "questionHtml": "Refer to the exhibit. The company has provided IP phones to employees on the 192.168.10.0/24 network and the voice traffic will need priority over data traffic. What is the best ACL type and placement to use in this situation? <img src=\"./assets/i350679v1n1_C3M4-Diagram-25a9fca4.jpg\" alt=\"CCNA 3 v7.0 Final Exam Answers Full - Enterprise Networking, Security, and Automation 45\" loading=\"lazy\">",
    "questionText": "Refer to the exhibit. The company has provided IP phones to employees on the 192.168.10.0/24 network and the voice traffic will need priority over data traffic. What is the best ACL type and placement to use in this situation?",
    "options": [
      {
        "html": "extended ACL inbound on R1 G0/0",
        "text": "extended ACL inbound on R1 G0/0",
        "correct": true
      },
      {
        "html": "extended ACL outbound on R2 WAN interface towards the internet",
        "text": "extended ACL outbound on R2 WAN interface towards the internet",
        "correct": false
      },
      {
        "html": "extended ACL outbound on R2 S0/0/1",
        "text": "extended ACL outbound on R2 S0/0/1",
        "correct": false
      },
      {
        "html": "extended ACLs inbound on R1 G0/0 and G0/1",
        "text": "extended ACLs inbound on R1 G0/0 and G0/1",
        "correct": false
      }
    ],
    "explanationHtml": "Standard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible. Extended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure."
  },
  {
    "id": 19168,
    "number": 212,
    "type": "single",
    "questionHtml": "A network technician is configuring SNMPv3 and has set a security level of SNMPv3 authPriv. What is a feature of using this level?",
    "questionText": "A network technician is configuring SNMPv3 and has set a security level of SNMPv3 authPriv. What is a feature of using this level?",
    "options": [
      {
        "html": "authenticates a packet by using the SHA algorithm only",
        "text": "authenticates a packet by using the SHA algorithm only",
        "correct": false
      },
      {
        "html": "authenticates a packet by a string match of the username or community string",
        "text": "authenticates a packet by a string match of the username or community string",
        "correct": false
      },
      {
        "html": "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
        "text": "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
        "correct": false
      },
      {
        "html": "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and a username",
        "text": "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and a username",
        "correct": true
      }
    ],
    "explanationHtml": "The SNMPv3 <strong>authPriv</strong> security level provides the highest level of protection by combining <strong>authentication</strong> and <strong>encryption</strong>. It uses the <strong>User-based Security Model (USM)</strong>, which authenticates packets by using a <strong>username</strong> in conjunction with either the <strong>HMAC-MD5</strong> or <strong>HMAC-SHA</strong> algorithms. Additionally, the authPriv level adds confidentiality by encrypting the data using algorithms like DES, 3DES, or AES."
  }
];

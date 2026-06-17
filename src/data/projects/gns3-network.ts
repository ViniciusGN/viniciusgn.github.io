import type { ProjectDetail } from "./types";

const detail: ProjectDetail = {
  slug: "gns3-network",

  fullDescription: [
    "This project was developed as part of the Network Security course at the University of Brasília (UnB), where it received the highest grade in the class. Conducted in a two-person team, the objective was to design, deploy, secure, and monitor a realistic enterprise-scale network infrastructure inspired by the architecture of different university campuses and managed from a Security Operations Center (SOC) perspective.",

    "The topology was modeled after two real UnB campuses, the Faculdade de Tecnologia (FT) and the Campus Gama (FGA), interconnected through a triangular OSPF backbone built on VyOS routers. Each campus was segmented into department-level VLANs, including Electrical, Mechanical, and Civil Engineering at FT and Software and Aerospace Engineering at FGA, with subnetting designed around /24 and /28 masks to balance address space and isolation. This design reflects a network engineering perspective as much as a security one, with hierarchical addressing, trunked uplinks, and static and dynamic routing coexisting across the same infrastructure.",

    "On top of this foundation, the environment combined dual pfSense firewalls, Snort as an intrusion detection system, Zabbix for infrastructure monitoring, Wazuh as a SIEM layer, web and FTP servers secured with OpenSSL-generated HTTPS certificates, and a DMZ/Military Zone (MZ) split enforcing strict boundaries between exposed services and internal assets.",

    "Beyond deployment, the project emphasized defensive operations validated through offensive testing. The Blue Team's controls were exercised against ARP spoofing, a TCP SYN-based denial-of-service attack, and Nmap reconnaissance scans, all orchestrated through a custom DIALOG-based attack console. A Heartbleed exploitation attempt against OpenSSL was also explored as a stretch goal; the underlying vulnerability and its data-leakage mechanics were studied in depth, and while full exploitation against the project's configuration was not achieved within the timeline, the exercise offered a practical lesson on the gap between vulnerability theory and working exploits.",
  ],

  rows: [
    // --- Network Design & Topology ---
    {
      columns: [
        {
          type: "text",
          heading: "Network Design & Topology",
          body: "The architecture connects two UnB campuses, FT and FGA, through a triangular backbone of three VyOS routers running OSPF for dynamic convergence and resilience against link failure. Each campus was segmented into department-level VLANs (Electrical, Mechanical, Civil, and Software/Aerospace Engineering) using Layer-3 ExOS switches with tagged trunk ports between distribution and access layers.",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/Topologia_grande.png",
          caption: "Full enterprise topology connecting the FT and FGA campuses through the OSPF backbone.",
          alt: "Complete network topology diagram",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/topo_inical.png",
          caption: "Initial design sketch of the network architecture and zone separation.",
          alt: "Initial topology design diagram",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/topo_final.png",
          caption: "Refined topology as implemented in GNS3, with backbone, DMZ, and data center detail.",
          alt: "Final topology design diagram",
        },
      ],
    },
    {
      columns: [
        {
          type: "note",
          body: "The initial sketch evolved significantly during implementation as routing and addressing constraints surfaced — a normal part of taking a paper design into a working GNS3 lab.",
        },
      ],
    },

    // --- Firewall & Network Segmentation ---
    {
      columns: [
        {
          type: "text",
          heading: "Firewall & Network Segmentation",
          body: "Two pfSense firewalls enforced the boundary between the Military Zone (MZ), holding internal resources, and the DMZ, hosting externally accessible services. WAN-facing rule sets blocked Telnet, SSH, ICMP, and direct access to the pfSense administrative interface.",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/wan-pfsense1.png",
          caption: "pfSense WAN firewall rules blocking Telnet, SNMP, and ICMP traffic.",
          alt: "pfSense WAN firewall rules",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/wan-pfsense2.png",
          caption: "WAN ruleset on the second pfSense firewall, mirroring access restrictions.",
          alt: "Second pfSense WAN firewall rules",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/regra_block_dmz.png",
          caption: "Firewall rule restricting inbound access from the DMZ toward internal services.",
          alt: "DMZ access block rule",
        },
      ],
    },

    // --- Intrusion Detection with Snort ---
    {
      columns: [
        {
          type: "text",
          heading: "Intrusion Detection with Snort",
          body: "Snort was deployed on a dedicated Ubuntu host positioned inline between the FT router and the access-layer switches, with IP forwarding and NAT masquerading configured so traffic could be inspected without breaking connectivity.",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/snort_confs.png",
          caption: "Snort installation and version check on the dedicated IDS host.",
          alt: "Snort installation terminal output",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/int_ubuntu2.png",
          caption: "Network interface configuration on the Snort host, enabling inline traffic inspection.",
          alt: "Ubuntu network interface configuration",
        },
        {
          type: "text",
          body: "Custom rules were tuned to flag ping sweeps and Nmap ACK/SYN scans, and the resulting alert log shows live detections tied to source and destination IPs during testing.",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/snort2.png",
          caption: "Snort alert log showing real-time detection of Nmap SYN scans.",
          alt: "Snort alert log",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/deteccao.png",
          caption: "Side-by-side view of an Nmap scan in progress and the corresponding Snort detections.",
          alt: "Nmap scan and Snort detection side by side",
        },
      ],
    },

    // --- Secure Web & FTP Services ---
    {
      columns: [
        {
          type: "text",
          heading: "Secure Web & FTP Services",
          body: "Web and FTP services were deployed inside the DMZ behind the pfSense boundary, reachable through a login portal served over HTTPS. Digital certificates generated with OpenSSL secured the connection.",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/web_https.png",
          caption: "Login portal served over HTTPS for the Network Security course application.",
          alt: "HTTPS login portal",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/https_implementado.png",
          caption: "Browser security panel confirming TLS 1.3 encryption on the HTTPS connection.",
          alt: "Browser TLS certificate verification",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/ftp_implementado.png",
          caption: "FTP server configuration deployed inside the DMZ.",
          alt: "FTP server configuration",
        },
      ],
    },

    // --- Monitoring & Performance Validation ---
    {
      columns: [
        {
          type: "text",
          heading: "Monitoring & Performance Validation",
          body: "Zabbix tracked asset availability and performance across the topology, while iperf was used to benchmark throughput between hosts, consistently measuring around 2 Gbit/s with low retransmission counts.",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/iperf_exec.png",
          caption: "iperf throughput test between internal hosts, sustaining around 2 Gbit/s.",
          alt: "iperf bandwidth test results",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/ospf2.png",
          caption: "Traceroute validating OSPF path selection across the backbone and NAT boundary.",
          alt: "Traceroute output validating OSPF routing",
        },
        {
          type: "text",
          body: "OSPF convergence was validated by tracing routes across the backbone and confirming consistent hop-by-hop latency from the internal VLANs out through the NAT boundary.",
        },
      ],
    },

    // --- Offensive Validation ---
    {
      columns: [
        {
          type: "text",
          heading: "Offensive Validation",
          body: "The Blue Team's controls were tested through a custom DIALOG-based console offering ARP spoofing, denial-of-service, Nmap scanning, and a general connectivity check as selectable attack modes.",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/dialog.png",
          caption: "Custom DIALOG-based console used to orchestrate the offensive test scenarios.",
          alt: "DIALOG attack console menu",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/arp_spoof_code.png",
          caption: "Scapy-based Python script implementing the ARP spoofing attack.",
          alt: "ARP spoofing Python script",
        },
        {
          type: "text",
          body: "ARP spoofing was executed with a Scapy-based Python script that poisoned the target's ARP table, visibly corrupting its cached entries.",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/atack2_1.png",
          caption: "TCP SYN flood execution and its impact on target latency.",
          alt: "TCP SYN flood denial-of-service test",
        },
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/atack3_1.png",
          caption: "Nmap scan results enumerating open ports and services on a target host.",
          alt: "Nmap scan results",
        },
      ],
    },
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/network-security-soc-lab/heartbleed.png",
          caption: "Illustration of the Heartbleed memory-disclosure mechanism explored against OpenSSL.",
          alt: "Heartbleed vulnerability diagram",
        },
        {
          type: "note",
          body: "A Heartbleed exploitation attempt against the OpenSSL deployment was investigated as a stretch goal. The underlying memory-disclosure mechanism was studied and reproduced theoretically, though working exploitation against this specific configuration remained an open thread for future iterations.",
        },
      ],
    },
  ],

  team: [
    {
      name: "Vinícius Giovani Moreira Nascimento",
      role: "Network Security Engineer & Project Co-Author",
      institution: "University of Brasília",
    },
    {
      name: "Hugo Salomão Studart Szerwinski",
      role: "Project Co-Author",
      institution: "University of Brasília",
    },
  ],

  institutions: [
    {
      name: "University of Brasília (UnB)",
    },
  ],

  highlights: [
    "Highest grade achieved in the Network Security course",
    "Designed and deployed a complete two-campus enterprise network architecture in GNS3",
    "Built a resilient OSPF-based triangular backbone using VyOS routers",
    "Configured department-level VLANs and Layer-3 switching with ExOS across two campuses",
    "Implemented dual-firewall architecture using pfSense with DMZ/MZ segmentation",
    "Integrated Snort IDS for real-time threat detection",
    "Integrated Zabbix for infrastructure monitoring and Wazuh for SIEM capabilities",
    "Implemented HTTPS using OpenSSL-generated certificates",
    "Orchestrated ARP spoofing, TCP SYN flood, and Nmap scan attacks via a custom DIALOG console",
    "Investigated Heartbleed exploitation against the OpenSSL deployment as an offensive research exercise",
  ],

  links: {
    report: "",
  },
};

export default detail;
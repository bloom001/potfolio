export interface SkillDetail {
  name: string;
  category: string;
  description: string;
  level: "Proficient" | "Advanced" | "Foundational" | "Expert" | "Core";
  keyConcepts: string[];
  useCases: string[];
}

export const SKILL_DETAILS: Record<string, SkillDetail> = {
  // Programming & Frontend
  "C": {
    name: "C Programming Language",
    category: "Programming",
    description: "A foundational procedural programming language known for extreme efficiency, low-level memory management, and system-level capability. It forms the core engine for operating systems and critical security kernels.",
    level: "Proficient",
    keyConcepts: ["Pointers & Memory Addressing", "Dynamic Memory Allocation (malloc/free)", "Structures & File I/O Operations", "Bitwise Manipulations"],
    useCases: ["Operating System Kernels", "Embedded Systems Dev", "Performance-Critical Tooling", "Exploit Development"]
  },
  "C++": {
    name: "C++ Programming Language",
    category: "Programming",
    description: "An extension of C incorporating Object-Oriented Programming (OOP) paradigms. It enables structural complexity while preserving bare-metal performance, widely used in game engines, browsers, and systems software.",
    level: "Proficient",
    keyConcepts: ["Classes, Inheritance & Polymorphism", "Standard Template Library (STL)", "RAII & Smart Pointers", "Multi-threading & Memory Models"],
    useCases: ["Game Engine Architecture", "High-Frequency Trading Platforms", "Cryptographic Libraries", "Desktop Application Development"]
  },
  "Python": {
    name: "Python",
    category: "Programming",
    description: "A highly versatile, readable, interpreted programming language. In cybersecurity, it is the industry standard for writing automated exploit scripts, network packets generation, and security audit scripts.",
    level: "Proficient",
    keyConcepts: ["Scripting & Task Automation", "Socket Programming & Network Audits", "Data Analysis & Web Scraping", "Custom Cyber Exploit Payloads"],
    useCases: ["Security Automation Scripts", "AI/ML Model Training", "Rapid Prototype Mockups", "Penetration Testing Utilities"]
  },
  "Java": {
    name: "Java",
    category: "Programming",
    description: "A class-based, object-oriented programming language designed to run anywhere via the JVM. It is the enterprise standard for building high-scale backends and robust android mobile application systems.",
    level: "Proficient",
    keyConcepts: ["Java Virtual Machine (JVM) & Garbage Collection", "Multithreaded Concurrent Execution", "Enterprise Spring Boot Frameworks", "Robust Type Safety & Exception Handling"],
    useCases: ["Enterprise Scale Servers", "Android Mobile Apps", "Data Processing Systems", "Secure Corporate Software Services"]
  },
  "React": {
    name: "React.js",
    category: "Programming & Frontend",
    description: "A popular, declarative JavaScript library created by Meta for building interactive, component-driven user interfaces. It underpins modern web development with standard virtual DOM reconciliation.",
    level: "Proficient",
    keyConcepts: ["Component Lifecycle & React Hooks", "State Management & Context API", "Virtual DOM & Dynamic UI Rendering", "Single-Page App Routing & HMR"],
    useCases: ["Interactive Web Applications", "DApp Frontend Dashboards", "Cross-Platform Mobile Apps (Native)", "Dynamic User Interfaces"]
  },
  "HTML": {
    name: "HTML5",
    category: "Programming & Frontend",
    description: "The primary markup language for creating structural content displayed on the World Wide Web. Supports semantic elements, offline capabilities, and native media formats.",
    level: "Proficient",
    keyConcepts: ["Semantic DOM Trees", "SEO & Accessibility Best Practices", "Forms & Input Validations", "Canvas & Multimedia Embeds"],
    useCases: ["Web Document Formatting", "Portfolio Structuring", "SEO-optimized Content Layouts", "Client-side Web Forms"]
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    category: "Tools & Styling",
    description: "A utility-first CSS framework for rapid UI styling. It provides atomic design primitives to construct rich, responsive, and custom styles directly in HTML/JSX without stylesheet files.",
    level: "Proficient",
    keyConcepts: ["Utility-First CSS Atoms", "Responsive Layout Breakpoints", "Dark Mode Styling Configurations", "Tailwind Custom Theme Extensions"],
    useCases: ["Responsive Portfolio Styling", "Sleek Dark/Light Mode Themes", "Rapid CSS Component Styling", "Custom Grid Systems"]
  },

  // Blockchain & Web3
  "Ethereum": {
    name: "Ethereum Network",
    category: "Blockchain & Web3",
    description: "The leading decentralized public ledger platform that introduced programmable smart contracts. It operates as a global virtual computer (EVM) for executing secure peer-to-peer applications.",
    level: "Advanced",
    keyConcepts: ["EVM Gas Mechanism & Transactions", "Consensus (Proof-of-Stake / PoS)", "Nodes & JSON-RPC Provider API", "Public/Private Cryptography Keypairs"],
    useCases: ["Decentralized Applications (DApps)", "Tokenization & DeFi Protocols", "Smart Contract Automations", "Secure Digital Identities"]
  },
  "Solidity": {
    name: "Solidity",
    category: "Blockchain & Web3",
    description: "A statically-typed curly-brackets language designed specifically for compiling smart contracts targeted for the Ethereum Virtual Machine (EVM). It focuses on safety, state preservation, and crypto-economic rules.",
    level: "Advanced",
    keyConcepts: ["Smart Contract Lifecycle & Inheritance", "State Variables & Memory Layout", "Security Patterns (Reentrancy Guard)", "Custom Solidity Events & Modifiers"],
    useCases: ["ERC-20/ERC-721 Token Contracts", "Decentralized Voting Protocols", "Multi-Signature Wallets", "DeFi Yield Protocols"]
  },
  "Smart Contracts": {
    name: "Smart Contracts",
    category: "Blockchain & Web3",
    description: "Self-executing protocols containing agreement conditions directly encoded in software. Once deployed to a blockchain network, they execute deterministically and are completely immutable.",
    level: "Advanced",
    keyConcepts: ["Deterministic Code Execution", "Immutable Network Storage", "Cryptographic Access Controls", "EVM Gas Optimization Strategies"],
    useCases: ["Trustless Asset Escrow", "On-Chain Governance Systems", "Automated Token Swaps", "Provable Digital Claims"]
  },
  "Web3.js": {
    name: "Web3.js",
    category: "Blockchain & Web3",
    description: "A key library suite enabling JavaScript/TypeScript client applications to establish RPC connections with Ethereum nodes, query smart contracts, and send cryptographically signed transactions.",
    level: "Advanced",
    keyConcepts: ["Ethers/Web3 Provider Connections", "Contract ABIs & Instance Generation", "Event Listeners & Log Filters", "Signed Transaction Dispatching"],
    useCases: ["Frontend MetaMask Integrations", "Blockchain Block Exploitation Watchers", "Off-chain Data Synchronization", "Scripted Node Operations"]
  },
  "DApps": {
    name: "Decentralized Applications (DApps)",
    category: "Blockchain & Web3",
    description: "Software programs that reside and run on peer-to-peer blockchain networks instead of a centralized hosting server. They ensure server-less uptime, trustless executions, and user data ownership.",
    level: "Advanced",
    keyConcepts: ["Web3 Client Integration Architecture", "Wallet Provider Connections", "Smart Contract Event Updates", "Decentralized Hosting Options"],
    useCases: ["DeFi Exchange Interfaces", "On-chain Governance Portals", "Secure Ballot Voting Terminals", "Crypto Marketplace Frontends"]
  },
  "End-to-End Encryption": {
    name: "End-to-End Encryption (E2EE)",
    category: "Cryptography & Web3",
    description: "A communication security model where data is encrypted on the sender's device and decrypted only on the recipient's. Intermediaries or hosts cannot access the raw payload.",
    level: "Advanced",
    keyConcepts: ["Symmetric & Asymmetric Ciphers", "Cryptographic Diffie-Hellman Key Exchange", "Public Key Infrastructure (PKI)", "HMAC Data Integrity Validation"],
    useCases: ["Secure Messaging Platforms", "Encrypted Ballot Transmissions", "Private Database Backups", "Confidential Smart Contract Inputs"]
  },
  "Cryptography": {
    name: "Cryptography",
    category: "Blockchain & Cryptography",
    description: "The study and application of mathematical protocols to secure communication systems, verify identity, and ensure data integrity against active adversarial surveillance.",
    level: "Advanced",
    keyConcepts: ["Hashing Functions (SHA-256, Keccak-256)", "Asymmetric Encryption (RSA, ECC)", "Digital Signatures (ECDSA)", "Zero-Knowledge Proofs (ZKP) basics"],
    useCases: ["Blockchain Block Hashing", "HTTPS SSL/TLS Handshakes", "Secure User Passwords Storage", "Identity Token Verification"]
  },

  // Cybersecurity
  "Network Security": {
    name: "Network Security",
    category: "Cybersecurity",
    description: "The structural design and deployment of defense policies to protect computer networks and network-accessible resources from unauthorized modifications, sniffing, or disruption.",
    level: "Proficient",
    keyConcepts: ["Firewall Configurations & DMZs", "Intrusion Detection Systems (IDS/IPS)", "Subnetting & Network Access Controls (ACLs)", "Virtual Private Networks (VPNs) & SSL/TLS"],
    useCases: ["Corporate Intranet Protection", "Secure Communication Trunks", "Defense Against DDoS Exploits", "Remote Access Protection"]
  },
  "Ethical Hacking": {
    name: "Ethical Hacking",
    category: "Cybersecurity",
    description: "The authorized practice of proactively bypassing digital boundaries to find vulnerabilities, document security weaknesses, and provide technical fixes to strengthen target defenses.",
    level: "Advanced",
    keyConcepts: ["Reconnaissance & Footprinting", "Vulnerability Discovery & Auditing", "Secure System Exploitation Labs", "Post-Exploitation Remediation Reports"],
    useCases: ["Corporate Defense Assessments", "Security Team Training Labs", "Authorized Red Team Simulation", "Bug Bounty Hunting Program"]
  },
  "Penetration Testing": {
    name: "Penetration Testing (Pentesting)",
    category: "Cybersecurity",
    description: "A simulated, controlled cyberattack executed against digital networks, host servers, or applications to discover exploitable vulnerabilities and validate defense effectiveness.",
    level: "Advanced",
    keyConcepts: ["OWASP Top 10 Application Vulnerabilities", "Active Directory Hacking Tactics", "Custom Security Script Adaptations", "Network Packet Sniffing & Audits"],
    useCases: ["Annual Compliance Audits", "Application Security Verifications", "Infrastructure Boundary Tests", "Vulnerability Patch Validations"]
  },
  "Vulnerability Analysis": {
    name: "Vulnerability Analysis",
    category: "Cybersecurity",
    description: "The systemic cataloging, assessment, and scoring (CVSS) of security gaps in network software configurations. It helps security teams prioritize software patching cycles.",
    level: "Advanced",
    keyConcepts: ["Automated Scanner Logs (Nessus, Nmap)", "CVE & NVD Exploits Catalog Mapping", "CVSS Risk Scoring Assessment", "Risk Mitigation & Patch Strategies"],
    useCases: ["Enterprise Vulnerability Scans", "System Architecture Threat Modeling", "Compliance Standards Mapping", "Software Patch Priority Logs"]
  },
  "Threat Intelligence": {
    name: "Threat Intelligence",
    category: "Cybersecurity",
    description: "The collection, sorting, and analysis of details regarding active attackers, malware campaigns, and advanced persistent threat (APT) groups to adapt network firewall blocklists.",
    level: "Proficient",
    keyConcepts: ["Indicators of Compromise (IoC)", "MITRE ATT&CK Matrix Framework", "Threat Actors TTP Profiling", "OSINT Research Platforms"],
    useCases: ["SOC Firewall Rule Adjustments", "Threat Assessment Reports", "Proactive Network Threat Hunting", "Strategic Security Planning"]
  },
  "Incident Response": {
    name: "Incident Response",
    category: "Cybersecurity",
    description: "The structured process followed by SOC teams to detect, contain, investigate, and recover from network security breaches, aiming to minimize damage and restore operation safety.",
    level: "Proficient",
    keyConcepts: ["IR Lifecycle (Preparation to Post-Mortem)", "Breach Containment Strategies", "SOC Alert Triage Protocols", "Lessons Learned Documentation"],
    useCases: ["Active Attack Containment", "System Recovery Planning", "Breach Cause Root Investigations", "Corporate Incident Reporting"]
  },
  "Digital Forensics": {
    name: "Digital Forensics",
    category: "Cybersecurity",
    description: "The rigorous extraction, imaging, and analysis of digital evidence from hard drives, volatile RAM, and system log files to construct an audit trail for legal review.",
    level: "Proficient",
    keyConcepts: ["Cryptographic Hash Chain-of-Custody", "RAM Dump Volatility Auditing", "Deleted File Recovery & Analysis", "Server Access Logs Analysis"],
    useCases: ["Post-Breach Technical Audits", "Legal Evidence Submissions", "Malware Payload File Analysis", "Intruder Path Mapping"]
  },

  // Tools & DB
  "Git & GitHub": {
    name: "Git & GitHub Version Control",
    category: "Tools & Databases",
    description: "Git is a decentralized version control system to record code changes. GitHub is a web-based repository platform supporting team code reviews, CI/CD pipelines, and project organization.",
    level: "Proficient",
    keyConcepts: ["Git Branching & Rebase Workflows", "Pull Requests & Code Reviews", "Merge Conflict Resolution", "GitHub Actions CI/CD Scripts"],
    useCases: ["Team Codebase Management", "Software Version Trackkeeping", "Automated Build Pipelines", "Open Source Collaborations"]
  },
  "Kali Linux (foundational)": {
    name: "Kali Linux OS",
    category: "Tools & Databases",
    description: "A specialized Debian-derived Linux distribution custom built for digital forensics, ethical hacking, and penetration testing. It ships with hundreds of built-in security utilities.",
    level: "Proficient",
    keyConcepts: ["Linux Terminal & Shell Configurations", "Kernel Privilege Escalations", "System Daemon Services Management", "Custom Repositories & Pentesting Tools"],
    useCases: ["Offensive Pentesting Standard OS", "Security Vulnerability Research Labs", "Secure Network Auditing Hub", "Custom Shell Tool Development"]
  },
  "Wireshark (foundational)": {
    name: "Wireshark Packet Analyzer",
    category: "Tools & Databases",
    description: "The leading graphical network packet analyzer. It intercepts and dissects raw network packets running over interfaces to debug communication issues or spot malicious exfiltrations.",
    level: "Proficient",
    keyConcepts: ["Packet Capture Filter Syntaxes", "TCP Stream Reconstructions", "Protocol Dissection & Analysis", "Malicious Payload Inspection"],
    useCases: ["Network Protocol Debugging", "SOC Attack Payload Analysis", "Sniffing Cleartext Insecurities", "Malicious Activity Packet Audits"]
  },
  "RDBMS": {
    name: "RDBMS (Relational Databases)",
    category: "Tools & Databases",
    description: "Relational Database Management Systems organize structured records in tabular forms with key relationships, ensuring data consistency via ACID compliance.",
    level: "Proficient",
    keyConcepts: ["Database Schema Relational Design", "Normalization Normal Forms (1NF-3NF)", "ACID Transaction Rules", "Index Optimizations & Constraints"],
    useCases: ["Structured System Records Storage", "Data Inventory Management", "Secure Transaction Logs", "Enterprise Database Backends"]
  },
  "SQL": {
    name: "SQL (Structured Query Language)",
    category: "Tools & Databases",
    description: "The global declarative syntax standard for querying, inserting, updating, and managing databases. It includes subcomponents for data definition, manipulation, and access controls.",
    level: "Proficient",
    keyConcepts: ["Complex Table Join Queries", "Aggregation & Analytic Functions", "SQL Injection Security Audits", "Query Execution Plan Profiles"],
    useCases: ["Database Inventory Querying", "Defense Against SQLi Attacks", "Server-Side Script Database Access", "Large Dataset Sorting Operations"]
  },

  // Soft Skills
  "Analytical Thinking": {
    name: "Analytical Thinking",
    category: "Soft Skills",
    description: "The ability to decompose complex, ambiguous issues into manageable segments, evaluating threat vectors systematically to identify core technical solutions.",
    level: "Core",
    keyConcepts: ["Deconstruct Complex Gaps", "Data-Driven Logic Evaluation", "Root Cause Analysis Protocols", "Hypothesis testing & verification"],
    useCases: ["Threat Log Analysis", "Incident Response Auditing", "Exploit Path Assessment", "Technical Problem Debugging"]
  },
  "Problem-Solving": {
    name: "Problem-Solving",
    category: "Soft Skills",
    description: "The capability to address code compilation issues, configuration misalignments, or security incidents by locating and deploying reliable patches under active constraints.",
    level: "Core",
    keyConcepts: ["Troubleshooting Path Execution", "Alternative Solution Analysis", "Agile Fix Implementations", "Verification & Feedback Loops"],
    useCases: ["Debugging Compiler Failures", "Mitigating Production Breaches", "Optimizing Smart Contract Gas", "Database Queries Troubleshooting"]
  },
  "Time Management": {
    name: "Time Management",
    category: "Soft Skills",
    description: "The operational capacity to sort project goals, schedule coding benchmarks, and allocate resources efficiently to deliver applications on time.",
    level: "Core",
    keyConcepts: ["Task Prioritization Models", "Milestone Tracking Schedules", "Sprint Planning Principles", "Focus Blocks & Minimizing Waste"],
    useCases: ["Balancing Academy & Projects", "Completing Hackathons on Time", "Coordinating Dual Security Internships", "Deploying Scheduled Software Cycles"]
  },
  "Team Collaboration": {
    name: "Team Collaboration",
    category: "Soft Skills",
    description: "The practice of working in synchrony with designers, frontend developers, and security analysts using git workflows, clear written reports, and open feedback.",
    level: "Core",
    keyConcepts: ["Active Professional Communication", "Git Branch Integration Syncs", "Constructive Peer Code Reviews", "Supporting Diverse Technical Roles"],
    useCases: ["Hackathon Team Projects", "Open Source Pull Requests", "Joint Security Research Labs", "Agile Sprint Development Syncs"]
  },
  "Continuous Learning": {
    name: "Continuous Learning",
    category: "Soft Skills",
    description: "The committed habit of updating skills in response to emerging CVE databases, novel solidity optimization practices, and new frontend web development standards.",
    level: "Core",
    keyConcepts: ["Tracking CVE & Cyber Exploit Lists", "Exploring Newer Frameworks (Next.js)", "EVM Cryptography Innovations", "Security Certifications Audits"],
    useCases: ["Staying Abreast of Zero-Day News", "Updating Legacy Portfolios", "Adapting Tools for Latest OS Patch", "Earning Security Badges & Certs"]
  },

  // Additional Cert Skills / Details
  "Network Auditing": {
    name: "Network Auditing",
    category: "Cybersecurity & Operations",
    description: "A comprehensive inspection of the hardware configuration, connection settings, and system firewalls of a network. Focuses on discovering policy mismatches and rogue open ports.",
    level: "Advanced",
    keyConcepts: ["Port Scans & Service Detections", "Asset Inventory Discovery", "Firewall Rule Compliance Audits", "Cleartext Protocol Detections"],
    useCases: ["Corporate Infrastructure Compliance", "Pre-deployment Security Checklists", "Detecting Rogue Devices in Network", "Internal Security Benchmarks"]
  },
  "Security Assessment": {
    name: "Security Assessment",
    category: "Cybersecurity & Operations",
    description: "A technical evaluation of an organization's overall cyber risk profile, evaluating policies, physical server configurations, and endpoint protections.",
    level: "Advanced",
    keyConcepts: ["Risk Identification Frameworks", "Policy Alignment Inspections", "Endpoint Protection Verifications", "Cyber Security Posture Scores"],
    useCases: ["Security Readiness Verification", "Third-Party Vendor Risk Audits", "Executive Threat Review Logs", "Compliance Standard Gap Analysis"]
  },
  "Vulnerability Exploitation": {
    name: "Vulnerability Exploitation",
    category: "Cybersecurity & Hacking",
    description: "The practical verification of discovered software bugs by using safe, documented shell codes or scripts (like Metasploit) to verify if a system can actually be breached.",
    level: "Advanced",
    keyConcepts: ["Exploit Payload Generations", "Metasploit Framework Utilities", "Buffer Overflow Proof of Concepts", "Bypassing Simple Shell Boundaries"],
    useCases: ["Validating Pentesting Reports", "Securing System Kernels", "Improving Intrusion Detections", "Demonstrating Cyber Breach Impact"]
  },
  "SOC Operations": {
    name: "SOC Operations (Security Operations Center)",
    category: "Cybersecurity & Operations",
    description: "The front-line monitoring and analysis of security alerts across an organization's digital networks, resolving simple alerts and forwarding major incidents to response teams.",
    level: "Advanced",
    keyConcepts: ["SIEM Log Monitoring (Splunk, Elastic)", "Security Alerts Triage Actions", "Endpoint Detection & Response (EDR)", "Incident Log Chronology Mapping"],
    useCases: ["24/7 Security Threat Monitoring", "Malicious Activity Alerts Analysis", "Network Intrusion Alert Response", "SOC Dashboard Visual Configurations"]
  },
  "Incident Analysis": {
    name: "Incident Analysis",
    category: "Cybersecurity & Operations",
    description: "The analytical process of sorting through system memory dumps, process histories, and network logs post-breach to determine the root cause and entry vector of an attack.",
    level: "Advanced",
    keyConcepts: ["Attack Timeline Reconstruction", "Malware Behavior Analysis", "SIEM Event Correlation", "Evidence Preservation Rules"],
    useCases: ["SOC Breach Investigation Reports", "Post-Incident Forensic Briefs", "Identifying Attack Vector Origins", "Hardening Targets Against Repeat Attacks"]
  },
  "Defensive Security Controls": {
    name: "Defensive Security Controls",
    category: "Cybersecurity & Operations",
    description: "The design, deployment, and testing of hardware firewalls, endpoint antivirus agents, patch routines, and multi-factor logins to shield system interfaces from active exploit runs.",
    level: "Advanced",
    keyConcepts: ["Antivirus EDR Alert Rules", "Network Firewall Rule Policies", "Multi-Factor Authentication (MFA)", "Least Privilege Access Model"],
    useCases: ["Enterprise Host Hardening", "Segmenting Critical Network Areas", "Securing Identity Access Controls", "System Patch Management Automation"]
  }
};

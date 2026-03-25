// Conference Data for NGETI 2026

export const conferenceInfo = {
  name: "NGETI 2026",
  fullName: "International Conference on Next Generation Engineering and Technology Innovations",
  dates: "04-05 December 2026",
  venue: "Viswajyothi College of Engineering and Technology",
  location: "Vazhakulam, Ernakulam, Kerala, India",
  theme: "Next-Generation Technologies for a Smarter, Safer, and Sustainable World",
  url: "www.NGETI.com",
  organizers: ["IEEE Kerala Section", "Viswajyothi College of Engineering and Technology"],
};

export const importantDates = [
  { label: "Call for Papers Announcement", date: "01 May 2026", status: "upcoming" },
  { label: "Draft Paper Submission Deadline", date: "31 July 2026", status: "upcoming" },
  { label: "Notification of Acceptance", date: "15 October 2026", status: "upcoming" },
  { label: "Camera-Ready Paper Submission", date: "10 November 2026", status: "upcoming" },
  { label: "Conference Dates", date: "04-05 December 2026", status: "upcoming" },
];

export const tracks = [
  {
    id: 1,
    title: "Artificial Intelligence and Advanced Computing Paradigms",
    coordinator: "Dr Sarika S, Professor, Adi Shankara Institute of Engineering and Technology, Kalady",
    topics: [
      "General AI and Large Language Models",
      "Quantum Computing",
      "AI Driven Automation and Autonomous Systems",
      "Edge Computing with AI (AIoT)",
      "Ethical AI, Transparency and Regulation (AI TRiSM)",
      "Advanced Cyber Security Measures",
      "Neuromorphic Computing",
      "Digital Twins and Simulation",
      "Extended Reality (XR) and Spatial Computing",
      "Computation & AI",
    ],
  },
  {
    id: 2,
    title: "Emerging Trends and Applications in Computer Science",
    coordinator: "Dr. Anishin Raj MM, Professor, MITS, Kochi",
    topics: [
      "Data Mining",
      "Big Data and Data Analytics",
      "IoT",
      "Cyber Physical Systems",
      "Smart Cities and Machine-to-Machine Communication",
      "Blockchain Technologies",
      "Digital Transformation",
      "Industry 4.0 and Digital Twins",
      "Cloud IoT Integration",
      "Computer Vision and Image processing",
      "AR, VR and MR",
      "Smart Mobility and Intelligent Transportation Systems",
      "Robotics and Autonomous Systems",
    ],
  },
  {
    id: 3,
    title: "Communication, VLSI and Embedded Systems",
    coordinator: "Dr. Siddharth Shelly, Associate Professor, MACE, Kothamangalam",
    topics: [
      "Next generation wireless communication and network systems",
      "Wireless sensor networks",
      "Antenna and RF Engineering",
      "Advanced VLSI and computing architecture",
      "Robotics and control systems",
      "Intelligent signal, image and video processing",
      "Embedded, IoT and smart applications",
      "Design & Control",
      "Nano Electronics and Nano Technology",
      "Applications of Remote Sensing",
    ],
  },
  {
    id: 4,
    title: "Power and Automation",
    coordinator: "Dr. Sindu T K, NIT Calicut",
    topics: [
      "Role of Nuclear Energy for Nation’s Power Security",
      "Renewable and Sustainable Energy Systems",
      "Smart Grids and Microgrids",
      "Energy Conservation and Storage using AI",
      "Electric Vehicles (EVs) and Transportation Electrification",
      "Energy Efficiency and Power Quality",
      "Industrial Automation and Robotics",
      "Sensors and Instrumentation",
    ],
  },
];

export const indianRegistrationFees = [
  { category: "Students", ieee: "₹6,000", nonIeee: "₹6,500" },
  { category: "Faculty & Research Scholars", ieee: "₹6,500", nonIeee: "₹7,500" },
  { category: "Delegates from Industry", ieee: "₹7,000", nonIeee: "₹8,000" },
  { category: "Attendee/Second Author", ieee: "₹2,000", nonIeee: "₹2,500" },
];

export const foreignRegistrationFees = [
  { category: "Students", ieee: "$200", nonIeee: "$250" },
  { category: "Faculty & Research Scholars", ieee: "$300", nonIeee: "$350" },
  { category: "Delegates from Industry", ieee: "$350", nonIeee: "$400" },
  { category: "Listener/Second Author", ieee: "$150", nonIeee: "$200" },
];

export const committeeMembers = {
  generalChairs: [
    {
      name: "Dr. K. K. Rajan",
      designation: "Principal",
      affiliation: "Viswajyothi College of Engineering and Technology",
    },
    {
      name: "Dr. Shine George",
      designation: "Assoc. Professor & Coordinator Autonomous Activities, HoD (Civil Engg.)",
      affiliation: "Viswajyothi College of Engineering and Technology",
    },
  ],
  tpcChairs: [
    {
      name: "Dr. Neelakantan P. C.",
      designation: "Professor & Principal",
      affiliation: "Muthoot Institute of Technology, Kerala",
      isIeee: true,
      ieeeTitle: "Senior Member, IEEE",
    },
    {
      name: "Dr. Thomas George",
      designation: "Professor & Principal",
      affiliation: "Mar Baselios Institute of Technology and Science, Kerala",
    },
    {
      name: "Dr. Shanmugesh K",
      designation: "Professor & HoD (Mechanical Engg.)",
      affiliation: "Viswajyothi College of Engineering and Technology, Kerala",
    },
  ],
  publicationChairs: [
    {
      name: "Dr. Soni Kurian",
      designation: "Assoc. Professor & HoD (Electrical and Electronics Engg.)",
      affiliation: "Viswajyothi College of Engineering and Technology, Kerala",
    },
  ],
  technicalProgramChairs: [
    {
      name: "Dr. Anita Brigit Mathew",
      designation: "Assoc. Professor & HoD (Artificial Intelligence and Data Science)",
      affiliation: "Viswajyothi College of Engineering and Technology, Kerala",
    },
  ],
  publicityChairs: [
    {
      name: "Dr. Amel Austine",
      designation: "Assoc. Professor & HoD (CSE)",
      affiliation: "Viswajyothi College of Engineering and Technology, Kerala",
    },
  ],
  financeChairs: [
    {
      name: "Dr. K V Thomas",
      designation: "Treasurer, Diocean Technical Education Trust",
      affiliation: "Viswajyothi College of Engineering and Technology, Kerala",
    },
  ],
  organizingChair: {
    name: "Dr. Peter Reji Ramanatt",
    designation: "Organizing Chair",
    affiliation: "Viswajyothi College of Engineering and Technology",
  },
};

export const institutionInfo = {
  name: "Viswajyothi College of Engineering and Technology",
  established: 2001,
  affiliation: "Mahatma Gandhi University, Kottayam",
  autonomous: 2025,
  studentStrength: 2200,
  facultyStrength: 150,
  branches: 8,
  ranking: "14th position among Engineering Colleges under KTU in Kerala, 4th among self-financing Engineering Colleges",
  accreditations: {
    naac: "A Grade (valid till January 2028)",
    nba: "Five programmes till June 2025",
  },
  ieeeStudentBranch: {
    active: true,
    years: 20,
    membership: { 2023: 121, 2024: 149, 2025: 95 },
  },
  societyChapters: [
    "Computer Society",
    "Power and Energy Society",
    "Signal Processing Society",
    "Women in Engineering",
    "Special Interest Group on Humanitarian Technology (SIGHT)",
  ],
  url: "https://vjcet.org/",
  description: "The college was established in 2001 after obtaining approval from AICTE to commence operations as a self-financing Engineering College affiliated with Mahatma Gandhi University, Kottayam. The college started initially with three branches Computer Science, Electronics and Communication Engineering and Information Technology. At present the institution has eight branches in Engineering along with MBA and Bachelor of Hotel Management and Catering Technology. The current student strength is around 2200 and the faculty strength is 150. The College secured 14th position among Engineering Colleges under KTU in the state and stands at an impressive 4th position among self-financing Engineering Colleges. The college was declared Autonomous in 2025.",
};

export const submissionGuidelines = {
  paperFormat: "IEEE 2-column conference paper format",
  maxPages: 6,
  maxPagesAllowed: 8,
  extraPageFee: { indian: "₹500", foreign: "$20" },
  reviewType: "Blind Peer Review",
  reviewers: "2-3 reviewers per paper",
  targetAcceptanceRate: "30%",
  plagiarismTool: "Turnitin",
  submissionTool: "Microsoft Conference Management Tool (CMT)",
};

// Navigation structure matching RECCAP style
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "#",
    label: "Conference",
    children: [
      { href: "/conference/author-guidelines", label: "Author Guidelines" },
      { href: "/conference/call-for-papers", label: "Call for Papers" },
      { href: "/conference/important-dates", label: "Important Dates" },
      { href: "/conference/registration-fees", label: "Registration Fees" },
      { href: "/conference/committee", label: "Committee" },
    ]
  },
  { href: "/venue", label: "Venue" },
  { href: "/contact", label: "Contact" },
];

export const authorGuidelines = [
  {
    title: "Paper Format",
    items: [
      "All papers must be written in English",
      "Papers must follow IEEE 2-column conference paper format",
      "Use the official IEEE conference template",
      "Font: Times New Roman, 10pt for body text",
      "Paper size: US Letter (8.5\" x 11\")",
    ]
  },
  {
    title: "Page Limits",
    items: [
      "Minimum paper length: 4 pages",
      "Maximum paper length: 6 pages (standard)",
      "Up to 8 pages allowed with extra page fee",
      "Extra page fee: ₹500 (Indian) / $20 (Foreign) per page",
    ]
  },
  {
    title: "Submission Requirements",
    items: [
      "Papers must be original and not under review elsewhere",
      "Submit in PDF format only",
      "Maximum file size: 10 MB",
      "No author information in the initial submission (blind review)",
      "Include abstract (150-250 words) and 4-6 keywords",
    ]
  },
  {
    title: "Review Process",
    items: [
      "All submissions undergo blind peer review",
      "Each paper reviewed by 2-3 expert reviewers",
      "Plagiarism check using Turnitin",
      "Target acceptance rate: ~30%",
      "Authors notified via email upon decision",
    ]
  },
  {
    title: "Camera-Ready Submission",
    items: [
      "Include author names and affiliations in final version",
      "Address all reviewer comments",
      "Complete IEEE copyright form",
      "At least one author must register before submission",
      "Follow exact formatting guidelines from acceptance email",
    ]
  },
];

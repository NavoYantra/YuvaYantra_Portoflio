export interface LabItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  imagePlaceholder: string;
  image?: string;
}

export interface KitItem {
  id: string;
  name: string;
  track: "Robotics" | "Artificial Intelligence" | "IoT" | "Coding";
  description: string;
  classLevel: string;
  features: string[];
  shopUrl: string;
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Government Tender" | "Industry" | "Collaboration" | "Education";
  summary: string;
  location?: string;
  client?: string;
  details: string;
  tags: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "STEM Education" | "Lab Guides" | "Industry" | "Projects" | "News";
  date: string;
  readTime: string;
  summary: string;
  content: string;
  featured?: boolean;
  image?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship";
  description: string;
  requirements: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Labs" | "Workshops" | "Teacher Training" | "Products" | "Events";
  caption: string;
  image: string;
  aspect?: "tall" | "wide" | "square";
}

// Company Information
export const COMPANY_INFO = {
  name: "YuvaYantra Technology Pvt. Ltd.",
  legalName: "YuvaYantra Technology Private Limited",
  brandName: "YuvaYantra",
  educationBrand: "NavoYantra – STEM Kits & Lab Solutions",
  tagline: "MAKE IN INDIA. MAKE FOR THE FUTURE.",
  headline: "Indigenous technology for classrooms and industry",
  subheadline: "We design and manufacture robotics, AI, IoT, drone and automation technology, and set up future-ready labs for schools, colleges and industry.",
  phone1: "+91 95825 28010",
  phone2: "+91 87965 99974",
  emailOfficial: "official@yuvayantra.com",
  emailFounder: "rohit@yuvayantra.com",
  shopUrl: "https://shop.navoyantra.com",
  address: "1/10726-A, KH No. 1622/62, Gali No. 2, Subhash Park, Naveen Shahdara, Delhi – 110032",
  cin: "U32909DL2025PTC443237",
  gstin: "07AABCY9617P1ZJ",
  incorporatedDate: "24 February 2025, New Delhi",
  grievanceOfficer: {
    name: "Rohit Rathore",
    designation: "Director & Grievance Redressal Officer",
    email: "rohit@yuvayantra.com",
    officialEmail: "official@yuvayantra.com",
    phone: "+91 95825 28010",
  },
  founder: {
    name: "Rohit Rathore",
    title: "FOUNDER & DIRECTOR",
    education: "B.Tech, Automation & Robotics, USAR, GGSIPU",
    message: [
      "I grew up in a family of entrepreneurs, and I have always been drawn to technology. YuvaYantra is where those two passions meet.",
      "While studying Automation & Robotics, I saw how much talent our students have, and how few get real, hands-on exposure early on. I also saw how much of our industry's technology is still imported. We started YuvaYantra to change both.",
      "When Indian students learn by building, and Indian industry runs on Indian-made technology, the whole country moves forward. We would be glad to build that future with you."
    ]
  },
  recognitions: [
    { title: "DPIIT Recognised Startup", subtitle: "Startup India" },
    { title: "MSME Registered", subtitle: "Udyam" },
    { title: "GeM OEM Seller", subtitle: "Government e-Marketplace" },
    { title: "Incubated at GGSIPU EDC", subtitle: "IPU-IIF" }
  ],
  stats: [
    { value: 15, label: "STEM kits in robotics, AI, IoT and coding", suffix: "+" },
    { value: 10, label: "IoT labs set up in government schools", suffix: "+" },
    { value: 3, label: "Product design projects for companies", suffix: "+" },
    { value: 8, label: "Types of labs we design and install", suffix: "" }
  ]
};

// Labs Data
export const LABS_DATA: LabItem[] = [
  {
    id: "atl",
    title: "Atal Tinkering Lab",
    shortDesc: "ATL setup as per NITI Aayog guidelines, with all mandated equipment.",
    description: "Complete turnkey setup compliant with NITI Aayog guidelines, including 3D printers, mechanical tools, electronic workstations, sensor kits, and dedicated student workspaces.",
    features: ["Package 1 to 4 NITI Aayog compliance", "3D Printing & rapid prototyping zone", "Electronics and sensor workbench", "Curriculum mapped to NEP 2020"],
    imagePlaceholder: "Atal Tinkering Lab Setup",
    image: "/images/computer-lab-session.jpg"
  },
  {
    id: "stem",
    title: "STEM Lab",
    shortDesc: "Science, technology, engineering and maths through hands-on projects.",
    description: "Integrated STEM experiential learning hub where physical experiments meet digital computing, sensor-based data logging, and problem-solving pedagogy.",
    features: ["Class 6 to 12 progressive kits", "Experimental physics & math apparatus", "Teacher instructional guides", "Project showcase arena"],
    imagePlaceholder: "STEM Lab Classrooms",
    image: "/images/classroom-students-wide.jpg"
  },
  {
    id: "steam",
    title: "STEAM Lab",
    shortDesc: "STEM combined with art, design thinking and creativity.",
    description: "Fusing design thinking and creative arts with science and engineering. Includes digital fabrication, laser cutting concepts, UI/UX prototyping, and robotic design.",
    features: ["Design thinking modules", "Creative engineering tools", "Multi-disciplinary project kits", "Interactive student pods"],
    imagePlaceholder: "STEAM Lab Creative Zone",
    image: "/images/student-team-project.jpg"
  },
  {
    id: "robotics",
    title: "Robotics Lab",
    shortDesc: "Robot building, sensors, motors and programming.",
    description: "Dedicated robotics arena covering autonomous line followers, obstacle avoiders, robotic arms, differential drive platforms, and competitive robotics kits.",
    features: ["Modular chassis and motor drives", "Multi-sensor arrays (IR, Ultrasonic, Gyro)", "Arduino, ESP32 and Raspberry Pi platforms", "Competition challenge mats"],
    imagePlaceholder: "Robotics Testing Lab",
    image: "/images/yuva-battle-robots.jpg"
  },
  {
    id: "ai",
    title: "AI Lab",
    shortDesc: "Machine learning, computer vision and AI projects.",
    description: "Future-ready Artificial Intelligence workstation equipped with edge AI processors, smart camera modules, neural network accelerator boards, and vision projects.",
    features: ["Edge computing modules", "Computer vision cameras & object detection", "Natural language processing models", "Python & block AI coding interfaces"],
    imagePlaceholder: "AI & Computer Vision Station",
    image: "/images/ai-camera-robot-car.jpg"
  },
  {
    id: "iot",
    title: "IoT Lab",
    shortDesc: "Connected devices, cloud dashboards and smart systems.",
    description: "Comprehensive Internet of Things lab covering Wi-Fi, BLE, LoRa communication, cloud telemetry, MQTT brokers, and smart city / smart home automation builds.",
    features: ["ESP32 & NodeMCU based sensor kits", "Live cloud dashboard setup", "Smart agriculture & environmental stations", "Home automation prototypes"],
    imagePlaceholder: "Completed IoT lab in a government school",
    image: "/images/iot-sensors-setup.jpg"
  },
  {
    id: "drone",
    title: "Drone Lab",
    shortDesc: "Drone assembly, flight training and safety.",
    description: "Aviation and drone technology lab focusing on quadcopter aerodynamics, flight controller tuning, propeller dynamics, GPS waypoints, and DGCA safety guidelines.",
    features: ["Quadcopter assembly kits", "Flight simulator training stations", "Telemetry & remote control calibration", "Indoor safety flight cage"],
    imagePlaceholder: "Drone Technology Lab",
    image: "/images/drone-field-testing.jpg"
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation Lab",
    shortDesc: "PLC, sensors and automation trainers for colleges.",
    description: "Higher-education and polytechnic level automation testbenches featuring industrial PLCs, pneumatic actuators, HMI touchscreens, SCADA, and conveyor belt automation.",
    features: ["Industrial grade PLC trainer benches", "Pneumatic and electro-pneumatic valves", "SCADA and HMI interface programming", "Conveyor sorting mechanisms"],
    imagePlaceholder: "Industrial Automation Trainers",
    image: "/images/robotic-arm-showcase.jpg"
  }
];

// 15 STEM Kits
export const STEM_KITS: KitItem[] = [
  {
    id: "yuvabot-v1",
    name: "YuvaBot v1.0",
    track: "Robotics",
    description: "A beginner wheeled robot built on Arduino Uno. Students program it in block code, Python or C++, using four IR/distance sensors and two motors.",
    classLevel: "Class 6–10",
    features: ["Arduino Uno compatible", "Dual DC gear motors", "4x IR sensor array", "Obstacle avoidance code included"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/yuvabot-featured.jpg"
  },
  {
    id: "ai-vision-kit",
    name: "Navo Vision AI Kit",
    track: "Artificial Intelligence",
    description: "Smart camera and edge processor kit for facial recognition, object detection, and color tracking algorithms.",
    classLevel: "Class 8–12",
    features: ["HD camera sensor", "Edge AI accelerator", "Python & OpenCV tutorials", "12 guided projects"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/ai-camera-robot-car.jpg"
  },
  {
    id: "iot-smart-city",
    name: "Smart City IoT Kit",
    track: "IoT",
    description: "Build interconnected models: smart streetlights, automated toll booths, and environmental air quality monitors.",
    classLevel: "Class 7–12",
    features: ["Wi-Fi & Bluetooth microcontroller", "Air quality & sound sensors", "Cloud dashboard access", "OLED display"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/iot-sensors-setup.jpg"
  },
  {
    id: "coding-starter",
    name: "CodeCraft Foundation Kit",
    track: "Coding",
    description: "Block-to-text programming exploration kit with interactive buttons, RGB LEDs, buzzers, and graphical logic displays.",
    classLevel: "Class 5–8",
    features: ["Block code / Scratch compatibility", "Zero-soldering plug-and-play", "Step-by-step activity book", "20 micro-challenges"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/custom-pcb-board.jpg"
  },
  {
    id: "robo-arm-4dof",
    name: "RoboArm 4-DOF Explorer",
    track: "Robotics",
    description: "Articulated 4-axis robotic arm with servo control, precision joystick interface, and inverse kinematics basics.",
    classLevel: "Class 8–College",
    features: ["Laser-cut acrylic structure", "4 metal gear servos", "Dual analog joysticks", "Pick-and-place routines"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/robotic-arm-showcase.jpg"
  },
  {
    id: "ai-voice-bot",
    name: "NavoSpeech Voice AI Kit",
    track: "Artificial Intelligence",
    description: "Voice-activated smart assistant device teaching speech-to-text, wake-word models, and home appliance control.",
    classLevel: "Class 9–12",
    features: ["Microphone array module", "Audio DAC & speaker", "Offline keyword spotting", "Smart home integrations"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/ai-camera-robot-car.jpg"
  },
  {
    id: "iot-agri-station",
    name: "AgriTech IoT Weather Station",
    track: "IoT",
    description: "Precision farming kit with soil moisture probes, humidity, temperature, rain sensor, and SMS/web telemetry alerts.",
    classLevel: "Class 7–12",
    features: ["Capacitive soil probe", "Solar charging controller", "MQTT cloud sync", "Automated water pump relay"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/iot-sensors-setup.jpg"
  },
  {
    id: "python-micro-kit",
    name: "MicroPython Hardware Kit",
    track: "Coding",
    description: "Transition smoothly from blocks to Python with RP2040 microcontroller and animated SPI display shields.",
    classLevel: "Class 8–12",
    features: ["RP2040 dual-core chip", "Thonny IDE compatible", "Real-time graphing", "Game development tutorial"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/custom-pcb-board.jpg"
  },
  {
    id: "drone-diy-quad",
    name: "AeroYuva Quad Drone Kit",
    track: "Robotics",
    description: "Educational mini-drone kit teaching aerofoil physics, brushless motors, ESC calibration, and gyro stabilization.",
    classLevel: "Class 9–College",
    features: ["Crash-resistant carbon frame", "Optical flow sensor", "2.4GHz remote controller", "Flight log analysis"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/drone-field-testing.jpg"
  },
  {
    id: "ai-gesture-ctrl",
    name: "GestureAI Hand Tracker",
    track: "Artificial Intelligence",
    description: "Optical gesture recognition device that controls robotics and PC apps with 3D hand poses.",
    classLevel: "Class 8–12",
    features: ["Near-IR proximity matrix", "Hand landmark detection", "USB HID emulation", "Interactive games"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/ai-camera-robot-car.jpg"
  },
  {
    id: "iot-home-guard",
    name: "HomeGuard Smart Security",
    track: "IoT",
    description: "RFID smart access, PIR motion detection, buzzer alarm, and Telegram alert notification system.",
    classLevel: "Class 7–11",
    features: ["RFID reader & tags", "PIR motion sensor", "Relay switch", "Instant mobile alerts"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/esp32-robot-car.jpg"
  },
  {
    id: "cpp-embedded-kit",
    name: "Embedded C++ Mastery Kit",
    track: "Coding",
    description: "Deep dive into timers, interrupts, registers, and bare-metal microcontrollers for future embedded engineers.",
    classLevel: "Class 10–College",
    features: ["AVR & STM32 support", "Hardware debugging tools", "Logic analyzer hooks", "Industrial code samples"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/custom-pcb-board.jpg"
  },
  {
    id: "line-maze-bot",
    name: "MazeSolver PID Robot",
    track: "Robotics",
    description: "High-speed line follower and maze mapping robot utilizing PID control algorithms and sensor calibration.",
    classLevel: "Class 8–College",
    features: ["8-sensor analog array", "High-RPM encoder motors", "PID tuning UI", "Wall and grid navigation"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/sumo-robot.jpg"
  },
  {
    id: "iot-health-band",
    name: "BioMetric IoT Health Hub",
    track: "IoT",
    description: "Wearable health monitor kit reading pulse rate, SpO2, and body temperature with live patient dashboard.",
    classLevel: "Class 9–College",
    features: ["Pulse oximeter sensor", "Digital body temp probe", "Bluetooth Low Energy", "Web portal sync"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/iot-sensors-setup.jpg"
  },
  {
    id: "ai-edge-neural",
    name: "NeuralEdge TinyML Kit",
    track: "Artificial Intelligence",
    description: "Run machine learning models directly on microcontrollers with TensorFlow Lite for Microcontrollers.",
    classLevel: "Class 11–College",
    features: ["Low-power neural inferencing", "Vibration anomaly detection", "IMU sensor integration", "Model training guides"],
    shopUrl: "https://shop.navoyantra.com",
    image: "/images/red-robot-top.jpg"
  }
];

// Projects Data
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "noida-iot-labs",
    title: "10 IoT Labs in Noida & Greater Noida",
    category: "Government Tender",
    summary: "Designed, supplied and installed IoT labs in government schools, with teacher training.",
    location: "Noida & Greater Noida, Uttar Pradesh",
    client: "Government Education Department",
    details: "Full turnkey deployment covering 10 high schools. YuvaYantra provided custom laboratory furniture, 150+ IoT hardware kits, interactive smart sensor displays, continuous teacher training, and ongoing annual maintenance.",
    tags: ["Government Schools", "IoT Labs", "150+ Kits", "Teacher Training"],
    image: "/images/computer-lab-session.jpg",
  },
  {
    id: "product-design-3-cos",
    title: "Product Design for 3 Companies",
    category: "Industry",
    summary: "Took three corporate products from concept to working design.",
    location: "Delhi NCR",
    client: "Corporate Automation Clients",
    details: "End-to-end electronics product development including circuit schematic design, multi-layer PCB layout, embedded firmware programming, functional prototyping, 3D enclosure CAD, and small-batch manufacturing.",
    tags: ["PCB Design", "R&D", "Firmware", "Commercial Products"],
    image: "/images/custom-pcb-board.jpg",
  },
  {
    id: "rees52-collab",
    title: "Collaboration with Rees52",
    category: "Collaboration",
    summary: "Strategic component and kit manufacturing partnership delivering educational STEM modules across India.",
    location: "National Distribution",
    client: "Rees52 Technologies",
    details: "Joint engineering initiatives for custom educational micro-modules, reliable electronic components, rapid PCB supply, and curriculum co-development.",
    tags: ["OEM Supply", "Curriculum", "Distribution", "Component Engineering"],
    image: "/images/yuva-battle-robots.jpg",
  },
  {
    id: "meerut-workshop",
    title: "Workshop & Training, Meerut",
    category: "Education",
    summary: "Hands-on student workshops and teacher training at a prominent school in Meerut.",
    location: "Meerut, Uttar Pradesh",
    client: "Private Senior Secondary School",
    details: "Conducted intensive 3-day bootcamps for 250+ students in robotics and IoT programming. Up-skilled faculty members with dedicated teaching manuals and hands-on laboratory experiments.",
    tags: ["250+ Students", "Robotics Bootcamp", "Teacher Upskilling", "Hands-on Coding"],
    image: "/images/classroom-trainer-rohit.jpg",
  }
];

// Gallery Data
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "IoT lab, government school", category: "Labs", caption: "Completed IoT laboratory in a government school, Noida", image: "/images/computer-lab-session.jpg", aspect: "wide" },
  { id: "g2", title: "Student workshop, Meerut", category: "Workshops", caption: "Students assembling their first obstacle-avoiding robots", image: "/images/robotics-workshop-hands-on.jpg", aspect: "tall" },
  { id: "g3", title: "Teacher training session", category: "Teacher Training", caption: "Faculty members undergoing hands-on sensor programming training", image: "/images/teacher-training-real.jpg", aspect: "square" },
  { id: "g4", title: "YuvaBot in action", category: "Products", caption: "YuvaBot v1.0 navigating an obstacle course autonomously", image: "/images/yuvabot-featured.jpg", aspect: "tall" },
  { id: "g5", title: "PCB production", category: "Products", caption: "High precision SMT pick-and-place PCB manufacturing line", image: "/images/custom-pcb-board.jpg", aspect: "square" },
  { id: "g6", title: "Drone build", category: "Products", caption: "Custom carbon fiber quadcopter assembly and avionics testing", image: "/images/drone-field-testing.jpg", aspect: "wide" },
  { id: "g7", title: "Robotics lab setup", category: "Labs", caption: "Fully equipped robotics lab with competition challenge arena", image: "/images/robotic-arm-showcase.jpg", aspect: "wide" },
  { id: "g8", title: "Students presenting a project", category: "Events", caption: "School team presenting smart agriculture IoT project at science fair", image: "/images/student-team-project.jpg", aspect: "square" },
  { id: "g9", title: "Trainer Rohit Rathore", category: "Teacher Training", caption: "Interactive smart board session on LED Control with IR Sensors", image: "/images/classroom-trainer-rohit.jpg", aspect: "wide" },
  { id: "g10", title: "AI Vision Robot Car", category: "Products", caption: "Real-time edge computer vision object detection smart car", image: "/images/ai-camera-robot-car.jpg", aspect: "tall" },
  { id: "g11", title: "Sumo Battle Bot", category: "Products", caption: "Precision acrylic chassis Sumo combat robot", image: "/images/sumo-robot.jpg", aspect: "square" },
  { id: "g12", title: "ESP32 IoT Car", category: "Products", caption: "Wi-Fi controlled autonomous rover prototype", image: "/images/esp32-robot-car.jpg", aspect: "square" },
  { id: "g13", title: "School Computer & Robotics Lab", category: "Labs", caption: "Full turnkey computer and robotics lab setup in high school", image: "/images/gallery/school-computer-lab-wide.jpg", aspect: "wide" },
  { id: "g14", title: "Student Hands-On Workshop", category: "Workshops", caption: "Students assembling microcontroller circuits and motor drivers", image: "/images/gallery/stem-workshop-students.jpg", aspect: "wide" },
  { id: "g15", title: "Robotics Chassis Assembly", category: "Products", caption: "Precision laser-cut robot chassis with dual motor gearboxes", image: "/images/gallery/robotics-chassis-assembly.jpg", aspect: "wide" },
  { id: "g16", title: "Drone Aviation Testing", category: "Labs", caption: "Quadcopter calibration and optical telemetry inspection bench", image: "/images/gallery/drone-tech-station.jpg", aspect: "wide" },
  { id: "g17", title: "Multi-Axis Articulated Arm", category: "Products", caption: "Industrial 4-DOF robotic arm for college and automation training", image: "/images/gallery/robotic-arm-precision.jpg", aspect: "tall" },
  { id: "g18", title: "Sumo Robot Combat Platform", category: "Products", caption: "Tough acrylic combat chassis with high-torque rubber traction wheels", image: "/images/gallery/sumo-battle-bot-action.jpg", aspect: "tall" },
  { id: "g19", title: "AI Smart Vision Robot Car", category: "Products", caption: "ESP32-CAM module mounted on multi-directional autonomous chassis", image: "/images/gallery/esp32-vision-car-top.jpg", aspect: "tall" },
  { id: "g20", title: "Electronics & Sensor Workbench", category: "Labs", caption: "Sensors, breadboards and digital multimeters ready for practicals", image: "/images/gallery/electronics-bench-testing.jpg", aspect: "wide" },
  { id: "g21", title: "Teacher Empowerment Session", category: "Teacher Training", caption: "Teachers mastering block coding and robotics curriculum delivery", image: "/images/gallery/faculty-training-session.jpg", aspect: "wide" },
  { id: "g22", title: "Outdoor Drone Flight Testing", category: "Events", caption: "Field testing autonomous waypoint navigation and safety geofencing", image: "/images/gallery/drone-outdoor-calibration.jpg", aspect: "wide" },
  { id: "g23", title: "Custom PCB Engineering", category: "Products", caption: "Multi-layer SMT assembled PCB with microcontroller integration", image: "/images/gallery/custom-pcb-testing.jpg", aspect: "square" },
  { id: "g24", title: "Battle Robots Arena Lineup", category: "Events", caption: "Custom-designed competition rovers ready for inter-school robotics tournament", image: "/images/gallery/robotics-competition-lineup.jpg", aspect: "wide" }
];

// Blog Posts Data
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "what-is-an-atal-tinkering-lab",
    title: "What is an Atal Tinkering Lab, and how can your school set one up?",
    category: "Lab Guides",
    date: "14 Feb 2026",
    readTime: "5 min read",
    summary: "A practical, step-by-step roadmap to understanding NITI Aayog guidelines, grant funding, required equipment, and successful teacher training for ATLs.",
    content: "Atal Tinkering Labs (ATLs) are dedicated spaces where young minds can give shape to their ideas through hands-on do-it-yourself mode. Established under the Atal Innovation Mission (AIM) by NITI Aayog, ATLs foster curiosity, creativity, and imagination in young minds. At YuvaYantra, we provide end-to-end solutions from lab layout and equipment procurement to teacher training and annual support.",
    featured: true,
    image: "/images/computer-lab-session.jpg"
  },
  {
    id: "b2",
    slug: "5-robotics-projects-class-6-8",
    title: "5 robotics projects for Class 6–8 students",
    category: "STEM Education",
    date: "08 Feb 2026",
    readTime: "4 min read",
    summary: "Engaging, curriculum-aligned robotics projects that build foundational confidence without overwhelming young learners.",
    content: "Hands-on projects like light-following rovers, touch-sensitive robotic claws, and ultrasonic safety alarms ignite a passion for engineering in middle schoolers.",
    image: "/images/yuva-battle-robots.jpg"
  },
  {
    id: "b3",
    slug: "how-iot-labs-prepare-for-industry-4-0",
    title: "How IoT labs prepare students for Industry 4.0",
    category: "Industry",
    date: "28 Jan 2026",
    readTime: "6 min read",
    summary: "Bridging the gap between academic theory and modern industrial manufacturing with practical sensor networks and telemetry.",
    content: "Industry 4.0 demands professionals who understand data acquisition, wireless protocols, and cloud computing. Experiencing IoT at the school level demystifies telemetry.",
    image: "/images/iot-sensors-setup.jpg"
  },
  {
    id: "b4",
    slug: "setting-up-a-stem-lab-checklist",
    title: "Setting up a STEM lab: a checklist for principals",
    category: "Lab Guides",
    date: "19 Jan 2026",
    readTime: "7 min read",
    summary: "Everything school leadership needs to plan: space requirements, electrical safety, inventory management, and instructor enablement.",
    content: "A successful STEM lab requires more than just buying kits. It needs ergonomic furniture, power distribution, storage cabinets, and comprehensive faculty development.",
    image: "/images/classroom-students-wide.jpg"
  },
  {
    id: "b5",
    slug: "inside-our-iot-lab-greater-noida",
    title: "Inside our IoT lab project in Greater Noida",
    category: "Projects",
    date: "12 Jan 2026",
    readTime: "5 min read",
    summary: "A behind-the-scenes look at how we designed and installed government school IoT labs on schedule and with high teacher satisfaction.",
    content: "Working closely with government school teachers, we customized bilingual activity guides in Hindi and English, ensuring every child had direct hands-on turns.",
    image: "/images/classroom-trainer-rohit.jpg"
  },
  {
    id: "b6",
    slug: "why-pcb-design-matters-for-indian-manufacturing",
    title: "Why PCB design matters for Indian manufacturing",
    category: "Industry",
    date: "05 Jan 2026",
    readTime: "5 min read",
    summary: "How indigenous electronics engineering is fueling self-reliance and lowering import dependence for hardware startups.",
    content: "India's Make in India initiative gains true velocity when local engineers design schematics, optimize PCB routing for local fabrication, and assemble boards domestically.",
    image: "/images/custom-pcb-board.jpg"
  },
  {
    id: "b7",
    slug: "company-news-yuvabot-v1-launch",
    title: "Company news: Launch of YuvaBot v1.0 kit",
    category: "News",
    date: "24 Dec 2025",
    readTime: "3 min read",
    summary: "NavoYantra announces YuvaBot v1.0, engineered for schools with multi-language code support and robust classroom durability.",
    content: "YuvaBot v1.0 represents months of testing across school classrooms, featuring shatterproof chassis material, plug-and-play wiring, and intuitive block coding software.",
    image: "/images/yuvabot-featured.jpg"
  }
];

// Open Positions for Careers
export const CAREER_JOBS: JobOpening[] = [
  {
    id: "c1",
    title: "Robotics Trainer",
    team: "Education & Lab Delivery",
    location: "Delhi NCR",
    type: "Full-time",
    description: "Lead engaging robotics and STEM workshops in schools and colleges. Train teachers, guide student project builds, and support ATL lab operations.",
    requirements: ["B.Tech / Diploma in Robotics, Electronics, or CS", "Passion for teaching students", "Familiarity with Arduino, Scratch, and Python", "Good communication in Hindi & English"]
  },
  {
    id: "c2",
    title: "Embedded Systems Engineer",
    team: "Product R&D",
    location: "Delhi",
    type: "Full-time",
    description: "Design schematics, route multi-layer PCBs, write firmware in C/C++ and MicroPython for STM32 and ESP32 platforms, and build industrial prototypes.",
    requirements: ["B.Tech in Electronics / Instrumentation / Robotics", "Proficiency in KiCAD or Altium", "Solid C/C++ firmware skills", "Hands-on soldering & lab debugging experience"]
  },
  {
    id: "c3",
    title: "Business Development – Education",
    team: "Growth & Institutional Sales",
    location: "Delhi NCR",
    type: "Full-time",
    description: "Build relationships with school principals, trustees, engineering colleges, and government education tenders for STEM labs and kit adoptions.",
    requirements: ["1-3 years experience in EdTech or institutional sales", "Strong presentation and negotiation skills", "Understanding of school academic calendar cycles", "Willingness for regional travel"]
  },
  {
    id: "c4",
    title: "Robotics & IoT Intern",
    team: "Internship & Prototyping",
    location: "Delhi",
    type: "Internship",
    description: "Work directly alongside the founder and core team. Test STEM kits, create demo project tutorials, assemble robots, and assist in lab installations.",
    requirements: ["Pursuing B.Tech / Diploma in Engineering", "Hands-on maker mindset", "Basic electronics and coding curiosity", "Minimum 3 months commitment"]
  }
];

// FAQs Data
export const FAQS_DATA = [
  {
    q: "Do you set up Atal Tinkering Labs (ATL)?",
    a: "Yes. We design, supply and install ATLs and other STEM, robotics, AI, IoT and drone labs, with teacher training and complete NITI Aayog guideline compliance."
  },
  {
    q: "Can we buy STEM kits without a full lab?",
    a: "Yes. All our kits are available individually on shop.navoyantra.com, and in discounted bulk packs for schools, hobby clubs, and institutions."
  },
  {
    q: "Do you work on custom industrial projects?",
    a: "Yes. We take on industrial automation, PCB design and product R&D projects. Share your requirement with us to get a feasibility review and quote."
  },
  {
    q: "Do you offer support after installation?",
    a: "Yes. We offer maintenance and Annual Maintenance Contracts (AMC), periodic hardware health checks, replacement parts, plus regular teacher refresher training."
  },
  {
    q: "Are your kits aligned with the National Education Policy (NEP 2020)?",
    a: "Yes! All NavoYantra curriculums, activity manuals, and project books are strictly aligned with NEP 2020 experiential learning principles."
  },
  {
    q: "Can government institutions procure via GeM portal?",
    a: "Yes. YuvaYantra Technology Pvt. Ltd. is an authorized GeM OEM Seller, enabling easy public procurement through the Government e-Marketplace."
  }
];

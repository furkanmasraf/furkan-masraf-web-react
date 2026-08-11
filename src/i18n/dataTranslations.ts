import type { ProfileInfo, Experience, Project, Skill, Certificate } from '../types';
import { CORRECT_LINKEDIN_URL } from '../services/api';

// --- PROFILE ---
export const PROFILE_TR: ProfileInfo = {
  fullName: "Furkan Masraf",
  title: "Backend & Full-Stack Developer (Java & C# .NET)",
  email: "masraffurkan@gmail.com",
  phone: "",
  location: "İstanbul, Türkiye",
  linkedinUrl: CORRECT_LINKEDIN_URL,
  githubUrl: "https://github.com/furkanmasraf",
  bio: "Java (Spring Boot) ve C# (.NET) ekosistemlerinde kurumsal düzeyde backend sistemleri, mikroservis mimarileri ve yüksek erişilebilirlikli RESTful API'ler geliştiren Bilgisayar Mühendisi. Modern Web (React) ve Mobil Uygulama tecrübesiyle birlikte Clean Code prensipleri, Redis caching, veritabanı optimizasyonu ve güvenli yazılım mimarileri kurgulama konusunda tutkulu bir mühendislik yaklaşımına sahibim.",
  university: "Üsküdar Üniversitesi",
  department: "Bilgisayar Mühendisliği",
  graduationYear: "2020 – 2026"
};

export const PROFILE_EN: ProfileInfo = {
  fullName: "Furkan Masraf",
  title: "Backend & Full-Stack Developer (Java & C# .NET)",
  email: "masraffurkan@gmail.com",
  phone: "",
  location: "Istanbul, Turkey",
  linkedinUrl: CORRECT_LINKEDIN_URL,
  githubUrl: "https://github.com/furkanmasraf",
  bio: "Computer Engineer specializing in enterprise backend systems, microservice architectures, and high-availability RESTful APIs across Java (Spring Boot) and C# (.NET Core) ecosystems. Passionate about engineering clean code, Redis caching, query optimization, and secure software architectures alongside modern Web (React) and Mobile development experience.",
  university: "Üsküdar University",
  department: "Computer Engineering",
  graduationYear: "2020 – 2026"
};

// --- EXPERIENCES ---
export const EXPERIENCES_TR: Experience[] = [
  {
    id: 1,
    company: "Doğuş Teknoloji",
    role: "Backend Developer Intern",
    period: "05/2026 – 06/2026",
    location: "İstanbul",
    displayOrder: 1,
    highlights: [
      "Servisler arası entegrasyonların güvenilirliğini artırmak amacıyla, uzak sunucu kesintilerine karşı Retry mekanizması geliştirme; başarısız isteklerin belirli periyotlarla otomatik olarak tekrarlanmasını sağlayarak sistemin hata toleransını (Fault Tolerance) güçlendirme üzerine çalışmalar yaptım.",
      "Proje içindeki hata ve bilgilendirme mesajlarını tip güvenliği (Type Safety) prensiplerine uygun olarak merkezi bir yapıda yönetmek amacıyla ilgili Enum sınıflarının tasarımını ve entegrasyonunu üzerinde çalışmalar yürüttüm.",
      "Kurumsal mikroservis mimarilerini ve harici sistem entegrasyon süreçlerini analiz ederek büyük ölçekli projelerin kod tabanına (codebase) adaptasyon sağladım."
    ],
    technologies: ["Java", "Spring Boot", "Resilience4j", "Microservices", "Clean Code", "Fault Tolerance"]
  },
  {
    id: 2,
    company: "Fibabanka",
    role: "Backend Developer Intern",
    period: "03/2025 – 08/2025",
    location: "İstanbul",
    displayOrder: 2,
    highlights: [
      "Java ve Spring Boot kurumsal projelerinde Clean Code prensipleri doğrultusunda kod refaktörü süreçlerine katıldım; string literallerini static yapılara taşıyarak bellek yönetimini optimize ettim.",
      "Aspect-Oriented Programming (AOP) mimarisini inceleyerek, iş mantığı katmanını etkilemeden çalışan merkezi ve modüler loglama yapıları üzerinde çalışmalar yürüttüm.",
      "Uygulama kararlılığını artırmak amacıyla runtime hatalarını ve özellikle NullPointerException (NPE) vakalarını analiz edip kalıcı çözümler üreterek hata ayıklama (debugging) süreçlerinde rol aldım.",
      "Yeni geliştirilecek servisler için API iskelet tasarımlarını (endpoint stubs) oluşturarak entegrasyon süreçlerinin hızlandırılmasına katkı sağladım.",
      "Agile/Scrum metodolojisiyle çalışan bir bankacılık ekibinde, sprint planlama ve günlük (Daily Stand-up) toplantılarına aktif katılım sağladım."
    ],
    technologies: ["Java", "Spring Boot", "AOP", "Clean Code", "Debugging", "Agile/Scrum", "API Stubs"]
  },
  {
    id: 3,
    company: "Bilyoner",
    role: "Mobile Developer Intern",
    period: "06/2024 – 07/2024",
    location: "İstanbul",
    displayOrder: 3,
    highlights: [
      "Mobil uygulama geliştirme ve servis entegrasyon süreçlerinde görev aldım.",
      "API entegrasyonları ve kullanıcı arayüzü iyileştirmeleri yaptım.",
      "Takım içi kod inceleme (code review) süreçlerine katıldım."
    ],
    technologies: ["Mobile App", "REST API", "Code Review", "UI Optimization"]
  }
];

export const EXPERIENCES_EN: Experience[] = [
  {
    id: 1,
    company: "Doğuş Teknoloji",
    role: "Backend Developer Intern",
    period: "05/2026 – 06/2026",
    location: "Istanbul, Turkey",
    displayOrder: 1,
    highlights: [
      "Engineered automated Retry mechanisms to bolster inter-service integration reliability against remote server downtime, significantly strengthening system Fault Tolerance.",
      "Designed and integrated centralized Enum classes to enforce Type Safety across global error handling and application notification message structures.",
      "Analyzed enterprise microservice architectures and external API integration workflows, contributing directly to large-scale codebase adaptabilities."
    ],
    technologies: ["Java", "Spring Boot", "Resilience4j", "Microservices", "Clean Code", "Fault Tolerance"]
  },
  {
    id: 2,
    company: "Fibabanka",
    role: "Backend Developer Intern",
    period: "03/2025 – 08/2025",
    location: "Istanbul, Turkey",
    displayOrder: 2,
    highlights: [
      "Participated in enterprise Java & Spring Boot refactoring following Clean Code principles; optimized heap memory by migrating string literals to static constant structures.",
      "Explored Aspect-Oriented Programming (AOP) to build modular, non-intrusive logging aspects across core business logic layers.",
      "Played an active role in root-cause debugging to eliminate runtime exceptions and prevent NullPointerExceptions (NPEs), improving overall application stability.",
      "Constructed RESTful API endpoint stubs for upcoming financial services, accelerating frontend-backend integration workflows.",
      "Collaborated actively in an Agile/Scrum banking engineering team, participating in sprint planning and daily stand-ups."
    ],
    technologies: ["Java", "Spring Boot", "AOP", "Clean Code", "Debugging", "Agile/Scrum", "API Stubs"]
  },
  {
    id: 3,
    company: "Bilyoner",
    role: "Mobile Developer Intern",
    period: "06/2024 – 07/2024",
    location: "Istanbul, Turkey",
    displayOrder: 3,
    highlights: [
      "Contributed to mobile application feature developments and RESTful backend service integration flows.",
      "Implemented UI optimizations and responsive layout enhancements for mobile users.",
      "Engaged in team peer code reviews to ensure code quality standards."
    ],
    technologies: ["Mobile App", "REST API", "Code Review", "UI Optimization"]
  }
];

// --- PROJECTS ---
export const PROJECTS_TR: Project[] = [
  {
    id: 1,
    title: "Hairdresser Appointment & Management System",
    category: "Spring Boot / Backend",
    description: "Customer ve Shop Admin rol tabanlı yetkilendirme altyapısına sahip kurumsal düzeyde randevu ve dükkan yönetim sistemi backend mimarisi.",
    backendGithubUrl: "https://github.com/furkanmasraf",
    frontendGithubUrl: "https://github.com/furkanmasraf",
    featured: true,
    displayOrder: 1,
    keyFeatures: [
      "Java 17, Spring Boot, Spring Security ve JWT mimarisi ile rol tabanlı yetkilendirme.",
      "Asenkron veritabanı sorguları üzerinden dinamik çakışma kontrolleri.",
      "Redis Caching mekanizması ile dükkan/hizmet listeleme endpoint performansının artırılması.",
      "JUnit 5 ve Mockito ile %80+ unit test kapsayıcılığı.",
      "Resilience4j ile dış servis kesintilerine karşı Retry (Yeniden Deneme) şablonu.",
      "Docker ve Docker Compose ile PostgreSQL, Redis ve mesaj kuyruğu servisi containerization.",
      "@ControllerAdvice ile Global Exception Handling ve standart JSON yanıt kalkanı."
    ],
    technologies: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Redis", "PostgreSQL", "Resilience4j", "Docker", "JUnit 5"]
  },
  {
    id: 2,
    title: "Personal Finance Tracking Application",
    category: "C# / .NET Core",
    description: "Kullanıcıların gelir-gider takibini yapabildiği, kategori bazlı harcama analizi çıkardığı ölçeklenebilir backend sistemi.",
    backendGithubUrl: "https://github.com/furkanmasraf",
    featured: true,
    displayOrder: 2,
    keyFeatures: [
      "C# ve .NET Core altyapısı ile katmanlı RESTful API mimarisi.",
      "Gelir-gider takibi, kategori analizi ve raporlama servisleri.",
      "Gerçek dünya senaryolarına uygun iş mantığı kurgusu."
    ],
    technologies: ["C#", ".NET Core", "RESTful API", "LINQ", "SQL Server"]
  },
  {
    id: 3,
    title: "Cafe & Restaurant Database Management System",
    category: "Full-Stack & DB",
    description: "Kullanıcı, ürün ve sipariş yönetimi için veritabanı mimarisi ve oturum yönetimi geliştirmeleri.",
    backendGithubUrl: "https://github.com/furkanmasraf",
    featured: false,
    displayOrder: 3,
    keyFeatures: [
      "Kullanıcı, ürün ve sipariş veritabanı mimarisi.",
      "Filtreleme, arama ve oturum yönetimi (session management).",
      "Frontend-backend entegrasyonu."
    ],
    technologies: ["Java", "PostgreSQL", "Session Management", "JavaScript"]
  }
];

export const PROJECTS_EN: Project[] = [
  {
    id: 1,
    title: "Hairdresser Appointment & Management System",
    category: "Spring Boot / Backend",
    description: "Enterprise-grade appointment and salon management system backend architecture featuring Customer & Shop Admin Role-Based Access Control (RBAC).",
    backendGithubUrl: "https://github.com/furkanmasraf",
    frontendGithubUrl: "https://github.com/furkanmasraf",
    featured: true,
    displayOrder: 1,
    keyFeatures: [
      "Role-Based Access Control (RBAC) powered by Java 17, Spring Boot, Spring Security, and JWT tokens.",
      "Dynamic schedule conflict prevention via async database validation queries.",
      "Redis Caching layer boosting shop & service catalog endpoint throughput.",
      "Comprehensive unit test coverage (>80%) built with JUnit 5 & Mockito.",
      "Resilience4j fault-tolerance pattern with automated Retries against third-party API downtime.",
      "Containerized environment using Docker & Docker Compose for PostgreSQL, Redis, and service nodes.",
      "Global Exception Handling via @ControllerAdvice ensuring standard JSON error payloads."
    ],
    technologies: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Redis", "PostgreSQL", "Resilience4j", "Docker", "JUnit 5"]
  },
  {
    id: 2,
    title: "Personal Finance Tracking Application",
    category: "C# / .NET Core",
    description: "Scalable backend web service enabling users to track income/expenses and generate category-based expenditure analytics.",
    backendGithubUrl: "https://github.com/furkanmasraf",
    featured: true,
    displayOrder: 2,
    keyFeatures: [
      "Layered RESTful API architecture engineered with C# and .NET Core.",
      "Income/expense tracking, categorization algorithms, and reporting APIs.",
      "Production-ready domain logic tailored for real-world personal finance management."
    ],
    technologies: ["C#", ".NET Core", "RESTful API", "LINQ", "SQL Server"]
  },
  {
    id: 3,
    title: "Cafe & Restaurant Database Management System",
    category: "Full-Stack & DB",
    description: "Database architecture and session management system built for multi-role user, product catalog, and order handling.",
    backendGithubUrl: "https://github.com/furkanmasraf",
    featured: false,
    displayOrder: 3,
    keyFeatures: [
      "Relational database schema designed for users, menu items, and order processing.",
      "Advanced filtering, search queries, and stateful session management.",
      "Seamless full-stack integration between backend APIs and UI components."
    ],
    technologies: ["Java", "PostgreSQL", "Session Management", "JavaScript"]
  }
];

// --- SKILLS ---
export const SKILLS_TR: Skill[] = [
  { id: 1, name: "Java", category: "Backend", proficiencyPercentage: 95, iconName: "code", highlightText: "Clean Code, Java 17/21" },
  { id: 2, name: "Spring Boot", category: "Backend", proficiencyPercentage: 95, iconName: "server", highlightText: "REST API, Security, Data JPA" },
  { id: 3, name: "Spring Data JPA / Hibernate", category: "Backend", proficiencyPercentage: 90, iconName: "database", highlightText: "ORM Optimizasyonu, JPQL" },
  { id: 4, name: "Spring Security & JWT", category: "Backend", proficiencyPercentage: 88, iconName: "lock", highlightText: "Rol Tabanlı Yetkilendirme" },
  { id: 5, name: "Redis Caching", category: "Backend", proficiencyPercentage: 85, iconName: "zap", highlightText: "Bellek İçi Önbellekleme & Performans" },
  { id: 6, name: "Resilience4j & Retry", category: "Backend", proficiencyPercentage: 85, iconName: "shield", highlightText: "Hata Toleransı, Circuit Breaker" },
  { id: 7, name: "Aspect-Oriented Programming (AOP)", category: "Backend", proficiencyPercentage: 88, iconName: "layers", highlightText: "Merkezi Loglama & Kapsama" },
  { id: 8, name: "C# / .NET Core", category: "Backend", proficiencyPercentage: 80, iconName: "terminal", highlightText: "Katmanlı Mimari, LINQ" },
  { id: 9, name: "PostgreSQL", category: "Database", proficiencyPercentage: 90, iconName: "database", highlightText: "İlişkisel Veritabanı Mimarisi" },
  { id: 10, name: "Microsoft SQL Server", category: "Database", proficiencyPercentage: 82, iconName: "database", highlightText: "T-SQL & Stored Procedures" },
  { id: 11, name: "Docker & Docker Compose", category: "DevOps", proficiencyPercentage: 85, iconName: "box", highlightText: "Konteynerleştirme & Orkestrasyon" },
  { id: 12, name: "Git / GitHub / Azure DevOps", category: "DevOps", proficiencyPercentage: 90, iconName: "git-branch", highlightText: "Sürüm Kontrolü & CI/CD" },
  { id: 13, name: "JUnit 5 & Mockito", category: "Testing", proficiencyPercentage: 85, iconName: "check-circle", highlightText: "Birim Test & Mocking" },
  { id: 14, name: "React & TypeScript", category: "Frontend", proficiencyPercentage: 80, iconName: "layout", highlightText: "Modern UI, Component State" }
];

export const SKILLS_EN: Skill[] = [
  { id: 1, name: "Java", category: "Backend", proficiencyPercentage: 95, iconName: "code", highlightText: "Clean Code, Java 17/21" },
  { id: 2, name: "Spring Boot", category: "Backend", proficiencyPercentage: 95, iconName: "server", highlightText: "REST API, Security, Data JPA" },
  { id: 3, name: "Spring Data JPA / Hibernate", category: "Backend", proficiencyPercentage: 90, iconName: "database", highlightText: "ORM Optimization, JPQL" },
  { id: 4, name: "Spring Security & JWT", category: "Backend", proficiencyPercentage: 88, iconName: "lock", highlightText: "Role-Based Auth & Tokens" },
  { id: 5, name: "Redis Caching", category: "Backend", proficiencyPercentage: 85, iconName: "zap", highlightText: "In-Memory Caching & Latency" },
  { id: 6, name: "Resilience4j & Retry", category: "Backend", proficiencyPercentage: 85, iconName: "shield", highlightText: "Fault Tolerance, Circuit Breaker" },
  { id: 7, name: "Aspect-Oriented Programming (AOP)", category: "Backend", proficiencyPercentage: 88, iconName: "layers", highlightText: "Centralized Logging Aspects" },
  { id: 8, name: "C# / .NET Core", category: "Backend", proficiencyPercentage: 80, iconName: "terminal", highlightText: "Layered Architecture, LINQ" },
  { id: 9, name: "PostgreSQL", category: "Database", proficiencyPercentage: 90, iconName: "database", highlightText: "Relational Schema & Performance" },
  { id: 10, name: "Microsoft SQL Server", category: "Database", proficiencyPercentage: 82, iconName: "database", highlightText: "T-SQL & Stored Procedures" },
  { id: 11, name: "Docker & Docker Compose", category: "DevOps", proficiencyPercentage: 85, iconName: "box", highlightText: "Containerization & Orchestration" },
  { id: 12, name: "Git / GitHub / Azure DevOps", category: "DevOps", proficiencyPercentage: 90, iconName: "git-branch", highlightText: "Version Control & CI/CD" },
  { id: 13, name: "JUnit 5 & Mockito", category: "Testing", proficiencyPercentage: 85, iconName: "check-circle", highlightText: "Unit Testing & Mocking" },
  { id: 14, name: "React & TypeScript", category: "Frontend", proficiencyPercentage: 80, iconName: "layout", highlightText: "Modern UI, Component State" }
];

// --- CERTIFICATES ---
export const CERTIFICATES_TR: Certificate[] = [
  { id: 1, title: "Data Science", issuer: "Coderspace", issueYear: "2025", description: "Veri analizi, istatistiksel modelleme ve değerlendirme becerileri.", badgeCategory: "Data Science" },
  { id: 2, title: "Java & Spring Boot", issuer: "BTK Akademi", issueYear: "2025", description: "Kurumsal backend mimarisi ve REST API geliştirme uzmanlığı.", badgeCategory: "Backend" },
  { id: 3, title: "Fibabanka Future Talent Programme", issuer: "Fibabanka", issueYear: "2025", description: "Bankacılık sistemleri, mikroservisler ve kurumsal yazılım staj deneyimi.", badgeCategory: "Enterprise" },
  { id: 4, title: "Java – Geleceği Yazanlar", issuer: "Turkcell", issueYear: "2025", description: "Nesne yönelimli programlama ve ileri Java mimarisi.", badgeCategory: "Java" },
  { id: 5, title: "Foundational C#", issuer: "Microsoft / FreeCodeCamp", issueYear: "2024", description: ".NET temelleri ve C# yazılım geliştirme.", badgeCategory: ".NET" }
];

export const CERTIFICATES_EN: Certificate[] = [
  { id: 1, title: "Data Science", issuer: "Coderspace", issueYear: "2025", description: "Data analysis, statistical modeling, and evaluation skills.", badgeCategory: "Data Science" },
  { id: 2, title: "Java & Spring Boot", issuer: "BTK Akademi", issueYear: "2025", description: "Enterprise backend architecture and REST API development expertise.", badgeCategory: "Backend" },
  { id: 3, title: "Fibabanka Future Talent Programme", issuer: "Fibabanka", issueYear: "2025", description: "Banking software architecture, microservices, and enterprise development experience.", badgeCategory: "Enterprise" },
  { id: 4, title: "Java – Geleceği Yazanlar", issuer: "Turkcell", issueYear: "2025", description: "Object-oriented programming and advanced Java architecture.", badgeCategory: "Java" },
  { id: 5, title: "Foundational C#", issuer: "Microsoft / FreeCodeCamp", issueYear: "2024", description: ".NET fundamentals and C# application engineering.", badgeCategory: ".NET" }
];

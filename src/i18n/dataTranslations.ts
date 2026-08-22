import type { ProfileInfo, Experience, Project, Skill, Certificate, BlogPost } from '../types';
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
  { id: 2, title: "Java & Spring Boot", issuer: "BTK Akademi", issueYear: "2025", description: "Kurumsal backend mimarisi ve REST API geliştirme yetkinliği.", badgeCategory: "Backend" },
  { id: 3, title: "Fibabanka Future Talent Programme", issuer: "Fibabanka", issueYear: "2025", description: "Bankacılık sistemleri, mikroservisler ve kurumsal yazılım staj deneyimi.", badgeCategory: "Enterprise" },
  { id: 4, title: "Java – Geleceği Yazanlar", issuer: "Turkcell", issueYear: "2025", description: "Nesne yönelimli programlama ve ileri Java mimarisi.", badgeCategory: "Java" },
  { id: 5, title: "Foundational C#", issuer: "Microsoft / FreeCodeCamp", issueYear: "2024", description: ".NET temelleri ve C# yazılım geliştirme.", badgeCategory: ".NET" }
];

export const CERTIFICATES_EN: Certificate[] = [
  { id: 1, title: "Data Science", issuer: "Coderspace", issueYear: "2025", description: "Data analysis, statistical modeling, and evaluation skills.", badgeCategory: "Data Science" },
  { id: 2, title: "Java & Spring Boot", issuer: "BTK Akademi", issueYear: "2025", description: "Enterprise backend architecture and REST API development competencies.", badgeCategory: "Backend" },
  { id: 3, title: "Fibabanka Future Talent Programme", issuer: "Fibabanka", issueYear: "2025", description: "Banking software architecture, microservices, and enterprise development experience.", badgeCategory: "Enterprise" },
  { id: 4, title: "Java – Geleceği Yazanlar", issuer: "Turkcell", issueYear: "2025", description: "Object-oriented programming and advanced Java architecture.", badgeCategory: "Java" },
  { id: 5, title: "Foundational C#", issuer: "Microsoft / FreeCodeCamp", issueYear: "2024", description: ".NET fundamentals and C# application engineering.", badgeCategory: ".NET" }
];

// --- BLOG POSTS ---
export const BLOG_POSTS_TR: BlogPost[] = [
  {
    id: 1,
    slug: "api-tasarimi-nasil-yapilir",
    title: "Modern Backend Mimarilerinde RESTful API Tasarım Prensipleri",
    summary: "Ölçeklenebilir, sürdürülebilir ve kurumsal standartlara uygun bir REST API kurgularken dikkat edilmesi gereken mimari yaklaşımlar, güvenlik pratikleri ve Spring Boot kodlama prensipleri.",
    author: "Furkan Masraf",
    date: "17 Ağustos 2026",
    readTime: "6 dk okuma",
    category: "API Design",
    featured: false,
    tags: ["API Design", "RESTful API", "Spring Boot", "Swagger", "Clean Code", "Security"],
    content: `
### 🚀 Giriş: Kurumsal Yazılımlarda API Mimarisi
Modern backend sistemlerinde hazırladığımız API'ler; web istemcileri, mobil uygulamalar ve mikroservis ekosistemi arasındaki temel haberleşme köprüsüdür. **İyi kurgulanmış bir API; anlaşılır, güvenli, kolay bakımı yapılabilir ve yüksek yük altında ölçeklenebilirdir.**

Peki üretim seviyesinde (production-ready) bir RESTful servis mimarisi tasarlarken neleri ön planda tutmalıyız?

---

### 🌐 1. Kaynak Odaklı (Resource-Oriented) Endpoint Kurgusu
REST mimarisinin temeli, URL'lerde fiiller/eylemler yerine **kaynakların (resources)** temsil edilmesidir. Çoğul isimler (plural nouns) kullanmak ve HTTP fiillerini (\`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`) doğru eşlemek tutarlılık sağlar.

#### Standarda Uygun URL Yapısı:
- \`GET /api/v1/users\` ➔ Kullanıcı listesini getirir.
- \`POST /api/v1/users\` ➔ Yeni bir kullanıcı oluşturur.
- \`GET /api/v1/users/{id}\` ➔ Belirli kullanıcının detayını getirir.
- \`PUT /api/v1/users/{id}\` ➔ Kullanıcıyı tamamen günceller.
- \`DELETE /api/v1/users/{id}\` ➔ Kullanıcıyı siler.

---

### 🛡️ 2. Katmanlı İzolasyon: DTO (Data Transfer Object) Desenleri
Veritabanı varlıklarını (JPA Entity) doğrudan dış dünyaya açmak ciddi güvenlik açıkları ve esneklik kayıpları yaratır. 
- **Request & Response DTO:** İstemcinin gönderdiği veriler ile servisin döndüğü veriler ayrıştırılmalıdır.
- **Validasyon:** \`@Valid\`, \`@NotNull\`, \`@Size\` gibi annotation'lar ile veritabanına ulaşmadan önce istemci girdileri doğrulanmalıdır.

---

### 🔑 3. Güvenlik & Kimlik Doğrulama Best-Practice'leri
- **Durumsuz (Stateless) JWT:** Sunucuda oturum tutmadan token tabanlı kimlik doğrulama.
- **HTTPS & TLS:** Tüm veri iletimi şifrelenmiş kanallardan yapılmalıdır.
- **CORS & Rate Limiting:** İstemci kaynaklı aşırı istekleri (DDoS) ve yetkisiz domain erişimlerini kısıtlama.

---

### ⚠️ 4. Merkezi Hata Yönetimi (Global Exception Handling)
Hata durumunda istemciye anlamsız stack trace'ler veya HTML hata sayfaları dönmek yerine standart bir JSON formatı sunulmalıdır.

\`\`\`json
{
  "timestamp": "2026-08-17T15:45:00Z",
  "status": 404,
  "error": "Not Found",
  "message": "ID'si 102 olan kullanıcı bulunamadı.",
  "path": "/api/v1/users/102"
}
\`\`\`

---

### 📑 5. Canlı Dokümantasyon (OpenAPI 3.0 & Swagger)
Kod ile senkronize çalışan Swagger UI entegrasyonu sayesinde frontend ve mobil geliştiricilerin API isteklerini doğrudan test edebilmesi sağlanır.
`
  },
  {
    id: 2,
    slug: "docker-nedir-ne-ise-yarar-nasil-kullanilir",
    title: "Docker Nedir, Ne İşe Yarar ve Nasıl Kullanılır? (Konteyner Mimarisi Rehberi)",
    summary: "Yazılımları bağımlılıklarıyla birlikte izole konteynerler içinde paketleyip her ortamda sorunsuz çalıştırmayı sağlayan Docker açık kaynak platformunun kurumsal kullanım rehberi.",
    author: "Furkan Masraf",
    date: "17 Ağustos 2026",
    readTime: "5 dk okuma",
    category: "DevOps & Cloud",
    featured: false,
    tags: ["Docker", "DevOps", "Containers", "Microservices", "Spring Boot", "Architecture"],
    content: `
### 🚀 Giriş: "Benim Bilgisayarımda Çalışıyordu!" Problemine Son
Yazılım geliştirmede en sık karşılaşılan sorunlardan biri, bir uygulamanın geliştiricinin bilgisayarında sorunsuz çalışırken test sunucusunda veya canlıda (Production) hata vermesidir. İşletim sistemi farklılıkları, kütüphane versiyon uyuşmazlıkları ve ortam değişkenleri bu duruma yol açar.

**Docker**, yazılımı ve çalıştığı tüm bağımlılıkları (veritabanı, kütüphaneler, ortam konfigürasyonları) tek bir **Konteyner (Container)** içinde paketleyerek bu problemi kökten çözer.

---

### 💡 Docker Ne İşe Yarar ve Avantajları Nelerdir?

1. **Tam İzolasyon (Isolation):** Her uygulama kendi bağımsız izolasyon alanında çalışır. Aynı sunucuda farklı Java veya Node.js sürümleri çakışmadan barınabilir.
2. **Hafif ve Hızlı (Lightweight):** Sanal Makineler (Virtual Machine) gibi her konteyner için ayrı bir işletim sistemi kurmaz. Sunucunun OS Çekirdeğini (Kernel) paylaşır, milisaniyeler içinde başlar.
3. **Taşınabilirlik (Portability - Build Once, Run Anywhere):** Kendi bilgisayarınızda oluşturduğunuz bir Docker imajı, AWS, Azure, Google Cloud veya herhangi bir Linux sunucuda birebir aynı şekilde çalışır.
4. **Mikroservis Kolaylığı:** Spring Boot, Redis, PostgreSQL gibi mikroservis bileşenlerini tek tıkla ayağa kaldırmanızı sağlar.

---

### 🛠️ Docker Temel Kavramları

- **Dockerfile:** Uygulamanızın nasıl paketleneceğini belirten adım adım tarif dosyasıdır.
- **Docker Image (İmaj):** Dockerfile'ın derlenmiş, çalıştırılmaya hazır, salt-okunur şablon halidir.
- **Docker Container:** İmajın hafızada çalışan canlı örneğidir.
- **Docker Compose:** Birden fazla konteyner içeren sistemleri (örn. Spring Boot Backend + PostgreSQL DB + Redis Cache) tek bir \`docker-compose.yml\` dosyası ile yönetmeyi sağlar.

---

### 📦 Örnek Kullanım: Spring Boot Uygulamasını Dockerize Etme

#### 1. Dockerfile Oluşturma
Projenizin kök dizinine aşağıdaki \`Dockerfile\` dosyasını ekleyin:

\`\`\`dockerfile
# 1. Aşama: Çalışma Zamanı Ortamı (JDK 17)
FROM eclipse-temurin:17-jdk-alpine

# Working Directory
WORKDIR /app

# JAR dosyasını konteynere kopyala
COPY target/app.jar app.jar

# Uygulama Portunu Dışa Aç
EXPOSE 8080

# Uygulamayı Başlat
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

#### 2. Temel Terminal Komutları

- **İmaj Derleme (Build):**
  \`\`\`bash
  docker build -t my-backend-app:v1 .
  \`\`\`

- **Konteyneri Başlatma (Run):**
  \`\`\`bash
  docker run -d -p 8080:8080 --name backend-service my-backend-app:v1
  \`\`\`

- **Çalışan Konteynerleri Listeleme:**
  \`\`\`bash
  docker ps
  \`\`\`

- **Konteyner Loglarını İzleme:**
  \`\`\`bash
  docker logs -f backend-service
  \`\`\`

---

### 🌟 Özet
Docker; modern yazılım mimarilerinde **DevOps, mikroservis ve bulut (Cloud-Native)** süreçlerinin vazgeçilmez standardıdır.
`
  },
  {
    id: 3,
    slug: "redis-nedir-ne-ise-yarar-caching-rehberi",
    title: "Redis Nedir, Ne İşe Yarar? High-Performance Caching Stratejileri",
    summary: "Veritabanı okuma yükünü hafifletmek, milisaniyelik yanıt süreleri elde etmek ve distributed caching mimarisi kurmak için Redis bellek içi veri deposu rehberi.",
    author: "Furkan Masraf",
    date: "17 Ağustos 2026",
    readTime: "5 dk okuma",
    category: "Database & Caching",
    featured: false,
    tags: ["Redis", "Caching", "Backend Architecture", "Spring Boot", "Performance", "NoSQL"],
    content: `
### ⚡ Giriş: Yüksek Performanslı Sistemlerde Redis'in Yeri
Kurumsal yazılım mimarilerinde veritabanına yapılan yoğun okuma sorguları (read-heavy workloads) zamanla yanıt sürelerini yükseltir ve sunucu kaynaklarını tüketir. **Redis (Remote Dictionary Server)**, verileri doğrudan sunucunun RAM hafızasında saklayarak milisaniyeler altında (sub-millisecond) veri erişimi sağlayan açık kaynaklı bir in-memory veri deposudur.

---

### 💡 Redis Ne İşe Yarar ve Kullanım Senaryoları Nelerdir?

1. **Önbellekleme (Caching):** Sık erişilen ancak seyrek değişen verileri (ürün katalogları, kullanıcı profilleri, konfigürasyonlar) bellekten dönerek veritabanı yükünü %80-90 oranında hafifletir.
2. **Dağıtık Oturum Yönetimi (Distributed Session Management):** Birden fazla sunucuda çalışan mikroservis mimarilerinde oturum verilerini ortak Redis sunucusunda saklama.
3. **Anlık Sayaçlar & Rate Limiting:** API istek sınırlandırma (Rate Limiter), canlı ziyaretçi sayaçları veya skor tabloları (Leaderboard).
4. **Mesajlaşma (Pub/Sub):** Servisler arasında hafif ve anlık olay (event) yayını.

---

### 🛠️ Redis Veri Yapıları
Klasik Key-Value depolarından farklı olarak Redis zengin veri yapılarını destekler:
- **Strings:** Metin, sayı veya JSON metinleri.
- **Hashes:** Nesne alanlarını saklama (\`user:100 ➔ name: Furkan, role: Dev\`).
- **Lists:** Kuyruk (FIFO/LIFO) yönetimi.
- **Sets & Sorted Sets (ZSET):** Benzersiz veri kümeleri ve skor bazlı sıralamalar.

---

### 📦 Spring Boot & Redis Caching Entegrasyonu

#### 1. Bağımlılık (pom.xml)
\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
\`\`\`

#### 2. Service Katmanında @Cacheable Kullanımı
\`\`\`java
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // İlk istek veritabanından çekilip Redis'e yazılır, sonraki istekler Redis'ten döner!
    @Cacheable(value = "users", key = "#id")
    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserDTO::new)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));
    }

    // Veri güncellendiğinde Redis'teki bayat veriyi temizler
    @CacheEvict(value = "users", key = "#userDTO.id")
    public UserDTO updateUser(UserDTO userDTO) {
        // Güncelleme mantığı...
        return updatedUser;
    }
}
\`\`\`

---

### 💡 Dikkat Edilmesi Gereken Caching Stratejileri
- **TTL (Time-To-Live):** Bellek şişmesini önlemek için her cache verisine mantıklı bir yaşam süresi (örn. 30 dakika) tanımlayın.
- **Cache Invalidation:** Veri güncellendiğinde veya silindiğinde önbellekteki eski veriyi mutlaka temizleyin (\`@CacheEvict\`).
`
  },
  {
    id: 4,
    slug: "postman-nedir-ne-ise-yarar-api-test-rehberi",
    title: "Postman Nedir, Ne İşe Yarar? API Test ve Geliştirme Rehberi",
    summary: "Backend servislerini test etme, HTTP istekleri simüle etme, ortam değişkenleri (Environment) yönetimi ve otomatik test senaryoları kurgulamak için Postman platformu kullanım rehberi.",
    author: "Furkan Masraf",
    date: "17 Ağustos 2026",
    readTime: "4 dk okuma",
    category: "API Testing & Tools",
    featured: false,
    tags: ["Postman", "API Testing", "REST API", "Backend Tools", "Swagger", "Automation"],
    content: `
### 🚀 Giriş: Backend Geliştirmede Postman'in Rolü
Bir backend geliştiricisi olarak hazırladığımız RESTful API uç noktalarını frontend (kullanıcı arayüzü) geliştirmesi tamamlanmadan önce doğrudan test etmemiz gerekir. **Postman**, HTTP isteklerini (\`GET\`, \`POST\`, \`PUT\`, \`DELETE\`) simüle ederek backend servislerinin yanıtlarını, durum kodlarını ve veri yapılarını test etmeyi sağlayan dünyaca ünlü bir API geliştirme platformudur.

---

### 💡 Postman Ne İşe Yarar ve Avantajları Nelerdir?

1. **Çok Yönlü HTTP İstekleri:** İstek başlıkları (Headers), URL parametreleri (Query Params) ve JSON gövdesi (Body) ile özelleştirilmiş istekler gönderme.
2. **Koleksiyonlar (Collections):** Tüm API endpoint'lerini projeler ve modüller halinde klasörleyip kaydedebilme, geliştirici ekibiyle paylaşma.
3. **Ortam Değişkenleri (Environment Variables):** Yerel geliştirme (\`http://localhost:8080\`), test sunucusu (Staging) ve canlı ortam (Production) URL/Token değerleri arasında tek tıkla geçiş yapabilme.
4. **Otomatik Test Script'leri:** Yanıt kodlarını (\`200 OK\`, \`401 Unauthorized\`), JSON şemalarını ve yanıt sürelerini JavaScript yazarak otomatik doğrulama.

---

### 🛠️ Örnek Postman Otomatik Test Scripti (Tests Tab)

Postman içinde bir isteğin **Tests** sekmesine JavaScript kodları yazarak otomatik doğrulama yapabilirsiniz:

\`\`\`javascript
// 1. Yanıt Kodu 200 OK mi?
pm.test("HTTP Yanıt Kodu 200 Olmalı", function () {
    pm.response.to.have.status(200);
});

// 2. Yanıt Süresi 500ms Altında mı?
pm.test("Yanıt Süresi Hızlı Olmalı (< 500ms)", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// 3. Oturum Token'ını Ortam Değişkenine Otomatik Kaydetme
var responseData = pm.response.json();
if (responseData.token) {
    pm.environment.set("jwt_token", responseData.token);
    console.log("JWT Token ortama kaydedildi.");
}
\`\`\`

---

### 🌟 Özet
Postman; backend ve frontend ekipleri arasında **kesintisiz entegrasyon, hızlı hata tespiti ve kaliteli API testi** sağlayan temel bir araçtır.
`
  },
  {
    id: 5,
    slug: "aspect-oriented-programming-aop-nedir-rehberi",
    title: "Aspect-Oriented Programming (AOP) Nedir? Spring Boot AOP Rehberi",
    summary: "Nesne Yönelimli Programlamayı (OOP) tamamlayan, kod tekrarını önleyen ve loglama, güvenlik, transaction yönetimi gibi çapraz kesen ilgileri (Cross-Cutting Concerns) modülerleştiren AOP mimarisi rehberi.",
    author: "Furkan Masraf",
    date: "17 Ağustos 2026",
    readTime: "6 dk okuma",
    category: "Clean Architecture",
    featured: false,
    tags: ["AOP", "Spring AOP", "Clean Code", "Design Patterns", "Java", "Backend"],
    content: `
### 🚀 Giriş: AOP (Cephe Yönelimli Programlama) Nedir?
Geleneksel Nesne Yönelimli Programlamada (OOP) sınıflar ve nesneler üzerinden modüler yapılar kurgularız. Ancak kurumsal yazılımlarda birçok farklı sınıf ve metodun içinde **ortak olarak tekrarlanan yan sorumluluklar** bulunur. Loglama (Logging), Güvenlik/Yetkilendirme (Security), Veritabanı Transaction Yönetimi ve Metod Performans Ölçümü bu sorumluluklara örnektir.

**Aspect-Oriented Programming (AOP)**, iş mantığıyla (Business Logic) doğrudan ilgisi olmayan bu ortak yan sorumlulukları **Çapraz Kesen İlgiler (Cross-Cutting Concerns)** adı altında toplayıp ana kod kümesinden izole eden güçlü bir programlama yaklaşımıdır.

---

### 💡 AOP Neden Kullanılır ve Avantajları Nelerdir?

1. **Temiz ve Okunabilir Kod (Clean Code):** İş mantığı metodlarınızın içi try-catch blokları, log ifadeleri veya performans sayaçları ile dolmaz. Metod sadece kendi ana işine odaklanır (Single Responsibility Principle).
2. **Kod Tekrarına Son (DRY - Don't Repeat Yourself):** Bir loglama biçimi veya yetki kontrolü değiştiğinde 100 farklı servisteki metodları tek tek değiştirmek yerine sadece ilgili **Aspect** sınıfını güncellemeniz yeterlidir.
3. **Merkezi Yönetim ve Modülerlik:** Güvenlik ve performans izleme gibi sistem seviyesi ilgiler tek bir noktadan yönetilir.

---

### 🛠️ AOP Temel Kavramları (Terminoloji)

- **Aspect (Cephe):** Çapraz kesen ilgiyi modüler hale getiren sınıftır (örn. \`@Aspect\` anotasyonu ile işaretlenen loglama sınıfı).
- **Join Point (Bağlanma Noktası):** Uygulama akışında Aspect'in müdahale edebileceği spesifik bir koddur (metod çağrısı, exception anı vb.).
- **Pointcut (Kesişim Noktası):** Hangi metodların Aspect tarafından tetikleneceğini belirten filtre veya ifadedir (örn. *"service paketindeki tüm public metodlar"*).
- **Advice (Eylem / Tavsiye):** Aspect'in **ne zaman** çalışacağını belirten tetikleyici türüdür:
  - **@Before:** Hedef metod çalışmadan **önce**.
  - **@After:** Hedef metod çalıştıktan **sonra** (başarılı veya hatalı).
  - **@AfterReturning:** Hedef metod **başarıyla sonuçlandığında**.
  - **@AfterThrowing:** Hedef metod **hata (Exception) fırlattığında**.
  - **@Around:** Hedef metodun **hem öncesinde hem sonrasında** çalışarak metodun çalışmasını tamamen kontrol edebilen en güçlü tavsiye türüdür.

---

### 📦 Örnek Kullanım: Spring Boot ile Metod Performansı Ölçen Aspect

#### 1. Özel Anotasyon Tanımlama (@LogExecutionTime)
\`\`\`java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface LogExecutionTime {
}
\`\`\`

#### 2. Aspect Sınıfını Yazma (@Around Advice)
\`\`\`java
@Aspect
@Component
@Slf4j
public class PerformanceLoggingAspect {

    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object proceed = joinPoint.proceed(); // Hedef metodu çalıştır

        long executionTime = System.currentTimeMillis() - start;
        log.info("⏱️ [AOP Log] {} metodu {} ms sürede tamamlandı.", 
                joinPoint.getSignature().toShortString(), executionTime);

        return proceed;
    }
}
\`\`\`

#### 3. Servis Metodunda Kullanımı
\`\`\`java
@Service
public class ReportService {

    @LogExecutionTime
    public void generateMonthlyReport() {
        // Ağır rapor hesaplama işlemleri...
    }
}
\`\`\`

---

### 🌟 Özet
Aspect-Oriented Programming (AOP); Spring Boot ve kurumsal backend mimarilerinde **kod kalitesini artıran, okunabilirliği yükselten ve spagetti kod oluşumunu engelleyen** en temel tasarım kalıplarından biridir.
`
  },
  {
    id: 6,
    slug: "swagger-nedir-ne-ise-yarar-kullanim-amaci-rehberi",
    title: "Swagger (OpenAPI) Nedir, Ne İşe Yarar ve Kullanım Amacı Nedir? (Spring Boot & REST API Rehberi)",
    summary: "REST API'lerinizi canlı ve etkileşimli olarak dokümante etmeyi, frontend geliştiricilerle kesintisiz haberleşmeyi ve API testlerini arayüz üzerinden yapmayı sağlayan Swagger (OpenAPI 3.0) standartları rehberi.",
    author: "Furkan Masraf",
    date: "22 Ağustos 2026",
    readTime: "5 dk okuma",
    category: "API Documentation & Tools",
    featured: false,
    tags: ["Swagger", "OpenAPI", "API Documentation", "Spring Boot", "REST API", "Postman"],
    content: `
### 🚀 Giriş: Yazılım Projelerinde API Dokümantasyonunun Önemi
Modern backend ve mikroservis geliştirmede hazırladığımız RESTful API uç noktalarını (endpoints) doğru şekilde belgelemek yazılım kalitesinin en kritik adımlarından biridir. Dokümantasyonu yapılmamış veya güncelliğini yitirmiş (outdated PDF/Excel) bir API; frontend (React, Vue), mobil ve entegrasyon ekipleri için ciddi zaman kayıplarına ve iletişim hatalarına yol açar.

**Swagger (güncel adıyla OpenAPI Specification)**, RESTful servislerin yapısını, parametrelerini, yanıt modellerini (JSON Schema) ve durum kodlarını hem insanların hem de makinelerin okuyabileceği standart bir formatta canlı olarak dokümante eden ve test imkanı sunan bir araç setidir.

---

### 💡 Swagger ve OpenAPI Arasındaki Fark Nedir?
Sektörde sıklıkla karıştırılan iki kavram arasındaki fark şudur:
- **OpenAPI Specification (OAS):** REST API'lerin dil bağımsız olarak nasıl tanımlanacağını belirten uluslararası açık standart / şartnamedir (Specification).
- **Swagger:** OpenAPI şartnamesini uygulamak, görselleştirmek, canlı UI arayüzü sunmak (\`Swagger UI\`) ve otomatik kod üretmek (\`Swagger Codegen\`) için kullanılan popüler açık kaynaklı araçlar kümesidir (Tooling).

---

### 🛠️ Swagger / OpenAPI Kullanım Amaçları ve Avantajları

1. **Canlı ve Kendiliğinden Güncellenen Dokümantasyon:**
   Kod tabanınızda bir DTO alanı veya endpoint değiştirdiğinizde Swagger dokümantasyonu anında güncellenir. Statik PDF veya Word dokümanı tutma zorunluluğu ortadan kalkar.

2. **İnteraktif API Testi ("Try it out"):**
   Geliştiricilerin veya test mühendislerinin Postman gibi harici bir araca bile ihtiyaç duymadan doğrudan tarayıcı üzerinden parametre girerek API istekleri göndermesini ve canlı JSON yanıtlarını incelemesini sağlar.

3. **Frontend ve Mobil Ekiplerle Kesintisiz Entegrasyon:**
   İstemci tarafını geliştiren mühendisler hangi endpoint'in ne tür parametreler beklediğini, hangi HTTP durum kodlarını (\`200 OK\`, \`400 Bad Request\`, \`401 Unauthorized\`, \`404 Not Found\`) döndürdüğünü şeffafça görür.

4. **Veri Modelleri ve Validasyon Kuralları (Schema Viewer):**
   Request ve Response gövdelerinde kullanılan nesnelerin (DTO) zorunlu alanlarını, veri tiplerini (\`string\`, \`integer\`, \`enum\`) ve maksimum/minimum sınırlarını şematik olarak sergiler.

---

### 📦 Spring Boot 3 & Springdoc OpenAPI Entegrasyonu

Spring Boot projelerinde Swagger (OpenAPI 3.0) entegrasyonu yapmak son derece kolaydır.

#### 1. Bağımlılık (pom.xml)
\`\`\`xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
\`\`\`

#### 2. RestController Üzerinde Annotation Kullanımı
\`\`\`java
@RestController
@RequestMapping("/api/v1/users")
@Tag(name = "User Management", description = "Kullanıcı kaydı, profil güncelleme ve detay sorgulama servisleri")
public class UserController {

    @Operation(
        summary = "ID ile Kullanıcı Detayı Getir",
        description = "Sistemde kayıtlı kullanıcının benzersiz ID bilgisini alarak profil verilerini döndürür."
    )
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Kullanıcı başarıyla bulundu"),
        @ApiResponse(responseCode = "404", description = "Kullanıcı bulunamadı"),
        @ApiResponse(responseCode = "401", description = "Yetkisiz erişim / Geçersiz Token")
    })
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(
        @Parameter(description = "Sorgulanacak kullanıcının benzersiz ID'si", example = "42")
        @PathVariable Long id
    ) {
        return ResponseEntity.ok(userService.findById(id));
    }
}
\`\`\`

#### 3. Swagger UI Arayüzüne Erişim
Uygulamanızı başlattıktan sonra tarayıcınızdan aşağıdaki adrese girerek canlı API arayüzüne erişebilirsiniz:
\`\`\`text
http://localhost:8080/swagger-ui.html
\`\`\`

---

### 🌟 Özet
Swagger ve OpenAPI 3.0; modern backend geliştirme süreçlerinde **ölçeklenebilir, şeffaf, kolay test edilebilir ve profesyonel** yazılım mimarileri kurmanın vazgeçilmez bir standardıdır.
`
  }
];

export const BLOG_POSTS_EN: BlogPost[] = [
  {
    id: 1,
    slug: "api-tasarimi-nasil-yapilir",
    title: "RESTful API Design Principles in Modern Backend Architectures",
    summary: "Architectural approaches, security best practices, and Spring Boot coding principles for building scalable, maintainable enterprise REST APIs.",
    author: "Furkan Masraf",
    date: "August 17, 2026",
    readTime: "6 min read",
    category: "API Design",
    featured: false,
    tags: ["API Design", "RESTful API", "Spring Boot", "Swagger", "Clean Code", "Security"],
    content: `
### 🚀 Introduction: Enterprise API Architecture
In modern software engineering, backend APIs serve as the primary communication bridge between web clients, mobile apps, and microservices. **A well-designed API is intuitive, secure, maintainable, and scalable under load.**

---

### 🌐 1. Resource-Oriented Naming Standard
REST APIs model **resources, not actions**. Always use plural nouns and standard HTTP verbs (\`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`).

#### Clean Endpoint Standard:
- \`GET /api/v1/users\` ➔ Fetch user list.
- \`POST /api/v1/users\` ➔ Create a new user.
- \`GET /api/v1/users/{id}\` ➔ Fetch user details.
- \`PUT /api/v1/users/{id}\` ➔ Update user entity.
- \`DELETE /api/v1/users/{id}\` ➔ Delete user entity.

---

### 🛡️ 2. DTO (Data Transfer Object) Abstraction
Never expose JPA database entities directly to API clients. Use dedicated Request/Response DTOs with input sanitization annotations (\`@Valid\`, \`@NotNull\`, \`@Size\`).

---

### 🔑 3. Security & Stateless Authentication
- **Stateless JWT:** Token-based authentication eliminating server session state.
- **Transport Encryption:** Enforce HTTPS / TLS across all API endpoints.

---

### ⚠️ 4. Centralized Exception Shield
Handle runtime errors centrally using Spring Boot's \`@ControllerAdvice\`, returning RFC 7807 problem details payloads.
`
  },
  {
    id: 2,
    slug: "docker-nedir-ne-ise-yarar-nasil-kullanilir",
    title: "What is Docker, Why Use It, and How to Use It? (Container Architecture Guide)",
    summary: "An essential developer guide to containerization with Docker, enabling seamless execution of applications across local and cloud environments.",
    author: "Furkan Masraf",
    date: "August 17, 2026",
    readTime: "5 min read",
    category: "DevOps & Cloud",
    featured: false,
    tags: ["Docker", "DevOps", "Containers", "Microservices", "Spring Boot", "Architecture"],
    content: `
### 🚀 Introduction: Eliminating "It Works on My Machine"
In modern software engineering, code behaving differently across local machines, staging environments, and production servers is a classic bottleneck. Operating system variations and dependency mismatches cause unexpected runtime crashes.

**Docker** solves this by bundling application code, runtime libraries, environment variables, and dependencies into lightweight, isolated **Containers**.

---

### 💡 Core Benefits of Docker

1. **Full Isolation:** Applications execute in isolated sandboxes without dependency version conflicts.
2. **Lightweight & Sub-Second Boot:** Shares the host OS kernel instead of virtualizing entire operating systems like traditional Virtual Machines (VMs).
3. **Portability (Build Once, Run Anywhere):** An image built on macOS or Windows runs identically on AWS, GCP, Azure, or Ubuntu Linux servers.

---

### 🛠️ Key Concepts

- **Dockerfile:** Text document containing instructions to build a Docker Image.
- **Docker Image:** Executable, immutable package containing application binaries and dependencies.
- **Docker Container:** A runnable instance of a Docker Image.
- **Docker Compose:** Orchestrates multi-container applications (e.g. Spring Boot + PostgreSQL + Redis) using a single YAML configuration.

---

### 📦 Production Usage Example: Dockerizing Spring Boot

\`\`\`dockerfile
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

#### Essential CLI Commands:

\`\`\`bash
# Build Image
docker build -t my-backend-app:v1 .

# Run Container
docker run -d -p 8080:8080 --name backend-service my-backend-app:v1

# View Running Containers
docker ps
\`\`\`
`
  },
  {
    id: 3,
    slug: "redis-nedir-ne-ise-yarar-caching-rehberi",
    title: "What is Redis and Why Use It? High-Performance Caching Strategies",
    summary: "An engineering guide to Redis in-memory data store for alleviating database workload, sub-millisecond query latencies, and distributed caching.",
    author: "Furkan Masraf",
    date: "August 17, 2026",
    readTime: "5 min read",
    category: "Database & Caching",
    featured: false,
    tags: ["Redis", "Caching", "Backend Architecture", "Spring Boot", "Performance", "NoSQL"],
    content: `
### ⚡ Introduction: The Power of In-Memory Data Stores
In high-throughput enterprise systems, repeated database queries bottleneck response times. **Redis (Remote Dictionary Server)** stores data directly in RAM, achieving sub-millisecond query latencies.

---

### 💡 Core Use Cases for Redis

1. **Caching Layer:** Caching hot data (product catalogs, user profiles) to reduce database load by up to 90%.
2. **Distributed Sessions:** Storing user session tokens across multi-instance microservices.
3. **Rate Limiting & Counters:** Enforcing API rate limits and maintaining real-time leaderboards.
`
  },
  {
    id: 4,
    slug: "postman-nedir-ne-ise-yarar-api-test-rehberi",
    title: "What is Postman and Why Use It? API Testing & Automation Guide",
    summary: "A practical guide to Postman for simulating HTTP requests, managing environments, and writing automated API assertions in backend development.",
    author: "Furkan Masraf",
    date: "August 17, 2026",
    readTime: "4 min read",
    category: "API Testing & Tools",
    featured: false,
    tags: ["Postman", "API Testing", "REST API", "Backend Tools", "Swagger", "Automation"],
    content: `
### 🚀 Introduction: Testing Backend APIs Efficiently
Before UI frontend components are built, backend engineers must test REST API endpoints directly. **Postman** is the industry-standard API client platform for executing, debugging, and automating HTTP requests (\`GET\`, \`POST\`, \`PUT\`, \`DELETE\`).

---

### 💡 Core Advantages of Postman

1. **Custom HTTP Requests:** Pass headers, URL parameters, authentication tokens (Bearer JWT), and JSON payloads effortlessly.
2. **Collections & Sharing:** Organize endpoints into structured project folders and export them across engineering teams.
3. **Environment Management:** Switch seamlessly between \`localhost:8080\`, staging, and production environments.
4. **Automated Testing Scripts:** Write JavaScript assertions to validate HTTP status codes, response schemas, and response times.
`
  },
  {
    id: 5,
    slug: "aspect-oriented-programming-aop-nedir-rehberi",
    title: "What is Aspect-Oriented Programming (AOP)? Spring Boot AOP Guide",
    summary: "An engineering guide to Aspect-Oriented Programming for modularizing Cross-Cutting Concerns such as logging, security, and transaction management in Spring Boot.",
    author: "Furkan Masraf",
    date: "August 17, 2026",
    readTime: "6 min read",
    category: "Clean Architecture",
    featured: false,
    tags: ["AOP", "Spring AOP", "Clean Code", "Design Patterns", "Java", "Backend"],
    content: `
### 🚀 Introduction: Decoupling Cross-Cutting Concerns
While Object-Oriented Programming (OOP) excels at modularizing domain entities, corporate applications often suffer from duplicated infrastructure logic spanning across multiple layers. Logging, security authorization, transaction control, and performance monitoring are prime examples.

**Aspect-Oriented Programming (AOP)** complements OOP by isolating these **Cross-Cutting Concerns** into independent **Aspects**, keeping business logic clean and maintainable.

---

### 💡 Core Benefits of AOP

1. **Clean Code & Single Responsibility:** Business methods focus purely on domain rules without cluttering \`try-catch\` or logging statements.
2. **DRY Principle (Don't Repeat Yourself):** Modifying a logging or authorization policy requires updating a single Aspect class instead of hundreds of service methods.
3. **Centralized Infrastructure Governance:** Security checks and performance metrics are governed from a single source.

---

### 🛠️ Key Terminology

- **Aspect:** A module encapsulating a cross-cutting concern (e.g. annotated with \`@Aspect\`).
- **Join Point:** A candidate execution point in code (such as a method call or exception event).
- **Pointcut:** A predicate or expression matching specific Join Points.
- **Advice:** Action taken at a Join Point (\`@Before\`, \`@After\`, \`@Around\`).

---

### 📦 Code Example: Spring Boot Execution Time Aspect

\`\`\`java
@Aspect
@Component
@Slf4j
public class PerformanceLoggingAspect {

    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object proceed = joinPoint.proceed();
        long executionTime = System.currentTimeMillis() - start;

        log.info("⏱️ [AOP] {} executed in {} ms", joinPoint.getSignature().toShortString(), executionTime);
        return proceed;
    }
}
\`\`\`
`
  },
  {
    id: 6,
    slug: "swagger-nedir-ne-ise-yarar-kullanim-amaci-rehberi",
    title: "What is Swagger (OpenAPI) and Why Use It? (Spring Boot & REST API Guide)",
    summary: "A practical engineering guide to Swagger (OpenAPI 3.0) standards for generating live interactive API documentation, facilitating frontend integration, and testing endpoints directly in browser.",
    author: "Furkan Masraf",
    date: "August 22, 2026",
    readTime: "5 min read",
    category: "API Documentation & Tools",
    featured: false,
    tags: ["Swagger", "OpenAPI", "API Documentation", "Spring Boot", "REST API", "Postman"],
    content: `
### 🚀 Introduction: The Critical Role of API Documentation
In modern backend and microservices software development, documenting RESTful API endpoints accurately is a fundamental quality requirement. Outdated static documents (PDF/Excel) lead to integration delays, miscommunication, and productivity loss across frontend (React, Vue) and mobile engineering teams.

**Swagger (now OpenAPI Specification)** solves this by providing a standardized, language-agnostic format for live API documentation and interactive browser testing.

---

### 💡 Difference Between OpenAPI and Swagger
- **OpenAPI Specification (OAS):** The open industry specification defining standard REST API contracts.
- **Swagger:** The open-source tooling ecosystem (\`Swagger UI\`, \`Swagger Codegen\`) used to render, visualize, and generate code from OpenAPI specifications.

---

### 🛠️ Key Benefits of Swagger

1. **Self-Updating Live Documentation:**
   Modifying a DTO property or controller endpoint instantly reflects in the Swagger UI, eliminating manual document updates.

2. **Interactive API Testing ("Try it out"):**
   Engineers and QA teams can execute HTTP requests directly inside the browser and inspect real JSON response models without needing external tools.

3. **Seamless Frontend & Mobile Integration:**
   Provides full visibility into request parameters, response structures, and HTTP status codes (\`200 OK\`, \`400 Bad Request\`, \`401 Unauthorized\`, \`404 Not Found\`).

4. **Data Schema Visualization:**
   Displays Data Transfer Object (DTO) validation constraints, field data types, and required properties schematically.

---

### 📦 Spring Boot 3 & Springdoc OpenAPI Setup

#### 1. Add Dependency (pom.xml)
\`\`\`xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
\`\`\`

#### 2. RestController Annotations Example
\`\`\`java
@RestController
@RequestMapping("/api/v1/users")
@Tag(name = "User Management", description = "Endpoints for fetching and updating user profiles")
public class UserController {

    @Operation(
        summary = "Fetch User By ID",
        description = "Retrieves user profile data by unique user identifier."
    )
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "User successfully retrieved"),
        @ApiResponse(responseCode = "404", description = "User not found"),
        @ApiResponse(responseCode = "401", description = "Unauthorized access / Invalid token")
    })
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(
        @Parameter(description = "Unique ID of the target user", example = "42")
        @PathVariable Long id
    ) {
        return ResponseEntity.ok(userService.findById(id));
    }
}
\`\`\`

#### 3. Accessing Swagger UI
Launch your application and navigate to:
\`\`\`text
http://localhost:8080/swagger-ui.html
\`\`\`

---

### 🌟 Conclusion
Swagger and OpenAPI 3.0 represent the industry standard for creating **transparent, testable, and maintainable** REST API architectures.
`
  }
];

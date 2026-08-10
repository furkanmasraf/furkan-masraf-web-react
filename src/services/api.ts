import type { ProfileInfo, Experience, Project, Skill, Certificate, ContactFormData, ApiResponse } from '../types';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const CORRECT_LINKEDIN_URL = "https://www.linkedin.com/in/furkan-masraf-20a8681b6/";

export function sanitizeLinkedinUrl(url?: string): string {
  if (!url || !url.includes('furkan-masraf-20a8681b6')) {
    return CORRECT_LINKEDIN_URL;
  }
  return url;
}

// Initial Fallback Seed Data matching Furkan Masraf CV
export const FALLBACK_PROFILE: ProfileInfo = {
  fullName: "Furkan Masraf",
  title: "Backend & Full-Stack Developer (Java & C# .NET)",
  email: "masraffurkan@gmail.com",
  phone: "+90 538 472 75 54",
  location: "İstanbul, Türkiye",
  linkedinUrl: CORRECT_LINKEDIN_URL,
  githubUrl: "https://github.com/furkanmasraf",
  bio: "Java (Spring Boot) ve C# (.NET) ekosistemlerinde kurumsal düzeyde backend sistemleri, mikroservis mimarileri ve yüksek erişilebilirlikli RESTful API'ler geliştiren Bilgisayar Mühendisi. Modern Web (React) ve Mobil Uygulama tecrübesiyle birlikte Clean Code prensipleri, Redis caching, veritabanı optimizasyonu ve güvenli yazılım mimarileri kurgulama konusunda tutkulu bir mühendislik yaklaşımına sahibim.",
  university: "Üsküdar Üniversitesi",
  department: "Bilgisayar Mühendisliği",
  graduationYear: "2020 – 2026"
};

export const FALLBACK_EXPERIENCES: Experience[] = [
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

export const FALLBACK_PROJECTS: Project[] = [
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

export const FALLBACK_SKILLS: Skill[] = [
  { id: 1, name: "Java", category: "Backend", proficiencyPercentage: 95, iconName: "code", highlightText: "Clean Code, Java 17/21" },
  { id: 2, name: "Spring Boot", category: "Backend", proficiencyPercentage: 95, iconName: "server", highlightText: "REST API, Security, Data JPA" },
  { id: 3, name: "Spring Data JPA / Hibernate", category: "Backend", proficiencyPercentage: 90, iconName: "database", highlightText: "ORM Optimization, JPQL" },
  { id: 4, name: "Spring Security & JWT", category: "Backend", proficiencyPercentage: 88, iconName: "lock", highlightText: "RBAC Auth, Token Management" },
  { id: 5, name: "Redis Caching", category: "Backend", proficiencyPercentage: 85, iconName: "zap", highlightText: "In-Memory Caching & Performance" },
  { id: 6, name: "Resilience4j & Retry", category: "Backend", proficiencyPercentage: 85, iconName: "shield", highlightText: "Fault Tolerance, Circuit Breaker" },
  { id: 7, name: "Aspect-Oriented Programming (AOP)", category: "Backend", proficiencyPercentage: 88, iconName: "layers", highlightText: "Cross-cutting Concerns & Logging" },
  { id: 8, name: "C# / .NET Core", category: "Backend", proficiencyPercentage: 80, iconName: "terminal", highlightText: "Clean Architecture, Linq" },
  { id: 9, name: "PostgreSQL", category: "Database", proficiencyPercentage: 90, iconName: "database", highlightText: "Relational Schema & Performance" },
  { id: 10, name: "Docker & Docker Compose", category: "DevOps", proficiencyPercentage: 85, iconName: "box", highlightText: "Containerization & Orchestration" },
  { id: 11, name: "JUnit 5 & Mockito", category: "Testing", proficiencyPercentage: 85, iconName: "check-circle", highlightText: "Unit Testing & Mocking" },
  { id: 12, name: "React & TypeScript", category: "Frontend", proficiencyPercentage: 80, iconName: "layout", highlightText: "Modern UI, Component State" }
];

export const FALLBACK_CERTIFICATES: Certificate[] = [
  { id: 1, title: "Data Science", issuer: "Coderspace", issueYear: "2025", description: "Veri analizi ve model değerlendirme becerileri", badgeCategory: "Data Science" },
  { id: 2, title: "Java & Spring Boot", issuer: "BTK Akademi", issueYear: "2025", description: "Backend mimarisi ve REST API geliştirme", badgeCategory: "Backend" },
  { id: 3, title: "Fibabanka Future Talent Programme", issuer: "Fibabanka", issueYear: "2025", description: "Bankacılık sistemleri ve kurumsal yazılım deneyimi", badgeCategory: "Enterprise" },
  { id: 4, title: "Java – Geleceği Yazanlar", issuer: "Turkcell", issueYear: "2025", description: "Nesne yönelimli programlama", badgeCategory: "Java" },
  { id: 5, title: "Foundational C#", issuer: "Microsoft / FreeCodeCamp", issueYear: "2024", description: ".NET temelleri", badgeCategory: ".NET" }
];

export async function fetchProfileInfo(): Promise<ProfileInfo> {
  try {
    const res = await fetch(`${API_BASE_URL}/profile`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const json: ApiResponse<ProfileInfo> = await res.json();
    return json.data || FALLBACK_PROFILE;
  } catch (error) {
    return FALLBACK_PROFILE;
  }
}

export async function fetchExperiences(): Promise<Experience[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/experiences`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const json: ApiResponse<Experience[]> = await res.json();
    return json.data && json.data.length > 0 ? json.data : FALLBACK_EXPERIENCES;
  } catch (error) {
    return FALLBACK_EXPERIENCES;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const json: ApiResponse<Project[]> = await res.json();
    return json.data && json.data.length > 0 ? json.data : FALLBACK_PROJECTS;
  } catch (error) {
    return FALLBACK_PROJECTS;
  }
}

export async function fetchSkills(): Promise<Skill[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/skills`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const json: ApiResponse<Skill[]> = await res.json();
    return json.data && json.data.length > 0 ? json.data : FALLBACK_SKILLS;
  } catch (error) {
    return FALLBACK_SKILLS;
  }
}

export async function fetchCertificates(): Promise<Certificate[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/certificates`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const json: ApiResponse<Certificate[]> = await res.json();
    return json.data && json.data.length > 0 ? json.data : FALLBACK_CERTIFICATES;
  } catch (error) {
    return FALLBACK_CERTIFICATES;
  }
}

export async function sendContactMessage(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Send Instant Email Notification directly to masraffurkan@gmail.com
    await fetch('https://formsubmit.co/ajax/masraffurkan@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        _subject: `⚡ [Portfolyo İletişim Mesajı] ${data.subject || 'Yeni İletişim Talebi'}`,
        'Gönderen Ad Soyad': data.name,
        'Gönderen E-Posta': data.email,
        'Konu Başlığı': data.subject,
        'Detaylı Mesaj': data.message,
        _template: 'table',
        _captcha: 'false'
      })
    }).catch(err => console.warn('Email dispatch notification:', err));

    // 2. Persist in Spring Boot REST API Database
    fetch(`${API_BASE_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(err => console.warn('Spring Boot API message save:', err));

    return { 
      success: true, 
      message: 'Mesajınız başarıyla iletildi! E-posta bildirimi masraffurkan@gmail.com adresinize gönderildi.' 
    };
  } catch (error) {
    return { 
      success: true, 
      message: 'Mesajınız başarıyla masraffurkan@gmail.com adresinize iletildi!' 
    };
  }
}

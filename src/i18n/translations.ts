export type Language = 'TR' | 'EN';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    blog: string;
    skills: string;
    certificates: string;
    wizard: string;
    contact: string;
    cli: string;
    backendLive: string;
    backendOffline: string;
  };
  hero: {
    badge: string;
    greeting: string;
    titleName: string;
    bio: string;
    startProject: string;
    contactMe: string;
    roles: string[];
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    academicBadge: string;
    university: string;
    degree: string;
    degreeDesc: string;
    highSchool: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    expandAll: string;
    collapseAll: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    featured: string;
    inspectDetails: string;
    techFeatures: string;
    close: string;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readArticle: string;
    readTime: string;
    allCategories: string;
    searchPlaceholder: string;
    featuredArticle: string;
    closeArticle: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    hint: string;
  };
  certificates: {
    badge: string;
    title: string;
    subtitle: string;
    verified: string;
  };
  benefits: {
    badge: string;
    title: string;
    subtitle: string;
    guarantee: string;
  };
  wizard: {
    badge: string;
    title: string;
    subtitle: string;
    step: string;
    prev: string;
    next: string;
    submit: string;
    submitting: string;
    successTitle: string;
    newProposal: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendBtn: string;
    sendingBtn: string;
    successToast: string;
    errorToast: string;
    emailTitle: string;
    socialsTitle: string;
  };
  footer: {
    rightsReserved: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  TR: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      blog: "Blog & Mühendislik",
      skills: "Yetenekler",
      certificates: "Sertifikalar",
      wizard: "İş Birliği",
      contact: "İletişim",
      cli: "Developer CLI",
      backendLive: "SPRING REST LIVE",
      backendOffline: "OFFLINE MODE"
    },
    hero: {
      badge: "Web, Mobil ve Backend Projeleriniz İçin İletişime Geçin",
      greeting: "Merhaba, Ben",
      titleName: "FURKAN MASRAF",
      bio: "Java Spring Boot ve C# .NET kurumsal backend mimarilerinden React web ve mobil uygulama çözümlerine uzanan geniş yetenek havuzumla; fikirlerinizi yüksek performanslı, ölçeklenebilir ve modern canlı yazılım projelerine dönüştürüyorum.",
      startProject: "Proje & İş Birliği Başlatın",
      contactMe: "Direkt İletişim",
      roles: [
        "Backend Developer",
        "Java Spring Boot & C# .NET Geliştirici",
        "Web & Mobil Uygulama Geliştirici",
        "Clean Code & Mikroservis Mimarisi"
      ]
    },
    about: {
      badge: "HAKKIMDA & MÜHENDİSLİK VİZYONU",
      title: "Hakkımda & Mühendislik İlkelerim",
      subtitle: "Üsküdar Üniversitesi Bilgisayar Mühendisliği mezuniyet sürecimde kurumsal bankacılık ve teknoloji stajlarında edindiğim pratik tecrübeler, yazılım standartlarım ve mühendislik yaklaşımım:",
      academicBadge: "AKADEMİK GEÇMİŞ & EĞİTİM",
      university: "Üsküdar Üniversitesi",
      degree: "Bilgisayar Mühendisliği (Lisans)",
      degreeDesc: "Veri yapıları, algoritma analizi, nesne yönelimli programlama, veritabanı sistemleri ve dağıtık yazılım mimarileri üzerine mühendislik eğitimi.",
      highSchool: "Lise: Tuğrul Bey Anadolu Lisesi (2015 – 2019)"
    },
    experience: {
      badge: "KURUMSAL TECRÜBE VE STAJLAR",
      title: "İş ve Staj Deneyimlerim",
      subtitle: "Türkiye'nin önde gelen teknoloji ve bankacılık kurumlarında edindiğim pratik saha tecrübeleri:",
      expandAll: "Tüm Detayları Genişlet",
      collapseAll: "Tüm Detayları Daralt"
    },
    projects: {
      badge: "PORTFOLYO & PROJELER",
      title: "Öne Çıkan Yazılım Projelerim",
      subtitle: "Detaylarını ve mimari özelliklerini incelemek için projenin üzerine tıklayın:",
      featured: "ÖNE ÇIKAN",
      inspectDetails: "Mimari Detayları İncele",
      techFeatures: "Mimari & Teknik Özellikler:",
      close: "Kapat"
    },
    blog: {
      badge: "TEKNİK MAKALE VE MÜHENDİSLİK NOTLARI",
      title: "Mühendislik & Backend Blogu",
      subtitle: "REST API mimarileri, Spring Boot best-practice'leri, caching stratejileri ve kurumsal yazılım mühendisliği üzerine kaleme aldığım teknik rehberler:",
      readArticle: "Yazıyı Oku",
      readTime: "okuma",
      allCategories: "Tüm Kategoriler",
      searchPlaceholder: "Makale veya konu ara...",
      featuredArticle: "ÖNE ÇIKAN MAKALE",
      closeArticle: "Kapat"
    },
    skills: {
      badge: "TEKNİK YETKİNLİKLER",
      title: "Teknoloji & Yetenek Haritası",
      subtitle: "Kullandığım teknoloji ve araçları listelemek için aşağıdaki kategorilerden birine tıklayın:",
      hint: "Teknoloji stack'ini ve detayları görmek için yukarıdaki bir kategoriye tıklayın."
    },
    certificates: {
      badge: "AKREDİTE SERTİFİKALAR VE EĞİTİMLER",
      title: "Sertifika & Başarı Rozetleri",
      subtitle: "Sürekli öğrenme tutkum doğrultusunda tamamladığım profesyonel akademi ve kurumsal programlar:",
      verified: "ONAYLI SERTİFİKA"
    },
    benefits: {
      badge: "MÜŞTERİ AVANTAJLARI & KALİTE GARANTİSİ",
      title: "Neden Benimle Çalışmalısınız?",
      subtitle: "Yazılım projenizin fikir aşamasından canlı yayına geçişine kadar sunduğum mühendislik değerleri:",
      guarantee: "Garanti Edilen Standart"
    },
    wizard: {
      badge: "İNTERAKTİF PROJE & İŞ BİRLİĞİ SİHİRBAZI",
      title: "Projenizi Başlatın & İş Birliği Oluşturun",
      subtitle: "Web sitesi, mobil uygulama veya backend mimarisi ihtiyacınızı birkaç adımda belirleyin, doğrudan projenize özel yol haritası oluşturalım:",
      step: "ADIM",
      prev: "Geri",
      next: "Devam Et",
      submit: "Proje & İş Birliği Talebini Gönder",
      submitting: "Gönderiliyor...",
      successTitle: "Proje Talebiniz Başarıyla Alındı!",
      newProposal: "Yeni Teklif Oluştur"
    },
    contact: {
      badge: "İLETİŞİM VE PROJE GÖRÜŞMELERİ",
      title: "Benimle İletişime Geçin",
      subtitle: "Yeni projeler, backend iş fırsatları veya teknik sohbetler için doğrudan mesaj bırakabilirsiniz:",
      nameLabel: "Adınız Soyadınız *",
      emailLabel: "E-posta Adresiniz *",
      subjectLabel: "Konu Başlığı *",
      messageLabel: "Mesajınız *",
      sendBtn: "Mesajını İlet",
      sendingBtn: "Gönderiliyor...",
      successToast: "Mesajınız başarıyla masraffurkan@gmail.com adresime iletildi! En kısa sürede dönüş yapacağım.",
      errorToast: "Mesaj gönderilirken bir hata oluştu. Lütfen direkt e-posta ile iletişime geçin.",
      emailTitle: "E-POSTA ADRESİ",
      socialsTitle: "SOSYAL MEDYA & PLATFORMLAR"
    },
    footer: {
      rightsReserved: "Tüm Hakları Saklıdır.",
      backToTop: "Yukarı"
    }
  },
  EN: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog & Articles",
      skills: "Skills",
      certificates: "Certificates",
      wizard: "Start Project",
      contact: "Contact",
      cli: "Developer CLI",
      backendLive: "SPRING REST LIVE",
      backendOffline: "OFFLINE MODE"
    },
    hero: {
      badge: "Get in touch for Web, Mobile & Backend Projects",
      greeting: "Hello, I am",
      titleName: "FURKAN MASRAF",
      bio: "Engineering enterprise RESTful APIs, microservices architectures, Redis caching, and Clean Code solutions across Java (Spring Boot) and C# (.NET Core) ecosystems, alongside modern Web (React) and Mobile development experience.",
      startProject: "Start Project & Collaboration",
      contactMe: "Direct Contact",
      roles: [
        "Backend Developer",
        "Java Spring Boot & C# .NET Developer",
        "Web & Mobile Application Developer",
        "Clean Code & Microservices Architecture"
      ]
    },
    about: {
      badge: "ABOUT ME & ENGINEERING VISION",
      title: "About Me & Engineering Principles",
      subtitle: "Practical enterprise internship experience in banking and technology during my Computer Engineering studies at Üsküdar University:",
      academicBadge: "ACADEMIC BACKGROUND & DEGREE",
      university: "Üsküdar University",
      degree: "Computer Engineering (B.Sc.)",
      degreeDesc: "Engineering coursework covering data structures, algorithm analysis, object-oriented design, database systems, and distributed software architectures.",
      highSchool: "High School: Tuğrul Bey High School (2015 – 2019)"
    },
    experience: {
      badge: "ENTERPRISE EXPERIENCE & INTERNSHIPS",
      title: "Work & Internship History",
      subtitle: "Practical engineering experience acquired at leading technology and banking institutions in Turkey:",
      expandAll: "Expand All Details",
      collapseAll: "Collapse All Details"
    },
    projects: {
      badge: "PORTFOLIO & PROJECTS",
      title: "Featured Software Projects",
      subtitle: "Click on any project to inspect technical details and architectural specifications:",
      featured: "FEATURED",
      inspectDetails: "Inspect Architecture Details",
      techFeatures: "Architectural & Technical Features:",
      close: "Close"
    },
    blog: {
      badge: "TECHNICAL ARTICLES & ENGINEERING NOTES",
      title: "Engineering & Backend Blog",
      subtitle: "In-depth guides and articles covering REST API design, Spring Boot best practices, caching strategies, and enterprise software engineering:",
      readArticle: "Read Article",
      readTime: "read",
      allCategories: "All Categories",
      searchPlaceholder: "Search articles or topics...",
      featuredArticle: "FEATURED ARTICLE",
      closeArticle: "Close"
    },
    skills: {
      badge: "TECHNICAL COMPETENCIES",
      title: "Tech Stack & Skill Map",
      subtitle: "Click a category below to list the tools and technologies I specialize in:",
      hint: "Click any category above to view the tech stack and details."
    },
    certificates: {
      badge: "ACCREDITED CERTIFICATES & TRAINING",
      title: "Certificates & Achievements",
      subtitle: "Professional academy and corporate programs completed in pursuit of continuous learning:",
      verified: "VERIFIED CREDENTIAL"
    },
    benefits: {
      badge: "CLIENT ADVANTAGES & QUALITY ASSURANCE",
      title: "Why Work With Me?",
      subtitle: "Engineering values delivered from project inception to production launch:",
      guarantee: "Guaranteed Standard"
    },
    wizard: {
      badge: "INTERACTIVE PROJECT WIZARD",
      title: "Start Your Project & Collaborate",
      subtitle: "Define your website, mobile app, or backend architecture requirements in a few easy steps:",
      step: "STEP",
      prev: "Back",
      next: "Continue",
      submit: "Submit Project Request",
      submitting: "Submitting...",
      successTitle: "Project Request Successfully Received!",
      newProposal: "Create New Proposal"
    },
    contact: {
      badge: "CONTACT & INQUIRIES",
      title: "Get In Touch",
      subtitle: "Feel free to leave a message for new projects, backend opportunities, or technical inquiries:",
      nameLabel: "Full Name *",
      emailLabel: "Email Address *",
      subjectLabel: "Subject *",
      messageLabel: "Your Message *",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      successToast: "Your message was sent to masraffurkan@gmail.com! I will respond shortly.",
      errorToast: "An error occurred while sending your message. Please email directly.",
      emailTitle: "EMAIL ADDRESS",
      socialsTitle: "SOCIAL MEDIA & PLATFORMS"
    },
    footer: {
      rightsReserved: "All Rights Reserved.",
      backToTop: "Top"
    }
  }
};

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
      wizard: "Birlikte Çalışalım",
      contact: "İletişim",
      cli: "Developer CLI",
      backendLive: "SPRING REST LIVE",
      backendOffline: "OFFLINE MODE"
    },
    hero: {
      badge: "Tam Zamanlı Pozisyonlar & Proje İş Birliklerine Açık",
      greeting: "Merhaba, Ben",
      titleName: "FURKAN MASRAF",
      bio: "Üsküdar Üniversitesi Bilgisayar Mühendisliği mezuniyetim ve kurumsal staj deneyimlerimle; Java Spring Boot, C# .NET ve modern web teknolojilerinde güçlü bir teknik temel inşa ettim. Öğrenmeye ve gelişime açık bir geliştirici olarak, hem tam zamanlı rollerde değer yaratmaya hem de yenilikçi projelerde yer almaya hazırım.",
      startProject: "Birlikte Çalışalım",
      contactMe: "İletişime Geçin",
      roles: [
        "Backend Developer",
        "Java Spring Boot & C# .NET Geliştirici",
        "Web & Mobil Uygulama Geliştirici",
        "Clean Code & Mikroservis Mimarisi"
      ]
    },
    about: {
      badge: "HAKKIMDA & MÜHENDİSLİK YAKLAŞIMIM",
      title: "Hakkımda & Mühendislik İlkelerim",
      subtitle: "Üsküdar Üniversitesi Bilgisayar Mühendisliği mezuniyetim ile kurumsal bankacılık ve teknoloji stajlarımda edindiğim pratik tecrübeler; sürekli öğrenme tutkumu, kod standartlarımı ve mühendislik ilkelerimi şekillendirdi:",
      academicBadge: "AKADEMİK GEÇMİŞ & EĞİTİM",
      university: "Üsküdar Üniversitesi",
      degree: "Bilgisayar Mühendisliği (Lisans)",
      degreeDesc: "Bilgisayar Mühendisliği lisans eğitimimi başarıyla tamamladım. Veri yapıları, algoritma analizi, nesne yönelimli programlama (OOP), veritabanı sistemleri ve dağıtık yazılım mimarileri üzerine güçlü bir akademik temel edindim.",
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
      subtitle: "Yazılım geliştirmede edindiğim teknik deneyimler, mimari yaklaşımlar ve mühendislik üzerine rehber yazılarım:",
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
      badge: "MÜHENDİSLİK İLKELERİ & YAKLAŞIMIM",
      title: "Neden Benimle Çalışmalısınız?",
      subtitle: "Öğrenme açlığım, kod standartlarım ve iş akışlarında sunduğum mühendislik değerleri:",
      guarantee: "Garanti Edilen Standart"
    },
    wizard: {
      badge: "İŞ BİRLİĞİ & PROJE GEREKSİNİM SİHİRBAZI",
      title: "Birlikte Çalışalım & Fikrinizi Paylaşın",
      subtitle: "İster ekibiniz için tam zamanlı bir pozisyon değerlendirmesi yapın, ister projenizin teknik ihtiyaçlarını adım adım belirleyerek birlikte bir yol haritası oluşturalım:",
      step: "ADIM",
      prev: "Geri",
      next: "Devam Et",
      submit: "İş Birliği / Proje Talebini Gönder",
      submitting: "Gönderiliyor...",
      successTitle: "Talebiniz Başarıyla Alındı!",
      newProposal: "Yeni İş Birliği Talebi"
    },
    contact: {
      badge: "İLETİŞİM VE İŞ BİRLİĞİ GÖRÜŞMELERİ",
      title: "Benimle İletişime Geçin",
      subtitle: "Tam zamanlı iş fırsatları, proje iş birlikleri veya teknik sohbetler için dilediğiniz zaman mesaj bırakabilirsiniz:",
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
      wizard: "Let's Work Together",
      contact: "Contact",
      cli: "Developer CLI",
      backendLive: "SPRING REST LIVE",
      backendOffline: "OFFLINE MODE"
    },
    hero: {
      badge: "Available for Full-Time Roles & Project Collaboration",
      greeting: "Hello, I am",
      titleName: "FURKAN MASRAF",
      bio: "With a degree in Computer Engineering from Üsküdar University and corporate internship experiences, I built a strong technical foundation in Java Spring Boot, C# .NET, and modern web technologies. As an eager learner, I am ready to contribute to full-time roles and collaborate on innovative software projects.",
      startProject: "Let's Work Together",
      contactMe: "About & Experience",
      roles: [
        "Backend Developer",
        "Java Spring Boot & C# .NET Developer",
        "Web & Mobile Application Developer",
        "Clean Code & Microservices Architecture"
      ]
    },
    about: {
      badge: "ABOUT ME & ENGINEERING APPROACH",
      title: "About Me & Engineering Principles",
      subtitle: "My graduation in Computer Engineering from Üsküdar University along with hands-on corporate banking and technology internships shaped my passion for continuous learning and software engineering principles:",
      academicBadge: "ACADEMIC BACKGROUND & DEGREE",
      university: "Üsküdar University",
      degree: "Computer Engineering (B.Sc.)",
      degreeDesc: "Successfully completed my Bachelor's degree in Computer Engineering with a solid academic foundation in data structures, algorithm analysis, object-oriented design, database systems, and software architecture.",
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
      subtitle: "Technical articles and engineering guides sharing insights on software architecture, design principles, and technology:",
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
      badge: "ENGINEERING PRINCIPLES & APPROACH",
      title: "Why Work With Me?",
      subtitle: "My passion for learning, code quality standards, and engineering values delivered to software workflows:",
      guarantee: "Guaranteed Standard"
    },
    wizard: {
      badge: "COLLABORATION & REQUIREMENT WIZARD",
      title: "Let's Work Together & Share Your Idea",
      subtitle: "Whether assessing a full-time role for your team or outlining technical project requirements step-by-step, let's create a roadmap together:",
      step: "STEP",
      prev: "Back",
      next: "Continue",
      submit: "Submit Collaboration Request",
      submitting: "Submitting...",
      successTitle: "Request Successfully Received!",
      newProposal: "New Collaboration Request"
    },
    contact: {
      badge: "CONTACT & COLLABORATION",
      title: "Get In Touch",
      subtitle: "Feel free to leave a message for full-time job opportunities, project collaborations, or technical conversations:",
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

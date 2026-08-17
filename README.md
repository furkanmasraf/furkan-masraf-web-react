# ⚡ Furkan Masraf - Personal Portfolio & Technical Blog

[![Live Demo](https://img.shields.io/badge/Live-furkanmasraf.vercel.app-06B6D4?style=for-the-badge&logo=vercel)](https://furkanmasraf.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

Furkan Masraf'ın kurumsal backend geliştirme tecrübelerini, projelerini, akredite sertifikalarını, interaktif iş birliği sihirbazını ve teknik mühendislik blogunu içeren modern, reaktif ve duyarlı (responsive) web portfolyo uygulaması.

---

## 🚀 Öne Çıkan Özellikler

- **🌐 Çift Dil Desteği (i18n):** Türkçe (TR) ve İngilizce (EN) diller arasında anlık, kesintisiz geçiş.
- **📚 Teknik Mühendislik Blogu:**
  - REST API tasarımı, Docker konteyner mimarisi, Redis önbellekleme stratejileri, Postman test otomasyonu ve Spring Boot Aspect-Oriented Programming (AOP) rehberleri.
  - Kompakt 2'li ızgara (grid) ve sayfalama (`< 1 / 3 >`) kontrolü ile sayfa yüksekliğini koruyan düzen.
  - Tam ekran okuma modlu (`BlogPostModal`) interaktif makale okuyucu.
- **⚡ Developer Interactive CLI:** Klavyeden `Ctrl+K` kısayoluyla veya butonla açılan canlı terminal arayüzü (`help`, `projects`, `skills`, `contact`, `clear` komutları).
- **🧙‍♂️ İnteraktif İş Birliği Sihirbazı:** Müşteri/şirket ihtiyaçlarına özel adım adım proje gereksinim belirleme ve teklif oluşturma formu.
- **💬 Yüzen Canlı İletişim Widget'ı:** WhatsApp direkt sohbet ve e-posta hızlı iletişim balonu.
- **🎯 Spring Boot REST API Canlı Durum Kontrolü:** Gerçek zamanlı backend API canlılık (health check) durumu badge gösterimi.
- **📱 %100 Mobil Uyumlu:** Mobil cihazlar için özel tasarlanmış açılır-kapanır çekmece (drawer) navigasyon menüsü.

---

## 🛠️ Teknoloji Yığını (Tech Stack)

- **Frontend Core:** React 19, TypeScript 6.0, Vite 8.2
- **Styling & Animation:** Tailwind CSS 3.4, Framer Motion 13, Lucide React Icons
- **State Management & i18n:** React Context API (`LanguageContext`)
- **Utilities:** `canvas-confetti`, `clsx`, `tailwind-merge`
- **Linter & Code Quality:** Oxlint (`oxlintrc.json`)

---

## 📂 Proje Klasör Yapısı

```
furkan-masraf-web-react/
├── public/                  # Statik varlıklar & favicon.svg
├── src/
│   ├── components/          # Reaktif UI bileşenleri
│   │   ├── Navbar.tsx       # Menü & mobil drawer
│   │   ├── HeroSection.tsx  # Karşılama & canlı roller
│   │   ├── AboutSection.tsx # Akademik ve teknik geçmiş
│   │   ├── ExperienceSection.tsx # Kurumsal deneyimler
│   │   ├── ProjectsSection.tsx   # Canlı projeler ve mimari detaylar
│   │   ├── BlogSection.tsx       # Kompakt teknik blog ve sayfalama
│   │   ├── BlogPostModal.tsx     # Tam ekran okuma modlu modal
│   │   ├── SkillsSection.tsx     # Teknoloji ve yetkinlik haritası
│   │   ├── CertificatesSection.tsx # Sertifikalar & akredite rozetler
│   │   ├── ProjectWizard.tsx     # İnteraktif iş birliği sihirbazı
│   │   ├── ContactSection.tsx    # İletişim formu
│   │   ├── TerminalModal.tsx     # Developer CLI terminali
│   │   ├── FloatingContactWidget.tsx # Yüzen iletişim balonu
│   │   └── Logo.tsx              # Minimalist amblem ve marka logosu
│   ├── context/             # React Context (Dil Yönetimi)
│   ├── i18n/                # Çeviri anahtarları ve veriler (TR & EN)
│   ├── types/               # TypeScript arayüz tanımları (BlogPost, Project vb.)
│   ├── App.tsx              # Ana uygulama montajı
│   └── main.tsx             # Vite giriş noktası
├── index.html               # Open Graph & SEO meta etiketleri
└── package.json             # Bağımlılıklar ve npm scriptleri
```

---

## 💻 Yerel Geliştirme (Local Development)

Projeyi kendi bilgisayarınızda klonlayıp çalıştırmak için aşağıdaki adımları izleyin:

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/furkanmasraf/furkan-masraf-web-react.git
cd furkan-masraf-web-react
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirici Sunucusunu Başlatın
```bash
npm run dev
```
Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

---

## 🏗️ Üretim Derlemesi (Production Build)

Uygulamanın optimize edilmiş canlı derlemesini almak ve type check yapmak için:

```bash
npm run build
```

Derleme çıktıları `dist/` klasörü içerisinde oluşturulacaktır. Derlenen projeyi önizlemek için:

```bash
npm run preview
```

---

## 🚀 Canlı Yayın (Deployment)

Bu proje [Vercel](https://vercel.com/) üzerinde canlı olarak barındırılmaktadır. `main` dalına (branch) yapılan her `git push` işlemi Vercel CI/CD hattı tarafından otomatik derlenip canlı ortama aktarılır.

- **Canlı Site URL:** [https://furkanmasraf.vercel.app/](https://furkanmasraf.vercel.app/)

---

## 📧 İletişim

- **İsim:** Furkan Masraf
- **Unvan:** Backend Developer
- **E-posta:** [masraffurkan@gmail.com](mailto:masraffurkan@gmail.com)
- **LinkedIn:** [linkedin.com/in/furkanmasraf](https://linkedin.com/in/furkanmasraf)
- **GitHub:** [github.com/furkanmasraf](https://github.com/furkanmasraf)

---
© 2026 Furkan Masraf. Tüm Hakları Saklıdır.

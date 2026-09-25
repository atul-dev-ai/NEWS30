<div align="center">
  <h1>📰 NEWS30</h1>
  <p><b>Bangladesh Short News Aggregator — The future of digital news consumption.</b></p>
  <p>
    <img src="https://img.shields.io/badge/Status-Active-success" alt="Status" />
    <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version" />
    <img src="https://img.shields.io/badge/Framework-Next.js-black" alt="Next.js" />
  </p>
</div>

<br />

## 📖 Overview

**NEWS30** is an enterprise-grade short news aggregation platform designed specifically for the Bangladeshi demographic. Moving away from the cluttered layouts of traditional news portals, NEWS30 delivers a highly curated, story-centric experience. Our core philosophy is simple: *"All the big news, summarized. In one place."*

### The "Story-Centric" Architecture
Unlike conventional news aggregation that merely lists articles by publisher, NEWS30 utilizes a sophisticated **Story-Centric** model. When a major event occurs (e.g., "New Economic Policy Announced"), our platform clusters the coverage from multiple leading publishers (*Prothom Alo, BDNews24, The Daily Star*) into a single cohesive story block. This ensures absolute source transparency, removes redundancy, and saves users valuable time.

---

## ✨ Core Features

- **⚡ Instant Briefings:** Consume the top 10 most critical updates of the day within 60 seconds.
- **🔗 Source Transparency:** Every summary is clearly attributed, with cross-references to original publisher articles.
- **🤖 AI-Assisted Summaries (Upcoming):** Cutting-edge AI summarization that distills 500-word articles into 4 bullet points, without hallucinating facts.
- **🌙 Deep Dark Mode:** A meticulously crafted dark mode experience designed to reduce eye strain without relying on harsh pure blacks (`#000000`).
- **📱 Mobile-First PWA:** Native-app-like experience in the browser with bottom navigation and horizontal scroll paradigms.

---

## 🛠 Tech Stack

Built with modern web standards to ensure high performance, security, and scalability.

- **Frontend Framework:** [Next.js (App Router)](https://nextjs.org/) for server-side rendering, caching, and optimal SEO.
- **Styling:** Custom CSS Variables with a highly scalable, 8px-based atomic token system.
- **Typography:** Multi-font approach utilizing **Noto Sans Bengali** & **Noto Serif Bengali** (for vernacular authenticity) alongside **Inter** (for numeric and English elements).
- **Deployment:** Vercel / Docker-ready (Architecture supports seamless containerization).

---

## 🚀 Getting Started

To run the platform locally for development and testing:

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn

### Installation

1. **Clone the repository** (if not already local)
   ```bash
   git clone https://github.com/your-org/news30.git
   cd news30
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 System Architecture (Roadmap)

```text
CLIENT (Next.js) 
  │
  ├── Dashboard / Home
  ├── News Details
  └── Story Clusters
        │
        ▼
API GATEWAY (GraphQL / REST)
        │
        ├── Auth Service (JWT)
        ├── Aggregation Engine (Cron / RSS / Webhooks)
        └── AI Summarization Pipeline (LLM API)
```

---

## 🛡 Security & Compliance

As a news aggregation platform, we adhere to strict editorial guidelines and copyright policies.
- No full-text copying. Summaries are strictly transformative.
- Traffic is redirected to original publishers via prominent "Read Original" CTAs.
- System includes robust rate limiting and data validation on all public endpoints.

---

## 🤝 Contributing

We welcome contributions from internal teams. Please follow the standard GitFlow process:
1. Create a feature branch (`feat/your-feature-name`).
2. Commit your changes with descriptive semantic commit messages.
3. Open a Pull Request targeting the `develop` branch for review.

---

<div align="center">
  <small>© 2026 NEWS30 Engineering Team. All rights reserved.</small>
</div>

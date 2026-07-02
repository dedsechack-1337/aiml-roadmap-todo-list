# 🤖 AI / ML Engineering Roadmap 2026

> A structured, interactive, checkbox-driven roadmap from Python basics all the way to GenAI, LLMs, Agentic AI, RAG, and beyond.

[![Deploy to GitHub Pages](https://github.com/<YOUR-USERNAME>/<YOUR-REPO>/actions/workflows/deploy.yml/badge.svg)](https://github.com/<YOUR-USERNAME>/<YOUR-REPO>/actions/workflows/deploy.yml)

---

## 🚀 Live Demo

**[https://\<YOUR-USERNAME\>.github.io/\<YOUR-REPO\>/](https://your-username.github.io/your-repo/)**

---

## ✨ Features

- ✅ **60+ topics** across 10 structured phases
- 🗂 **Checkbox todo-list** — check off topics as you learn
- 💾 **Auto-save** — progress persisted in `localStorage`
- 🔍 **Search** topics by name or description
- 🎛 **Filter** by All / Todo / Done
- 📊 **Progress bars** per phase + overall progress ring
- 🌑 **Dark theme** — full deep dark UI
- 📱 **Responsive** — works on mobile & desktop

---

## 📚 Roadmap Phases

| # | Phase | Level |
|---|-------|-------|
| 1 | Foundations & Prerequisites | Beginner |
| 2 | Classical Machine Learning | Beginner–Intermediate |
| 3 | Deep Learning | Intermediate |
| 4 | Natural Language Processing | Intermediate |
| 5 | Large Language Models (LLMs) | Advanced |
| 6 | Generative AI (GenAI) | Advanced |
| 7 | Retrieval-Augmented Generation (RAG) | Advanced |
| 8 | Agentic AI & Multi-Agent Systems | Advanced |
| 9 | MLOps & LLMOps | Advanced |
| 10 | Frontier & Research Topics | Expert |

---

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS 4**
- **vite-plugin-singlefile** — bundles into a single `index.html`

---

## 📦 Local Development

```bash
# 1. Clone the repo
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git
cd <YOUR-REPO>

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment (Step-by-Step)

### Method 1 — Automatic via GitHub Actions (Recommended)

The repo includes a pre-configured workflow at `.github/workflows/deploy.yml`.  
Every push to `main` triggers an automatic build & deploy.

**One-time setup:**

1. Push this project to a GitHub repository.

2. Go to your repo → **Settings** → **Pages**.

3. Under **Source**, select **GitHub Actions**.

4. Push any commit to `main` — the Action will build and deploy automatically.

5. Your site will be live at:
   ```
   https://<YOUR-USERNAME>.github.io/<YOUR-REPO>/
   ```

> **Note:** Since this project uses `vite-plugin-singlefile`, the entire app is bundled into a single `dist/index.html` — no base path configuration needed. It works out of the box at any URL.

---

### Method 2 — Manual Deploy with `gh-pages`

```bash
# Install gh-pages CLI tool
npm install -g gh-pages

# Build the project
npm run build

# Deploy dist/ folder to gh-pages branch
npx gh-pages -d dist
```

Then in GitHub → **Settings** → **Pages** → set Source to `gh-pages` branch → `/ (root)`.

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   └── .nojekyll               # Disables Jekyll on GitHub Pages
├── src/
│   ├── data/
│   │   └── roadmap.ts          # All 10 phases & 60+ topics data
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── package.json
└── README.md
```

---

## 🤝 Contributing

Pull requests are welcome! To add or update topics:

1. Edit `src/data/roadmap.ts`
2. Add your topic inside the relevant phase's `topics` array
3. Submit a PR

---

## 📄 License

MIT © 2026

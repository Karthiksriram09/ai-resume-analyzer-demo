# 🚀 AI Resume Analyzer & Role Recommender (Frontend Demo)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwindcss)](https://tailwindcss.com/)  
[![Framer Motion](https://img.shields.io/badge/FramerMotion-10-pink?logo=framer)](https://www.framer.com/motion/)  
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-orange?logo=chartdotjs)](https://www.chartjs.org/)  
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://ai-resume-analyzer-demo-2m4ymh57p-karthik-srirams-projects.vercel.app)

---

## 🌐 Live Demo
👉 **[View the Project Here](https://ai-resume-analyzer-demo-eight.vercel.app)**

---

## 📖 Overview
This is a **frontend-only simulation** of an AI-powered Resume Analyzer. It extracts skills from a pasted resume, calculates a **Role Fit %**, and suggests **Top Missing Skills** for career growth — all **client-side**, with no backend required.

Built with **Next.js + Tailwind + Framer Motion**, it’s lightweight, responsive, and deployable on **Vercel**.

---

## ✨ Features
- 🔎 **Skill Extraction** → tokenizes resume text & maps synonyms  
- 📊 **Role Fit %** → cosine similarity between resume skills and target role requirements  
- 🧭 **Gap Analysis** → highlights missing skills + suggested learning plan  
- 📱 **Responsive UI** → works seamlessly on desktop & mobile  
- 🎨 **Polished UI** → glassmorphism cards, neon gradients, smooth animations  
- 🔐 **Privacy** → no uploads, all analysis happens in browser  

---

## 🖼️ Screenshots

### Landing Page
![Landing Page](https://user-images.githubusercontent.com/your-github-id/demo1.png)

### Analysis Results
![Results](https://user-images.githubusercontent.com/your-github-id/demo2.png)

*(replace with your own screenshots once you add them)*

---

## 🛠️ Tech Stack
- **Frontend Framework**: [Next.js 14](https://nextjs.org/)  
- **Styling**: [TailwindCSS](https://tailwindcss.com/), glassmorphism theme  
- **Animations**: [Framer Motion](https://www.framer.com/motion/)  
- **Charts**: [Chart.js](https://www.chartjs.org/) via `react-chartjs-2`  
- **Icons**: [Lucide React](https://lucide.dev/)  

---

## 📂 Project Structure
ai-resume-analyzer-demo/
├─ app/ # Next.js App Router pages
│ └─ page.tsx # Main analyzer UI
├─ components/ # Reusable UI components (StatCard, etc.)
├─ lib/ # Utility functions (tokenizer, cosine similarity)
├─ public/data/ # JSON datasets (skills, roles, mappings)
├─ styles/ # Tailwind + global styles
├─ next.config.js # Next.js config
└─ package.json # Dependencies


---

## ⚡ Getting Started (Local Development)
```bash
# 1. Clone the repo
git clone https://github.com/Karthiksriram09/ai-resume-analyzer-demo.git
cd ai-resume-analyzer-demo

# 2. Install dependencies
npm install

# 3. Run in dev mode
npm run dev
# http://localhost:3000

# 4. Build for production
npm run build
npm start
```

🚀 Deployment

This project is deployed on Vercel.
You can deploy your own fork with one click:


🔮 Future Enhancements

Resume parsing with real NLP pipelines (spaCy/HuggingFace)

Live job role data integration (LinkedIn/Indeed APIs)

Multi-role comparison dashboard

Exportable PDF analysis report

## 👨‍💻 Author
**Karthik Sriram**  
[![GitHub](https://img.shields.io/badge/GitHub-Karthiksriram09-black?logo=github)](https://github.com/Karthiksriram09)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-kudalikarthiksriram-blue?logo=linkedin)](https://www.linkedin.com/in/kudalikarthiksriram/)

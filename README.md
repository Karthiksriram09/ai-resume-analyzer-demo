
# AI Resume Analyzer — Front-end Demo (Next.js)

This is a **client-side only** demo you can deploy to **Vercel**. It simulates a real AI resume analyzer:

- Tokenizes and maps synonyms from pasted resume text
- Extracts known skills from a static JSON
- Computes **cosine similarity** between your skills and role requirements
- Shows **Role Fit %**, **Skills Found**, and **Top Missing Skills**

No backend. No uploads. Everything runs in the browser.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```

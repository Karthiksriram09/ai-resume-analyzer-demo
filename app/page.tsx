"use client";

import { useEffect, useMemo, useState } from "react";
import { tokenize, tf, cosine } from "@/lib/text";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { motion } from "framer-motion";
import { Brain, Loader2, Sparkles, Target, Wand2 } from "lucide-react";
import StatCard from "@/components/StatCard";

type RolesShape = Record<string, { title: string; required: string[]; niceToHave?: string[] }>;
type SkillsShape = string[];
type MapShape = Record<string, string>; // synonym -> canonical

export default function Page() {
  const [raw, setRaw] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState<SkillsShape>([]);
  const [roles, setRoles] = useState<RolesShape>({});
  const [syn, setSyn] = useState<MapShape>({});
  const [roleKey, setRoleKey] = useState<string>("fullstack_engineer");

  const [fit, setFit] = useState<number | null>(null);
  const [found, setFound] = useState<string[]>([]);
  const [missing, setMissing] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/data/skills.json").then(r => r.json()),
      fetch("/data/roles.json").then(r => r.json()),
      fetch("/data/mappings.json").then(r => r.json())
    ]).then(([s, r, m]) => { setSkills(s); setRoles(r); setSyn(m); });
  }, []);

  const role = roles[roleKey];

  async function analyze() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 500)); // simulate latency

    // tokenize + map synonyms
    const toks = tokenize(raw).map(t => syn[t] || t);
    const haveSet = new Set<string>();
    for (const t of toks) if (skills.includes(t)) haveSet.add(t);
    const have = Array.from(haveSet);

    const req = role?.required || [];
    const miss = req.filter(s => !haveSet.has(s));

    // cosine similarity on TF of have vs req (as tokens)
    const score = cosine(tf(have), tf(req));
    setFound(have);
    setMissing(miss);
    setFit(Math.round(score * 100));
    setLoading(false);
  }

  const doughnut = useMemo(() => ({
    labels: ["Fit", "Gap"],
    datasets: [{
      data: [fit ?? 0, 100 - (fit ?? 0)],
      borderWidth: 0,
      cutout: "70%",
      backgroundColor: ["#22d3ee", "#1f2937"]
    }]
  }), [fit]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f1a] to-black">
      <header className="px-6 md:px-10 pt-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold gradient-title flex items-center gap-2">
            <Sparkles className="text-cyan-300" /> AI Resume Analyzer
          </h1>
          <div className="text-white/70 text-sm">Made By Karthik Sriram</div>
        </div>
      </header>

      <section className="px-6 md:px-10 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Input */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Wand2 className="text-cyan-300" /> Paste Resume
              </div>
              <select
                value={roleKey}
                onChange={e => setRoleKey(e.target.value)}
                className="badge bg-white/5"
                aria-label="Target Role"
              >
                {Object.keys(roles).map(k => (
                  <option key={k} value={k}>{roles[k].title}</option>
                ))}
              </select>
            </div>
            <textarea
              className="w-full h-64 p-4 rounded-xl bg-black/50 border border-white/10"
              placeholder="Paste your resume text here (Ctrl/Cmd + V)..."
              value={raw}
              onChange={e => setRaw(e.target.value)}
            />
            <button onClick={analyze} className="btn mt-4">
              {loading ? (<><Loader2 className="animate-spin" size={16} /> Analyzing...</>) : (<><Brain size={16} /> Analyze</>)}
            </button>
            <p className="text-xs text-white/60 mt-3">Works offline with mock data. No uploads, no backend.</p>
          </motion.div>

          {/* Insights */}
          <section className="grid gap-4">
            <StatCard title="Role Fit">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="p-4 rounded-xl bg-black/30">
                  <Doughnut data={doughnut} />
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-extrabold">{fit ?? 0}%</div>
                  <div className="text-white/70">Target: {role?.title || "—"}</div>
                  <div className="text-xs text-white/50">Cosine similarity between your extracted skills and role requirements.</div>
                </div>
              </div>
            </StatCard>

            <div className="grid sm:grid-cols-2 gap-4">
              <StatCard title="Skills Found" value={`${found.length}`}>
                <div className="flex flex-wrap gap-2 mt-3">
                  {found.slice(0, 16).map(x => (<span key={x} className="badge">{x}</span>))}
                </div>
              </StatCard>

              <StatCard title="Top Missing (Suggested Learning Plan)">
                <ul className="mt-3 space-y-2">
                  {missing.slice(0, 5).map(x => (
                    <li key={x} className="flex items-center gap-2 text-sm">
                      <Target className="text-fuchsia-400" size={16} /> {x}
                    </li>
                  ))}
                  {missing.length === 0 && <li className="text-white/60 text-sm">No major gaps detected for this role.</li>}
                </ul>
              </StatCard>
            </div>
          </section>
        </div>
      </section>

      {/* Highlights Row */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          <StatCard title="Real-time Parsing" value="Client-Side">
            <p className="text-sm text-white/70 mt-2">Tokenization, synonym mapping, and TF cosine computed fully in the browser.</p>
          </StatCard>
          <StatCard title="Privacy" value="No Uploads">
            <p className="text-sm text-white/70 mt-2">All data stays on device. Static JSON fixtures drive the demo.</p>
          </StatCard>
          <StatCard title="Responsive" value="Mobile & Desktop">
            <p className="text-sm text-white/70 mt-2">Grid layout adapts down to 360px. Tap targets ≥ 44px for mobile comfort.</p>
          </StatCard>
        </div>
      </section>
    </main>
  );
}

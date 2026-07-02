import { useState, useEffect, useMemo } from "react";
import { roadmapData, Phase, Topic } from "./data/roadmap";

// ── Helpers ───────────────────────────────────────────────────────────────────
const STORAGE_KEY = "aiml-roadmap-checked";

function loadChecked(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveChecked(state: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ── Color maps (dark-safe) ────────────────────────────────────────────────────
const badgeStyle: Record<string, string> = {
  Beginner:                "bg-emerald-900/60 text-emerald-300 border border-emerald-600/50",
  "Beginner–Intermediate": "bg-blue-900/60    text-blue-300    border border-blue-600/50",
  Intermediate:            "bg-amber-900/60   text-amber-300   border border-amber-600/50",
  Advanced:                "bg-rose-900/60    text-rose-300    border border-rose-600/50",
  Expert:                  "bg-purple-900/60  text-purple-300  border border-purple-600/50",
};

const phaseRing: Record<string, string> = {
  violet:  "ring-violet-500/60",
  blue:    "ring-blue-500/60",
  emerald: "ring-emerald-500/60",
  orange:  "ring-orange-500/60",
  rose:    "ring-rose-500/60",
  fuchsia: "ring-fuchsia-500/60",
  sky:     "ring-sky-500/60",
  lime:    "ring-lime-500/60",
  yellow:  "ring-yellow-500/60",
  indigo:  "ring-indigo-500/60",
};

const checkColor: Record<string, string> = {
  violet:  "accent-violet-400",
  blue:    "accent-blue-400",
  emerald: "accent-emerald-400",
  orange:  "accent-orange-400",
  rose:    "accent-rose-400",
  fuchsia: "accent-fuchsia-400",
  sky:     "accent-sky-400",
  lime:    "accent-lime-400",
  yellow:  "accent-yellow-400",
  indigo:  "accent-indigo-400",
};

const progressBar: Record<string, string> = {
  violet:  "bg-violet-500",
  blue:    "bg-blue-500",
  emerald: "bg-emerald-500",
  orange:  "bg-orange-500",
  rose:    "bg-rose-500",
  fuchsia: "bg-fuchsia-500",
  sky:     "bg-sky-500",
  lime:    "bg-lime-500",
  yellow:  "bg-yellow-500",
  indigo:  "bg-indigo-500",
};

// glow colour behind cards on hover
const cardGlow: Record<string, string> = {
  violet:  "hover:shadow-violet-900/40",
  blue:    "hover:shadow-blue-900/40",
  emerald: "hover:shadow-emerald-900/40",
  orange:  "hover:shadow-orange-900/40",
  rose:    "hover:shadow-rose-900/40",
  fuchsia: "hover:shadow-fuchsia-900/40",
  sky:     "hover:shadow-sky-900/40",
  lime:    "hover:shadow-lime-900/40",
  yellow:  "hover:shadow-yellow-900/40",
  indigo:  "hover:shadow-indigo-900/40",
};

// ── Topic Card ────────────────────────────────────────────────────────────────
function TopicCard({
  topic,
  checked,
  onToggle,
  color,
}: {
  topic: Topic;
  checked: boolean;
  onToggle: () => void;
  color: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 cursor-pointer select-none
        ${checked
          ? "bg-slate-800/40 border-slate-700/50 opacity-60"
          : `bg-slate-800/70 border-slate-700/60 hover:border-slate-600 hover:shadow-lg ${cardGlow[color]} hover:-translate-y-0.5`
        }`}
      onClick={onToggle}
    >
      {/* subtle checked overlay */}
      {checked && (
        <div className="absolute inset-0 rounded-2xl bg-slate-900/30 pointer-events-none" />
      )}

      <div className="relative p-5">
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <div className="mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={checked}
              onChange={onToggle}
              onClick={(e) => e.stopPropagation()}
              className={`w-5 h-5 rounded cursor-pointer ${checkColor[color]}`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4
              className={`font-semibold text-sm leading-tight mb-1.5 transition-colors
                ${checked ? "line-through text-slate-500" : "text-slate-100"}`}
            >
              {topic.title}
            </h4>
            <p className={`text-xs leading-relaxed ${checked ? "text-slate-600" : "text-slate-400"}`}>
              {topic.description}
            </p>

            {topic.resources && topic.resources.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {topic.resources.map((r) => (
                  <span
                    key={r}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-700/70 text-slate-400 border border-slate-600/50"
                  >
                    📚 {r}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* done tick */}
          {checked && (
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/80 flex items-center justify-center shadow">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Phase Section ─────────────────────────────────────────────────────────────
function PhaseSection({
  phase,
  checked,
  onToggle,
  isOpen,
  onToggleOpen,
  index,
}: {
  phase: Phase;
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
  index: number;
}) {
  const total = phase.topics.length;
  const done  = phase.topics.filter((t) => checked[t.id]).length;
  const pct   = Math.round((done / total) * 100);
  const allDone = done === total;

  return (
    <div
      className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden backdrop-blur-sm
        ${allDone
          ? "border-emerald-500/40 bg-emerald-950/20 shadow-lg shadow-emerald-900/20"
          : "border-slate-700/60 bg-slate-900/60 hover:border-slate-600/70 shadow-md"
        }`}
    >
      {/* ── Header button ── */}
      <button
        className="w-full text-left p-5 sm:p-6 flex items-center gap-4 sm:gap-5 group"
        onClick={onToggleOpen}
      >
        {/* Icon bubble */}
        <div
          className={`relative flex-shrink-0 w-13 h-13 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${phase.gradient}
            flex items-center justify-center text-2xl shadow-lg ring-2 ring-offset-2 ring-offset-slate-900 ${phaseRing[phase.color]}`}
        >
          {allDone ? (
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span>{phase.icon}</span>
          )}
          {/* Phase number badge */}
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-950 border border-slate-700 text-slate-300 text-[10px] font-bold flex items-center justify-center">
            {index + 1}
          </span>
        </div>

        {/* Title block */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {phase.phase}
            </span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeStyle[phase.badge]}`}>
              {phase.badge}
            </span>
            {allDone && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-600/40">
                ✓ Complete
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-tight">{phase.title}</h3>
          <p className="text-xs text-slate-500 mt-0.5 leading-snug hidden sm:block">{phase.subtitle}</p>
        </div>

        {/* Progress */}
        <div className="flex-shrink-0 text-right flex flex-col items-end gap-1.5">
          <span className="text-sm font-bold text-slate-300">{done}/{total}</span>
          <div className="w-20 sm:w-24 h-1.5 rounded-full bg-slate-700/70 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${progressBar[phase.color]}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-500">{pct}%</span>
        </div>

        {/* Arrow */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center
            transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* ── Topics grid ── */}
      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 border-t border-slate-700/50">
          <p className="text-[11px] text-slate-500 mt-4 mb-3 font-medium italic">{phase.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {phase.topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                checked={!!checked[topic.id]}
                onToggle={() => onToggle(topic.id)}
                color={phase.color}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [checked,    setChecked]    = useState<Record<string, boolean>>(loadChecked);
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({ "phase-1": true });
  const [filter,     setFilter]     = useState<"all" | "done" | "todo">("all");
  const [search,     setSearch]     = useState("");

  useEffect(() => { saveChecked(checked); }, [checked]);

  const toggleTopic = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const togglePhase = (id: string) =>
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));

  const allTopics   = useMemo(() => roadmapData.flatMap((p) => p.topics), []);
  const totalDone   = allTopics.filter((t) => checked[t.id]).length;
  const totalCount  = allTopics.length;
  const overallPct  = Math.round((totalDone / totalCount) * 100);

  const filteredPhases = useMemo(() => {
    return roadmapData
      .map((phase) => ({
        ...phase,
        topics: phase.topics.filter((t) => {
          const matchFilter =
            filter === "all" ||
            (filter === "done" && checked[t.id]) ||
            (filter === "todo" && !checked[t.id]);
          const matchSearch =
            search === "" ||
            t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.description.toLowerCase().includes(search.toLowerCase());
          return matchFilter && matchSearch;
        }),
      }))
      .filter((p) => p.topics.length > 0);
  }, [filter, search, checked]);

  const expandAll  = () => {
    const all: Record<string, boolean> = {};
    roadmapData.forEach((p) => (all[p.id] = true));
    setOpenPhases(all);
  };
  const collapseAll = () => setOpenPhases({});
  const resetAll    = () => {
    if (window.confirm("Reset ALL progress? This cannot be undone.")) setChecked({});
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100">

      {/* ── Ambient gradient orbs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-700/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-indigo-700/15 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-fuchsia-800/10 blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* ══════════════════════ HERO ══════════════════════ */}
        <header className="text-center mb-12">

          {/* pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6">
            <span className="animate-pulse w-2 h-2 rounded-full bg-indigo-400 inline-block" />
            Zero → Advanced · Self-paced Roadmap
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            AI / ML Engineering
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Roadmap 2026
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A structured, checkbox-driven journey from Python basics to GenAI, LLMs,
            Agentic AI, RAG, and beyond. Check off topics as you master them.
          </p>

          {/* ── Overall progress card ── */}
          <div className="mt-8 inline-block bg-slate-900/70 backdrop-blur border border-slate-700/60
              rounded-3xl px-8 py-6 min-w-72 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-200 font-bold text-lg">Overall Progress</span>
              <span className="text-2xl font-black text-white">{overallPct}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 transition-all duration-700"
                style={{ width: `${overallPct}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500">
              <span>✅ {totalDone} completed</span>
              <span>⏳ {totalCount - totalDone} remaining</span>
            </div>

            {/* Phase mini-rings */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              {roadmapData.map((phase) => {
                const d   = phase.topics.filter((t) => checked[t.id]).length;
                const p   = Math.round((d / phase.topics.length) * 100);
                return (
                  <div
                    key={phase.id}
                    title={`${phase.title}: ${p}%`}
                    className="w-9 h-9 rounded-full flex items-center justify-center relative overflow-hidden border border-slate-700"
                    style={{ background: `conic-gradient(#7c3aed ${p}%, #1e293b ${p}%)` }}
                  >
                    <div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center text-[11px]">
                      {phase.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </header>

        {/* ══════════════════════ CONTROLS ══════════════════════ */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">

          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60
                text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2
                focus:ring-indigo-500/60 focus:border-indigo-500/50 transition"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex rounded-xl overflow-hidden border border-slate-700/60 bg-slate-800/50">
            {(["all", "todo", "done"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 text-sm font-semibold capitalize transition-colors ${
                  filter === f
                    ? "bg-indigo-600 text-white shadow-inner"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                }`}
              >
                {f === "all"
                  ? `All (${totalCount})`
                  : f === "done"
                  ? `✓ Done (${totalDone})`
                  : `○ Todo (${totalCount - totalDone})`}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button onClick={expandAll}
              className="px-3 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60
                text-slate-300 text-xs font-semibold hover:bg-slate-700/70 hover:text-white transition">
              ↕ Expand
            </button>
            <button onClick={collapseAll}
              className="px-3 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60
                text-slate-300 text-xs font-semibold hover:bg-slate-700/70 hover:text-white transition">
              ↕ Collapse
            </button>
            <button onClick={resetAll}
              className="px-3 py-2.5 rounded-xl bg-rose-900/30 border border-rose-700/40
                text-rose-400 text-xs font-semibold hover:bg-rose-800/40 hover:text-rose-300 transition">
              ↺ Reset
            </button>
          </div>
        </div>

        {/* ══════════════════════ PHASES ══════════════════════ */}
        {filteredPhases.length === 0 ? (
          <div className="text-center py-24 text-slate-600">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No topics match your search.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPhases.map((phase) => (
              <PhaseSection
                key={phase.id}
                phase={phase}
                checked={checked}
                onToggle={toggleTopic}
                isOpen={!!openPhases[phase.id]}
                onToggleOpen={() => togglePhase(phase.id)}
                index={roadmapData.findIndex((p) => p.id === phase.id)}
              />
            ))}
          </div>
        )}

        {/* ══════════════════════ LEGEND ══════════════════════ */}
        <div className="mt-10 p-6 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur">
          <h3 className="text-slate-300 font-bold mb-4 text-xs uppercase tracking-widest">
            📍 Roadmap Phases at a Glance
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {roadmapData.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setOpenPhases((prev) => ({ ...prev, [p.id]: true }));
                  setTimeout(() => {
                    document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className={`flex items-center gap-2 p-3 rounded-2xl bg-gradient-to-br ${p.gradient}
                  opacity-80 hover:opacity-100 transition-all hover:scale-105 text-left shadow`}
              >
                <span className="text-xl">{p.icon}</span>
                <div>
                  <div className="text-[9px] text-white/60 font-bold uppercase tracking-wider">
                    Phase {i + 1}
                  </div>
                  <div className="text-[11px] text-white font-bold leading-tight line-clamp-2">
                    {p.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════ FOOTER ══════════════════════ */}
        <footer className="mt-10 text-center text-xs text-slate-700 pb-6 space-y-1">
          <p>🤖 Built for AIML Engineers · Progress auto-saved in your browser</p>
          <p className="text-slate-800">2026 · Zero to Expert</p>
        </footer>
      </div>
    </div>
  );
}

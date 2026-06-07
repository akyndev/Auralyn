"use client"

import React, { useState, useEffect } from "react"
import {
  Mic,
  Search,
  CheckSquare,
  Brain,
  FileText,
  Play,
  Pause,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Users,
  Lock
} from "lucide-react"

export default function AuralynPremiumLanding() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState<"summary" | "transcript" | "action">("summary")
  const [waveHeights, setWaveHeights] = useState<number[]>([])

  // Generate randomized clean variations for raw canvas waveform feel
  useEffect(() => {
    setWaveHeights(Array.from({ length: 24 }, () => Math.floor(Math.random() * 28) + 12))
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030407] overflow-hidden selection:bg-purple-500/20">
      {/* Structural Ambient Background Lighting */}
      <div className="absolute top-0 inset-x-0 h-[800px] ambient-sphere pointer-events-none z-0" />
      <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-purple-950/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Global Navigation Grid */}
      <header className="relative z-50 border-b border-white/[0.02] bg-[#030407]/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
              <div className="w-full h-full bg-[#030407] rounded-[7px] flex items-center justify-center">
                <Mic className="w-3.5 h-3.5 text-purple-300" />
              </div>
            </div>
            <span className="text-base font-semibold tracking-tight text-white/90">Auralyn</span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
            <a href="#features" className="hover:text-zinc-100 smooth-transition">
              Platform
            </a>
            <a href="#dashboard" className="hover:text-zinc-100 smooth-transition">
              Interface
            </a>
            <a href="#security" className="hover:text-zinc-100 smooth-transition">
              Security
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-xs font-medium text-zinc-400 hover:text-white smooth-transition">Sign in</button>
            <button className="px-3.5 py-1.5 text-xs font-medium bg-zinc-100 hover:bg-white text-zinc-950 rounded-full smooth-transition shadow-lg shadow-white/5">
              Start Free
            </button>
          </div>
        </div>
      </header>

      {/* Main Structural Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Core Hero Block */}
        <section className="pt-28 pb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] font-medium text-purple-300/90 tracking-wide mb-8 shadow-inner">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>AI THAT LISTENS BETTER</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.08]">
            AI that listens, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500">
              understands, and remembers
            </span>
          </h1>

          <p className="text-base text-zinc-400/90 max-w-xl mb-10 leading-relaxed font-light">
            Auralyn captures meetings, calls, and voice notes, then turns them into structural summaries, direct action
            items, and intuitive insights.
          </p>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-b from-white to-zinc-200 text-zinc-950 rounded-full hover:shadow-xl hover:shadow-purple-500/5 transition-all flex items-center gap-1.5 group">
              Try Auralyn Free
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 smooth-transition" />
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-white/[0.02] hover:bg-white/[0.05] text-white border border-white/[0.08] rounded-full smooth-transition flex items-center gap-1.5">
              <Play className="w-3 h-3 fill-current" />
              Watch Demo
            </button>
          </div>
        </section>

        {/* Interactive Dashboard Workspace Preview */}
        <section id="dashboard" className="pb-32 max-w-5xl mx-auto">
          <div className="premium-card rounded-xl p-1.5 md:p-2.5 shadow-2xl">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.03]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="text-[10px] text-zinc-500 tracking-wider font-mono">AURALYN_ENGINE_V1.0</div>
              <div className="w-12" />
            </div>

            {/* Main Application Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-3 min-h-[380px]">
              {/* Left Column: Recording Panel */}
              <div className="lg:col-span-4 bg-zinc-950/40 border border-white/[0.02] rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-medium tracking-widest text-purple-400 uppercase">
                      Live Canvas
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-white tracking-tight">Executive Product Architecture Sync</h3>
                  <p className="text-xs text-zinc-500 mt-1">June 7, 2026 • 24 mins elapsed</p>
                </div>

                {/* Algorithmic Audio Signal Graph */}
                <div className="my-8 flex items-end justify-between gap-[2px] h-12 px-2 border-b border-white/[0.02] pb-2">
                  {waveHeights.map((h, i) => (
                    <div
                      key={i}
                      className="w-[3px] bg-gradient-to-t from-indigo-500 via-purple-400 to-pink-400 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        animation: isPlaying
                          ? `dynamicWave ${0.6 + (i % 5) * 0.1}s infinite ease-in-out alternate`
                          : "none",
                        animationDelay: `${i * 0.03}s`
                      }}
                    />
                  ))}
                </div>

                {/* Minimalist Player Dock */}
                <div className="flex items-center justify-between bg-white/[0.02] rounded-lg p-2.5 border border-white/[0.04]">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-md bg-white text-zinc-950 flex items-center justify-center hover:bg-zinc-200 smooth-transition"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    )}
                  </button>
                  <div className="text-right">
                    <p className="text-[11px] font-mono text-zinc-400">00:24:15</p>
                    <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Hi-Fi Audio Master</p>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Intelligence Engine Outputs */}
              <div className="lg:col-span-8 flex flex-col bg-zinc-950/20 border border-white/[0.02] rounded-lg overflow-hidden">
                {/* Internal Tab Group Selector */}
                <div className="flex border-b border-white/[0.03] bg-white/[0.01]">
                  {(["summary", "transcript", "action"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2.5 text-xs font-medium tracking-tight border-b smooth-transition capitalize ${
                        activeTab === tab
                          ? "border-purple-500 text-white bg-white/[0.02]"
                          : "border-transparent text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {tab === "action" ? "Action Items" : tab}
                    </button>
                  ))}
                </div>

                {/* Screen Context Layer */}
                <div className="p-5 flex-1 text-xs leading-relaxed text-zinc-400">
                  {activeTab === "summary" && (
                    <div className="space-y-3 animate-fade-up">
                      <p className="text-zinc-300 font-medium">Core Synthesis:</p>
                      <p>
                        The team finalized architectural bounds for the cross-chain notification bus, agreeing to
                        deprecate the legacy polling loop by Q3.
                      </p>
                      <div className="p-3 bg-white/[0.01] border border-white/[0.03] rounded-md mt-2">
                        <span className="text-purple-300 font-mono text-[10px] tracking-wider block mb-1">
                          KEY DECISION
                        </span>
                        All motion layouts must transition directly to hardware-accelerated transforms to eliminate
                        main-thread blocking.
                      </div>
                    </div>
                  )}

                  {activeTab === "transcript" && (
                    <div className="space-y-4 font-light max-h-[220px] overflow-y-auto pr-2 animate-fade-up">
                      <p>
                        <span className="text-purple-400 font-medium">Sarah (08:12):</span> We need to ensure that the
                        layout feels incredibly deep. The previous iteration was way too flat.
                      </p>
                      <p>
                        <span className="text-indigo-400 font-medium">Marcus (08:45):</span> Agreed. Let's drop the
                        stark white card wrappers and instead let spatial radial blurs dictate the section layouts.
                      </p>
                    </div>
                  )}

                  {activeTab === "action" && (
                    <ul className="space-y-3 animate-fade-up">
                      {[
                        {
                          text: "Sarah to refactor spatial radial light filters across main panels.",
                          owner: "Sarah",
                          date: "Thu"
                        },
                        {
                          text: "Deploy updated engine schema to lower latency pipelines.",
                          owner: "Engineering",
                          date: "Mon"
                        },
                        { text: "Coordinate telemetry testing with core user groups.", owner: "David", date: "Friday" }
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between p-2.5 bg-white/[0.01] border border-white/[0.03] rounded-md"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-3.5 h-3.5 rounded border border-white/20 flex items-center justify-center text-[9px] text-purple-400">
                              ✓
                            </div>
                            <span className="text-zinc-300 font-light">{item.text}</span>
                          </div>
                          <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-zinc-400">{item.owner}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features Layout Matrix */}
        <section id="features" className="py-24 border-t border-white/[0.03]">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">INTELLIGENCE SUITE</p>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Turn every conversation into clear action.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Card 1: Main Feature */}
            <div className="md:col-span-8 premium-card rounded-xl p-8 flex flex-col justify-between group">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center text-zinc-400 group-hover:text-purple-400 smooth-transition">
                <FileText className="w-4 h-4" />
              </div>
              <div className="mt-12">
                <h3 className="text-base font-medium text-white mb-2">Smart Meeting Notes</h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-md font-light">
                  Automatically capture semantic key points, structural decisions, and chronological next steps from
                  every discussion with zero configuration.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 premium-card rounded-xl p-8 flex flex-col justify-between group">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center text-zinc-400 group-hover:text-purple-400 smooth-transition">
                <Mic className="w-4 h-4" />
              </div>
              <div className="mt-12">
                <h3 className="text-base font-medium text-white mb-2">Accurate Transcription</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Turn fluid voice into clean, structured, fully searchable text indexable across language barriers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 premium-card rounded-xl p-8 flex flex-col justify-between group">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center text-zinc-400 group-hover:text-purple-400 smooth-transition">
                <CheckSquare className="w-4 h-4" />
              </div>
              <div className="mt-12">
                <h3 className="text-base font-medium text-white mb-2">Action Item Detection</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  The engine extracts tasks, cross-references implicit owners, and signals direct deadlines instantly.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-4 premium-card rounded-xl p-8 flex flex-col justify-between group">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center text-zinc-400 group-hover:text-purple-400 smooth-transition">
                <Search className="w-4 h-4" />
              </div>
              <div className="mt-12">
                <h3 className="text-base font-medium text-white mb-2">Conversation Search</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Perform comprehensive universal searches over thousands of historic team records instantly.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="md:col-span-4 premium-card rounded-xl p-8 flex flex-col justify-between group">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center text-zinc-400 group-hover:text-purple-400 smooth-transition">
                <Brain className="w-4 h-4" />
              </div>
              <div className="mt-12">
                <h3 className="text-base font-medium text-white mb-2">Team Knowledge Memory</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Amalgamate localized vocal structures into a persistent, living graph of shared organizational
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Isolation Module */}
        <section id="security" className="py-24 border-t border-white/[0.03] max-w-4xl mx-auto text-center">
          <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mx-auto mb-6">
            <Lock className="w-4 h-4 text-indigo-400" />
          </div>
          <h2 className="text-xl font-medium text-white mb-3">Isolated by architecture. Secure by default.</h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            Your semantic context layers belong purely to you. Auralyn implements complete technical boundary isolation,
            ensuring conversational primitives are never streamed to public foundational training frameworks.
          </p>
        </section>

        {/* Closing Conversion Block */}
        <section className="py-32 border-t border-white/[0.03] relative overflow-hidden text-center rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent px-4">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Never lose the meaning of <br className="hidden sm:inline" /> a conversation again.
          </h2>
          <p className="text-xs text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed font-light">
            Capture every structural detail, clean up operational debt, and synthesize group discussions cleanly.
          </p>
          <button className="px-6 py-3 text-sm font-medium bg-white text-zinc-950 rounded-full hover:bg-zinc-200 smooth-transition shadow-xl shadow-white/5">
            Get Started with Auralyn
          </button>
          <p className="text-[10px] text-zinc-600 mt-4 font-mono">NO CREDIT CARD OBLIGATION REQUIRED</p>
        </section>
      </main>

      {/* Footer Ecosystem */}
      <footer className="border-t border-white/[0.03] mt-12 py-10 px-6 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="font-medium">Auralyn © 2026</span>
          </div>
          <div className="flex gap-6 text-zinc-500 font-light">
            <a href="#" className="hover:text-zinc-300 smooth-transition">
              Data Privacy Protocol
            </a>
            <a href="#" className="hover:text-zinc-300 smooth-transition">
              Terms of Delivery
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

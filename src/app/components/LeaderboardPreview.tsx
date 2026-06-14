"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Search, ArrowUpRight, Crown } from "lucide-react";

type LeaderboardEntry = {
  rank: number;
  avatar: string;
  name: string;
  wpm: number;
  accuracy: number;
  theme: string;
  themeColor: string;
};

export default function LeaderboardPreview() {
  const [activeTab, setActiveTab] = useState<"weekly" | "allTime">("weekly");

  const weeklyData: LeaderboardEntry[] = [
    { rank: 1, avatar: "🏆", name: "Alex Mercer", wpm: 142, accuracy: 99.4, theme: "Retro terminal", themeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    { rank: 2, avatar: "🥈", name: "Sarah Connor", wpm: 135, accuracy: 98.9, theme: "Pastel Lavender", themeColor: "bg-purple-500/10 text-purple-650 dark:text-purple-400" },
    { rank: 3, avatar: "🥉", name: "Neo", wpm: 128, accuracy: 99.8, theme: "Matrix Dark", themeColor: "bg-zinc-800 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400" },
    { rank: 4, avatar: "⚡", name: "T-800", wpm: 121, accuracy: 97.5, theme: "Cyberpunk Glow", themeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400" },
    { rank: 5, avatar: "🔥", name: "Trinity", wpm: 118, accuracy: 99.1, theme: "Peach Sunrise", themeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
  ];

  const allTimeData: LeaderboardEntry[] = [
    { rank: 1, avatar: "👑", name: "TypeNinja", wpm: 168, accuracy: 99.9, theme: "Ghost Minimalist", themeColor: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400" },
    { rank: 2, avatar: "🏆", name: "Alex Mercer", wpm: 154, accuracy: 99.5, theme: "Retro terminal", themeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    { rank: 3, avatar: "🥈", name: "SpeedDemon", wpm: 148, accuracy: 97.2, theme: "Neon Sunset", themeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400" },
    { rank: 4, avatar: "🥉", name: "Sarah Connor", wpm: 139, accuracy: 99.0, theme: "Pastel Lavender", themeColor: "bg-purple-500/10 text-purple-650 dark:text-purple-400" },
    { rank: 5, avatar: "⚡", name: "FingerFlash", wpm: 134, accuracy: 98.4, theme: "Mint Fresh", themeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400" },
  ];

  const leaderboardList = activeTab === "weekly" ? weeklyData : allTimeData;

  return (
    <section id="leaderboard" className="py-20 select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pastel-blue dark:bg-pastel-blue/10 text-zinc-900 dark:text-pastel-blue border border-zinc-950/5 dark:border-white/5 mb-4">
            <Trophy className="w-3.5 h-3.5" /> High Scores
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Global Leaderboards
          </h2>
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 font-semibold mt-4">
            Measure your speed against the typing elite. Type your way to the top and claim exclusive rank badges.
          </p>
        </div>

        {/* Leaderboard Table Container */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Selector */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800">
              <button
                onClick={() => setActiveTab("weekly")}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "weekly"
                    ? "bg-white dark:bg-zinc-850 text-zinc-900 dark:text-white shadow-sm border border-zinc-200/20"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                Weekly Challenge
              </button>
              <button
                onClick={() => setActiveTab("allTime")}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "allTime"
                    ? "bg-white dark:bg-zinc-850 text-zinc-900 dark:text-white shadow-sm border border-zinc-200/20"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                All-Time Records
              </button>
            </div>

            <a
              href="#"
              className="px-4.5 py-2 rounded-xl font-bold text-xs bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(24,24,27,1)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              Search Users <Search className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Table */}
          <div className="rounded-[32px] border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 px-6 py-4 bg-zinc-50 dark:bg-zinc-900/60 border-b-2 border-zinc-900 dark:border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <div className="col-span-2 text-center sm:text-left sm:pl-3">Rank</div>
              <div className="col-span-5 sm:col-span-6">Typist</div>
              <div className="col-span-2 text-right">WPM</div>
              <div className="col-span-3 sm:col-span-2 text-right">Accuracy</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y border-zinc-900 dark:divide-zinc-800/80 divide-zinc-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  {leaderboardList.map((entry, idx) => {
                    const isTopRank = entry.rank <= 3;
                    return (
                      <div
                        key={entry.name}
                        className={`grid grid-cols-12 items-center px-6 py-4.5 hover:bg-zinc-50/50 dark:hover:bg-zinc-850/40 transition-colors ${
                          idx % 2 === 0 ? "bg-white dark:bg-zinc-900" : "bg-zinc-50/15 dark:bg-zinc-850/10"
                        }`}
                      >
                        {/* Rank Badge */}
                        <div className="col-span-2 flex justify-center sm:justify-start sm:pl-2">
                          {isTopRank ? (
                            <div className="relative w-8 h-8 flex items-center justify-center font-bold text-sm bg-pastel-yellow border border-zinc-950/10 text-zinc-900 rounded-lg shadow-sm">
                              {entry.avatar}
                            </div>
                          ) : (
                            <span className="text-sm font-bold text-zinc-450 dark:text-zinc-500 pl-2">
                              #{entry.rank}
                            </span>
                          )}
                        </div>

                        {/* User Details */}
                        <div className="col-span-5 sm:col-span-6 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-pastel-lavender/50 border border-zinc-950/5 flex items-center justify-center font-black text-xs text-zinc-900">
                            {entry.name[0]}
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                              {entry.name}
                            </span>
                            <span className={`hidden sm:inline-block px-2.5 py-0.5 self-start rounded-md text-[10px] font-bold uppercase tracking-wide border border-zinc-950/5 ${entry.themeColor}`}>
                              {entry.theme}
                            </span>
                          </div>
                        </div>

                        {/* WPM */}
                        <div className="col-span-2 text-right">
                          <span className="text-sm sm:text-base font-black text-zinc-900 dark:text-white">
                            {entry.wpm}
                          </span>
                        </div>

                        {/* Accuracy */}
                        <div className="col-span-3 sm:col-span-2 text-right">
                          <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-450">
                            {entry.accuracy}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Full Leaderboard CTA */}
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-bold text-zinc-800 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200 border-b border-dashed border-zinc-550 transition-colors"
            >
              View Full Ranked Ladder (15,240 typists) <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

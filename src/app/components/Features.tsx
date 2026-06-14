"use client";

import { motion } from "framer-motion";
import { LineChart, BrainCircuit, Palette, Trophy, Sparkles, CheckCircle2 } from "lucide-react";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const featuresList = [
    {
      title: "Real-time Live Analytics",
      description:
        "Visualize your typing speed (WPM), raw accuracy, and latency graphs dynamically as you type. Learn which keys slow you down.",
      icon: LineChart,
      color: "bg-pastel-mint",
      textColor: "text-emerald-800 dark:text-emerald-400",
      gridSpan: "lg:col-span-7",
      bullets: ["Character-by-character key log", "Live interactive charts", "Historical performance dashboard"],
    },
    {
      title: "AI-Powered Training",
      description:
        "Our smart engine creates custom lessons targeting your specific weak keys and speed bottlenecks to optimize your learning curve.",
      icon: BrainCircuit,
      color: "bg-pastel-lavender",
      textColor: "text-indigo-800 dark:text-indigo-400",
      gridSpan: "lg:col-span-5",
      bullets: ["Custom drills", "Weak-finger optimization", "Adaptive speed adjustment"],
    },
    {
      title: "Stunning Multi-Theme Customizer",
      description:
        "Match your typing dashboard to your setup. Toggle clean minimalist layouts, vibrant retro terminal themes, or soft pastel combinations.",
      icon: Palette,
      color: "bg-pastel-peach",
      textColor: "text-orange-850 dark:text-orange-400",
      gridSpan: "lg:col-span-5",
      bullets: ["Custom typography scaling", "Minimalist visual mode", "Custom sound effects (Cherry MX, clicky)"],
    },
    {
      title: "Gamified Challenges & Ranks",
      description:
        "Stay motivated by completing daily quests, unlock gorgeous badges, and climb competitive seasonal tiers. Compete against top typists.",
      icon: Trophy,
      color: "bg-pastel-blue",
      textColor: "text-blue-800 dark:text-blue-400",
      gridSpan: "lg:col-span-7",
      bullets: ["Daily achievements", "Ranked bracket progression", "Global multi-tier leaderboard"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-zinc-100/30 dark:bg-zinc-950/20 border-y border-zinc-200/40 dark:border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pastel-mint dark:bg-pastel-mint/10 text-emerald-950 dark:text-pastel-mint border border-zinc-950/5 dark:border-white/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-current" /> Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Everything You Need to Type Like a Pro
          </h2>
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 font-semibold mt-4">
            Unlock professional typing metrics and exercises, gamified with beautiful interactions and custom styling.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${feature.gridSpan} relative overflow-hidden rounded-3xl border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all`}
              >
                {/* Visual Header / Accent */}
                <div className={`h-2.5 w-full ${feature.color}`} />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${feature.color} border border-zinc-950/15 flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-zinc-900" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                    {feature.description}
                  </p>

                  <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {feature.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-450">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

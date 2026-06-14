"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gamepad2, Users, Flame, ChevronRight, Zap } from "lucide-react";

export default function TypingGames() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const games = [
    {
      title: "Key Storm",
      description: "Falling letters are descending on a futuristic cityscape! Type them correctly to charge your energy barriers before they hit the ground. A retro-inspired arcade mode that tests raw reflexes.",
      badge: "Solo Arcade",
      badgeColor: "bg-pastel-peach text-orange-950",
      players: "1 Player",
      icon: Flame,
      stat: "HighScore: 15,240 pts",
    },
    {
      title: "Type Racer League",
      description: "Match with up to five typists online. Type paragraphs of classic literature, technical code, or movie quotes. The faster you type, the faster your vehicle surges toward the finish line.",
      badge: "Real-time PvP",
      badgeColor: "bg-pastel-blue text-blue-950",
      players: "2 - 5 Players",
      icon: Users,
      stat: "Matchmaking time < 10s",
    },
  ];

  return (
    <section id="games" className="py-20 bg-zinc-150/30 dark:bg-zinc-950/20 border-y border-zinc-200/40 dark:border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pastel-peach dark:bg-pastel-peach/10 text-zinc-900 dark:text-pastel-peach border border-zinc-950/5 dark:border-white/5 mb-4">
            <Gamepad2 className="w-3.5 h-3.5" /> Typing Games
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Turn Practice into Playtime
          </h2>
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 font-semibold mt-4">
            Banish boring typing tests. Boost your speed through competitive multiplayer races and frantic arcade challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Arcade Illustration */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative aspect-square w-full max-w-[420px] rounded-[36px] overflow-hidden border-2 border-zinc-900 dark:border-zinc-800 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] bg-white dark:bg-zinc-900"
            >
              <Image
                src="/images/typing_games_arcade.png"
                alt="Retro arcade typing game illustration"
                fill
                className="object-cover"
                sizes="(max-w-7xl) 100vw"
              />
            </motion.div>
          </div>

          {/* Right Column: Game Modes Detail */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {games.map((game, index) => {
              const Icon = game.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-[28px] border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Visual Indicator Icon */}
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-950/10 dark:border-zinc-800 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />
                  </div>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${game.badgeColor} border border-zinc-950/10`}>
                        {game.badge}
                      </span>
                      <span className="text-xs font-semibold text-zinc-550 dark:text-zinc-450 bg-zinc-100 dark:bg-zinc-900/80 px-2.5 py-1 rounded-full border border-zinc-950/5">
                        {game.players}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
                      {game.title}
                    </h3>

                    <p className="text-sm font-medium text-zinc-650 dark:text-zinc-400 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                      <span className="text-xs font-bold text-zinc-450 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-300 dark:fill-none" /> {game.stat}
                      </span>
                      <a
                        href="#"
                        className="text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-0.5 transition-colors cursor-pointer group"
                      >
                        Play Now <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Target, Flame, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        ease: "easeInOut" as const,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-pastel-lavender/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 translate-x-1/4 w-96 h-96 rounded-full bg-pastel-peach/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="inline-flex self-center lg:self-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pastel-lavender/65 dark:bg-pastel-lavender/10 text-zinc-900 dark:text-pastel-lavender border border-zinc-950/5 dark:border-white/5 shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-current" /> Speed Typing Made Fun
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.08]"
          >
            Master the Art of{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-zinc-900 dark:text-zinc-950 px-2 py-0.5 bg-pastel-lavender rounded-2xl border-2 border-zinc-900 dark:border-zinc-950 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                Speed
              </span>
            </span>{" "}
            Typing
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Level up your WPM, build absolute muscle memory, and race on leaderboards with gorgeous minimalist aesthetics and engaging arcade-inspired challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <a
              href="#learn"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-center bg-pastel-lavender border-2 border-zinc-900 dark:border-zinc-950 text-zinc-950 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              Start Typing Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#games"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-center bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-850 text-zinc-900 dark:text-zinc-100 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-4.5 h-4.5 fill-current" /> Play Games
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mt-6 max-w-md mx-auto lg:mx-0"
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center lg:items-start p-3 bg-pastel-mint-light dark:bg-zinc-900/40 border-2 border-zinc-950/10 dark:border-zinc-800 rounded-2xl">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
                <Zap className="w-3.5 h-3.5" /> Speed
              </div>
              <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white mt-1">
                85+ <span className="text-xs font-bold text-zinc-500">WPM</span>
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center lg:items-start p-3 bg-pastel-peach-light dark:bg-zinc-900/40 border-2 border-zinc-950/10 dark:border-zinc-800 rounded-2xl">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wide">
                <Target className="w-3.5 h-3.5" /> Accuracy
              </div>
              <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white mt-1">
                99% <span className="text-xs font-bold text-zinc-500">Avg</span>
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center lg:items-start p-3 bg-pastel-lavender-light dark:bg-zinc-900/40 border-2 border-zinc-950/10 dark:border-zinc-800 rounded-2xl">
              <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wide">
                <Flame className="w-3.5 h-3.5" /> Streak
              </div>
              <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white mt-1">
                14 <span className="text-xs font-bold text-zinc-500">Days</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Workstation Graphic */}
        <div className="lg:col-span-5 flex justify-center relative w-full h-full">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="w-full max-w-[420px] lg:max-w-none relative aspect-square rounded-[36px] overflow-hidden border-2 border-zinc-900 dark:border-zinc-800 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] bg-white dark:bg-zinc-900"
          >
            <Image
              src="/images/hero_keyboard_station.png"
              alt="Premium Mechanical Keyboard Workstation illustration"
              fill
              className="object-cover"
              sizes="(max-w-7xl) 100vw"
              priority
            />
          </motion.div>

          {/* Overlay Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute bottom-4 left-4 p-4 rounded-2xl border-2 border-zinc-900 bg-white/90 dark:bg-zinc-900/95 dark:border-zinc-850 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex items-center gap-3.5 pointer-events-none max-w-[200px]"
          >
            <div className="w-10 h-10 rounded-full bg-pastel-mint border border-zinc-900/10 flex items-center justify-center font-black text-zinc-900 text-sm">
              #1
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Weekly Champion</p>
              <p className="text-sm font-black text-zinc-900 dark:text-white mt-0.5">Alex (142 WPM)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

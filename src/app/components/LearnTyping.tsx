"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, CheckCircle, Zap, Target } from "lucide-react";

export default function LearnTyping() {
  const targetText = "TypeMaster builds muscle memory with adaptive lessons.";
  const [typedText, setTypedText] = useState("");
  const [activeKey, setActiveKey] = useState("");
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Keyboard Rows definition
  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"]
  ];

  useEffect(() => {
    let textIndex = 0;
    let errors = 0;
    
    const typingInterval = setInterval(() => {
      if (textIndex < targetText.length) {
        const char = targetText[textIndex];
        setTypedText((prev) => prev + char);
        setActiveKey(char.toLowerCase());
        
        // Randomly simulate small mistakes to show accuracy fluctuation
        if (Math.random() < 0.05 && textIndex > 5 && textIndex < targetText.length - 5) {
          errors += 1;
        }

        // Calculate WPM: (characters / 5) / (minutes elapsed)
        // Since we write 1 character every ~180ms:
        const elapsedMinutes = ((textIndex + 1) * 180) / 60000;
        const currentWpm = Math.round(((textIndex + 1) / 5) / elapsedMinutes);
        setWpm(currentWpm || 72);

        // Accuracy Calculation
        const currentAccuracy = Math.max(90, Math.round(((textIndex + 1 - errors) / (textIndex + 1)) * 100));
        setAccuracy(currentAccuracy);
        
        textIndex++;
      } else {
        // Reset and restart after a pause
        setTimeout(() => {
          setTypedText("");
          setActiveKey("");
          setWpm(0);
          setAccuracy(100);
          textIndex = 0;
          errors = 0;
        }, 3000);
      }
    }, 180);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="learn" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pastel-lavender/70 dark:bg-pastel-lavender/10 text-zinc-900 dark:text-pastel-lavender border border-zinc-950/5 dark:border-white/5 mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Interactive Lessons
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Learn the Right Way, Keyboard Optional
          </h2>
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 font-semibold mt-4">
            Interactive visual guides highlight optimal finger placements, training your fingers through spatial recall.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Learn Interface Simulator */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-[32px] border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] overflow-hidden">
              {/* Header Bar */}
              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/60 border-b-2 border-zinc-900 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-350 flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-indigo-500 fill-indigo-200 dark:fill-none" /> Practice Session: Lesson 4
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-zinc-900/10" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 border border-zinc-900/10" />
                  <div className="w-3 h-3 rounded-full bg-green-400 border border-zinc-900/10" />
                </div>
              </div>

              {/* Simulator Main Body */}
              <div className="p-8 flex flex-col gap-8">
                {/* Stats Panel */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-pastel-lavender-light dark:bg-zinc-800/20 p-4 border border-zinc-950/5 dark:border-zinc-850 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pastel-lavender border border-zinc-900/10 flex items-center justify-center font-bold text-zinc-900">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Speed</span>
                      <span className="text-lg font-black text-zinc-900 dark:text-white leading-none">{wpm} WPM</span>
                    </div>
                  </div>

                  <div className="bg-pastel-mint-light dark:bg-zinc-800/20 p-4 border border-zinc-950/5 dark:border-zinc-850 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pastel-mint border border-zinc-900/10 flex items-center justify-center font-bold text-zinc-900">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Accuracy</span>
                      <span className="text-lg font-black text-zinc-900 dark:text-white leading-none">{accuracy}%</span>
                    </div>
                  </div>

                  <div className="bg-pastel-peach-light dark:bg-zinc-800/20 p-4 border border-zinc-950/5 dark:border-zinc-850 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pastel-peach border border-zinc-900/10 flex items-center justify-center font-bold text-zinc-900">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Progress</span>
                      <span className="text-lg font-black text-zinc-900 dark:text-white leading-none">
                        {Math.round((typedText.length / targetText.length) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Display area */}
                <div className="p-6 rounded-2xl bg-zinc-55 dark:bg-zinc-950 border-2 border-zinc-900/5 dark:border-zinc-850 font-mono text-xl leading-relaxed tracking-wider text-left min-h-[100px] select-none">
                  {/* Typed letters */}
                  <span className="text-emerald-555 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/25 px-0.5 rounded">
                    {typedText}
                  </span>
                  {/* Cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-6 bg-indigo-500 align-middle -ml-0.5"
                  />
                  {/* Untyped letters */}
                  <span className="text-zinc-350 dark:text-zinc-600">
                    {targetText.slice(typedText.length)}
                  </span>
                </div>

                {/* Keyboard Grid Indicator */}
                <div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border-2 border-zinc-900/5 dark:border-zinc-850 select-none">
                  {keyboardRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex justify-center gap-1.5">
                      {row.map((key) => {
                        const isKeyActive = activeKey === key;
                        return (
                          <div
                            key={key}
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm font-bold uppercase transition-all border ${
                              isKeyActive
                                ? "bg-pastel-lavender text-zinc-950 border-zinc-950 scale-105 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800"
                            }`}
                          >
                            {key}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                  {/* Space bar */}
                  <div className="flex justify-center mt-1">
                    <div
                      className={`w-40 sm:w-56 h-8 sm:h-9 rounded-lg flex items-center justify-center text-xs text-zinc-400 font-bold uppercase transition-all border ${
                        activeKey === " "
                          ? "bg-pastel-lavender text-zinc-950 border-zinc-950 scale-105 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      Space
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Fidelity Image & Promo Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              whileHover={{ rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative aspect-square w-full max-w-[420px] mx-auto rounded-[36px] overflow-hidden border-2 border-zinc-900 dark:border-zinc-800 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] bg-white dark:bg-zinc-900"
            >
              <Image
                src="/images/learn_typing_dashboard.png"
                alt="Typing dashboard metrics graphic"
                fill
                className="object-cover"
                sizes="(max-w-7xl) 100vw"
              />
            </motion.div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                Train Smarter, Speed Follows
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 font-medium leading-relaxed">
                By training with visual spatial feedback, you eliminate looking down at your keys. TypeMaster measures key response latencies and builds customized exercises to accelerate muscle memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

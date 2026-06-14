"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Mail, CheckCircle } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pastel-lavender/40 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative rounded-[36px] border-2 border-zinc-900 dark:border-zinc-800 bg-gradient-to-br from-pastel-lavender-light via-white to-pastel-mint-light dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900/50 p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] text-center overflow-hidden"
        >
          {/* Top spark */}
          <div className="inline-flex self-center mb-6">
            <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-150 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <Sparkles className="w-3.5 h-3.5 fill-current text-indigo-500" /> Start practicing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] max-w-2xl mx-auto">
            Ready to Level Up Your Typing Speed?
          </h2>

          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 font-semibold max-w-xl mx-auto mt-6 leading-relaxed">
            Join thousands of developers, writers, and students training their muscle memory, competing in live races, and tracking keys.
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto mt-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3.5 items-stretch"
                >
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-2xl border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm font-semibold placeholder-zinc-450 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-4 rounded-2xl font-bold text-sm bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 border-2 border-zinc-950 dark:border-white shadow-[3px_3px_0px_0px_rgba(224,215,255,0.4)] hover:translate-y-[-2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Join Free <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-500/20 text-emerald-800 dark:text-emerald-400 flex flex-col items-center gap-2"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                  <p className="font-bold text-base">Check your inbox!</p>
                  <p className="text-xs font-semibold text-emerald-700/80 dark:text-emerald-400/80">
                    We sent an invite link to <strong className="text-emerald-900 dark:text-emerald-350">{email}</strong>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-6">
            No credit card required. Free forever standard account.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

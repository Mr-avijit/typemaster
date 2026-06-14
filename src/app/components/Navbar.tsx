"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Keyboard, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "Learn Typing", href: "#learn" },
    { name: "Games", href: "#games" },
    { name: "Leaderboard", href: "#leaderboard" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="p-2 rounded-xl bg-pastel-lavender dark:bg-pastel-lavender-light/10 text-zinc-900 dark:text-pastel-lavender flex items-center justify-center border border-zinc-950/10 dark:border-white/10 shadow-sm transition-transform group-hover:rotate-[-5deg]">
            <Keyboard className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-650 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            TypeMaster
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors relative py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#learn"
            className="px-5 py-2.5 rounded-xl font-semibold text-sm border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.05)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(24,24,27,1)] transition-all cursor-pointer"
          >
            Start Typing
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg md:hidden text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-350 dark:hover:text-zinc-50 transition-colors py-2 border-b border-zinc-100 dark:border-zinc-900/50"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#learn"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl font-bold bg-pastel-lavender dark:bg-pastel-lavender/20 text-zinc-900 dark:text-pastel-lavender border border-zinc-900/20 dark:border-pastel-lavender/30 shadow-sm"
              >
                Start Typing <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

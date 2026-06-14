"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LearnTyping from "./components/LearnTyping";
import TypingGames from "./components/TypingGames";
import LeaderboardPreview from "./components/LeaderboardPreview";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {/* Hero Section */}
        <Hero />

        {/* Bento-grid Features Section */}
        <Features />

        {/* Interactive Learn Typing Section */}
        <LearnTyping />

        {/* Typing Games Section */}
        <TypingGames />

        {/* Global Leaderboard Section */}
        <LeaderboardPreview />

        {/* Frequently Asked Questions Section */}
        <FAQSection />

        {/* Sign-up Call-to-Action Section */}
        <CTASection />
      </motion.main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

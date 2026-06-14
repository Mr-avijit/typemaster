"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageSquare,
  Bug,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Mail,
  Keyboard,
  BookOpen,
  LineChart,
  Gamepad2,
  Trophy,
  Users,
  Settings
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedIndices, setExpandedIndices] = useState<Record<string, boolean>>({});

  const categories = [
    { name: "All", icon: HelpCircle },
    { name: "Getting Started", icon: Sparkles },
    { name: "Typing Lessons", icon: BookOpen },
    { name: "Typing Tests", icon: LineChart },
    { name: "Keyboard Detection", icon: Keyboard },
    { name: "Account & Progress", icon: Users },
    { name: "Games & Levels", icon: Gamepad2 },
    { name: "Leaderboards", icon: Trophy },
    { name: "Technical Support", icon: Settings },
  ];

  const faqs: FAQItem[] = [
    // Getting Started
    {
      category: "Getting Started",
      question: "What is TypeMaster?",
      answer: "TypeMaster is a premium typing learning platform that combines beautiful minimalist aesthetics with gamified lessons, speed tests, and real-time multiplayer racing to help you learn touch typing and build muscle memory."
    },
    {
      category: "Getting Started",
      question: "Can I use TypeMaster without creating an account?",
      answer: "Yes! You can practice lessons, complete typing tests, and play arcade games as a guest user. However, your statistics, levels, and progress will not be saved across sessions."
    },
    {
      category: "Getting Started",
      question: "Is TypeMaster free to use?",
      answer: "TypeMaster offers a comprehensive free-tier that includes all core typing lessons, basic typing tests, and arcade modes. We also offer a premium subscription with advanced analytics and custom sound packs."
    },
    {
      category: "Getting Started",
      question: "Who is TypeMaster designed for?",
      answer: "TypeMaster is designed for everyone—ranging from absolute beginners looking to ditch the 'hunt-and-peck' method to developers, writers, and transcriptionists wishing to maximize their speed and efficiency."
    },
    // Typing Lessons
    {
      category: "Typing Lessons",
      question: "What is touch typing?",
      answer: "Touch typing is a typing style where you type without looking at the keyboard. It relies on muscle memory and spatial recall rather than sight to locate keys."
    },
    {
      category: "Typing Lessons",
      question: "What is the 10-finger typing method?",
      answer: "It is a structured typing technique where each of your ten fingers is assigned specific keys on the keyboard. By keeping your fingers anchored near the home row, you minimize movement and maximize speed."
    },
    {
      category: "Typing Lessons",
      question: "How long does it take to learn touch typing?",
      answer: "Most users see significant improvement in accuracy and finger placement within 2 to 4 weeks of practicing 15 minutes a day. Reaching speeds above 80 WPM usually takes 2 to 3 months of consistent training."
    },
    {
      category: "Typing Lessons",
      question: "Why should I return to the home row after every key press?",
      answer: "Returning to the home row (ASDF for the left hand, JKL; for the right hand) establishes a consistent physical reference point. This allows your brain to calculate exact distances to all other keys without visual aid."
    },
    {
      category: "Typing Lessons",
      question: "How do typing lessons work?",
      answer: "Our lessons start with simple key combinations to build muscle memory, gradually introducing full words, sentences, and punctuation. The AI adapter tunes the text density based on your latency and errors."
    },
    // Typing Tests
    {
      category: "Typing Tests",
      question: "How is WPM calculated?",
      answer: "Words Per Minute (WPM) is calculated as: (Total Characters Typed / 5) / Time (in minutes). A 'word' is standardized as exactly 5 keystrokes, including spaces."
    },
    {
      category: "Typing Tests",
      question: "How is typing accuracy calculated?",
      answer: "Accuracy is the percentage of correct characters relative to the total characters typed: (Correct Characters / Total Keys Pressed) * 100. Corrected errors do not penalize your final accuracy."
    },
    {
      category: "Typing Tests",
      question: "What is a good typing speed?",
      answer: "The average typing speed is about 40 WPM. Professional typists, programmers, and writers typically average between 70 and 90 WPM. Elite speeds exceed 120 WPM."
    },
    {
      category: "Typing Tests",
      question: "Can I track my typing progress over time?",
      answer: "Yes, when logged in, our statistics dashboard visualizes your speed trends, accuracy rates, daily streak, and progress records via interactive glassmorphism charts."
    },
    {
      category: "Typing Tests",
      question: "Why did my WPM decrease?",
      answer: "This usually happens when you are transitioning to a new finger layout or learning correct finger posture. Prioritizing accuracy over speed will build correct muscle memory, and your speed will bounce back stronger."
    },
    // Keyboard Detection
    {
      category: "Keyboard Detection",
      question: "Does TypeMaster automatically detect my device?",
      answer: "Yes, TypeMaster reads standard browser layout metadata to detect your primary operating system (macOS, Windows, or Linux) and maps keycaps accordingly."
    },
    {
      category: "Keyboard Detection",
      question: "Can I switch between Windows and Mac keyboard layouts?",
      answer: "Absolutely. In the lesson settings menu, you can toggle between Windows and macOS key structures, which changes modifier key displays (like Cmd/Ctrl and Alt/Option)."
    },
    {
      category: "Keyboard Detection",
      question: "Can TypeMaster detect an external keyboard on tablets and mobile devices?",
      answer: "Yes. When you connect a physical Bluetooth or USB keyboard to your iPad, tablet, or smartphone, TypeMaster will accept your keystrokes and disable the virtual keyboard indicator."
    },
    {
      category: "Keyboard Detection",
      question: "Why is my keyboard layout different?",
      answer: "If you use international layouts (such as AZERTY, QWERTZ, or Dvorak), you can change the keyboard layout mappings in the settings dashboard to align with your physical layout."
    },
    // Account & Progress
    {
      category: "Account & Progress",
      question: "Do I need an account to practice?",
      answer: "No, guest users have full access to standard drills. However, to save statistics, customize themes, and appear on public boards, you need a free account."
    },
    {
      category: "Account & Progress",
      question: "What happens if I practice as a guest?",
      answer: "Your statistics are stored in your browser's local storage temporarily. If you clear your browser cache or switch devices, your guest progress will be lost."
    },
    {
      category: "Account & Progress",
      question: "How can I save my progress?",
      answer: "Simply click 'Sign Up' or 'Create Account' at any time. We will automatically sync your guest local storage statistics to your new permanent account."
    },
    {
      category: "Account & Progress",
      question: "Can I continue my lessons across devices?",
      answer: "Yes. By logging into your TypeMaster account, your lessons, statistics, unlocked themes, and configurations will sync across laptops, desktops, tablets, and phones."
    },
    // Games & Levels
    {
      category: "Games & Levels",
      question: "How do I earn XP?",
      answer: "You earn Experience Points (XP) by completing typing lessons, speed tests, and daily challenges. Bonus XP is awarded for high accuracy streaks and hitting target speeds."
    },
    {
      category: "Games & Levels",
      question: "How does the level system work?",
      answer: "As you accumulate XP, your profile level increases. Higher levels unlock premium styling themes, profile avatars, custom keycap sound packs, and title achievements."
    },
    {
      category: "Games & Levels",
      question: "What achievements can I unlock?",
      answer: "You can unlock achievements like 'Speed Demon' (typing 100+ WPM with 100% accuracy), 'Daily Warrior' (practicing 7 days in a row), and 'Arcade Master' (scoring 10,000+ points in games)."
    },
    {
      category: "Games & Levels",
      question: "Do typing games improve typing speed?",
      answer: "Yes! Typing games like Key Storm require rapid reaction and automatic typing under time constraints, which trains your brain to type word-patterns subconsciously rather than letter-by-letter."
    },
    // Leaderboards
    {
      category: "Leaderboards",
      question: "How are leaderboard rankings calculated?",
      answer: "Leaderboard rankings are based on your highest WPM achieved on our standard 60-second typing test, with a minimum required accuracy of 95%."
    },
    {
      category: "Leaderboards",
      question: "Are rankings based on WPM or accuracy?",
      answer: "Rankings prioritize speed (WPM). If two typists have the same WPM, the tie is broken in favor of the typist with the higher accuracy rating."
    },
    {
      category: "Leaderboards",
      question: "Can guest users appear on the leaderboard?",
      answer: "No. To prevent spam and maintain competition integrity, only verified registered users can participate in and appear on public leaderboards."
    },
    {
      category: "Leaderboards",
      question: "How often are leaderboards updated?",
      answer: "Weekly leaderboards reset every Sunday at midnight GMT. Global all-time rankings and user stats are updated in real-time after every qualified typing test."
    },
    // Technical Support
    {
      category: "Technical Support",
      question: "Why are some keys not responding?",
      answer: "Ensure your browser focus is inside the typing terminal input box. Alternatively, disable any browser extensions that intercept keyboard shortcuts (like vim keybindings or password managers)."
    },
    {
      category: "Technical Support",
      question: "Why is my typing accuracy incorrect?",
      answer: "Make sure your physical keyboard layout matches the keyboard configuration in your settings. If you use a non-QWERTY layout, select the corresponding map in the options."
    },
    {
      category: "Technical Support",
      question: "Which browsers are supported?",
      answer: "TypeMaster is fully optimized for modern browsers, including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera."
    },
    {
      category: "Technical Support",
      question: "Does TypeMaster work on mobile devices?",
      answer: "Yes, but to get the proper tactile learning experience, we highly recommend using a physical external keyboard connected to your phone or tablet."
    },
    {
      category: "Technical Support",
      question: "How do I report a bug?",
      answer: "You can click the 'Report Bug' button in the support section or dashboard footer to open a submission form, or join our community Discord server to report issues."
    }
  ];

  // Filter and search logic
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (question: string) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <section id="faq" className="py-20 bg-zinc-100/30 dark:bg-zinc-950/20 border-y border-zinc-200/40 dark:border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pastel-lavender/70 dark:bg-pastel-lavender/10 text-zinc-900 dark:text-pastel-lavender border border-zinc-950/5 dark:border-white/5 mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 font-semibold mt-4">
            Have questions about TypeMaster? Browse through our comprehensive help documentation or search directly.
          </p>
        </div>

        {/* Search and Category Filter Header */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col gap-6">
          {/* Search bar */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm font-semibold placeholder-zinc-450 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm"
            />
          </div>

          {/* Category Chips Container */}
          <div className="flex gap-2 overflow-x-auto pb-3.5 px-1 scrollbar-none items-center justify-start lg:justify-center -mx-6 lg:mx-0 px-6 lg:px-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer select-none ${
                    isActive
                      ? "bg-pastel-lavender text-zinc-950 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]"
                      : "bg-white dark:bg-zinc-900 text-zinc-550 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="max-w-3xl mx-auto min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                {filteredFaqs.map((faq) => {
                  const isExpanded = !!expandedIndices[faq.question];
                  return (
                    <motion.div
                      layout="position"
                      key={faq.question}
                      className="rounded-2xl border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.05)] overflow-hidden transition-all duration-200"
                    >
                      {/* Accordion Toggle Header */}
                      <button
                        onClick={() => toggleExpand(faq.question)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white leading-tight">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 shrink-0"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      {/* Accordion Answer Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-zinc-100 dark:border-zinc-800/80"
                          >
                            <div className="px-6 py-4.5 text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium bg-zinc-50/50 dark:bg-zinc-950/20">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 p-6 rounded-3xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 text-zinc-500"
              >
                <HelpCircle className="w-12 h-12 mx-auto text-zinc-300 dark:text-zinc-700 mb-3" />
                <p className="font-bold text-base text-zinc-750 dark:text-zinc-300">No results found</p>
                <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-1 max-w-sm mx-auto">
                  We couldn't find any questions matching "{searchQuery}" in this category. Try adjusting your search query.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still Need Help? Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border-2 border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] text-center flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="text-left max-w-lg">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                Still Need Help?
              </h3>
              <p className="text-sm font-semibold text-zinc-550 dark:text-zinc-400 mt-2.5 leading-relaxed">
                Can't find the answers you're looking for? Reach out directly to our support staff, submit bugs, or join our community Discord server.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 select-none">
              <a
                href="#"
                className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-pastel-lavender border-2 border-zinc-900 dark:border-zinc-950 text-zinc-950 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] active:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-4.5 h-4.5" /> Contact Support
              </a>
              
              <a
                href="#"
                className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] active:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Bug className="w-4.5 h-4.5 text-rose-500" /> Report Bug
              </a>

              <a
                href="#"
                className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] active:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4.5 h-4.5 text-indigo-500" /> Join Community
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Keyboard, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Learn Typing", href: "#learn" },
    { name: "Typing Games", href: "#games" },
    { name: "Leaderboard", href: "#leaderboard" },
  ];

  const toolLinks = [
    { name: "Speed Test", href: "#" },
    { name: "Finger Mapping", href: "#" },
    { name: "Custom Text Library", href: "#" },
    { name: "Cherry MX Sound Pack", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Open Source", href: "#" },
    { name: "Contact Support", href: "#" },
  ];

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Side: Brand info */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <a href="#" className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-pastel-lavender dark:bg-pastel-lavender-light/10 text-zinc-900 dark:text-pastel-lavender flex items-center justify-center border border-zinc-950/10 dark:border-white/10 shadow-sm">
              <Keyboard className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              TypeMaster
            </span>
          </a>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
            Master touch typing, accelerate muscle memory, and track character bottlenecks through beautiful, gamified visuals.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-1">
            <a
              href="#"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-550 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-150 transition-colors flex items-center justify-center"
              aria-label="Twitter link"
            >
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-550 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-150 transition-colors flex items-center justify-center"
              aria-label="GitHub link"
            >
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-555 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-150 transition-colors flex items-center justify-center"
              aria-label="Discord link"
            >
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Links columns */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Product links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Product</h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-zinc-550 hover:text-zinc-850 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Practice</h3>
            <ul className="flex flex-col gap-2.5">
              {toolLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-zinc-550 hover:text-zinc-850 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-zinc-550 hover:text-zinc-850 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-200/60 dark:border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} TypeMaster Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> for high-speed typists.
        </p>
      </div>
    </footer>
  );
}

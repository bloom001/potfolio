"use client";

import { GraduationCap, Calendar, Landmark, BookMarked, CheckCircle, Code } from "lucide-react";

export default function Education() {
  const coursework = [
    "Network Security",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Software Engineering",
  ];

  return (
    <section
      id="education"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-purple uppercase font-bold flex items-center justify-center gap-1.5">
            <GraduationCap className="w-4 h-4" /> ACADEMICS.edu
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education Timeline
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full" />
        </div>

        {/* Education layout stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Card 1: BS IT */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 dark:border-white/5 relative overflow-hidden hover:border-cyber-purple/35 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-cyber-purple/10 blur-xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-gray-200/50 dark:border-gray-800/50">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Bachelor of Science in Information Technology
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 font-medium">
                  <span className="flex items-center space-x-1.5">
                    <Landmark className="w-4 h-4 text-cyber-blue" />
                    <span>Nirmala College of Arts and Science</span>
                  </span>
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                  <span>Chalakudy, Kerala</span>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-xs text-cyber-purple font-mono bg-cyber-purple/10 px-3 py-1.5 rounded-full border border-cyber-purple/25 w-fit shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span>Jan 2023 – Jan 2026</span>
              </div>
            </div>

            {/* Coursework & Capstone details */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-bold text-xs tracking-widest text-foreground/75 dark:text-gray-400 flex items-center gap-1.5 font-mono uppercase">
                  <BookMarked className="w-4 h-4 text-cyber-blue" /> RELEVANT_COURSEWORK
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl border border-gray-200 bg-white/20 dark:border-gray-800/40 dark:bg-black/10 text-xs font-semibold text-gray-750 dark:text-gray-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyber-blue mr-1.5" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-gray-200/50 dark:border-gray-800/30">
                <h4 className="font-bold text-xs tracking-widest text-foreground/75 dark:text-gray-400 flex items-center gap-1.5 font-mono uppercase">
                  <Code className="w-4 h-4 text-cyber-green" /> CAPSTONE_PROJECT
                </h4>
                <div className="p-3.5 rounded-xl bg-cyber-green/5 border border-cyber-green/20 text-sm">
                  <span className="font-bold text-foreground">Blockchain-Based Voting Platform: </span>
                  <span className="text-gray-650 dark:text-gray-300">
                    Designed and deployed a decentralized election registry on the Ethereum network utilizing Solidity smart contracts to guarantee tamper-proof audit trails.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Higher Secondary */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 dark:border-white/5 relative overflow-hidden hover:border-cyber-blue/35 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-cyber-blue/10 blur-xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Higher Secondary Certificate (Commerce)
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 font-medium">
                  <span className="flex items-center space-x-1.5">
                    <Landmark className="w-4 h-4 text-cyber-blue" />
                    <span>Chentrappinni Higher Secondary School</span>
                  </span>
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                  <span>Thrissur, Kerala</span>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-xs text-cyber-blue font-mono bg-cyber-blue/10 px-3 py-1.5 rounded-full border border-cyber-blue/25 w-fit shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span>Jan 2021 – Jan 2023</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Code, Blocks, Sparkles, Wrench, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { SKILL_DETAILS, SkillDetail } from "@/data/skillDetails";

interface SkillModalContextType {
  showSkill: (name: string) => void;
  closeSkill: () => void;
}

const SkillModalContext = createContext<SkillModalContextType | undefined>(undefined);

export function useSkillModal() {
  const context = useContext(SkillModalContext);
  if (!context) {
    throw new Error("useSkillModal must be used within a SkillModalProvider");
  }
  return context;
}

interface SkillModalProviderProps {
  children: ReactNode;
}

export default function SkillModalProvider({ children }: SkillModalProviderProps) {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const showSkill = useCallback((name: string) => {
    // Exact match or fallback case-insensitive match
    let detail = SKILL_DETAILS[name];
    if (!detail) {
      // Try mapping lowercase keys
      const lowercaseKey = name.toLowerCase().trim();
      const matchedKey = Object.keys(SKILL_DETAILS).find(
        (key) => key.toLowerCase() === lowercaseKey
      );
      if (matchedKey) {
        detail = SKILL_DETAILS[matchedKey];
      }
    }

    if (detail) {
      setSelectedSkill(detail);
    } else {
      // Fallback for undocumented skills
      setSelectedSkill({
        name: name,
        category: "General Tech Stack",
        description: `Hands-on experience developing projects using ${name}. Utilized in real-world application building and technical operations.`,
        level: "Proficient",
        keyConcepts: ["Implementation & Integration", "Syntax & Application Architecture", "Debugging & Refactoring"],
        useCases: ["Portfolio Projects Integration", "Automated Workflows"]
      });
    }
  }, []);

  const closeSkill = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  // Determine Category-based style configurations
  const getCategoryTheme = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("cybersecurity") || cat.includes("security")) {
      return {
        icon: Shield,
        colorClass: "text-cyber-blue",
        bgColorClass: "bg-cyber-blue/10",
        borderClass: "border-cyber-blue/30 dark:border-cyber-blue/40",
        glowClass: "shadow-[0_0_30px_rgba(0,212,255,0.15)]",
        badgeClass: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20"
      };
    } else if (cat.includes("blockchain") || cat.includes("web3") || cat.includes("ethereum") || cat.includes("solidity")) {
      return {
        icon: Blocks,
        colorClass: "text-cyber-purple",
        bgColorClass: "bg-cyber-purple/10",
        borderClass: "border-cyber-purple/30 dark:border-cyber-purple/40",
        glowClass: "shadow-[0_0_30px_rgba(123,97,255,0.15)]",
        badgeClass: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20"
      };
    } else if (cat.includes("programming") || cat.includes("frontend") || cat.includes("react")) {
      return {
        icon: Code,
        colorClass: "text-cyber-green",
        bgColorClass: "bg-cyber-green/10",
        borderClass: "border-cyber-green/30 dark:border-cyber-green/40",
        glowClass: "shadow-[0_0_30px_rgba(0,255,179,0.15)]",
        badgeClass: "bg-cyber-green/10 text-cyber-green border-cyber-green/20"
      };
    } else if (cat.includes("soft skills") || cat.includes("brain")) {
      return {
        icon: Sparkles,
        colorClass: "text-amber-500",
        bgColorClass: "bg-amber-500/10",
        borderClass: "border-amber-500/30 dark:border-amber-500/40",
        glowClass: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
        badgeClass: "bg-amber-500/10 text-amber-500 border-amber-500/20"
      };
    } else if (cat.includes("hacking")) {
      return {
        icon: Terminal,
        colorClass: "text-red-500",
        bgColorClass: "bg-red-500/10",
        borderClass: "border-red-500/30 dark:border-red-500/40",
        glowClass: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
        badgeClass: "bg-red-500/10 text-red-500 border-red-500/20"
      };
    } else {
      return {
        icon: Wrench,
        colorClass: "text-foreground dark:text-white",
        bgColorClass: "bg-gray-200/50 dark:bg-gray-900/80",
        borderClass: "border-gray-300 dark:border-gray-800",
        glowClass: "shadow-2xl",
        badgeClass: "bg-gray-100 dark:bg-gray-900 text-gray-750 dark:text-gray-300 border-gray-200 dark:border-gray-800"
      };
    }
  };

  const theme = selectedSkill ? getCategoryTheme(selectedSkill.category) : null;
  const CategoryIcon = theme ? theme.icon : Code;

  return (
    <SkillModalContext.Provider value={{ showSkill, closeSkill }}>
      {children}

      <AnimatePresence>
        {selectedSkill && theme && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay / Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSkill}
              className="fixed inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className={`relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border ${theme.borderClass} ${theme.glowClass} overflow-hidden bg-white/40 dark:bg-cyber-card-dark/40 max-h-[90vh] flex flex-col`}
            >
              {/* Scanline overlay aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/5 to-transparent dark:via-white/5 pointer-events-none -z-10 animate-scanline" />
              
              {/* Giant background text for hacking grid aesthetic */}
              <div className="absolute -bottom-8 -right-8 text-7xl font-mono font-extrabold text-gray-500/5 dark:text-white/5 pointer-events-none select-none -z-10">
                SYS.LOG
              </div>

              {/* Close Button */}
              <button
                onClick={closeSkill}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-1.5 sm:p-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-250/50 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Body: Scrollable area to handle long content */}
              <div className="overflow-y-auto pr-1 -mr-1 custom-scrollbar space-y-5 sm:space-y-6">
                
                {/* Header Section */}
                <div className="flex items-start space-x-4 pr-8">
                  <div className={`p-3 sm:p-4 rounded-2xl ${theme.bgColorClass} ${theme.colorClass} shrink-0`}>
                    <CategoryIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-cyber-purple font-bold block mb-1 uppercase">
                      {selectedSkill.category}.exe
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl tracking-tight leading-none text-foreground dark:text-white">
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                {/* Level / Status Bar */}
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-100/50 dark:bg-black/40 border border-gray-200/50 dark:border-white/5">
                  <div className="flex items-center space-x-1.5 font-mono text-xs text-gray-500 dark:text-gray-400">
                    <span>STATUS:</span>
                    <span className={`font-bold px-2 py-0.5 rounded border ${theme.badgeClass}`}>
                      {selectedSkill.level}
                    </span>
                  </div>
                  <div className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
                  <div className="flex items-center space-x-1 font-mono text-[11px] text-cyber-green">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>LOADED_SUCCESSFULLY</span>
                  </div>
                </div>

                {/* Main Explanation */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold block">
                    Description & Overview
                  </span>
                  <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed font-medium">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Details Grid (Key Concepts & Use Cases) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Key Concepts */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold block">
                      Core Concepts
                    </span>
                    <ul className="space-y-2">
                      {selectedSkill.keyConcepts.map((concept, idx) => (
                        <li key={idx} className="flex items-start text-xs font-semibold text-gray-650 dark:text-gray-300 leading-tight">
                          <ChevronRight className="w-4 h-4 text-cyber-blue shrink-0 mr-1 mt-px" />
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold block">
                      Applications
                    </span>
                    <ul className="space-y-2">
                      {selectedSkill.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start text-xs font-semibold text-gray-650 dark:text-gray-300 leading-tight">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.colorClass} shrink-0 mr-2 mt-1.5`} />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer aesthetic */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-gray-500">
                  <span>ID: SEC_CORE_{selectedSkill.name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()}</span>
                  <span>LOAD_TIME: 12ms</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SkillModalContext.Provider>
  );
}

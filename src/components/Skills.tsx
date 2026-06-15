"use client";

import { Shield, Blocks, Code2, Wrench, ChevronRight, Brain } from "lucide-react";
import { useSkillModal } from "@/components/SkillModalProvider";

const SKILL_CATEGORIES = [
  {
    title: "Cybersecurity",
    icon: Shield,
    colorClass: "text-cyber-blue",
    glowClass: "group-hover:border-cyber-blue/40 hover:shadow-cyber-blue/15",
    description: "Offensive hacking methodologies, defensive audits, threat detection, and forensics.",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Vulnerability Analysis",
      "Threat Intelligence",
      "Incident Response",
      "Digital Forensics",
    ],
  },
  {
    title: "Blockchain & Web3",
    icon: Blocks,
    colorClass: "text-cyber-purple",
    glowClass: "group-hover:border-cyber-purple/40 hover:shadow-cyber-purple/15",
    description: "EVM Solidity smart contracts development, Web3 client wrappers, and cryptography.",
    skills: [
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "Web3.js",
      "DApps",
      "End-to-End Encryption",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    colorClass: "text-cyber-green",
    glowClass: "group-hover:border-cyber-green/40 hover:shadow-cyber-green/15",
    description: "Script automation, systems computing, memory safety, and stack data structures.",
    skills: ["C", "C++", "Python", "Java", "React", "HTML"],
  },
  {
    title: "Tools & DB",
    icon: Wrench,
    colorClass: "text-white",
    glowClass: "group-hover:border-white/20 hover:shadow-white/5",
    description: "Security kernels (Kali), packet analyzers (Wireshark), databases, and versioning.",
    skills: [
      "Git & GitHub",
      "Kali Linux (foundational)",
      "Wireshark (foundational)",
      "Tailwind CSS",
      "RDBMS",
      "SQL",
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    colorClass: "text-amber-500",
    glowClass: "group-hover:border-amber-500/40 hover:shadow-amber-500/15",
    description: "Analytical investigations, group collaboration, and keeping pace with exploit lists.",
    skills: [
      "Analytical Thinking",
      "Problem-Solving",
      "Time Management",
      "Team Collaboration",
      "Continuous Learning",
    ],
  },
];

export default function Skills() {
  const { showSkill } = useSkillModal();

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Dynamic glowing background circles */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-purple uppercase font-bold flex items-center justify-center gap-1.5">
            <Blocks className="w-4 h-4" /> SKILLS.sys
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical Competencies & Arsenal
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative flex flex-col h-full rounded-2xl border border-gray-200 bg-white/40 dark:border-gray-850 dark:bg-cyber-card-dark/40 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300 dark:hover:border-white/15 cursor-default overflow-hidden"
              >
                {/* Glow border overlay */}
                <div
                  className={`absolute inset-0 border border-transparent rounded-2xl transition-all duration-300 ${category.glowClass}`}
                />

                {/* Card Title Header */}
                <div className="flex items-center space-x-3 mb-4 relative">
                  <div
                    className={`p-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 ${category.colorClass}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg leading-tight">{category.title}</h3>
                </div>

                {/* Description Text */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 relative leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="flex flex-col space-y-2.5 mt-auto relative">
                  {category.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => showSkill(skill)}
                      className="flex items-center text-sm text-gray-650 dark:text-gray-300 font-medium group/item hover:text-cyber-blue transition-colors duration-150 cursor-pointer text-left w-full focus:outline-none"
                    >
                      <ChevronRight className="w-4 h-4 text-cyber-blue mr-1.5 transition-transform duration-200 group-hover/item:translate-x-1" />
                      <span>{skill}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


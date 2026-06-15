"use client";

import { ShieldAlert, Database, Award, BookOpen, User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-blue uppercase font-bold flex items-center justify-center gap-1.5">
            <User className="w-4 h-4" /> ABOUT_ME.sh
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Background & Core Passion
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hacker Terminal Left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="glass-panel rounded-2xl shadow-xl border border-white/10 dark:border-white/5 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-200/60 dark:bg-black/80 px-4 py-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                  guest@shehzibah-core: ~
                </span>
                <div className="w-10" />
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm space-y-4 bg-gray-900/5 dark:bg-black/60 min-h-[300px] text-foreground dark:text-gray-300 leading-relaxed">
                <div>
                  <span className="text-cyber-green">guest@shehzibah:~$</span>{" "}
                  <span className="text-foreground">cat profile.json</span>
                </div>
                <div className="text-cyber-purple dark:text-cyber-purple/90 pl-4">
                  {`{`}
                  <div className="pl-4">
                    <span className="text-cyber-blue">"name"</span>: "Shehzibah Ashraf",
                    <br />
                    <span className="text-cyber-blue">"education"</span>: "B.Sc. Information Technology (2023 - 2026)",
                    <br />
                    <span className="text-cyber-blue">"location"</span>: "Thrissur, Kerala, India",
                    <br />
                    <span className="text-cyber-blue">"email"</span>: "shahzibahashraf627@gmail.com",
                    <br />
                    <span className="text-cyber-blue">"linkedin"</span>: "linkedin.com/in/shehzibah-7a951a32a",
                    <br />
                    <span className="text-cyber-blue">"github"</span>: "github.com/biommo01",
                    <br />
                    <span className="text-cyber-blue">"availableForHire"</span>: true
                  </div>
                  {`}`}
                </div>
                <div className="pt-2">
                  <span className="text-cyber-green">guest@shehzibah:~$</span>{" "}
                  <span className="text-foreground animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text Right */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold tracking-tight">
              Bridging Secure Infrastructures and Decentralized Innovation
            </h3>
            
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Motivated IT graduate with a B.Sc. in Information Technology and certified training in Ethical Hacking and Cyber Security. Developed a decentralized blockchain voting platform on Ethereum using smart contracts, Web3.js, and end-to-end encryption. Proficient in C, C++, Python, and Java with a solid foundation in network security, vulnerability analysis, penetration testing, threat intelligence, and incident response. Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or IT Security role to apply hands-on technical skills in a forward-thinking organization.
            </p>

            {/* Fact cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/20 dark:bg-white/5 flex items-start space-x-3.5 hover:border-cyber-blue/30 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-cyber-blue/10 text-cyber-blue">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Security-First Focus</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Continuous exploration in penetration testing, threat hunting, and network security.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/20 dark:bg-white/5 flex items-start space-x-3.5 hover:border-cyber-purple/30 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-cyber-purple/10 text-cyber-purple">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Decentralized Systems</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Solidity writing and deployment of secure, end-to-end encrypted smart contracts on Ethereum.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/20 dark:bg-white/5 flex items-start space-x-3.5 hover:border-cyber-green/30 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-cyber-green/10 text-cyber-green">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Certified Professional</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Hands-on masterclass completions in cybersecurity and advanced ethical hacking.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/20 dark:bg-white/5 flex items-start space-x-3.5 hover:border-cyber-blue/30 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-cyber-blue/10 text-cyber-blue">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Academic Rigor</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    IT major with coursework in Cryptography, Operating Systems, and DSA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

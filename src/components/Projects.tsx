"use client";

import { useState } from "react";
import { ExternalLink, ShieldCheck, CheckCircle2, Lock, Key, Award, Code } from "lucide-react";
import { useSkillModal } from "@/components/SkillModalProvider";

const GithubIcon = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const { showSkill } = useSkillModal();
  // Mock interactive ballot state for the live mockup
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [isVoted, setIsVoted] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const candidates = [
    { id: "1", name: "Candidate Alpha (SecOps Proposal)", votes: 142 },
    { id: "2", name: "Candidate Beta (Web3 Infrastructure)", votes: 98 },
  ];

  const handleVote = (name: string) => {
    setSelectedCandidate(name);
    // Simulate smart contract transaction delay
    setTimeout(() => {
      setIsVoted(true);
      setTxHash("0x7e2b...8a9c");
    }, 1200);
  };

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-blue uppercase font-bold flex items-center justify-center gap-1.5">
            <Code className="w-4 h-4" /> PROJECTS.dapp
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Innovation
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto rounded-full" />
        </div>

        {/* Feature Project Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyber-green/20 bg-cyber-green/5 text-cyber-green text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-glow-green" />
              <span>Smart Contract Verified</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Blockchain-Based Voting Platform
            </h3>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              A decentralized voting application built on Ethereum blockchain using Solidity smart contracts and Web3.js integration. Designed to ensure transparency, security, voter anonymity, and tamper-proof election processes.
            </p>

            {/* Feature lists */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Decentralized P2P Infrastructure</h4>
                  <p className="text-xs text-gray-500">Eliminates single points of failure and ensures full election transparency on the Ethereum network.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Immutable Solidity Smart Contracts</h4>
                  <p className="text-xs text-gray-500">Autonomous execution of voting logic for secure, tamper-proof ballot recording.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Cryptographic End-to-End Encryption</h4>
                  <p className="text-xs text-gray-500">Guarantees complete voter anonymity and protects the integrity of stored ballot data.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Web3.js Backend Integration</h4>
                  <p className="text-xs text-gray-500">Seamlessly connects client-side users to active EVM networks for real-time cryptographic audit checks.</p>
                </div>
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Solidity", "Web3.js", "Ethereum", "React", "Tailwind CSS", "Cryptography"].map((tech) => (
                <button
                  key={tech}
                  onClick={() => showSkill(tech)}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-gray-100 text-gray-700 border border-gray-200/50 dark:bg-gray-900/50 dark:text-gray-300 dark:border-gray-800 hover:text-cyber-blue hover:border-cyber-blue/30 cursor-pointer transition-colors duration-150 focus:outline-none"
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/bloom001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                GitHub Repository
              </a>
              <button
                onClick={() => {
                  setSelectedCandidate(null);
                  setIsVoted(false);
                  setTxHash(null);
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-gray-200 bg-white/40 text-foreground hover:bg-gray-100 dark:border-gray-800 dark:bg-black/20 dark:hover:bg-gray-950 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 mr-2 text-cyber-blue" />
                Reset Demo View
              </button>
            </div>
          </div>

          {/* Interactive UI Mockup Right */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 shadow-2xl border border-white/10 dark:border-white/5 relative overflow-hidden bg-white/30 dark:bg-black/50">
              {/* Window UI bars */}
              <div className="flex items-center justify-between border-b border-gray-250 dark:border-gray-800/80 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-gray-500 ml-2">secure_dapp_session://</span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-cyber-green font-mono bg-cyber-green/10 px-2 py-0.5 rounded border border-cyber-green/25">
                  <Lock className="w-3 h-3" />
                  <span>SSL/EVM Connected</span>
                </div>
              </div>

              {/* DApp Console Screen */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-base">Municipal Election Core DApp</h4>
                  <p className="text-xs text-gray-500">Sign with MetaMask to register selection hash.</p>
                </div>

                {!isVoted ? (
                  <div className="space-y-3">
                    {candidates.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleVote(c.name)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          selectedCandidate === c.name
                            ? "bg-cyber-blue/10 border-cyber-blue/50 ring-1 ring-cyber-blue/30"
                            : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-white/20 dark:bg-black/20"
                        }`}
                        disabled={selectedCandidate !== null}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{c.name}</span>
                          <span className="text-xs text-gray-500">Audit votes: {c.votes}</span>
                        </div>
                      </button>
                    ))}
                    {selectedCandidate && (
                      <div className="flex items-center justify-center py-4 space-x-2">
                        <div className="w-4 h-4 rounded-full border-2 border-cyber-blue border-t-transparent animate-spin" />
                        <span className="text-xs font-mono text-cyber-blue">
                          Generating proof & signing hash...
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 rounded-xl border border-cyber-green/20 bg-cyber-green/5 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="flex items-center space-x-2.5 text-cyber-green">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold text-sm">Vote cryptographic sign successful</span>
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Your vote has been securely recorded on the Ethereum blockchain under the selected block index. Your anonymity hash is preserved.
                    </p>

                    <div className="p-3 bg-black/40 rounded border border-white/5 font-mono text-[10px] space-y-1 text-gray-400">
                      <div className="flex justify-between">
                        <span>NETWORK:</span>
                        <span className="text-cyber-blue">Ethereum Sepolia</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SELECTION HASH:</span>
                        <span className="text-white truncate max-w-[150px]">
                          {selectedCandidate === candidates[0].name ? "0xfa82c2...b38e" : "0xc982e0...81ff"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>TRANSACTION_HASH:</span>
                        <span className="text-cyber-green">{txHash}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Foot indicators */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span className="flex items-center">
                    <Key className="w-3.5 h-3.5 text-cyber-purple mr-1" /> ECDSA Secp256k1
                  </span>
                  <span>Gas cost: 21,342 gwei</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

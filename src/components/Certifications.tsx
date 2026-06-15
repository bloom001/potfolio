"use client";

import { Award, ShieldAlert, Cpu, Calendar, ShieldCheck, Check } from "lucide-react";
import { useSkillModal } from "@/components/SkillModalProvider";

const CERTIFICATES = [
  {
    title: "Ethical Hacking Masterclass",
    issuer: "Edureka (Cyber Security Internship Program)",
    date: "Jun 2025",
    icon: ShieldAlert,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "hover:border-cyber-blue/30",
    shadowColor: "hover:shadow-cyber-blue/10",
    skills: ["Network Auditing", "Penetration Testing", "Security Assessment", "Vulnerability Exploitation"],
    meta: "Online",
  },
  {
    title: "Cyber Security Course Completion Certificate",
    issuer: "Elewayte",
    date: "Jun 2024 – Jul 2024",
    icon: Cpu,
    color: "text-cyber-green",
    bgColor: "bg-cyber-green/10",
    borderColor: "hover:border-cyber-green/30",
    shadowColor: "hover:shadow-cyber-green/10",
    skills: ["SOC Operations", "Threat Intelligence", "Incident Analysis", "Defensive Security Controls"],
    meta: "Cert No: CC620241286",
  },
];

export default function Certifications() {
  const { showSkill } = useSkillModal();
  return (
    <section
      id="certifications"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Glow shapes */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-blue uppercase font-bold flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4" /> CREDENTIALS.key
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Professional Certifications
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto rounded-full" />
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATES.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`glass-panel p-6 rounded-2xl border border-gray-200 bg-white/40 dark:border-gray-850 dark:bg-cyber-card-dark/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${cert.borderColor} ${cert.shadowColor} flex flex-col justify-between`}
              >
                <div>
                  {/* Issuer and Icon Header */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200/50 dark:border-gray-800/50">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl ${cert.bgColor} ${cert.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-snug">{cert.title}</h3>
                        <p className="text-sm text-gray-500 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1.5 text-xs text-cyber-blue font-mono">
                      <ShieldCheck className="w-4 h-4 text-cyber-blue" />
                      <span className="font-bold uppercase tracking-wider">Secured</span>
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold block">
                      Verified Skill Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => showSkill(skill)}
                          className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200/40 dark:border-gray-800/40 text-xs font-semibold text-gray-650 dark:text-gray-300 hover:text-cyber-blue hover:border-cyber-blue/30 transition-colors duration-150 cursor-pointer focus:outline-none"
                        >
                          <Check className="w-3 h-3 text-cyber-blue mr-0.5" />
                          <span>{skill}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-400 font-mono mt-4 pt-4 border-t border-gray-200/30 dark:border-gray-855">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date} | {cert.meta}</span>
                  </div>
                  <span className="text-cyber-green text-glow-green font-bold shrink-0">SHA-256 Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

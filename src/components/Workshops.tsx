"use client";

import { Calendar, GitCommit, ShieldAlert, Cpu, Laptop, Bot, Code, Settings } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    title: "Data Structures: Stack and Queue",
    description: "Hands-on implementation of abstract data types, memory structures, and linear data manipulation algorithms.",
    icon: Code,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    glow: "shadow-cyber-blue/20",
    tag: "Elewayte",
    date: "Apr 2026",
  },
  {
    title: "Inside the Mind of a Hacker",
    description: "Offensive security seminar exploring hacker methodologies, penetration scanning, and defensive countermeasures. ID: 14052023WB3995",
    icon: ShieldAlert,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    glow: "shadow-red-500/20",
    tag: "Elewayte / Kavin Kumar",
    date: "Oct 2025",
  },
  {
    title: "Future of System Integration with MuleSoft",
    description: "Study of ESB architectures, microservices API design, and system endpoints integration led by Robin Sinha.",
    icon: Cpu,
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    glow: "shadow-cyber-purple/20",
    tag: "Elewayte / MuleSoft",
    date: "Aug 2024",
  },
  {
    title: "Master the Art of Website Creation",
    description: "Comprehensive front-end engineering design program focusing on responsive interfaces and modern semantic layout architectures.",
    icon: Laptop,
    color: "text-cyber-green",
    bgColor: "bg-cyber-green/10",
    glow: "shadow-cyber-green/20",
    tag: "Elewayte",
    date: "Jul 2024",
  },
  {
    title: "Robotics and App Development Workshop",
    description: "Practical integration of microcontroller IoT systems and building mobile application controller dashboards.",
    icon: Bot,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    glow: "shadow-amber-500/20",
    tag: "Bonic Education",
    date: "Oct 2023",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Background glow shape */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-20">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-blue uppercase font-bold flex items-center justify-center gap-1.5">
            <Settings className="w-4 h-4 animate-spin-slow" /> TIMELINE.log
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Workshops & Learning Milestones
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto timeline-line">
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={event.title}
                  className={`flex flex-col md:flex-row items-stretch gap-6 relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Anchor Point Dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-4 -translate-x-[9.5px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-8 h-8 rounded-full bg-background border border-gray-250 dark:border-gray-800 flex items-center justify-center animate-ping opacity-25" />
                      <div className="w-5 h-5 rounded-full bg-background border-2 border-cyber-purple flex items-center justify-center shadow-md">
                        <GitCommit className="w-3.5 h-3.5 text-cyber-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Left Content Placeholder for spacing in desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Right Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-panel p-6 rounded-2xl border border-gray-200 bg-white/40 dark:border-gray-850 dark:bg-cyber-card-dark/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group">
                      {/* Small side line indicator */}
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyber-purple to-cyber-blue opacity-50 group-hover:opacity-100 transition-opacity" />

                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-xl ${event.bgColor} ${event.color} shrink-0`}>
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-base md:text-lg tracking-tight leading-snug group-hover:text-cyber-blue transition-colors">
                              {event.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Footer Badge */}
                      <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                        <span className="px-2.5 py-1 rounded bg-gray-105 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800 text-[10px] font-semibold text-gray-650 dark:text-gray-400">
                          {event.tag}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-cyber-purple">
                          <Calendar className="w-3.5 h-3.5 text-cyber-blue" />
                          {event.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

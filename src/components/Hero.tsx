"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Code, Mail, Shield, Cpu, Lock } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("");
  const roles = [
    "IT Graduate",
    "Cybersecurity & Blockchain Enthusiast",
    "Ethical Hacking Enthusiast",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect hook
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait 2s at the end
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        setTypingSpeed(50);

        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Small pause before next word
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, typingSpeed]);

  // Blockchain/Network canvas hook
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = 450);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 500;
      height = canvas.height = 450;
    };
    window.addEventListener("resize", handleResize);

    // Nodes definition
    const nodeCount = 35;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
    }[] = [];

    const colors = ["#00D4FF", "#7B61FF", "#00FFB3"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 4 + 2,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Attract node to mouse slightly if close
        if (mouse.x > 0 && mouse.y > 0) {
          const dxMouse = mouse.x - n1.x;
          const dyMouse = mouse.y - n1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 180) {
            n1.x += dxMouse * 0.03;
            n1.y += dyMouse * 0.03;
          }
        }

        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce boundaries
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.25;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 212, 255, ${alpha})`
              : `rgba(123, 97, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? n1.baseColor : "rgba(123, 97, 255, 0.85)";
        ctx.shadowColor = n1.baseColor;
        ctx.shadowBlur = isDark ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }

      // Draw mouse node pointer lines
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#00FFB3";
        ctx.shadowColor = "#00FFB3";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.35;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(0, 255, 179, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-screen pt-28 pb-16 flex items-center justify-center overflow-hidden transition-colors duration-300"
    >
      {/* Glow shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[100px] pointer-events-none -z-10 dark:bg-cyber-blue/5" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[100px] pointer-events-none -z-10 dark:bg-cyber-purple/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Bio Left */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue w-fit">
              <Shield className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-mono tracking-widest font-semibold uppercase">
                Systems Secure & Verification Active
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green bg-clip-text text-transparent">
                  Shehzibah Ashraf
                </span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl font-mono font-semibold text-foreground/80 dark:text-gray-200">
                  &gt; {typedText}
                  <span className="animate-pulse text-cyber-blue">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              "Building Secure Digital Solutions Through Cybersecurity and Blockchain Innovation."
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("projects");
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-medium shadow-lg hover:shadow-cyber-purple/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("contact");
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-gray-200 bg-white/50 text-foreground hover:bg-gray-50 dark:border-gray-800 dark:bg-black/30 dark:hover:bg-gray-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2 text-cyber-blue" />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue hover:bg-cyber-blue/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>

            {/* Micro details */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 max-w-md">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyber-blue font-mono">Web3</span>
                <span className="text-xs text-gray-500">Developer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyber-purple font-mono">SOC</span>
                <span className="text-xs text-gray-500">Enthusiast</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyber-green font-mono">IT</span>
                <span className="text-xs text-gray-500">Graduate</span>
              </div>
            </div>
          </div>

          {/* Interactive Network Graphic Right */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/10 to-cyber-purple/10 rounded-3xl blur-2xl -z-10 dark:from-cyber-blue/5 dark:to-cyber-purple/5" />
            <div className="glass-panel rounded-3xl p-4 w-full shadow-2xl relative overflow-hidden border border-white/10 dark:border-white/5">
              {/* Graphic stats indicators */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="absolute top-4 right-6 font-mono text-[10px] text-gray-500 flex items-center space-x-1">
                <Cpu className="w-3 h-3 animate-spin text-cyber-blue" />
                <span>GRID_STABILITY: 99.8%</span>
              </div>

              <canvas
                ref={canvasRef}
                className="w-full h-[450px] cursor-crosshair rounded-2xl bg-black/5 dark:bg-black/40"
              />

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-gray-500">
                <span className="flex items-center">
                  <Lock className="w-3 h-3 text-cyber-green mr-1" /> SECURE LEDGER
                </span>
                <span>SHA-256 / Web3.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

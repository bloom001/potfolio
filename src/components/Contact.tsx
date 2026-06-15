"use client";

import { useState } from "react";
import { Mail, Phone, Send, MessageSquare, ShieldCheck, AlertCircle } from "lucide-react";

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

const LinkedinIcon = ({ className, ...props }: React.ComponentProps<"svg">) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple validations
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus("error");
      setErrorMessage("Please specify a subject.");
      return;
    }
    if (formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Message must be at least 10 characters long.");
      return;
    }

    setStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactsInfo = [
    {
      label: "Email Address",
      value: "shahzibahashraf627@gmail.com",
      href: "mailto:shahzibahashraf627@gmail.com",
      icon: Mail,
      color: "text-cyber-blue",
      bgColor: "bg-cyber-blue/10",
    },
    {
      label: "Phone / Contact",
      value: "+91 8139802404",
      href: "tel:+918139802404",
      icon: Phone,
      color: "text-cyber-green",
      bgColor: "bg-cyber-green/10",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shehzibah-7a951a32a",
      icon: LinkedinIcon,
      hoverColor: "hover:text-cyber-blue hover:border-cyber-blue/30 dark:hover:bg-cyber-blue/10",
    },
    {
      name: "GitHub",
      href: "https://github.com/biommo01",
      icon: GithubIcon,
      hoverColor: "hover:text-cyber-purple hover:border-cyber-purple/30 dark:hover:bg-cyber-purple/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden border-t border-gray-200/30 dark:border-gray-800/20"
    >
      {/* Background glow shape */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-cyber-blue uppercase font-bold flex items-center justify-center gap-1.5">
            <MessageSquare className="w-4 h-4" /> SECURE_COMMS.io
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect & Initiate Contact
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Recruiter & Internship Communications
              </h3>
              <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed">
                If you are a SOC Lead, Cybersecurity Recruiter, or Blockchain Project manager looking for a motivated and detail-oriented technical associate, feel free to drop a message or reach out through social handles.
              </p>

              {/* Direct Details */}
              <div className="space-y-4">
                {contactsInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200/50 bg-white/30 dark:border-gray-850 dark:bg-black/20 hover:border-cyber-blue/30 transition-all duration-300 group"
                    >
                      <div className={`p-2.5 rounded-lg ${info.bgColor} ${info.color}`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase font-semibold block">
                          {info.label}
                        </span>
                        <span className="text-sm font-bold text-foreground group-hover:text-cyber-blue transition-colors">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Icons */}
            <div className="space-y-3 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
              <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold block">
                External Directories
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-gray-250 bg-white dark:border-gray-800 dark:bg-black/40 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${social.hoverColor}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Panel Right */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 dark:border-white/5 bg-white/30 dark:bg-black/45 shadow-2xl relative">
              <div className="absolute top-4 right-6 font-mono text-[9px] text-gray-500">
                COMMS_CHANNEL_SSL_ON
              </div>

              {status === "success" ? (
                <div className="text-center py-16 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-green/10 text-cyber-green mb-2">
                    <ShieldCheck className="w-9 h-9 text-glow-green" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Message Dispatched Securely</h4>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    The encrypted transmission succeeded. Thank you, Shehzibah will review the logs and reply shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2.5 rounded-xl border border-gray-250 bg-white text-xs font-semibold hover:bg-gray-50 dark:border-gray-800 dark:bg-black/20 dark:hover:bg-black/50 transition-all duration-200 cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="flex items-center space-x-2.5 p-3.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-500 text-xs">
                      <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-gray-500 dark:text-gray-400 font-bold uppercase">
                        Voter / Recruiter Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 outline-none text-sm bg-white/50 dark:bg-black/30 text-foreground transition-all duration-200"
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-gray-500 dark:text-gray-400 font-bold uppercase">
                        Secure Email Target
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@agency.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 outline-none text-sm bg-white/50 dark:bg-black/30 text-foreground transition-all duration-200"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-gray-500 dark:text-gray-400 font-bold uppercase">
                      Transmission Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Opportunity: SOC Analyst / Blockchain Dev"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 outline-none text-sm bg-white/50 dark:bg-black/30 text-foreground transition-all duration-200"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-gray-500 dark:text-gray-400 font-bold uppercase">
                      Payload Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter communication payload..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 outline-none text-sm bg-white/50 dark:bg-black/30 text-foreground transition-all duration-200 resize-none"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-green text-white font-semibold shadow-lg hover:shadow-cyber-blue/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin mr-2" />
                        Encrypting Comms Link...
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5 mr-2" />
                        Dispatch Payload
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

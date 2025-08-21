import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, ExternalLink, Phone, Code2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ---- Quick helpers ----
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <motion.h2
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 flex items-center gap-3"
    >
      <span className="h-9 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
      {title}
    </motion.h2>
    {children}
  </section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-800 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/40 dark:border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-lg tracking-tight">
            Shubham<span className="text-indigo-600">.dev</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium hover:text-indigo-600 transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
            >
              <Mail className="size-4" /> Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fade} initial="hidden" animate="show" className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-600" /> Available for Internships & SDE Roles
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight">
              Hi, I'm Shubham Kumar Singh
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Computer Science & Engineering (Batch 2022–2026) at Dhanalakshmi Srinivasan College of Engineering & Technology.
              Passionate about Java, Python, Web Development, and building useful tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#projects" className="inline-flex items-center gap-2">
                  <Code2 className="size-4" /> View Projects
                </a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="/Shubham_Kumar_Singh_Resume.pdf" download className="inline-flex items-center gap-2">
                  <Download className="size-4" /> Download Resume
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> Chennai, India</span>
              <a href="mailto:sibusubhamsingh@gmail.com" className="inline-flex items-center gap-2 hover:text-indigo-600">
                <Mail className="size-4" /> sibusubhamsingh@gmail.com
              </a>
              <a href="tel:+919097865254" className="inline-flex items-center gap-2 hover:text-indigo-600">
                <Phone className="size-4" /> +91 90978 65254
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/singh12shubham" target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:shadow">
                <Github className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/shubham-singh-8826952a9" target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:shadow">
                <Linkedin className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-violet-600 p-1 shadow-2xl">
              <div className="h-full w-full rounded-3xl bg-white/90 dark:bg-slate-950/80 backdrop-blur p-2 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop"
                  alt="Coding desk"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6 leading-relaxed text-slate-700 dark:text-slate-300">
              I'm a CSE undergrad who enjoys building practical software. I have hands‑on projects in NLP and full‑stack web apps. I love learning by shipping.
              Currently focusing on Java (OOPs + DSA) and modern web development.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-3 text-slate-700 dark:text-slate-300">
              <p className="font-semibold">What I bring</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
                <li>Clean, readable code</li>
                <li>Ownership & fast learning</li>
                <li>Strong fundamentals</li>
                <li>Team communication</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: "Java", desc: "OOPs, DSA, console apps" },
            { name: "Python", desc: "NLP, scripts, automation" },
            { name: "Web", desc: "HTML, CSS, JS, React" },
            { name: "Tools", desc: "Git/GitHub, Linux basics" },
          ].map((s) => (
            <Card key={s.name} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Code2 className="size-5" /> {s.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <Card className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1400&auto=format&fit=crop"
              alt="Spam detection"
              className="w-full h-44 object-cover"
            />
            <CardHeader>
              <CardTitle>Spam Email Detection (NLP)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>Built with Python & scikit‑learn. Trained a classifier to detect spam vs. ham; deployed a simple Streamlit app for demos.</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Python','scikit‑learn','NLP','Streamlit'].map(t => (
                  <span key={t} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/singh12shubham"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  <Github className="size-4" /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  <ExternalLink className="size-4" /> Live demo
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop"
              alt="Bank system"
              className="w-full h-44 object-cover"
            />
            <CardHeader>
              <CardTitle>Bank Management System (Java)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>Console‑based OOP project: accounts, transactions, and admin controls with custom exceptions and validations.</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Java','OOPs','Exceptions','CLI'].map(t => (
                  <span key={t} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/singh12shubham"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  <Github className="size-4" /> Code
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5" /> B.E., Computer Science & Engineering
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-700 dark:text-slate-300">
              <p><span className="font-medium">Dhanalakshmi Srinivasan College of Engineering & Technology,</span> Mamallapuram</p>
              <p>Batch: 2022–2026 • CGPA: 7.9</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5" /> Senior Secondary & Matriculation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-700 dark:text-slate-300">
              <p>12th: Ibrahim Memorial High School (BSEB) – 62% (2022)</p>
              <p>10th: Ibrahim Memorial High School (BSEB) – 60% (2020)</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl lg:col-span-2">
            <CardContent className="p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const name = data.get('name');
                  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                  const body = encodeURIComponent(
                    `Hi Shubham,\n\n` +
                    `I found your portfolio and would like to connect.\n\n` +
                    `— Sent from the contact form.`
                  );
                  window.location.href = `mailto:sibusubhamsingh@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <input name="name" required placeholder="Your name" className="rounded-2xl border p-3 bg-white/60 dark:bg-slate-900/60" />
                <input name="email" type="email" required placeholder="Your email" className="rounded-2xl border p-3 bg-white/60 dark:bg-slate-900/60" />
                <textarea name="message" placeholder="Your message" className="sm:col-span-2 h-32 rounded-2xl border p-3 bg-white/60 dark:bg-slate-900/60" />
                <Button type="submit" className="sm:col-span-2 rounded-2xl">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <a href="mailto:sibusubhamsingh@gmail.com" className="flex items-center gap-3 hover:text-indigo-600">
                <Mail className="size-5" /> sibusubhamsingh@gmail.com
              </a>
              <a href="tel:+919097865254" className="flex items-center gap-3 hover:text-indigo-600">
                <Phone className="size-5" /> +91 90978 65254
              </a>
              <a href="https://github.com/singh12shubham" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-indigo-600">
                <Github className="size-5" /> github.com/singh12shubham
              </a>
              <a href="https://www.linkedin.com/in/shubham-singh-8826952a9" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-indigo-600">
                <Linkedin className="size-5" /> LinkedIn Profile
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200/40 dark:border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Shubham Kumar Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:underline">Back to top</a>
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="px-3 py-1.5 rounded-xl border shadow-sm text-xs"
            >
              Toggle Dark Mode
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Folder,
  GraduationCap,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  FileDown,
  Database,
  Award,
  CheckCircle2,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Palesa Rose Koapeng | Public Management & Data Specialist" },
      {
        name: "description",
        content:
          "Diploma in Public Management graduate with expertise in field data collection, institutional record management, and educational support systems.",
      },
      {
        property: "og:title",
        content: "Palesa Rose Koapeng | Public Management & Data Specialist",
      },
      {
        property: "og:description",
        content:
          "Diploma in Public Management graduate with expertise in field data collection, institutional record management, and educational support systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Census & Demographic Data Capture System",
      description:
        "Designed a standardized digital survey framework to streamline high-volume field data collection, reducing data entry errors and accelerating processing time.",
      tags: ["Data Collection", "MS Excel", "Electronic Data Capture", "Data Validation"],
      link: "#",
    },
    {
      title: "Educational Progress Tracking Portal",
      description:
        "Developed a centralized record-keeping system for academic monitoring, enabling tutors to track student milestones, attendance, and performance metrics.",
      tags: ["Record Management", "Reporting", "Academic Analytics", "MS Access"],
      link: "#",
    },
    {
      title: "Public Sector Digital Archiving Hub",
      description:
        "Created a modern administrative filing and retrieval structure to transition legacy paper records into organized, searchable digital assets.",
      tags: ["Public Administration", "Process Optimization", "Digital Archival"],
      link: "#",
    },
  ];

  const experience = [
    {
      role: "Field Data Collector",
      organization: "Statistics South Africa",
      period: "Recent",
      points: [
        "Administered field surveys using Electronic Data Capture tools to collect reliable demographic data.",
        "Ensured rigorous data quality, confidentiality, and compliance with statutory standards.",
        "Managed daily submission logs and resolved data discrepancies in real time.",
      ],
    },
    {
      role: "Curriculum Assistant",
      organization: "Department of Education",
      period: "Previous",
      points: [
        "Provided administrative support for educational programs and curriculum delivery.",
        "Organized learning materials, scheduled academic sessions, and maintained teacher-student records.",
        "Assisted in monitoring program effectiveness across participating centers.",
      ],
    },
    {
      role: "Academic Tutor",
      organization: "Matlohogonolo Outreach Centre",
      period: "Previous",
      points: [
        "Delivered targeted academic support and learning guidance to primary/secondary students.",
        "Maintained detailed progress tracking to evaluate individual learning gaps.",
        "Fostered an engaging, structured, and supportive learning environment.",
      ],
    },
  ];

  const skills = {
    technical: [
      "Electronic Data Capture",
      "MS Office (Excel, Word, Access)",
      "Data Collection & Cleaning",
      "Record Management",
      "Database Administration",
    ],
    administrative: [
      "Public Sector Governance",
      "Curriculum Support",
      "Academic Tutoring",
      "Process Optimization",
      "Quality Assurance",
    ],
  };

  const education = [
    {
      degree: "Diploma in Public Management",
      institution: "University of South Africa",
      period: "Completed",
      description:
        "Focused on public sector governance, administrative processes, financial management, and public policy execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-sky-400">Palesa Rose Koapeng</span>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-sky-400 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-sky-400 transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-sky-400 transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-sky-400 transition-colors">
                Projects
              </a>
              <a href="#education" className="hover:text-sky-400 transition-colors">
                Education
              </a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400 hover:text-white"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 px-4 pt-2 pb-4 space-y-2">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-sky-400">
              About
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-sky-400">
              Skills
            </a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-sky-400">
              Experience
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-sky-400">
              Projects
            </a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-sky-400">
              Education
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-sky-400">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-semibold">
              Public Management & Data Specialist
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Palesa Rose Koapeng
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-400">
              Optimizing Public Sector Data & Administrative Operations
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Diploma in Public Management graduate with expertise in field data collection, institutional record
              management, and educational support systems. Dedicated to driving operational efficiency through modern
              data tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-sky-500/20"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download="Palesa_Koapeng_CV.pdf"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <FileDown size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-sky-400" /> About Me
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            I hold a <strong>Diploma in Public Management</strong>, equipped with hands-on experience in public
            administration, statistical field data collection, and academic assistance. Having worked with organizations
            like <strong>Statistics South Africa</strong> and the <strong>Department of Education</strong>, I bridge
            administrative execution with data capture standards to support decision-making in public and social
            initiatives.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Database className="text-sky-400" /> Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Technical & Data Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-md text-sm flex items-center gap-2"
                >
                  <CheckCircle2 size={14} className="text-sky-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Administrative & Operations</h3>
            <div className="flex flex-wrap gap-2">
              {skills.administrative.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-md text-sm flex items-center gap-2"
                >
                  <CheckCircle2 size={14} className="text-sky-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Briefcase className="text-sky-400" /> Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-sky-400">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Folder className="text-sky-400" /> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs px-2.5 py-1 bg-slate-800 text-sky-400 rounded-md border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm text-sky-400 hover:underline">
                  View Case Study <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-16 bg-slate-800/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <GraduationCap className="text-sky-400" /> Education & Qualifications
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-sky-400">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Mail className="text-sky-400" /> Let's Connect
        </h2>
        <div className="bg-slate-800/40 p-8 rounded-xl border border-slate-800 max-w-2xl">
          <p className="text-slate-300 leading-relaxed mb-6">
            I am actively seeking internship and full-time opportunities in Public Administration, Data Management, and
            Administrative Support.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 hover:border-sky-400 rounded-lg text-slate-200 transition-colors"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 hover:border-sky-400 rounded-lg text-slate-200 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 hover:border-sky-400 rounded-lg text-slate-200 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Palesa Rose Koapeng. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

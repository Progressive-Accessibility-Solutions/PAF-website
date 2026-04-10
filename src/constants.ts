import { FileText, Monitor, Cpu, Wrench, Users } from "lucide-react";

export const members = [
  {
    name: "Prof. Volker Sorge",
    role: "Managing Director",
    bio: "A leading figure in document analysis and accessibility, Prof. Sorge holds the Chair in Document Analysis & Accessibility at the University of Birmingham and serves as Managing Director of Progressive Accessibility Solutions Ltd., UK. His semantic analysis work has shaped tools like MathJax, EquatIO, and Google's accessibility technologies. His collaboration with Google led to the first-ever text-to-speech translation of mathematics in a general screen reader.",
  },
  {
    name: "Neha Jadhav",
    role: "Director",
    bio: "Neha works extensively on digitizing academic textbooks with a focus on making complex STEM subjects fully accessible. Her work includes transforming printed books into screen-reader-compatible formats, converting mathematical expressions into semantic LaTeX with MathJax, and developing accessible diagrams using structured SVG and assistive-technology-friendly design methods.",
  },
];

export const services = [
  { icon: FileText, title: "Educational Content Digitization", desc: "Transforming textbooks and learning materials into accessible formats, including complex mathematical expressions, scientific notation, and diagrams." },
  { icon: Monitor, title: "Content Remediation", desc: "Converting digital and print content into formats meeting accessibility standards — transcription, captioning, audio description, sign language, Braille, and tactile formats." },
  { icon: Cpu, title: "Research & Innovation", desc: "Advancing accessible communication through AI and emerging technologies for complex STEM content accessibility." },
  { icon: Wrench, title: "Assistive Technology Development", desc: "Designing and deploying tools and software systems for accessible content conversion, diagram accessibility, and mathematical notation." },
  { icon: Users, title: "User Research", desc: "Conducting needs assessments involving persons with disabilities to improve tools, workflows, and standards for accessible digitization." },
];

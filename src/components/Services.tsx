import { FileText, Monitor, Search, Cpu, Wrench, Users, GraduationCap, Handshake } from "lucide-react";

const services = [
  { icon: FileText, title: "Educational Content Digitization", desc: "Transforming textbooks and learning materials into accessible formats, including complex mathematical expressions, scientific notation, and diagrams." },
  { icon: Monitor, title: "Content Remediation", desc: "Converting digital and print content into formats meeting accessibility standards — transcription, captioning, audio description, sign language, Braille, and tactile formats." },
  { icon: Search, title: "Accessibility Audits", desc: "Comprehensive evaluation of digital platforms, documents, and learning resources with remediation strategies to ensure full accessibility compliance." },
  { icon: Cpu, title: "Research & Innovation", desc: "Advancing accessible communication through AI and emerging technologies for complex STEM content accessibility." },
  { icon: Wrench, title: "Assistive Technology Development", desc: "Designing and deploying tools and software systems for accessible content conversion, diagram accessibility, and mathematical notation." },
  { icon: Users, title: "User Research", desc: "Conducting needs assessments involving persons with disabilities to improve tools, workflows, and standards for accessible digitization." },
  { icon: GraduationCap, title: "Training & Consultancy", desc: "Expert advisory services for corporates, institutions, and government organizations in accessibility compliance and inclusive communication." },
  { icon: Handshake, title: "Strategic Partnerships", desc: "Collaborating with educational institutions, publishers, government bodies, and non-profits to advance accessible education." },
];

const Services = () => (
  <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-20 md:py-28 bg-background relative">
    <div className="container max-w-6xl px-4 sm:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 id="services-heading" className="font-heading font-extrabold text-2xl sm:text-3xl md:text-5xl text-foreground mb-4">
          What We Do
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Comprehensive accessibility services spanning research, technology, and education.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
        {services.map((s) => (
          <article key={s.title} role="listitem" className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-secondary/40 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center mb-5" aria-hidden="true">
              <s.icon className="w-7 h-7 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{s.desc}</p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors focus-visible-ring"
            >
              {s.title.split(" ")[0]}
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

import { Eye, BookOpen, Globe } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Content Digitization", desc: "Large-scale conversion of educational materials into accessible formats for all learners." },
  { icon: Eye, title: "Accessibility Research", desc: "Pioneering research in accessible communication technologies and inclusive media solutions." },
  { icon: Globe, title: "Global Standards", desc: "Aligned with international accessibility standards to ensure universal compatibility." },
];

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20 md:py-28 bg-pattern">
    <div className="container max-w-6xl px-4 sm:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 id="about-heading" className="font-heading font-extrabold text-2xl sm:text-3xl md:text-5xl text-foreground mb-4">
          About the Foundation
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
          Progressive Accessibility Foundation is a Section 8 organization committed to advancing inclusive digital experiences for persons with disabilities. We focus on accessibility research, large-scale digitization of educational content, training, and development of accessible digital resources.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((p) => (
          <article key={p.title} className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center mb-5" aria-hidden="true">
              <p.icon className="w-7 h-7 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;

const members = [
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
  
  const Team = () => (
    <section id="team" aria-labelledby="team-heading" className="py-16 sm:py-20 md:py-28 bg-pattern">
      <div className="container max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="team-heading" className="font-heading font-extrabold text-2xl sm:text-3xl md:text-5xl text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Led by experts at the forefront of accessibility research and innovation.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {members.map((m) => (
            <article key={m.name} className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mb-5" aria-hidden="true">
                <span className="font-heading font-bold text-2xl text-foreground" aria-hidden="true">
                  {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground">{m.name}</h3>
              <p className="text-primary font-semibold text-sm mb-4">{m.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Team;
  
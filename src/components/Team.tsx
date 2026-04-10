import { members } from "../constants";

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
              <p className="text-black font-semibold text-sm mb-4">{m.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Team;
  
import logo from "@/assets/paf-logo.png";

const Hero = () => (
  <section aria-labelledby="hero-heading" className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden bg-pattern">
    <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Logo block */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 border-2 border-primary/40 rounded-lg flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
            <img src={logo} alt="Progressive Accessibility Foundation logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Text block */}
        <div className="text-center md:text-left">
          <h1 id="hero-heading" className="tracking-wide leading-loose font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            Progressive Accessibility Foundation
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl italic mb-8">
            Advancing inclusive digital experiences for everyone
          </p>
        </div>
      </div>

      {/* CTA pill */}
      <div className="flex justify-center mt-10 md:mt-14">
        <a
          href="#services"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors focus-visible-ring shadow-md"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

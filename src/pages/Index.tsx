import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    {/* Skip to main content link for keyboard/screen reader users */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" role="main">
      <Hero />
      <About />
      <Services />
      <Team />
    </main>
    <Footer />
  </div>
);

export default Index;

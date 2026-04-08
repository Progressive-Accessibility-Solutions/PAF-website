import logo from "@/assets/paf-logo.png";

const Footer = () => (
  <footer id="contact" aria-label="Contact and footer" className="py-12 sm:py-16 bg-foreground text-background">
    <div className="container max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Progressive Accessibility Foundation logo" className="h-12 w-auto bg-background rounded-lg p-1" />
            <span className="font-heading font-bold text-sm leading-tight">
              Progressive<br />Accessibility Foundation
            </span>
          </div>
          <p className="text-background/80 text-sm leading-relaxed">
            A Section 8 organization committed to advancing inclusive digital experiences for persons with disabilities.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Services", "Team"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-background/80 hover:text-accent transition-colors text-sm focus-visible-ring rounded">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="font-heading font-bold mb-4">Get in Touch</h4>
          <p className="text-background/80 text-sm leading-relaxed">
            Interested in making your content accessible? We'd love to hear from you. Email us at info@progressiveaccess.com.
          </p>
        </div>
      </div>

      <div className="border-t border-background/20 pt-8 text-center">
        <p className="text-background/70 text-sm">
          © {new Date().getFullYear()} Progressive Accessibility Foundation. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

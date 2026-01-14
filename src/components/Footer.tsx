import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/amirphiladam2", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/amirphiladam", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/amirp_2808", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/amirphiladam", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/amirdevstudio-1", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Amir P. Adam. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

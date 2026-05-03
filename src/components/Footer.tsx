import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/amirphiladam2", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/amirphiladam", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/iam_amirp", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/amirphiladam", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@amirdevstudios", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Amir P. Adam. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
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

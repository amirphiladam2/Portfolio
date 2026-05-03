import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { softSpring } from "@/lib/motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const observedSections = ["home", "about", "skills", "portfolio", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  useEffect(() => {
    const sections = observedSections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-primary via-accent to-primary"
        style={{ scaleX: scrollYProgress }}
      />

      <div className={`container mx-auto flex flex-col px-4 py-3 sm:px-6 sm:py-4 ${isScrolled ? "items-end" : "items-center"}`}>
        <motion.div
          layout
          transition={softSpring}
          className={`relative flex items-center justify-between rounded-full transition-all duration-500 w-full ${
            isScrolled
              ? "max-w-[56px] justify-center !p-1 border border-primary/15 bg-background/70 shadow-[0_25px_70px_-42px_hsl(var(--foreground)/0.65)] backdrop-blur-2xl"
              : "glass border border-transparent px-3 py-2.5 sm:px-4 sm:py-3"
          }`}
        >
          {!isScrolled && (
            <motion.a
              layout
              href="#home"
              whileHover={{ y: -2 }}
              className="font-display text-2xl font-bold text-primary"
            >
              Amir<span className="text-accent">.</span>
            </motion.a>
          )}

          <div
            className={`items-center gap-2 rounded-full border border-border/60 bg-background/40 p-2 backdrop-blur-xl ${
              isScrolled ? "hidden" : "hidden md:flex"
            }`}
          >
            {navLinks.map((link) => {
              const targetId = link.href.slice(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors duration-300 hover:text-foreground"
                  onClick={() => setActiveSection(targetId)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-full border border-primary/20 bg-primary/12 shadow-[0_0_28px_hsl(var(--primary)/0.18)]"
                      transition={softSpring}
                    />
                  )}
                  <span
                    className={
                      isActive ? "text-foreground" : undefined
                    }
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          <motion.button
            layout
            className={`inline-flex items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:text-primary ${
              isScrolled
                ? "h-11 w-11 flex text-primary"
                : "h-11 w-11 flex md:hidden border border-primary/15 bg-background/55 backdrop-blur-xl hover:border-primary/35"
            }`}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={softSpring}
              className={`glass mt-3 overflow-hidden rounded-3xl border border-primary/15 p-3 shadow-[0_28px_80px_-48px_hsl(var(--foreground)/0.85)] ${
                isScrolled ? "ml-auto block min-w-48" : "w-full md:hidden"
              }`}
            >
              {navLinks.map((link, index) => {
                const targetId = link.href.slice(1);
                const isActive = activeSection === targetId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary/12 text-foreground"
                        : "text-foreground/75 hover:bg-primary/10 hover:text-foreground"
                    }`}
                    onClick={() => {
                      setActiveSection(targetId);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.png";
import {
  fadeInItem,
  fadeUpItem,
  sectionViewport,
  softSpring,
  staggerContainer,
} from "@/lib/motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/amirphiladam2", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/amirphiladam", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/amirphiladam", label: "Twitter" },
];

const focusAreas = [
  "Firmware engineering",
  "IoT system design",
  "Sensor pipelines",
  "Edge AI prototypes",
];

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : 96],
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -72],
  );
  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -140],
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center overflow-x-hidden pt-20"
    >
      <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
      <motion.div
        aria-hidden
        className="hero-blob hero-blob-primary absolute -left-20 top-24 -z-10 h-72 w-72 rounded-full"
        style={{ y: glowY }}
      />
      <motion.div
        aria-hidden
        className="hero-blob hero-blob-accent absolute right-0 top-16 -z-10 h-80 w-80 rounded-full"
        style={{ y: imageY }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsl(var(--background)/0),hsl(var(--background))_70%)]"
      />

      <div
        id="about"
        aria-hidden
        className="absolute left-0 top-[58vh] h-px w-px"
      />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="order-2 lg:order-1"
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUpItem}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-sm text-foreground/80 shadow-[0_18px_60px_-34px_hsl(var(--foreground)/0.45)] backdrop-blur-xl"
            >
              <span className="signal-dot" />
              Embedded Systems
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
              IoT
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
              Edge AI
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              className="mb-3 text-lg text-muted-foreground"
            >
              Hello, It&apos;s Me
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="mb-5 font-display text-5xl font-bold tracking-tighter text-foreground md:text-7xl"
            >
              Amir{" "}
              <span className="text-primary">
                P.Adam
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeUpItem}
              className="mb-6 max-w-2xl text-2xl leading-tight text-foreground md:text-4xl"
            >
              I build connected hardware experiences with thoughtful firmware,
              reliable telemetry, and user-facing dashboards that make devices
              feel alive.
            </motion.h2>

            <motion.p
              variants={fadeUpItem}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              Embedded Systems and IoT engineering student with hands-on
              experience in C/C++ and Python across ESP32, STM32, and
              Raspberry Pi platforms. I enjoy turning sensors, communication
              protocols, and debugging sessions into end-to-end systems that
              are practical, resilient, and easy to understand.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="mb-10 flex flex-wrap gap-3"
            >
              {focusAreas.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-foreground/85 shadow-[0_12px_30px_-24px_hsl(var(--primary)/0.55)]"
                >
                  {focus}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="mb-10 flex flex-wrap gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -4, scale: 1.04 }
                  }
                  whileTap={{ scale: 0.97 }}
                  transition={softSpring}
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-background/75 text-primary shadow-[0_16px_40px_-28px_hsl(var(--primary)/0.75)] backdrop-blur-xl transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="/mycv.pdf" download>
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
              <Button
                variant="youtube"
                size="lg"
                className="hover:gap-3 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://youtube.com/@amirdevstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube size={20} />
                  Visit AmirDevStudio
                  <ArrowRight size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex justify-center lg:order-2"
            style={{ y: imageY }}
            variants={fadeInItem}
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
          >
            <div className="relative flex h-[380px] w-[320px] items-center justify-center md:h-[470px] md:w-[440px]">
              <motion.div
                aria-hidden
                className="absolute inset-10 rounded-full border border-dashed border-primary/20"
                animate={
                  shouldReduceMotion ? undefined : { rotate: 360 }
                }
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                aria-hidden
                className="absolute inset-16 rounded-full border border-accent/20"
                animate={
                  shouldReduceMotion ? undefined : { rotate: -360 }
                }
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
              />

              <div className="profile-shell relative h-72 w-72 overflow-hidden rounded-full border border-primary/20 md:h-96 md:w-96">
                <div className="hero-scan-line" aria-hidden />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.22),transparent_42%),linear-gradient(180deg,hsl(var(--background)/0),hsl(var(--background)/0.06)_80%,hsl(var(--background)/0.3))]"
                />
                <motion.img
                  src={profileImage}
                  alt="Amir P. Adam"
                  className="relative z-10 h-full w-full scale-[1.04] object-cover object-top"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -10, 0],
                          rotate: [-1, 1, -1],
                        }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-background/60 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

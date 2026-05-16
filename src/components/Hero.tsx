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
import { useHasFinePointer } from "@/hooks/use-has-fine-pointer";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const hasFinePointer = useHasFinePointer();
  const shouldReduceMotion =
    useReducedMotion() || isMobile || !hasFinePointer;
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
      className="relative isolate flex min-h-[100svh] items-center overflow-x-hidden pb-12 pt-32 sm:pt-40 lg:pt-48 lg:min-h-screen"
    >
      <div className="hero-grid absolute inset-0 -z-20 opacity-30" />
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
        className="pointer-events-none absolute inset-0 -z-10 bg-transparent"
      />

      <div
        id="about"
        aria-hidden
        className="absolute left-0 top-[58vh] h-px w-px"
      />

      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            className="order-2 lg:order-1"
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUpItem}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur-xl"
            >
              <span className="signal-dot" />
              Embedded Systems
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
              IoT
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
              Edge AI
            </motion.div>

            <motion.h1
              variants={fadeUpItem}
              className="mb-5 font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-7xl"
            >
              Hi, <span className="text-primary">Amir</span> here.
            </motion.h1>

            <motion.h2
              variants={fadeUpItem}
              className="mb-6 max-w-2xl text-xl leading-tight text-foreground sm:text-2xl md:text-4xl"
            >
              I build connected hardware experiences with thoughtful firmware,
              blending the precision of embedded systems with the power of IoT to turn raw data into actionable insights.
            </motion.h2>

            <motion.p
              variants={fadeUpItem}
              className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Electronics and Communication Engineering graduate focused on
              Embedded Systems and IoT. I design end-to-end connected systems
              using C/C++ and Python across platforms like ESP32, STM32, and Raspberry Pi,
              with hands-on experience in firmware development, sensor integration,
              communication protocols, telemetry, and system bring-up.

              Outside of engineering, I enjoy taking short trips to explore new places and cultures, and practicing nature photography with a focus on landscapes.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="mb-10 flex flex-wrap gap-3"
            >
              {focusAreas.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-foreground/85 sm:px-4 sm:py-2"
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
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-background/75 text-primary backdrop-blur-xl transition-colors duration-300 hover:border-primary/40 hover:text-primary sm:h-12 sm:w-12"
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
              className="flex w-full flex-col gap-4 sm:flex-row"
            >
              <Button
                variant="hero"
                size="lg"
                className="min-h-12 w-full justify-center sm:w-auto"
                asChild
              >
                <a href="/mycv.pdf" download>
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
              <Button
                variant="youtube"
                size="lg"
                className="min-h-12 w-full justify-center hover:gap-3 sm:w-auto"
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
            className="order-1 lg:order-2 flex justify-center"
            style={{ y: imageY }}
            variants={fadeInItem}
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
          >
            <div className="relative flex h-[300px] w-full max-w-[320px] items-center justify-center sm:h-[380px] md:h-[470px] md:max-w-[440px]">
              <motion.div
                aria-hidden
                className="absolute inset-6 rounded-full border border-dashed border-primary/20 sm:inset-10"
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
                className="absolute inset-12 rounded-full border border-accent/20 sm:inset-16"
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

              <div className="profile-ring h-60 w-60 rounded-full p-[2px] sm:h-72 sm:w-72 sm:p-[3px] md:h-96 md:w-96">
                <div className="profile-shell relative h-full w-full overflow-hidden rounded-full border border-primary/20">
                  {!shouldReduceMotion && <div className="hero-scan-line" aria-hidden />}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-transparent"
                  />
                  <motion.img
                    src={profileImage}
                    alt="Amir P. Adam"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sizes="(max-width: 767px) 240px, (max-width: 1023px) 288px, 384px"
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
                    className="absolute inset-x-0 bottom-0 z-20 h-28 bg-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

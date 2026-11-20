import { type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  PlayCircle,
  Smartphone,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import SmartBox from "@/assets/smart-box.jpeg";
import DisasterResilient from "@/assets/DistasterManagement.jpg";
import OpenCV from "@/assets/OpenCV.jpeg";
import Feature from "@/assets/Feature.png";
import {
  fadeUpItem,
  sectionViewport,
  smoothEase,
  softSpring,
  staggerContainer,
} from "@/lib/motion";
import { useHasFinePointer } from "@/hooks/use-has-fine-pointer";
import { useIsMobile } from "@/hooks/use-mobile";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  demo?: string;
  stats?: string;
};

const projects: Project[] = [
  {
    title: "IoT-Based Food Freshness Monitoring System",
    category: "IoT & Cloud Architecture",
    description:
      "An end-to-end food freshness and environmental monitoring system built around an ESP32 smart food container, AWS IoT Core ingestion pipeline, Firebase storage, and an Expo mobile application for real-time telemetry and hazard alerts.",
    image: SmartBox,
    tags: [
      "ESP32",
      "MQ135 Gas Sensor",
      "DHT11",
      "AWS IoT Core",
      "Lambda",
      "Firebase",
      "React Native",
    ],
    link: "https://github.com/amirphiladam2/IoT-Based-Food-Monitoring-System",
    github: "https://github.com/amirphiladam2/IoT-Based-Food-Monitoring-System",
    stats: "Live Telemetry",
  },
  {
    title: "Disaster-Resilient Hybrid Mesh Communication",
    category: "Off-Grid Embedded Systems",
    description:
      "A decentralized emergency communication network leveraging ESP32 microcontrollers and LoRa radio transceivers. Engineered to maintain peer-to-peer telemetry and message routing during natural catastrophes when cellular towers fail.",
    image: DisasterResilient,
    tags: ["C/C++", "ESP32", "LoRa RF", "Mesh Network", "Hardware Prototyping"],
    link: "https://github.com/amirphiladam2/lora-Communication-System",
    github: "https://github.com/amirphiladam2/lora-Communication-System",
    stats: "ESP32-LoRa",
  },
  {
    title: "Edge AI Smart Surveillance System",
    category: "Computer Vision & Edge AI",
    description:
      "A real-time, stateful Edge AI surveillance system engineered for Raspberry Pi. Performs on-device human detection, spatial logic for virtual tripwires, a live local dashboard, and instantaneous zero-cloud Telegram bot alerts.",
    image: OpenCV,
    tags: [
      "Raspberry Pi",
      "Python",
      "OpenCV",
      "TensorFlow Lite",
      "SQLite",
      "Flask",
      "Telegram Bot API",
    ],
    link: "https://github.com/amirphiladam2/edge-ai-surveillance",
    github: "https://github.com/amirphiladam2/edge-ai-surveillance",
    stats: "On-Device AI",
  },
  {
    title: "Caloriee — AI Calorie Tracker & Recipe Generator",
    category: "Mobile & Generative AI",
    description:
      "A full-stack cross-platform mobile application powered by Gemini AI and React Native. Empowers users to log nutrition, track daily calories, generate custom personalized recipes, and manage health milestones with cloud sync.",
    image: Feature,
    tags: [
      "React Native",
      "Expo",
      "Gemini AI",
      "Supabase",
      "Firebase",
      "NativeWind",
      "PostgreSQL",
    ],
    link: "https://play.google.com/store/apps/details?id=com.caloriee.com&hl=en_IN",
    demo: "https://play.google.com/store/apps/details?id=com.caloriee.com&hl=en_IN",
    stats: "Play Store",
  },
];

type TechnicalContentVideo = {
  url: string;
  title?: string;
  description?: string;
};

// Paste the exact public YouTube URLs you want to feature here.
const technicalContentVideos: TechnicalContentVideo[] = [
  {
    url: "https://www.youtube.com/watch?v=dPQBEeybkio",
    title: "Video Spotlight 01",
    description:
      "Featured from AmirDevStudio to highlight technical teaching, build logs, and engineering walkthroughs.",
  },
  {
    url: "https://youtu.be/-lfTWxTKWUo",
    title: "Video Spotlight 03",
    description:
      "A high-visibility feature card for one of your selected public videos.",
  },
  {
    url: "https://www.youtube.com/watch?v=7eq1FY_KfjQ",
    title: "Video Spotlight 02",
    description:
      "A live YouTube slot for practical software, embedded, or open-source education content.",
  },
];

const cardSpring = {
  stiffness: 180,
  damping: 24,
  mass: 0.6,
};

const extractYouTubeVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.slice(1) || null;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname.startsWith("/shorts/")) {
        return parsedUrl.pathname.split("/")[2] || null;
      }

      return parsedUrl.searchParams.get("v");
    }
  } catch {
    const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([A-Za-z0-9_-]{11})/);
    return match?.[1] ?? null;
  }

  return null;
};

const getYouTubeThumbnail = (url: string) => {
  const videoId = extractYouTubeVideoId(url);

  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isMobile = useIsMobile();
  const hasFinePointer = useHasFinePointer();
  const shouldReduceMotion =
    useReducedMotion() || isMobile || !hasFinePointer;
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const smoothX = useSpring(mouseX, cardSpring);
  const smoothY = useSpring(mouseY, cardSpring);
  const rotateX = useSpring(
    useTransform(smoothY, [0, 100], shouldReduceMotion ? [0, 0] : [4, -4]),
    cardSpring,
  );
  const rotateY = useSpring(
    useTransform(smoothX, [0, 100], shouldReduceMotion ? [0, 0] : [-4, 4]),
    cardSpring,
  );
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${smoothX}% ${smoothY}%, hsl(var(--primary) / 0.16), transparent 80%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };

  const isPlayStore =
    project.link.includes("play.google.com") ||
    Boolean(project.demo?.includes("play.google.com"));
  const isGithub = project.link.includes("github.com");

  return (
    <motion.div
      variants={fadeUpItem}
      transition={{ duration: 0.7, ease: smoothEase, delay: index * 0.08 }}
      className={cn("group h-full", !shouldReduceMotion && "[perspective:1200px]")}
      onPointerMove={shouldReduceMotion ? undefined : handlePointerMove}
      onPointerLeave={shouldReduceMotion ? undefined : handlePointerLeave}
    >
      <motion.article
        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
        transition={softSpring}
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:border-primary/45 hover:shadow-[0_16px_40px_-12px_hsl(var(--primary)/0.18)] sm:rounded-[1.75rem]"
      >
        {/* Dynamic interactive spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: spotlight }}
        />

        {/* Top specular glow line */}
        <div className="absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Full-bleed media showcase */}
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-border/70 bg-muted/20">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div
          className={cn(
            "relative z-10 flex flex-1 flex-col p-5 sm:p-6",
            !shouldReduceMotion && "[transform:translateZ(15px)]",
          )}
        >
          {/* Category & Status indicator */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary/85">
                {project.category}
              </span>
            </div>
            {project.stats && (
              <span className="text-[11px] font-mono text-muted-foreground/80">
                {project.stats}
              </span>
            )}
          </div>
          {/* Title Header with external jump */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title mb-3 block"
          >
            <h3 className="font-display text-xl font-bold leading-snug text-foreground transition-colors duration-300 group-hover/title:text-primary sm:text-2xl flex items-start justify-between gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-all duration-300 group-hover/title:text-primary group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
            </h3>
          </a>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-foreground/80 transition-colors duration-200 group-hover:border-primary/20 hover:!border-primary/50 hover:!text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 gap-1.5 border-border/80 bg-background/60 text-xs font-medium hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                </Button>
              )}

              {project.demo && (
                <Button
                  size="sm"
                  className="h-9 gap-1.5 bg-primary text-xs font-semibold text-primary-foreground hover:bg-primary/90 shadow-sm"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isPlayStore ? (
                      <Smartphone className="h-3.5 w-3.5" />
                    ) : (
                      <ExternalLink className="h-3.5 w-3.5" />
                    )}
                    <span>{isPlayStore ? "Google Play" : "Live Demo"}</span>
                  </a>
                </Button>
              )}

              {!project.github && !project.demo && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 gap-1.5 border-primary/30 bg-primary/10 text-xs font-medium text-primary hover:bg-primary/20 hover:border-primary/50"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-muted-foreground/80 hover:text-primary transition-colors"
            >
              <span>{isGithub ? "github.com" : isPlayStore ? "play.google.com" : "open link"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

const TechnicalContentCard = ({
  video,
  index,
}: {
  video: TechnicalContentVideo;
  index: number;
}) => {
  const videoUrl = video.url;
  const thumbnailUrl = getYouTubeThumbnail(videoUrl);
  const displayTitle = video.title ?? `Featured Video ${String(index + 1).padStart(2, "0")}`;
  const displayDescription =
    video.description ??
    "Selected YouTube content covering technical walkthroughs, engineering lessons, and open-source education.";

  return (
    <motion.article
      variants={fadeUpItem}
      transition={{ duration: 0.7, ease: smoothEase, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:border-primary/45 hover:shadow-[0_16px_40px_-12px_hsl(var(--primary)/0.15)]"
    >
      {/* Specular top-border highlight line */}
      <div className="absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#FF0000]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full aspect-video overflow-hidden border-b border-border/70 bg-muted/20"
      >
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={`${displayTitle} YouTube thumbnail`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/25 via-card to-background" />
        )}
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6 pt-4 sm:pt-5">
        <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#FF0000]/90">
          <Youtube size={13} />
          Technical Content
        </div>

        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/vtitle mb-3 block"
        >
          <h3 className="font-display text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover/vtitle:text-primary sm:text-2xl flex items-start justify-between gap-2">
            <span>{displayTitle}</span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-all duration-300 group-hover/vtitle:text-primary group-hover/vtitle:translate-x-0.5 group-hover/vtitle:-translate-y-0.5" />
          </h3>
        </a>

        <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {displayDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50">
          <Button
            variant="outline"
            size="sm"
            className="h-9 w-full justify-center gap-2 border-border/80 bg-background/60 text-xs font-medium hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 hover:text-white sm:w-fit"
            asChild
          >
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              <span>Open Video</span>
              <ExternalLink size={14} />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-24">
      <div className="section-aura absolute -right-32 top-16 h-80 w-80 rounded-full" />
      <div className="section-aura section-aura-accent absolute -left-24 bottom-12 h-72 w-72 rounded-full" />

      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/75">
            Selected Work
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            A curated showcase of engineering builds spanning embedded systems, IoT architectures, edge AI, and full-stack mobile applications.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-primary/15 bg-card/80 p-6 backdrop-blur-xl sm:mt-16 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/75">
                Knowledge Sharing
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                Technical Content &{" "}
                <span className="text-primary">Open Source Education</span>
              </h3>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                A dedicated, high-visibility showcase for selected YouTube videos that
                document builds, explain engineering decisions, and share
                practical open-source tutorials.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "YouTube Walkthroughs",
                  "Hardware Build Logs",
                  "Open-Source Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs text-primary font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Button
              variant="youtube"
              size="lg"
              className="w-full justify-center sm:w-auto"
              asChild
            >
              <a
                href="https://youtube.com/@amirdevstudios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} />
                Visit AmirDevStudio
              </a>
            </Button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3"
          >
            {technicalContentVideos.map((video, index) => (
              <TechnicalContentCard
                key={video.url}
                video={video}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.65, ease: smoothEase, delay: 0.15 }}
          className="mt-14 text-center"
        >
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto gap-2"
            asChild
          >
            <a
              href="https://github.com/amirphiladam2?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View All Projects on GitHub</span>
              <ArrowUpRight size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

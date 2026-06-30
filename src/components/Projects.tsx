import { type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink, PlayCircle, Youtube } from "lucide-react";
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

const projects = [
  {
    title: "IoT-Based Food Monitoring System",
    description:
      "This is an end-to-end food freshness monitoring system built around an ESP32 smart food box, an AWS IoT ingestion pipeline, Firebase storage, and an Expo mobile app. The project lets a user pair a hardware device to their account, monitor live sensor readings, review recent history, and receive alerts when food conditions become unsafe.",
    image: SmartBox,
    tags: [
      "ESP32",
      "MQ135",
      "DHT11",
      "AWS IoT Core",
      "Lambda",
      "Firebase",
      "React Native (Expo)",
    ],
    link: "https://github.com/amirphiladam2/IoT-Based-Food-Monitoring-System",
  },
    {
    title: "Disaster-Resilient Hybrid Mesh Communication System Using ESP32-LoRa",
    description:
      "A disaster-resilient hybrid mesh communication system using ESP32-LoRa for long-range communication.",
    image: DisasterResilient,
    tags: ["C/C++", "ESP32", "LoRa", "Mesh Network"],
    link: "https://techtacklenerd.blogspot.com/2025/11/disaster-resilient-hybrid-mesh.html",
  },
  {
    title: "Edge AI Smart Surveillance System",
    description:
      "A real-time, stateful Edge AI-powered surveillance system built for the Raspberry Pi. It performs on-device human detection, utilizes spatial logic for virtual tripwires, serves a live local web dashboard, and sends instant asynchronous alerts via Telegram, all without relying on cloud processing.",
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
  },
  {
    title:"Caloriee-Calorie Tracker & AI Recipe Generator",
    description:"Full Stack App built with React Native that allows users to log meals,track calories,generate recipes and personalize goals.",
    image:Feature,
    tags:[
       "React Native",
       "Expo",
       "Supabase",
       "Gemini 2.5 API",
       "Firebase",
       "NativeWind",
       "PostgresQL",
    ],
    link:"https://play.google.com/store/apps/details?id=com.caloriee.com&hl=en_IN",
  },
];

type Project = (typeof projects)[number];

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
  }
  
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
    useTransform(smoothY, [0, 100], shouldReduceMotion ? [0, 0] : [8, -8]),
    cardSpring,
  );
  const rotateY = useSpring(
    useTransform(smoothX, [0, 100], shouldReduceMotion ? [0, 0] : [-8, 8]),
    cardSpring,
  );
  const imageX = useTransform(
    smoothX,
    [0, 100],
    shouldReduceMotion ? [0, 0] : [-12, 12],
  );
  const imageY = useTransform(
    smoothY,
    [0, 100],
    shouldReduceMotion ? [0, 0] : [-10, 10],
  );
  const spotlight = useMotionTemplate`none`;

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

  return (
    <motion.div
      variants={fadeUpItem}
      transition={{ duration: 0.7, ease: smoothEase, delay: index * 0.08 }}
      className={cn("group h-full", !shouldReduceMotion && "[perspective:1400px]")}
      onPointerMove={shouldReduceMotion ? undefined : handlePointerMove}
      onPointerLeave={shouldReduceMotion ? undefined : handlePointerLeave}
    >
      <motion.article
        whileHover={shouldReduceMotion ? undefined : { y: -10 }}
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
        className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/80 backdrop-blur-xl sm:rounded-[1.75rem]"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: spotlight }}
        />
        <div className="absolute inset-x-8 top-0 z-10 h-px bg-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[16/10]">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="h-full w-full object-cover"
            style={{
              x: imageX,
              y: imageY,
              scale: shouldReduceMotion ? 1.02 : 1.08,
            }}
          />
          <div className="absolute inset-0 bg-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-background/70 px-3 py-1 text-[11px] font-medium text-foreground/90 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "relative z-10 flex flex-1 flex-col p-5 sm:p-6",
            !shouldReduceMotion && "[transform:translateZ(20px)]",
          )}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">
            Featured Build
          </p>
          <h3 className="mb-3 font-display text-xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {project.title}
          </h3>
          <p className="mb-6 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="outline"
            size="default"
            className="mt-auto min-h-11 w-full justify-center border-primary/25 bg-background/60 backdrop-blur-md hover:border-primary/45 sm:w-fit"
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink size={16} />
            </a>
          </Button>
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
      className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/55 backdrop-blur-xl"
    >
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={`${displayTitle} YouTube thumbnail`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/25 via-card to-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/85 backdrop-blur-md">
            {displayTitle}
          </div>
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md">
            <PlayCircle size={16} />
            Watch on YouTube
          </div>
        </div>
      </a>

      <div className="p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">
          <Youtube size={14} />
          Technical Content
        </div>
        <h3 className="mb-3 font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          {displayTitle}
        </h3>
        <p className="mb-6 text-sm leading-6 text-muted-foreground">
          {displayDescription}
        </p>
        <Button
          variant="outline"
          size="default"
          className="min-h-11 w-full justify-center border-primary/25 bg-background/60 backdrop-blur-md hover:border-primary/45 sm:w-fit"
          asChild
        >
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            Open Video
            <ExternalLink size={16} />
          </a>
        </Button>
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
            A few builds of my projects that involves embedded systems and IoT, sensing and mobile app development.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3"
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
                A dedicated, high-visibility row for selected YouTube videos that
                document builds, explain engineering decisions, and share
                practical open-source learning.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["YouTube walkthroughs", "Build breakdowns", "Open-source education"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {item}
                    </span>
                  ),
                )}
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
            className="w-full sm:w-auto"
            asChild
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

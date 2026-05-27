import { motion, useReducedMotion } from "framer-motion";
import {
  SiRaspberrypi,
  SiArduino,
  SiMicropython,
  SiCplusplus,
  SiStmicroelectronics,
  SiEspressif,
  SiPlatformio,
  SiGithub,
  SiGit,
  SiEasyeda,
  SiUbuntu,
  SiFlask,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiFirebase,
} from "@icons-pack/react-simple-icons";
import { Radio, Server, LayoutTemplate, Cable, Smartphone, Cloud, Zap, Code, Wrench, Cpu, LineChart } from "lucide-react";
import {
  fadeUpItem,
  sectionViewport,
  smoothEase,
  softSpring,
  staggerContainer,
} from "@/lib/motion";
import { useHasFinePointer } from "@/hooks/use-has-fine-pointer";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    description: "The core languages and scripting tools I use to bring ideas to life.",
    color: "from-blue-500/20 to-indigo-500/5",
    accent: "text-blue-500",
    skills: [
      { name: "C / C++", icon: SiCplusplus, color: "#6348FC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "MicroPython", icon: SiMicropython, color: "#FFFFFF" },
    ],
    className: "lg:col-span-2 md:col-span-2",
  },
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    description: "Architecting reliable firmware and interfacing with hardware at the lowest level.",
    color: "from-teal-500/20 to-emerald-500/5",
    accent: "text-teal-500",
    skills: [
      { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
      { name: "STM32", icon: SiStmicroelectronics, color: "#0A6FF1" },
      { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#E70C43" },
      { name: "Arduino", icon: SiArduino, color: "#00979D" },
    ],
    className: "lg:col-span-1 md:col-span-1",
  },
  {
    title: "Backend & Cloud Infrastructure",
    icon: Server,
    description: "Building backends and leveraging cloud services to ingest and serve telemetry data.",
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-500",
    skills: [
      { name: "AWS IoT Core", icon: Cloud, color: "#232F3E" },
      { name: "AWS Lambda", icon: Zap, color: "#FF9900" },
      { name: "ThingSpeak", icon: LineChart, color: "#00B3E6" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#018DFF" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    className: "lg:col-span-1 md:col-span-1",
  },
  {
    title: "Protocols & IoT",
    icon: Cable,
    description: "Connecting devices to the edge and the cloud securely.",
    color: "from-purple-500/20 to-fuchsia-500/5",
    accent: "text-purple-500",
    skills: [
      { name: "LoRa", icon: Radio, color: "#17a6f8" },
      { name: "MQTT", icon: LayoutTemplate, color: "#FF6F61" },
      { name: "HTTP/REST", icon: Server, color: "#4A90E2" },
      { name: "I2C•SPI•UART", icon: Cable, color: "#A8B1FF" },
    ],
    className: "lg:col-span-1 md:col-span-1",
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "The environment and utilities for modern engineering and PCB design.",
    color: "from-rose-500/20 to-red-500/5",
    accent: "text-rose-500",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FCC624" },
      { name: "STM32CubeIDE", icon:SiStmicroelectronics, color: "#0A6FF1"  },
      { name: "PlatformIO", icon: SiPlatformio, color: "#EB780C" },
      { name: "EasyEDA", icon: SiEasyeda, color: "#0883F7" },
      { name: "Postman", icon: SiPostman, color: "#F05032" },
      
   
    ],
    className: "lg:col-span-3 md:col-span-2",
  },
  {
    title: "Mobile App Dev",
    icon: Smartphone,
    description: "Creating native mobile applications that make hardware data intuitive.",
    color: "from-blue-500/20 to-amber-500/5",
    accent: "text-blue-500",
    skills: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    className: "lg:col-span-1 md:col-span-1",
  },

];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();
  const hasFinePointer = useHasFinePointer();
  const shouldLiftCards = !shouldReduceMotion && hasFinePointer;

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24">
      <div className="section-aura absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full" />

      <div className="container mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/75">
            Core Toolkit
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            The tools I reach for when building connected devices, firmware workflows, and polished interfaces around hardware.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUpItem}
              whileHover={shouldLiftCards ? { y: -4 } : undefined}
              transition={softSpring}
              className={`group relative overflow-hidden rounded-3xl border border-primary/10 bg-background/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 sm:p-8 ${category.className}`}
            >
              <div 
                className={`absolute inset-0 bg-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100 `} 
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <category.icon className={`h-8 w-8 ${category.accent}`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">{category.title}</h3>
                <p className="mb-8 text-sm text-muted-foreground">{category.description}</p>
                
                <div className="mt-auto flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1.5 text-xs text-foreground/80 backdrop-blur-md transition-colors group-hover:border-primary/40"
                    >
                      <skill.icon className="h-4 w-4" style={{ color: skill.color }} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

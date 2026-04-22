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
} from "@icons-pack/react-simple-icons";
import { Radio } from "lucide-react";
import {
  fadeUpItem,
  sectionViewport,
  smoothEase,
  softSpring,
  staggerContainer,
} from "@/lib/motion";

const skills = [
  { name: "C++", icon: SiCplusplus, color: "#6348FC" },
  { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#E70C43" },
  { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
  { name: "STM32", icon: SiStmicroelectronics, color: "#0A6FF1" },
  { name: "LoRa", icon: Radio, color: "#7C3AED" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "EasyEDA", icon: SiEasyeda, color: "#0883F7" },
  { name: "MicroPython", icon: SiMicropython, color: "#FFFFFF" },
  { name: "STM32CubeIDE", icon: SiStmicroelectronics, color: "#FFFFFF" },
  { name: "PlatformIO", icon: SiPlatformio, color: "#EB780C" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FCC624" },
  { name: "Postman", icon: SiPostman, color: "#F05032" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#018DFF" },
  { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="section-aura absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full" />

      <div className="container mx-auto px-6">
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
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The tools I reach for when building connected devices, firmware
            workflows, and polished interfaces around hardware.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUpItem}
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.04, y: -6 }
              }
              transition={softSpring}
              className="group"
              style={{
                boxShadow: `0 18px 42px -36px ${skill.color}`,
              }}
            >
              <div className="glass flex cursor-default items-center gap-3 rounded-full border border-primary/20 px-5 py-3 transition-all duration-300 group-hover:border-primary/45 group-hover:bg-background/80">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

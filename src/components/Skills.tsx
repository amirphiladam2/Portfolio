import { motion } from "framer-motion";
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
  SiVscodium,
  SiUbuntu,
  SiFlask,
  SiPostman,
  SiPostgresql,
  
} from "@icons-pack/react-simple-icons";
import { Radio } from "lucide-react";

const skills = [
  { name: "C++", icon: SiCplusplus, color: "#6348fc" },
  { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#e70c43" },
  { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
  { name: "STM32", icon: SiStmicroelectronics, color: "#0a6ff1" },
  { name: "LoRa", icon: Radio, color: "#7C3AED" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "EasyEDA", icon: SiEasyeda, color: "#0883f7" },
  { name: "MicroPython", icon: SiMicropython, color: "#ffffff" },
  { name: "STM32CubeIDE", icon: SiStmicroelectronics, color: "#ffffff" },
  { name: "PlatformIO", icon: SiPlatformio, color: "#eb780c" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FCC624" },
  { name: "Postman", icon: SiPostman, color: "#F05032" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#018dff" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" }

];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="glass px-5 py-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 cursor-default flex items-center gap-3">
                <skill.icon
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
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

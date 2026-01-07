import { motion } from "framer-motion";
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiRaspberrypi,
  SiArduino,
  SiSupabase,
  SiMicropython,
  SiGit,
  SiCplusplus,
} from "@icons-pack/react-simple-icons";
import { Cpu, Radio, Smartphone, Home } from "lucide-react";

const skills = [
  { name: "React Native", icon: SiReact },
  { name: "Expo", icon: SiExpo },
  { name: "NativeWind", icon: Smartphone },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C++", icon: SiCplusplus },
  { name: "Redux", icon: SiRedux },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Raspberry Pi", icon: SiRaspberrypi },
  { name: "ESP32", icon: Cpu },
  { name: "ESP8266", icon: Cpu },
  { name: "LoRa", icon: Radio },
  { name: "Arduino", icon: SiArduino },
  { name: "MicroPython", icon: SiMicropython },
  { name: "Git", icon: SiGit },
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
                <skill.icon className="w-5 h-5 text-primary" />
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

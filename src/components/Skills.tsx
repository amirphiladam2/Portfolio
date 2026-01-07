import { motion } from "framer-motion";

const skills = [
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "NativeWind", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "C/C++", category: "Language" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Redux", category: "State" },
  { name: "PostgreSQL", category: "Database" },
  { name: "DBMS", category: "Database" },
  { name: "Firebase", category: "Backend" },
  { name: "ESP32", category: "Embedded" },
  { name: "ESP8266", category: "Embedded" },
  { name: "LoRa", category: "Embedded" },
  { name: "Arduino", category: "Embedded" },
  { name: "Flask", category: "Backend" },
  { name: "Git", category: "Tools" },
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
            Tech <span className="text-gradient">Stack</span>
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
              <div className="glass px-6 py-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.3)] cursor-default">
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

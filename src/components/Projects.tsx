import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import BudgetTracker from "@/assets/BudgetTracker.png";
import Actionable from "@/assets/Actionable.png";
import WirelessSensor from "@/assets/WirelessSensor.jpg";
import HomeAutomation from "@/assets/HomeAutomation.jpg";
import DisasterResilient from "@/assets/DistasterManagement.jpg";

const projects = [
  {
    title: "Actionable-Task-Tracker App",
    description: "A mobile application for tracking personal tasks with visualization and task planning.",
    image: Actionable,
    tags: ["React Native", "Expo", "JavaScript","Supabase"],
    link: "https://github.com/amirphiladam2/Actionable",
  },
  {
    title: "Budget Tracker App",
    description: "A mobile application for tracking personal finances with visualization and budget planning.",
    image: BudgetTracker,
    tags: ["React Native", "Expo", "JavaScript","Supabase"],
    link: "https://amirp.netlify.app/myapps",
  },
  {
    title: "Wireless Sensor Network with LoRa",
    description: "A complete wireless sensor network solution using LoRa technology for long-range communication.",
    image: WirelessSensor,
    tags: ["LoRa", "ESP32", "ESP8266", "Flask Server"],
    link: "https://techtacklenerd.blogspot.com/2024/10/introduction-in-this-project-ill-show.html",
  },
  {
    title: "Smart Home System",
    description: "An integrated embedded system for home automation using Alexa & Google Home controllers.",
    image: HomeAutomation,
    tags: ["C/C++", "ESP8266", "Alexa", "Google Home"],
    link: "https://techtacklenerd.blogspot.com/2023/07/led-control-using-alexa-and-google-home.html",
  },
  {
    title:"Disaster-Resilient Hybrid Mesh Communication System Using ESP32–LoRa",
    description: "A disaster-resilient hybrid mesh communication system using ESP32-LoRa for long-range communication.",
    image: DisasterResilient,
    tags: ["C/C++", "ESP32", "LoRa", "Mesh Network"],
    link: "https://techtacklenerd.blogspot.com/2025/11/disaster-resilient-hybrid-mesh.html",
  }
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://amirp.netlify.app/portfolio" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

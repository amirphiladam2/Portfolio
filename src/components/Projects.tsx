import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import SmartBox from "@/assets/smart-box.jpeg";
import WirelessSensor from "@/assets/WirelessSensor.jpg";
import Dashboard from "@/assets/Dashboard.jpg";
import HomeAutomation from "@/assets/HomeAutomation.jpg";
import DisasterResilient from "@/assets/DistasterManagement.jpg";
import OpenCV from "@/assets/OpenCV.jpeg";

const projects = [
  {
    title:"IoT-Based Food Monitoring System",
    description: "This is an end-to-end food freshness monitoring system built around an ESP32 smart food box, an AWS IoT ingestion pipeline, Firebase storage, and an Expo mobile app.The project lets a user pair a hardware device to their account, monitor live sensor readings, review recent history, and receive alerts when food conditions become unsafe.",
    image: SmartBox,
    tags: ["ESP32","MQ135", "DHT11", "AWS IoT Core","Lambda", "Firebase", "React Native (Expo)"],
    link: "https://github.com/amirphiladam2/IoT-Based-Food-Monitoring-System",
  },
  {
    title: "Edge AI Smart Surveillance System",
    description: "A real-time, stateful Edge AI-powered surveillance system built for the Raspberry Pi. It performs on-device human detection, utilizes spatial logic for virtual tripwires, serves a live local web dashboard, and sends instant asynchronous alerts via Telegram-all without relying on cloud processing.",
    image: OpenCV,
    tags: ["Raspberry Pi", "Python", "OpenCV", "TensorFlow Lite", "SQLite","Flask", "Telegram Bot API"],
    link: "https://github.com/amirphiladam2/edge-ai-surveillance",
  },
  {
    title: "Full-Stack IoT Monitoring Platform",
    description: "Designed and implemented an end-to-end IoT data pipeline integrating embedded hardware, RESTful backend services, and a real-time web dashboard.",
    image: Dashboard,
    tags: ["ESP32", "DHT11", "Flask", "SQLite", "React (Vite)", "REST API"],
    link: "https://github.com/amirphiladam2/FullStack-IoT",
  },
  {
    title: "Smart Home Automation",
    description: "An integrated embedded system for home automation using Python Pyserial and ESP32.",
    image: HomeAutomation,
    tags: ["C/C++", "ESP32", "Python", "Pyserial"],
    link: "https://techtacklenerd.blogspot.com/2024/10/home-automation-project-using-esp32-and.html",
  },
  {
    title:"Disaster-Resilient Hybrid Mesh Communication System Using ESP32–LoRa",
    description: "A disaster-resilient hybrid mesh communication system using ESP32-LoRa for long-range communication.",
    image: DisasterResilient,
    tags: ["C/C++", "ESP32", "LoRa", "Mesh Network"],
    link: "https://techtacklenerd.blogspot.com/2025/11/disaster-resilient-hybrid-mesh.html",
  },
  {
    title: "Wireless Sensor Network with LoRa",
    description: "A complete wireless sensor network solution using LoRa technology for long-range communication.",
    image: WirelessSensor,
    tags: ["LoRa", "ESP32", "ESP8266"],
    link: "https://techtacklenerd.blogspot.com/2024/10/introduction-in-this-project-ill-show.html",
  },
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

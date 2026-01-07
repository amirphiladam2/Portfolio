import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Youtube, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/amirpadam", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/amirpadam", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/amirpadam", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/amirpadam", label: "Twitter" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-muted-foreground text-lg mb-2">Hello, It's Me</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-foreground">
              Amir P.Adam
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              I'm an <span className="text-gradient font-semibold">Embedded System Engineer</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              A Final Year ECE undergrad transforming ideas into digital experiences 
              with a focus on Embedded Systems and mobile applications development 
              using React Native.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.4)]"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://amirp.netlify.app/resume" target="_blank" rel="noopener noreferrer">
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
              <Button variant="youtube" size="lg" asChild>
                <a href="https://youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                  YouTube Channel
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 animate-gradient"
                style={{ backgroundSize: "200% 200%" }}
              />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden profile-glow animate-float">
                <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                  <img
                    src={profileImage}
                    alt="Amir P. Adam"
                    className="w-full h-full object-cover"
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

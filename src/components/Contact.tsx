import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:amirphiladam@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  amirphiladam@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Available Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full">
              <Send size={18} />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

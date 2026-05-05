import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import {
  fadeUpItem,
  sectionViewport,
  smoothEase,
  staggerContainer,
} from "@/lib/motion";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "amirphiladam@gmail.com",
    href: "mailto:amirphiladam@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Available Worldwide",
  },
];

const inputClassName =
  "w-full rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/45 focus:outline-none focus:ring-4 focus:ring-primary/10";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:amirphiladam@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="section-aura section-aura-accent absolute right-0 top-12 h-80 w-80 rounded-full" />

      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/75">
            Let&apos;s Connect
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            If you have an embedded systems project, internship opportunity, or
            an idea worth prototyping, I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid max-w-5xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
            className="space-y-5"
          >
            <motion.div
              variants={fadeUpItem}
              className="glass rounded-[2rem] border border-primary/15 p-5 sm:p-6"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-2 text-sm text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Open to internships and collaborations
              </div>
              <p className="text-muted-foreground">
                I enjoy working where hardware reliability and product
                experience meet. That can mean firmware, data acquisition,
                dashboards, automation, or turning a rough prototype into
                something polished.
              </p>
            </motion.div>

            {contactItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpItem}
                className="glass rounded-[1.75rem] border border-primary/10 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="glass space-y-5 rounded-[2rem] border border-primary/15 p-5 sm:p-6"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground/80">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  required
                  className={inputClassName}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground/80">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground/80">
                Message
              </label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me a little about the project or opportunity."
                rows={6}
                required
                className={`${inputClassName} resize-none`}
              />
            </div>

            <Button variant="hero" size="lg" className="w-full" type="submit">
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

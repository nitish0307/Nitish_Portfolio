import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold leading-snug text-center md:text-center">
              Passionate Web Developer <span className="block text-primary text-3xl font-bold hover:scale-110 transition-transform duration-300">&</span> AI Enthusiast
            </h3>

            <p className="text-muted-foreground text-justify">
              I combine creativity and technology to build meaningful web
              experiences, creating sleek, responsive interfaces focused on
              precision, performance, and smooth, effortless user interactions.
            </p>

            <p className="text-muted-foreground text-justify">
              I build smooth, visually engaging web interfaces and explore how
              AI can enhance digital experiences by making interactions smarter,
              faster, and more intuitive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Nitish_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary-neon/15 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive website and web applications with modern
                    framework.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Exploration</h4>
                  <p className="text-muted-foreground">
                    Building sleek, responsive user interface and exploring how
                    AI can elevate digital experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

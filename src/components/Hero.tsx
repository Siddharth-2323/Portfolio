
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Social Links - Vertical on left for desktop only */}
            <div className="flex flex-col space-y-6 fixed left-8 top-1/2 transform -translate-y-1/2 z-20 hidden xl:flex">
              <a 
                href="https://github.com/Siddharth-2323"
                className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/siddharthabhimanyu"
                className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:siddharthabhi2301@gmail.com"
                className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 shadow-lg"
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello, I'm{' '}
                <br />
                <span className="text-foreground">Siddharth Abhimanyu Thirupathi</span>
                <br />
                <span className="text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl italic font-medium">Full-Stack Developer</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center space-x-2">
                  <span>View Projects</span>
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Mobile social links */}
            <div className="flex space-x-6 pt-4 xl:hidden">
              <a 
                href="https://github.com/Siddharth-2323"
                className="text-muted-foreground hover:text-foreground transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/siddharthabhimanyu"
                className="text-muted-foreground hover:text-foreground transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:siddharthabhi2301@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating tags */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div className="absolute top-1/4 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="absolute top-1/2 -left-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">React Native</span>
              </div>
              <div className="absolute -bottom-8 left-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              
              {/* Main image container - removed background gradient */}
              <div className="relative overflow-hidden rounded-3xl p-2">
                <img
                  src="/lovable-uploads/14221c8c-d929-492b-b93f-aab40dc7a776.png"
                  alt="Siddharth Abhimanyu Thirupathi"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

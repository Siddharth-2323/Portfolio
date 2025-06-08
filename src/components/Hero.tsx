
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Full-Stack Developer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hello World, I am{' '}
                <span className="relative">
                  <span className="text-foreground">siddharth</span>
                  <span className="text-primary">.</span>
                </span>
              </h1>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg text-muted-foreground">Scalable Apps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg text-muted-foreground">Intuitive Interfaces</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg text-muted-foreground">Real-time Experiences</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about building impactful, scalable applications and intuitive user interfaces using modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center space-x-2">
                  <span>View Projects</span>
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg">
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a 
                href="https://github.com/Siddharth-2323"
                className="text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/siddharthabhimanyu"
                className="text-muted-foreground hover:text-foreground transition-colors group"
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
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating tags */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div className="absolute top-1/4 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="absolute -bottom-8 left-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/20 to-muted/40 p-8">
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

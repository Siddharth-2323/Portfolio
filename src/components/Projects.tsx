
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'SastraNet',
      category: 'Mobile App',
      description: 'A comprehensive university management system built with React Native, featuring secure routing, JWT authentication, and real-time notifications.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      features: [
        'Secure authentication system',
        'Real-time notifications',
        'Performance optimized for 5K+ users',
        'Reduced crash rate by 30%'
      ],
      link: 'https://hub.sastra.edu/'
    },
    {
      title: 'WAVES Music Player',
      category: 'Web App',
      description: 'A modern music player with advanced queue management, audio API integration, and focus on exceptional user experience.',
      tech: ['React.js', 'Web Audio API', 'CSS3', 'JavaScript'],
      features: [
        'Advanced queue management',
        'Custom audio controls',
        'Responsive design',
        'Playlist functionality'
      ]
    },
    {
      title: 'CodeCollab',
      category: 'Real-time App',
      description: 'Real-time collaborative coding platform with Socket.io integration, supporting multiple programming languages and live code execution.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'Express'],
      features: [
        'Real-time collaboration',
        'Multi-language support',
        'Live code execution',
        'Room-based sessions'
      ]
    }
  ];

  const minorProjects = [
    {
      title: 'Tic-Tac-Toe',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description: 'Classic game with AI opponent',
      github: 'https://github.com/Siddharth-2323/Tic-Tac-Toe'
    },
    {
      title: 'Rock Paper Scissors',
      tech: ['React.js', 'CSS3'],
      description: 'Interactive game with animations',
      github: 'https://github.com/Siddharth-2323/RockPaperScissor2'
    },
    {
      title: 'Password Generator',
      tech: ['JavaScript', 'Crypto'],
      description: 'Secure password generation tool',
      github: 'https://github.com/Siddharth-2323/React-PasswordGenerator'
    },
    {
      title: 'Currency Converter',
      tech: ['JavaScript', 'API'],
      description: 'Real-time currency conversion',
      github: 'https://github.com/Siddharth-2323/CurrencyConverter'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent works that showcase my skills in full-stack development, 
            UI/UX design, and performance optimization.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Category badge */}
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button - only for SastraNet */}
                  {project.link && (
                    <div>
                      <Button asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Project
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Minor Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minorProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-muted/50 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="p-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

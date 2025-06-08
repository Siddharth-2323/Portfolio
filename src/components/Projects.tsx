
import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'SastraNet',
      category: 'Mobile App',
      description: 'A comprehensive university management system built with React Native, featuring secure routing, JWT authentication, and real-time notifications.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      features: [
        'Secure authentication system',
        'Real-time notifications',
        'Performance optimized for 5K+ users',
        'Reduced crash rate by 30%'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'WAVES Music Player',
      category: 'Web App',
      description: 'A modern music player with advanced queue management, audio API integration, and focus on exceptional user experience.',
      tech: ['React.js', 'Web Audio API', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=800',
      features: [
        'Advanced queue management',
        'Custom audio controls',
        'Responsive design',
        'Playlist functionality'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'CodeCollab',
      category: 'Real-time App',
      description: 'Real-time collaborative coding platform with Socket.io integration, supporting multiple programming languages and live code execution.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'Express'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      features: [
        'Real-time collaboration',
        'Multi-language support',
        'Live code execution',
        'Room-based sessions'
      ],
      github: '#',
      demo: '#'
    }
  ];

  const minorProjects = [
    {
      title: 'Tic-Tac-Toe',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description: 'Classic game with AI opponent'
    },
    {
      title: 'Rock Paper Scissors',
      tech: ['React.js', 'CSS3'],
      description: 'Interactive game with animations'
    },
    {
      title: 'Currency Converter',
      tech: ['JavaScript', 'API'],
      description: 'Real-time currency conversion'
    },
    {
      title: 'Password Generator',
      tech: ['JavaScript', 'Crypto'],
      description: 'Secure password generation tool'
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
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button className="group">
                        <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="group">
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Source Code
                      </Button>
                    </div>
                  </div>
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
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-muted/50 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub for more projects and contributions to open source.
          </p>
          <Button size="lg" variant="outline">
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

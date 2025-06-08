
import { Calendar, Users, Trophy, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Core Member',
      company: 'SastraNet Development Team',
      period: 'Apr 2025 - Present',
      description: 'Managing UI & API features across 8+ modules, optimized app performance for 5K+ users.',
      achievements: [
        'Reduced app crashes by 30% through performance optimization',
        'Implemented secure routing and JWT authentication',
        'Led development of 8+ modules serving 5000+ active users',
        'Optimized database queries reducing load time by 40%'
      ],
      icon: <Code2 className="w-6 h-6" />,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Core Member',
      company: 'Daksh Workshops',
      period: 'Sep 2023 - May 2024',
      description: 'Delivered 5+ technical workshops in collaboration with IBM & Intel.',
      achievements: [
        'Conducted workshops for 200+ participants',
        'Collaborated with industry giants IBM & Intel',
        'Developed comprehensive curriculum for full-stack development',
        'Achieved 95% participant satisfaction rate'
      ],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      title: 'Core Member',
      company: 'Daksh Gaming Team',
      period: 'Sep 2023 - Present',
      description: 'Organized large gaming tournaments and reduced event setup time by 40%.',
      achievements: [
        'Organized tournaments with 500+ participants',
        'Reduced event setup time by 40% through automation',
        'Managed logistics for multiple gaming events',
        'Implemented real-time scoring systems'
      ],
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-purple-500/10 text-purple-600',
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wanna see{' '}
            <br className="hidden sm:block" />
            my experience?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From development leadership to workshop facilitation, here's my journey of building impactful solutions and leading technical initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left side - Company info */}
                  <div className="bg-muted/20 p-8 lg:p-12">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${exp.color} mb-6`}>
                      {exp.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{exp.title}</p>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg mb-4">Key Achievements:</h4>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Let's build something amazing together. I'm always open to discussing new opportunities and exciting projects.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

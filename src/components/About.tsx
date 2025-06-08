
import { User, GraduationCap, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const technicalSkills = [
    'Full Stack Development', 'API Management', 'App Architecture', 'Python', 'C', 'C++', 
    'Java', 'JavaScript', 'SQL', 'NoSQL', 'React.js', 'React Native', 'Node.js', 
    'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'Linux'
  ];

  const softSkills = [
    'Public Speaking',
    'Critical Thinking',
    'Event Management',
    'Team Leadership',
    'Problem Solving',
    'Communication',
  ];

  const education = [
    {
      institution: 'SASTRA University',
      degree: 'B.Tech in Information & Communication Technology',
      year: 'Currently in 3rd Year',
      grade: 'CGPA: 8.11',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: 'Sri Guru Junior College',
      degree: 'Intermediate',
      year: 'Completed',
      grade: '98.1%',
      icon: <Award className="w-6 h-6" />
    },
    {
      institution: 'Vignan Prabodhananda Prashanthi Nikethan (CBSE)',
      degree: 'High School',
      year: 'Completed',
      grade: '88%',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I specialize in turning complex problems into elegant solutions. My approach blends creativity with 
            strategic thinking to deliver designs and applications that not only look great but work seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Personal Info</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    With over a year of dedicated experience in development, I specialize in creating intuitive, 
                    user-focused applications that solve real-world problems and deliver seamless digital experiences.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I thrive on working closely with teams, blending creativity with strategy to bring 
                    visions to life through thoughtful, impactful development solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {technicalSkills.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-3 py-2 text-center font-medium text-sm hover:bg-primary/10 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Soft Skills */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {edu.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{edu.institution}</h4>
                        <p className="text-muted-foreground">{edu.degree}</p>
                        <div className="flex space-x-4 text-sm">
                          <span className="text-primary font-medium">{edu.year}</span>
                          <span className="text-muted-foreground">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-4 py-3 text-center font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">5K+</div>
                  <p className="text-sm text-muted-foreground">Users served across applications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { User, GraduationCap, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = {
    technical: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'C/C++', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Git', level: 85 },
    ],
    soft: [
      'Public Speaking',
      'Critical Thinking',
      'Event Management',
      'Team Leadership',
      'Problem Solving',
      'Communication',
    ]
  };

  const education = [
    {
      institution: 'SASTRA University',
      degree: 'B.Tech in Information & Communication Technology',
      year: 'Currently in 2nd Year',
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
                    With 4+ years of experience in development, I specialize in creating intuitive, 
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
                <div className="space-y-4">
                  {skills.technical.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
                  {skills.soft.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-4 py-3 text-center font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">120%</div>
                  <p className="text-sm text-muted-foreground">Average increase in performance optimization</p>
                </CardContent>
              </Card>
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

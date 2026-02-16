import { Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExperienceModal } from './experience-modal2';

interface ExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  image: string;
  description: string[];
  longDescription?: string;
  achievements?: string[];
  technologies?: string[];
  media?: string[];
}

export function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

  const experiences: ExperienceData[] = [
    {
      title: 'Senior Robotics Software Engineer',
      company: 'Autonomous Systems Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY5MzEzNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: [
        'Lead development of autonomous navigation stack for warehouse robots',
        'Implemented computer vision algorithms for object detection and tracking',
        'Mentored junior engineers and established coding standards for the robotics team',
      ],
      longDescription:
        'As a Senior Robotics Software Engineer, I lead the development of cutting-edge autonomous navigation systems for warehouse robots. My role involves architecting scalable solutions, mentoring team members, and ensuring the highest quality of code and system performance.',
      achievements: [
        'Reduced navigation errors by 40% through improved SLAM algorithms',
        'Led team of 5 engineers to deliver major features ahead of schedule',
        'Established CI/CD pipeline reducing deployment time by 60%',
      ],
      technologies: ['ROS', 'Python', 'C++', 'Docker', 'TensorFlow', 'OpenCV', 'Git'],
      media: [
        'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjkyODg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1657165235722-e50bbac41584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHJvYm90aWNzfGVufDF8fHx8MTc2OTMyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      title: 'Robotics Software Engineer',
      company: 'RoboTech Solutions',
      location: 'Boston, MA',
      period: '2019 - 2022',
      logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY5MzEzNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2OTMyOTgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: [
        'Developed ROS-based control systems for industrial manipulators',
        'Integrated sensor fusion algorithms for improved localization accuracy',
        'Collaborated with hardware team to optimize robot performance',
      ],
      longDescription:
        'Developed and maintained control systems for industrial robotic manipulators, focusing on precision, safety, and efficiency. Worked closely with cross-functional teams to deliver integrated solutions.',
      achievements: [
        'Improved manipulator accuracy by 25% through advanced control algorithms',
        'Reduced system downtime by 35% with predictive maintenance features',
      ],
      technologies: ['ROS', 'C++', 'Python', 'MoveIt', 'Gazebo'],
      media: [
        'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2OTMyOTgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Innovation Robotics Lab',
      location: 'Cambridge, MA',
      period: '2018 - 2019',
      logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY5MzEzNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      image: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY5MzI5ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: [
        'Contributed to open-source robotics frameworks',
        'Implemented path planning algorithms using A* and RRT',
        'Assisted in research on human-robot collaboration',
      ],
      longDescription:
        'Supported research and development of novel robotics algorithms and contributed to open-source projects. Gained foundational experience in robotics software development and research methodologies.',
      achievements: [
        'Published research paper on path planning optimization',
        'Contributed 10+ PRs to open-source ROS packages',
      ],
      technologies: ['Python', 'ROS', 'C++', 'MATLAB'],
      media: [
        'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY5MzI5ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-4xl mb-12 text-center text-white transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500/30 via-orange-500/50 to-orange-500/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-zinc-950 shadow-lg shadow-orange-500/50 z-10"></div>

                    {/* Image on one side */}
                    <div className="flex-1 flex justify-center items-center">
                      <div className="w-full max-w-sm aspect-video rounded-lg overflow-hidden shadow-lg">
                        <ImageWithFallback
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content Card on other side */}
                    <div className="flex-1">
                      <button
                        onClick={() => setSelectedExperience(exp)}
                        className="w-full text-left bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 group"
                      >
                        {/* Company Logo - small */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                            <ImageWithFallback
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl mb-1 text-white">{exp.title}</h3>
                            <h4 className="text-orange-400 text-lg">{exp.company}</h4>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              <span className="text-orange-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-orange-400 text-sm group-hover:text-orange-300 transition-colors">
                          Click to view more details →
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </section>
  );
}

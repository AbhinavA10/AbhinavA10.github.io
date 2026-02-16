import { Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExperienceModal } from './ExperienceModal';

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  logo: string;
  image: string;
  description: string[];
  details?: {
    overview?: string;
    responsibilities?: string[];
    achievements?: string[];
    technologies?: string[];
    media?: string[];
  };
}

export function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

const experiences: ExperienceData[] = [
  {
    title: 'Robotics Systems & Perception Engineer',
    company: 'Deep Trekker Inc.',
    period: '2023 - Present',
    description: ['Developed advanced camera systems and gimbal stabilization for commercial drones.'],
    logo: './src/media/about/DeepTrekker.jpg',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Developed advanced camera systems and gimbal stabilization for commercial drones.',
      responsibilities: [
        'Design optical systems for aerial photography and videography',
        'Develop embedded software for camera control and image processing',
        'Implement real-time image stabilization algorithms',
        'Calibrate and tune gimbal control systems',
      ],
      achievements: [
        'Improved image stabilization performance by 60%',
        'Reduced camera system weight by 25% while maintaining image quality',
        'Developed auto-exposure algorithm that works in extreme lighting conditions',
      ],
      technologies: ['ROS', 'Python', 'C++', 'Docker', 'TensorFlow', 'OpenCV', 'Git'],
      media: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Deep Trekker Inc.',
    title: 'Autonomy Software Co-op',
    period: 'Jan. 2022 - Aug. 2022',
    description: ['Developed advanced camera systems and gimbal stabilization for commercial drones.'],
    logo: './src/media/about/DeepTrekkerOld.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Developed advanced camera systems and gimbal stabilization for commercial drones.',
      responsibilities: [
        'Design optical systems for aerial photography and videography',
        'Develop embedded software for camera control and image processing',
        'Implement real-time image stabilization algorithms',
        'Calibrate and tune gimbal control systems',
      ],
      achievements: [
        'Improved image stabilization performance by 60%',
        'Reduced camera system weight by 25% while maintaining image quality',
        'Developed auto-exposure algorithm that works in extreme lighting conditions',
      ],
      technologies: ['C', 'ARM Cortex', 'IMU Sensors', 'PID Control', 'Image Processing'],
      media: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Applied Brain Research',
    title: 'Deep Learning Application Developer',
    period: 'May 2021 - Aug. 2021',
    description: ['Python, Websockets, Benchmarking.'],
    logo: './src/media/about/ABR.PNG',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Designed and implemented real-time computer vision algorithms for object detection and tracking, and benchmarked websocket communication for low-latency data transfer.',
      responsibilities: [
        'Design and implement real-time computer vision algorithms for object detection and tracking',
        'Benchmarking websocket communication for low-latency data transfer',
      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'CUDA', 'PCL'],
      media: [
        'https://images.unsplash.com/photo-1593568305252-1b8a33ac4f22?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1554941426-47d681795c3a?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Applied Brain Research',
    title: 'Backend Developer',
    period: 'Sep. 2020 - Dec. 2020',
    description: ['Python, Websockets, Benchmarking.'],
    logo: './src/media/about/ABR.PNG',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Designed and implemented real-time computer vision algorithms for object detection and tracking, and benchmarked websocket communication for low-latency data transfer.',
      responsibilities: [
        'Design and implement real-time computer vision algorithms for object detection and tracking',
        'Benchmarking websocket communication for low-latency data transfer',
      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'CUDA', 'PCL'],
      media: [
        'https://images.unsplash.com/photo-1593568305252-1b8a33ac4f22?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1554941426-47d681795c3a?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Deep Trekker Inc.',
    title: 'Fullstack Software Developer',
    period: '2019 - 2021',
    description: ['Developed QtQuick GUI Application for Embedded Linux Remote Control used with underwater remotely operated vehicles.'],
    logo: './src/media/about/DeepTrekkerOld.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Developed QtQuick GUI Application for Embedded Linux Remote Control used in interfacing with underwater remotely operated vehicles.',
      responsibilities: [
        'Developed QtQuick GUI Application for Embedded Linux Remote Control used in interfacing with underwater remotely operated vehicles.',
        'Implemented user-friendly import of mapping data using GPX file format',
        'Debugged TCP/IP communication issues using tcpdump and Wireshark',
        'Created performance profiling Bash scripts; Implemented efficient MVC practices reducing CPU usage by 23%',
        'Currently prototyping PWA with communication over WebSockets for IoT devices',
      ],
      achievements: [
        'Improved image stabilization performance by 60%',
        'Reduced camera system weight by 25% while maintaining image quality',
        'Developed auto-exposure algorithm that works in extreme lighting conditions',
      ],
      technologies: ['C', 'ARM Cortex', 'IMU Sensors', 'PID Control', 'Image Processing'],
      media: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Cynorix - Cyber Security Startup',
    title: 'Cyber Security Software Developer',
    period: 'May 2019 - Aug. 2019',
    description: ['Developed secure file storage and authentication system for a cybersecurity startup, utilizing AES-256 encryption and MongoDB for data management.'],
    logo: './src/media/about/Cynorix.jpg',
    image: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjB0ZWNobm9sb2d5JTIwbGVuc3xlbnwxfHx8fDE3Njk1NzY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Developed secure file storage and authentication system for a cybersecurity startup, utilizing AES-256 encryption and MongoDB for data management.',
      responsibilities: [
        "Extensively worked with MongoDB, Express.js, Node.js and WPF for user authentication, AES-256 data encryption, and large file storage using GridFS",
        "Redesigned automatic 2-factor-authentication (2FA), reducing setup time by 25%",
        "Designed and integrated JavaScript preprocessor into Node.js app using Gulp.js, reducing server latency at login by 18% hosted on Microsoft Azure.",
        "Restructured NoSQL database to increase max file storage by 90% and reduced memory consumption of client-side C# application by 53%",
      ],
      achievements: [
        'Published 5 research papers on object detection and tracking',
        'Developed a novel stereo vision algorithm for depth estimation',
        'Contributed to open-source autonomous driving frameworks',
      ],
      technologies: ['ROS', 'Python', 'TensorFlow', 'Stereo Vision', 'Kalman Filters'],
      media: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      ],
    },
  },
];

  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold text-white mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Experience
        </h2>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-400/30 via-orange-400/50 to-orange-400/30 transition-all duration-1000 delay-200 ${
            timelineVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} style={{ transformOrigin: 'top' }}></div>

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
                  style={{ transitionDelay: `${150}ms` }}
                >
                  <div className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-zinc-950 shadow-lg shadow-orange-400/50 z-10"></div>

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
                        className="w-full text-left bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-orange-400/50 
                                  transition-all hover:shadow-lg hover:shadow-orange-400/10 hover:scale-101 group cursor-pointer"
                        
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
                            <h3 className="text-xl font-bold mb-1 text-white group-hover:text-orange-400">{exp.title}</h3>
                            <h4 className="text-orange-400 font-medium">{exp.company}</h4>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              {/* <span className="text-orange-400">•</span> */}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center text-sm text-zinc-400 group-hover:text-orange-400 transition-colors">
                          <span>View Details</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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

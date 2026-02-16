import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExperienceModal } from './experience-modal';

export interface Experience {
  title: string;
  company: string;
  // location: string;
  period: string;
  overview: string;
  logo: string;
  image: string;
  details?: {
    responsibilities?: string[];
    achievements?: string[];
    technologies?: string[];
    images?: string[];
  };
}

const experiences: Experience[] = [
  {
    title: 'Robotics Systems & Perception Engineer',
    company: 'Deep Trekker',
    period: '2023 - Present',
    overview: 'Developed advanced camera systems and gimbal stabilization for commercial drones.',
    logo: './src/media/about/DeepTrekker.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
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
      images: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Deep Trekker',
    title: 'Autonomy Software Co-op',
    period: 'Jan. 2022 - Aug. 2022',
    overview: 'Developed advanced camera systems and gimbal stabilization for commercial drones.',
    logo: './src/media/about/DeepTrekker.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
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
      images: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Applied Brain Research',
    title: 'Deep Learning Application Developer',
    period: 'May 2021 - Aug. 2021',
    overview: 'Python, Websockets, Benchmarking.',
    logo: './src/media/about/AppliedBrainResearch.jpg',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Design and implement real-time computer vision algorithms for object detection and tracking',
        'Benchmarking websocket communication for low-latency data transfer',
      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'CUDA', 'PCL'],
      images: [
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
    overview: 'Python, Websockets, Benchmarking.',
    logo: './src/media/about/AppliedBrainResearch.jpg',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Design and implement real-time computer vision algorithms for object detection and tracking',
        'Benchmarking websocket communication for low-latency data transfer',
      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'CUDA', 'PCL'],
      images: [
        'https://images.unsplash.com/photo-1593568305252-1b8a33ac4f22?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1554941426-47d681795c3a?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Deep Trekker',
    title: 'Fullstack Software Developer',
    period: '2019 - 2021',
    overview: 'Developed QtQuick GUI Application for Embedded Linux Remote Control used with underwater remotely operated vehicles.',
    logo: './src/media/about/DeepTrekker.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
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
      images: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop',
      ],
    },
  },
  {
    company: 'Cynorix',
    title: 'Cyber Security Software Developer',
    period: 'May 2019 - Aug. 2019',
    overview: 'Developed secure file storage and authentication system for a cybersecurity startup, utilizing AES-256 encryption and MongoDB for data management.',
    logo: './src/media/about/Cynorix.jpg',
    image: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjB0ZWNobm9sb2d5JTIwbGVuc3xlbnwxfHx8fDE3Njk1NzY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
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
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      ],
    },
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <>
      <section id="experience" className="min-h-screen bg-zinc-950 py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() => setSelectedExperience(exp)}
                  className="group cursor-pointer"
                >
                  <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="grid md:grid-cols-[auto,1fr,auto] gap-6 items-center">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-orange-500 font-medium">{exp.company}</p>
                        <p className="text-sm text-zinc-400">{exp.period}</p>
                        <p className="text-zinc-300 mt-3">{exp.overview}</p>
                      </div>

                      {/* Image */}
                      <div className="flex-shrink-0">
                        <div className="w-48 h-32 rounded-lg overflow-hidden">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center text-sm text-zinc-400 group-hover:text-orange-500 transition-colors">
                      <span>Click to view details</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExperienceModal } from './experience-modal';

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
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
    company: 'TechVision Robotics',
    position: 'Senior Robotics Engineer',
    period: '2021 - Present',
    description: 'Leading the development of autonomous navigation systems and computer vision solutions for industrial robots.',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Lead a team of 5 engineers in developing autonomous mobile robots',
        'Design and implement real-time computer vision algorithms for object detection and tracking',
        'Develop calibration systems for multi-camera arrays',
        'Integrate LiDAR and vision sensors for SLAM applications',
      ],
      achievements: [
        'Reduced navigation errors by 40% through advanced sensor fusion techniques',
        'Published 3 papers on robust visual odometry in challenging lighting conditions',
        'Filed 2 patents on novel camera calibration methods',
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
    company: 'Aerial Dynamics Inc.',
    position: 'Camera Systems Engineer',
    period: '2019 - 2021',
    description: 'Developed advanced camera systems and gimbal stabilization for commercial drones.',
    logo: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=100&h=100&fit=crop',
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
    company: 'AutonoLab Research',
    position: 'Robotics Engineer',
    period: '2016 - 2019',
    description: 'Researched and developed autonomous vehicle perception systems and sensor fusion algorithms.',
    logo: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjB0ZWNobm9sb2d5JTIwbGVuc3xlbnwxfHx8fDE3Njk1NzY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Develop perception algorithms for autonomous vehicles',
        'Implement multi-sensor fusion for improved environmental understanding',
        'Conduct extensive testing and validation of perception systems',
        'Collaborate with university researchers on cutting-edge projects',
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
      <section id="experience" className="min-h-screen bg-zinc-900 py-24 px-6 md:px-12">
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
                  <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
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
                          {exp.position}
                        </h3>
                        <p className="text-orange-500 font-medium">{exp.company}</p>
                        <p className="text-sm text-zinc-400">{exp.period}</p>
                        <p className="text-zinc-300 mt-3">{exp.description}</p>
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

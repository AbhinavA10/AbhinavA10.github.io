import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectModal } from './project-modal';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  liveUrl?: string;
  details?: {
    overview?: string;
    technologies?: string[];
    results?: string[];
    images?: string[];
    content?: Array<{
      type: 'text' | 'image' | 'youtube';
      heading?: string;
      text?: string;
      url?: string;
      videoId?: string;
      caption?: string;
    }>;
  };
}

const projects: Project[] = [
  {
    title: 'Autonomous Warehouse Robot',
    description: 'Developed a fully autonomous mobile robot for warehouse navigation and inventory management using ROS2 and deep learning.',
    image: 'https://images.unsplash.com/photo-1593568305252-1b8a33ac4f22?w=600&h=400&fit=crop',
    tags: ['Robotics', 'Computer Vision', 'Deep Learning'],
    category: 'Robotics',
    github: 'https://github.com',
    details: {
      overview: 'This project aimed to create an autonomous mobile robot capable of navigating complex warehouse environments, identifying and tracking inventory items, and optimizing material handling workflows.',
      content: [
        {
          type: 'text',
          heading: 'The Challenge',
          text: 'Modern warehouses face increasing pressure to optimize operations while reducing costs. Traditional manual processes are slow and error-prone, while existing automation solutions often lack the flexibility needed for dynamic environments.',
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
          caption: 'Robot navigating through warehouse aisles',
        },
        {
          type: 'text',
          heading: 'Our Solution',
          text: 'We developed a vision-based autonomous mobile robot that uses a combination of LiDAR, stereo cameras, and deep learning to navigate warehouse environments. The system can detect obstacles, identify inventory items, and plan optimal paths in real-time.',
        },
        {
          type: 'youtube',
          videoId: 'dQw4w9WgXcQ',
          caption: 'Demo video showing the robot in action',
        },
        {
          type: 'text',
          heading: 'Key Features',
          text: 'The robot includes SLAM for localization, YOLOv8 for object detection, and a custom path planning algorithm that accounts for dynamic obstacles. It can operate continuously for 8+ hours on a single charge.',
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=500&fit=crop',
          caption: 'Object detection visualization',
        },
      ],
      technologies: ['ROS2', 'Python', 'PyTorch', 'OpenCV', 'LiDAR', 'SLAM'],
      results: [
        'Reduced inventory checking time by 65%',
        'Achieved 99.2% navigation accuracy in real-world tests',
        'Successfully deployed in 3 warehouse facilities',
      ],
    },
  },
  {
    title: 'Multi-Camera Calibration System',
    description: 'Created an automated calibration system for multi-camera arrays used in 3D reconstruction and motion capture.',
    image: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?w=600&h=400&fit=crop',
    tags: ['Computer Vision', 'Calibration', '3D Reconstruction'],
    category: 'Computer Vision',
    github: 'https://github.com',
    details: {
      overview: 'A comprehensive calibration system that automates the process of calibrating large camera arrays for accurate 3D reconstruction and motion tracking applications.',
      technologies: ['C++', 'OpenCV', 'Eigen', 'Bundle Adjustment', 'Multi-view Geometry'],
      results: [
        'Reduced calibration time from 4 hours to 20 minutes',
        'Improved 3D reconstruction accuracy by 35%',
        'Open-sourced and adopted by 5+ research institutions',
      ],
      images: [
        'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      ],
    },
  },
  {
    title: 'Drone Gimbal Stabilization',
    description: 'Designed and implemented a 3-axis gimbal stabilization system for professional drone cinematography.',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?w=600&h=400&fit=crop',
    tags: ['Embedded Systems', 'Control Systems', 'Drones'],
    category: 'Camera Systems',
    details: {
      overview: 'A high-performance gimbal stabilization system that provides smooth, jitter-free footage even in challenging flight conditions.',
      technologies: ['C', 'ARM Cortex-M7', 'PID Control', 'IMU Fusion', 'Motor Control'],
      results: [
        'Achieved stabilization accuracy within 0.02 degrees',
        'Supports cameras up to 1.5kg',
        'Used in 50+ commercial productions',
      ],
      images: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&h=400&fit=crop',
      ],
    },
  },
  {
    title: 'Real-Time Object Tracking',
    description: 'Developed a real-time object tracking system for sports analysis using deep learning and Kalman filtering.',
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop',
    tags: ['Computer Vision', 'Deep Learning', 'Real-Time'],
    category: 'Computer Vision',
    github: 'https://github.com',
    details: {
      overview: 'A high-performance tracking system designed for sports analytics, capable of tracking multiple players and objects simultaneously at 60+ FPS.',
      technologies: ['Python', 'TensorFlow', 'YOLO', 'DeepSORT', 'Kalman Filters'],
      results: [
        'Tracks up to 30 objects simultaneously',
        'Achieves 95% tracking accuracy across 10,000+ test frames',
        'Deployed in professional sports teams',
      ],
      images: [
        'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=600&h=400&fit=crop',
      ],
    },
  },
  {
    title: 'Stereo Vision Depth Estimation',
    description: 'Built a stereo vision system for accurate depth estimation in autonomous vehicles.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: ['Stereo Vision', 'Depth Estimation', 'Autonomous Vehicles'],
    category: 'Robotics',
    details: {
      overview: 'A robust stereo vision pipeline that provides accurate depth information for autonomous navigation and obstacle avoidance.',
      technologies: ['C++', 'CUDA', 'Semi-Global Matching', 'Point Cloud Processing'],
      results: [
        'Processes 1920x1080 stereo pairs at 30 FPS',
        'Depth accuracy within 2% at ranges up to 50 meters',
        'Integrated into autonomous vehicle prototypes',
      ],
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=600&h=400&fit=crop',
      ],
    },
  },
  {
    title: 'Robotic Arm Vision System',
    description: 'Created a vision-guided robotic arm system for precision pick-and-place operations in manufacturing.',
    image: 'https://images.unsplash.com/photo-1554941426-47d681795c3a?w=600&h=400&fit=crop',
    tags: ['Robotics', 'Machine Vision', 'Industrial Automation'],
    category: 'Robotics',
    github: 'https://github.com',
    details: {
      overview: 'An integrated vision system that enables robotic arms to identify, grasp, and manipulate objects with sub-millimeter precision.',
      technologies: ['ROS', 'OpenCV', 'Hand-Eye Calibration', 'Grasp Planning'],
      results: [
        'Achieved 99.5% pick success rate',
        'Reduced cycle time by 40%',
        'Handles objects of varying sizes and materials',
      ],
      images: [
        'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      ],
    },
  },
  {
    title: 'HDR Image Processing Pipeline',
    description: 'Developed a real-time HDR imaging pipeline for professional cameras and drones.',
    image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&h=400&fit=crop',
    tags: ['Image Processing', 'HDR', 'Real-Time'],
    category: 'Camera Systems',
    details: {
      overview: 'A high-performance HDR processing pipeline that combines multiple exposures to create stunning images with extended dynamic range.',
      technologies: ['C++', 'CUDA', 'Tone Mapping', 'Image Fusion'],
      results: [
        'Processes 4K HDR images at 24 FPS',
        'Supports 14-bit RAW input',
        'Integrated into commercial camera products',
      ],
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
      ],
    },
  },
  {
    title: 'SLAM Navigation System',
    description: 'Implemented a visual-inertial SLAM system for indoor robot navigation without GPS.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    tags: ['SLAM', 'Navigation', 'Sensor Fusion'],
    category: 'Robotics',
    github: 'https://github.com',
    details: {
      overview: 'A robust SLAM system that combines visual and inertial data to enable accurate localization and mapping in GPS-denied environments.',
      technologies: ['C++', 'ORB-SLAM', 'IMU Fusion', 'Loop Closure Detection'],
      results: [
        'Achieves sub-meter accuracy over 1km trajectories',
        'Works in challenging lighting conditions',
        'Adopted by multiple robotics companies',
      ],
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      ],
    },
  },
];

const categories = ['All', 'Robotics', 'Computer Vision', 'Camera Systems'];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section id="projects" className="min-h-screen bg-zinc-900 py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Projects
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        {project.github && (
                          <div className="flex items-center gap-1 text-sm text-zinc-400 group-hover:text-orange-500 transition-colors">
                            <Github size={16} />
                            <span>GitHub</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-sm text-zinc-400 group-hover:text-orange-500 transition-colors">
                          <span>View Details</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

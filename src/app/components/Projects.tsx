import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ProjectModal } from './ProjectModal';

type Category = 'All' | 'Autonomous Systems' | 'Computer Vision' | 'Manipulation';

type MediaItem = {
  type: 'image' | 'youtube';
  url: string;
};

type ContentBlock = {
  type: 'text' | 'media';
  content?: string;
  media?: MediaItem;
};

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  tags: string[];
  github?: string;
  demo?: string;
  hasModal?: boolean;
  longDescription?: string;
  features?: string[];
  technologies?: string[];
  media?: MediaItem[];
  richContent?: ContentBlock[];
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: filterRef, isVisible: filterVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const projects: Project[] = [
    {
      id: 'warehouse-robot',
      title: 'Autonomous Warehouse Robot',
      description:
        'Developed a complete autonomous navigation system for warehouse robots, including SLAM, path planning, and obstacle avoidance.',
      image:
        'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Autonomous Systems',
      tags: ['ROS', 'Python', 'SLAM', 'Navigation', 'Navigation2'],
      github: 'https://github.com',
      hasModal: true,
      longDescription:
        'This project involved creating a comprehensive autonomous navigation system for warehouse robots capable of operating in dynamic environments. The system integrates multiple sensors and uses advanced algorithms for real-time decision making.',
      features: [
        'Real-time SLAM (Simultaneous Localization and Mapping) using LiDAR',
        'Dynamic obstacle detection and avoidance',
        'Multi-robot coordination and collision prevention',
        'Optimized path planning using A* and DWA algorithms',
        'Integration with warehouse management systems',
      ],
      technologies: ['ROS', 'Python', 'C++', 'OpenCV', 'PCL', 'TensorFlow'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjkyODg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1657165235722-e50bbac41584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHJvYm90aWNzfGVufDF8fHx8MTc2OTMyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      ],
    },
    {
      id: 'self-driving',
      title: 'Self-Driving Vehicle Platform',
      description:
        'Built perception and control systems for an autonomous vehicle, integrating LiDAR, cameras, and GPS for reliable navigation.',
      image:
        'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjkyODg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Autonomous Systems',
      tags: ['C++', 'Sensor Fusion', 'Deep Learning'],
      github: 'https://github.com',
    },
    {
      id: 'drone-swarm',
      title: 'Drone Swarm Coordination',
      description:
        'Implemented multi-agent coordination algorithms for autonomous drone swarms with real-time communication and task allocation.',
      image:
        'https://images.unsplash.com/photo-1699084583993-16958aa157d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MjQyNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Autonomous Systems',
      tags: ['Python', 'Multi-Agent Systems', 'ROS'],
      github: 'https://github.com',
      hasModal: true,
      longDescription:
        'A distributed system for coordinating multiple autonomous drones to work together on complex tasks. The system handles real-time communication, task allocation, and collision avoidance in 3D space.',
      features: [
        'Decentralized decision-making architecture',
        'Real-time inter-drone communication protocol',
        'Dynamic task allocation based on drone capabilities',
        '3D collision avoidance with formation flying',
        'Fault tolerance and autonomous recovery',
      ],
      technologies: ['Python', 'ROS', 'MAVLink', 'ZeroMQ', 'NumPy'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1699084583993-16958aa157d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MjQyNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
      richContent: [
        {
          type: 'text',
          content: 'A distributed system for coordinating multiple autonomous drones to work together on complex tasks. The system handles real-time communication, task allocation, and collision avoidance in 3D space.\n\nThis project was developed over 18 months and involved extensive field testing with actual drone hardware.',
        },
        {
          type: 'media',
          media: { type: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        },
        {
          type: 'text',
          content: 'The architecture uses a decentralized approach where each drone makes autonomous decisions based on local information and communication with nearby drones. This ensures the system remains robust even if individual drones fail or communication is temporarily lost.',
        },
        {
          type: 'media',
          media: { type: 'image', url: 'https://images.unsplash.com/photo-1699084583993-16958aa157d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MjQyNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        },
        {
          type: 'text',
          content: 'Field tests demonstrated successful coordination of up to 10 drones simultaneously performing search and rescue operations in simulated disaster scenarios.',
        },
        {
          type: 'media',
          media: { type: 'image', url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        },
      ],
    },
    {
      id: 'object-detection',
      title: 'Object Detection & Tracking',
      description:
        'Created a real-time object detection and tracking system using deep learning models optimized for embedded systems.',
      image:
        'https://images.unsplash.com/photo-1657165235722-e50bbac41584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHJvYm90aWNzfGVufDF8fHx8MTc2OTMyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Computer Vision',
      tags: ['PyTorch', 'OpenCV', 'YOLO'],
      github: 'https://github.com',
    },
    {
      id: 'robotic-arm',
      title: 'Robotic Arm Manipulation',
      description:
        'Developed pick-and-place algorithms with inverse kinematics and force control for precision manipulation tasks.',
      image:
        'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Manipulation',
      tags: ['ROS', 'MoveIt', 'C++'],
      github: 'https://github.com',
      hasModal: true,
      longDescription:
        'An advanced manipulation system for industrial robotic arms featuring precise control, force feedback, and adaptive grasping strategies for handling a variety of objects.',
      features: [
        'Inverse kinematics solver for 6-DOF manipulator',
        'Force/torque sensor integration for delicate object handling',
        'Computer vision-based object pose estimation',
        'Adaptive grasping strategies using machine learning',
        'Real-time trajectory planning and execution',
      ],
      technologies: ['ROS', 'MoveIt', 'C++', 'Python', 'Gazebo', 'OpenCV'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5MzI4NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1657165235722-e50bbac41584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHJvYm90aWNzfGVufDF8fHx8MTc2OTMyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjkyODg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
    {
      id: '3d-reconstruction',
      title: '3D Scene Reconstruction',
      description:
        'Built a system for real-time 3D reconstruction using stereo cameras and point cloud processing for robot navigation.',
      image:
        'https://images.unsplash.com/photo-1657165235722-e50bbac41584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHJvYm90aWNzfGVufDF8fHx8MTc2OTMyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Computer Vision',
      tags: ['PCL', 'OpenCV', 'C++'],
      github: 'https://github.com',
    },
  ];

  const categories: Category[] = ['All', 'Autonomous Systems', 'Computer Vision', 'Manipulation'];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    if (project.hasModal) {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Projects
        </h2>

        {/* Filter Buttons */}
        <div
          ref={filterRef}
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            filterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50 scale-105'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.hasModal ? '#' : project.github}
              target={project.hasModal ? undefined : '_blank'}
              rel={project.hasModal ? undefined : 'noopener noreferrer'}
              onClick={(e) => handleProjectClick(project, e)}
              className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.hasModal ? (
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-400 transition-colors">
                      <span className="text-sm">View Details</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-400 transition-colors">
                      <span className="text-sm">View on Github</span>
                      <span className="group-hover:translate-x-1 transition-transform"><ExternalLink size={18} /></span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
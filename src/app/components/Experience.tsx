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
  overview: string[];
  details?: {
    responsibilities?: string[];
    achievements?: string[];
    technologies?: string[];
    media?: MediaItem[];
  };
}

type MediaItem = {
  type: 'image' | 'youtube';
  url: string;
};

export function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

const experiences: ExperienceData[] = [
  {
    title: 'Robotics Systems & Perception Engineer',
    company: 'Deep Trekker Inc.',
    period: '2023 - Present',
    overview: ['Developing advanced perception and SLAM technologies for underwater robotics.'],
    logo: './src/media/about/DeepTrekker.jpg',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Design optical systems for photography and videography',
        'Develop embedded software for camera control and image processing',
        'Implement real-time image dehazing algorithms',
        'Calibrate stereo camera system',
      ],
      achievements: [
        'Work featured in several YouTube videos and industry publications',
      ],
      technologies: ['ROS', 'Python', 'C++', 'Docker', 'CUDA', 'NiTROS', 'OpenCV', 'NVIDIA Jetson'],
      media: [
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=nMFU32iFgj8' },
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=F8W1ytepens' },
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=jwBjfzmmdms' },
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=EAVMgzmOxUY' },
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=xLSt1IeJsv8' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop' },
      ],
    },
  },
  {
    company: 'Deep Trekker Inc.',
    title: 'Autonomy Systems Engineering Co-op',
    period: 'Jan. 2022 - Aug. 2022',
    overview: ['Prototyped perception and embedded systems for underwater robotics.'],
    logo: './src/media/about/DeepTrekkerOld.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Robotics, Embedded Systems, Controls, Sensor Integration',
        'Investigated Stereo Camera. High-End IMUs, and other Perception technologies',
      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['PCL', 'C++', 'C', 'STM32', ],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop' },
      ],
    },
  },
  {
    company: 'Applied Brain Research',
    title: 'Deep Learning Application Developer',
    period: 'May 2021 - Aug. 2021',
    overview: ['Developed and maintained a cloud service for training low-power Keyword Spotter machine learning models (RNN), deployable on embedded microcontrollers.'],
    logo: './src/media/about/ABR.PNG',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Contributed to a cloud service for training low-power Keyword Spotter machine learning models (RNN), deployable on embedded microcontrollers.',
        'Gained in-depth exposure to TensorFlow ecosystem, model training, and model deployment for edge-AI devices using TFLite',
        'Performed Root-cause analysis to improve accuracy of quantization aware trained ML models in TensorFlow',
        'Created and executed automated unit and integration tests using Python and Pytest. Developed robust code through functional and regression tests',
      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'CUDA', 'PCL'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1593568305252-1b8a33ac4f22?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1554941426-47d681795c3a?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop' },
      ],
    },
  },
  {
    company: 'Applied Brain Research',
    title: 'Backend Developer',
    period: 'Sep. 2020 - Dec. 2020',
    overview: ['Developed Python backend for interactive visualizer of spiking neural networks. Benchmarked performance of several frameworks for low-latency WebSocket communication.'],
    logo: './src/media/about/ABR.PNG',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3Njk1MTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Developed Python backend for browser-based interactive visualizer of spiking neural networks, including their structure and spiking activity',
        'Benchmarked performance of several asynchronous Python web frameworks for low-latency WebSocket usage: Aiohttp, Autobahn, Tornado, Sanic, and Starlette',
        'Prototyped use of Protobuf and Flatbuffer for increasing data transfer throughput',
        'Deployed and secured remote server on Ubuntu-based Digital Ocean droplet.',
        'Created HTML5 client for automatic data collection using VanillaJS, BootStrap',
        'Analyzed benchmarking data using pandas, seaborn, and Jupyter Notebooks. Findings have up to 36% reduction in latency per connection.',

      ],
      achievements: [
        'An achievement',
      ],
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'CUDA', 'PCL'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1593568305252-1b8a33ac4f22?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1554941426-47d681795c3a?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop' },
      ],
    },
  },
  {
    company: 'Deep Trekker Inc.',
    title: 'Fullstack Software Developer',
    period: 'Jan. 2020 – Aug. 2020',
    overview: ['Developed QtQuick GUI Application for Embedded Linux Remote Control used with underwater remotely operated vehicles.'],
    logo: './src/media/about/DeepTrekkerOld.PNG',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTc2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      responsibilities: [
        'Developed QtQuick (C++) GUI Application for Embedded Linux device used to interface with remotely operated underwater vehicles and IoT devices',
        'Implemented user-friendly import of mapping data using GPX file format',
        'Debugged TCP/IP communication issues using tcpdump and Wireshark',
        'Implemented efficient MVC patterns, reducing CPU usage by 23% and page load time by 95%; Created performance-profiling Bash scripts',
        'Implemented ONVIF protocol in Python to communicate with PTZ IP Cameras. ',
        'Interfaced Python and multithreaded C++ applications using UNIX IPC',
      ],
      achievements: [
        'Improved image stabilization performance by 60%',
        'Reduced camera system weight by 25% while maintaining image quality',
        'Developed auto-exposure algorithm that works in extreme lighting conditions',
      ],
      technologies: ['QtQuick', 'C++', 'Python', 'TCP/IP', 'GPX', 'ONVIF', 'UNIX IPC', 'Bash'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop' },
      ],
    },
  },
  {
    company: 'Cynorix - Cyber Security Startup',
    title: 'Cyber Security Software Developer',
    period: 'May 2019 - Aug. 2019',
    overview: ['Developed secure file storage and authentication system for a cybersecurity startup, utilizing AES-256 encryption and MongoDB for data management.'],
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
      technologies: ['MongoDB', 'Express.js', 'Node.js', 'WPF', 'AES-256 Encryption', 'Gulp.js', 'Microsoft Azure'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop' },
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
                  <div className={`flex flex-col md:flex-row gap-18 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-zinc-950 shadow-lg shadow-orange-400/50 z-10"></div>

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
                          {exp.overview.map((item, i) => (
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

import { Code2, Cpu, Cog } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const skills = [
    {
      icon: Cpu,
      title: 'Software Development',
      description: 'Expert in C++, Python, and ROS for robotics applications',
    },
    {
      icon: Cog,
      title: 'Computer Vision',
      description: 'Advanced perception systems using OpenCV and deep learning, SLAM',
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-zinc-900 py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-blue-500/20 rounded-2xl blur-2xl" />
                <ImageWithFallback
                  src="https://avatars.githubusercontent.com/u/23727190?v=4"
                  alt="Abhinav Agrahari"
                  className="relative rounded-2xl w-full object-cover aspect-square"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-zinc-300 leading-relaxed">
              I am a robotics software engineer with a focus on creating intelligent,
              autonomous systems. I specialize in developing robust software solutions that 
              enable robots to perceive, reason, and interact with the world.
              </p>
              
              <p className="text-lg text-zinc-300 leading-relaxed">
                My work spans camera calibration, camera pipelines, and real-time image processing.
                I'm passionate about creating technologies that push the boundaries of what robots can see and do.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                When I'm not working on robots, you'll find me working on DIY projects
                , or taking photos.
              </p>

              {/* Skills Grid */}
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all duration-500"
                >
                  <div className="p-2 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-lg">
                    <skill.icon className="text-blue-400"  size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-1">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

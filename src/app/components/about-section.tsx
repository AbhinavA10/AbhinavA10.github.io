import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen bg-zinc-950 py-24 px-6 md:px-12">
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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <img
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
                With over 8 years of experience in robotics and computer vision, I specialize in 
                developing cutting-edge solutions that bridge the gap between mechanical systems 
                and intelligent visual perception.
              </p>
              
              <p className="text-lg text-zinc-300 leading-relaxed">
                My work spans autonomous navigation systems, advanced camera calibration, 
                real-time image processing, and robotic manipulation. I'm passionate about 
                creating technologies that push the boundaries of what machines can see and do.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                When I'm not working on robots, you'll find me experimenting with drone 
                photography, contributing to open-source computer vision projects, or mentoring 
                the next generation of engineers.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <div className="text-3xl font-bold text-orange-500 mb-1">8+</div>
                  <div className="text-sm text-zinc-400">Years Experience</div>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <div className="text-3xl font-bold text-orange-500 mb-1">50+</div>
                  <div className="text-sm text-zinc-400">Projects Completed</div>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-zinc-400">Publications</div>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <div className="text-3xl font-bold text-orange-500 mb-1">3</div>
                  <div className="text-sm text-zinc-400">Patents</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Experience } from './experience-section';

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-zinc-800 pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800 p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-12 h-12 rounded-lg object-contain bg-white p-2"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{experience.position}</h3>
                    <p className="text-orange-500">{experience.company}</p>
                    <p className="text-sm text-zinc-400">{experience.period}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Role Overview</h4>
                    <p className="text-zinc-300 leading-relaxed">{experience.description}</p>
                  </div>

                  {/* Responsibilities */}
                  {experience.details?.responsibilities && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {experience.details.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-zinc-300 flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {experience.details?.achievements && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.details.achievements.map((item, idx) => (
                          <li key={idx} className="text-zinc-300 flex items-start gap-2">
                            <span className="text-orange-500 mt-1">★</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Images Gallery */}
                  {experience.details?.images && experience.details.images.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Gallery</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {experience.details.images.map((image, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="rounded-lg overflow-hidden"
                          >
                            <img
                              src={image}
                              alt={`${experience.company} ${idx + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {experience.details?.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.details.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

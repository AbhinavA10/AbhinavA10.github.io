import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';


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

interface ExperienceModalProps {
  experience: ExperienceData;
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };

  return (
    <>
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div
          className="relative bg-zinc-900 rounded-lg max-w-6xl w-full border border-zinc-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="top-0 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800 p-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0 ">
              <ImageWithFallback
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-cover"
              />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                <p className="text-orange-400">{experience.company}</p>
                <p className="text-sm text-zinc-400">{experience.period}</p>
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 pt-16">
            
            {/* Long Description */}
            {experience.details?.overview && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Role Overview</h3>
                <p className="text-gray-300 leading-relaxed">{experience.details.overview}</p>
              </div>
            )}

            {/* Key Responsibilities */}
            {(experience.details?.responsibilities || experience.description) && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {(experience.details?.responsibilities || experience.description).map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {experience.details?.achievements && experience.details.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Key Achievements</h3>
                <ul className="space-y-2">
                  {experience.details.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-white">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {experience.details?.technologies && experience.details.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.details.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Media Gallery */}
            {experience.details?.media && experience.details.media.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {experience.details.media.map((mediaUrl, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-lg overflow-hidden aspect-video cursor-zoom-in transition-all"
                      onClick={() => handleImageClick(mediaUrl)}
                    >
                      <ImageWithFallback
                        src={mediaUrl}
                        alt={`${experience.company} image ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

      {/* Image Zoom Modal - Outside main modal for proper fixed positioning */}
      <AnimatePresence>
      {zoomedImage && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] cursor-zoom-out"
          />
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-8 pointer-events-none">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain rounded-lg pointer-events-auto cursor-zoom-out"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-zinc-400 transition-colors pointer-events-auto"
            >
              <X size={32} />
            </button>
          </div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
import { X, MapPin, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExperienceModalProps {
  experience: {
    title: string;
    company: string;
    period: string;
    logo: string;
    image: string;
    description: string[];
    longDescription?: string;
    achievements?: string[];
    technologies?: string[];
    media?: string[];
  };
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
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
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-12 h-12 rounded-lg object-contain bg-white p-2"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                <p className="text-orange-500">{experience.company}</p>
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
            {experience.longDescription && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Role Overview</h3>
                <p className="text-gray-300 leading-relaxed">{experience.longDescription}</p>
              </div>
            )}

            {/* Key Responsibilities */}
            <div className="mb-6">
              <h3 className="text-xl mb-3 text-white">Key Responsibilities</h3>
              <ul className="space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Key Achievements</h3>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
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
            {experience.media && experience.media.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-white">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {experience.media.map((mediaUrl, i) => (
                    <div key={i} className="rounded-lg overflow-hidden aspect-video">
                      <ImageWithFallback
                        src={mediaUrl}
                        alt={`${experience.company} image ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { X, MapPin, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExperienceModalProps {
  experience: {
    title: string;
    company: string;
    location: string;
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
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
          >
            <X size={20} className="text-gray-300" />
          </button>

          {/* Hero Section */}
          <div className="relative">
            <div className="h-48 overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src={experience.image}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>
            
            {/* Company Logo Overlay */}
            <div className="absolute bottom-0 left-8 transform translate-y-1/2">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-zinc-800 border-4 border-zinc-900">
                <ImageWithFallback
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 pt-16">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl mb-2">
                {experience.title}
              </h2>
              <h3 className="text-orange-400 text-2xl mb-4">{experience.company}</h3>
              <div className="flex flex-wrap gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {experience.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {experience.period}
                </div>
              </div>
            </div>

            {/* Long Description */}
            {experience.longDescription && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-orange-400">Role Overview</h3>
                <p className="text-gray-300 leading-relaxed">{experience.longDescription}</p>
              </div>
            )}

            {/* Key Responsibilities */}
            <div className="mb-6">
              <h3 className="text-xl mb-3 text-orange-400">Key Responsibilities</h3>
              <ul className="space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-orange-400">Key Achievements</h3>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-orange-400">Technologies & Tools</h3>
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
                <h3 className="text-xl mb-3 text-orange-400">Gallery</h3>
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
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';

type MediaItem = {
  type: 'image' | 'youtube';
  url: string;
};

type ContentBlock = {
  type: 'text' | 'media';
  content?: string;
  media?: MediaItem;
};

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    longDescription?: string;
    features?: string[];
    technologies?: string[];
    github?: string;
    demo?: string;
    media?: MediaItem[];
    richContent?: ContentBlock[];
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Extract all image URLs for lightbox navigation
  const allImages: string[] = [];
  
  // Collect images from richContent
  if (project.richContent) {
    project.richContent.forEach(block => {
      if (block.type === 'media' && block.media?.type === 'image') {
        allImages.push(block.media.url);
      }
    });
  }
  
  // Collect images from media array
  if (project.media) {
    project.media.forEach(item => {
      if (item.type === 'image') {
        allImages.push(item.url);
      }
    });
  }

  const handleImageClick = (imageUrl: string) => {
    const index = allImages.indexOf(imageUrl);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // Convert various YouTube URL formats to embed format
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div
          className="relative bg-zinc-900 rounded-lg max-w-7xl w-full border border-zinc-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
          >
            <X size={20} className="text-gray-300" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content - Left 2/3 */}
              <div className="md:col-span-2">
                <h2 className="text-3xl text-white md:text-4xl mb-4">{project.title}</h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6">{project.description}</p>

                {/* Rich Content (Blog-style with embedded media) */}
                {project.richContent && project.richContent.length > 0 ? (
                  <div className="space-y-6 mb-6">
                    {project.richContent.map((block, i) => {
                      if (block.type === 'text') {
                        return (
                          <div key={i}>
                            {i === 0 && <h3 className="text-xl mb-3 text-blue-400">Project Overview</h3>}
                            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                              {block.content}
                            </p>
                          </div>
                        );
                      } else if (block.type === 'media' && block.media) {
                        if (block.media.type === 'image') {
                          return (
                            <div key={i} className="my-6">
                              <div
                                className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => handleImageClick(block.media!.url)}
                              >
                                <ImageWithFallback
                                  src={block.media.url}
                                  alt="Project content"
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                            </div>
                          );
                        } else if (block.media.type === 'youtube') {
                          return (
                            <div key={i} className="my-6">
                              <div className="aspect-video rounded-lg overflow-hidden">
                                <iframe
                                  src={getYouTubeEmbedUrl(block.media.url)}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            </div>
                          );
                        }
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <>
                    {/* Long Description */}
                    {project.longDescription && (
                      <div className="mb-6">
                        <h3 className="text-xl mb-3 text-blue-400">Project Overview</h3>
                        <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
                      </div>
                    )}
                  </>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl mb-3 text-blue-400">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Media Grid (only if not using richContent) */}
                {project.media && project.media.length > 0 && !project.richContent && (
                  <div className="mb-6">
                    <h3 className="text-xl mb-3 text-blue-400">Project Media</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {project.media.map((mediaItem, i) => {
                        if (mediaItem.type === 'image') {
                          return (
                            <div
                              key={i}
                              className="rounded-lg overflow-hidden aspect-video cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => handleImageClick(mediaItem.url)}
                            >
                              <ImageWithFallback
                                src={mediaItem.url}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          );
                        } else if (mediaItem.type === 'youtube') {
                          return (
                            <div key={i} className="rounded-lg overflow-hidden aspect-video">
                              <iframe
                                src={getYouTubeEmbedUrl(mediaItem.url)}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Right 1/3 */}
              <div className="md:col-span-1">
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-6 bg-zinc-800/50 p-6 rounded-lg">
                    <h3 className="text-xl mb-3 text-blue-400">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-700 text-gray-300 text-sm rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="space-y-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Lightbox */}
        {lightboxIndex !== null && allImages.length > 0 && (
          <ImageLightbox
            images={allImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </div>
    </div>
  );
}
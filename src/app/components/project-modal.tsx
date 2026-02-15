import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from './projects-section';
import { useState } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!project) return null;

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
              className="bg-zinc-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-zinc-800 pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800 p-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm border border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
                <div className="space-y-6">
                  {/* Overview */}
                  {project.details?.overview && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                      <p className="text-zinc-300 leading-relaxed">{project.details.overview}</p>
                    </div>
                  )}

                  {/* Content blocks - blog post style */}
                  {project.details?.content?.map((block, idx) => (
                    <div key={idx}>
                      {block.type === 'text' && (
                        <div className="space-y-4">
                          {block.heading && (
                            <h4 className="text-lg font-semibold text-white">{block.heading}</h4>
                          )}
                          <p className="text-zinc-300 leading-relaxed">{block.text}</p>
                        </div>
                      )}

                      {block.type === 'image' && block.url && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setZoomedImage(block.url!)}
                          className="rounded-lg overflow-hidden cursor-zoom-in"
                        >
                          <img
                            src={block.url}
                            alt={block.caption || `Project image ${idx}`}
                            className="w-full object-cover"
                          />
                          {block.caption && (
                            <p className="text-sm text-zinc-400 mt-2 text-center">{block.caption}</p>
                          )}
                        </motion.div>
                      )}

                      {block.type === 'youtube' && block.videoId && (
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${block.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {block.caption && (
                            <p className="text-sm text-zinc-400 mt-2 text-center">{block.caption}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Image Gallery (if simple images array is provided) */}
                  {project.details?.images && project.details.images.length > 0 && !project.details.content && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Gallery</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {project.details.images.map((image, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setZoomedImage(image)}
                            className="rounded-lg overflow-hidden cursor-zoom-in"
                          >
                            <img
                              src={image}
                              alt={`${project.title} ${idx + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.details?.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.technologies.map((tech, idx) => (
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

                  {/* Results */}
                  {project.details?.results && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Results & Impact</h4>
                      <ul className="space-y-2">
                        {project.details.results.map((item, idx) => (
                          <li key={idx} className="text-zinc-300 flex items-start gap-2">
                            <span className="text-orange-500 mt-1">★</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Zoom Modal */}
          <AnimatePresence>
            {zoomedImage && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setZoomedImage(null)}
                  className="fixed inset-0 bg-black/95 z-[60] cursor-zoom-out"
                />
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-8 pointer-events-none">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    src={zoomedImage}
                    alt="Zoomed"
                    className="max-w-full max-h-full object-contain rounded-lg pointer-events-auto cursor-zoom-out"
                    onClick={() => setZoomedImage(null)}
                  />
                  <button
                    onClick={() => setZoomedImage(null)}
                    className="absolute top-4 right-4 text-white hover:text-zinc-400 transition-colors pointer-events-auto"
                  >
                    <X size={32} />
                  </button>
                </div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

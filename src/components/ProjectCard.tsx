import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={project.image} alt={project.title} className="w-full h-80 object-cover opacity-70" />
      <motion.div
        className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-red-900 bg-opacity-50 text-white text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

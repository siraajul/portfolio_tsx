import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description:
      "A responsive admin dashboard with dark mode, analytics charts, and inventory management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts and interactive maps.",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "OpenWeather API", "Geolocation", "CSS Modules"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "task-management",
    title: "Task Management Platform",
    description:
      "Collaborative task management tool with real-time updates and drag-and-drop functionality.",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Redux", "Socket.io", "Styled Components"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
];

export default function Projects() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm sm:text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm sm:text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

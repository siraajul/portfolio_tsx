import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = {
  "ecommerce-dashboard": {
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard solution for e-commerce businesses, featuring dark mode support, real-time analytics charts, and complete inventory management capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    links: {
      demo: "https://example.com",
      github: "https://github.com"
    },
    features: [
      "Real-time sales analytics and reporting",
      "Inventory management system",
      "Customer order tracking",
      "Dark mode support",
      "Responsive design for all devices"
    ],
    technologies: [
      "React for the frontend framework",
      "TypeScript for type safety",
      "Tailwind CSS for styling",
      "Chart.js for data visualization",
      "Redux for state management"
    ],
    challenges: [
      "Implementing real-time data updates",
      "Optimizing performance with large datasets",
      "Creating a responsive and intuitive UI"
    ]
  },
  // Add other projects here...
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96 relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <div className="flex gap-4">
                <a 
                  href={project.links.demo}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                <a 
                  href={project.links.github}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">{project.description}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 mb-2">{feature}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
              <ul className="list-disc pl-6 mb-8">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-600 mb-2">{tech}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Challenges & Solutions</h2>
              <ul className="list-disc pl-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-600 mb-2">{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
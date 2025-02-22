import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "Ticket-Sathi",
      description: "Online ticket Management system",
      techStack: ["Next.js", "Tailwindcss", "Node.js", "Typescript", "Express", "GraphQL", "PostgreSQL"],
      features: [
        "Facilitates users in discovering and purchasing event tickets online",
        "Allows organizers to register and post events",
        "Enables administrators to verify organizers",
        "Caching using Redis, event searching, filtering options",
        "Organizer and admin dashboard",
      ],
      githubLink: "#",
      liveLink: null,
    },
    {
      title: "Chat App",
      description: "Real-time chat application",
      techStack: ["Next.js", "Tailwindcss", "Node.js", "Typescript", "Express", "PostgreSQL"],
      features: ["Users can chat with each other", "File sharing functionality", "Group chat creation"],
      githubLink: "#",
      liveLink: null,
    },
    {
      title: "Product Finder",
      description: "Product search and filter application",
      techStack: ["React", "TailwindCss", "React Router", "Javascript"],
      features: ["Display products using fakestore API", "Users can search and filter products"],
      githubLink: "#",
      liveLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900 pattern-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 animate-slideIn text-emerald-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md animate-slideIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-emerald-300">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-gray-700 text-emerald-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-emerald-300">Features:</h4>
                <ul className="list-disc list-inside">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                >
                  <FaGithub size={24} />
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


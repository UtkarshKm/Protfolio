import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects - Utkarsh Kumawat",
  description: "Featured projects by Utkarsh Kumawat, showcasing skills in software development and innovation.",
};

export default function Projects() {
  const projects = [
    {
      title: "Video Streaming App",
      description: "A full-stack video streaming platform built with modern web technologies, featuring user authentication, video upload, and real-time streaming capabilities.",
      link: "https://github.com/utkarshkm",
      linkText: "View on GitHub"
    },
    {
      title: "Task Management System",
      description: "An intuitive task management application with drag-and-drop functionality, team collaboration features, and real-time updates for enhanced productivity.",
      link: "https://github.com/utkarshkm",
      linkText: "View Demo"
    },
    {
      title: "E-Commerce Platform",
      description: "A responsive e-commerce website with shopping cart, payment integration, inventory management, and admin dashboard for complete business operations.",
      link: "https://github.com/utkarshkm",
      linkText: "View on GitHub"
    }
  ];

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#333333] mb-8 text-center">
          Featured Projects
        </h1>
        
        <p className="text-lg text-[#333333] text-center mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that showcase my skills in software 
          development and problem-solving. Each project represents a unique challenge 
          and learning experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              linkText={project.linkText}
            />
          ))}
        </div>
        
        <div className="section-divider"></div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#333333] mb-4">
            Want to see more?
          </h2>
          <p className="text-lg text-[#333333] mb-6">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <a 
            href="https://github.com/utkarshkm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
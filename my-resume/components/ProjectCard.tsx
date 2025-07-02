import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  link, 
  linkText = "View Project" 
}: ProjectCardProps) {
  return (
    <div className="card group">
      <h3 className="text-xl font-semibold text-custom-text mb-3 group-hover:text-custom-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-custom-text mb-4 leading-relaxed">
        {description}
      </p>
      <Link 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-block"
      >
        {linkText}
      </Link>
    </div>
  );
}
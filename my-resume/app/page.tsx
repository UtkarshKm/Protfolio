export const metadata = {
  title: "Utkarsh Devi - Home",
  description: "Computer Science student from Jaipur, passionate about problem-solving and software development.",
};

export default function Home() {
  return (
    <div className="page-container">
      <section className="text-center">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-custom-text mb-6 leading-tight">
            Utkarsh Devi
          </h1>
          
          <p className="text-xl md:text-2xl text-custom-accent font-semibold mb-8">
            Logical Minded // Creative at Heart
          </p>
          
          <p className="text-lg md:text-xl text-custom-text leading-relaxed max-w-2xl mx-auto">
            Computer Science student passionate about building innovative solutions 
            and exploring the intersection of technology and creativity.
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/about" 
            className="btn-primary"
          >
            Learn More About Me
          </a>
          <a 
            href="/projects" 
            className="bg-white border-2 border-custom-accent text-custom-accent hover:bg-custom-accent hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            View My Projects
          </a>
        </div>
      </section>
    </div>
  );
}

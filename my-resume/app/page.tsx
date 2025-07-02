import { motion } from "framer-motion";

export const metadata = {
  title: "Utkarsh Kumawat - Home",
  description: "Computer Science student from Jaipur, passionate about problem-solving and software development.",
};

export default function Home() {
  return (
    <div className="page-container">
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-6 leading-tight">
            Utkarsh Kumawat
          </h1>
          
          <p className="text-xl md:text-2xl text-[#D96C6C] font-semibold mb-8">
            Logical Minded // Creative at Heart
          </p>
          
          <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl mx-auto">
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
            className="bg-white border-2 border-[#D96C6C] text-[#D96C6C] hover:bg-[#D96C6C] hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            View My Projects
          </a>
        </div>
      </motion.section>
    </div>
  );
}

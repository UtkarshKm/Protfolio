import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Profile & Contact - Utkarsh Kumawat",
  description: "Connect with Utkarsh Kumawat through various social platforms and professional networks.",
};

export default function Profile() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/UtkarshKm",
      icon: "🐙",
      description: "Check out my code repositories and open source contributions"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/utkarshkm/",
      icon: "💼",
      description: "Connect with me professionally and view my career journey"
    },
    {
      name: "Resume PDF",
      url: "/resume.pdf",
      icon: "📄",
      description: "Download my complete resume in PDF format"
    },
    {
      name: "Email",
      url: "mailto:utkarshkumawat2003@gmail.com",
      icon: "✉️",
      description: "Send me an email for collaboration opportunities"
    }
  ];

  return (
    <div className="page-container">
      <Reveal className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#333333] mb-8">
          Connect With Me
        </h1>
        
        <p className="text-lg text-[#333333] mb-12 leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborating on projects, 
          or simply connecting with fellow developers and tech enthusiasts.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name === "Email" ? "_self" : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              className="card group text-left hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl">{link.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] group-hover:text-[#D96C6C] transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-[#333333] mt-2 text-sm leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="section-divider"></div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-[#333333] mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg text-[#333333] mb-6 leading-relaxed">
            Whether you have a project idea, want to collaborate, or just want to chat 
            about technology, I&apos;d love to hear from you. Feel free to reach out through 
            any of the platforms above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:utkarshkumawat2003@gmail.com"
              className="btn-primary"
            >
              Get In Touch
            </a>
            <a 
              href="https://github.com/UtkarshKm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-[#D96C6C] text-[#D96C6C] hover:bg-[#D96C6C] hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
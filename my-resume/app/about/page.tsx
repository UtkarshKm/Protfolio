import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Me - Utkarsh Kumawat",
  description: "Learn more about Utkarsh Kumawat, a Computer Science student from Jaipur passionate about problem-solving and software development.",
};

export default function About() {
  return (
    <div className="page-container">
      <Reveal className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#333333] mb-8 text-center">
          About Me
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#333333] leading-relaxed mb-6">
            I&apos;m a Computer Science student from Jaipur, passionate about problem-solving 
            and software development. I thrive on building real-world projects that make 
            a difference and solve meaningful challenges.
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-6">
            My journey in technology is driven by continuous learning and exploration of 
            new technologies. I believe in the power of code to transform ideas into 
            reality and enjoy sharing knowledge with the community.
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, 
            contributing to open-source projects, or working on personal projects 
            that challenge me to grow as a developer.
          </p>
        </div>

        <div className="section-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#333333] mb-4">
              Skills & Interests
            </h2>
            <ul className="space-y-2 text-[#333333]">
              <li>• Software Development</li>
              <li>• Problem Solving</li>
              <li>• Web Technologies</li>
              <li>• Open Source Contribution</li>
              <li>• Continuous Learning</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#333333] mb-4">
              Education
            </h2>
            <div className="text-[#333333]">
              <h3 className="font-semibold">Computer Science</h3>
              <p className="text-[#D96C6C]">Student • Jaipur</p>
              <p className="mt-2">
                Focusing on software development, algorithms, and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
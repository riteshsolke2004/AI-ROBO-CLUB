import ScrollReveal from "@/components/ScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";
import teamPhotoImage from "@/assets/team-photo.jpg";

// 1. Import your team member images here
import teamAditya from '@/assets/team-aditya.jpg'; // Replace with your actual image files
import teamSneha from '@/assets/team-sneha.jpg';
import teamPrasad from '@/assets/team-prasad.jpg';
import teamRitesh from '@/assets/team-ritesh.jpg';
import teamVirendra from '@/assets/team-virendra.jpg';
import teamNilesh from '@/assets/team-nilesh.jpg';
import teamPratik from '@/assets/team-pratik.jpg';
import teamAshwin from '@/assets/team-ashwin.jpg';


const teamMembers = [
  {
    name: "Aditya Jadhav",
    role: "AI Robo Club Lead",
    bio: "Specializing in Machine learning, deep learning and neural networks with 2+ years in AI research.",
    imageUrl: teamAditya, // 2. Use the imported image
    github: "https://github.com/AdityaJ87",
    linkedin: "https://www.linkedin.com/in/aditya-jadhav87/",
    email: "mailto:adityajadhav18052004@gmail.com",
    skills: ["Deep Learning", "Computer Vision", "Research"],
  },
  {
    name: "Sneha Jadhav",
    role: "AI Robo Club Co-lead",
    bio: "Expert in machine learning and robotic control with a passion for innovation.",
    imageUrl: teamSneha,
    github: "http://github.com/sneharameshjadhav-22",
    linkedin: "http://linkedin.com/in/sneha-jadhav-920724293",
    email: "mailto:sneharameshjadhav22@gmail.com",
    skills: ["Data Analyst", "Research"],
  },
  {
    name: "Prasad Dhokane",
    role: "Management Lead ",
    bio: "Expert in Data Analyst and Machine Learning.",
    imageUrl: teamPrasad,
    github: "https://github.com/prasad12379",
    linkedin: "https://www.linkedin.com/in/prasad-dhokane-58487728a/",
    email: "mailto:dhokaneprasad6@gmail.com",
    skills: ["Machine Learning", "Deep learning", "AI Integration"],
  },
  {
    name: "Ritesh Solke",
    role: "Web Developer",
    bio: "Full Stack & AI/ML enthusiast Passionate about building smart tech solutions and exploring innovation.",
    imageUrl: teamRitesh,
    github: "https://github.com/riteshsolke2004",
    linkedin: "https://www.linkedin.com/in/riteshsolke/",
    email: "mailto:riteshsolke12@gmail.com",
    skills: ["Full-Stack Developer", "AI integration"],
  },
  {
    name: "Virendrasinh Patil",
    role: "Gen AI Scientist ",
    bio: "Expert in ML, DL ,Lang-Chain, LLM and Transformers.",
    imageUrl: teamVirendra,
    github: "https://github.com/Virendra010",
    linkedin: "https://www.linkedin.com/in/virendrasinh-patil-476087317/",
    email: "mailto:patilvirendrasinh1000@gmail.com",
    skills: ["Machine Learning", "Deep learning", "Gen AI"],
  },
  {
    name: "Nilesh Dhole",
    role: "Gen Ai Scientist",
    bio: "Expert in machine learning, DL, Lang-Chain, LLM and Transformers. with a passion for innovation.",
    imageUrl: teamNilesh,
    github: "https://github.com/NileshDhole-03",
    linkedin: "https://www.linkedin.com/in/nilesh0309/",
    email: "mailto:nileshdhole3906@gmail.com",
    skills: ["Data Analyst", "Research", "Gen AI"],
  },
  {
    name: "Pratik Harke",
    role: "Cyber Security",
    bio: "Expert in Ethical Hacking and Cyber Security.",
    imageUrl: teamPratik,
    github: "https://github.com/PratikHarke ",
    linkedin: "https://www.linkedin.com/in/pratik-harke-b60782293/",
    email: "mailto:insanepratik09@gmail.com",
    skills: ["Cyber Security","Ko-sint","Bash Scripting"],
  },
  {
    name: "Ashwin Patil",
    role: "Web Developer",
    bio: "Full-stack developer focused on AI integration and scalable system design",
    imageUrl: teamAshwin,
    github: "https://github.com/ashwinpatil-a",
    linkedin: "https://www.linkedin.com/in/ashwin-patil01/",
    email: "mailto:ashwinpatil1805@gmail.com",
    skills: ["Full-Stack Developer", "AI integration"],
  },
];

const stats = [
  { label: "Active Members", value: "30+" },
  { label: "Projects Completed", value: "25" },
  { label: "Research Papers", value: "12" },
  { label: "Innovation Awards", value: "8" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={teamPhotoImage}
          alt="Team working"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-hologram">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of passionate innovators, researchers, and engineers
            united by our shared vision of advancing AI and robotics for the
            betterment of humanity.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-hologram transition-colors mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={member.name}
              animation="zoomIn"
              delay={index * 0.2}
              className="group"
            >
              <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-hologram transition-all duration-500 hover:scale-105 hover:border-primary/50">
                <div className="mb-4">
                   {/* 3. Replaced emoji div with img tag */}
                  <img 
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary transition-colors"
                  />
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-hologram font-medium mb-3">
                    {member.role}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/20 rounded-lg transition-colors group/icon"
                    >
                      <Github className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/20 rounded-lg transition-colors group/icon"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="p-2 hover:bg-primary/20 rounded-lg transition-colors group/icon"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal animation="fadeUp" delay={0.8} className="text-center">
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to <span className="text-primary">Join Our Team?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our
              vision. Whether you're a researcher, engineer, designer, or
              enthusiast, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-glow text-background rounded-lg font-medium hover:scale-105 transition-transform shadow-glow hover:shadow-hologram">
                <a
                  href="#join"
                  className="hover:text-primary transition-colors"
                >
                  Apply Now
                </a>
              </button>
              <button className="px-6 py-3 border border-hologram text-hologram rounded-lg font-medium hover:bg-hologram/10 hover:scale-105 transition-all">
                <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
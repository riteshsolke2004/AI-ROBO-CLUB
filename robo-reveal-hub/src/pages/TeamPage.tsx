import TeamSection from "@/components/sections/TeamSection";
import ParticleBackground from "@/components/ParticleBackground";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="text-primary">AI</span> Robotics Club
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/#mission" className="hover:text-primary transition-colors">Mission</a>
              <a href="/#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="/#mentors" className="hover:text-primary transition-colors">Mentors</a>
              <a href="/team" className="hover:text-primary transition-colors font-bold">Team</a>
              <a href="/#join" className="hover:text-primary transition-colors">Join</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Add some padding to push content below the fixed navbar */}
      <div className="pt-24">
        <TeamSection />
      </div>
      
      {/* You can add your footer here as well if you like */}
    </div>
  );
};

export default TeamPage;
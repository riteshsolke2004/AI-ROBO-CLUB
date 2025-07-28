import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleBackground from '@/components/ParticleBackground'
import HeroSection from '@/components/sections/HeroSection'
import MissionSection from '@/components/sections/MissionSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import MentorSection from '@/components/sections/MentorSection'
import TeamSection from '@/components/sections/TeamSection'
import JoinSection from '@/components/sections/JoinSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import AlumniSection from '@/components/sections/AlumniSection'
import GallerySection from '@/components/sections/GallerySection'

gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger)
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">AI</span> Robotics Club
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-primary transition-colors">Home</a>
              <a href="#mission" className="hover:text-primary transition-colors">Mission</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#mentors" className="hover:text-primary transition-colors">Mentors</a>
              <a href="#team" className="hover:text-primary transition-colors">Team</a>
              <a href="#resources" className="hover:text-primary transition-colors">Resources</a>
              <a href="#alumni" className="hover:text-primary transition-colors">Alumni</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#join" className="hover:text-primary transition-colors">Join</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>
      <MissionSection />
      <ProjectsSection />
      <MentorSection />
      <TeamSection limit={8} />
      <ResourcesSection />
      <AlumniSection />
      <GallerySection />
      <JoinSection />
      
      {/* Footer */}
      <footer className="relative z-10 bg-gradient-card backdrop-blur-sm border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* --- Footer Grid Updated --- */}
          <div className="grid md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">AI</span> Robotics Club
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Building the future through artificial intelligence and robotics innovation. 
                Join our community of passionate creators and researchers.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  📧
                </button>
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  🐙
                </button>
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  💼
                </button>
              </div>
            </div>
            
            {/* --- Quick Links List 1 --- */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#mission" className="hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#mentors" className="hover:text-primary transition-colors">Mentors</a></li>
                <li><a href="/team" className="hover:text-primary transition-colors">Team</a></li>
              </ul>
            </div>

            {/* --- Quick Links List 2 --- */}
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#resources" className="hover:text-primary transition-colors">Resources</a></li>
                <li><a href="#alumni" className="hover:text-primary transition-colors">Alumni</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#join" className="hover:text-primary transition-colors">Join Us</a></li>
              </ul>
            </div>
            
            {/* --- Contact Info --- */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href = "mailto:ai.club.jscoe@gmail.com">ai.club.jscoe@gmail.com</a></li>
                <li>JSPM'S JSCOE Hadapsar</li>
                <li>Pune, 411028</li>
                <li>+91 98507 11406</li>
                <li>+91 87999 93086</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>2025 &copy;  AI Robotics Club. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
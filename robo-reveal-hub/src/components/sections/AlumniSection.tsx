import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

// 1. Import your alumni images here
import alumniAmar from '@/assets/alumni-amar.jpg'; // Replace with your actual image file
import alumniAditya from '@/assets/alumni-aditya.jpg'; // Replace with your actual image file

const alumni = [
  {
    name: 'Amar Jejurkar',
    imageUrl: alumniAmar, // 2. Use the imported image
    graduationYear: 2023,
    clubRole: 'Lead',
    currentRole: 'Mastercard',
    linkedin: 'https://www.linkedin.com/in/amarnath-jejurkar-b81137205/',
    github: '#',
    email: 'mailto:john.doe@example.com',
  },
  {
    name: 'Aditya Mansuk',
    imageUrl: alumniAditya, // 2. Use the imported image
    graduationYear: 2023,
    clubRole: 'Co-lead',
    currentRole: 'TCS Digital',
    linkedin: 'https://www.linkedin.com/in/aditya-mansuk-9a79a720a/',
    github: '#',
    email: 'mailto:jane.smith@example.com',
  }
];

export default function AlumniSection() {
  return (
    <section id="alumni" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-glow bg-clip-text text-transparent">Alumni</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the achievements of our past members who continue to make an impact in the world of AI and robotics.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <ScrollReveal key={index} animation="zoomIn" delay={index * 0.2}>
              <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
                <img src={alum.imageUrl} alt={alum.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold">{alum.name}</h3>
                <p className="text-sm text-muted-foreground">{alum.graduationYear}</p>
                <p className="text-primary font-semibold">{alum.clubRole}</p>
                <p className="mt-2">{alum.currentRole}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={alum.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                  <a href={alum.github} target="_blank" rel="noopener noreferrer"><Github /></a>
                  <a href={alum.email}><Mail /></a>
                </div>
                <Button asChild className="mt-4">
                  <a href={alum.linkedin} target="_blank" rel="noopener noreferrer">Connect</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import ScrollReveal from '@/components/ScrollReveal'
import { Brain, Cpu, Lightbulb, Users } from 'lucide-react'
import neuralNetworkImage from '@/assets/neural-network.jpg'

const missions = [
  {
    icon: Brain,
    title: 'Advance AI Research',
    description: 'Pushing the boundaries of artificial intelligence through collaborative research and innovation.'
  },
  {
    icon: Cpu,
    title: 'Build Smart Robots',
    description: 'Creating autonomous systems that can understand, learn, and interact with the world around them.'
  },
  {
    icon: Users,
    title: 'Foster Community',
    description: 'Building a diverse community of passionate minds working together towards a common goal.'
  },
  {
    icon: Lightbulb,
    title: 'Inspire Innovation',
    description: 'Encouraging creative thinking and breakthrough solutions to real-world challenges.'
  }
]

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={neuralNetworkImage} 
          alt="Neural Network" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Vision & Mission</span>
          </h2>
          {/* --- Updated Vision and Mission Text --- */}
          <div className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <p className="font-bold text-primary mb-4">Vision</p>
            <p className="mb-6">
              To emerge as a center of excellence in AI Robotics by fostering innovation, interdisciplinary learning, and industry-relevant skills to solve real-world problems.
            </p>
            <p className="font-bold text-primary mb-4">Mission</p>
            <p>
              To encourage research, innovation, intellectual learning and collaboration through quality projects by hands-on learning.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <ScrollReveal 
              key={mission.title}
              animation="fadeUp"
              delay={index * 0.2}
              className="group"
            >
              <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/50">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <mission.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground">
                  {mission.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="zoomIn" delay={0.8} className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-center mb-6">
              "The future belongs to those who understand that artificial intelligence is not about 
              replacing humans, but about amplifying human potential."
            </blockquote>
            <cite className="text-primary font-semibold">— AI Robotics Club Philosophy</cite>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
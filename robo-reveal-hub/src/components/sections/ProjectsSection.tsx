import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Play } from 'lucide-react'
import roboticsLabImage from '@/assets/robotics-lab.jpg'
import aiHeroImage from '@/assets/ai-hero.jpg'

const projects = [
  {
    title: 'Smart Attendance System',
    description: 'The Smart Attendance System is an AI-powered application that automates attendance marking using real-time face recognition through webcams and mobile cameras. It is designed for educational institutions and organizations to ensure accurate, contactless, and tamper-proof attendance logging.',
    image: aiHeroImage,
    tags: ['OpenCV', 'Face Recognization', 'Real-time Processing'],
    status: 'Currently Working',
    featured: true,
    learnMoreLink: 'https://en.wikipedia.org/wiki/Attendance' // Added link
  },
  {
    title: 'Sentiment Analysis',
    description: 'The Sentiment Analysis project is an AI-powered system that automatically detects the emotional tone behind text data. It classifies input text (such as product reviews, social media comments, or customer feedback) into categories like positive, negative, or neutral using Natural Language Processing (NLP) techniques.',
    image: roboticsLabImage,
    tags: ['Data Scraping', 'LLM', 'Transformer'],
    status: 'Currently Working',
    featured: true,
    learnMoreLink: 'https://en.wikipedia.org/wiki/Sentiment_analysis' // Added link
  },
  {
    title: 'Computer Vision Robotic Arm',
    description: 'An intelligent robotic arm that uses a camera and AI to detect objects and perform tasks like picking and placing based on real-time image processing.',
    image: aiHeroImage,
    tags: ['Robotics', 'Kinematics', 'Control Systems'],
    status: 'Completed',
    featured: false,
    learnMoreLink: 'https://en.wikipedia.org/wiki/Robotic_arm' // Added link
  },
  {
    title: 'Smart Home Automation',
    description: 'This Smart Home Automation project delivers convenience, energy efficiency, remote control, and improved accessibility by automating household devices, controllable via voice commands and mobile apps.',
    image: roboticsLabImage,
    tags: ['Robotics', 'Kinematics', 'Control Systems'],
    status: 'Completed',
    featured: false,
    learnMoreLink: '' // Added link
  },
    {
    title: 'Smart Irrigation System',
    description: 'This "Smart Irrigation System" project automates watering based on environmental factors, controllable via a mobile app. It aims to optimize water usage for agricultural or garden applications, utilizing sensors and a control system.',
    image: roboticsLabImage,
    tags: ['Smart Irrigation', 'IOT', 'AgriTech'],
    status: 'Completed',
    featured: false,
    learnMoreLink: 'https://en.wikipedia.org/wiki/Irrigation' // Added link
  },
  {
    title: 'Rover Robot',
    description: 'This "Rover Robot" project develops versatile robots for scientific research, data collection, and solving real-world problems. Its applicable in diverse fields like search and rescue, agriculture, warehouse automation, and security.',
    image: roboticsLabImage,
    tags: ['Robotics', 'Mobile App', 'Embedded Systems'],
    status: 'Completed',
    featured: false,
    learnMoreLink: '/projects/robotic-arm-controller-3' // Added link
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our cutting-edge projects that are shaping the future of AI and robotics. 
            From autonomous systems to intelligent interfaces, we're building tomorrow's technology today.
          </p>
        </ScrollReveal>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <ScrollReveal 
              key={project.title}
              animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
              delay={index * 0.3}
              className="group"
            >
              <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-hologram transition-all duration-500 hover:scale-[1.02] hover:border-primary/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active Development' ? 'bg-primary text-primary-foreground' :
                      project.status === 'Beta Testing' ? 'bg-cyber-mint text-background' :
                      project.status === 'Research Phase' ? 'bg-hologram text-background' :
                      'bg-secondary text-secondary-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button variant="cyber" size="sm" className="group/btn">
                      <Play className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                    <a href={project.learnMoreLink}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Details
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Other Projects Grid */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <h3 className="text-2xl font-bold text-center mb-8">
            More <span className="text-hologram">Innovations</span>
          </h3>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <ScrollReveal 
              key={project.title}
              animation="zoomIn"
              delay={0.8 + index * 0.2}
              className="group"
            >
              <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-cyber-mint text-background' :
                    'bg-hologram text-background'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <a href={project.learnMoreLink} className="flex-1">
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="fadeUp" delay={1.2} className="text-center mt-12">
          <Button variant="neural" size="lg">
            <a href="#projects" className="hover:text-primary transition-colors">View All Projects</a>
            <ExternalLink className="h-5 w-5 ml-2" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
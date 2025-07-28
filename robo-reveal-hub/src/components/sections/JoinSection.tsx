import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Rocket, Users, ArrowRight } from 'lucide-react'



const benefits = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work alongside brilliant minds in an inclusive, supportive community.'
  },
  {
    icon: Rocket,
    title: 'Cutting-edge Projects',
    description: 'Contribute to groundbreaking AI and robotics research and development.'
  },
  {
    icon: MessageSquare,
    title: 'Knowledge Sharing',
    description: 'Regular workshops, seminars, and mentorship opportunities.'
  },
  {
    icon: Mail,
    title: 'Industry Connections',
    description: 'Network with professionals and access exclusive career opportunities.'
  }
]

export default function JoinSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch("http://localhost:8000/join/join-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      alert("Form submitted successfully!")
      setFormData({ name: "", email: "", experience: "", message: "" })
    } else {
      const result = await response.json()
      alert("Submission failed: " + result.detail)
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    alert("Server error. Please try again later.")
  }
}


  return (
    <section id="join" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 neural-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-glow bg-clip-text text-transparent">Join</span> the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of something extraordinary? Join our community of innovators 
            and help shape the future of AI and robotics.
          </p>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div className="space-y-8">
            <ScrollReveal animation="slideLeft" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">
                Why Join <span className="text-primary">AI Robotics Club?</span>
              </h3>
            </ScrollReveal>
            
            {benefits.map((benefit, index) => (
              <ScrollReveal 
                key={benefit.title}
                animation="slideLeft"
                delay={0.4 + index * 0.1}
                className="group"
              >
                <div className="flex gap-4 p-6 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            {/* <ScrollReveal animation="slideLeft" delay={0.8}>
              <div className="bg-gradient-card backdrop-blur-sm border border-hologram/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-hologram">
                  🚀 Special Launch Event
                </h4>
                <p className="text-muted-foreground mb-4">
                  Join us for our upcoming AI Innovation Showcase where members will present 
                  their latest projects and research findings.
                </p>
                <Button variant="hologram" size="sm">
                  <a href="#join" className="hover:text-primary transition-colors">Reserve Your Spot</a>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal> */}
          </div>
          
          {/* Application Form */}
          <ScrollReveal animation="slideRight" delay={0.3}>
            <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-hologram transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Apply to <span className="text-hologram">Join Us</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experience Level
                  </label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary transition-colors text-foreground"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about yourself
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What interests you about AI and robotics? What would you like to contribute?"
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" variant="neural" size="lg" className="w-full group">
                  Submit Application
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or connect with us directly:
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Discord
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import HeroCarousel3D from '@/components/HeroCarousel3D'
import { ChevronDown, Sparkles, Zap } from 'lucide-react'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const chevronRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8')
    .from(buttonsRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.6')
    .from(chevronRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')

    gsap.to(chevronRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('mission')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Carousel Background */}
      {/* Increased opacity for more visibility */}
      <div className="absolute inset-0 z-0 opacity-80">
        <HeroCarousel3D />
      </div>

      {/* Background overlay */}
      {/* Reduced opacity to make it more transparent */}
      <div className="absolute inset-0 bg-background/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold leading-tight"
            data-text="AI Robotics Club"
          >
            <span className="glitch-text" data-text="AI">AI</span>{' '}
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              Robotics
            </span>
            <br />
            <span className="text-primary">Club</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Where artificial intelligence meets innovation. Join us in building the future, 
            one intelligent robot at a time.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neural" size="lg" className="group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Join Our Mission
            </Button>
            <Button variant="hologram" size="lg" className="group">
              <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        ref={chevronRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToNext}
      >
        <ChevronDown className="h-8 w-8 text-primary animate-bounce hover:text-hologram transition-colors" />
      </div>
    </section>
  )
}
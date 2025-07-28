import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'parallax'
  delay?: number
  duration?: number
  trigger?: string
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  trigger
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial state based on animation type
    const initialState: gsap.TweenVars = {}
    const animationState: gsap.TweenVars = {}

    switch (animation) {
      case 'fadeUp':
        initialState.y = 60
        initialState.opacity = 0
        animationState.y = 0
        animationState.opacity = 1
        break
      case 'fadeIn':
        initialState.opacity = 0
        animationState.opacity = 1
        break
      case 'slideLeft':
        initialState.x = -100
        initialState.opacity = 0
        animationState.x = 0
        animationState.opacity = 1
        break
      case 'slideRight':
        initialState.x = 100
        initialState.opacity = 0
        animationState.x = 0
        animationState.opacity = 1
        break
      case 'zoomIn':
        initialState.scale = 0.8
        initialState.opacity = 0
        animationState.scale = 1
        animationState.opacity = 1
        break
      case 'parallax':
        initialState.y = -50
        animationState.y = 50
        break
    }

    // Set initial state
    gsap.set(element, initialState)

    // Create scroll trigger animation
    gsap.to(element, {
      ...animationState,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        end: animation === 'parallax' ? 'bottom top' : undefined,
        scrub: animation === 'parallax' ? 2 : false,
        toggleActions: animation === 'parallax' ? undefined : 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, delay, duration, trigger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

// Import all your static images
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import image7 from '@/assets/image7.jpg';
import image8 from '@/assets/image8.jpg';
import image9 from '@/assets/image9.jpg';
import image10 from '@/assets/image10.jpg';
import image11 from '@/assets/image11.jpg';
import image12 from '@/assets/image12.jpg';
//Add more imports as needed

export default function GallerySection() {
  // Static images array - replace with your actual images
  const [images] = useState([
    { src: image1, alt: 'Project Demo 1', title: 'Cadius Startup' },
    { src: image2, alt: 'Workshop Session', title: 'Avishkar Competition' },
    { src: image3, alt: 'Team Meeting', title: 'Cadius Discussion' },
    { src: image4, alt: 'Coding Session', title: 'Induction Program' },
    { src: image5, alt: 'Presentation', title: '' },
    { src: image6, alt: 'Club Event', title: 'AI CLUB Interview' },
    { src: image7, alt: 'Club Event', title: 'MIT HACKATHON FINALIST TEAM 1 ' },
    { src: image8, alt: 'Club Event', title: 'KURUKSHETRA MIT HACKATHON' },
    { src: image9, alt: 'Club Event', title: 'KURUKSHETRA MIT HACKATHON' },
    { src: image10, alt: 'Club Event', title: 'MIT HACKATHON FINALIST TEAM 2' },
    { src: image11, alt: 'Club Event', title: 'PHN INDUSTRIAL VISIT' },
    { src: image12, alt: 'Club Event', title: 'PHN INDUSTRIAL VISIT' },
    
   // Add more image objects as needed
  ]);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-glow bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our club's activities, projects, and events.
          </p>
        </ScrollReveal>

        {/* Static Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <ScrollReveal key={index} animation="zoomIn" delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null); // State to hold the selected file

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:8000/gallery/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]); // Store the selected file
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file && title) {
      const formData = new FormData(); // Use FormData for file uploads
      formData.append('title', title);
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:8000/gallery/add-image', {
          method: 'POST',
          body: formData, // Send FormData instead of JSON
        });

        if (response.ok) {
          const newImage = await response.json();
          setImages(prev => [
            { src: newImage.data.imageUrl, alt: newImage.data.title, title: newImage.data.title },
            ...prev
          ]);
          setTitle('');
          setFile(null);
          setOpen(false);
        } else {
          console.error("Failed to add image");
        }
      } catch (error) {
        console.error("Error submitting image:", error);
      }
    }
  };

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

        <div className="text-right mb-8">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="neural" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Image</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">Image Title</label>
                  <Input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium mb-1">Image File</label>
                  {/* Changed input type to "file" */}
                  <Input id="file" name="file" type="file" onChange={handleFileChange} required />
                </div>
                <Button type="submit">Add to Gallery</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <ScrollReveal key={index} animation="zoomIn" delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110" />
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
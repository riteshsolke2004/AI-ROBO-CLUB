import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

const resources = [
  {
    title: 'A Survey of Deep Learning for Scientific Discovery',
    link: 'https://example.com/paper1',
    category: 'Research Papers',
  },
  {
    title: 'Robotics: Modelling, Planning and Control',
    link: 'https://example.com/doc1',
    category: 'Documentation',
  },
  {
    title: 'Awesome Robotics Libraries',
    link: 'https://example.com/link1',
    category: 'Helpful Links',
  },
];

export default function ResourcesSection() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    category: 'Research Papers',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // for example, by sending the data to a server.
    console.log('New Resource:', formData);
    setOpen(false); // Close the modal on submit
  };

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-glow bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of research papers, documentation, and helpful links for our club members.
          </p>
        </ScrollReveal>

        <div className="text-right mb-8">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="neural" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Add Resource
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Resource</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
                  <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
                </div>
                <div>
                  <label htmlFor="link" className="block text-sm font-medium mb-1">Link</label>
                  <Input id="link" name="link" type="url" value={formData.link} onChange={handleInputChange} required />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                  <select id="category" name="category" value={formData.category} onChange={handleInputChange} className="w-full p-2 border rounded">
                    <option>Research Papers</option>
                    <option>Documentation</option>
                    <option>Helpful Links</option>
                  </select>
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-8">
          {['Research Papers', 'Documentation', 'Helpful Links'].map(category => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-4 text-primary">{category}</h3>
              <div className="grid gap-4">
                {resources.filter(r => r.category === category).map(resource => (
                  <a href={resource.link} key={resource.title} target="_blank" rel="noopener noreferrer" className="block p-4 border rounded-lg hover:bg-white/10">
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
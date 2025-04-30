
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email content
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open mailto link
      window.location.href = `mailto:aswinraaj.ps@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success message
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again or contact directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Function to directly email without the form
  const handleDirectEmail = () => {
    window.location.href = `mailto:aswinraaj.ps@gmail.com`;
    toast({
      title: "Email client opened!",
      description: "You can now send your message directly.",
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="heading-xl text-center">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a project in mind or want to explore collaboration opportunities? 
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 card-hover">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="How can I help you?" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md" disabled={isSubmitting}>
                  {isSubmitting ? 'Opening Mail App...' : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="card-hover transition-transform duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:aswinraaj.ps@gmail.com" 
                    className="text-muted-foreground hover:text-brand transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDirectEmail();
                    }}
                  >
                    aswinraaj.ps@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover transition-transform duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a 
                    href="tel:+919566875400" 
                    className="text-muted-foreground hover:text-brand transition-colors"
                  >
                    +91 95668 75400
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover transition-transform duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Chennai, India
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-center space-x-6">
              <a 
                href="https://github.com/aswin-codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-brand transition-colors hover:scale-110 inline-block transform"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/aswin-raaj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-brand transition-colors hover:scale-110 inline-block transform"
              >
                LinkedIn
              </a>
              <a 
                href="https://aswincode.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-brand transition-colors hover:scale-110 inline-block transform"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

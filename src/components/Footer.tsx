
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section id="contact" className="bg-dark-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, and collaborations in AI and Data Science.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-highlight-purple mr-3" size={20} />
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
                  rushichavda@example.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-highlight-blue mr-3" size={20} />
                <span className="text-gray-300">+91 9XXXXXXXXX</span>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-highlight-green mr-3 mt-1" size={20} />
                <span className="text-gray-300">
                  Indian Institute of Technology Bombay,<br />
                  Powai, Mumbai,<br />
                  Maharashtra, India
                </span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-highlight-blue to-highlight-purple hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Rushi Chavda. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

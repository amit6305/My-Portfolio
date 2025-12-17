import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Calendar, MapPin, Coffee } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--cyan)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Build Something</span>
            <br />
            <span>Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life 
            with cutting-edge technology and thoughtful design.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quick connect */}
          <div className="glass-card p-8 rounded-lg animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Quick Connect</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Ready to start a conversation? Reach out through your preferred channel.
            </p>
            
            <div className="space-y-3">
              <Button variant="cyber" className="w-full justify-start" asChild>
                <a href="mailto:amitsingh12612@gmail.com">
                  <Mail className="mr-3 w-4 h-4" />
                  amitsingh12612@gmail.com
                </a>
              </Button>
              
              <Button variant="terminal" className="w-full justify-start" asChild>
                <a href="tel:+918804337188">
                  <Calendar className="mr-3 w-4 h-4" />
                  +91 8804337188
                </a>
              </Button>
            </div>
          </div>

          {/* Location & availability */}
          <div className="glass-card p-8 rounded-lg animate-fadeIn" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-secondary">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Location & Status</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for internships & projects</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">SMIT, Sikkim (Remote friendly)</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Coffee className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">B.Tech CSE (2022-2026)</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-border/50">
              <p className="text-sm text-center font-mono text-green-400">
                $ cat certifications.txt
              </p>
              <p className="text-sm text-center text-muted-foreground mt-1">
                IBM ML | Meta JS | Google Cybersecurity
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-lg animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a startup MVP, enterprise solution, or just an idea you want to explore.
            </p>
            <Button variant="gradient" size="lg" className="group">
              <Mail className="mr-2 group-hover:animate-pulse" />
              Let's Talk
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/20 text-center">
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-red-400">♥</span> using React, TypeScript & Tailwind CSS
        </p>
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          © 2025 Amit Kumar. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
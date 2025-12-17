import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "console.log('Building AI-powered solutions')";

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };
    setTimeout(typeText, 1000);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tech workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rotate-12 animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-cyan-400/20 rotate-45 animate-float" style={{animationDelay: '2s'}} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Terminal window */}
        <div className="glass-card rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-muted-foreground font-mono">~/portfolio</span>
          </div>
          <div className="font-mono text-left">
            <span className="text-green-400">❯ </span>
            <span className="text-foreground">{text}</span>
            <span className={`text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          <span className="block">Amit Kumar</span>
          <span className="gradient-text">Full Stack Developer</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          AI/ML Enthusiast & Cloud Computing Developer
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fadeIn" style={{animationDelay: '0.4s'}}>
          B.Tech CSE student at SMIT passionate about Artificial Intelligence, Machine Learning, 
          and building innovative full-stack solutions with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fadeIn" style={{animationDelay: '0.6s'}}>
          <Button variant="gradient" size="lg" className="group" asChild>
            <a href="mailto:amitsingh12612@gmail.com">
              <Mail className="mr-2 group-hover:animate-pulse" />
              Get In Touch
            </a>
          </Button>
          <Button variant="cyber" size="lg" className="group" asChild>
            <a href="tel:+918804337188">
              <Phone className="mr-2" />
              +91 8804337188
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fadeIn" style={{animationDelay: '0.8s'}}>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300" asChild>
            <a href="https://github.com/amit6305" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300" asChild>
            <a href="https://www.linkedin.com/in/amit-kumar-9418ab205" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300" asChild>
            <a href="mailto:amitsingh12612@gmail.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-primary rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
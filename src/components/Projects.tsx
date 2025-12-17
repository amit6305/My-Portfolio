import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "2-Wheeler Lead Management System",
      description: "Full-stack lead management system with secure backend APIs, role-based access, lead deduplication, showroom routing based on PIN codes, and analytics dashboards with 14-day lead aggregation.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "JWT", "Recharts"],
      github: "https://github.com/amit6305/2-wheeler-lead-system",
      live: null,
      featured: true
    },
    {
      title: "AI-Enabled Feedback Management System", 
      description: "Voice-based and multilingual feedback collection system with real-time AI summarization using Gemini API and admin dashboard for tracking and categorization.",
      tech: ["React.js", "Node.js", "SQL", "Firebase", "Gemini API"],
      github: "https://github.com/amit6305/AI-Enabled-Feedback-Management-System",
      live: null,
      featured: true
    },
    {
      title: "Hire Scout",
      description: "AI-powered recruitment and hiring assistant platform to streamline the hiring process with intelligent candidate matching and management.",
      tech: ["React", "Node.js", "AI/ML", "TypeScript"],
      github: "https://github.com/amit6305/Agent",
      live: null,
      featured: true
    },
    {
      title: "Movie Recommendation Model",
      description: "Movie recommendation system using NLP-based text similarity techniques with a user-friendly Streamlit interface for real-time suggestions.",
      tech: ["Python", "NLP", "Streamlit"],
      github: "https://github.com/amit6305/Movie-Recommendations",
      live: null,
      featured: false
    },
    {
      title: "House Price Prediction",
      description: "ML model for predicting house prices using Linear Regression, Decision Trees, and Random Forest algorithms on preprocessed housing datasets.",
      tech: ["Python", "Scikit-learn", "Machine Learning"],
      github: "https://github.com/amit6305/House-Price-Prediction",
      live: null,
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-cyan-400/5 rounded-lg rotate-12" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-purple-400/5 rounded-lg -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of my recent work that I'm proud to showcase
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-fadeIn ${
                project.featured ? 'lg:flex lg:items-center' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`p-8 ${project.featured ? 'lg:w-2/3' : ''}`}>
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                    {project.featured && (
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-yellow-400 font-medium">Featured Project</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} className="hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.live} className="hover:text-cyan-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Project visualization for featured projects */}
              {project.featured && (
                <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20 font-mono">
                    {'{ }'}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View more projects */}
        <div className="text-center mt-12">
          <Button variant="terminal" size="lg" className="group" asChild>
            <a href="https://github.com/amit6305" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 group-hover:animate-pulse" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
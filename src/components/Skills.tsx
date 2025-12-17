import { Code, Database, Globe, Smartphone, Zap, Shield } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C/C++", "Java", "JavaScript", "SQL", "HTML"],
      color: "cyan"
    },
    {
      title: "AI & ML", 
      icon: Zap,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Streamlit", "NLP"],
      color: "purple"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "Tailwind CSS", "Vite", "HTML/CSS"],
      color: "green"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express", "FastAPI", "MongoDB", "SQL"],
      color: "orange"
    },
    {
      title: "Cloud & Tools",
      icon: Smartphone,
      skills: ["AWS", "VS Code", "PyCharm", "Google Colab", "GitHub"],
      color: "cyan"
    },
    {
      title: "CS Fundamentals",
      icon: Shield,
      skills: ["DSA", "OS", "Computer Networks", "OOP", "Architecture"],
      color: "purple"
    }
  ];

  const getIconColorClasses = (color: string) => {
    const colors = {
      cyan: "border-cyan-400 text-cyan-400",
      purple: "border-purple-400 text-purple-400",
      green: "border-green-400 text-green-400",
      orange: "border-orange-400 text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 border border-purple-400/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-cyan-400/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">&lt;</span>
            <span> Technical Arsenal </span>
            <span className="gradient-text">/&gt;</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="relative rounded-lg animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="glass-card p-6 rounded-lg h-full border border-border/50 hover:border-border transition-all duration-300 bg-card/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg border ${getIconColorClasses(category.color)}`}>
                      <Icon className={`w-5 h-5 ${getIconColorClasses(category.color).split(' ')[1]}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-secondary/50 text-foreground rounded-full border border-border/50 hover:border-current transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal command */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card p-4 rounded-lg">
            <code className="font-mono text-green-400">
              $ git push origin amazing-features
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
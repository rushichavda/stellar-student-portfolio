
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Database, LineChart, Calendar, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-dark-100">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-highlight-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-highlight-blue/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-highlight-green/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Hi, I'm <span className="text-gradient">Rushi Chavda</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dual Degree (B.Tech. + M.Tech.) student at IIT Bombay, specializing in Computer Integrated Manufacturing with a minor in Data Science and Artificial Intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass-card px-4 py-3 rounded-lg flex items-center gap-2">
                <GraduationCap className="text-highlight-purple" size={20} />
                <span>Mechanical Engineering</span>
              </div>
              <div className="glass-card px-4 py-3 rounded-lg flex items-center gap-2">
                <Database className="text-highlight-blue" size={20} />
                <span>Data Science</span>
              </div>
              <div className="glass-card px-4 py-3 rounded-lg flex items-center gap-2">
                <LineChart className="text-highlight-green" size={20} />
                <span>AI Research</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" className="rounded-full border-highlight-purple text-highlight-purple hover:bg-highlight-purple/20" asChild>
                <a href="#experience">View Experience</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-highlight-blue text-highlight-blue hover:bg-highlight-blue/20" asChild>
                <a href="#publications">Publications</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Award className="text-highlight-purple" />
                Education
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium">IIT Bombay</h3>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Calendar size={14} className="mr-1" /> 2020-2025
                    </span>
                  </div>
                  <p className="text-gray-300">Dual Degree (B.Tech. + M.Tech.)</p>
                  <p className="text-gray-400">CPI: 7.7/10</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Specialization</h3>
                  <p className="text-gray-300">Computer Integrated Manufacturing</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Minor</h3>
                  <p className="text-gray-300">Data Science and Artificial Intelligence</p>
                  <p className="text-gray-400">Centre of Machine Intelligence and Data Science, IIT Bombay</p>
                </div>
                
                <div className="flex items-center text-gray-300 text-sm gap-4">
                  <div>
                    <span className="text-gray-400">Roll No:</span> 20D100007
                  </div>
                  <div>
                    <span className="text-gray-400">Gender:</span> Male
                  </div>
                  <div>
                    <span className="text-gray-400">DoB:</span> 18/07/2002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

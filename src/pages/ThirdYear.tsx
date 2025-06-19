import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, ExternalLink } from "lucide-react";

const ThirdYear = () => {
  const domains = [
    {
      title: "Machine Learning & Data Science",
      description: "Work with data, build intelligent systems",
      skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Statistics"],
      resources: [
        { name: "Andrew Ng ML Course", url: "https://www.coursera.org/learn/machine-learning" },
        { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
        { name: "Fast.ai Course", url: "https://www.fast.ai/" },
        { name: "StatQuest YouTube", url: "https://www.youtube.com/user/joshstarmer" }
      ]
    },
    {
      title: "Full Stack Development",
      description: "Build scalable web applications",
      skills: ["React/Angular", "Node.js", "Cloud Services", "DevOps", "System Design"],
      resources: [
        { name: "React Documentation", url: "https://react.dev/" },
        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
        { name: "Docker Tutorial", url: "https://www.docker.com/get-started" }
      ]
    },
    {
      title: "Mobile App Development",
      description: "Create mobile applications for iOS and Android",
      skills: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"],
      resources: [
        { name: "Flutter Documentation", url: "https://flutter.dev/docs" },
        { name: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
        { name: "Android Developer Guide", url: "https://developer.android.com/guide" },
        { name: "iOS Developer Guide", url: "https://developer.apple.com/documentation/" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from threats",
      skills: ["Network Security", "Penetration Testing", "Cryptography", "OWASP", "Linux"],
      resources: [
        { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
        { name: "TryHackMe", url: "https://tryhackme.com/" },
        { name: "Cybrary", url: "https://www.cybrary.it/" },
        { name: "Kali Linux", url: "https://www.kali.org/" }
      ]
    }
  ];

  const focusAreas = [
    {
      title: "Domain Specialization",
      description: "Choose and master one primary domain",
      tasks: ["Research different domains", "Pick based on interest and market demand", "Dedicate 60% time to chosen domain", "Build domain-specific projects"]
    },
    {
      title: "Open Source Contributions",
      description: "Contribute to real-world projects",
      tasks: ["Find beginner-friendly repositories", "Start with documentation", "Fix bugs and add features", "Apply for GSoC, LFX Mentorship"]
    },
    {
      title: "Advanced Projects",
      description: "Build complex, industry-level projects",
      tasks: ["Multi-tier applications", "Use cloud services", "Implement CI/CD", "Focus on scalability and performance"]
    },
    {
      title: "Internship Hunting",
      description: "Secure valuable industry experience",
      tasks: ["Apply to 100+ companies", "Prepare for technical interviews", "Practice system design", "Network with professionals"]
    }
  ];

  const openSourcePrograms = [
    { name: "Google Summer of Code (GSoC)", period: "March - September", stipend: "$1500-$6600", url: "https://summerofcode.withgoogle.com/" },
    { name: "LFX Mentorship", period: "Year-round", stipend: "$3000-$6600", url: "https://lfx.linuxfoundation.org/tools/mentorship/" },
    { name: "Outreachy", period: "May - August", stipend: "$7000", url: "https://www.outreachy.org/" },
    { name: "MLH Fellowship", period: "12 weeks", stipend: "Varies", url: "https://fellowship.mlh.io/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">3rd Year - Specialization Phase</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-100">
              Choose your domain, contribute to open source, and build industry-level projects. This is where you become a specialist!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Domain Selection</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Open Source</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Advanced Projects</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Internships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Domain */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Choose Your Specialization</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{domain.title}</CardTitle>
                  <p className="text-muted-foreground">{domain.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((skill, i) => (
                        <span key={i} className="bg-blue-900 text-blue-100 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learning Resources:</h4>
                    <ul className="space-y-1">
                      {domain.resources.map((resource, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors flex items-center gap-1"
                          >
                            {resource.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.tasks.map((task, i) => (
                      <li key={i} className="flex items-start text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Programs */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Open Source Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openSourcePrograms.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{program.name}</h3>
                  <p className="text-muted-foreground mb-2">{program.period}</p>
                  <p className="text-green-400 font-bold mb-3">{program.stipend}</p>
                  <a 
                    href={program.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center justify-center gap-1"
                  >
                    Learn More <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">How to Get Started with Open Source</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">For Beginners:</h4>
                    <ul className="text-left space-y-1 text-gray-600">
                      <li>• Start with "good first issue" labels</li>
                      <li>• Contribute to documentation</li>
                      <li>• Fix typos and small bugs</li>
                      <li>• Join community Discord/Slack</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Contributors:</h4>
                    <ul className="text-left space-y-1 text-gray-600">
                      <li>• Add new features</li>
                      <li>• Optimize performance</li>
                      <li>• Write tests</li>
                      <li>• Review others' code</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Advanced Project Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                domain: "ML/AI",
                projects: ["Recommendation System", "Chatbot with NLP", "Computer Vision App", "Predictive Analytics Tool"]
              },
              {
                domain: "Web Dev",
                projects: ["Social Media Platform", "Real-time Collaboration Tool", "Microservices Architecture", "Progressive Web App"]
              },
              {
                domain: "Mobile Dev",
                projects: ["Cross-platform App", "AR/VR Experience", "IoT Controller App", "Fitness Tracking App"]
              },
              {
                domain: "DevOps",
                projects: ["CI/CD Pipeline", "Container Orchestration", "Monitoring Dashboard", "Infrastructure as Code"]
              },
              {
                domain: "Blockchain",
                projects: ["DeFi Application", "NFT Marketplace", "Smart Contracts", "Cryptocurrency Wallet"]
              },
              {
                domain: "Cybersecurity",
                projects: ["Vulnerability Scanner", "Network Monitor", "Encryption Tool", "Penetration Testing Framework"]
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.domain}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.projects.map((project, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Milestones */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Critical Milestones for 3rd Year</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "By September: Domain Selection",
                  description: "Choose your primary specialization and create a learning plan"
                },
                {
                  title: "By December: First Open Source Contribution",
                  description: "Make your first meaningful contribution to an open source project"
                },
                {
                  title: "By February: Advanced Project",
                  description: "Complete at least one industry-level project in your chosen domain"
                },
                {
                  title: "By April: Internship Applications",
                  description: "Apply to summer internships and prepare for technical interviews"
                },
                {
                  title: "By June: Internship/Research",
                  description: "Secure and complete a valuable internship or research experience"
                }
              ].map((milestone, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Placement Prep?</h2>
          <p className="text-xl mb-8 text-gray-100">
            With domain expertise and project experience, you're ready to prepare for your dream job in 4th year!
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg" asChild>
            <a href="/fourth-year">Explore 4th Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThirdYear;

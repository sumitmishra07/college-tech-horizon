
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import YearCard from "@/components/YearCard";
import DomainCard from "@/components/DomainCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const yearData = [
    {
      year: "1st Year",
      title: "Foundation Phase",
      description: "Build your programming fundamentals and start your coding journey with the basics of computer science.",
      phase: "Foundation",
      highlights: ["Learn C++ or Python", "Basic DSA", "Git & GitHub", "OOPs Concepts"],
      path: "/first-year",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      year: "2nd Year",
      title: "Core + Development",
      description: "Master data structures, algorithms and start building real-world projects with web development.",
      phase: "Development",
      highlights: ["Advanced DSA", "Web Development", "Database Management", "Projects"],
      path: "/second-year",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    {
      year: "3rd Year",
      title: "Specialization Phase",
      description: "Choose your domain, contribute to open source, and build advanced projects to showcase your skills.",
      phase: "Specialization",
      highlights: ["Domain Selection", "Open Source", "Advanced Projects", "Internships"],
      path: "/third-year",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    {
      year: "4th Year",
      title: "Career Preparation",
      description: "Focus on placement preparation, system design, and choose between job opportunities or higher studies.",
      phase: "Career Ready",
      highlights: ["Placement Prep", "System Design", "Mock Interviews", "Higher Studies"],
      path: "/fourth-year",
      gradient: "bg-gradient-to-r from-indigo-600 to-purple-600"
    }
  ];

  const domainData = [
    {
      title: "DSA & Competitive Programming",
      description: "Master problem-solving skills and algorithmic thinking through competitive programming.",
      skills: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
      avgSalary: "₹15-40 LPA",
      jobRoles: ["Software Engineer", "Problem Setter", "Algorithm Developer"],
      color: "bg-blue-500"
    },
    {
      title: "Full Stack Development",
      description: "Build complete web applications from frontend to backend with modern technologies.",
      skills: ["React", "Node.js", "Databases", "Cloud"],
      avgSalary: "₹12-35 LPA",
      jobRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      color: "bg-cyan-500"
    },
    {
      title: "Machine Learning & AI",
      description: "Work with data, build intelligent systems and create AI-powered applications.",
      skills: ["Python", "TensorFlow", "Statistics", "Data Analysis"],
      avgSalary: "₹18-50 LPA",
      jobRoles: ["ML Engineer", "Data Scientist", "AI Researcher"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your 4-Year B.Tech
            <span className="block text-blue-300">Tech Roadmap</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Navigate your engineering journey with confidence. From programming basics to placement success - we guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/first-year">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 text-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/domains">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg">
                Explore Domains
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Year-wise Guide Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Year-wise Learning Path</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our structured approach to make the most of your B.Tech years. Each year builds upon the previous one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearData.map((year, index) => (
              <YearCard key={index} {...year} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Domains Section */}
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Tech Domains</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore different career paths in technology and find your passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {domainData.map((domain, index) => (
              <DomainCard key={index} {...domain} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/domains">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                View All Domains
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real students, real achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                achievement: "Google SWE Intern",
                story: "Started coding in 1st year, followed our DSA roadmap, and landed at Google in 3rd year!",
                college: "IIT Delhi",
                package: "₹45 LPA"
              },
              {
                name: "Rohan Kumar",
                achievement: "Full Stack Developer",
                story: "Built 5+ projects following our web dev path. Now working at a unicorn startup!",
                college: "NIT Trichy",
                package: "₹28 LPA"
              },
              {
                name: "Priya Patel",
                achievement: "ML Engineer",
                story: "Discovered ML in 2nd year through our guide. Now building AI solutions at Microsoft!",
                college: "BITS Pilani",
                package: "₹35 LPA"
              }
            ].map((story, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background border-border">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {story.name[0]}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{story.name}</h3>
                    <p className="text-primary font-medium">{story.achievement}</p>
                    <p className="text-sm text-muted-foreground">{story.college}</p>
                  </div>
                  <p className="text-muted-foreground text-center mb-4 italic">"{story.story}"</p>
                  <div className="text-center">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {story.package}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8">
            Join thousands of B.Tech students who are already following our roadmap to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/first-year">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                Begin 1st Year Guide
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg">
                Browse Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

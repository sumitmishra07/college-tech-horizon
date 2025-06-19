
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const UIUXRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Design Fundamentals (Weeks 1-6)",
      duration: "1.5 Months",
      topics: [
        "Design Principles - Color theory, typography, composition",
        "User Psychology - Cognitive load, mental models, behavior",
        "Design Tools - Figma, Adobe XD, Sketch basics",
        "Visual Hierarchy - Layout, spacing, emphasis",
        "Accessibility - WCAG guidelines, inclusive design"
      ],
      resources: [
        { name: "Figma Academy", url: "https://www.figma.com/academy/" },
        { name: "Material Design Guidelines", url: "https://material.io/design" }
      ],
      projects: ["Design system creation", "Mobile app mockup", "Website redesign"]
    },
    {
      phase: "User Experience Design (Weeks 7-14)",
      duration: "2 Months",
      topics: [
        "User Research - Interviews, surveys, personas",
        "Information Architecture - Card sorting, site maps",
        "Wireframing - Low-fidelity prototypes, user flows",
        "Usability Testing - A/B testing, user feedback",
        "Design Thinking - Problem-solving methodology"
      ],
      resources: [
        { name: "Nielsen Norman Group", url: "https://www.nngroup.com/" },
        { name: "UX Mastery", url: "https://uxmastery.com/" }
      ],
      projects: ["User research study", "Complete app UX design", "Usability testing report"]
    },
    {
      phase: "Advanced UI Design (Weeks 15-22)",
      duration: "2 Months",
      topics: [
        "Advanced Prototyping - Interactive prototypes, micro-interactions",
        "Design Systems - Component libraries, style guides",
        "Responsive Design - Mobile-first, breakpoints, grids",
        "Animation & Motion - Transition design, loading states",
        "Design Handoff - Developer collaboration, design specs"
      ],
      resources: [
        { name: "Framer Motion", url: "https://www.framer.com/motion/" },
        { name: "Design Systems Repo", url: "https://designsystemsrepo.com/" }
      ],
      projects: ["Interactive prototype", "Complete design system", "Animated interface designs"]
    },
    {
      phase: "Specialization & Portfolio (Weeks 23-28)",
      duration: "1.5 Months",
      topics: [
        "Industry Specialization - Web, mobile, enterprise, gaming",
        "Portfolio Development - Case studies, presentation",
        "Design Leadership - Team collaboration, design strategy",
        "Emerging Technologies - AR/VR, voice interfaces, AI",
        "Business Understanding - Product strategy, metrics, ROI"
      ],
      resources: [
        { name: "Dribbble", url: "https://dribbble.com/" },
        { name: "Behance", url: "https://www.behance.net/" }
      ],
      projects: ["Professional portfolio", "Design case studies", "Specialized domain project"]
    }
  ];

  const careerPaths = [
    {
      role: "UI Designer",
      companies: ["Apple", "Google", "Airbnb", "Spotify"],
      salary: "₹8-25 LPA",
      requirements: ["Visual design skills", "Figma/Sketch expertise", "Design systems"]
    },
    {
      role: "UX Designer",
      companies: ["Microsoft", "Amazon", "Netflix", "Uber"],
      salary: "₹12-35 LPA",
      requirements: ["User research", "Prototyping", "Problem-solving"]
    },
    {
      role: "Product Designer",
      companies: ["Facebook", "Twitter", "LinkedIn", "Dropbox"],
      salary: "₹15-50 LPA",
      requirements: ["End-to-end design", "Business acumen", "Leadership skills"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">UI/UX Design Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-teal-100">
              Design intuitive and beautiful user experiences. Create products that users love to use.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">7 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Creative Field</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">High Demand</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-teal-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-teal-400">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Topics to Cover
                      </h4>
                      <ul className="space-y-2">
                        {step.topics.map((topic, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Resources
                      </h4>
                      <div className="space-y-2">
                        {step.resources.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-teal-400 hover:text-teal-300 underline"
                          >
                            {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Projects
                      </h4>
                      <ul className="space-y-2">
                        {step.projects.map((project, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Career Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{career.role}</CardTitle>
                  <p className="text-teal-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-teal-900/50 text-teal-300 px-2 py-1 rounded text-sm">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {career.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-teal-500" />
                          {req}
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

      <section className="py-16 bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Design the Future!</h2>
          <p className="text-xl mb-8 text-teal-100">
            Start with design fundamentals and build your way to creating world-class user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Start with Figma</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXRoadmap;

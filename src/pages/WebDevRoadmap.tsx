
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const WebDevRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Frontend Basics (Weeks 1-8)",
      duration: "2 Months",
      topics: [
        "HTML5 - Semantic markup, forms, accessibility",
        "CSS3 - Flexbox, Grid, animations, responsive design",
        "JavaScript - ES6+, DOM manipulation, async/await",
        "Git & Version Control",
        "Browser DevTools"
      ],
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { name: "freeCodeCamp", url: "https://freecodecamp.org/" }
      ],
      projects: ["Personal portfolio website", "Responsive landing page", "Interactive to-do app"]
    },
    {
      phase: "Frontend Framework (Weeks 9-16)",
      duration: "2 Months",
      topics: [
        "React.js - Components, hooks, state management",
        "TypeScript - Type safety, interfaces",
        "CSS Frameworks - Tailwind CSS or Bootstrap",
        "Package Managers - npm/yarn",
        "Build Tools - Vite/Webpack"
      ],
      resources: [
        { name: "React Documentation", url: "https://react.dev/" },
        { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" }
      ],
      projects: ["React weather app", "E-commerce product catalog", "Task management dashboard"]
    },
    {
      phase: "Backend Development (Weeks 17-24)",
      duration: "2 Months",
      topics: [
        "Node.js - Server-side JavaScript",
        "Express.js - Web framework",
        "RESTful APIs - CRUD operations",
        "Database - MongoDB/PostgreSQL",
        "Authentication - JWT, OAuth"
      ],
      resources: [
        { name: "Node.js Documentation", url: "https://nodejs.org/docs/" },
        { name: "Express.js Guide", url: "https://expressjs.com/" }
      ],
      projects: ["REST API with authentication", "Blog backend", "User management system"]
    },
    {
      phase: "Full Stack Integration (Weeks 25-32)",
      duration: "2 Months",
      topics: [
        "Frontend-Backend Integration",
        "State Management - Redux/Zustand",
        "Testing - Jest, React Testing Library",
        "Deployment - Vercel, Netlify, Heroku",
        "CI/CD Pipelines"
      ],
      resources: [
        { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
        { name: "Vercel Documentation", url: "https://vercel.com/docs" }
      ],
      projects: ["Full-stack social media app", "E-commerce platform", "Real-time chat application"]
    }
  ];

  const careerPaths = [
    {
      role: "Frontend Developer",
      companies: ["Google", "Facebook", "Netflix", "Airbnb"],
      salary: "₹12-35 LPA",
      requirements: ["React/Vue/Angular", "CSS expertise", "JavaScript mastery"]
    },
    {
      role: "Backend Developer",
      companies: ["Amazon", "Microsoft", "Uber", "Stripe"],
      salary: "₹15-40 LPA",
      requirements: ["Node.js/Python/Java", "Database design", "API development"]
    },
    {
      role: "Full Stack Developer",
      companies: ["Startups", "Mid-size companies", "Consulting firms"],
      salary: "₹18-45 LPA",
      requirements: ["Frontend + Backend", "DevOps basics", "System design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Full Stack Web Development Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-green-100">
              Master both frontend and backend development. Build complete web applications from scratch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">8 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Project-Based Learning</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Industry Ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-green-400">
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
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
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
                            className="block text-green-400 hover:text-green-300 underline"
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
                  <p className="text-green-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-sm">
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
                          <CheckCircle className="w-3 h-3 text-green-500" />
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

      <section className="py-16 bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Building Today!</h2>
          <p className="text-xl mb-8 text-green-100">
            The best way to learn web development is by building real projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Start with React</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevRoadmap;

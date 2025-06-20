
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DomainCard from "@/components/DomainCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Domains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const domains = [
    {
      title: "Data Structures & Algorithms",
      description: "Master problem-solving skills and algorithmic thinking. Essential for competitive programming and technical interviews at top tech companies.",
      skills: ["C++", "Python", "Java", "Algorithms", "Problem Solving", "Mathematical Thinking", "Time Complexity"],
      avgSalary: "₹15-50 LPA",
      jobRoles: ["Software Engineer", "Competitive Programmer", "Algorithm Developer", "Problem Setter", "SDE-1/2/3"],
      color: "bg-blue-500",
      roadmapUrl: "/dsa-roadmap"
    },
    {
      title: "Full Stack Web Development",
      description: "Build complete web applications from frontend to backend. Create scalable, modern web solutions using latest technologies and frameworks.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker"],
      avgSalary: "₹12-40 LPA",
      jobRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "DevOps Engineer", "Web Architect"],
      color: "bg-green-500",
      roadmapUrl: "/webdev-roadmap"
    },
    {
      title: "Machine Learning & AI",
      description: "Work with data to build intelligent systems. Create AI-powered applications, predictive models, and data-driven solutions for real-world problems.",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Statistics", "Data Analysis", "Deep Learning", "NLP"],
      avgSalary: "₹18-60 LPA",
      jobRoles: ["ML Engineer", "Data Scientist", "AI Researcher", "Data Analyst", "AI Product Manager"],
      color: "bg-purple-500",
      roadmapUrl: "/ml-roadmap"
    },
    {
      title: "Mobile App Development",
      description: "Create mobile applications for iOS and Android platforms. Build user-friendly mobile experiences with native and cross-platform technologies.",
      skills: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase", "UI/UX Design", "App Store Optimization"],
      avgSalary: "₹10-35 LPA",
      jobRoles: ["Mobile Developer", "iOS Developer", "Android Developer", "Cross-platform Developer", "Mobile Architect"],
      color: "bg-pink-500",
      roadmapUrl: "/mobile-roadmap"
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from cyber threats. Ensure data security, privacy, and implement robust security measures for organizations.",
      skills: ["Network Security", "Penetration Testing", "Cryptography", "Linux", "OWASP", "Incident Response", "Ethical Hacking"],
      avgSalary: "₹15-45 LPA",
      jobRoles: ["Security Engineer", "Penetration Tester", "Security Analyst", "Cybersecurity Consultant", "CISO"],
      color: "bg-red-500",
      roadmapUrl: "/cybersecurity-roadmap"
    },
    {
      title: "Cloud & DevOps",
      description: "Manage infrastructure and deployment pipelines. Enable scalable and reliable software delivery using cloud platforms and automation tools.",
      skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring", "Linux"],
      avgSalary: "₹14-50 LPA",
      jobRoles: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer", "Platform Engineer", "Infrastructure Engineer"],
      color: "bg-indigo-500",
      roadmapUrl: "/cloud-devops-roadmap"
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized applications and smart contracts. Work with cryptocurrency, DeFi protocols, and Web3 technologies in the emerging blockchain ecosystem.",
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi", "Cryptocurrency", "Rust", "Go"],
      avgSalary: "₹20-80 LPA",
      jobRoles: ["Blockchain Developer", "Smart Contract Developer", "DeFi Engineer", "Web3 Developer", "Blockchain Architect"],
      color: "bg-yellow-500",
      roadmapUrl: "/blockchain-roadmap"
    },
    {
      title: "Game Development",
      description: "Create engaging games for various platforms. Design game mechanics, interactive experiences, and immersive worlds using modern game engines.",
      skills: ["Unity", "Unreal Engine", "C#", "C++", "Game Design", "3D Modeling", "Animation", "Physics"],
      avgSalary: "₹8-30 LPA",
      jobRoles: ["Game Developer", "Game Designer", "Unity Developer", "Gameplay Programmer", "Technical Artist"],
      color: "bg-orange-500",
      roadmapUrl: "/gamedev-roadmap"
    },
    {
      title: "UI/UX Design",
      description: "Design user interfaces and experiences. Create intuitive, accessible, and beautiful digital products that solve user problems effectively.",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems", "Accessibility", "Psychology"],
      avgSalary: "₹10-35 LPA",
      jobRoles: ["UI Designer", "UX Designer", "Product Designer", "Design Lead", "UX Researcher"],
      color: "bg-teal-500",
      roadmapUrl: "/uiux-roadmap"
    }
  ];

  const learningPaths = {
    beginner: [
      "Choose a programming language (Python/JavaScript recommended)",
      "Learn basic programming concepts and syntax",
      "Understand fundamental computer science concepts",
      "Build simple projects to practice",
      "Explore different domains through tutorials"
    ],
    intermediate: [
      "Deepen knowledge in chosen domain",
      "Build more complex projects",
      "Learn industry-standard tools and frameworks",
      "Contribute to open source projects",
      "Network with professionals in the field"
    ],
    advanced: [
      "Master advanced concepts and architectures",
      "Lead complex projects or teams",
      "Mentor others and share knowledge",
      "Stay updated with latest industry trends",
      "Consider specialization or consulting"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Explore Tech Domains</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
              Discover different career paths in technology. Find your passion and build expertise in domains that match your interests and market demand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">9 Popular Domains</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Career Guidance</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Learning Paths</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Salary Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Popular Tech Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <DomainCard key={index} {...domain} />
            ))}
          </div>
        </div>
      </section>

      {/* T-Shaped Approach Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">The T-Shaped Developer Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">What is T-Shaped Skills?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    The T-shaped approach means having deep expertise in one domain (the vertical line of the T) 
                    while maintaining broad knowledge across multiple areas (the horizontal line).
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      <strong className="text-white">Deep Knowledge:</strong> Master one primary domain thoroughly
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      <strong className="text-white">Broad Understanding:</strong> Learn basics of complementary domains
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      <strong className="text-white">Cross-functional Skills:</strong> Communicate effectively across teams
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400">Benefits of T-Shaped Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-white block">Higher Employability:</strong>
                        Companies prefer versatile developers who can adapt
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-white block">Better Problem Solving:</strong>
                        Draw solutions from multiple domains
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-white block">Career Growth:</strong>
                        Progress to leadership and architect roles
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-white block">Innovation:</strong>
                        Create solutions by combining different technologies
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Your Domain Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">How to Choose Your Domain Correctly</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">1. Assess Your Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    What problems excite you to solve?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    Do you prefer visual design or logical thinking?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    Are you interested in business or technical challenges?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    Try small projects in different domains
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-400">2. Evaluate Market Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Research job openings in your area
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Check salary ranges and growth trends
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Look at future technology trends
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Consider remote work opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">3. Consider Your Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Are you good at mathematics and logic?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Do you have strong communication skills?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Are you detail-oriented or big-picture focused?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Take online assessments and get feedback
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 text-center">Decision Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Step 1</h4>
                    <p className="text-gray-300 text-sm">List 3-5 domains that interest you most</p>
                  </div>
                  <div className="p-4 bg-green-600/20 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">Step 2</h4>
                    <p className="text-gray-300 text-sm">Research job market and salary for each</p>
                  </div>
                  <div className="p-4 bg-purple-600/20 rounded-lg">
                    <h4 className="font-semibold text-purple-300 mb-2">Step 3</h4>
                    <p className="text-gray-300 text-sm">Try hands-on projects in top 2-3 choices</p>
                  </div>
                  <div className="p-4 bg-orange-600/20 rounded-lg">
                    <h4 className="font-semibold text-orange-300 mb-2">Step 4</h4>
                    <p className="text-gray-300 text-sm">Choose primary domain and start deep learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Path Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">Beginner Level</CardTitle>
                <p className="text-gray-300">Building foundations (0-6 months)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningPaths.beginner.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">Intermediate Level</CardTitle>
                <p className="text-gray-300">Gaining expertise (6-18 months)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningPaths.intermediate.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">Advanced Level</CardTitle>
                <p className="text-gray-300">Mastering the domain (18+ months)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningPaths.advanced.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Choose Your Path?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start with the domain that excites you the most and begin your specialized learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/first-year">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Start Learning
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
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

export default Domains;

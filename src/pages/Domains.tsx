import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DomainCard from "@/components/DomainCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

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
      color: "bg-green-500"
    },
    {
      title: "Machine Learning & AI",
      description: "Work with data to build intelligent systems. Create AI-powered applications, predictive models, and data-driven solutions for real-world problems.",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Statistics", "Data Analysis", "Deep Learning", "NLP"],
      avgSalary: "₹18-60 LPA",
      jobRoles: ["ML Engineer", "Data Scientist", "AI Researcher", "Data Analyst", "AI Product Manager"],
      color: "bg-purple-500"
    },
    {
      title: "Mobile App Development",
      description: "Create mobile applications for iOS and Android platforms. Build user-friendly mobile experiences with native and cross-platform technologies.",
      skills: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase", "UI/UX Design", "App Store Optimization"],
      avgSalary: "₹10-35 LPA",
      jobRoles: ["Mobile Developer", "iOS Developer", "Android Developer", "Cross-platform Developer", "Mobile Architect"],
      color: "bg-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from cyber threats. Ensure data security, privacy, and implement robust security measures for organizations.",
      skills: ["Network Security", "Penetration Testing", "Cryptography", "Linux", "OWASP", "Incident Response", "Ethical Hacking"],
      avgSalary: "₹15-45 LPA",
      jobRoles: ["Security Engineer", "Penetration Tester", "Security Analyst", "Cybersecurity Consultant", "CISO"],
      color: "bg-red-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Manage infrastructure and deployment pipelines. Enable scalable and reliable software delivery using cloud platforms and automation tools.",
      skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring", "Linux"],
      avgSalary: "₹14-50 LPA",
      jobRoles: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer", "Platform Engineer", "Infrastructure Engineer"],
      color: "bg-indigo-500"
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized applications and smart contracts. Work with cryptocurrency, DeFi protocols, and Web3 technologies in the emerging blockchain ecosystem.",
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi", "Cryptocurrency", "Rust", "Go"],
      avgSalary: "₹20-80 LPA",
      jobRoles: ["Blockchain Developer", "Smart Contract Developer", "DeFi Engineer", "Web3 Developer", "Blockchain Architect"],
      color: "bg-yellow-500"
    },
    {
      title: "Game Development",
      description: "Create engaging games for various platforms. Design game mechanics, interactive experiences, and immersive worlds using modern game engines.",
      skills: ["Unity", "Unreal Engine", "C#", "C++", "Game Design", "3D Modeling", "Animation", "Physics"],
      avgSalary: "₹8-30 LPA",
      jobRoles: ["Game Developer", "Game Designer", "Unity Developer", "Gameplay Programmer", "Technical Artist"],
      color: "bg-orange-500"
    },
    {
      title: "UI/UX Design",
      description: "Design user interfaces and experiences. Create intuitive, accessible, and beautiful digital products that solve user problems effectively.",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems", "Accessibility", "Psychology"],
      avgSalary: "₹10-35 LPA",
      jobRoles: ["UI Designer", "UX Designer", "Product Designer", "Design Lead", "UX Researcher"],
      color: "bg-teal-500"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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

      {/* Domain Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Popular Tech Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <DomainCard key={index} {...domain} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Path Framework</h2>
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

      {/* Domain Selection Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">How to Choose Your Domain</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 border-l-4 border-l-indigo-500">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-400">Self-Assessment Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li>• What type of problems do you enjoy solving?</li>
                    <li>• Do you prefer front-end or back-end work?</li>
                    <li>• Are you interested in data and analytics?</li>
                    <li>• Do you like creative or technical challenges?</li>
                    <li>• What's your math and statistics comfort level?</li>
                    <li>• Do you prefer working with people or systems?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-400">Market Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Job market demand in your region</li>
                    <li>• Salary expectations and growth potential</li>
                    <li>• Learning curve and time investment</li>
                    <li>• Industry trends and future prospects</li>
                    <li>• Available learning resources and mentors</li>
                    <li>• Company preferences (startup vs. big tech)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-gray-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Pro Tip: The T-Shaped Approach</h3>
                <p className="text-gray-300 text-lg mb-4">
                  Develop deep expertise in one domain (the vertical line of the T) while maintaining broad knowledge across multiple areas (the horizontal line).
                </p>
                <p className="text-gray-400">
                  This makes you more versatile and valuable in the job market, as you can collaborate effectively across different teams and domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Domain Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                domain: "Full Stack Development",
                achievement: "Senior Developer at Flipkart",
                story: "Started with HTML/CSS in 2nd year, mastered React and Node.js, built 8+ projects",
                timeline: "2 years",
                package: "₹28 LPA"
              },
              {
                name: "Sneha Agarwal",
                domain: "Machine Learning",
                achievement: "ML Engineer at Microsoft",
                story: "Discovered ML through online courses, contributed to 3 research papers, interned at IISc",
                timeline: "2.5 years",
                package: "₹42 LPA"
              },
              {
                name: "Rohit Singh",
                domain: "Cybersecurity",
                achievement: "Security Consultant",
                story: "Self-taught ethical hacking, earned multiple certifications, freelanced during college",
                timeline: "3 years",
                package: "₹35 LPA"
              }
            ].map((story, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {story.name[0]}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{story.name}</h3>
                    <p className="text-indigo-400 font-medium">{story.domain}</p>
                    <p className="text-sm text-gray-400">{story.achievement}</p>
                  </div>
                  <p className="text-gray-300 text-center mb-4 italic">"{story.story}"</p>
                  <div className="flex justify-between text-sm">
                    <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded">{story.timeline}</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded font-medium">{story.package}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Choose Your Path?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take time to explore, experiment with different domains, and choose the one that excites you the most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg" asChild>
              <a href="/blog">Read Success Stories</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Domains;

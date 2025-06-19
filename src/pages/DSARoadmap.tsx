
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const DSARoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Foundation (Weeks 1-4)",
      duration: "1 Month",
      topics: [
        "Programming Language Basics (C++/Java/Python)",
        "Time & Space Complexity (Big O)",
        "Basic Problem Solving Approach",
        "Arrays and Strings",
        "Basic Sorting Algorithms"
      ],
      resources: [
        { name: "GeeksforGeeks DSA Course", url: "https://www.geeksforgeeks.org/data-structures/" },
        { name: "C++ STL Documentation", url: "https://cplusplus.com/reference/stl/" }
      ],
      projects: ["Implement basic sorting algorithms", "Solve 50 easy array problems"]
    },
    {
      phase: "Core Data Structures (Weeks 5-12)",
      duration: "2 Months",
      topics: [
        "Linked Lists (Single, Double, Circular)",
        "Stacks and Queues",
        "Trees (Binary Trees, BST, AVL)",
        "Heaps and Priority Queues",
        "Hash Tables and Maps"
      ],
      resources: [
        { name: "LeetCode Problems", url: "https://leetcode.com/problemset/all/" },
        { name: "HackerRank Data Structures", url: "https://www.hackerrank.com/domains/data-structures" }
      ],
      projects: ["Build a custom hash table", "Implement tree traversals", "Create a task scheduler using heaps"]
    },
    {
      phase: "Advanced Algorithms (Weeks 13-20)",
      duration: "2 Months",
      topics: [
        "Recursion and Backtracking",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Graph Algorithms (BFS, DFS, Dijkstra)",
        "String Algorithms"
      ],
      resources: [
        { name: "CSES Problem Set", url: "https://cses.fi/problemset/" },
        { name: "AtCoder Problems", url: "https://atcoder.jp/contests/" }
      ],
      projects: ["Solve classic DP problems", "Implement graph algorithms", "Build a pathfinding visualizer"]
    },
    {
      phase: "Competitive Programming (Weeks 21-24)",
      duration: "1 Month",
      topics: [
        "Advanced Graph Algorithms",
        "Segment Trees and Fenwick Trees",
        "Advanced Dynamic Programming",
        "Number Theory and Math",
        "Contest Problem Solving"
      ],
      resources: [
        { name: "Codeforces", url: "https://codeforces.com/" },
        { name: "CodeChef", url: "https://www.codechef.com/" }
      ],
      projects: ["Participate in weekly contests", "Solve 200+ problems", "Build contest preparation tracker"]
    }
  ];

  const practiceResources = [
    {
      name: "LeetCode",
      description: "Most popular coding interview platform",
      url: "https://leetcode.com/",
      type: "Practice Platform",
      difficulty: "Beginner to Expert"
    },
    {
      name: "GeeksforGeeks",
      description: "Comprehensive tutorials and practice problems",
      url: "https://www.geeksforgeeks.org/",
      type: "Learning + Practice",
      difficulty: "Beginner to Advanced"
    },
    {
      name: "HackerRank",
      description: "Structured learning path with certificates",
      url: "https://www.hackerrank.com/",
      type: "Practice Platform",
      difficulty: "Beginner to Advanced"
    },
    {
      name: "Codeforces",
      description: "Competitive programming contests",
      url: "https://codeforces.com/",
      type: "Contest Platform",
      difficulty: "Intermediate to Expert"
    }
  ];

  const careerPaths = [
    {
      role: "Software Engineer",
      companies: ["Google", "Microsoft", "Amazon", "Facebook"],
      salary: "₹15-50 LPA",
      requirements: ["Strong DSA skills", "System design knowledge", "Programming proficiency"]
    },
    {
      role: "Competitive Programmer",
      companies: ["TopCoder", "Codeforces", "AtCoder"],
      salary: "₹20-80 LPA",
      requirements: ["Expert level problem solving", "Mathematical skills", "Contest performance"]
    },
    {
      role: "Algorithm Developer",
      companies: ["Trading firms", "AI companies", "Research labs"],
      salary: "₹25-100 LPA",
      requirements: ["Advanced algorithms", "Mathematical modeling", "Optimization skills"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Data Structures & Algorithms Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
              Master problem-solving skills and algorithmic thinking. Complete roadmap from beginner to expert level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">6 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Interview Ready</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Contest Preparation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-blue-400">
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
                            className="block text-blue-400 hover:text-blue-300 underline"
                          >
                            {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Projects/Practice
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

      {/* Practice Resources */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Practice Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceResources.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{resource.name}</CardTitle>
                  <div className="flex justify-between text-sm">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded">{resource.type}</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded">{resource.difficulty}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Start Practicing <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
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
                        <span key={idx} className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-sm">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your DSA Journey Today!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Follow this roadmap consistently and you'll be interview-ready in 6 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">Start Practicing</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DSARoadmap;

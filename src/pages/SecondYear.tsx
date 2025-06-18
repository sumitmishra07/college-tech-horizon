
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SecondYear = () => {
  const focusAreas = [
    {
      title: "Advanced Data Structures & Algorithms",
      description: "Master complex data structures and algorithmic thinking",
      topics: ["Trees & Binary Search Trees", "Graphs & Graph Algorithms", "Dynamic Programming", "Greedy Algorithms", "Hash Tables"]
    },
    {
      title: "Web Development",
      description: "Build full-stack web applications from scratch",
      topics: ["HTML, CSS, JavaScript", "React.js", "Node.js & Express", "REST APIs", "MongoDB/SQL"]
    },
    {
      title: "Database Management",
      description: "Learn to design and manage databases effectively",
      topics: ["SQL Queries", "Database Design", "Normalization", "NoSQL Databases", "Database Optimization"]
    },
    {
      title: "System Design Basics",
      description: "Introduction to designing scalable systems",
      topics: ["Client-Server Architecture", "Load Balancing", "Caching", "Microservices", "API Design"]
    }
  ];

  const resources = [
    {
      category: "Data Structures & Algorithms",
      items: [
        "Striver's A2Z DSA Course/Sheet",
        "Abdul Bari Algorithm Course",
        "LeetCode Medium Problems",
        "Codeforces Div 2 Problems"
      ]
    },
    {
      category: "Web Development",
      items: [
        "The Complete Web Developer Course by Colt Steele",
        "JavaScript Mastery YouTube Channel",
        "React - The Complete Guide by Maximilian",
        "Node.js Course by Traversy Media"
      ]
    },
    {
      category: "Database Management",
      items: [
        "SQL Tutorial by W3Schools",
        "MongoDB University Courses",
        "Database Design Course by Stanford",
        "SQL by Anuj Bhaiya"
      ]
    },
    {
      category: "Competitive Programming",
      items: [
        "Codeforces Problemset",
        "AtCoder Beginner Contests",
        "CodeChef Long Challenges",
        "USACO Training Program"
      ]
    }
  ];

  const projects = [
    "Personal Portfolio Website",
    "Todo App with CRUD Operations",
    "E-commerce Website (Frontend + Backend)",
    "Blog Platform with Authentication",
    "Chat Application with Real-time Features",
    "Expense Tracker with Data Visualization"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">2nd Year - Core + Development</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Master advanced algorithms, start building real projects, and dive deep into web development. This is where things get exciting!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Advanced DSA</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Web Development</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Databases</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                  <p className="text-gray-600">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Learning Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  month: "Months 1-2",
                  title: "Strengthen DSA Foundation",
                  tasks: ["Complete trees and binary search trees", "Learn graph algorithms (BFS, DFS)", "Start dynamic programming basics"]
                },
                {
                  month: "Months 3-4",
                  title: "Web Development Fundamentals",
                  tasks: ["Master HTML, CSS, JavaScript", "Learn responsive design", "Start with React.js basics"]
                },
                {
                  month: "Months 5-6",
                  title: "Backend Development",
                  tasks: ["Learn Node.js and Express", "Understand REST APIs", "Database integration"]
                },
                {
                  month: "Months 7-8",
                  title: "Advanced Concepts & Projects",
                  tasks: ["Advanced DSA topics", "Build full-stack projects", "Start competitive programming"]
                },
                {
                  month: "Months 9-10",
                  title: "Specialization & Portfolio",
                  tasks: ["Choose specialization track", "Build impressive projects", "Open source contributions"]
                },
                {
                  month: "Months 11-12",
                  title: "Internship Preparation",
                  tasks: ["Mock interviews", "System design basics", "Resume building"]
                }
              ].map((phase, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                            {phase.month}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                        </div>
                        <ul className="space-y-1 mt-3">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                              {task}
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
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{resource.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects to Build</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Full-Stack Projects</CardTitle>
                <p className="text-gray-600 text-center">Build these projects to showcase your skills</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg border">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{project}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Critical Success Tips for 2nd Year</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Balance Theory and Practice",
                  description: "Don't just solve problems, understand the underlying concepts and patterns."
                },
                {
                  title: "Build Projects Regularly",
                  description: "Aim for at least one project per month. Quality over quantity matters."
                },
                {
                  title: "Start Competitive Programming",
                  description: "Join contests on Codeforces, CodeChef. Aim for at least Specialist level."
                },
                {
                  title: "Learn Industry Standards",
                  description: "Use proper version control, follow coding standards, write clean code."
                },
                {
                  title: "Network with Peers",
                  description: "Join hackathons, attend tech meetups, collaborate on projects."
                },
                {
                  title: "Document Everything",
                  description: "Maintain a strong GitHub profile, write good README files."
                }
              ].map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Specialization?</h2>
          <p className="text-xl mb-8">
            With strong fundamentals and project experience, it's time to choose your specialization in 3rd year!
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
            <a href="/third-year">Explore 3rd Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondYear;

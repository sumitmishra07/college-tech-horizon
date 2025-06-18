
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
        { name: "Striver's A2Z DSA Course/Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { name: "Abdul Bari Algorithm Course", url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
        { name: "LeetCode Medium Problems", url: "https://leetcode.com/problemset/all/?difficulty=MEDIUM" },
        { name: "Codeforces Div 2 Problems", url: "https://codeforces.com/problemset?order=BY_RATING_ASC&tags=div2" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "The Complete Web Developer Course by Colt Steele", url: "https://www.udemy.com/course/the-web-developer-bootcamp/" },
        { name: "JavaScript Mastery YouTube Channel", url: "https://www.youtube.com/@javascriptmastery" },
        { name: "React - The Complete Guide by Maximilian", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
        { name: "Node.js Course by Traversy Media", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" }
      ]
    },
    {
      category: "Database Management",
      items: [
        { name: "SQL Tutorial by W3Schools", url: "https://www.w3schools.com/sql/" },
        { name: "MongoDB University Courses", url: "https://university.mongodb.com/" },
        { name: "Database Design Course by Stanford", url: "https://www.edx.org/course/databases-5-sql" },
        { name: "SQL by Anuj Bhaiya", url: "https://www.youtube.com/watch?v=hlGoQC332VM&list=PLKnIA16_Rmvb4hKG2Zo_Py-uOPhkDyJeP" }
      ]
    },
    {
      category: "Competitive Programming",
      items: [
        { name: "Codeforces Problemset", url: "https://codeforces.com/problemset" },
        { name: "AtCoder Beginner Contests", url: "https://atcoder.jp/contests/archive?ratedType=0&category=0&keyword=" },
        { name: "CodeChef Long Challenges", url: "https://www.codechef.com/practice" },
        { name: "USACO Training Program", url: "http://www.usaco.org/index.php?page=traininggateway" }
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">2nd Year - Core + Development</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-100">
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
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="flex items-center text-foreground">
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
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
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
                <Card key={index} className="border-l-4 border-l-primary bg-background border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mr-4">
                            {phase.month}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                        </div>
                        <ul className="space-y-1 mt-3">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-center text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
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
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{resource.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
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
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Projects to Build</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Full-Stack Projects</CardTitle>
                <p className="text-muted-foreground text-center">Build these projects to showcase your skills</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center p-4 bg-card rounded-lg border border-border">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{project}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Critical Success Tips for 2nd Year</h2>
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
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow bg-background border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Specialization?</h2>
          <p className="text-xl mb-8 text-gray-100">
            With strong fundamentals and project experience, it's time to choose your specialization in 3rd year!
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg" asChild>
            <a href="/third-year">Explore 3rd Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondYear;

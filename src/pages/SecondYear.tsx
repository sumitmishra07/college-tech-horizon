import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

const SecondYear = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const focusAreas = [
    {
      title: "Advanced Data Structures & Algorithms",
      description: "Master complex algorithms and optimize your problem-solving skills",
      topics: ["Trees & Graphs", "Dynamic Programming", "Advanced Sorting", "Greedy Algorithms", "Backtracking"]
    },
    {
      title: "Web Development",
      description: "Build full-stack applications with modern frameworks",
      topics: ["HTML/CSS/JS", "React/Angular", "Node.js", "Express", "MongoDB/SQL"]
    },
    {
      title: "Object-Oriented Programming",
      description: "Deep dive into OOP concepts and design patterns",
      topics: ["Inheritance", "Polymorphism", "Encapsulation", "Design Patterns", "SOLID Principles"]
    },
    {
      title: "Database Management",
      description: "Learn to design and manage databases effectively",
      topics: ["SQL Queries", "Database Design", "Normalization", "Transactions", "NoSQL Basics"]
    }
  ];

  const youtubeChannels = [
    {
      name: "Striver",
      description: "Advanced DSA & Placement Preparation",
      url: "https://www.youtube.com/@takeUforward",
      subscribers: "650K+"
    },
    {
      name: "Traversy Media", 
      description: "Web Development Tutorials",
      url: "https://www.youtube.com/@TraversyMedia",
      subscribers: "2M+"
    },
    {
      name: "The Net Ninja",
      description: "Modern Web Development",
      url: "https://www.youtube.com/@NetNinja",
      subscribers: "1M+"
    },
    {
      name: "Web Dev Simplified",
      description: "Simple Web Development Concepts",
      url: "https://www.youtube.com/@WebDevSimplified",
      subscribers: "1.2M+"
    }
  ];

  const resources = [
    {
      category: "Advanced DSA",
      items: [
        { name: "Striver's SDE Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
        { name: "LeetCode Top Interview Questions", url: "https://leetcode.com/explore/interview/card/top-interview-questions-medium/" },
        { name: "GeeksforGeeks DSA Course", url: "https://www.geeksforgeeks.org/data-structures/" },
        { name: "Introduction to Algorithms (CLRS)", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "The Complete Web Developer Course", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
        { name: "FreeCodeCamp Web Development", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web" },
        { name: "React Documentation", url: "https://react.dev/" }
      ]
    },
    {
      category: "Database Management",
      items: [
        { name: "MySQL Tutorial by Programming with Mosh", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
        { name: "MongoDB University", url: "https://university.mongodb.com/" },
        { name: "PostgreSQL Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
        { name: "Database Design Course", url: "https://www.coursera.org/learn/database-design" }
      ]
    },
    {
      category: "System Design Basics",
      items: [
        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "Gaurav Sen System Design", url: "https://www.youtube.com/@gkcs" },
        { name: "High Scalability", url: "http://highscalability.com/" },
        { name: "System Design Interview Questions", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
      ]
    }
  ];

  const projects = [
    {
      category: "Web Development Projects",
      items: [
        "E-commerce Website with Payment Integration",
        "Social Media Dashboard",
        "Task Management Application",
        "Weather App with APIs",
        "Blog Platform with CMS"
      ]
    },
    {
      category: "DSA Projects",
      items: [
        "Sorting Algorithm Visualizer",
        "Pathfinding Algorithm Implementation",
        "Graph Algorithms Visualization",
        "Binary Search Tree Operations",
        "Hash Table Implementation"
      ]
    }
  ];

  const platforms = [
    { name: "LeetCode", description: "Medium & Hard problems", url: "https://leetcode.com" },
    { name: "CodeForces", description: "Competitive Programming", url: "https://codeforces.com" },
    { name: "HackerEarth", description: "Programming Challenges", url: "https://www.hackerearth.com" },
    { name: "InterviewBit", description: "Interview Preparation", url: "https://www.interviewbit.com" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">2nd Year - Development Phase</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
              Master advanced algorithms and start building real-world projects. This year combines theory with practical development skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Advanced DSA</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Web Development</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Projects</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Database</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 bg-gray-800/60 backdrop-blur-sm border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{area.title}</CardTitle>
                  <p className="text-gray-300">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
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

      {/* YouTube Channels */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Popular YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 bg-gray-800/60 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{channel.name}</h3>
                  <p className="text-gray-300 mb-2 text-sm">{channel.description}</p>
                  <p className="text-green-400 text-sm mb-3">{channel.subscribers}</p>
                  <a 
                    href={channel.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline flex items-center justify-center gap-1"
                  >
                    Visit Channel <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{resource.category}</CardTitle>
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
                          className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {item.name} <ExternalLink className="w-3 h-3" />
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

      {/* Practice Platforms */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Advanced Practice Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{platform.name}</h3>
                  <p className="text-gray-300 mb-3">{platform.description}</p>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline flex items-center justify-center gap-1"
                  >
                    Visit Platform <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Project Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for 3rd Year?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Once you've mastered development basics, it's time to specialize and contribute to open source!
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg" asChild>
            <a href="/third-year">Explore 3rd Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondYear;


import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FirstYear = () => {
  const focusAreas = [
    {
      title: "Programming Fundamentals",
      description: "Start with C++ or Python to build your coding foundation",
      topics: ["Variables & Data Types", "Control Structures", "Functions", "Arrays & Strings", "OOP Concepts"]
    },
    {
      title: "Basic Data Structures",
      description: "Learn fundamental data structures and simple algorithms",
      topics: ["Arrays", "Strings", "Linked Lists", "Stacks & Queues", "Basic Sorting"]
    },
    {
      title: "Development Tools",
      description: "Get familiar with essential development tools",
      topics: ["Git & GitHub", "VS Code", "Command Line", "Debugging", "Code Documentation"]
    },
    {
      title: "CS Fundamentals",
      description: "Introduction to core computer science concepts",
      topics: ["Number Systems", "Basic OS Concepts", "Database Basics", "Computer Networks Intro"]
    }
  ];

  const resources = [
    {
      category: "Programming (C++)",
      items: [
        "Apna College C++ Course - CodeHelp by Babbar",
        "C++ Tutorial by FreeCodeCamp",
        "Programming with Mosh - C++ Course",
        "GeeksforGeeks C++ Articles"
      ]
    },
    {
      category: "Programming (Python)",
      items: [
        "Python Tutorial by Programming with Mosh",
        "Automate the Boring Stuff with Python",
        "Python for Everybody by University of Michigan",
        "CS50 Introduction to Programming with Python"
      ]
    },
    {
      category: "Data Structures & Algorithms",
      items: [
        "Love Babbar DSA Sheet",
        "Striver's A2Z DSA Course",
        "Introduction to Algorithms (CLRS)",
        "LeetCode Easy Problems"
      ]
    },
    {
      category: "Development Tools",
      items: [
        "Git & GitHub Crash Course by Traversy Media",
        "Git Tutorial by Atlassian",
        "VS Code Tips and Tricks",
        "Command Line Basics by FreeCodeCamp"
      ]
    }
  ];

  const projects = [
    "Calculator (Console-based)",
    "Simple Banking System",
    "Student Grade Management",
    "Tic-Tac-Toe Game",
    "Library Management System (Basic)",
    "Number Guessing Game"
  ];

  const platforms = [
    { name: "LeetCode", description: "Start with Easy problems", url: "leetcode.com" },
    { name: "CodeStudio", description: "Practice coding problems", url: "codestudio.com" },
    { name: "HackerRank", description: "Programming challenges", url: "hackerrank.com" },
    { name: "GeeksforGeeks", description: "Theory and practice", url: "geeksforgeeks.org" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">1st Year - Foundation Phase</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Build strong programming fundamentals and start your coding journey. This year is all about learning the basics right!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Programming</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Basic DSA</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Git & GitHub</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">CS Fundamentals</span>
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

      {/* Learning Resources */}
      <section className="py-16 bg-gray-50">
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

      {/* Practice Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Recommended Practice Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{platform.name}</h3>
                  <p className="text-gray-600 mb-3">{platform.description}</p>
                  <p className="text-sm text-gray-500">{platform.url}</p>
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
                <CardTitle className="text-2xl text-primary text-center">Beginner-Friendly Projects</CardTitle>
                <p className="text-gray-600 text-center">Start with these simple projects to apply what you learn</p>
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

      {/* What NOT to Miss */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What NOT to Miss in 1st Year</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Don't Rush into Advanced Topics",
                  description: "Focus on basics first. Don't jump to complex algorithms without understanding fundamentals."
                },
                {
                  title: "Practice Coding Daily",
                  description: "Consistency is key. Even 30 minutes of coding daily is better than 5 hours once a week."
                },
                {
                  title: "Learn Git Early",
                  description: "Start using Git and GitHub from day one. It's essential for all your future projects."
                },
                {
                  title: "Join Coding Communities",
                  description: "Connect with seniors and peers. Join Discord servers, college coding clubs."
                },
                {
                  title: "Document Your Learning",
                  description: "Maintain a learning journal or blog. Write about what you learn daily."
                },
                {
                  title: "Focus on Problem Solving",
                  description: "Don't just learn syntax. Focus on solving problems and logical thinking."
                }
              ].map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for 2nd Year?</h2>
          <p className="text-xl mb-8">
            Once you're comfortable with programming basics and simple DSA, move to the next level!
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
            <a href="/second-year">Explore 2nd Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstYear;

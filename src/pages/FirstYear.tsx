
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

const FirstYear = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        { name: "Apna College C++ Course - CodeHelp by Babbar", url: "https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" },
        { name: "C++ Tutorial by FreeCodeCamp", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        { name: "Programming with Mosh - C++ Course", url: "https://www.youtube.com/watch?v=ZzaPdXTrSb8" },
        { name: "GeeksforGeeks C++ Articles", url: "https://www.geeksforgeeks.org/c-plus-plus/" }
      ]
    },
    {
      category: "Programming (Python)",
      items: [
        { name: "Python Tutorial by Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
        { name: "Python for Everybody by University of Michigan", url: "https://www.coursera.org/specializations/python" },
        { name: "CS50 Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/2022/" }
      ]
    },
    {
      category: "Data Structures & Algorithms",
      items: [
        { name: "Love Babbar DSA Sheet", url: "https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiOGo0YTH-mFm/view?usp=sharing" },
        { name: "Striver's A2Z DSA Course", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { name: "Introduction to Algorithms (CLRS)", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
        { name: "LeetCode Easy Problems", url: "https://leetcode.com/problemset/all/?difficulty=EASY" }
      ]
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git & GitHub Crash Course by Traversy Media", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
        { name: "Git Tutorial by Atlassian", url: "https://www.atlassian.com/git/tutorials" },
        { name: "VS Code Tips and Tricks", url: "https://www.youtube.com/watch?v=ifTF3ags0XI" },
        { name: "Command Line Basics by FreeCodeCamp", url: "https://www.youtube.com/watch?v=yz7nYlnXLfE" }
      ]
    }
  ];

  const youtubeChannels = [
    {
      name: "CodeHelp - by Babbar",
      description: "Complete DSA & Programming courses",
      url: "https://www.youtube.com/@CodeHelp",
      subscribers: "500K+"
    },
    {
      name: "Apna College",
      description: "Programming fundamentals & placement prep",
      url: "https://www.youtube.com/@ApnaCollegeOfficial",
      subscribers: "3.5M+"
    },
    {
      name: "Programming with Mosh",
      description: "Clear programming tutorials",
      url: "https://www.youtube.com/@programmingwithmosh",
      subscribers: "3M+"
    },
    {
      name: "FreeCodeCamp",
      description: "Free comprehensive programming courses",
      url: "https://www.youtube.com/@freecodecamp",
      subscribers: "8M+"
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
    { name: "LeetCode", description: "Start with Easy problems", url: "https://leetcode.com" },
    { name: "CodeStudio", description: "Practice coding problems", url: "https://www.codingninjas.com/studio" },
    { name: "HackerRank", description: "Programming challenges", url: "https://www.hackerrank.com" },
    { name: "GeeksforGeeks", description: "Theory and practice", url: "https://www.geeksforgeeks.org" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section - Matching home page style */}
      <section className="relative hero-gradient text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            1st Year - Foundation Phase
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Build strong programming fundamentals and start your coding journey. This year is all about learning the basics right!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Programming</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Basic DSA</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Git & GitHub</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">CS Fundamentals</span>
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">Recommended Practice Platforms</h2>
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

      {/* Sample Projects */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Projects to Build</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 text-center">Beginner-Friendly Projects</CardTitle>
                <p className="text-gray-300 text-center">Start with these simple projects to apply what you learn</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </span>
                      <span className="text-gray-300">{project}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What NOT to Miss */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">What NOT to Miss in 1st Year</h2>
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
                <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                    <p className="text-gray-300">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for 2nd Year?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Once you're comfortable with programming basics and simple DSA, move to the next level!
          </p>
          <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg" asChild>
            <a href="/second-year">Explore 2nd Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstYear;

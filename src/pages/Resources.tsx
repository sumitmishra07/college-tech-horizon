
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const tools = [
    {
      category: "Development Tools",
      items: [
        {
          name: "Visual Studio Code",
          description: "Free, powerful code editor with extensions",
          type: "Free",
          url: "code.visualstudio.com"
        },
        {
          name: "Git & GitHub",
          description: "Version control and code hosting platform",
          type: "Free",
          url: "github.com"
        },
        {
          name: "Figma",
          description: "Collaborative design and prototyping tool",
          type: "Free/Paid",
          url: "figma.com"
        },
        {
          name: "Postman",
          description: "API development and testing platform",
          type: "Free/Paid",
          url: "postman.com"
        }
      ]
    },
    {
      category: "Learning Platforms",
      items: [
        {
          name: "LeetCode",
          description: "Coding interview preparation platform",
          type: "Free/Premium",
          url: "leetcode.com"
        },
        {
          name: "Coursera",
          description: "Online courses from top universities",
          type: "Free/Paid",
          url: "coursera.org"
        },
        {
          name: "YouTube",
          description: "Free educational content and tutorials",
          type: "Free",
          url: "youtube.com"
        },
        {
          name: "Udemy",
          description: "Practical courses on various tech topics",
          type: "Paid",
          url: "udemy.com"
        }
      ]
    },
    {
      category: "Practice Platforms",
      items: [
        {
          name: "HackerRank",
          description: "Programming challenges and competitions",
          type: "Free/Premium",
          url: "hackerrank.com"
        },
        {
          name: "Codeforces",
          description: "Competitive programming contests",
          type: "Free",
          url: "codeforces.com"
        },
        {
          name: "GeeksforGeeks",
          description: "CS concepts and interview preparation",
          type: "Free/Premium",
          url: "geeksforgeeks.org"
        },
        {
          name: "Kaggle",
          description: "Data science competitions and datasets",
          type: "Free",
          url: "kaggle.com"
        }
      ]
    },
    {
      category: "Design & Productivity",
      items: [
        {
          name: "Canva",
          description: "Graphic design for resumes and presentations",
          type: "Free/Pro",
          url: "canva.com"
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes and planning",
          type: "Free/Paid",
          url: "notion.so"
        },
        {
          name: "Obsidian",
          description: "Knowledge management and note-taking",
          type: "Free/Paid",
          url: "obsidian.md"
        },
        {
          name: "Trello",
          description: "Project management and task organization",
          type: "Free/Paid",
          url: "trello.com"
        }
      ]
    }
  ];

  const ytChannels = [
    {
      category: "Programming & DSA",
      channels: [
        {
          name: "CodeHelp - by Babbar",
          subscribers: "500K+",
          focus: "DSA, C++, Placement Prep"
        },
        {
          name: "Striver",
          subscribers: "300K+",
          focus: "DSA Sheet, Interview Prep"
        },
        {
          name: "Abdul Bari",
          subscribers: "1M+",
          focus: "Algorithms, Data Structures"
        },
        {
          name: "Apna College",
          subscribers: "4M+",
          focus: "Programming, Web Dev"
        }
      ]
    },
    {
      category: "Web Development",
      channels: [
        {
          name: "Traversy Media",
          subscribers: "2M+",
          focus: "Full Stack, Tutorials"
        },
        {
          name: "JavaScript Mastery",
          subscribers: "1M+",
          focus: "React, Modern JS"
        },
        {
          name: "The Net Ninja",
          subscribers: "1M+",
          focus: "Web Technologies"
        },
        {
          name: "Programming with Mosh",
          subscribers: "3M+",
          focus: "Clean Code, Best Practices"
        }
      ]
    },
    {
      category: "Machine Learning & AI",
      channels: [
        {
          name: "3Blue1Brown",
          subscribers: "5M+",
          focus: "Math, Neural Networks"
        },
        {
          name: "Two Minute Papers",
          subscribers: "1M+",
          focus: "AI Research, Papers"
        },
        {
          name: "StatQuest",
          subscribers: "900K+",
          focus: "Statistics, ML Concepts"
        },
        {
          name: "Krish Naik",
          subscribers: "800K+",
          focus: "ML, Data Science"
        }
      ]
    },
    {
      category: "Career & Interviews",
      channels: [
        {
          name: "TechLead",
          subscribers: "1M+",
          focus: "Career Advice, Tech Life"
        },
        {
          name: "Clément Mihailescu",
          subscribers: "200K+",
          focus: "Interview Prep, Career"
        },
        {
          name: "Engineering with Utsav",
          subscribers: "500K+",
          focus: "Placement, Indian Context"
        },
        {
          name: "Love Babbar",
          subscribers: "400K+",
          focus: "Placement, DSA"
        }
      ]
    }
  ];

  const books = [
    {
      category: "Programming & Algorithms",
      books: [
        "Introduction to Algorithms by CLRS",
        "Cracking the Coding Interview by Gayle McDowell",
        "Elements of Programming Interviews",
        "Algorithm Design Manual by Steven Skiena"
      ]
    },
    {
      category: "System Design",
      books: [
        "Designing Data-Intensive Applications by Martin Kleppmann",
        "System Design Interview by Alex Xu",
        "Building Microservices by Sam Newman",
        "High Performance MySQL"
      ]
    },
    {
      category: "Web Development",
      books: [
        "You Don't Know JS series",
        "Eloquent JavaScript by Marijn Haverbeke",
        "Learning React by Alex Banks",
        "Node.js Design Patterns"
      ]
    },
    {
      category: "Career Development",
      books: [
        "The Pragmatic Programmer",
        "Clean Code by Robert Martin",
        "Soft Skills by John Sonmez",
        "The Complete Software Developer's Career Guide"
      ]
    }
  ];

  const internshipPlatforms = [
    {
      name: "Internshala",
      description: "India's largest internship platform",
      type: "Free",
      focus: "Internships, Jobs, Courses"
    },
    {
      name: "LinkedIn",
      description: "Professional networking and job platform",
      type: "Free/Premium",
      focus: "Networking, Jobs, Learning"
    },
    {
      name: "AngelList",
      description: "Startup jobs and equity opportunities",
      type: "Free",
      focus: "Startups, Equity Jobs"
    },
    {
      name: "Naukri.com",
      description: "India's leading job portal",
      type: "Free",
      focus: "Jobs, Career Services"
    },
    {
      name: "Indeed",
      description: "Global job search engine",
      type: "Free",
      focus: "Job Search, Company Reviews"
    },
    {
      name: "Glassdoor",
      description: "Company reviews and salary insights",
      type: "Free",
      focus: "Reviews, Salaries, Interviews"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Tools & Resources</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Discover the best tools, platforms, and resources to accelerate your learning and build amazing projects. Everything you need in one place!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Development Tools</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Learning Platforms</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">YouTube Channels</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Job Platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Essential Tools & Platforms</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((tool, i) => (
                      <div key={i} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            tool.type === 'Free' ? 'bg-green-100 text-green-800' : 
                            tool.type.includes('Free') ? 'bg-blue-100 text-blue-800' : 
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {tool.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{tool.description}</p>
                        <p className="text-gray-500 text-xs">{tool.url}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Top YouTube Channels</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ytChannels.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.channels.map((channel, i) => (
                      <div key={i} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{channel.name}</h3>
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                            {channel.subscribers}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{channel.focus}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Recommended Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.books.map((book, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></span>
                        {book}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job & Internship Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Job & Internship Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      platform.type === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {platform.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{platform.description}</p>
                  <p className="text-sm text-primary font-medium">{platform.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Free Resources",
                description: "High-quality free tools and platforms",
                items: ["YouTube tutorials", "GitHub repositories", "Open source tools", "Free tier cloud services"],
                color: "green"
              },
              {
                title: "Premium Resources",
                description: "Paid resources worth the investment",
                items: ["LeetCode Premium", "System design courses", "Professional certifications", "Premium learning platforms"],
                color: "blue"
              },
              {
                title: "Community Resources",
                description: "Connect with fellow developers",
                items: ["Discord servers", "Reddit communities", "Stack Overflow", "Local meetups"],
                color: "purple"
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className={`text-xl text-${category.color}-600`}>{category.title}</CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className={`w-2 h-2 bg-${category.color}-500 rounded-full mr-3`}></span>
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

      {/* Tips Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Resource Utilization Tips</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Start with Free Resources",
                description: "Begin your learning journey with free platforms before investing in premium ones."
              },
              {
                title: "Focus on Quality",
                description: "Choose 2-3 high-quality resources rather than overwhelming yourself with too many options."
              },
              {
                title: "Practice Regularly",
                description: "Consistency in using practice platforms is more important than intensity."
              },
              {
                title: "Join Communities",
                description: "Engage with developer communities for networking, help, and motivation."
              },
              {
                title: "Track Your Progress",
                description: "Use tools like GitHub, portfolios, and learning journals to track your growth."
              },
              {
                title: "Stay Updated",
                description: "Follow tech blogs, newsletters, and podcasts to stay current with industry trends."
              }
            ].map((tip, index) => (
              <Card key={index} className="border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Using These Resources Today!</h2>
          <p className="text-xl mb-8">
            The best resource is the one you actually use. Pick a few that match your current learning goals and start building!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="/first-year">Start Learning Path</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg" asChild>
              <a href="/blog">Read Success Stories</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

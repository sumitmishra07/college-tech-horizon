import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";

const Resources = () => {
  const tools = [
    {
      category: "Development Tools",
      items: [
        {
          name: "Visual Studio Code",
          description: "Free, powerful code editor with extensions",
          type: "Free",
          url: "https://code.visualstudio.com/"
        },
        {
          name: "Git & GitHub",
          description: "Version control and code hosting platform",
          type: "Free",
          url: "https://github.com/"
        },
        {
          name: "Figma",
          description: "Collaborative design and prototyping tool",
          type: "Free/Paid",
          url: "https://figma.com/"
        },
        {
          name: "Postman",
          description: "API development and testing platform",
          type: "Free/Paid",
          url: "https://postman.com/"
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
          url: "https://leetcode.com/"
        },
        {
          name: "Coursera",
          description: "Online courses from top universities",
          type: "Free/Paid",
          url: "https://coursera.org/"
        },
        {
          name: "YouTube",
          description: "Free educational content and tutorials",
          type: "Free",
          url: "https://youtube.com/"
        },
        {
          name: "Udemy",
          description: "Practical courses on various tech topics",
          type: "Paid",
          url: "https://udemy.com/"
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
          url: "https://hackerrank.com/"
        },
        {
          name: "Codeforces",
          description: "Competitive programming contests",
          type: "Free",
          url: "https://codeforces.com/"
        },
        {
          name: "GeeksforGeeks",
          description: "CS concepts and interview preparation",
          type: "Free/Premium",
          url: "https://geeksforgeeks.org/"
        },
        {
          name: "Kaggle",
          description: "Data science competitions and datasets",
          type: "Free",
          url: "https://kaggle.com/"
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
          url: "https://canva.com/"
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes and planning",
          type: "Free/Paid",
          url: "https://notion.so/"
        },
        {
          name: "Obsidian",
          description: "Knowledge management and note-taking",
          type: "Free/Paid",
          url: "https://obsidian.md/"
        },
        {
          name: "Trello",
          description: "Project management and task organization",
          type: "Free/Paid",
          url: "https://trello.com/"
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
          focus: "DSA, C++, Placement Prep",
          url: "https://www.youtube.com/@CodeHelp"
        },
        {
          name: "Striver",
          subscribers: "300K+",
          focus: "DSA Sheet, Interview Prep",
          url: "https://www.youtube.com/@takeUforward"
        },
        {
          name: "Abdul Bari",
          subscribers: "1M+",
          focus: "Algorithms, Data Structures",
          url: "https://www.youtube.com/@abdul_bari"
        },
        {
          name: "Apna College",
          subscribers: "4M+",
          focus: "Programming, Web Dev",
          url: "https://www.youtube.com/@ApnaCollegeOfficial"
        }
      ]
    },
    {
      category: "Web Development",
      channels: [
        {
          name: "Traversy Media",
          subscribers: "2M+",
          focus: "Full Stack, Tutorials",
          url: "https://www.youtube.com/@TraversyMedia"
        },
        {
          name: "JavaScript Mastery",
          subscribers: "1M+",
          focus: "React, Modern JS",
          url: "https://www.youtube.com/@javascriptmastery"
        },
        {
          name: "The Net Ninja",
          subscribers: "1M+",
          focus: "Web Technologies",
          url: "https://www.youtube.com/@NetNinja"
        },
        {
          name: "Programming with Mosh",
          subscribers: "3M+",
          focus: "Clean Code, Best Practices",
          url: "https://www.youtube.com/@programmingwithmosh"
        }
      ]
    },
    {
      category: "Machine Learning & AI",
      channels: [
        {
          name: "3Blue1Brown",
          subscribers: "5M+",
          focus: "Math, Neural Networks",
          url: "https://www.youtube.com/@3blue1brown"
        },
        {
          name: "Two Minute Papers",
          subscribers: "1M+",
          focus: "AI Research, Papers",
          url: "https://www.youtube.com/@TwoMinutePapers"
        },
        {
          name: "StatQuest",
          subscribers: "900K+",
          focus: "Statistics, ML Concepts",
          url: "https://www.youtube.com/@statquest"
        },
        {
          name: "Krish Naik",
          subscribers: "800K+",
          focus: "ML, Data Science",
          url: "https://www.youtube.com/@krishnaik06"
        }
      ]
    },
    {
      category: "Career & Interviews",
      channels: [
        {
          name: "TechLead",
          subscribers: "1M+",
          focus: "Career Advice, Tech Life",
          url: "https://www.youtube.com/@TechLead"
        },
        {
          name: "Clément Mihailescu",
          subscribers: "200K+",
          focus: "Interview Prep, Career",
          url: "https://www.youtube.com/@ClementMihailescu"
        },
        {
          name: "Engineering with Utsav",
          subscribers: "500K+",
          focus: "Placement, Indian Context",
          url: "https://www.youtube.com/@EngineeringwithUtsav"
        },
        {
          name: "Love Babbar",
          subscribers: "400K+",
          focus: "Placement, DSA",
          url: "https://www.youtube.com/@LoveBabbar"
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Tools & Resources</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-100">
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
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Essential Tools & Platforms</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((tool, i) => (
                      <div key={i} className="border border-border rounded-lg p-4 hover:bg-card transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{tool.name}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            tool.type === 'Free' ? 'bg-green-900 text-green-100' : 
                            tool.type.includes('Free') ? 'bg-blue-900 text-blue-100' : 
                            'bg-orange-900 text-orange-100'
                          }`}>
                            {tool.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{tool.description}</p>
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs hover:underline flex items-center gap-1"
                        >
                          Visit {tool.name} <ExternalLink className="w-3 h-3" />
                        </a>
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
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Top YouTube Channels</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ytChannels.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-red-400 flex items-center gap-2">
                    <Youtube className="w-5 h-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.channels.map((channel, i) => (
                      <div key={i} className="border border-border rounded-lg p-4 hover:bg-card transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{channel.name}</h3>
                          <span className="bg-red-900 text-red-100 px-2 py-1 rounded text-xs font-medium">
                            {channel.subscribers}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{channel.focus}</p>
                        <a 
                          href={channel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs hover:underline flex items-center gap-1"
                        >
                          Visit Channel <Youtube className="w-3 h-3" />
                        </a>
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
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Recommended Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.books.map((book, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2"></span>
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
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Job & Internship Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{platform.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      platform.type === 'Free' ? 'bg-green-900 text-green-100' : 'bg-blue-900 text-blue-100'
                    }`}>
                      {platform.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{platform.description}</p>
                  <p className="text-sm text-primary font-medium">{platform.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Resource Categories</h2>
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
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardHeader>
                  <CardTitle className={`text-xl text-${category.color}-400`}>{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <span className={`w-2 h-2 bg-${category.color}-400 rounded-full mr-3`}></span>
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
      <section className="py-16 cool-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Resource Utilization Tips</h2>
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
              <Card key={index} className="border-l-4 border-l-blue-400 hover:shadow-lg transition-shadow bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Using These Resources Today!</h2>
          <p className="text-xl mb-8 text-gray-100">
            The best resource is the one you actually use. Pick a few that match your current learning goals and start building!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg" asChild>
              <a href="/first-year">Start Learning Path</a>
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

export default Resources;

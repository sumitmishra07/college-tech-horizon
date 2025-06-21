
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, User, Clock, Code, Briefcase, GraduationCap } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredStories = [
    {
      title: "How I Got Placed in Google After 150+ Rejections",
      author: "Priyanka Sharma",
      date: "2024-01-20",
      readTime: "6 min read",
      category: "Success Story",
      excerpt: "My journey from multiple rejections to finally landing a software engineer role at Google. The mistakes I made and lessons learned.",
      url: "https://www.quora.com/How-do-I-get-a-job-at-Google",
      image: "/placeholder.svg",
      tags: ["Google", "Interview", "Persistence", "Career Growth"]
    },
    {
      title: "From Tier-3 College to Microsoft: My Placement Journey",
      author: "Rahul Kumar",
      date: "2024-01-18",
      readTime: "8 min read",
      category: "Placement Success",
      excerpt: "How I overcame the disadvantage of being from a tier-3 college and secured a placement at Microsoft through consistent preparation.",
      url: "https://www.quora.com/What-is-the-best-way-to-prepare-for-software-engineering-interviews",
      image: "/placeholder.svg",
      tags: ["Microsoft", "Tier-3 College", "Preparation", "Success"]
    },
    {
      title: "My Journey from 2.8 CGPA to Amazon SDE Role",
      author: "Ankit Gupta",
      date: "2024-01-15",
      readTime: "10 min read",
      category: "Career Transformation",
      excerpt: "How I turned my poor academic performance around and landed a software development engineer role at Amazon.",
      url: "https://www.quora.com/How-can-someone-with-low-CGPA-get-placed-in-good-companies",
      image: "/placeholder.svg",
      tags: ["Amazon", "Low CGPA", "Comeback", "Software Engineering"]
    },
    {
      title: "Breaking into Tech: From Non-CS Background to Meta",
      author: "Sneha Patel",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Career Switch",
      excerpt: "My transition from mechanical engineering to software development and how I secured a position at Meta.",
      url: "https://www.quora.com/How-can-a-non-CS-student-get-into-software-companies",
      image: "/placeholder.svg",
      tags: ["Meta", "Career Switch", "Non-CS", "Transition"]
    },
    {
      title: "Campus Placement Success: From 0 to 15 LPA in Final Year",
      author: "Vikash Singh",
      date: "2024-01-10",
      readTime: "9 min read",
      category: "Campus Placement",
      excerpt: "Strategic approach to campus placements that helped me secure multiple offers including a 15 LPA package.",
      url: "https://www.quora.com/What-are-some-tips-for-campus-placements",
      image: "/placeholder.svg",
      tags: ["Campus Placement", "Strategy", "Multiple Offers", "High Package"]
    },
    {
      title: "My Off-Campus Journey: 300+ Applications to Dream Job",
      author: "Deepak Yadav",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Off-Campus Success",
      excerpt: "The complete guide to off-campus job hunting in tech, from resume building to interview cracking.",
      url: "https://www.quora.com/How-do-I-get-an-off-campus-job-in-software-companies",
      image: "/placeholder.svg",
      tags: ["Off-Campus", "Job Hunt", "Resume", "Interview Prep"]
    }
  ];

  const techTutorials = [
    {
      title: "React Tutorial for Beginners",
      author: "Programming with Mosh",
      platform: "YouTube",
      duration: "1.5 hours",
      url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
      description: "Complete React tutorial covering components, hooks, state management, and modern React practices.",
      difficulty: "Beginner",
      tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
      title: "Python for Everybody Specialization",
      author: "University of Michigan",
      platform: "Coursera",
      duration: "8 months",
      url: "https://www.coursera.org/specializations/python",
      description: "Learn to program and analyze data with Python. Develop programs to gather, clean, analyze, and visualize data.",
      difficulty: "Beginner",
      tags: ["Python", "Data Analysis", "Programming", "Coursera"]
    },
    {
      title: "System Design Interview",
      author: "Gaurav Sen",
      platform: "YouTube",
      duration: "2 hours",
      url: "https://www.youtube.com/watch?v=UzLMhqg3_Wc",
      description: "How to approach system design interviews with real examples and case studies from big tech companies.",
      difficulty: "Advanced",
      tags: ["System Design", "Interviews", "Architecture", "Scalability"]
    },
    {
      title: "Full Stack Open 2024",
      author: "University of Helsinki",
      platform: "Online Course",
      duration: "Self-paced",
      url: "https://fullstackopen.com/en/",
      description: "Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript. Free comprehensive full-stack course.",
      difficulty: "Intermediate",
      tags: ["Full Stack", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Data Structures and Algorithms Complete Course",
      author: "Abdul Bari",
      platform: "Udemy",
      duration: "5.5 hours",
      url: "https://www.udemy.com/course/datastructurescncpp/",
      description: "Master data structures & algorithms in C and C++. Essential for coding interviews and competitive programming.",
      difficulty: "Intermediate",
      tags: ["DSA", "C++", "Algorithms", "Interview Prep"]
    },
    {
      title: "Docker Tutorial for Beginners",
      author: "TechWorld with Nana",
      platform: "YouTube",
      duration: "3 hours",
      url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      description: "Complete Docker tutorial covering containerization, Docker compose, and deployment strategies.",
      difficulty: "Beginner",
      tags: ["Docker", "DevOps", "Containers", "Deployment"]
    }
  ];

  const careerInsights = [
    {
      title: "What I Wish I Knew Before Starting My Tech Career",
      author: "r/cscareerquestions",
      date: "2024-01-22",
      readTime: "5 min read",
      url: "https://www.reddit.com/r/cscareerquestions/",
      excerpt: "Senior developers share the most important lessons they learned early in their careers and advice for newcomers.",
      category: "Career Advice",
      tags: ["Career Start", "Lessons Learned", "Senior Advice", "Tech Industry"]
    },
    {
      title: "Salary Negotiation Tips That Actually Work in Tech",
      author: "r/ITCareerQuestions",
      date: "2024-01-20",
      readTime: "7 min read",
      url: "https://www.reddit.com/r/ITCareerQuestions/",
      excerpt: "Real experiences and proven strategies for negotiating better compensation packages in tech roles.",
      category: "Salary Tips",
      tags: ["Salary Negotiation", "Compensation", "Career Growth", "Tech Jobs"]
    },
    {
      title: "How to Build a Portfolio That Gets You Hired",
      author: "r/webdev",
      date: "2024-01-18",
      readTime: "8 min read",
      url: "https://www.reddit.com/r/webdev/",
      excerpt: "Developers share what makes a portfolio stand out to recruiters and hiring managers in the current market.",
      category: "Portfolio Tips",
      tags: ["Portfolio", "Projects", "Hiring", "Web Development"]
    },
    {
      title: "Remote Work vs Office: Pros and Cons from Tech Workers",
      author: "r/remotework",
      date: "2024-01-15",
      readTime: "6 min read",
      url: "https://www.reddit.com/r/remotework/",
      excerpt: "Tech professionals discuss their experiences with remote work, office culture, and hybrid arrangements.",
      category: "Work Culture",
      tags: ["Remote Work", "Work-Life Balance", "Office Culture", "Productivity"]
    },
    {
      title: "Career Pivot Stories: Switching Tech Roles Successfully",
      author: "r/careerpivot",
      date: "2024-01-12",
      readTime: "9 min read",
      url: "https://www.reddit.com/r/careerpivot/",
      excerpt: "Real stories of professionals who successfully transitioned between different tech roles and industries.",
      category: "Career Change",
      tags: ["Career Pivot", "Role Switch", "Transition", "Success Stories"]
    },
    {
      title: "Imposter Syndrome in Tech: How to Overcome It",
      author: "r/programming",
      date: "2024-01-10",
      readTime: "6 min read",
      url: "https://www.reddit.com/r/programming/",
      excerpt: "Developers share their experiences with imposter syndrome and practical strategies to build confidence.",
      category: "Mental Health",
      tags: ["Imposter Syndrome", "Confidence", "Mental Health", "Career Development"]
    }
  ];

  const learningResources = [
    {
      title: "FreeCodeCamp",
      platform: "FreeCodeCamp",
      type: "Free Curriculum",
      url: "https://www.freecodecamp.org/",
      description: "Learn to code for free with interactive lessons in web development, data science, and machine learning.",
      difficulty: "All Levels"
    },
    {
      title: "The Odin Project",
      platform: "Community",
      type: "Full Curriculum",
      url: "https://www.theodinproject.com/",
      description: "Free full stack curriculum supported by open source community with projects and career guidance.",
      difficulty: "Beginner to Advanced"
    },
    {
      title: "LeetCode",
      platform: "LeetCode",
      type: "Practice Platform",
      url: "https://leetcode.com/",
      description: "Platform for technical interview preparation with coding challenges used by major tech companies.",
      difficulty: "All Levels"
    },
    {
      title: "Roadmap.sh",
      platform: "Community",
      type: "Career Roadmaps",
      url: "https://roadmap.sh/",
      description: "Step by step guides and paths to learn different tools or technologies with community contributions.",
      difficulty: "All Levels"
    }
  ];

  const communityResources = [
    {
      title: "Stack Overflow",
      platform: "Q&A Community",
      type: "Developer Community",
      url: "https://stackoverflow.com/",
      description: "The largest online community for programmers to learn, share knowledge, and build careers.",
      category: "Community"
    },
    {
      title: "Dev.to",
      platform: "Dev Community",
      type: "Blog Platform",
      url: "https://dev.to/",
      description: "Community of software developers getting together to help one another out through articles and discussions.",
      category: "Community"
    },
    {
      title: "GitHub",
      platform: "GitHub",
      type: "Code Repository",
      url: "https://github.com/",
      description: "World's leading software development platform where millions of developers collaborate on projects.",
      category: "Development"
    },
    {
      title: "Reddit Programming",
      platform: "Reddit",
      type: "Discussion Forum",
      url: "https://www.reddit.com/r/programming/",
      description: "Active community discussing programming languages, tools, career advice, and industry trends.",
      category: "Community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Tech Blog & Resources</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
              Stay updated with the latest in tech, read success stories, and discover valuable learning resources from the community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Success Stories</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Career Insights</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Learning Resources</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Tech Tutorials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                      {story.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {story.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white line-clamp-2">{story.title}</CardTitle>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{story.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(story.date).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 line-clamp-3">{story.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-green-500 text-green-400 hover:bg-green-600 hover:text-white"
                    asChild
                  >
                    <a href={story.url} target="_blank" rel="noopener noreferrer">
                      Read Story <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Tutorials */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Popular Tech Tutorials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {techTutorials.map((tutorial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Code className="w-3 h-3" />
                      {tutorial.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{tutorial.title}</CardTitle>
                  <p className="text-gray-400">by {tutorial.author} • {tutorial.platform}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, idx) => (
                      <span key={idx} className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-500 text-red-400 hover:bg-red-600 hover:text-white"
                    asChild
                  >
                    <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
                      Start Learning <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Insights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Career Insights & Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerInsights.map((insight, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      {insight.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white">{insight.title}</CardTitle>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{insight.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(insight.date).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{insight.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <a href={insight.url} target="_blank" rel="noopener noreferrer">
                      Read Article <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Top Learning Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningResources.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {resource.type}
                    </span>
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {resource.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{resource.title}</CardTitle>
                  <p className="text-gray-400 text-sm">Platform: {resource.platform}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit Platform <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Developer Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityResources.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-cyan-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{resource.title}</CardTitle>
                  <p className="text-gray-400 text-sm">{resource.type} • {resource.platform}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Join Community <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Explore our comprehensive resources and join thousands of successful developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="/domains">Explore Domains</a>
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

export default Blog;

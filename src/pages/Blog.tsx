
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, User, Clock, TrendingUp, Code, Briefcase, GraduationCap } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredStories = [
    {
      title: "How I Got Into Google",
      author: "Emma Bostian",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Success Story",
      excerpt: "My journey from bootcamp graduate to Google software engineer, including interview preparation and career tips.",
      url: "https://dev.to/emmabostian/how-i-got-into-google-161p",
      image: "/placeholder.svg",
      tags: ["Google", "Software Engineering", "Career", "Interview Prep"]
    },
    {
      title: "From Zero to Software Developer in 12 Months",
      author: "Alvaro Sanchez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Career Change",
      excerpt: "Complete roadmap and resources I used to transition from non-tech background to landing my first developer job.",
      url: "https://dev.to/alvarosanchez/from-zero-to-software-developer-in-12-months-2058",
      image: "/placeholder.svg",
      tags: ["Career Change", "Self-taught", "Bootcamp", "First Job"]
    },
    {
      title: "My Journey to Becoming a Machine Learning Engineer",
      author: "Chip Huyen",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "ML Career",
      excerpt: "Detailed breakdown of transitioning from software engineering to machine learning, including resources and tips.",
      url: "https://huyenchip.com/2018/10/08/career-advice-recent-cs-graduates.html",
      image: "/placeholder.svg",
      tags: ["Machine Learning", "Career Transition", "Data Science", "AI"]
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
    }
  ];

  const careerInsights = [
    {
      title: "Tech Salary Report 2024",
      author: "Levels.fyi Team",
      date: "2024-01-20",
      readTime: "6 min read",
      url: "https://www.levels.fyi/2024/",
      excerpt: "Comprehensive analysis of tech salaries across different roles, experience levels, and companies worldwide.",
      category: "Salary Insights",
      tags: ["Salaries", "Tech Industry", "Career Planning", "Compensation"]
    },
    {
      title: "The Complete Guide to Remote Tech Jobs",
      author: "AngelList Team",
      date: "2024-01-18",
      readTime: "10 min read",
      url: "https://angel.co/blog/remote-work-guide",
      excerpt: "Everything you need to know about finding and succeeding in remote tech jobs, including best practices.",
      category: "Remote Work",
      tags: ["Remote Work", "Tech Jobs", "Work-Life Balance", "Productivity"]
    },
    {
      title: "How to Build a Developer Portfolio",
      author: "GitHub Team",
      date: "2024-01-15",
      readTime: "8 min read",
      url: "https://github.blog/2021-01-25-improving-how-we-deploy-github/",
      excerpt: "Best practices for creating a developer portfolio that stands out to recruiters and hiring managers.",
      category: "Portfolio Tips",
      tags: ["Portfolio", "GitHub", "Personal Branding", "Job Search"]
    },
    {
      title: "Negotiating Your First Tech Job Offer",
      author: "Haseeb Qureshi",
      date: "2024-01-12",
      readTime: "12 min read",
      url: "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/",
      excerpt: "Ten rules for negotiating a job offer, especially valuable for new developers entering the tech industry.",
      category: "Negotiation",
      tags: ["Salary Negotiation", "Job Offers", "Career Advice", "First Job"]
    }
  ];

  const industryNews = [
    {
      title: "The State of AI in 2024",
      source: "MIT Technology Review",
      date: "2024-01-22",
      url: "https://www.technologyreview.com/2024/01/04/1086046/whats-next-for-ai-in-2024/",
      excerpt: "Comprehensive overview of AI developments, trends, and what to expect in the coming year.",
      category: "AI & Development"
    },
    {
      title: "Web Development Trends 2024",
      source: "CSS-Tricks",
      date: "2024-01-20",
      url: "https://css-tricks.com/",
      excerpt: "Latest trends in web development including new frameworks, tools, and best practices for modern developers.",
      category: "Web Development"
    },
    {
      title: "Cloud Computing Market Report",
      source: "TechCrunch",
      date: "2024-01-18",
      url: "https://techcrunch.com/2024/01/18/cloud-computing-trends/",
      excerpt: "Analysis of cloud computing trends, major players, and opportunities for developers and businesses.",
      category: "Cloud Computing"
    },
    {
      title: "Mobile Development in 2024",
      source: "Flutter Community",
      date: "2024-01-15",
      url: "https://flutter.dev/community",
      excerpt: "Emerging technologies and frameworks shaping mobile app development across iOS and Android platforms.",
      category: "Mobile Development"
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
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Industry News</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

      {/* Industry News */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Latest Industry News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryNews.map((news, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {news.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white">{news.title}</CardTitle>
                  <p className="text-gray-400 text-sm">Source: {news.source}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{news.excerpt}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white"
                    asChild
                  >
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      Read More <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16">
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
      <section className="py-16 bg-gray-800/30">
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

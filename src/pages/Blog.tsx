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
      title: "From Zero to Google: My Complete Journey",
      author: "Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Success Story",
      excerpt: "How I went from knowing nothing about programming to landing a software engineer role at Google in 18 months.",
      url: "https://dev.to/priyas/from-zero-to-google-my-complete-journey-4k2p",
      image: "/placeholder.svg",
      tags: ["Google", "Software Engineering", "Self-taught", "Interview Prep"]
    },
    {
      title: "Breaking into Machine Learning: A Non-CS Graduate's Story",
      author: "Arjun Mehta",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Career Change",
      excerpt: "My transition from mechanical engineering to becoming an ML engineer at Microsoft, including all the resources I used.",
      url: "https://towardsdatascience.com/breaking-into-ml-non-cs-graduate-story-abc123",
      image: "/placeholder.svg",
      tags: ["Machine Learning", "Career Change", "Microsoft", "Non-CS Background"]
    },
    {
      title: "Cracking FAANG Interviews: My 6-Month Strategy",
      author: "Rohit Kumar",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Interview Prep",
      excerpt: "Detailed breakdown of my preparation strategy that helped me get offers from Amazon, Microsoft, and Facebook.",
      url: "https://medium.com/@rohitk/cracking-faang-interviews-6-month-strategy-def456",
      image: "/placeholder.svg",
      tags: ["FAANG", "Interview Preparation", "Data Structures", "System Design"]
    }
  ];

  const techTutorials = [
    {
      title: "Complete React.js Tutorial for Beginners (2024)",
      author: "Tech With Tim",
      platform: "YouTube",
      duration: "4 hours",
      url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
      description: "Comprehensive React tutorial covering hooks, state management, and modern practices.",
      difficulty: "Beginner",
      tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
      title: "Python for Machine Learning - Full Course",
      author: "FreeCodeCamp",
      platform: "YouTube",
      duration: "10 hours",
      url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      description: "Complete machine learning course using Python, scikit-learn, and TensorFlow.",
      difficulty: "Intermediate",
      tags: ["Python", "Machine Learning", "Data Science", "AI"]
    },
    {
      title: "System Design Interview Preparation",
      author: "Gaurav Sen",
      platform: "YouTube",
      duration: "2 hours",
      url: "https://www.youtube.com/watch?v=UzLMhqg3_Wc",
      description: "How to approach system design interviews with real examples and case studies.",
      difficulty: "Advanced",
      tags: ["System Design", "Interviews", "Architecture", "Scalability"]
    },
    {
      title: "Complete DevOps Roadmap 2024",
      author: "TechWorld with Nana",
      platform: "YouTube",
      duration: "6 hours",
      url: "https://www.youtube.com/watch?v=9pZ2xmsSDdo",
      description: "Full DevOps tutorial covering Docker, Kubernetes, CI/CD, and cloud platforms.",
      difficulty: "Intermediate",
      tags: ["DevOps", "Docker", "Kubernetes", "Cloud", "CI/CD"]
    }
  ];

  const careerInsights = [
    {
      title: "Tech Salary Report 2024: What to Expect",
      author: "PayScale Research Team",
      date: "2024-01-20",
      readTime: "6 min read",
      url: "https://www.payscale.com/research/US/Industry=Computer_Software/Salary",
      excerpt: "Comprehensive analysis of tech salaries across different roles, experience levels, and locations.",
      category: "Salary Insights",
      tags: ["Salaries", "Tech Industry", "Career Planning", "Compensation"]
    },
    {
      title: "Remote Work in Tech: The Complete Guide",
      author: "Remote.co Team",
      date: "2024-01-18",
      readTime: "10 min read",
      url: "https://remote.co/remote-work-guide-tech/",
      excerpt: "Everything you need to know about finding and succeeding in remote tech jobs.",
      category: "Remote Work",
      tags: ["Remote Work", "Tech Jobs", "Work-Life Balance", "Productivity"]
    },
    {
      title: "Building Your Developer Portfolio That Gets Noticed",
      author: "GitHub Team",
      date: "2024-01-15",
      readTime: "8 min read",
      url: "https://github.blog/2023-06-01-how-to-create-a-standout-developer-portfolio/",
      excerpt: "Best practices for creating a developer portfolio that stands out to recruiters and hiring managers.",
      category: "Portfolio Tips",
      tags: ["Portfolio", "GitHub", "Personal Branding", "Job Search"]
    },
    {
      title: "Negotiating Your Tech Job Offer: A Complete Guide",
      author: "Levels.fyi Team",
      date: "2024-01-12",
      readTime: "12 min read",
      url: "https://www.levels.fyi/blog/how-to-negotiate-your-tech-offer.html",
      excerpt: "Strategies and tactics for negotiating better compensation packages in tech roles.",
      category: "Negotiation",
      tags: ["Salary Negotiation", "Job Offers", "Compensation", "Career Growth"]
    }
  ];

  const industryNews = [
    {
      title: "The Rise of AI in Software Development",
      source: "TechCrunch",
      date: "2024-01-22",
      url: "https://techcrunch.com/2024/01/22/ai-software-development-trends/",
      excerpt: "How AI tools are transforming the way developers write, test, and deploy code.",
      category: "AI & Development"
    },
    {
      title: "Web3 and Blockchain: What Developers Need to Know",
      source: "The Verge",
      date: "2024-01-20",
      url: "https://www.theverge.com/2024/01/20/web3-blockchain-developers-guide",
      excerpt: "Understanding the current state and future prospects of Web3 development.",
      category: "Blockchain"
    },
    {
      title: "Cloud Computing Trends Shaping 2024",
      source: "InfoWorld",
      date: "2024-01-18",
      url: "https://www.infoworld.com/article/cloud-computing-trends-2024.html",
      excerpt: "Key trends in cloud computing that developers and IT professionals should watch.",
      category: "Cloud Computing"
    },
    {
      title: "The Future of Mobile App Development",
      source: "Mobile Dev Weekly",
      date: "2024-01-15",
      url: "https://mobiledevweekly.com/future-mobile-development-2024",
      excerpt: "Emerging technologies and frameworks shaping mobile app development.",
      category: "Mobile Development"
    }
  ];

  const learningResources = [
    {
      title: "Interactive Coding Challenges",
      platform: "HackerRank",
      type: "Practice Platform",
      url: "https://www.hackerrank.com/domains/tutorials/30-days-of-code",
      description: "30 Days of Code challenge to improve your programming skills with daily problems.",
      difficulty: "All Levels"
    },
    {
      title: "Full-Stack Open 2024",
      platform: "University of Helsinki",
      type: "Free Course",
      url: "https://fullstackopen.com/en/",
      description: "Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go!",
      difficulty: "Intermediate"
    },
    {
      title: "The Odin Project",
      platform: "Community",
      type: "Curriculum",
      url: "https://www.theodinproject.com/",
      description: "Free full stack curriculum supported by open source community.",
      difficulty: "Beginner to Advanced"
    },
    {
      title: "Exercism Programming Practice",
      platform: "Exercism",
      type: "Practice Platform",
      url: "https://exercism.org/",
      description: "Code practice and mentorship for everyone. Free. Forever.",
      difficulty: "All Levels"
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
                      Watch Tutorial <ExternalLink className="w-4 h-4 ml-2" />
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">Recommended Learning Resources</h2>
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
                      Start Learning <ExternalLink className="w-4 h-4 ml-2" />
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

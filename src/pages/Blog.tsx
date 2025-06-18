
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Got My Dream Job at Google in 2024",
      author: "Ananya Sharma",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      excerpt: "My complete journey from a Tier-3 college student to landing a Software Engineer role at Google. Mistakes, learnings, and actionable tips.",
      tags: ["Google", "Interview", "DSA", "Career"],
      featured: true
    },
    {
      title: "Complete Web Development Roadmap for 2024",
      author: "Rahul Kumar",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      excerpt: "Everything you need to know to become a full-stack developer in 2024. From HTML basics to advanced React patterns and backend development.",
      tags: ["Web Development", "React", "Node.js", "Roadmap"],
      featured: true
    },
    {
      title: "Machine Learning Engineer vs Data Scientist: Which to Choose?",
      author: "Priya Patel",
      readTime: "6 min read",
      date: "Dec 8, 2024",
      excerpt: "A detailed comparison of ML Engineer and Data Scientist roles, including responsibilities, skills required, and career prospects.",
      tags: ["Machine Learning", "Data Science", "Career", "Comparison"],
      featured: false
    },
    {
      title: "Building Your First Open Source Contribution",
      author: "Arjun Singh",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      excerpt: "Step-by-step guide to making your first open source contribution. From finding the right project to getting your PR merged.",
      tags: ["Open Source", "GitHub", "Contributing", "Beginner"],
      featured: false
    },
    {
      title: "System Design Interview Preparation Guide",
      author: "Sneha Agarwal",
      readTime: "15 min read",
      date: "Dec 3, 2024",
      excerpt: "Complete guide to preparing for system design interviews. Common questions, design principles, and practice resources.",
      tags: ["System Design", "Interview", "Architecture", "Preparation"],
      featured: false
    },
    {
      title: "From Zero to Placement: My 4-Year B.Tech Journey",
      author: "Vikash Gupta",
      readTime: "20 min read",
      date: "Nov 30, 2024",
      excerpt: "A comprehensive account of my entire B.Tech journey, from struggling in first year to getting placed at Microsoft.",
      tags: ["Journey", "Placement", "B.Tech", "Microsoft"],
      featured: false
    }
  ];

  const videoResources = [
    {
      title: "Day in the Life of a Google SWE",
      creator: "Tech With Ananya",
      duration: "12:34",
      views: "1.2M views",
      description: "Follow me through a typical workday at Google's Bangalore office"
    },
    {
      title: "How to Crack Technical Interviews",
      creator: "CodeMaster Rahul",
      duration: "45:22",
      views: "890K views",
      description: "Complete interview preparation strategy with mock interview examples"
    },
    {
      title: "Building a Full Stack App in 2 Hours",
      creator: "WebDev Pro",
      duration: "2:15:30",
      views: "650K views",
      description: "Live coding session building a MERN stack application from scratch"
    },
    {
      title: "ML Engineer Salary & Career Path",
      creator: "AI Career Guide",
      duration: "18:45",
      views: "420K views",
      description: "Everything about ML engineer roles, salaries, and growth opportunities"
    }
  ];

  const studyTips = [
    {
      title: "The Pomodoro Technique for Coding",
      tip: "Study in 25-minute focused sessions with 5-minute breaks. Perfect for maintaining concentration while learning new concepts."
    },
    {
      title: "Active Recall Method",
      tip: "Instead of re-reading notes, try to recall concepts from memory. This strengthens understanding and retention."
    },
    {
      title: "Project-Based Learning",
      tip: "Apply concepts immediately by building projects. This helps connect theory with practical implementation."
    },
    {
      title: "Teach to Learn",
      tip: "Explain concepts to friends or write blog posts. Teaching others helps identify knowledge gaps."
    }
  ];

  const interviewExperiences = [
    {
      company: "Microsoft",
      candidate: "Rohit Sharma",
      position: "SDE Intern",
      rounds: 4,
      experience: "4 rounds including coding, design, and behavioral. Focus on DSA and past projects. Very friendly interviewers.",
      result: "Selected",
      package: "₹80,000/month"
    },
    {
      company: "Amazon",
      candidate: "Kavya Reddy",
      position: "SDE-1",
      rounds: 5,
      experience: "Heavy focus on leadership principles and behavioral questions. Technical rounds covered trees and dynamic programming.",
      result: "Selected",
      package: "₹28 LPA"
    },
    {
      company: "Flipkart",
      candidate: "Aman Gupta",
      position: "SDE-1",
      rounds: 3,
      experience: "Machine coding round was challenging. Focus on clean code and optimization. System design was high-level.",
      result: "Selected",
      package: "₹24 LPA"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Blog & Learning Hub</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Read success stories, interview experiences, and expert advice from students who've walked the path you're on. Learn from their journeys!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Success Stories</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Interview Experiences</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Study Tips</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Video Resources</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-violet-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-colors">
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg hover:text-violet-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Video Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoResources.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 rounded-lg p-3 mr-4">
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm">▶</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{video.creator}</p>
                      <p className="text-gray-500 text-sm mb-3">{video.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{video.duration}</span>
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Study Tips & Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studyTips.map((tip, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Experiences */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Interview Experiences</h2>
          <div className="space-y-6">
            {interviewExperiences.map((interview, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 mr-4">{interview.company}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {interview.position}
                        </span>
                        <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                          interview.result === 'Selected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {interview.result}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        <strong>Candidate:</strong> {interview.candidate} | <strong>Rounds:</strong> {interview.rounds}
                      </p>
                      <p className="text-gray-700 mb-3">{interview.experience}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
                        {interview.package}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest success stories, interview experiences, and study tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <Button className="bg-violet-600 hover:bg-violet-700 px-6 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Join 10,000+ students already subscribed. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8">
            Start your journey today and join the thousands of students who've transformed their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="/first-year">Start Learning Journey</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg" asChild>
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

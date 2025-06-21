
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Briefcase, GraduationCap, Code, BookOpen, Users, Laptop, Youtube, Play } from "lucide-react";
import { useEffect } from "react";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobPlatforms = [
    {
      name: "LinkedIn",
      description: "Professional networking and job search platform",
      url: "https://www.linkedin.com/jobs/",
      category: "Job Portal",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      name: "Naukri.com",
      description: "India's leading job portal for all career levels",
      url: "https://www.naukri.com/",
      category: "Job Portal",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      name: "AngelList (Wellfound)",
      description: "Startup jobs and internships",
      url: "https://wellfound.com/",
      category: "Startup Jobs",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      name: "Internshala",
      description: "India's largest internship platform",
      url: "https://internshala.com/",
      category: "Internships",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "LeetCode Jobs",
      description: "Tech jobs with coding challenges",
      url: "https://leetcode.com/jobs/",
      category: "Tech Jobs",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "HackerRank Jobs",
      description: "Developer jobs with skill assessments",
      url: "https://www.hackerrank.com/jobs/",
      category: "Tech Jobs",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Glassdoor",
      description: "Job search with company reviews and salary insights",
      url: "https://www.glassdoor.co.in/",
      category: "Job Portal",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      name: "Indeed",
      description: "Global job search engine",
      url: "https://in.indeed.com/",
      category: "Job Portal",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      name: "Unstop (formerly Dare2Compete)",
      description: "Competitions, hackathons, and job opportunities",
      url: "https://unstop.com/",
      category: "Competitions & Jobs",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "GeeksforGeeks Jobs",
      description: "Tech jobs for developers",
      url: "https://www.geeksforgeeks.org/jobs/",
      category: "Tech Jobs",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const youtubeChannels = [
    {
      name: "FreeCodeCamp",
      description: "Complete programming courses and tutorials",
      url: "https://www.youtube.com/@freecodecamp",
      subscribers: "8.9M",
      category: "Programming",
      playlists: [
        { name: "Full Stack Development", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbmGQoa3vFjeAMfZ7bHOxuUy" },
        { name: "Python for Beginners", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbkArDMazoARtNriQYMBnycU" },
        { name: "JavaScript Course", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "Code with Harry",
      description: "Programming tutorials in Hindi and English",
      url: "https://www.youtube.com/@CodeWithHarry",
      subscribers: "5.3M",
      category: "Programming",
      playlists: [
        { name: "Python Tutorial", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME" },
        { name: "Web Development", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" },
        { name: "DSA in One Shot", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "Apna College",
      description: "Programming and placement preparation",
      url: "https://www.youtube.com/@ApnaCollegeOfficial",
      subscribers: "4.8M",
      category: "DSA & Placement",
      playlists: [
        { name: "Alpha Course - DSA", url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" },
        { name: "Java + DSA", url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
        { name: "Web Development", url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe1WdeXlWWJP4v0VT9ON9kaD" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "Traversy Media",
      description: "Modern web development and programming",
      url: "https://www.youtube.com/@TraversyMedia",
      subscribers: "2.2M",
      category: "Web Development",
      playlists: [
        { name: "JavaScript Crash Course", url: "https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX" },
        { name: "React JS", url: "https://www.youtube.com/playlist?list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb" },
        { name: "Node.js", url: "https://www.youtube.com/playlist?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "The Net Ninja",
      description: "Black-belt your development skills",
      url: "https://www.youtube.com/@NetNinja",
      subscribers: "1.1M",
      category: "Web Development",
      playlists: [
        { name: "Complete React Tutorial", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" },
        { name: "Node.js Tutorial", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp" },
        { name: "Vue.js Tutorial", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "Tech With Tim",
      description: "Python, AI, and software development",
      url: "https://www.youtube.com/@TechWithTim",
      subscribers: "1.3M",
      category: "Python & AI",
      playlists: [
        { name: "Python Tutorial", url: "https://www.youtube.com/playlist?list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm" },
        { name: "Machine Learning", url: "https://www.youtube.com/playlist?list=PLzMcBGfZo4-lak7tiFDec5_ZMItiIIfmh" },
        { name: "Django Tutorial", url: "https://www.youtube.com/playlist?list=PLzMcBGfZo4-djqpSd2aFKPWAHNw8SMEuX" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "CS Dojo",
      description: "Computer science and programming concepts",
      url: "https://www.youtube.com/@CSDojo",
      subscribers: "1.8M",
      category: "Computer Science",
      playlists: [
        { name: "Data Structures and Algorithms", url: "https://www.youtube.com/playlist?list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H" },
        { name: "Python Tutorial", url: "https://www.youtube.com/playlist?list=PLBZBJbE_rGRWeh5mIBhD-hhDwSEDxogDg" },
        { name: "Web Scraping", url: "https://www.youtube.com/playlist?list=PLBZBJbE_rGRVTuTrqz8rrxxr0bxe2wTJe" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "Kevin Powell",
      description: "CSS and front-end development",
      url: "https://www.youtube.com/@KevinPowell",
      subscribers: "800K",
      category: "CSS & Frontend",
      playlists: [
        { name: "CSS Grid", url: "https://www.youtube.com/playlist?list=PL4-IK0AVhVjPv5tfS82UF_iQgFp4Bl998" },
        { name: "Flexbox", url: "https://www.youtube.com/playlist?list=PL4-IK0AVhVjMSb9c06AjRlTpvxL3otpUd" },
        { name: "Responsive Design", url: "https://www.youtube.com/playlist?list=PL4-IK0AVhVjODqX-aXRD0RmAL3lFNbMR8" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "take U forward (Striver)",
      description: "DSA, competitive programming and placement preparation",
      url: "https://www.youtube.com/@takeUforward",
      subscribers: "680K",
      category: "DSA & Placement",
      playlists: [
        { name: "Striver's A2Z DSA Course", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" },
        { name: "SDE Sheet Problems", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2" },
        { name: "Dynamic Programming Series", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY" }
      ],
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: "CodeHelp - by Babbar",
      description: "Complete DSA course and programming tutorials by Love Babbar",
      url: "https://www.youtube.com/@CodeHelp",
      subscribers: "1.2M",
      category: "DSA & Programming",
      playlists: [
        { name: "DSA Supreme Course", url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTqBmRGnsCOGNDG5FQwKzuJ_" },
        { name: "C++ Complete Course", url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTobi35C3I-tKB3tRDX6YxuA" },
        { name: "System Design", url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2qt_" }
      ],
      icon: <Youtube className="w-6 h-6" />
    }
  ];

  const learningResources = [
    {
      name: "FreeCodeCamp",
      description: "Free coding bootcamp with certificates",
      url: "https://www.freecodecamp.org/",
      category: "Coding",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Coursera",
      description: "University courses and specializations",
      url: "https://www.coursera.org/",
      category: "Courses",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "edX",
      description: "High-quality courses from top universities",
      url: "https://www.edx.org/",
      category: "Courses",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "Udemy",
      description: "Practical courses on technology and skills",
      url: "https://www.udemy.com/",
      category: "Courses",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: "Khan Academy",
      description: "Free education for mathematics and computer science",
      url: "https://www.khanacademy.org/",
      category: "Education",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: "Codecademy",
      description: "Interactive coding lessons",
      url: "https://www.codecademy.com/",
      category: "Coding",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const tools = [
    {
      name: "GitHub",
      description: "Version control and code collaboration",
      url: "https://github.com/",
      category: "Development",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "VS Code",
      description: "Popular code editor by Microsoft",
      url: "https://code.visualstudio.com/",
      category: "Development",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      name: "Figma",
      description: "UI/UX design and prototyping tool",
      url: "https://www.figma.com/",
      category: "Design",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      name: "Postman",
      description: "API development and testing",
      url: "https://www.postman.com/",
      category: "Development",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Docker",
      description: "Containerization platform",
      url: "https://www.docker.com/",
      category: "DevOps",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      name: "Firebase",
      description: "Backend-as-a-Service platform",
      url: "https://firebase.google.com/",
      category: "Backend",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const communityResources = [
    {
      name: "Stack Overflow",
      description: "Q&A platform for developers",
      url: "https://stackoverflow.com/",
      category: "Community",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Reddit - r/programming",
      description: "Programming discussions and news",
      url: "https://www.reddit.com/r/programming/",
      category: "Community",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Dev.to",
      description: "Community of software developers",
      url: "https://dev.to/",
      category: "Community",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Hashnode",
      description: "Blogging platform for developers",
      url: "https://hashnode.com/",
      category: "Community",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: "Discord - Programming Communities",
      description: "Real-time chat for various programming topics",
      url: "https://discord.com/",
      category: "Community",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Telegram - Programming Channels",
      description: "Programming news and discussions",
      url: "https://telegram.org/",
      category: "Community",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Learning Resources Hub</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
              Discover the best platforms, tools, and communities to accelerate your tech career. From learning to landing your dream job.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Job Platforms</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">YouTube Channels</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Learning Resources</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Developer Tools</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job & Internship Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Job & Internship Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPlatforms.map((platform, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {platform.icon}
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      {platform.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visit Platform <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channels */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Popular YouTube Channels</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {youtubeChannels.map((channel, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {channel.icon}
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                        {channel.category}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{channel.subscribers} subscribers</span>
                  </div>
                  <CardTitle className="text-xl text-white">{channel.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-medium text-gray-200">Popular Playlists:</h4>
                    {channel.playlists.map((playlist, idx) => (
                      <a
                        key={idx}
                        href={playlist.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        <Play className="w-3 h-3" />
                        {playlist.name}
                      </a>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-500 text-red-400 hover:bg-red-600 hover:text-white"
                    asChild
                  >
                    <a href={channel.url} target="_blank" rel="noopener noreferrer">
                      Visit Channel <ExternalLink className="w-4 h-4 ml-2" />
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {resource.icon}
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{resource.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-green-500 text-green-400 hover:bg-green-600 hover:text-white"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Learn More <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Essential Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {tool.icon}
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                      {tool.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                    asChild
                  >
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      Get Started <ExternalLink className="w-4 h-4 ml-2" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityResources.map((community, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {community.icon}
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs">
                      {community.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{community.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{community.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white"
                    asChild
                  >
                    <a href={community.url} target="_blank" rel="noopener noreferrer">
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
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Use these resources to build your skills and land your dream tech job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="/domains">Explore Domains</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

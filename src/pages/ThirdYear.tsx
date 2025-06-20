import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

const ThirdYear = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const focusAreas = [
    {
      title: "Domain Specialization",
      description: "Choose your career path and develop expertise in that domain",
      topics: ["AI/ML", "Web Development", "Mobile Dev", "DevOps", "Cybersecurity"]
    },
    {
      title: "Open Source Contribution",
      description: "Contribute to real-world projects and build your developer profile",
      topics: ["GitHub Projects", "Documentation", "Bug Fixes", "Feature Development", "Community Building"]
    },
    {
      title: "Advanced Projects",
      description: "Build complex, scalable applications to showcase your skills",
      topics: ["Full-Stack Apps", "API Development", "Deployment", "Testing", "Performance Optimization"]
    },
    {
      title: "Internship Preparation",
      description: "Prepare for and secure valuable internship opportunities",
      topics: ["Resume Building", "Interview Prep", "Portfolio", "Networking", "Application Strategy"]
    }
  ];

  const youtubeChannels = [
    {
      name: "Kunal Kushwaha",
      description: "Open Source & Career Guidance",
      url: "https://www.youtube.com/@KunalKushwaha",
      subscribers: "450K+"
    },
    {
      name: "Tech With Tim",
      description: "Advanced Programming Tutorials",
      url: "https://www.youtube.com/@TechWithTim",
      subscribers: "1.2M+"
    },
    {
      name: "Fireship",
      description: "Latest Tech Trends & Quick Tutorials",
      url: "https://www.youtube.com/@Fireship",
      subscribers: "2.8M+"
    },
    {
      name: "Ben Awad",
      description: "Full Stack Development & Career",
      url: "https://www.youtube.com/@BenAwad97",
      subscribers: "450K+"
    }
  ];

  const resources = [
    {
      category: "Open Source",
      items: [
        { name: "First Contributions", url: "https://github.com/firstcontributions/first-contributions" },
        { name: "Good First Issues", url: "https://goodfirstissues.com/" },
        { name: "Up For Grabs", url: "https://up-for-grabs.net/" },
        { name: "Awesome for Beginners", url: "https://github.com/MunGell/awesome-for-beginners" }
      ]
    },
    {
      category: "System Design",
      items: [
        { name: "System Design Interview by Alex Xu", url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF" },
        { name: "Designing Data-Intensive Applications", url: "https://dataintensive.net/" },
        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "High Scalability", url: "http://highscalability.com/" }
      ]
    },
    {
      category: "Career Preparation",
      items: [
        { name: "Cracking the Coding Interview", url: "https://www.crackingthecodinginterview.com/" },
        { name: "InterviewBit", url: "https://www.interviewbit.com/" },
        { name: "Pramp - Mock Interviews", url: "https://www.pramp.com/" },
        { name: "LeetCode Premium", url: "https://leetcode.com/premium/" }
      ]
    },
    {
      category: "Specialized Learning",
      items: [
        { name: "Machine Learning Course - Andrew Ng", url: "https://www.coursera.org/learn/machine-learning" },
        { name: "Full Stack Open", url: "https://fullstackopen.com/en/" },
        { name: "AWS Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
        { name: "Google Developer Certification", url: "https://developers.google.com/certification" }
      ]
    }
  ];

  const internshipTips = [
    {
      title: "Build a Strong Portfolio",
      description: "Showcase 3-5 quality projects with live demos and clean code",
      tips: ["Use GitHub Pages/Netlify for hosting", "Include project descriptions and tech stack", "Add screenshots and demo videos"]
    },
    {
      title: "Network Effectively",
      description: "Connect with professionals and peers in your field",
      tips: ["Join tech communities on Discord/Slack", "Attend virtual tech meetups", "Connect with alumni on LinkedIn"]
    },
    {
      title: "Apply Strategic",
      description: "Quality over quantity in your applications",
      tips: ["Research companies thoroughly", "Customize resume for each role", "Follow up professionally"]
    }
  ];

  const openSourceGuide = [
    {
      step: "1. Choose Your First Project",
      description: "Find beginner-friendly projects in your domain",
      resources: ["GitHub topics: good-first-issue", "Explore trending repositories", "Check project activity and community"]
    },
    {
      step: "2. Start Small",
      description: "Begin with documentation, bug fixes, or minor features",
      resources: ["Read CONTRIBUTING.md carefully", "Set up development environment", "Join project's communication channels"]
    },
    {
      step: "3. Make Your Mark",
      description: "Consistently contribute and engage with the community",
      resources: ["Regular contributions (weekly)", "Help other contributors", "Participate in discussions"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section - Matching home page style */}
      <section className="relative hero-gradient text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            3rd Year - Specialization Phase
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Choose your domain, contribute to open source, and build advanced projects. This year is about specialization and real-world experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Domain Selection</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Open Source</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Advanced Projects</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Internships</span>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">Career-Focused YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">Specialized Learning Resources</h2>
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

      {/* Open Source Guide */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Open Source Contribution Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {openSourceGuide.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">{guide.step}</CardTitle>
                  <p className="text-gray-300">{guide.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.resources.map((resource, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Preparation */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Internship Preparation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">{tip.title}</CardTitle>
                  <p className="text-gray-300">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Final Year?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Time to prepare for placements and plan your career path. The final push towards your dream job!
          </p>
          <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg" asChild>
            <a href="/fourth-year">Explore 4th Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThirdYear;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

const FourthYear = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const preparationTracks = [
    {
      title: "Placement Track",
      description: "Prepare for campus placements and off-campus opportunities",
      timeline: "August - February",
      activities: ["LeetCode grinding", "Mock interviews", "Company research", "Resume optimization"]
    },
    {
      title: "Higher Studies Track",
      description: "Prepare for MS, MBA, or research programs",
      timeline: "June - December",
      activities: ["GRE/GMAT prep", "SOP writing", "LOR collection", "University applications"]
    },
    {
      title: "Startup/Entrepreneurship Track",
      description: "Launch your own venture or join early-stage startups",
      timeline: "Year-round",
      activities: ["Business plan", "MVP development", "Investor pitch", "Team building"]
    },
    {
      title: "Research Track",
      description: "Pursue research opportunities and PhD applications",
      timeline: "July - January",
      activities: ["Research papers", "Conference submissions", "PhD applications", "Research proposals"]
    }
  ];

  const youtubeChannels = [
    {
      name: "Gaurav Sen",
      description: "System Design & Interview Prep",
      url: "https://www.youtube.com/@gkcs",
      subscribers: "450K+"
    },
    {
      name: "Tech Dummies",
      description: "Placement & Career Guidance",
      url: "https://www.youtube.com/@TechDummiesNarendraL",
      subscribers: "400K+"
    },
    {
      name: "Rachit Jain",
      description: "Competitive Programming & Placements",
      url: "https://www.youtube.com/@RachitJain",
      subscribers: "200K+"
    },
    {
      name: "Sandeep Jain",
      description: "GeeksforGeeks Founder - Interview Tips",
      url: "https://www.youtube.com/@sandeepjainofficial",
      subscribers: "150K+"
    }
  ];

  const placementPrep = [
    {
      category: "Technical Skills",
      items: [
        { name: "LeetCode Top 150 problems", url: "https://leetcode.com/studyplan/top-interview-150/" },
        { name: "System Design fundamentals", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "Database design and optimization", url: "https://www.postgresql.org/docs/" },
        { name: "Operating Systems concepts", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
        { name: "Computer Networks basics", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
        { name: "Low-level design patterns", url: "https://refactoring.guru/design-patterns" }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Communication skills", url: "https://www.coursera.org/learn/wharton-communication-skills" },
        { name: "Problem-solving approach", url: "https://www.khanacademy.org/computing/computer-programming" },
        { name: "Leadership examples", url: "https://www.ted.com/topics/leadership" },
        { name: "Team collaboration", url: "https://www.atlassian.com/team-playbook" },
        { name: "Conflict resolution", url: "https://www.coursera.org/learn/conflict-resolution" },
        { name: "Adaptability examples", url: "https://hbr.org/topic/adaptability" }
      ]
    },
    {
      category: "Interview Preparation",
      items: [
        { name: "Mock interviews (technical)", url: "https://pramp.com/" },
        { name: "Mock interviews (HR)", url: "https://www.interviewbuddy.in/" },
        { name: "Company-specific preparation", url: "https://www.glassdoor.co.in/" },
        { name: "Behavioral questions practice", url: "https://www.themuse.com/advice/30-behavioral-interview-questions" },
        { name: "Salary negotiation prep", url: "https://www.levels.fyi/" },
        { name: "Follow-up strategies", url: "https://www.indeed.com/career-advice/interviewing/how-to-follow-up-after-an-interview" }
      ]
    }
  ];

  const companies = [
    {
      tier: "Tier 1 (Dream Companies)",
      companies: ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"],
      package: "₹30-80 LPA",
      requirements: ["Strong DSA", "System Design", "2+ years prep"]
    },
    {
      tier: "Tier 2 (Premium Companies)",
      companies: ["Adobe", "Salesforce", "Uber", "LinkedIn", "Twitter", "Flipkart"],
      package: "₹20-40 LPA",
      requirements: ["Good DSA", "Projects", "Domain knowledge"]
    },
    {
      tier: "Tier 3 (Good Companies)",
      companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini"],
      package: "₹3-8 LPA",
      requirements: ["Basic programming", "Communication", "Aptitude"]
    }
  ];

  const resources = [
    {
      category: "Interview Preparation",
      items: [
        { name: "Cracking the Coding Interview", url: "https://www.crackingthecodinginterview.com/" },
        { name: "Elements of Programming Interviews", url: "https://elementsofprogramminginterviews.com/" },
        { name: "System Design Interview Vol 1 & 2", url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF" },
        { name: "Behavioral Interview Guide", url: "https://www.themuse.com/advice/behavioral-interview-questions-answers-examples" }
      ]
    },
    {
      category: "Practice Platforms",
      items: [
        { name: "LeetCode Premium", url: "https://leetcode.com/premium/" },
        { name: "InterviewBit", url: "https://www.interviewbit.com/" },
        { name: "Pramp Mock Interviews", url: "https://www.pramp.com/" },
        { name: "AlgoExpert", url: "https://www.algoexpert.io/" }
      ]
    },
    {
      category: "Higher Studies",
      items: [
        { name: "GRE Preparation - Magoosh", url: "https://gre.magoosh.com/" },
        { name: "TOEFL/IELTS Prep", url: "https://www.ets.org/toefl" },
        { name: "University Rankings", url: "https://www.topuniversities.com/" },
        { name: "Scholarship Opportunities", url: "https://www.scholars4dev.com/" }
      ]
    }
  ];

  const monthlyPlan = [
    {
      month: "July - August",
      focus: "Foundation Building",
      tasks: ["Complete DSA revision", "Build/update portfolio", "Research target companies", "Start resume building"]
    },
    {
      month: "September - October", 
      focus: "Intensive Preparation",
      tasks: ["Daily LeetCode problems", "System design practice", "Mock interviews", "Company applications"]
    },
    {
      month: "November - December",
      focus: "Peak Season",
      tasks: ["Campus placements", "Off-campus applications", "Interview practice", "Negotiate offers"]
    },
    {
      month: "January - February",
      focus: "Final Push",
      tasks: ["Last-minute opportunities", "Skill improvement", "Project completion", "Career planning"]
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
            4th Year - Career Preparation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            The final lap! Focus on placements, higher studies preparation, or launching your startup. This is where all your hard work pays off!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Placement Prep</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">System Design</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Mock Interviews</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Higher Studies</span>
          </div>
        </div>
      </section>

      {/* Choose Your Track */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Choose Your Career Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preparationTracks.map((track, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{track.title}</CardTitle>
                  <p className="text-gray-300">{track.description}</p>
                  <span className="bg-orange-900 text-orange-100 px-3 py-1 rounded-full text-sm w-fit">
                    {track.timeline}
                  </span>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-white mb-2">Key Activities:</h4>
                  <ul className="space-y-2">
                    {track.activities.map((activity, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {activity}
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">Placement Focused YouTube Channels</h2>
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

      {/* Monthly Preparation Plan */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Month-wise Preparation Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monthlyPlan.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{plan.month}</CardTitle>
                  <p className="text-orange-400 font-semibold">{plan.focus}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.tasks.map((task, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Resources */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Essential Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {item.name}
                          <ExternalLink className="w-3 h-3" />
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

      {/* Placement Preparation Checklist */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Placement Preparation Checklist</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {placementPrep.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {item.name}
                          <ExternalLink className="w-3 h-3" />
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

      {/* Company Tiers */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Company Tiers & Expectations</h2>
          <div className="space-y-6">
            {companies.map((tier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">{tier.tier}</h3>
                      <p className="text-gray-300 mb-3">
                        <strong>Companies:</strong> {tier.companies.join(", ")}
                      </p>
                      <p className="text-gray-300">
                        <strong>Requirements:</strong> {tier.requirements.join(", ")}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="bg-green-900 text-green-100 px-4 py-2 rounded-full font-bold text-lg">
                        {tier.package}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-xl mb-8 text-blue-100">
            You've come so far! Now it's time to showcase your skills and land that perfect opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-900 px-8 py-4 text-lg" asChild>
              <a href="/blog">Read Blog Posts</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FourthYear;

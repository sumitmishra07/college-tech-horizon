
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const MobileDevRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Mobile Development Basics (Weeks 1-6)",
      duration: "1.5 Months",
      topics: [
        "Mobile App Fundamentals - iOS vs Android",
        "UI/UX Principles - Mobile design patterns",
        "Cross-platform Development - React Native vs Flutter",
        "Development Environment Setup",
        "Basic Programming - JavaScript/Dart"
      ],
      resources: [
        { name: "React Native Documentation", url: "https://reactnative.dev/" },
        { name: "Flutter Documentation", url: "https://flutter.dev/" }
      ],
      projects: ["Hello World app", "Simple calculator", "Basic navigation app"]
    },
    {
      phase: "React Native Development (Weeks 7-14)",
      duration: "2 Months",
      topics: [
        "Components & Navigation - Stack, Tab, Drawer",
        "State Management - Redux, Context API",
        "Native Modules - Platform-specific features",
        "API Integration - REST APIs, GraphQL",
        "Local Storage - AsyncStorage, SQLite"
      ],
      resources: [
        { name: "React Native Tutorial", url: "https://reactnative.dev/docs/tutorial" },
        { name: "Expo Documentation", url: "https://docs.expo.dev/" }
      ],
      projects: ["Weather app", "News reader", "Social media feed"]
    },
    {
      phase: "Advanced Features (Weeks 15-22)",
      duration: "2 Months",
      topics: [
        "Authentication - Firebase Auth, OAuth",
        "Push Notifications - FCM, local notifications",
        "Camera & Media - Image/video handling",
        "Location Services - Maps, GPS tracking",
        "Offline Functionality - Caching, sync"
      ],
      resources: [
        { name: "Firebase Documentation", url: "https://firebase.google.com/docs" },
        { name: "React Native Maps", url: "https://github.com/react-native-maps/react-native-maps" }
      ],
      projects: ["Chat application", "Location tracker", "Photo sharing app"]
    },
    {
      phase: "Deployment & Optimization (Weeks 23-26)",
      duration: "1 Month",
      topics: [
        "App Store Deployment - iOS App Store, Google Play",
        "Performance Optimization - Memory, battery usage",
        "Testing - Unit testing, E2E testing",
        "Analytics - App usage tracking",
        "Maintenance - Updates, bug fixes"
      ],
      resources: [
        { name: "App Store Connect", url: "https://appstoreconnect.apple.com/" },
        { name: "Google Play Console", url: "https://play.google.com/console/" }
      ],
      projects: ["Published mobile app", "Performance optimization", "Testing suite"]
    }
  ];

  const careerPaths = [
    {
      role: "Mobile App Developer",
      companies: ["Meta", "Uber", "Instagram", "WhatsApp"],
      salary: "₹10-35 LPA",
      requirements: ["React Native/Flutter", "Mobile UI/UX", "API integration"]
    },
    {
      role: "iOS Developer",
      companies: ["Apple", "Airbnb", "Pinterest", "Dropbox"],
      salary: "₹12-40 LPA",
      requirements: ["Swift/Objective-C", "iOS SDK", "App Store guidelines"]
    },
    {
      role: "Android Developer",
      companies: ["Google", "Samsung", "Xiaomi", "OnePlus"],
      salary: "₹10-38 LPA",
      requirements: ["Kotlin/Java", "Android SDK", "Material Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-pink-900 via-pink-800 to-rose-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Mobile App Development Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-pink-100">
              Build mobile applications for iOS and Android. Create apps that millions can use.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">6 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Cross-Platform</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">App Store Ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-pink-400">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Topics to Cover
                      </h4>
                      <ul className="space-y-2">
                        {step.topics.map((topic, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Resources
                      </h4>
                      <div className="space-y-2">
                        {step.resources.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-pink-400 hover:text-pink-300 underline"
                          >
                            {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Projects
                      </h4>
                      <ul className="space-y-2">
                        {step.projects.map((project, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Career Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{career.role}</CardTitle>
                  <p className="text-pink-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-pink-900/50 text-pink-300 px-2 py-1 rounded text-sm">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {career.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-pink-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-900 via-pink-800 to-rose-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Building Mobile Apps!</h2>
          <p className="text-xl mb-8 text-pink-100">
            Choose your platform and start creating amazing mobile experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">Start with React Native</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileDevRoadmap;

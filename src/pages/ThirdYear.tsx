
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">3rd Year - Specialization Phase</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
              Choose your domain, contribute to open source, and build advanced projects. This year is about specialization and real-world experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Domain Selection</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Open Source</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Advanced Projects</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Internships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Final Year?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Time to prepare for placements and plan your career path. The final push towards your dream job!
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg" asChild>
            <a href="/fourth-year">Explore 4th Year Guide</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThirdYear;

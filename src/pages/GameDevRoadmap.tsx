
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const GameDevRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Game Development Basics (Weeks 1-8)",
      duration: "2 Months",
      topics: [
        "Game Design Fundamentals - Mechanics, dynamics, aesthetics",
        "Programming Basics - C# for Unity, C++ for Unreal",
        "Mathematics - Vectors, matrices, trigonometry",
        "Game Engines - Unity 3D basics, Unreal Engine intro",
        "2D Game Development - Sprites, animations, physics"
      ],
      resources: [
        { name: "Unity Learn", url: "https://learn.unity.com/" },
        { name: "Unreal Engine Documentation", url: "https://docs.unrealengine.com/" }
      ],
      projects: ["Simple 2D platformer", "Endless runner game", "Basic puzzle game"]
    },
    {
      phase: "3D Game Development (Weeks 9-16)",
      duration: "2 Months",
      topics: [
        "3D Graphics - Modeling, texturing, lighting",
        "3D Physics - Rigidbodies, collisions, joints",
        "Animation Systems - Keyframe, skeletal animation",
        "Shaders - HLSL/GLSL basics, visual effects",
        "Level Design - Environment creation, optimization"
      ],
      resources: [
        { name: "Blender Documentation", url: "https://docs.blender.org/" },
        { name: "Unity Shader Graph", url: "https://unity.com/shader-graph" }
      ],
      projects: ["3D adventure game", "Racing game prototype", "First-person shooter basics"]
    },
    {
      phase: "Advanced Game Systems (Weeks 17-24)",
      duration: "2 Months",
      topics: [
        "AI Programming - State machines, behavior trees",
        "Networking - Multiplayer systems, client-server",
        "Audio Implementation - Sound effects, music, 3D audio",
        "User Interface - Menus, HUD, inventory systems",
        "Performance Optimization - Profiling, memory management"
      ],
      resources: [
        { name: "Unity Netcode", url: "https://unity.com/products/netcode" },
        { name: "Wwise Audio Engine", url: "https://www.audiokinetic.com/products/wwise/" }
      ],
      projects: ["Multiplayer game", "AI-driven RPG", "Mobile game with monetization"]
    },
    {
      phase: "Game Production & Publishing (Weeks 25-30)",
      duration: "1.5 Months",
      topics: [
        "Game Publishing - Steam, mobile app stores, console platforms",
        "Marketing & Community - Social media, game trailers, press kits",
        "Monetization - In-app purchases, ads, premium models",
        "Analytics - Player behavior tracking, A/B testing",
        "Post-Launch Support - Updates, bug fixes, community management"
      ],
      resources: [
        { name: "Steam Developer Portal", url: "https://partner.steamgames.com/" },
        { name: "Unity Analytics", url: "https://unity.com/products/unity-analytics" }
      ],
      projects: ["Published indie game", "Game marketing campaign", "Live service game features"]
    }
  ];

  const careerPaths = [
    {
      role: "Game Developer",
      companies: ["Electronic Arts", "Ubisoft", "Epic Games", "Riot Games"],
      salary: "₹8-30 LPA",
      requirements: ["Unity/Unreal Engine", "C#/C++ programming", "Game design principles"]
    },
    {
      role: "Technical Artist",
      companies: ["Blizzard", "Naughty Dog", "Rockstar", "CD Projekt"],
      salary: "₹12-35 LPA",
      requirements: ["Shader programming", "3D modeling", "Performance optimization"]
    },
    {
      role: "Game Designer",
      companies: ["Nintendo", "Valve", "Indie Studios", "Mobile Game Companies"],
      salary: "₹10-40 LPA",
      requirements: ["Game mechanics design", "Level design", "Player psychology"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-orange-900 via-orange-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Game Development Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-orange-100">
              Create engaging games and interactive experiences. Turn your creative vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">7.5 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Creative Industry</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Portfolio Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-orange-400">
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
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
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
                            className="block text-orange-400 hover:text-orange-300 underline"
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
                  <p className="text-orange-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-orange-900/50 text-orange-300 px-2 py-1 rounded text-sm">
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
                          <CheckCircle className="w-3 h-3 text-orange-500" />
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

      <section className="py-16 bg-gradient-to-r from-orange-900 via-orange-800 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Create Amazing Games!</h2>
          <p className="text-xl mb-8 text-orange-100">
            Start with simple 2D games and progress to creating immersive 3D experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://learn.unity.com/" target="_blank" rel="noopener noreferrer">Start with Unity</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevRoadmap;

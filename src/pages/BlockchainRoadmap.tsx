
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const BlockchainRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Blockchain Fundamentals (Weeks 1-6)",
      duration: "1.5 Months",
      topics: [
        "Blockchain Basics - Distributed ledger, consensus mechanisms",
        "Cryptocurrency - Bitcoin, Ethereum fundamentals",
        "Cryptography - Hash functions, digital signatures",
        "Decentralization - P2P networks, nodes",
        "Programming Basics - JavaScript, Python"
      ],
      resources: [
        { name: "Blockchain Basics", url: "https://ethereum.org/en/developers/docs/" },
        { name: "Coursera Blockchain Course", url: "https://www.coursera.org/learn/blockchain-basics" }
      ],
      projects: ["Simple blockchain implementation", "Cryptocurrency tracker", "Hash function examples"]
    },
    {
      phase: "Smart Contract Development (Weeks 7-14)",
      duration: "2 Months",
      topics: [
        "Solidity Programming - Syntax, data types, functions",
        "Smart Contract Architecture - Design patterns, security",
        "Ethereum Development - Web3.js, MetaMask integration",
        "Testing & Deployment - Truffle, Hardhat, Remix",
        "Gas Optimization - Efficient contract design"
      ],
      resources: [
        { name: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
        { name: "OpenZeppelin Contracts", url: "https://openzeppelin.com/contracts/" }
      ],
      projects: ["ERC-20 token", "NFT marketplace", "Voting system smart contract"]
    },
    {
      phase: "DeFi & Advanced Topics (Weeks 15-22)",
      duration: "2 Months",
      topics: [
        "DeFi Protocols - Uniswap, Compound, Aave",
        "Yield Farming - Liquidity mining, staking",
        "Cross-chain Development - Bridges, Layer 2 solutions",
        "Advanced Solidity - Assembly, proxy patterns",
        "Security Auditing - Common vulnerabilities, best practices"
      ],
      resources: [
        { name: "DeFi Pulse", url: "https://defipulse.com/" },
        { name: "ConsenSys Academy", url: "https://consensys.net/academy/" }
      ],
      projects: ["DeFi yield farming app", "Cross-chain bridge", "DEX implementation"]
    },
    {
      phase: "Web3 & Production (Weeks 23-28)",
      duration: "1.5 Months",
      topics: [
        "Web3 Frontend - React, Next.js with blockchain",
        "IPFS & Decentralized Storage - File systems, content addressing",
        "DAO Development - Governance tokens, voting mechanisms",
        "Scaling Solutions - Polygon, Arbitrum, Optimism",
        "Production Deployment - Mainnet deployment, monitoring"
      ],
      resources: [
        { name: "Web3.js Documentation", url: "https://web3js.readthedocs.io/" },
        { name: "IPFS Documentation", url: "https://docs.ipfs.io/" }
      ],
      projects: ["Full-stack DApp", "DAO with governance", "Production smart contracts"]
    }
  ];

  const careerPaths = [
    {
      role: "Blockchain Developer",
      companies: ["ConsenSys", "Chainlink", "Polygon", "Binance"],
      salary: "₹15-50 LPA",
      requirements: ["Solidity expertise", "Web3 development", "DeFi knowledge"]
    },
    {
      role: "Smart Contract Auditor",
      companies: ["OpenZeppelin", "Trail of Bits", "Quantstamp", "CertiK"],
      salary: "₹25-80 LPA",
      requirements: ["Security expertise", "Auditing experience", "Vulnerability assessment"]
    },
    {
      role: "DeFi Engineer",
      companies: ["Uniswap", "Compound", "Aave", "MakerDAO"],
      salary: "₹30-120 LPA",
      requirements: ["DeFi protocols", "MEV understanding", "Financial modeling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-yellow-900 via-yellow-800 to-orange-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Blockchain Development Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-yellow-100">
              Build decentralized applications and smart contracts. Shape the future of finance and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">7 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">High Salary</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Future Tech</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-yellow-400">
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
                            <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
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
                            className="block text-yellow-400 hover:text-yellow-300 underline"
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
                  <p className="text-yellow-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded text-sm">
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
                          <CheckCircle className="w-3 h-3 text-yellow-500" />
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

      <section className="py-16 bg-gradient-to-r from-yellow-900 via-yellow-800 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Build the Decentralized Future!</h2>
          <p className="text-xl mb-8 text-yellow-100">
            Start with blockchain basics and progress to building revolutionary DeFi applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://ethereum.org/en/developers/" target="_blank" rel="noopener noreferrer">Start Building</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainRoadmap;

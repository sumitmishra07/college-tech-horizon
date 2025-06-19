
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const CybersecurityRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Fundamentals (Weeks 1-8)",
      duration: "2 Months",
      topics: [
        "Network Fundamentals - TCP/IP, DNS, HTTP/HTTPS",
        "Operating Systems - Linux, Windows internals",
        "Cryptography Basics - Encryption, hashing, PKI",
        "Security Principles - CIA triad, risk assessment",
        "Basic Programming - Python, Bash scripting"
      ],
      resources: [
        { name: "Cybrary Free Courses", url: "https://www.cybrary.it/" },
        { name: "Professor Messer Security+", url: "https://www.professormesser.com/" }
      ],
      projects: ["Network scanner", "Password strength checker", "Basic encryption tool"]
    },
    {
      phase: "Penetration Testing (Weeks 9-16)",
      duration: "2 Months",
      topics: [
        "Reconnaissance - Information gathering, OSINT",
        "Vulnerability Assessment - Nessus, OpenVAS",
        "Web Application Security - OWASP Top 10",
        "Network Penetration Testing - Nmap, Metasploit",
        "Exploitation Techniques - Buffer overflows, privilege escalation"
      ],
      resources: [
        { name: "Kali Linux Documentation", url: "https://www.kali.org/docs/" },
        { name: "OWASP Web Security Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" }
      ],
      projects: ["Web app vulnerability scanner", "Network penetration test", "Social engineering simulation"]
    },
    {
      phase: "Incident Response & Forensics (Weeks 17-24)",
      duration: "2 Months",
      topics: [
        "Digital Forensics - Evidence collection, analysis",
        "Incident Response - NIST framework, containment",
        "Malware Analysis - Static and dynamic analysis",
        "Log Analysis - SIEM tools, threat hunting",
        "Reverse Engineering - Assembly, debuggers"
      ],
      resources: [
        { name: "SANS Digital Forensics", url: "https://www.sans.org/cyber-security-courses/digital-forensics/" },
        { name: "Volatility Framework", url: "https://www.volatilityfoundation.org/" }
      ],
      projects: ["Malware analysis lab", "Incident response playbook", "Digital forensics investigation"]
    },
    {
      phase: "Advanced Security (Weeks 25-32)",
      duration: "2 Months",
      topics: [
        "Cloud Security - AWS, Azure, GCP security",
        "DevSecOps - Security in CI/CD pipelines",
        "Threat Intelligence - IOCs, threat hunting",
        "Red Team Operations - Advanced persistent threats",
        "Compliance - GDPR, HIPAA, PCI-DSS"
      ],
      resources: [
        { name: "AWS Security Hub", url: "https://aws.amazon.com/security-hub/" },
        { name: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/" }
      ],
      projects: ["Cloud security assessment", "Red team exercise", "Compliance automation tool"]
    }
  ];

  const careerPaths = [
    {
      role: "Security Analyst",
      companies: ["IBM", "Accenture", "Deloitte", "EY"],
      salary: "₹8-25 LPA",
      requirements: ["Security+ certification", "SIEM tools", "Incident response"]
    },
    {
      role: "Penetration Tester",
      companies: ["Rapid7", "Trustwave", "Bishop Fox", "Coalfire"],
      salary: "₹12-35 LPA",
      requirements: ["CEH/OSCP certification", "Kali Linux", "Web application testing"]
    },
    {
      role: "Security Engineer",
      companies: ["Google", "Microsoft", "Amazon", "Cloudflare"],
      salary: "₹20-60 LPA",
      requirements: ["CISSP certification", "Cloud security", "DevSecOps"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Cybersecurity Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-red-100">
              Protect systems and networks from cyber threats. Become a guardian of digital security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">8 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">High Demand</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Certification Path</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-red-400">
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
                            <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
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
                            className="block text-red-400 hover:text-red-300 underline"
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
                  <p className="text-red-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-red-900/50 text-red-300 px-2 py-1 rounded text-sm">
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
                          <CheckCircle className="w-3 h-3 text-red-500" />
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

      <section className="py-16 bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Protect the Digital World!</h2>
          <p className="text-xl mb-8 text-red-100">
            Start with the fundamentals and build your way to advanced security expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer">Start Learning</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecurityRoadmap;

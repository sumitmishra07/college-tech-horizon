
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const CloudDevOpsRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "DevOps Fundamentals (Weeks 1-6)",
      duration: "1.5 Months",
      topics: [
        "Linux Administration - Command line, system administration",
        "Version Control - Git, GitHub workflows",
        "Networking Basics - TCP/IP, DNS, load balancing",
        "Scripting - Bash, Python automation",
        "Software Development Lifecycle - Agile, CI/CD concepts"
      ],
      resources: [
        { name: "Linux Journey", url: "https://linuxjourney.com/" },
        { name: "Git Documentation", url: "https://git-scm.com/doc" }
      ],
      projects: ["Bash automation scripts", "Git workflow setup", "Linux server configuration"]
    },
    {
      phase: "Cloud Platforms (Weeks 7-14)",
      duration: "2 Months",
      topics: [
        "AWS Fundamentals - EC2, S3, VPC, IAM",
        "Azure Basics - Virtual machines, storage, networking",
        "Google Cloud - Compute Engine, Cloud Storage",
        "Infrastructure as Code - Terraform, CloudFormation",
        "Cloud Security - Best practices, compliance"
      ],
      resources: [
        { name: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
        { name: "Terraform Documentation", url: "https://www.terraform.io/docs" }
      ],
      projects: ["Multi-tier web app on AWS", "Infrastructure automation", "Cloud cost optimization"]
    },
    {
      phase: "Containerization & Orchestration (Weeks 15-22)",
      duration: "2 Months",
      topics: [
        "Docker - Containers, images, Dockerfile",
        "Kubernetes - Pods, services, deployments",
        "Container Registries - Docker Hub, ECR, ACR",
        "Service Mesh - Istio, Linkerd",
        "Container Security - Image scanning, runtime protection"
      ],
      resources: [
        { name: "Docker Documentation", url: "https://docs.docker.com/" },
        { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" }
      ],
      projects: ["Containerized microservices", "Kubernetes cluster deployment", "CI/CD with containers"]
    },
    {
      phase: "Monitoring & Advanced DevOps (Weeks 23-28)",
      duration: "1.5 Months",
      topics: [
        "Monitoring - Prometheus, Grafana, ELK stack",
        "CI/CD Pipelines - Jenkins, GitLab CI, GitHub Actions",
        "Configuration Management - Ansible, Chef, Puppet",
        "Site Reliability Engineering - SLIs, SLOs, error budgets",
        "Incident Management - On-call practices, post-mortems"
      ],
      resources: [
        { name: "Prometheus Documentation", url: "https://prometheus.io/docs/" },
        { name: "Grafana Tutorials", url: "https://grafana.com/tutorials/" }
      ],
      projects: ["Complete monitoring setup", "Automated deployment pipeline", "Disaster recovery plan"]
    }
  ];

  const careerPaths = [
    {
      role: "DevOps Engineer",
      companies: ["Netflix", "Spotify", "Airbnb", "Uber"],
      salary: "₹14-45 LPA",
      requirements: ["AWS/Azure certification", "Kubernetes", "CI/CD pipelines"]
    },
    {
      role: "Cloud Architect",
      companies: ["Amazon", "Microsoft", "Google", "IBM"],
      salary: "₹25-80 LPA",
      requirements: ["Multi-cloud expertise", "Architecture design", "Cost optimization"]
    },
    {
      role: "Site Reliability Engineer",
      companies: ["Google", "Facebook", "Twitter", "LinkedIn"],
      salary: "₹20-70 LPA",
      requirements: ["Programming skills", "System reliability", "Incident response"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Cloud & DevOps Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-indigo-100">
              Master cloud platforms and DevOps practices. Build scalable and reliable infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">7 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Cloud Native</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">High Salary</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-indigo-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-indigo-400">
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
                            <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
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
                            className="block text-indigo-400 hover:text-indigo-300 underline"
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
                  <p className="text-indigo-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded text-sm">
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
                          <CheckCircle className="w-3 h-3 text-indigo-500" />
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

      <section className="py-16 bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Build the Cloud Infrastructure!</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Master the tools and practices that power modern software delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://aws.amazon.com/free/" target="_blank" rel="noopener noreferrer">Start with AWS</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudDevOpsRoadmap;

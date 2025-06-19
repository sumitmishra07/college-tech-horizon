
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Clock, BookOpen, Code, Trophy } from "lucide-react";
import { useEffect } from "react";

const MLRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: "Mathematics & Statistics (Weeks 1-8)",
      duration: "2 Months",
      topics: [
        "Linear Algebra - Vectors, matrices, eigenvalues",
        "Calculus - Derivatives, gradients, optimization",
        "Statistics - Probability, distributions, hypothesis testing",
        "Python Programming - NumPy, Pandas, Matplotlib",
        "Data Visualization - Seaborn, Plotly"
      ],
      resources: [
        { name: "Khan Academy Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" },
        { name: "3Blue1Brown Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" }
      ],
      projects: ["Data analysis with Pandas", "Statistical analysis project", "Data visualization dashboard"]
    },
    {
      phase: "Machine Learning Fundamentals (Weeks 9-16)",
      duration: "2 Months",
      topics: [
        "Supervised Learning - Regression, classification",
        "Unsupervised Learning - Clustering, dimensionality reduction",
        "Model Evaluation - Cross-validation, metrics",
        "Scikit-learn - Implementation and practice",
        "Feature Engineering - Selection, transformation"
      ],
      resources: [
        { name: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" },
        { name: "Scikit-learn Documentation", url: "https://scikit-learn.org/" }
      ],
      projects: ["House price prediction", "Customer segmentation", "Credit risk assessment"]
    },
    {
      phase: "Deep Learning (Weeks 17-24)",
      duration: "2 Months",
      topics: [
        "Neural Networks - Perceptrons, backpropagation",
        "Deep Learning Frameworks - TensorFlow, PyTorch",
        "Convolutional Neural Networks - Image recognition",
        "Recurrent Neural Networks - Sequence modeling",
        "Transfer Learning - Pre-trained models"
      ],
      resources: [
        { name: "Deep Learning Specialization", url: "https://www.coursera.org/specializations/deep-learning" },
        { name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }
      ],
      projects: ["Image classifier", "Sentiment analysis", "Time series forecasting"]
    },
    {
      phase: "Specialized Topics (Weeks 25-32)",
      duration: "2 Months",
      topics: [
        "Natural Language Processing - Text processing, transformers",
        "Computer Vision - Object detection, image segmentation",
        "MLOps - Model deployment, monitoring",
        "Cloud Platforms - AWS, Google Cloud, Azure ML",
        "Ethics in AI - Bias, fairness, interpretability"
      ],
      resources: [
        { name: "Hugging Face Transformers", url: "https://huggingface.co/" },
        { name: "MLflow Documentation", url: "https://mlflow.org/" }
      ],
      projects: ["Chatbot with transformers", "MLOps pipeline", "Computer vision application"]
    }
  ];

  const careerPaths = [
    {
      role: "Machine Learning Engineer",
      companies: ["Google", "Microsoft", "Tesla", "OpenAI"],
      salary: "₹18-60 LPA",
      requirements: ["Python/R expertise", "ML frameworks", "Cloud platforms"]
    },
    {
      role: "Data Scientist",
      companies: ["Netflix", "Uber", "LinkedIn", "Spotify"],
      salary: "₹15-50 LPA",
      requirements: ["Statistics", "Business acumen", "Communication skills"]
    },
    {
      role: "AI Research Scientist",
      companies: ["DeepMind", "OpenAI", "Research labs", "Universities"],
      salary: "₹25-100 LPA",
      requirements: ["PhD preferred", "Research publications", "Advanced mathematics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Machine Learning & AI Roadmap</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-purple-100">
              Master artificial intelligence and machine learning. Build intelligent systems that learn from data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">8 Month Journey</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Math-Heavy</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">High Demand</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {step.phase}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-purple-400">
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
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
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
                            className="block text-purple-400 hover:text-purple-300 underline"
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
                  <p className="text-purple-400 font-semibold text-lg">{career.salary}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-sm">
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
                          <CheckCircle className="w-3 h-3 text-purple-500" />
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

      <section className="py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your AI Journey!</h2>
          <p className="text-xl mb-8 text-purple-100">
            Begin with mathematics and gradually build your way to advanced AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer">Start Learning</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg" asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLRoadmap;

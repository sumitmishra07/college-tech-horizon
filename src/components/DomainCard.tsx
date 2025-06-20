
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface DomainCardProps {
  title: string;
  description: string;
  skills: string[];
  avgSalary: string;
  jobRoles: string[];
  color: string;
  roadmapUrl?: string;
}

const DomainCard = ({ title, description, skills, avgSalary, jobRoles, color, roadmapUrl }: DomainCardProps) => {
  const handleLearnMore = () => {
    if (roadmapUrl) {
      window.location.href = roadmapUrl;
    }
  };

  return (
    <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-gray-800/60 backdrop-blur-sm border-gray-600 h-full flex flex-col hover:bg-gray-700/60 hover:border-blue-400/50">
      <div className={`h-1 ${color} group-hover:h-2 transition-all duration-300`}></div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">Skills Required:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full group-hover:bg-blue-600/30 group-hover:text-blue-200 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-white group-hover:text-blue-100 transition-colors duration-300">Avg. Salary:</span>
            <span className="text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">{avgSalary}</span>
          </div>
        </div>
        
        <div className="mb-6 flex-1">
          <h4 className="font-medium text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">Job Roles:</h4>
          <ul className="space-y-1">
            {jobRoles.slice(0, 3).map((role, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center group-hover:text-gray-200 transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors duration-300"></span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white mt-auto transition-all duration-300"
          onClick={handleLearnMore}
          disabled={!roadmapUrl}
        >
          Learn More <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DomainCard;

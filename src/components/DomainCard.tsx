
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
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/50 border-gray-700 h-full flex flex-col">
      <div className={`h-1 ${color}`}></div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-white mb-2">Skills Required:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-white">Avg. Salary:</span>
            <span className="text-green-400 font-semibold">{avgSalary}</span>
          </div>
        </div>
        
        <div className="mb-6 flex-1">
          <h4 className="font-medium text-white mb-2">Job Roles:</h4>
          <ul className="space-y-1">
            {jobRoles.slice(0, 3).map((role, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white mt-auto"
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

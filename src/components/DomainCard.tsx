
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DomainCardProps {
  title: string;
  description: string;
  skills: string[];
  avgSalary: string;
  jobRoles: string[];
  color: string;
}

const DomainCard = ({ title, description, skills, avgSalary, jobRoles, color }: DomainCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`h-1 ${color}`}></div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Skills Required:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900">Avg. Salary:</span>
            <span className="text-green-600 font-semibold">{avgSalary}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-2">Job Roles:</h4>
          <ul className="space-y-1">
            {jobRoles.slice(0, 3).map((role, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default DomainCard;

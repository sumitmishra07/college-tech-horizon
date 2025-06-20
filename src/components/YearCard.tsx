
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface YearCardProps {
  year: string;
  title: string;
  description: string;
  phase: string;
  highlights: string[];
  path: string;
  gradient: string;
}

const YearCard = ({ year, title, description, phase, highlights, path, gradient }: YearCardProps) => {
  return (
    <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 overflow-hidden bg-gray-800/60 backdrop-blur-sm h-full flex flex-col hover:bg-gray-700/60">
      <div className={`h-2 ${gradient} group-hover:h-3 transition-all duration-300`}></div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{year}</div>
          <div className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full group-hover:bg-blue-600/30 group-hover:text-blue-200 transition-all duration-300">
            {phase}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{description}</p>
        
        <div className="mb-6 flex-1">
          <h4 className="font-medium text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">Key Focus Areas:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center group-hover:text-gray-200 transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors duration-300"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <Link to={path} className="mt-auto">
          <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
            Explore {year} Guide
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default YearCard;

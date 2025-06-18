
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
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-background h-full flex flex-col">
      <div className={`h-2 ${gradient}`}></div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-bold text-primary">{year}</div>
          <div className="text-sm font-medium text-muted-foreground bg-accent/20 px-3 py-1 rounded-full">
            {phase}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-6 flex-1">
          <h4 className="font-medium text-foreground mb-2">Key Focus Areas:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <Link to={path} className="mt-auto">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Explore {year} Guide
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default YearCard;

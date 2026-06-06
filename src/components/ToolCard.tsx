import { Link } from "react-router-dom";
import { ProjectTool, categories } from "@/data/tools";
import * as Icons from "lucide-react";

interface ToolCardProps {
  tool: ProjectTool;
}

const categoryStyles: Record<ProjectTool["category"], string> = {
  ide: "border-l-4 border-l-forest",
  forstudie: "border-l-4 border-l-steel",
  projektstart: "border-l-4 border-l-mine",
  planering: "border-l-4 border-l-primary",
  genomforande: "border-l-4 border-l-accent",
  avslut: "border-l-4 border-l-secondary",
};

const ToolCard = ({ tool }: ToolCardProps) => {
  const IconComponent = (Icons as any)[tool.icon] || Icons.Wrench;

  return (
    <Link to={`/verktyg/${tool.id}`} className="h-full">
      <div
        className={`group bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full ${categoryStyles[tool.category]}`}
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-md bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <span className="inline-block mt-1 mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {categories[tool.category].label}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tool.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;

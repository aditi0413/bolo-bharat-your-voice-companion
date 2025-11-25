import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  category?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

const TopicCard = ({ title, description, category, icon: Icon, onClick }: TopicCardProps) => {
  return (
    <Card
      className="hover:shadow-medium transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 bg-card"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg md:text-xl font-bold leading-tight">
            {title}
          </CardTitle>
          {Icon && (
            <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          )}
        </div>
        {category && (
          <Badge variant="secondary" className="w-fit mt-2 text-xs">
            {category}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TopicCard;

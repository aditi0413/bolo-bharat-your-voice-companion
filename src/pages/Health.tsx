import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TopicCard from "@/components/TopicCard";
import { Heart, Thermometer, Droplet, Syringe, HandHeart, AlertCircle, Pill, Baby } from "lucide-react";
import healthData from "@/data/health_tips.json";

const healthIcons: Record<number, any> = {
  1: Thermometer,
  2: Droplet,
  3: Syringe,
  4: HandHeart,
  5: AlertCircle,
  6: AlertCircle,
  7: Pill,
  8: Baby,
};

const Health = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">स्वास्थ्य सुझाव</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            आम स्वास्थ्य समस्याओं और उनकी देखभाल की जानकारी
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthData.map((item) => {
            const IconComponent = healthIcons[item.id] || Heart;
            return (
              <TopicCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={IconComponent}
              />
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Health;

import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Cloud, Waves, Snowflake, Wind, Sun, AlertTriangle } from "lucide-react";
import weatherData from "@/data/weather_tips.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weatherIcons: Record<number, any> = {
  1: Sun,
  2: Waves,
  3: Cloud,
  4: Snowflake,
  5: AlertTriangle,
  6: Wind,
};

const Weather = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">मौसम की जानकारी</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            विभिन्न मौसम स्थितियों में सावधानियां और सुझाव
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weatherData.map((item) => {
            const IconComponent = weatherIcons[item.id] || Cloud;
            return (
              <Card
                key={item.id}
                className="border-2 hover:shadow-medium transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold leading-tight flex-1">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Weather;

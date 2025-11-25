import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TopicCard from "@/components/TopicCard";
import { Sprout, Droplets, TrendingUp, CloudRain } from "lucide-react";
import farmingData from "@/data/farming.json";

const categoryIcons: Record<string, any> = {
  "बीज और फसल": Sprout,
  "खाद और पानी": Droplets,
  "मंडी और दाम": TrendingUp,
  "मौसम से सावधानी": CloudRain,
  "कीटनाशक": Sprout,
};

const Farming = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">खेती की जानकारी</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            खेती से जुड़े सभी जरूरी सुझाव और जानकारी
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingData.map((item) => (
            <TopicCard
              key={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              icon={categoryIcons[item.category] || Sprout}
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Farming;

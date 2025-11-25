import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TopicCard from "@/components/TopicCard";
import { Smartphone, Lock, CreditCard, Zap, Shield, Mail, FileText, IdCard } from "lucide-react";
import digitalData from "@/data/digital_help.json";

const digitalIcons: Record<number, any> = {
  1: CreditCard,
  2: Lock,
  3: IdCard,
  4: Smartphone,
  5: Shield,
  6: Zap,
  7: Mail,
  8: FileText,
};

const DigitalHelp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">डिजिटल मदद</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            डिजिटल सेवाओं का सुरक्षित और आसान उपयोग सीखें
          </p>
        </div>

        <div className="bg-destructive/10 border-2 border-destructive/30 rounded-lg p-4 mb-6">
          <p className="text-base font-semibold text-destructive flex items-center gap-2">
            <Shield className="h-5 w-5" />
            सावधान रहें: किसी को भी अपना OTP, पासवर्ड, CVV नंबर न बताएं
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {digitalData.map((item) => {
            const IconComponent = digitalIcons[item.id] || Smartphone;
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

export default DigitalHelp;

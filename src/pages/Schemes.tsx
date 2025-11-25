import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TopicCard from "@/components/TopicCard";
import { FileText } from "lucide-react";
import schemesData from "@/data/schemes.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Schemes = () => {
  const [selectedScheme, setSelectedScheme] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">सरकारी योजनाएं</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            आपके लिए उपलब्ध विभिन्न सरकारी योजनाओं की जानकारी
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schemesData.map((scheme) => (
            <TopicCard
              key={scheme.id}
              title={scheme.name}
              description={scheme.short_description}
              category={scheme.category}
              icon={FileText}
              onClick={() => setSelectedScheme(scheme)}
            />
          ))}
        </div>
      </main>

      <Dialog open={!!selectedScheme} onOpenChange={() => setSelectedScheme(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedScheme && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {selectedScheme.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">विवरण</h3>
                  <p className="text-base leading-relaxed">{selectedScheme.short_description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">लाभ</h3>
                  <p className="text-base leading-relaxed">{selectedScheme.benefit}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">आवेदन कैसे करें</h3>
                  <p className="text-base leading-relaxed">{selectedScheme.how_to_apply}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <BottomNav />
    </div>
  );
};

export default Schemes;

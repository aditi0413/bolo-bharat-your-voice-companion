import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { toast } from "sonner";

interface ResponseCardProps {
  question: string;
  answer: string;
  audioUrl?: string;
}

const ResponseCard = ({ question, answer, audioUrl }: ResponseCardProps) => {
  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
      toast.info("उत्तर चल रहा है...");
    } else {
      // Simulate audio playback
      toast.info("उत्तर की आवाज़ जल्द आएगी");
    }
  };

  return (
    <Card className="w-full shadow-medium border-2">
      <CardHeader className="bg-muted/50 pb-3">
        <CardTitle className="text-lg md:text-xl font-bold text-primary">
          आपका सवाल
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-base md:text-lg mb-6 leading-relaxed">{question}</p>

        <div className="bg-accent/10 p-4 rounded-lg border-2 border-accent/20">
          <h3 className="text-lg md:text-xl font-bold text-accent mb-3">उत्तर</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">{answer}</p>

          <Button
            onClick={playAudio}
            className="w-full md:w-auto bg-secondary hover:bg-secondary/90"
            size="lg"
          >
            <Volume2 className="mr-2 h-5 w-5" />
            उत्तर सुनें
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseCard;

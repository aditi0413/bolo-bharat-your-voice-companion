import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import VoiceRecorder from "@/components/VoiceRecorder";
import ResponseCard from "@/components/ResponseCard";
import { Card } from "@/components/ui/card";
import { FileText, Sprout, Cloud, Heart, Smartphone, Info } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [transcript, setTranscript] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleRecordingComplete = (text: string) => {
    setTranscript(text);
    // Mock answer
    setAnswer(
      "पीएम-किसान योजना के तहत किसानों को हर साल ₹6000 मिलते हैं। यह पैसा तीन बार में आता है। आप अपने गाँव के CSC सेंटर या तहसील में जाकर आवेदन कर सकते हैं।"
    );
  };

  const topicCards = [
    {
      title: "सरकारी योजनाएं",
      icon: FileText,
      path: "/schemes",
      gradient: "bg-gradient-warm",
    },
    {
      title: "खेती की जानकारी",
      icon: Sprout,
      path: "/farming",
      gradient: "bg-gradient-nature",
    },
    {
      title: "मौसम की जानकारी",
      icon: Cloud,
      path: "/weather",
      gradient: "bg-gradient-trust",
    },
    {
      title: "स्वास्थ्य सुझाव",
      icon: Heart,
      path: "/health",
      gradient: "bg-gradient-warm",
    },
    {
      title: "डिजिटल मदद",
      icon: Smartphone,
      path: "/digital",
      gradient: "bg-gradient-trust",
    },
    {
      title: "ऐप के बारे में",
      icon: Info,
      path: "/about",
      gradient: "bg-gradient-nature",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        {/* Voice Recording Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 shadow-soft border-2 border-primary/10">
            <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
          </div>
        </section>

        {/* Response Section */}
        {transcript && answer && (
          <section className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ResponseCard question={transcript} answer={answer} />
          </section>
        )}

        {/* Topics Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            किस विषय में मदद चाहिए?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {topicCards.map((topic) => (
              <Card
                key={topic.path}
                className={`${topic.gradient} text-white cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-medium border-0 overflow-hidden`}
                onClick={() => navigate(topic.path)}
              >
                <div className="p-6 flex flex-col items-center justify-center text-center h-32 md:h-40">
                  <topic.icon className="h-10 w-10 md:h-12 md:w-12 mb-3" />
                  <h3 className="text-base md:text-lg font-bold leading-tight">
                    {topic.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;

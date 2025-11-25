import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">मदद और सहायता</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            हम यहाँ आपकी मदद के लिए हैं
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader className="bg-primary/10">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl md:text-2xl">आम सवाल</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">यह ऐप कैसे काम करता है?</h3>
                <p className="text-muted-foreground">
                  आप माइक बटन दबाकर अपनी भाषा में सवाल पूछ सकते हैं। हमारा सिस्टम आपको
                  आसान हिंदी में जवाब देगा।
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">क्या यह मुफ्त है?</h3>
                <p className="text-muted-foreground">
                  हाँ, यह सेवा पूरी तरह से मुफ्त है। हमारा मकसद सभी को जानकारी उपलब्ध
                  कराना है।
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">मेरी जानकारी सुरक्षित है?</h3>
                <p className="text-muted-foreground">
                  हाँ, हम आपकी निजता का पूरा ध्यान रखते हैं। आपकी कोई भी व्यक्तिगत
                  जानकारी सुरक्षित रहती है।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="bg-secondary/10">
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-secondary" />
                <CardTitle className="text-xl md:text-2xl">संपर्क करें</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">हेल्पलाइन</p>
                  <p className="text-muted-foreground">1800-XXX-XXXX (टोल फ्री)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">ई-मेल</p>
                  <p className="text-muted-foreground">help@bolobharat.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground">+91-XXXXX-XXXXX</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-6 text-center">
            <p className="text-lg font-semibold text-accent">
              समय: सुबह 9 बजे से रात 9 बजे तक (सभी दिन)
            </p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Help;

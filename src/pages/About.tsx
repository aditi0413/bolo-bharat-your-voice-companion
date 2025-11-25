import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic2, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Bolo Bharat के बारे में</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            गाँव और कस्बों के लिए आवाज़ आधारित डिजिटल साथी
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader className="bg-gradient-warm text-white">
              <div className="flex items-center gap-3">
                <Mic2 className="h-8 w-8" />
                <CardTitle className="text-xl md:text-2xl">हमारा उद्देश्य</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-base md:text-lg leading-relaxed">
                Bolo Bharat का मकसद है भारत के गाँव और छोटे कस्बों के लोगों को डिजिटल सेवाओं से
                जोड़ना। हम चाहते हैं कि हर व्यक्ति अपनी भाषा में, अपनी आवाज़ से, आसानी से
                जानकारी पा सके।
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="bg-gradient-nature text-white">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8" />
                <CardTitle className="text-xl md:text-2xl">किसके लिए है यह?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-base md:text-lg">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>किसान भाई-बहन जो खेती और योजनाओं की जानकारी चाहते हैं</span>
                </li>
                <li className="flex items-start gap-2 text-base md:text-lg">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>बुजुर्ग जिन्हें टाइपिंग या पढ़ने में कठिनाई होती है</span>
                </li>
                <li className="flex items-start gap-2 text-base md:text-lg">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>महिलाएं जो स्वास्थ्य और योजनाओं की जानकारी चाहती हैं</span>
                </li>
                <li className="flex items-start gap-2 text-base md:text-lg">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>हर वह व्यक्ति जो हिंदी में आसान जानकारी चाहता है</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="bg-gradient-trust text-white">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-8 w-8" />
                <CardTitle className="text-xl md:text-2xl">क्या-क्या जानकारी मिलेगी?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-1">सरकारी योजनाएं</p>
                  <p className="text-sm text-muted-foreground">किसान, महिला, बुजुर्ग योजनाओं की जानकारी</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="font-semibold text-secondary mb-1">खेती की जानकारी</p>
                  <p className="text-sm text-muted-foreground">बीज, खाद, मंडी भाव, फसल सुझाव</p>
                </div>
                <div className="bg-accent/5 p-4 rounded-lg">
                  <p className="font-semibold text-accent mb-1">मौसम और सावधानियां</p>
                  <p className="text-sm text-muted-foreground">गर्मी, बारिश, ठंड में क्या करें</p>
                </div>
                <div className="bg-destructive/5 p-4 rounded-lg">
                  <p className="font-semibold text-destructive mb-1">स्वास्थ्य सुझाव</p>
                  <p className="text-sm text-muted-foreground">आम बीमारियां, इलाज, टीकाकरण</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-1">डिजिटल साक्षरता</p>
                  <p className="text-sm text-muted-foreground">UPI, आधार, ऑनलाइन सुरक्षा</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="font-semibold text-secondary mb-1">सुरक्षा सुझाव</p>
                  <p className="text-sm text-muted-foreground">धोखाधड़ी से बचाव, OTP सुरक्षा</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="bg-muted">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl md:text-2xl">कैसे उपयोग करें?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ol className="space-y-3">
                <li className="flex items-start gap-3 text-base md:text-lg">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </span>
                  <span>होम पेज पर माइक बटन दबाएं</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </span>
                  <span>अपना सवाल हिंदी में बोलें</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </span>
                  <span>जवाब पढ़ें या सुनें</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </span>
                  <span>नीचे के बटन से अलग-अलग विषय भी देख सकते हैं</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="bg-gradient-warm text-white p-6 rounded-lg text-center">
            <p className="text-xl md:text-2xl font-bold mb-2">
              साथ मिलकर बनाएं डिजिटल इंडिया
            </p>
            <p className="text-base md:text-lg opacity-90">
              Bolo Bharat - आपकी आवाज़, आपका अधिकार
            </p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default About;

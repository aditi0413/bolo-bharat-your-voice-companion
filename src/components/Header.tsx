import { Mic2 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-warm text-primary-foreground shadow-medium sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <Mic2 className="h-8 w-8 animate-pulse-soft" />
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Bolo Bharat
            </h1>
            <p className="text-sm md:text-base opacity-90 font-medium">
              गाँव और कस्बों के लिए आवाज़ आधारित साथी
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

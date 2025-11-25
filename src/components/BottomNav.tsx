import { Home, FileText, Sprout, Cloud, Heart, Smartphone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const BottomNav = () => {
  const navItems = [
    { to: "/", icon: Home, label: "होम" },
    { to: "/schemes", icon: FileText, label: "योजना" },
    { to: "/farming", icon: Sprout, label: "खेती" },
    { to: "/weather", icon: Cloud, label: "मौसम" },
    { to: "/health", icon: Heart, label: "स्वास्थ्य" },
    { to: "/digital", icon: Smartphone, label: "डिजिटल" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-border shadow-strong z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className="flex flex-col items-center justify-center flex-1 h-full transition-colors hover:bg-muted/50"
            activeClassName="bg-muted text-primary"
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingSearchButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="icon" 
        className="w-14 h-14 rounded-full shadow-lg gradient-primary hover:shadow-xl transition-smooth"
        onClick={() => console.log('Open search')}
      >
        <Search size={24} className="text-white" />
      </Button>
    </div>
  );
};
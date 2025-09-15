import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categories = [
  { id: null, label: 'Все новости', icon: '📰', count: 127 },
  { id: 'windows', label: 'Windows 11', icon: '🪟', count: 45 },
  { id: 'xbox', label: 'Xbox', icon: '🎮', count: 32 },
  { id: 'surface', label: 'Surface', icon: '💻', count: 18 },
  { id: 'general', label: 'Общее', icon: '📱', count: 32 }
];

export const CategoryMenu = ({ isOpen, onClose, selectedCategory, onCategoryChange }: CategoryMenuProps) => {
  const handleCategorySelect = (categoryId: string | null) => {
    onCategoryChange(categoryId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div className={cn(
        "fixed top-0 left-0 h-full w-80 bg-background border-r border-border z-50 transform transition-smooth shadow-2xl",
        isOpen ? "translate-x-0 animate-slide-in-left" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="font-semibold text-lg">Категории</h2>
            <p className="text-sm text-muted-foreground">Выберите тему новостей</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-smooth"
          >
            <X size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="p-2">
          {categories.map((category) => (
            <button
              key={category.id || 'all'}
              onClick={() => handleCategorySelect(category.id)}
              className={cn(
                "w-full flex items-center gap-3 p-4 rounded-xl text-left transition-smooth group",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-accent"
              )}
            >
              <div className="text-2xl">{category.icon}</div>
              <div className="flex-1">
                <div className={cn(
                  "font-medium",
                  selectedCategory === category.id ? "text-primary-foreground" : "text-foreground"
                )}>
                  {category.label}
                </div>
                <div className={cn(
                  "text-sm",
                  selectedCategory === category.id ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {category.count} статей
                </div>
              </div>
              {selectedCategory === category.id && (
                <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-background">
          <div className="text-center text-sm text-muted-foreground">
            Последнее обновление: сегодня
          </div>
        </div>
      </div>
    </>
  );
};
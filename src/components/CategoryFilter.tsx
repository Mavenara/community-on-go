import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categories = [
  { id: null, label: 'Все', icon: '📰' },
  { id: 'windows', label: 'Windows 11', icon: '🪟' },
  { id: 'xbox', label: 'Xbox', icon: '🎮' },
  { id: 'surface', label: 'Surface', icon: '💻' },
  { id: 'general', label: 'Общее', icon: '📱' }
];

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-4">
      {categories.map((category) => (
        <button
          key={category.id || 'all'}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth",
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          )}
        >
          <span>{category.icon}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
};
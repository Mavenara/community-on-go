import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { CategoryMenu } from "@/components/CategoryMenu";
import { ArticleCard } from "@/components/ArticleCard";
import { FloatingSearchButton } from "@/components/FloatingSearchButton";
import { mockArticles } from "@/data/articles";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredArticles = selectedCategory 
    ? mockArticles.filter(article => article.category === selectedCategory)
    : mockArticles;

  return (
    <div className="min-h-screen bg-background">
      <AppHeader onMenuClick={() => setIsMenuOpen(true)} />
      
      <CategoryMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main className="pb-safe">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="gradient-primary p-6 text-white">
            <div className="max-w-sm mx-auto text-center">
              <h2 className="text-2xl font-bold mb-2">
                Последние новости Microsoft
              </h2>
              <p className="text-white/90 text-sm">
                Будьте в курсе последних обновлений Windows, Xbox и Surface
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="p-4 pb-24">
          <div className="grid gap-4 max-w-md mx-auto">
            {filteredArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article}
                onClick={() => console.log('Navigate to article:', article.id)}
              />
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="p-4 pb-24 text-center">
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium transition-smooth hover:bg-accent">
            Загрузить ещё
          </button>
        </div>
      </main>

      <FloatingSearchButton />
    </div>
  );
};

export default Index;
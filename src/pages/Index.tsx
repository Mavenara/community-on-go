import { useState, useCallback } from "react";
import { AppHeader } from "@/components/AppHeader";
import { CategoryMenu } from "@/components/CategoryMenu";
import { ArticleCard } from "@/components/ArticleCard";
import { FloatingSearchButton } from "@/components/FloatingSearchButton";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { mockArticles, generateMoreArticles } from "@/data/articles";
import type { Article } from "@/components/ArticleCard";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const filteredArticles = selectedCategory 
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  const loadMoreArticles = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newArticles = generateMoreArticles(articles.length + 1, 6);
    setArticles(prev => [...prev, ...newArticles]);
    setPage(prev => prev + 1);
    
    // Stop loading more after 5 pages (30 articles total)
    if (page >= 5) {
      setHasMore(false);
    }
    
    setIsLoading(false);
  }, [articles.length, isLoading, hasMore, page]);

  const { loadingRef } = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMoreArticles,
    threshold: 200
  });

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
          
          {/* Infinite Scroll Trigger */}
          <div ref={loadingRef} className="h-4" />
          
          {/* Loading Indicator */}
          {isLoading && (
            <LoadingSpinner text="Загружаем ещё новости..." />
          )}
          
          {/* End of Content Message */}
          {!hasMore && !isLoading && (
            <div className="text-center py-8">
              <div className="text-muted-foreground text-sm">
                🎉 Вы просмотрели все новости!
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Проверьте позже, возможно появятся новые материалы
              </div>
            </div>
          )}
        </section>
      </main>

      <FloatingSearchButton />
    </div>
  );
};

export default Index;
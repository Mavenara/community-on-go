import { Clock, Eye, MessageCircle } from "lucide-react";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: 'windows' | 'xbox' | 'surface' | 'general';
  publishedAt: string;
  views: number;
  comments: number;
  readTime: string;
}

interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
}

const categoryLabels = {
  windows: 'Windows 11',
  xbox: 'Xbox',
  surface: 'Surface',
  general: 'Общее'
};

export const ArticleCard = ({ article, onClick }: ArticleCardProps) => {
  return (
    <article 
      className="article-card cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-48 object-cover transition-smooth hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={`category-badge category-${article.category}`}>
            {categoryLabels[article.category]}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h2 className="font-semibold text-lg leading-tight line-clamp-2 text-card-foreground">
          {article.title}
        </h2>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={12} />
              <span>{article.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={12} />
              <span>{article.comments}</span>
            </div>
          </div>
          <time>{article.publishedAt}</time>
        </div>
      </div>
    </article>
  );
};
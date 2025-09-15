import { Article } from "@/components/ArticleCard";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Анонс Windows 11 Build 22631.6713 и 26200.6713 (канал Release Preview)",
    excerpt: "Microsoft выпустила новые сборки Windows 11 для участников программы Windows Insider в канале Release Preview. Обновления включают исправления ошибок и улучшения стабильности.",
    imageUrl: "https://images.unsplash.com/photo-1633419461186-7d40cd858d7d?w=400&h=250&fit=crop",
    category: "windows",
    publishedAt: "12 сент. 2025",
    views: 255,
    comments: 12,
    readTime: "3 мин"
  },
  {
    id: "2", 
    title: "Анонс Windows 11 Insider Preview Build 26220.6682 (канал Dev)",
    excerpt: "Новая сборка Dev канала приносит экспериментальные функции и улучшения для разработчиков. Включены новые API и инструменты отладки.",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    category: "windows",
    publishedAt: "12 сент. 2025",
    views: 168,
    comments: 8,
    readTime: "4 мин"
  },
  {
    id: "3",
    title: "Microsoft выпустила официальные ISO-образы Windows 11 версии 25H2",
    excerpt: "Стали доступны официальные ISO-образы Windows 11 версии 25H2 для чистой установки операционной системы на новые устройства.",
    imageUrl: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=250&fit=crop",
    category: "windows",
    publishedAt: "11 сент. 2025",
    views: 1231,
    comments: 45,
    readTime: "2 мин"
  },
  {
    id: "4",
    title: "Новые игры в Xbox Game Pass в сентябре 2025",
    excerpt: "Microsoft объявила список новых игр, которые появятся в подписке Xbox Game Pass в этом месяце. Среди них несколько AAA проектов.",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop",
    category: "xbox",
    publishedAt: "10 сент. 2025",
    views: 892,
    comments: 67,
    readTime: "5 мин"
  },
  {
    id: "5",
    title: "Microsoft Store стал бесплатным для индивидуальных разработчиков",
    excerpt: "Microsoft убрала комиссию для индивидуальных разработчиков в Microsoft Store, сделав платформу более привлекательной для инди-разработчиков.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    category: "general",
    publishedAt: "10 сент. 2025",
    views: 207,
    comments: 18,
    readTime: "3 мин"
  },
  {
    id: "6",
    title: "Surface Pro 11 получил поддержку новых AI-функций",
    excerpt: "Microsoft расширила возможности искусственного интеллекта в Surface Pro 11, добавив новые функции для повышения продуктивности.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
    category: "surface", 
    publishedAt: "09 сент. 2025",
    views: 543,
    comments: 29,
    readTime: "4 мин"
  }
];

// Function to generate more articles for infinite scroll
export const generateMoreArticles = (startId: number, count: number = 6): Article[] => {
  const templates = [
    {
      title: "Новые функции Microsoft Edge {num}",
      excerpt: "Браузер Microsoft Edge получил очередное обновление с улучшенной производительностью и новыми возможностями для разработчиков.",
      category: "general" as const,
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop"
    },
    {
      title: "Обновление Xbox Game Pass {num}",
      excerpt: "В подписке Xbox Game Pass появились новые AAA-игры и инди-проекты. Список пополнился эксклюзивными новинками.",
      category: "xbox" as const,
      imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=250&fit=crop"
    },
    {
      title: "Windows 11 Build {num}.1000 - новая сборка",
      excerpt: "Microsoft выпустила очередную тестовую сборку Windows 11 с исправлениями ошибок и экспериментальными функциями.",
      category: "windows" as const,
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=250&fit=crop"
    },
    {
      title: "Surface Laptop {num} - обзор новинки",
      excerpt: "Подробный обзор нового устройства из линейки Surface с процессорами нового поколения и улучшенной автономностью.",
      category: "surface" as const,
      imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=250&fit=crop"
    },
    {
      title: "Microsoft 365 получил ИИ-функции {num}",
      excerpt: "Пакет офисных приложений Microsoft 365 расширил возможности искусственного интеллекта для повышения продуктивности.",
      category: "general" as const,
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      title: "Teams получил новые возможности {num}",
      excerpt: "Microsoft Teams обновился с новыми функциями для видеоконференций и совместной работы в гибридном режиме.",
      category: "general" as const,
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    }
  ];

  return Array.from({ length: count }, (_, index) => {
    const templateIndex = index % templates.length;
    const template = templates[templateIndex];
    const articleNumber = startId + index;
    
    return {
      id: articleNumber.toString(),
      title: template.title.replace('{num}', articleNumber.toString()),
      excerpt: template.excerpt,
      imageUrl: template.imageUrl,
      category: template.category,
      publishedAt: `${Math.floor(Math.random() * 10) + 1} сент. 2025`,
      views: Math.floor(Math.random() * 1000) + 50,
      comments: Math.floor(Math.random() * 50) + 1,
      readTime: `${Math.floor(Math.random() * 5) + 2} мин`
    };
  });
};
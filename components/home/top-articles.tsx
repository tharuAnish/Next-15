import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

// Define TypeScript types
interface Article {
  id: string
  title: string
  featuredImage: string
  category: string
  createdAt: Date
  author: {
    name: string
    imageUrl: string
  }
}

export async function TopArticles() {
  // Mock data for articles
  const articles: Article[] = [
    {
      id: "1",
      title: "Mastering React in 2024",
      featuredImage:
        "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200",
      category: "Programming",
      createdAt: new Date(),
      author: {
        name: "John Doe",
        imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    },
    {
      id: "2",
      title: "The Future of AI in Web Development",
      featuredImage:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200",
      category: "Technology",
      createdAt: new Date(),
      author: {
        name: "Jane Smith",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    },
    {
      id: "3",
      title: "Understanding the Basics of Cloud Computing",
      featuredImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
      category: "Cloud Computing",
      createdAt: new Date(),
      author: {
        name: "Alice Johnson",
        imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      },
    },
  ]

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 3).map((article) => (
        <Card
          key={article.id}
          className={cn(
            "group relative overflow-hidden transition-all hover:scale-[1.02]",
            "border border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          )}
        >
          <div className="p-6">
            <Link href={`/articles/${article.id}`}>
              {/* Image Container */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                <Image
                  src={article.featuredImage as string}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback>
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{article.author.name}</span>
              </div>

              {/* Article Title */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {article.category}
              </p>

              {/* Article Meta Info */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(article.createdAt).toDateString()}</span>
                <span>{12} min read</span>
              </div>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}

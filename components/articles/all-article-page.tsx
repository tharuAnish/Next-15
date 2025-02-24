import Image from "next/image"
import React from "react"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

// Mock articles data
const articles = [
  {
    id: "1",
    featuredImage:
      "https://images.unsplash.com/photo-1738471743329-b50393cf6319?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    title: "Exploring the Great Outdoors",
    category: "Nature",
    author: {
      name: "Emily Stone",
      imageUrl: "https://source.unsplash.com/random/100x100?woman",
    },
    createdAt: new Date("2025-01-15"),
  },
  {
    id: "2",
    featuredImage:
      "https://images.unsplash.com/photo-1727467082310-095b43d11449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    title: "City Life: A Journey",
    category: "Urban",
    author: {
      name: "Michael Green",
      imageUrl: "https://source.unsplash.com/random/100x100?man",
    },
    createdAt: new Date("2025-01-20"),
  },
  {
    id: "3",
    featuredImage:
      "https://images.unsplash.com/photo-1727467082310-095b43d11449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    title: "The Future of Technology",
    category: "Technology",
    author: {
      name: "Sarah Lee",
      imageUrl: "https://source.unsplash.com/random/100x100?tech",
    },
    createdAt: new Date("2025-01-25"),
  },
  {
    id: "4",
    featuredImage:
      "https://images.unsplash.com/photo-1739057736231-3577bfc1a1b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    title: "A Culinary Adventure",
    category: "Food",
    author: {
      name: "David Kim",
      imageUrl: "https://source.unsplash.com/random/100x100?chef",
    },
    createdAt: new Date("2025-02-05"),
  },
  {
    id: "5",
    featuredImage:
      "https://images.unsplash.com/photo-1738249034651-1896f689be58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    title: "Exploring Modern Art",
    category: "Art",
    author: {
      name: "Sophia Turner",
      imageUrl: "https://source.unsplash.com/random/100x100?artist",
    },
    createdAt: new Date("2025-02-12"),
  },
]

const AllArticlePage = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card
          key={article.id}
          className="group relative overflow-hidden transition-all hover:shadow-lg"
        >
          <div className="p-6">
            {/* Image Container */}
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={article.featuredImage as string}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Article Content */}
            <h3 className="text-xl font-semibold text-foreground">
              {article.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{article.category}</p>

            {/* Author & Metadata */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback>{article.author.name}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">
                  {article.author.name}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {article.createdAt.toDateString()}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default AllArticlePage

import AllArticlePage from "@/components/articles/all-article-page"
import ArticleSearchInput from "@/components/articles/article-search-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

type SearchPageProps = {
  searchParams: { search?: string; page?: string }
}

const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Articles
          </h1>
          {/* Search Bar */}
          <ArticleSearchInput />
        </div>

        {/* All Article Pages */}
        <AllArticlePage />

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          {/* Prev Button */}

          <Button variant="ghost">← Prev</Button>

          {/* Page Numbers */}

          <Button variant="ghost">1</Button>

          {/* Next Button */}

          <Button variant="ghost" size="sm">
            Next →
          </Button>
        </div>
      </main>
    </div>
  )
}
export default page

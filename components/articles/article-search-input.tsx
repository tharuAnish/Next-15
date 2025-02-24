import React from "react"
import { Input } from "../ui/input"
import { Search } from "lucide-react"

const ArticleSearchInput = () => {
  return (
    <form className="mx-auto max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          name="search"
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-6 text-lg"
        />
      </div>
    </form>
  )
}

export default ArticleSearchInput

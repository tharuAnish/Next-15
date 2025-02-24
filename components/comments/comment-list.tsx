import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const CommentList = () => {
  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://images.unsplash.com/photo-1739057736231-3577bfc1a1b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
          <AvatarFallback>Jon Doe</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="mb-2">
            <span className="font-medium text-foreground">Jon Doe</span>
            <span className="text-sm text-muted-foreground ml-2">
              21 Sep 2025
            </span>
          </div>
          <p className="text-muted-foreground">
            Nice article you should be awarded.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommentList

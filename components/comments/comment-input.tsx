"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type CommentFormProps = {
  articleId: string
}
const CommentInput: React.FC<CommentFormProps> = () => {
  return (
    <form className="mb-8">
      <div className="flex gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/current-user-avatar.jpg" />
          <AvatarFallback>Y</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Input
            placeholder="Add a comment..."
            name="body"
            className="py-6 text-base"
          />
          {/* {formState.errors.body && <p className="text-red-600 text-sm font-medium">{formState.errors.body}</p>} */}
          <div className="mt-4 flex justify-end">
            <Button type="submit">
              {/* {isPending ? "Loading..." : "Post Comment"} */}
              Post Comment
            </Button>
          </div>
          {/* {
            formState.errors.formErrors && <div className="p-2 border border-red-600 bg-red-100 ">{formState.errors.formErrors[0]}</div>
          } */}
        </div>
      </div>
    </form>
  )
}

export default CommentInput

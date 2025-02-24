"use server"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { v2 as cloudinary, UploadApiResponse } from "cloudinary"
import { prisma } from "@/lib/prisma"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const createArticleSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
})

type CreateArticleFormState = {
  errors: {
    title?: string[]
    category?: string[]
    featuredImage?: string[]
    content?: string[]
    formErrors?: string[]
  }
}

export const CreateArticle = async (
  prevState: CreateArticleFormState,
  formData: FormData
): Promise<CreateArticleFormState> => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  // ✅ Fix: Get Clerk User ID and check authentication
  const { userId } = await auth()
  if (!userId) {
    return {
      errors: {
        formErrors: ["You have to login first"],
      },
    }
  }

  // ✅ Fix: Find the actual user using `clerkUserId` and get their `id`
  const existingUser = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  })

  // start creating article
  // ✅ Fix: Handle image upload properly
  const imageFile = formData.get("featuredImage") as File | null
  if (!imageFile || imageFile?.name === "undefined") {
    return {
      errors: {
        featuredImage: ["Image file is required."],
      },
    }
  }
  const arrayBuffer = await imageFile.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const uploadResponse: UploadApiResponse | undefined = await new Promise(
    (resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" }, // ✅ Fix: Ensure correct file type handling
        (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        }
      )
      uploadStream.end(buffer)
    }
  )

  const imageUrl = uploadResponse?.secure_url

  if (!imageUrl) {
    return {
      errors: {
        featuredImage: ["Failed to upload image. Please try again."],
      },
    }
  }

  try {
    // ✅ Fix: Use `existingUser.id` instead of `userId` (which is `clerkUserId`)
    await prisma.articles.create({
      data: {
        title: result.data.title,
        category: result.data.category,
        content: result.data.content,
        featuredImage: imageUrl,
        authorId: existingUser.id, // ✅ Correct Foreign Key Usage
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          formErrors: [error.message],
        },
      }
    } else {
      return {
        errors: {
          formErrors: ["Some internal server error occurred."],
        },
      }
    }
  }

  revalidatePath("/dashboard")
  redirect("/dashboard")
}

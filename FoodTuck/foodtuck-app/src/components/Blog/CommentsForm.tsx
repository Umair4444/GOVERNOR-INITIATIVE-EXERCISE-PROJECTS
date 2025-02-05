"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaStar } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the form schema
const formSchema = z.object({
  username: z.string().default("anonymous"),
  profession: z.string().default("unknown"),
  comment: z.string().min(5, "Comment must be at least 5 characters."),
  rating: z.number().min(1, "Rating must be between 1 and 5."),
  avatar: z.string().optional(),
});

export function CommentForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Anonymous",
      profession: "Unknown",
      comment: "",
      rating: 1,
      avatar: "",
    },
  });

  const router = useRouter();
  const [selectedRating, setSelectedRating] = useState(1); // Set default rating to 1
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Upload image to Cloudinary
  const uploadToCloudinary = async (file: File) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      console.error("❌ Cloudinary environment variables are missing!");
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("cloud", data);
      if (data.secure_url) {
        return data.secure_url;
      } else {
        console.error("❌ Cloudinary upload failed:", data);
        return null;
      }
    } catch (error) {
      console.error("❌ Upload error:", error);
      return null;
    }
  };

  // Handle avatar file input
  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAvatarPreview(URL.createObjectURL(file));
    const imageUrl = await uploadToCloudinary(file);
    if (imageUrl) {
      form.setValue("avatar", imageUrl);
    }
    event.target.value = ""; // Reset the file input
  };

  // Handle form submission

  const onSubmit = async (data: any) => {
    setIsSubmitting(true); // Start loading

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(data);

      router.refresh(); // Refresh to fetch the new comment list
      const responseData = await response.json(); // Parse the response

      if (response.ok) {
        // Handle successful submission
        form.reset(); // Reset the form fields
        setAvatarPreview(null); // Clear the avatar preview
        setSelectedRating(1); // Reset the rating
        console.log("✅ Submission successful:", responseData);
      } else {
        // Handle submission failure
        console.error("❌ Submission failed:", responseData);
        alert(`Submission failed: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("❌ Submission error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop loading
      router.refresh(); // Refresh to fetch tshe new comment list
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 p-5 border rounded-lg shadow-md"
        >
          {/* Avatar Upload */}
          <div className="flex justify-center">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white">No Avatar</span>
              </div>
            )}
          </div>

          <FormField
            control={form.control}
            name="avatar"
            render={() => (
              <FormItem>
                <FormLabel>Upload Avatar</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className="text-black font-semibold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Profession */}
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Profession"
                    {...field}
                    className="text-black font-semibold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Comment */}
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Comment</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your comment here..."
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rating */}
          <FormItem>
            <FormLabel>Rate Us</FormLabel>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-xl ${selectedRating >= star ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => {
                    setSelectedRating(star);
                    form.setValue("rating", star);
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-2/6 ${isSubmitting ? "bg-gray-400" : "bg-yellow-500 hover:scale-95"} transition duration-300 text-white font-semibold py-2 rounded-md`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </Form>
    </>
  );
}

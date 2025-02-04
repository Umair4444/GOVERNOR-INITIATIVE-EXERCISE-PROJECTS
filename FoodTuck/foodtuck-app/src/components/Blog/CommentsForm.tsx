import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaFacebook, FaTwitter, FaWhatsapp, FaStar } from "react-icons/fa";
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
import { useState } from "react";
import Link from "next/link";

// Define the form schema
const formSchema = z.object({
  username: z.string().default("anonymous"),
  profession: z.string().default("anonymous"),
  comment: z.string().min(5, "Comment must be at least 5 characters."),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5."),
  avatar: z.instanceof(File, { message: "Please upload a valid image file." }).optional(), // Use z.instanceof for File validation
});

export function CommentForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      profession: "",
      comment: "",
      rating: 0,
      avatar: undefined, // Initialize as undefined
    },
  });

  const [selectedRating, setSelectedRating] = useState(0);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    console.log("data", data);
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("profession", data.profession);
      formData.append("comment", data.comment);
      formData.append("rating", data.rating.toString());

      if (data.avatar) {
        formData.append("avatar", data.avatar);
      }

      const response = await fetch("/api/comments", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();
      console.log("res", res);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  // Handle avatar file input
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file : any = event.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      form.setValue("avatar", file); // Set the file directly
    } else {
      setAvatarPreview(null);
      form.setValue("avatar", undefined); // Reset to undefined if no file is selected
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 p-5 border rounded-lg shadow-md"
      >
        {/* Avatar */}
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
          render={({ field }) => (
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
            className="w-2/6 bg-yellow-500 hover:scale-95 transition duration-300 text-white font-semibold py-2 rounded-md"
          >
            Submit
          </button>
        </div>

        {/* Social Share */}
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-600 hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-400 hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="https://wa.me/?text=Check%20this%20out!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl text-green-500 hover:scale-110 transition-transform" />
          </Link>
        </div>
      </form>
    </Form>
  );
}
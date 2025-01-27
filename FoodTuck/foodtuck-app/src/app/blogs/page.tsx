"use client";
import Reviewer from "@/components/Blog/Reviewer";
import RecentPost from "@/components/Blog/RecentPost";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/Redux-toolkit/store";
import { fetchBlogs } from "@/app/Redux-toolkit/feature/BlogSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IBlog } from "../utils/Types";

const BlogList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector(
    (state: RootState) => state.blogs
  );
  const router = useRouter();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  if (status === "loading")
    return <p className="text-center">Loading blogs...</p>;
  if (status === "failed")
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6">
      {/* Main Blog List */}
      <div className="flex-1">
        {blogs.map((res: IBlog) => (
          <div key={res.id} className="bg-white shadow-lg rounded-lg mb-8">
            <div className="flex flex-col md:flex-row">
              {/* Blog Image */}
              <div className="md:w-1/3">
                <Link href={`/blogs/${res.slug}`}>
                  <Image
                    src={res.image}
                    alt={res.title || "Blog image"}
                    className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
              {/* Blog Content */}
              <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm text-gray-500 mb-2">
                    {res.createdAt.slice(0, 10)} • {res.category}
                  </h2>
                  <h2>{}</h2>
                  <h1 className="text-xl font-bold text-gray-800">
                    {res.title}
                  </h1>
                  <p className="text-gray-600 mt-2">{res.summary}</p>
                </div>
                <div className="mt-4 text-black bg-yellow-500 rounded-lg w-fit px-6 py-2">
                  <button onClick={() => router.push(`/blogs/${res.slug}`)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <div className="my-3 py-4 bg-white text-black">
          <Reviewer />
        </div>
        <div className="bg-white text-black py-4">
          <RecentPost />
        </div>
      </div>
    </div>
  );
};

export default BlogList;

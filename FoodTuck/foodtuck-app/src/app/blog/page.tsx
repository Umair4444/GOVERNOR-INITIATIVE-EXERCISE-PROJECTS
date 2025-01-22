// import MyButton from "@/components/ui/myButton";
// import Image from "next/image";
// import React from "react";
// import img from "@/assets/dish/land (2).jpg";
// import ReviewCard from "@/components/Menu/ReviewCard";
// import Reviewer from "@/components/Blog/Reviewer";
// import RecentPost from "@/components/Blog/RecentPost";

// const page = () => {
//   return (
//     <div className="bg-white text-black flex py-10">
//       <div className="w-5/6 flex flex-col justify-center items-start ">
//         <div className="w-4/6 px-32 ">
//           <Image
//             src={img}
//             alt="img"
//             className="w-full"
//             width={500}
//             height={500}
//           />
//         </div>
//         <div className="flex flex-col justify-center items-center w-4/6 gap-4 mt-2">
//           <div className="flex flex-col items-start w-4/6 border-4">
//             <h2>
//               date <span> comments count</span>
//             </h2>
//             <h1>posted by</h1>
//           </div>
//           <div>
//             <h1 className="text-lg font-bold">My heading for the post</h1>
//           </div>
//           <p className="w-2/3">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//             velit doloremque incidunt excepturi neque corporis placeat quaerat
//             rerum temporibus at.
//           </p>
//           <MyButton title="Read More" />
//         </div>
//       </div>

//       <div className="w-1/6">
//         <Reviewer />
//         <RecentPost />
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/Redux-toolkit/store";
import { fetchBlogs } from "@/app/Redux-toolkit/feature/BlogSlice";
import Image from "next/image";

const BlogList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector(
    (state: RootState) => state.blogs
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading blogs...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2">
      {blogs.map((blog) => (
        <div key={blog.id} className="">
          <Image src={blog.image} alt={blog.title} width={500} height={300} />
          <h2>{blog.title}</h2>
          <p>{blog.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

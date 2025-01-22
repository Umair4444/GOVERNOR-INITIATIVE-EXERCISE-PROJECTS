"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import MyButton from "./ui/myButton";
import SideLogoBar from "./ui/side-logo-bar";

export function CarouselDemo() {
  // const query = `*[_type == "hero"]{
  //   _id, content, preheading, heading, poster
  // }`;

  // const data = await client.fetch(query);

  // if (!data || data.length === 0) {
  //   return (
  //     <div className="text-center">No items to display in the carousel.</div>
  //   );
  // }

  const [data, setData] = useState<any[]>([]);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "hero"]{
        _id, content, preheading, heading, poster
      }`;
      const result = await client.fetch(query);
      setData(result || []);
    };

    fetchData();
  }, []);

  if (!data || data.length === 0) {
    return (
      <div className="text-center">No items to display in the carousel.</div>
    );
  }

  return (
    <>
      {/*Main PAge Hero Component section */}
      <div className="flex mt-20 h-[90%]">
        <div className=" hidden md:block  mt-10">
          <SideLogoBar />
        </div>

        <Carousel
          className="w-full"
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent className=" h-screen">
            {data.map((item: any) => (
              <CarouselItem key={item._id}>
                <div className="border-none h-screen">
                  <Card className="border-none h-1/2">
                    <CardContent className="flex items-center justify-center p-6 text-white bg-black">
                      <div className="flex md:flex-row sm:flex-col-reverse md:justify-between items-center md:items-start gap-4">
                        <div className="w-full md:w-5/12 text-center flex flex-col gap-4 items-center justify-center mb-5 md:mb-0 md:mt-12 lg:mt-16 xl:mt-20">
                          <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl text-left w-full">
                            {item.preheading}
                          </h3>
                          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center md:text-left font-bold lg:mb-5">
                            <span className="text-[#FF9F0D]">
                              {item.heading.slice(0, 3)}
                            </span>
                            {item.heading.slice(3)}
                          </h1>
                          <p className="text-[16px] text-left font-normal">
                            {item.content}
                          </p>
                          <div className="flex justify-start w-full mt-5">
                            <MyButton
                              title="See Menu"
                              width="w-72 md:w-fit"
                              xpadding="px-8 md:px-12"
                              ypadding="py-2 md:py-4"
                              rounded="rounded-xl md:rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-full md:w-8/12">
                          <Image
                            src={urlFor(item.poster).url()}
                            width={1000}
                            height={1000}
                            alt={item.heading || "Hero Image"}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black mx-3 text-yellow-500" />
          <CarouselNext className="bg-black mx-3 text-yellow-500" />
        </Carousel>
      </div>
    </>
  );
}

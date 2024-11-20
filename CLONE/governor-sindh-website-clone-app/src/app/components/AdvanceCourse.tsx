import React from "react";
import Image from "next/image";

const AdvancedCourse = () => {
    return (
        <div className="flex flex-col ml-28 my-12 ">
            <h1 className="text-4xl font-extrabold text-sky-900 my-8  ">Advanced Courses</h1>
            <div className="flex flex-wrap items-center gap-10 w-full tablet:flex-row phone:flex-col">

                <div className=" flex flex-col items-center shadow-2xl rounded-lg w-[20%] tablet:w-[40%]  phone:w-[80%]  ">
                    <Image src={"/15.jpg"} alt="core course" width={300} height={300} className="w-full " ></Image>
                    <h2 className="text-center text-lg font-bold text-gray-600 p-5">Artificial Intelligence</h2>
                </div>
                <div className="shadow-2xl rounded-lg w-[20%] tablet:w-[40%] phone:w-[80%] ">
                    <Image src={"/16.jpg"} alt="core course" width={300} height={300} className=" w-full " ></Image>
                    <h2 className="text-center text-lg font-bold p-3 text-gray-600">Web 3 and Metaverse</h2>
                </div>
                <div className="shadow-2xl rounded-lg w-[20%] tablet:w-[40%] phone:w-[80%] ">
                    <Image src={"/18.jpg"} alt="core course" width={300} height={300} className=" w-full " ></Image>
                    <h2 className="text-center text-lg font-bold p-3 text-gray-600">Cloud-Native Computing</h2>
                </div>
                <div className="shadow-2xl rounded-lg w-[20%] tablet:w-[40%] phone:w-[80%] ">
                    <Image src={"/19.jpg"} alt="core course" width={300} height={300} className=" w-full " ></Image>
                    <h2 className="text-center text-lg font-bold p-3 text-gray-600">Ambient Computing and IoT</h2>
                </div>
            <div className="shadow-2xl rounded-lg flex flex-col w-[20%] tablet:w-[40%] phone:w-[80%]   ">
                <Image src={"/21.jpg"} alt="core course" width={300} height={300} className="w-full" ></Image>
                <h2 className="text-center text-lg font-bold p-3 text-gray-600 ">Network Programmability and Automation</h2>
            </div>
            <div className="shadow-2xl rounded-lg w-[20%] tablet:w-[40%] phone:w-[80%] ">
                <Image src={"/20.jpg"} alt="core course" width={300} height={300} className=" w-full " ></Image>
                <h2 className="text-center text-lg font-bold p-3 text-gray-600">Genomics and Bioinformatics</h2>
            </div>
            </div>
        </div>
    );
};

export default AdvancedCourse;

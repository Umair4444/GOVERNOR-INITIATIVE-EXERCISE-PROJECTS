import React from "react";
import Image from "next/image";
import Timelogo from "@/app/assets/ClockClockwise.png";
import post1 from "@/app/assets/psot1.png";
import post2 from "@/app/assets/post2.png";
import post3 from "@/app/assets/post3.png";
import Facebook from "@/app/assets/logo/FacebookLogo.png";
import Twitter from "@/app/assets/logo/TwitterLogo.png";
import Instagram from "@/app/assets/logo/InstagramLogo.png";
import Youtube from "@/app/assets/logo/YoutubeLogo.png";
import Pintrest from "@/app/assets/logo/PinterestLogo.png";
import Supportbar from "./Supportbar";

const Footer = () => {
  return (
    <div className="w-full min-h-full mt-20">
      <div className="flex flex-col gap-8 ">
        <Supportbar/>
        <div className="flex items-start justify-evenly ">
          <div className=" flex flex-col gap-8 ">
            <h5 className="font-bold text-2xl">About Us.</h5>
            <p className="w-[312px] h-[95px] text-[16px]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex gap-4 w-full">
              <div className="bg-[#FF9F0D] w-fit flex px-3  items-center justify-center">
                <Image src={Timelogo} alt="timelogo" />
              </div>
              <div className="text-[14px] font-normal">
                <h5>Opening Hours</h5>
                <h5>Mon - Sat(8.00 - 6.00)</h5>
                <h5>Sunday - Closed</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold text-2xl">Useful Links</h5>
            <ul className="text-lg font-normal flex flex-col gap-6">
              <li>About</li>
              <li>News</li>
              <li>Partner</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold text-2xl">Help?</h5>
            <ul className="text-lg font-normal flex flex-col gap-6">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold text-2xl">Recent Posts</h5>
            <div className="flex gap-2 ">
              <div>
                <Image src={post1} alt="post" />
              </div>
              <div className="flex flex-col">
                <h6>20-Feb-2022</h6>
                <h4>Keep Your Business</h4>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div>
                <Image src={post2} alt="post" />
              </div>
              <div className="flex flex-col">
                <h6>20-Feb-2022</h6>
                <h4>Keep Your Business</h4>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div>
                <Image src={post3} alt="post" />
              </div>
              <div className="flex flex-col">
                <h6>20-Feb-2022</h6>
                <h4>Keep Your Business</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[99px] bg-[#4F4F4F] flex items-center justify-between px-10">
          <div className="">
            <p>Copyright © 2022 by Umair GIAIC. All Rights Reserved.</p>
          </div>
          <div className="flex gap-5 items-center cursor-pointer">
            <div className="bg-white p-2 ">
              <Image
                src={Facebook}
                alt="logo"
                className="hover:bg-orange-400 rounded-full "
              />
            </div>
            <div className="bg-white p-2">
              <Image
                src={Twitter}
                alt="logo"
                className="hover:bg-orange-400 rounded-full  "
              />
            </div>
            <div className="bg-white p-2">
              <Image
                src={Instagram}
                alt="logo"
                className="hover:bg-orange-400 rounded-full  "
              />
            </div>
            <div className="bg-white p-2">
              <Image
                src={Youtube}
                alt="logo"
                className="hover:bg-orange-400 rounded-full  "
              />
            </div>
            <div className="bg-white p-2">
              <Image
                src={Pintrest}
                alt="logo"
                className="hover:bg-orange-400 rounded-full  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

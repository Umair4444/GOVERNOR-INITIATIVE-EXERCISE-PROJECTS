"use client"
import React, { useState } from "react";

const SignupPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cf, setCf] = useState("")
    const [restaurant, setRestaurant] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [gender, setGender] = useState("")

    const handleSignUp = () => {
        console.log(name,email,password,cf,restaurant,address,phoneNumber,gender)
    }
    return (
        <>

            <div className="flex flex-col items-center ">
                <div className="my-6">
                    <h1>SignupPage</h1>
                </div>

                <div className="grid grid-cols-2 gap-4 xsm:grid-cols-1 xsm:w-2/3 xsm:text-xl sm:grid-cols-1 sm:h-[100%] ">
                    <input className="inputbox" type="text" placeholder="Enter Your UserName" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input className="inputbox" type="text" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <input className="inputbox" type="password" placeholder="Enter Your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <input className="inputbox" type="password" placeholder="Enter Confirm Password" value={cf} onChange={(e)=> setCf(e.target.value)} />
                    <input className="inputbox" type="text" placeholder="Enter Your Restraurant Name" value={restaurant} onChange={(e)=> setRestaurant(e.target.value)} />
                    <input className="inputbox" type="text" placeholder="Enter Your Address" value={address} onChange={(e)=> setAddress(e.target.value)} />
                    <input className="inputbox" type="tel" placeholder="Enter Your Phone Number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
                    <input className="inputbox" type="date" />

                    <div className="inputbox grid grid-cols-3  font-bold xsm:text-[12px] xsm:m-0">Gender:
                        <div> <input className="" type="radio" id="gender" name="gender" value={gender} onChange={(e)=> setGender(e.target.value)} /> Male </div>
                        <div> <input className="" type="radio" id="gender" name="gender" value={gender} onChange={(e)=> setGender(e.target.value)} /> Female </div>
                    </div>

                    <div className="font-bold inputbox flex flex-row gap-5 items-center justify-stretch xsm:text-sm" >
                        <label className="px-3 xsm:p-1 xsm:text-sm " htmlFor="location">Choose Your Country:</label>
                        <select id="location" name="location" className="inputbox w-[20rem] bg-slate-400 xsm:text-sm">
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                </div>
                <button className="btn items-center justify-center mt-5" onClick={handleSignUp}>SignUp Now!!</button>
            </div>
        </>
    );
};

export default SignupPage;

import React from "react";
import Button from "./Button";

const CheckOutForm = () => {
  return (
    <div className="bg-white text-black my-20 mx-2">
      <div className="">
        <h1 className="font-bold text-xl mb-5">Shipping Address</h1>

        <form action="" className="grid grid-cols-2 mx-4 gap-5">
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">First Name</legend>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Last Name</legend>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">E-mail Address</legend>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Phone Number</legend>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Company</legend>
            <input
              type="text"
              name="company"
              id="company"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Country</legend>
            <select
              name="city"
              id="city"
              className="border-2 py-2 px-2 w-full "
            >
              <option value="select Country" disabled>
                Choose Your Country
              </option>
              <option value="Pakistan">Pakistan</option>
              <option value="United States Of America">
                United States Of America
              </option>
              <option value="Turkey">Turkey</option>
              <option value="China">China</option>
            </select>
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">City</legend>
            <select name="city" id="city" className="border-2 py-2 px-2 w-full">
              <option value="select city" disabled>
                Choose Your City
              </option>
              <optgroup>
                <option value="Pakistan" disabled>
                  Pakistan
                </option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Peashawar">Peshawar</option>
              </optgroup>
              <optgroup>
                <option value="United States of America" disabled>
                  USA
                </option>
                <option value="newyork">NewYork</option>
                <option value="chicago">Chicago</option>
                <option value="washingtonDC">WashingtonDC</option>
              </optgroup>
            </select>
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Zip Code</legend>
            <input
              type="text"
              name="zip code"
              id="zip code"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Address 1</legend>
            <input
              type="text"
              name="address 1"
              id="address 1"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[16px] font-normal">
            <legend className="mb-1">Address 2</legend>
            <input
              type="text"
              name="address 2"
              id="address 2"
              className="border-2 py-2 px-4 w-full"
            />
          </fieldset>
          <fieldset className="text-[20px] font-bold flex items-center col-span-2">
            <legend className="mb-1">Billing Address</legend>
            <input
              type="checkbox"
              name="billing address"
              id="billing address"
              className="border-2 py-2 px-4 w-5 h-5 p-4 mr-2"
            />
            <label htmlFor="" className="text-[14px] font-normal">
              Same as shipping address
            </label>
          </fieldset>
          <Button
            title="< Back to Cart"
            xpadding="10"
            ypadding="2"
            width="full"
            bgColor="bg-white"
            textColor = "black"
            border = "2"
          />
          <Button
            title="Proceed to shipping >"
            xpadding="10"
            ypadding="2"
            width="full"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;

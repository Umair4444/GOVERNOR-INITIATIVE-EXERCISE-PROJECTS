"use client";
import React from "react";
import LoginCard from "../components/LoginCard";
import TopCard from "../components/TopCard";

const loginPage = () => {
  return (
    <div>
      <TopCard title="Login Page" />
      <LoginCard />
    </div>
  );
};

export default loginPage;

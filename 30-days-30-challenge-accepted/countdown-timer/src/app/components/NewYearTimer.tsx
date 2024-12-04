"use client";
import React, { useState, useEffect } from "react";

interface NewYearTimerProps {
  targetDate: string; // Target date in ISO string format
}

const NewYearTimer: React.FC<NewYearTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return "";
    }
  };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof calculateTimeLeft
  > | null>(null);
  
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [hydrated, targetDate]);

  if (!timeLeft) {
    return <div className="text-red-500 text-xl">Time's up!</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
        Countdown to New Year
      </h1>
      <div className="flex justify-center items-center space-x-4 text-center text-lg font-medium">
        <div>
          <span className="block text-4xl font-bold">{timeLeft.days}</span>
          <span className="text-gray-500">Days</span>
        </div>
        <div>
          <span className="block text-4xl font-bold">{timeLeft.hours}</span>
          <span className="text-gray-500">Hours</span>
        </div>
        <div>
          <span className="block text-4xl font-bold">{timeLeft.minutes}</span>
          <span className="text-gray-500">Minutes</span>
        </div>
        <div>
          <span className="block text-4xl font-bold">{timeLeft.seconds}</span>
          <span className="text-gray-500">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default NewYearTimer;

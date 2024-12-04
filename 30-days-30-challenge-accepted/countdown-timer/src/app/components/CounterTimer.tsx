"use client";
import React, { ChangeEvent } from "react";
import { useState, useRef, useEffect } from "react";

const CounterTimer = () => {
  const [duration, setDuration] = useState<number | string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef(null);

  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true); // Set the timer as active
      setIsPaused(false); // Unpause the timer if it was paused
    }
  };

  // Function to pause the countdown timer
  const handlePause = (): void => {
    if (isActive) {
      setIsPaused(true); // Set the timer as paused
      setIsActive(false); // Set the timer as inactive
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Function to reset the countdown timer
  const handleReset = (): void => {
    setIsActive(false); // Set the timer as inactive
    setIsPaused(false); // Set the timer as not paused
    setTimeLeft(typeof duration === "number" ? duration : 0); // Reset the timer to the original duration
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // useEffect hook to manage the countdown interval
  useEffect(() => {
    // If the timer is active and not paused
    if (isActive && !isPaused) {
      // Set an interval to decrease the time left
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          // If time is up, clear the interval
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          // Decrease the time left by one second
          return prevTime - 1;
        });
      }, 1000); // Interval of 1 second
    }
    // Cleanup function to clear the interval
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]); // Dependencies array to rerun the effect

  // Function to format the time left into mm:ss format
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60); // Calculate minutes
    const seconds = time % 60; // Calculate seconds
    // Return the formatted string
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2, "0")}`;
  };

  // Function to handle changes in the duration input field
  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || ""); // Update the duration state
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
        CountDown Timer
      </h1>
      <div>
        <input
          type="number"
          id="timer"
          value={duration}
          onChange={handleDurationChange}
          placeholder="Enter Your Seconds"
          className="p-3 outline rounded-lg"
        />
        <button
          onClick={handleSetDuration}
          className="ml-5 w-28  p-1 text-lg  rounded-lg border-2 shadow-lg hover:translate-y-0.5"
        >
          Set Time
        </button>
      </div>
      <div className="text-center text-6xl my-5 font-bold">
        {formatTime(timeLeft)}
      </div>
      <div>
        <button
          onClick={handleStart}
          className="ml-5 w-24  p-1 text-lg  rounded-lg border-2 shadow-lg hover:translate-y-0.5"
        >
          {isPaused ? "Resume" : "Start"}
        </button>
        <button
          onClick={handlePause}
          className="ml-5 w-24  p-1 text-lg  rounded-lg border-2 shadow-lg hover:translate-y-0.5"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="ml-5 w-24  p-1 text-lg  rounded-lg border-2 shadow-lg hover:translate-y-0.5"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterTimer;

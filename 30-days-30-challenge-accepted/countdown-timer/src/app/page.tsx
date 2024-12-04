import React from "react";
import NewYearTimer from "./components/NewYearTimer";
import CounterTimer from "./components/CounterTimer";

const Home: React.FC = () => {
  const targetDate = "2024-12-31T23:59:59";

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
    
        {/* <NewYearTimer targetDate={targetDate} /> */}
        <CounterTimer />
      </div>
    </main>
  );
};

export default Home;

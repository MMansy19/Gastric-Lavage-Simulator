'use client'
import React, { useState, useEffect } from 'react';

const WaterProgressBar = ({ data }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check if data is an empty array
    if (data.length === 0) {
      return;
    }

    const totalDuration = 17000; // Total duration in milliseconds
    const steps = 100; // Total number of steps (percentages)
    const interval = totalDuration / steps;

    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 1;
        if (newPercent === 100) {
          clearInterval(timer);
        }
        return newPercent;
      });
    }, interval);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [data]); // Include data in the dependency array

  return (
    <div className="box h-80 w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 rounded-full overflow-hidden">
      <div className="percent absolute left-0 top-0 z-3 w-full h-full flex items-center justify-center text-white text-4xl">
        <div className="percentNum" id="count">
          {percent}
        </div>
        <div className="percentB">%</div>
      </div>
      <div
        id="water"
        className="water absolute left-0 top-0 z-2 w-full h-full transform translate-y-full bg-blue-500 transition-all duration-300"
        style={{ transform: `translate(0, ${100 - percent}%)` }}
      >
        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
          <use xlinkHref="#wave"></use>
        </svg>
      </div>
    </div>
  );
};

export default WaterProgressBar;

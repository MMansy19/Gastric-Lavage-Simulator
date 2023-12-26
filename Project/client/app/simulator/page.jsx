"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import WaterProgressBar from "@/components/WaterProgressBar";
import WaterWave from "@/components/WaterWave";
import Man from "@/components/Man";
import WaterFlow from "@/components/WaterFlow";
import Stats from "@/components/Stats";


export default function Simulator() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/arduino");
        const result = await response.json();

        setData(result.arduino_data?result.arduino_data:[]);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Check console for details.");
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 500); // Fetch data every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <div className="absolute w-full">
        <Stats data={data} />
      </div>

      <main className="flex flex-row justify-center">
        <div className="min-h-screen -mx-[500px] flex items-center justify-center">
          <Man />
          <div className="relative right-[20rem]">
            <WaterFlow rotationSpeed={data.length !== 0 ? data[1] : 0} />
          </div>
          {/* <div className="relative w-[600px] right-[-150px]">
          </div> */}
        </div>
        <div>
          <WaterWave />
          <WaterProgressBar data={data} />
        </div>
      </main>
    </div>
  );
}

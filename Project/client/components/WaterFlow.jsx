import React from "react";
import Image from "next/image";
import waterFlow from "../images/waterFlow.png";
import Wheel from "../images/Wheel.png";
import styles from '@/styles/waterFlow.module.css';

function WaterFlow({ rotationSpeed }) {
  const wheelStyle = {
    "--rotation-speed": `${3/rotationSpeed ?? 0}s`, // Default speed: 3s
  };

  return (
    <div className="mx-1">
      <Image src={waterFlow} width={1000} height={750} />
      <div className="absolute top-[200px] right-[41%]">
        <Image
          className={styles.customSpin}
          src={Wheel}
          width={240}
          height={230}
          style={wheelStyle}
        />
      </div>
    </div>
  );
}

export default WaterFlow;

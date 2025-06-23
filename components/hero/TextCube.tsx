"use client";

import { useEffect, useState } from "react";
import { TextCubeProps } from "@/types/TextCubeProps.type";

export default function TextCube({ data, gradients }: TextCubeProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 120);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-full lg:w-[405px] lg:h-[80px] h-[40px] perspective align-middle">
      <div
        className="relative w-full h-full"
        style={{
          transform: `rotateX(${rotation}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 2s ease-in-out",
        }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="absolute w-full h-full flex items-center justify-center text-[28px] lg:text-[62px] leading-tight"
            style={{
              transform: `rotateX(${i * 120}deg) translateZ(35px)`,
              backfaceVisibility: "hidden",
              backgroundImage: gradients,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </span>
  );
}

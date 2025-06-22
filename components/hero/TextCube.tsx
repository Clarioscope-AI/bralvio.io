"use client";
import "./TextCube.css";

const items = ["Generative AI", "Government AI", "Enterprise AI"];

export default function TextCube() {
  const gradient =
    "linear-gradient(50deg, #714DFF, #9C83FF 31.28%, #E151FF 77.97%, #FFF759 95.64%)";

  return (
    <span className="inline-block w-full lg:w-[418px] lg:h-[70px] h-[40px] perspective align-middle">
      <div className="relative w-full h-full textcube-rotate">
        {items.map((item, i) => (
          <div
            key={i}
            className="absolute w-full h-full flex items-center justify-center text-[28px] lg:text-[62px] leading-tight"
            style={{
              transform: `rotateX(${i * 120}deg) translateZ(35px)`,
              backfaceVisibility: "hidden",
              backgroundImage: gradient,
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

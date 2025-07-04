"use client"

import { reviewData } from "@/data/reviewData";
import { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const AUTOPLAY_INTERVAL = 4000;

const DesktopReview = () => {
    const [selected, setSelected] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setSelected(slider.track.details.rel);
        },
        slides: { perView: 1, spacing: 0 },
        loop: true,
        rubberband: false,
    });

    // Autoplay logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (instanceRef.current) {
                const nextIdx = (instanceRef.current.track.details.rel + 1) % reviewData.length;
                instanceRef.current.moveToIdx(nextIdx);
            }
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(interval);
    }, [instanceRef]);

    // Sync logo click with slider
    useEffect(() => {
        if (instanceRef.current && instanceRef.current.track.details.rel !== selected) {
            instanceRef.current.moveToIdx(selected);
        }
    }, [selected, instanceRef]);

    return (
        <div className="h-[800px] flex flex-col justify-center items-center py-10">
            <div ref={sliderRef} className="keen-slider max-w-7xl w-11/12 h-[600px] mb-16">
                {reviewData.map((review) => (
                    <div
                        key={review.author}
                        className="keen-slider__slide flex flex-col items-center justify-center bg-[#141316]/95 rounded-3xl shadow-2xl px-10 py-16 text-center text-white"
                    >
                        <div className="text-xl font-normal mb-10 leading-relaxed w-[80%]">
                            {review.text}
                        </div>
                        <div className="font-bold text-xl">{review.author}</div>
                        <div className="font-normal text-base text-gray-400 mt-1">{review.role}</div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-center gap-36 mt-5">
                {reviewData.map((r, idx) => (
                    <button
                        key={r.author}
                        onClick={() => setSelected(idx)}
                        className={`bg-none border-none outline-none transition-opacity duration-200 cursor-pointer`}
                        aria-label={`Show review by ${r.author}`}
                        type="button"
                    >
                    
                        <div className="relative w-24 h-10">
                        <Image
                            src={typeof r.logo === "string" ? r.logo : (r.logo as { src: string }).src}
                            alt={r.author}
                            fill
                            style={{ objectFit: "contain" }}
                            className={`filter invert ${selected === idx ? "opacity-100" : "opacity-65"}`}
                        />
                        </div>

                    </button>
                ))}
            </div>
        </div>
    );
};

export default DesktopReview;
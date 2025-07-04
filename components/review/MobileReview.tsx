"use client"

import { reviewData } from "@/data/reviewData";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";

const MobileReview = () => {
    const [current, setCurrent] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrent(slider.track.details.rel);
        },
        slides: { perView: 1, spacing: 0 },
        loop: true,
        rubberband: false,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 4000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <div className="h-[600px] flex flex-col justify-center items-center  px-4 py-8">
            <div ref={sliderRef} className="keen-slider w-full ">
                {reviewData.map((review) => (
                    <div
                        key={review.author}
                        className="keen-slider__slide flex flex-col items-center justify-center bg-[#141316]/95 rounded-2xl shadow-xl px-4 py-10 text-center text-white h-[500px] "
                    >
                        <div className="text-base sm:text-lg font-normal mb-8 leading-relaxed">
                            {review.text}
                        </div>
                        <div className="font-bold text-base sm:text-lg mt-4">{review.author}</div>
                        <div className="font-normal text-xs sm:text-sm text-gray-400 mt-1">{review.role}</div>
                    </div>
                ))}
            </div>
           
            <div className="flex justify-center items-center gap-2 mt-6">
                {reviewData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={
                            current === idx
                                ? "w-6 h-1 rounded-full bg-white transition-all duration-200"
                                : "w-1 h-1 rounded-full bg-white/40 transition-all duration-200"
                        }
                        aria-label={`Go to review ${idx + 1}`}
                        type="button"
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileReview;
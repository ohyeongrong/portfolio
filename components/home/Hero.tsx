'use client'

import { useEffect, useRef } from "react";
import MarqueeText from "../ui/MarqueeText"
import MatterVisual from "../ui/MatterVisual"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

    const heroRef = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",   // 고정되는 구간 길이 (스크롤 거리)
            pin: true,       // 고정
            pinSpacing: false, // 밑에 공간 안 남기고 바로 다음 섹션이 올라오게
            // markers: true, // 테스트용 표시
        });
    }, []);

    return (
        <section ref={heroRef} className="panel h-dvh w-dvw">
            <h2 className="sr-only">hero</h2>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full flex-1 relative">
                    <MatterVisual />
                </div>
                <MarqueeText textContent={
                    <>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                    </>
                }/>
            </div>
        </section>
    )
}
'use client'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import AnimatedImg from './AnimatedImg';

gsap.registerPlugin(ScrollTrigger);


export default function About() {

    const aboutRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(aboutRef.current,
            { y: 150 },
            { 
                y: 0,
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top top',
                },
            }
        )
    }, []);


    return (
            <section ref={aboutRef} className='panel w-dvw relative overflow-visible h-[400vh]'>
                <div className="w-full bg-[var(--color-primary-dark)] text-white w-full h-full">
                    <div className="flex flex-col items-center w-full h-full">
                        <h2 className="sr-only">about</h2>
                        <AnimatedText />
                        <AnimatedImg />
                    </div>
                </div>
            </section>
    )
}
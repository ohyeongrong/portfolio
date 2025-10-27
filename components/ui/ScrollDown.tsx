'use client';

import { useEffect, useState } from "react"
import TextLink from "./TextLink"

const SCROLL_THRESHOLD = 300;

export default function ScrollDown() {

    const [showScrollPrompt, setShowScrollPrompt] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < SCROLL_THRESHOLD) {
                setShowScrollPrompt(true);
            } else {
                setShowScrollPrompt(false);
            }
        };

        handleScroll(); 
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const transitionClasses = showScrollPrompt 
        ? 'opacity-100 transition-opacity duration-500' 
        : 'opacity-0 transition-opacity duration-500 pointer-events-none';

    return (
        <div className={`${transitionClasses}`}>
            {/* showScrollPrompt 상태와 상관없이 렌더링하되, 투명도로 제어합니다. */}
            <TextLink content='Scroll Down' iconName='arrowOutward' iconSize={18}/>
        </div>
    )
}
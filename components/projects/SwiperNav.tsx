'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import HoverRevealText from '../utility/HoverRevealText';

import { motion } from 'framer-motion';

export default function SwiperNav(){

    const swiperNavVariants = {
        initial: { opacity: 0, transition: { ease: 'easeInOut', duration: 0.6 }},
        visible: { opacity: 1, transition: { ease: 'easeInOut' ,duration: 0.6 }},
    };

    const prev = (
        <div className='flex items-center gap-6'>
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#121212"><path d="M402.09-77.91 0-480l402.09-402.09L488.18-796l-316 316 316 316-86.09 86.09Z"/></svg> 
            <span className="hidden sm:block">Prev</span>
        </div>
            )
    const next = (
            <div className="flex items-center gap-6">
                <span className="hidden sm:block">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#121212"><path d="M288-77.91 201.91-164l316-316-316-316L288-882.09 690.09-480 288-77.91Z"/></svg>
            </div>
            )

    return (
        <motion.div
            variants={swiperNavVariants}
            initial='initial'
            animate='visible'
            className="fixed z-40 bottom-4 px-6 w-full">
            <div className="w-full flex items-center justify-between"> 
                <div className="custom-prev cursor-pointer">
                    <HoverRevealText hoverContent={prev}>
                        {prev}
                    </HoverRevealText>
                </div>
                <div className="hidden lg:block custom-pagination lg:flex items-center justify-center gap-4 cursor-pointer"></div> 
                <div className="custom-next cursor-pointer flex items-center gap-6">
                    <HoverRevealText hoverContent={next}>
                        {next}
                    </HoverRevealText>
                </div>
            </div>
        </motion.div>
    )
}
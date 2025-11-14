'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import ProjectSlideItem from "./ProjectSlideItem";

export default function ProjectSwiper(){

    return (
            <Swiper
                modules={[Mousewheel, Navigation, Pagination]}
                data-no-scroll
                grabCursor={true}
                className='h-full'
                slidesPerView={4} 
                spaceBetween={24} 
                loop={true} 
                centeredSlides={true}
                freeMode={true}
                speed={800}
                mousewheel={true}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                breakpoints={{
                    1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    },
                    1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 16,
                    },
                    768: {
                    slidesPerView: 2.5,
                    spaceBetween: 12,
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                    },
                    0: {
                    slidesPerView: 1.5,
                    spaceBetween: 4,
                    },
                }}
            >
                {
                    PROJECT_DATA.map((project, i) => 
                        <SwiperSlide 
                            key={project.id + i}
                            className="!flex !items-center !justify-center"
                        >
                            <ProjectSlideItem project={project} i={i}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
    )
}
'use client'
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export default function Projects(){

    const test = Array(12).fill(0);
    return (
        <section className="h-dvh py-[10vh]">
            <div className="h-[80vh]">
                <Swiper 
                    modules={[Mousewheel, Navigation, Pagination]} 
            
                    className="cursor-grab active:cursor-grabbing h-full"
                    grabCursor={true}
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
                        slidesPerView: 3,
                        spaceBetween: 16,
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                        },
                        640: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                        },
                        0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        },
                    }}
                >
                    {
                        test.map((a, i) => 
                            <SwiperSlide 
                                key={a + i}
                                className="!flex !items-center !justify-center"
                            >
                                <article className="w-full relative" aria-label="1/10">
                                    <Link href='/projects/slug' aria-label="Project title 상세 페이지로 이동">
                                        <div className="flex flex-col justify-between items-center w-full h-full">
                                            <div className="absolute z-10 top-2 mix-blend-difference">
                                                <h3 className="text-xl text-white ">Project title</h3>
                                            </div>
                                            <div className="absolute z-20 bottom-3">
                                                <ul className="flex items-center gap-1">
                                                    <li className="text-xs py-0.5 px-2 bg-[var(--color-primary-dark)] text-white w-fit h-fit">Development</li>
                                                    <li className="border text-xs py-0.5 px-2 rounded-full w-fit h-fit bg-white">JavaScript</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={`relative max-h-[80vh] aspect-[5/8] ${i % 2 === 0 ? 'w-full' : 'w-16/20'} mx-auto`}>
                                            <Image className="object-cover rounded-2xl" src="/images/about-design-img-1.webp" alt="최근 작업물" fill/>
                                        </div>
                                    </Link>
                                </article>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <div className="fixed z-40 bottom-4 px-6 w-full">
                <div className="w-full flex items-center justify-between"> 
                    <div className="custom-prev cursor-pointer flex items-center gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#121212"><path d="M402.09-77.91 0-480l402.09-402.09L488.18-796l-316 316 316 316-86.09 86.09Z"/></svg> 
                        <span>Prev</span>
                    </div>
                    <div className="custom-pagination flex items-center justify-center gap-4 cursor-pointer"></div> 
                    <div className="custom-next cursor-pointer flex items-center gap-6">
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#121212"><path d="M288-77.91 201.91-164l316-316-316-316L288-882.09 690.09-480 288-77.91Z"/></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
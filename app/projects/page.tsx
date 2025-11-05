'use client'
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import ProjectBadgeList from "@/components/ui/ProjectBadgeList";

export default function Projects(){

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
                                <article className="relative w-full">
                                    <Link href={`/projects/${project.id}`}>
                                        <div className={`relative max-h-[80vh] aspect-[5/8] ${i % 2 === 0 ? 'w-full' : 'w-4/5'} mx-auto`}>
                                            <Image
                                                className="object-cover rounded-2xl"
                                                src={project.thumbnail}
                                                alt={`${project.title} 썸네일`}
                                                fill
                                            />
                                            <div className="absolute bottom-4 left-0 right-0 px-4 z-20 flex flex-col gap-1">
                                                <ProjectBadgeList categories={project.categories} tools={project.tools} />
                                            </div>
                                        </div>
                                        <div className="absolute z-10 top-2 mix-blend-difference text-center w-full">
                                            <h3 className={`${i % 2 === 0 ? 'text-[clamp(1.125rem,1.038rem+0.385vw,1.5rem)]' : 'text-[clamp(1rem,0.885rem+0.513vw,1.5rem)]'} text-white`}>
                                                {project.title}
                                            </h3>
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
                        <span className="hidden sm:block">Prev</span>
                    </div>
                    <div className="hidden lg:block custom-pagination lg:flex items-center justify-center gap-4 cursor-pointer"></div> 
                    <div className="custom-next cursor-pointer flex items-center gap-6">
                        <span className="hidden sm:block">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#121212"><path d="M288-77.91 201.91-164l316-316-316-316L288-882.09 690.09-480 288-77.91Z"/></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
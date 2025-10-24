import Link from "next/link";
import Image from 'next/image';

export default function Projects(){
    return (
        <>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {/* 슬라이드 카드 반복문 하면 될듯?*/}
                        <article className="w-110 h-110 relative">
                            <Link href='/projects/slug' aria-label="Project title 상세 페이지로 이동">
                                <div className="flex flex-col justify-between items-center w-full">
                                    <div className="absolute z-10 top-2 mix-blend-difference">
                                        <h3 className="text-xl text-white ">Project title</h3>
                                    </div>
                                    <div className="absolute z-20 -bottom-51">
                                        <ul className="flex items-center gap-1">
                                            <li className="text-xs py-0.5 px-2 bg-[var(--color-primary-dark)] text-white w-fit h-fit">Development</li>
                                            <li className="border text-xs py-0.5 px-2 rounded-full w-fit h-fit bg-white">JavaScript</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aspect-[2/3] relative">
                                    <Image className="object-cover rounded-2xl" src="/images/about-design-img-1.webp" alt="최근 작업물" fill/>
                                </div>
                            </Link>
                        </article>
                        <article className="w-90 h-90 relative">
                            <Link href='/project/detail' aria-label="Project title 상세 페이지로 이동">
                                <div className="flex flex-col justify-between items-center w-full">
                                    <div className="absolute z-10 top-2 mix-blend-difference">
                                        <h3 className="text-xl text-white ">Project title</h3>
                                    </div>
                                    <div className="absolute z-20 -bottom-41">
                                        <ul className="flex items-center gap-1">
                                            <li className="text-xs py-0.5 px-2 bg-[var(--color-primary-dark)] text-white w-fit h-fit">Development</li>
                                            <li className="border text-xs py-0.5 px-2 rounded-full w-fit h-fit bg-white">JavaScript</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aspect-[2/3] relative">
                                    <Image className="object-cover rounded-2xl" src="/images/about-design-img-1.webp" alt="최근 작업물" fill/>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
            <div>
                <div className="swiper-button-prev">Prev Slide</div>
                {/* 페이지네이션은 동글 버튼 말고 숫자번호로 */}
                <div className="swiper-pagination"></div> 
                <div className="swiper-button-next">Next Slide</div>
            </div>
        </>
    )
}
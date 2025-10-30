import Image from 'next/image';
import TextLink from './ui/TextLink';
import ScrollDown from './ui/ScrollDown';


const WORK_IMAGES_DATA = [
    { 
        id: 1, 
        src: "/images/about-design-img-1.webp", 
        alt: "첫 번째 디자인 작업물", 
        aspect: "aspect-[3/2]",
        span: "md:col-span-3 sm:col-span-2", 
        start: "lg:col-start-2 sm:col-strat-1",
        self: "self-center" 
    },
    { 
        id: 2, 
        src: "/images/about-design-img-2.webp", 
        alt: "두 번째 디자인 작업물", 
        aspect: "aspect-[3/2] sm:aspect-[2/3]", 
        span: "md:col-span-3 sm:col-span-2", 
        end: "lg:col-end-12 md:col-end-9 sm:col-end-7",
        self: "self-center" 
    },
    { 
        id: 3, 
        src: "/images/about-design-img-3.webp", 
        alt: "세 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "md:col-span-3 sm:col-span-2", 
        start: "lg:col-start-6 md:col-start-4 sm:col-start-3" 
    },
    { 
        id: 4, 
        src: "/images/about-design-img-4.webp", 
        alt: "네 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "md:col-span-4 sm:col-span-3", 
        start: "lg:col-start-1 sm:col-start-1",
        self: "self-end" 
    },
    { 
        id: 5, 
        src: "/images/about-design-img-5.webp", 
        alt: "다섯 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "md:col-span-3 sm:col-span-2", 
        end: "lg:col-end-13 md:col-end-9 sm:col-end-7",
        self: "self-end" 
    },
    { 
        id: 6, 
        src: "/images/about-design-img-6.webp", 
        alt: "여섯 번째 디자인 작업물", 
        aspect: "aspect-[3/2] sm:aspect-[2/3]", 
        span: "lg:col-span-4 md:col-span-3", 
        start: "lg:col-start-6 md:col-start-3 sm:col-start-3" 
    },
];

export default function About() {
    return (
            <section className='w-dvw'>
                <div className="w-full bg-[var(--color-primary-dark)] text-white pt-4 rounded-[6vw] h-fit">
                    <div className="flex flex-col items-center">
                        <h2 className="sr-only">about</h2>
                        <ScrollDown/>
                        {/* 아래 문구는 애니메이션 효과를 넣어야할거같아서 div로 묶음 */}
                        <div className="
                            text-[clamp(2rem,0.8rem+6vw,8rem)] tracking-tight leading-none text-center text-[var(--color-gray-700)] font-semibold
                            flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-8 py-16 md:py-24 lg:py-32
                        ">
                            <div>
                            다양한 디자인 프로젝트를
                            </div>
                            <div>
                            통해 쌓아온 감각과 개발을
                            </div>
                            <div>
                            결합하여 시각적 완성도와
                            </div>
                            <div>
                            사용자 경험을 높힌
                            </div>
                            <div>
                            결과물을 개발합니다.
                            </div>
                        </div>
                        {/* 지난 디자인 작업물 이미지 영역*/}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-12 sm:gap-y-24 md:gap-y-32 lg:gap-y-48 pb-32">
                            {
                                WORK_IMAGES_DATA.map(work => 
                                    <div key={work.id} className={`${work.span} ${work.aspect} relative ${work.start || ''} ${work.end || ''} ${work.self || ''}`}>
                                        <Image 
                                            className="object-cover rounded-2xl"
                                            src={work.src} 
                                            alt={work.alt} 
                                            fill 
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
    )
}
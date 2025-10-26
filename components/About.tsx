import Image from 'next/image';
import TextLink from './ui/TextLink';

const WORK_IMAGES_DATA = [
    { 
        id: 1, 
        src: "/images/about-design-img-1.webp", 
        alt: "첫 번째 디자인 작업물", 
        aspect: "aspect-[3/2]",
        span: "col-span-3", 
        start: "col-start-2" 
    },
    { 
        id: 2, 
        src: "/images/about-design-img-2.webp", 
        alt: "두 번째 디자인 작업물", 
        aspect: "aspect-[2/3]", 
        span: "col-span-3", 
        end: "col-end-12" 
    },
    { 
        id: 3, 
        src: "/images/about-design-img-3.webp", 
        alt: "세 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "col-span-3", 
        start: "col-start-6" 
    },
    { 
        id: 4, 
        src: "/images/about-design-img-4.webp", 
        alt: "네 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "col-span-4", 
        start: "col-start-1" 
    },
    { 
        id: 5, 
        src: "/images/about-design-img-5.webp", 
        alt: "다섯 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "col-span-3", 
        end: "col-end-13" 
    },
    { 
        id: 6, 
        src: "/images/about-design-img-6.webp", 
        alt: "여섯 번째 디자인 작업물", 
        aspect: "aspect-[2/3]", 
        span: "col-span-4", 
        start: "col-start-6" 
    },
];

export default function About() {
    return (
            <section>
                <div className="w-full bg-[var(--color-primary-dark)] text-white py-6 rounded-[64px] h-fit">
                    <div className="flex flex-col items-center">
                        <h2 className="sr-only">about</h2>
                        <TextLink content='Scroll Down'/>
                        {/* 아래 문구는 애니메이션 효과를 넣어야할거같아서 div로 묶음 */}
                        <div className="text-[6vw] tracking-tight leading-none text-center flex flex-col gap-8 py-6  text-[var(--color-gray-700)]">
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
                        {/* 그동안 내가 한 디자인 작업물 이미지 영역*/}
                        <div className="w-full grid grid-cols-12 gap-y-30">
                            {
                                WORK_IMAGES_DATA.map(work => 
                                    <div key={work.id} className={`${work.span} ${work.aspect} relative ${work.start || ''} ${work.end || ''}`}>
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
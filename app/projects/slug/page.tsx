import Link from "next/link";
import Image from 'next/image';

export default function ProjectDetail() {
    return (
        <>
            <div className="px-6 flex flex-col gap-4">
                <div>
                    <time dateTime="2025-12">December 2025</time>
                </div>
                <div className="flex justify-between">
                    <div className="flex-1/2">
                        <h2 className="text-7xl">Project title</h2>
                    </div>
                    <div className="flex-1/2 flex">
                        <div className="flex-2/3">
                            <p>프로젝트에 대한 설명</p>
                        </div>
                        <div className="flex-1/3 flex justify-end">
                            <Link href="#">GitHub</Link>
                            <Link href="#">WebSite</Link>
                        </div>
                    </div>
                </div>
                {/* skill & tool 뱃지 영역으로 나중에 컴포넌트로 사용할거 */}
                <div className="flex gap-1">
                    <ul>
                        <li>Development</li>
                    </ul>
                    <ul>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-dvh bg-[url(/images/about-design-img-1.webp)] bg-center bg-cover"></div>
            {/* 기능 설명 반복 됨 */}
            <div className="grid grid-cols-12 items-center px-6">
                <figure className="col-start-1 col-span-5 aspect-[2/3] relative">
                    <Image className="object-cover rounded-2xl" src="/images/about-design-img-6.webp" alt="프로젝트 주요 기능" fill/>
                </figure>
                <div className="col-start-7 col-span-3">
                    <div className="flex flex-col gap-8 tracking-tight">
                        <ul>
                            <li>GSAP</li>
                        </ul>
                        <dl className="flex flex-col gap-4">
                            <dt className="text-4xl font-bold">데이터<br/>비주얼라이제이션</dt>
                            <dd className="font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
                                PokeAPI를 통해 포켓몬 데이터를 비동기적으로 로드하고, 
                                디바운싱을 적용한 무한 스크롤로 성능을 최적화했습니다. 
                                Tailwind CSS 기반의 반응형 그리드로 화면 크기에 따라 카드 수를 유동적으로 조정하며, 
                                GSAP을 활용해 PC에서는 마우스 오버, 모바일에서는 터치 시 카드 플립 애니메이션이 작동하도록 구현했습니다.
                            </dd>
                        </dl>
                        <div className="border-b"></div>
                        <dl className="flex flex-col gap-1">
                            <dt className="font-bold text-lg">초기 로딩 속도 및 비동기 처리 문제</dt>
                            <dd className="font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">Promise.all() 병렬 요청을 통해 다수 API 요청을 효율적으로 처리하여 초기 로딩 속도를 크게 개선했습니다.</dd>
                        </dl>
                        <dl className="flex flex-col gap-1">
                            <dt className="font-bold text-lg">초기 로딩 속도 및 비동기 처리 문제</dt>
                            <dd className="font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">Promise.all() 병렬 요청을 통해 다수 API 요청을 효율적으로 처리하여 초기 로딩 속도를 크게 개선했습니다.</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full flex overflow-hidden flex-nowrap justify-center items-end gap-6">
                    <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                    <figure className="w-[30vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                    <figure className="w-[40vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                    <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                </div>
                <div className="w-full flex overflow-hidden flex-nowrap justify-end items-start gap-6">
                    <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                    <figure className="w-[30vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                    <figure className="w-[40vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                    <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                        <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                    </figure>
                </div>
            </div>
        </>
    )
}
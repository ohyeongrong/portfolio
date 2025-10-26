import Link from "next/link";
import Image from 'next/image';
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <section>
        <div className="px-6 py-16">
          <h2 className="text-5xl tracking-tight">Stack & Tool</h2>
          <div className="flex justify-between pt-16">
            {/* tool 뱃지들 예를들어 javaScript, HTML 등 이런 요소를 matter.js이용해서 위에서 떨어지게 대신 드래그 드롭은 안할거야  */}
            <div className="flex-1/2">
              <h3 className="sr-only">Tool List</h3>
              {/* 공용 뱃지로 컴포넌트 만들면 될듯 */}
              <ul className="text-xl">
                <li>
                    <div className="text-2xl px-6 py-3 bg-[var(--color-gray-200)] rounded-full w-fit h-fit">
                        Development
                    </div>
                </li>
              </ul>
            </div>
            {/* tool & stack의 설명 부분 */}
            <div className="flex-1/2 tracking-tight">
              {/* 여기도 반복문 돌리면 될듯? */}
              <dl className="flex items-center justify-between border-b pb-10 text-[var(--color-gray-500)]">
                <dt className="text-6xl text-[var(--color-primary-dark)]">Language</dt>
                            <div className="text-lg px-4 py-1 border border-[var(--color-primary-dark)] rounded-full w-fit h-fit">
                                Development
                            </div>
                <dd>웹 구조와 스타일을 정의하고, 핵심 로직 및 타입 안전성을 구현합니다.</dd>
              </dl>
              <dl className="flex items-center justify-between border-b py-10 text-[var(--color-gray-500)]">
                <dt className="text-6xl text-[var(--color-primary-dark)]">Frameworks</dt>
                <dd >컴포넌트 기반 UI 구축 및 서버 렌더링으로 고성능 웹 앱을 개발합니다.</dd>
              </dl>
              <dl className="flex items-center justify-between border-b py-10 text-[var(--color-gray-500)]">
                <dt className="text-6xl  text-[var(--color-primary-dark)]">UI & Utils</dt>
                <dd >빠른 스타일링, 상태/애니메이션 관리 및 효율적 빌드로 생산성과 사용자 경험을 향상합니다.</dd>
              </dl>
              <dl className="flex items-center justify-between border-b py-10 text-[var(--color-gray-500)]">
                <dt className="text-6xl  text-[var(--color-primary-dark)]">Design Tool</dt>
                <dd>UI/UX 디자인 및 그래픽 리소스 제작을 통해 필요한 모든 시각적 요소를 직접 처리합니다.</dd>
              </dl>
              <dl className="flex items-center justify-between border-b py-10 text-[var(--color-gray-500)]">
                <dt className="text-6xl  text-[var(--color-primary-dark)]">Git</dt>
                <dd>코드 이력 관리와 안전한 협업을 통해 개발 프로세스의 신뢰성을 유지합니다.</dd>
              </dl>
            </div>
            {/* 의미없는 그냥 장식 하단에서 크게 오른쪽에서 왼쪽으로 흐르는 */}
          </div>
        </div>
        <div className="text-[17vw] tracking-tighter leading-none whitespace-nowrap overflow-hidden">©2025 Oh! YeongRong</div>
      </section>
      <section>
        <div className="px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl tracking-tight">Latest Projects</h2>
            {/* 이거 공용 버튼 컴포넌트로 만들어야함 */}
            <Link href="/projects" className="text-xl px-4 py-2 w-fit h-fit bg-[var(--color-gray-200)] rounded-full">View All</Link>
          </div>
          {/* 최근 작업물 이미지 반복문*/}
          <ul>
            <li>
              <article>
                <Link href="/">
                {/* 가로 길이 수정해야함 */}
                <div className="w-[700px]">
                  <div className="aspect-[3/2] relative">
                    <Image className="object-cover rounded-2xl" src="/images/about-design-img-1.webp" alt="최근 작업물" fill/>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <h3 className="text-xl">Project Title</h3>
                    {/* 작업물에 사용한 툴 뱃지 반복문 써야할듯? */}
                    <ul className="flex items-center gap-1">
                        <li className="text-xs py-0.5 px-2 bg-[var(--color-primary-dark)] text-white w-fit h-fit">Development</li>
                        <li className="border text-xs py-0.5 px-2 rounded-full w-fit h-fit bg-white">JavaScript</li>
                    </ul>
                  </div>
                </div>
                </Link>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

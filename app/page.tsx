import Link from "next/link";
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <header className="fixed z-100 inset-0 max-h-[56px] mix-blend-difference text-white">
        <div className="flex justify-between py-4 px-6 text-xl">
          <time dateTime="2025-10-21T00:27:57+09:00">
            Fri 00:27:57
          </time>
          <h1>
            <Link href="/"> 
              ©2025  Oh! YeongRong
            </Link>
          </h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/">
                  Archive
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="top">
        <section>
          <h2 className="sr-only">hero</h2>
          {/* 이 영역은 나의 기술들? 예를 들어 development, UI UX Design 등 이런거를 요소로 만들어서 matter.js 이용해서 위에서 요소들이 떨어지게 할거임 드래그 드롭도 가능 */}
          <div className="flex flex-col items-center justify-center w-full h-[50vh]">
            <h3 className="sr-only">Skill</h3>
            <ul className="text-3xl">
              <li className="px-8 py-4 bg-[var(--color-primary-dark)] rounded-full text-white w-fit h-fit">Development</li>
            </ul>
          </div>
          <div aria-hidden="true" className="flex overflow-hidden justify-between items-center text-center text-[17vw] tracking-tighter leading-none">
            <div className="flex-1">Oh!</div>
            <div className="flex-1 text-transparent [-webkit-text-stroke:1px_black]">Oh!</div>
            <div className="flex-1">Oh!</div>
            <div className="flex-1 text-transparent [-webkit-text-stroke:1px_black]">Oh!</div>
          </div>
        </section>
        <section>
          <div className="w-full bg-[var(--color-primary-dark)] text-white py-6 rounded-[64px] h-fit">
            <div className="flex flex-col items-center">
              <h2 className="sr-only">about</h2>
              <button type="button" aria-label="About Section Scroll">Scroll Down</button>
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
                {/* 여기 반복문으로 변경해야할듯? */}
                <div className="col-span-3 col-start-2 aspect-[3/2] relative">
                  <Image className="object-cover rounded-2xl" src="/images/about-design-img-1.webp" alt="기존 디자인 작업물 이미지" fill/>
                </div>
                <div className="col-span-3 col-end-12 aspect-[2/3] relative">
                  <Image className="object-cover" src="/images/about-design-img-2.webp" alt="기존 디자인 작업물 이미지" fill/>
                </div>
                <div className="col-span-3 col-start-6 aspect-[3/2] relative">
                  <Image className="object-cover" src="/images/about-design-img-3.webp" alt="기존 디자인 작업물 이미지" fill/>
                </div>
                <div className="col-span-4 col-start-1 aspect-[3/2] relative">
                  <Image className="object-cover" src="/images/about-design-img-4.webp" alt="기존 디자인 작업물 이미지" fill/>
                </div>
                <div className="col-span-3 col-end-13  aspect-[3/2] relative">
                  <Image className="object-cover" src="/images/about-design-img-5.webp" alt="기존 디자인 작업물 이미지" fill/>
                </div>
                <div className="col-span-4 col-start-6 aspect-[2/3] relative">
                  <Image className="object-cover" src="/images/about-design-img-6.webp" alt="기존 디자인 작업물 이미지" fill/>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <div className="px-7 py-3 bg-[var(--color-primary-dark)] rounded-full text-white w-fit h-fit">
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
      </main>
      <footer>
        <div className="bg-[var(--color-primary-dark)] text-white">
          <div className="bg-[var(--color-background)] w-full h-[64px] rounded-b-[64px]">
            <span className="rounded-l-2xl"></span>
          </div>
          <div className="py-6">
            <div aria-hidden="true" className="flex overflow-hidden justify-between items-center text-center text-[17vw] tracking-tighter leading-none">
              <div className="flex-1">Oh!</div>
              <div className="flex-1">Oh!</div>
              <div className="flex-1">Oh!</div>
              <div className="flex-1 text-transparent [-webkit-text-stroke:1px_white]">Oh!</div>
            </div>
            <div className="flex justify-between px-6 text-xl">
              <p>©2025  Oh! YeongRong</p>
              <a href="mailto:dhdudfhd920@gmailcom">
                dhdudfhd920@gmail.com
                <div className="border-b"></div>
              </a>
              {/* 버튼 컴포넌트 만든거 넣으면 됨 */}
              <button type="button" aria-label="페이지 맨 위로 이동">
                Back Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

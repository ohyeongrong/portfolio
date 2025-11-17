# 🎨 Portfolio
개인 포트폴리오 웹사이트로, 디자인 경력과 프론트엔드 기술 역량을 함께 보여주는 프로젝트입니다.
Next.js 기반의 성능 최적화 환경 위에서 matter.js, GSAP, Motion, Swiper 등 라이브러리를 활용하여 
사이트 전반의 UI/UX, 인터랙션, 애니메이션, 반응형 레이아웃, 웹 접근성을 직접 구현하였습니다.

## 🔗배포 링크
[#](#)

## 📂 GitHub 레포지토리
[#](#)

## 📌 프로젝트 소개
- **개발 기간**: 2025.11.01 ~ 2025.11.16
- **기여도**: 100% (기획, 디자인, 개발 직접 진행)
- **기술 스택**:  
  - **Frontend**: Next.js, JavaScript(ES6+), TypeScript
  - **Library**: Matter.js, GSAP, Motion, Swiper
  - **Styling**: HTML5, Tailwind CSS
  - **Design Tool**: Figma
  - **Build & Deploy**: Git, GitHub

---

## ⚙️ 주요 기능 및 구현 내용

### 1. matter.js 기반의 동적 물리 인터랙션 구현
- 브라우저 환경에서 중력, 충돌, 마찰 등을 구현하는 matter.js를 활용해 몰입감 있는 동적 인터랙션을 구현.
- 화면 크기 변화 시 컨테이너의 실제 크기를 다시 계산하고 물리 객체의 크기·충돌 경계를 재설정해 반응형 환경에서도 자연스러운 움직임 유지.
- 시각적 표현은 SVG로 처리하고, matter.js Body의 좌표값과 동기화하여 더 높은 디자인 자유도를 확보.

### 2. GSAP & Motion을 활용한 애니메이션 역할 분리
- 스크롤 기반 애니메이션은 GSAP의 **ScrollTrigger**와 **ScrollSmoother**를 사용하여 부드러운 스크롤 흐름과 시점 변화에 반응하는 인터랙션을 구현.
- 시간 기반 애니메이션(페이지 전환, 텍스트 마키 등)은 GSAP로 구현.
- Hover·Focus 등 즉각적 반응이 필요한 UI는 React 친화적인 Motion으로 처리.
- 각 라이브러리의 애니메이션 역할을 분리함으로써 불필요한 DOM 접근을 줄여 렌더링 효율을 높임.

### 3. 디자인 작업 기반 컴포넌트 구축
- Figma로 디자인한 화면을 기준으로 UI 요소들을 기능 단위로 분리하여 컴포넌트화.
- 반복되는 요소를 재사용 가능한 컴포넌트로 구조화하여 유지보수성과 확장성이 높은 구조를 설계.

### 4. 프로젝트 데이터 분리 및 Swiper 슬라이더 적용
- 프로젝트 상세 데이터(제목, 설명, 기술 스택, 이미지 등)를 src/constants 내의 **별도 상수 객체(Constant Object)**로 분리하여 관리.
- UI 로직과 데이터를 분리하여 프로젝트 추가/수정 시 코드 가독성 향상.
- 모바일·태블릿 환경에서도 자연스러운 터치 기반 슬라이드 경험을 위해 Swiper 적용, Pagination·Loop 등 기능 활용.

### 5. Next.js 기반 App Router 아키텍처 및 성능 최적화
- 변동성이 적은 페이지는 SSG(Static Site Generation)로 빌드하여 초기 로딩 속도 개선, 클라이언트 상태가 필요한 영역은 CSR(Client Side Rendering)으로 처리.
- next/image를 활용해 지연 로딩, 뷰포트 기반 크기 조정, WebP 변환을 적용하여 LCP 개선 및 핵심 웹 성능 향상.
- App Router 기반 라우팅과 Root layout을 통해 Header, Footer 등 공통 요소 관리, 페이지 이동 시 불필요한 렌더링 방지.
- 프로젝트 데이터와 핵심 콘텐츠를 서버에서 정적 HTML로 렌더링하여 검색 엔진에서 누락 없이 수집 가능하도록 구성.

### 6. 웹 접근성 & 시멘틱 마크업
- 시맨틱 태그(<main>, <section>, <article>, <figure>)를 적극 활용해 문서 구조 명확화 및 SEO 강화.
- 이미지 alt 속성, 인터랙션 요소 ARIA 속성(aria-label, aria-hidden 등) 적용으로 스크린 리더 접근성 확보.

---

## 🚀 설치 및 실행 방법

```bash
# 1. 프로젝트 클론
git clone [#]

# 2. 패키지 설치
npm install

# 3. 로컬 실행
npm run dev

```

## 📂 폴더 구조

```
src/app         # App Router 기반 페이지 및 레이아웃
src/components  # UI 컴포넌트
src/components/utility   # 유틸리티 컴포넌트
src/components/hooks     # 커스텀 훅
src/constants   # 데이터 상수
src/context     # 전역 상태 관리 Context
src/public      # 폰트, 아이콘, 이미지

```

---

## 개발 과정에서 겪었던 문제와 해결

**문제 1. Matter.js 요소의 반응형 처리 및 시각적 제약**
- 문제점: Matter.js의 기본 Canvas 렌더링 방식으로는 복잡한 텍스트/그래픽 표현이 어렵고, 뷰포트 크기 변화 시 물리 경계가 어긋남.
- 해결 방법: Matter.js는 물리 계산만 전담하도록 하고, 시각적 요소는 SVG로 분리하여 렌더링. window.resize 이벤트를 감지하여 물리 엔진과 경계를 동적으로 재설정함으로써 반응형 환경에서도 정확한 물리 움직임을 유지.

**문제 2. GSAP ScrollSmoother 좌표 왜곡**
- 문제점:  ScrollSmoother 좌표 왜곡: ScrollSmoother 적용 시 fixed/sticky 요소들의 좌표가 왜곡되는 현상 발생.
- 해결: 충돌하는 요소는 스크롤러의 영향권 밖에 렌더링하고, fixed 요소는 GSAP pin 속성을 활용해 재정의. 커스텀 커서의 위치 오차는 **CursorContext**를 통해 뷰포트 기준 글로벌 좌표를 관리하여 해결

**문제 3. 라우팅 시 스크롤 위치 잔존**
- 문제: 페이지 이동 시 스크롤 위치가 0으로 초기화되지 않고 직전 위치를 유지하는 문제 발생.
- 해결 : **LoadingContext**를 활용하여 라우팅 이벤트(pathname 변경)를 감지하고, 로딩 완료 시점에 GSAP ScrollSmoother 인스턴스를 제어하여 스크롤 위치를 최상단(0)으로 강제 초기화하는 로직을 적용.


## 아쉬운 점 및 개선 아이디어
- 콘텐츠 데이터 관리 시스템 부재: 현재 프로젝트 데이터가 코드 내 상수 객체로 존재하여 콘텐츠 업데이트 시 개발자 개입이 필요. 향후 Headless CMS를 적용하여 콘텐츠 관리를 분리하고, 빌드 과정 없이 콘텐츠를 업데이트하는 유연성을 확보할 계획.
- 성능 최적화 추가 개선: 대용량 번들 문제에 대응하기 위한 dynamic import를 통한 코드 스플리팅을 적용하고, Lighthouse 성능 지표 개선을 위한 컴포넌트 레벨 최적화 작업에 더 집중할 계획
- 타입스크립트 정의 중....!
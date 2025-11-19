
// 1. 문제 해결 상세 내용을 위한 타입
export interface ProblemSolution {
    title: string;
    content: string;
}

// 2. 주요 기술(Key Feature) 블록의 이미지 정보 타입
export interface FeatureImage {
    src: string;
    caption: string;
}

// 3. 주요 기술(Key Feature) 블록 타입
export interface KeyFeature {
    id: string;
    featureTitle: string;
    content: string;
    toolsUsed: string[];
    featureImage: FeatureImage;
    problemSolving?: ProblemSolution[];
}

// 4. 상세 이미지(Detail Images) 섹션 타입
export interface DetailImages {
    mainImages: { src: string; caption: string; };
    gallery: { src: string; caption: string; }[];
}

// 5. 프로젝트 상세 정보 (Details) 타입
export interface ProjectDetails {
    description: string;
    keyFeatures: KeyFeature[];
    detailImages: DetailImages;
}


// 6. 프로젝트 개별 아이템의 최종 타입 
export interface ProjectDataType {
    id: string;
    title: string;
    summary: string;
    thumbnail: string;
    isLatest: boolean;
    githubUrl: string;
    websiteUrl: string;
    duration: string;
    categories: string[];
    tools: string[];
    details: ProjectDetails;
}

export const PROJECT_DATA: ProjectDataType[] = [
    {
        // 1. 프로젝트 기본 정보 (공통 및 목록 사용)
        id: 'pokeomon-color-palette', // URL에 사용될 고유 ID (예: 'commerce-renewal')
        title: 'Pokemon Color Palette', // 목록 및 상세 페이지 제목
        summary: '포켓몬 컬러 팔레트 도감',

        // 2. 썸네일 정보
        thumbnail: '/images/projects/pokemon-thumb-img.webp', // 썸네일 이미지 경로
        isLatest: true,
        
        // 3. 외부 링크
        githubUrl: 'https://github.com/ohyeongrong/pokemon-color-palette',
        websiteUrl: 'https://ohyeongrong.github.io/pokemon-color-palette/',

        // 4. 분류 및 개발 기간
        duration: 'October 2025',
        categories: ['Development', 'UI UX' ],
        
        // 5. 사용한 핵심 툴 목록 (ID는 STACK_DATA의 id를 사용)
        // 썸네일 뱃지 목록 및 상세 페이지의 '사용한 툴' 섹션에 사용 섬네일에서는 주요 3개~4개만 보여주기
        tools: ['React', 'TypeScript','Color-thief', 'Axios', 'Zustand', 'GSAP', 'Tailwind CSS', 'Figma'],

        // 6. 상세 페이지 내용
        // '프로젝트 주요 기술/문제점 해결 방안'을 구조화
        details: {
            // 상세 페이지 상단에 들어가는 긴 프로젝트 설명
            description: '포켓몬 API를 활용해 각 포켓몬의 대표 컬러를 추출하고, 시각적으로 보여주는 포켓몬 컬러 팔레트 도감 프로젝트입니다. 이미지 색상 추출, 상태관리, UI/UX, GSAP 애니메이션, 시멘틱 마크업 및 웹 접근성까지 프론트엔드, 디자인 전반의 기술을 직접 구현하며 경험을 쌓았습니다.', 
            
            // 문제점 해결 방안 및 기술적 상세 설명 섹션
            keyFeatures: [
                // 1. 포켓몬 리스트 구현 및 성능 최적화
                {
                    id: 'infinite-scroll-and-optimization',
                    featureTitle: '데이터 비동기 요청 및 무한 스크롤',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'PokeAPI를 통해 포켓몬 데이터를 비동기적으로 로드하고, 디바운싱을 적용하여 스크롤 이벤트의 과도한 호출을 방지하고 불필요한 API 요청을 최소화했습니다. 반응형 그리드로 화면 크기에 따라 카드 수를 유동적으로 조정했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['Axios', 'Zustand', 'TypeScipt', 'GSAP', 'TailWind CSS'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-01-img.gif', 
                        caption: '데이터 비동기 요청 및 무한 스크롤',
                    },
                    problemSolving: [
                    {
                        // 1. 문제 해결 제목 (문제점 또는 목표)
                        title: 'API 데이터 직렬 처리로 인한 느린 렌더링', 
                        // 2. 문제 해결 내용 (해결 방안)
                        content: 'Promise.all() 병렬 요청을 통해 다수 API 요청을 효율적으로 처리하여 초기 로딩 속도를 크게 개선했습니다.',
                    },
                    {
                        title: '반응형 무한 스크롤 렌더링 성능 저하', 
                        content: '스크롤 이벤트에 디바운싱을 적용하고, 화면 크기에 따라 추가 데이터 수를 동적으로 조절했습니다.',
                    },
                ],
                },
                // 2. 이미지 색상 추출 및 데이터 처리
                {
                    id: 'color-extraction-and-caching',
                    featureTitle: '이미지 색상 추출 및 데이터 처리',
                    content: 'Color-Thief 라이브러리를 활용하여 각 이미지에서 대표 컬러 3가지(Primary, Secondary, Accent)를 추출하고, 추출된 RGB 코드를 HEX 코드로 변환하여 사용자에게 시각적으로 제공했습니다. 또한, 성능 최적화를 위해 추출된 컬러 데이터를 Zustand 캐시 상태에 저장하여 재방문 시 중복 연산을 방지했습니다.',
                    toolsUsed: ['Color-thief', 'Zustand', 'TypeScript'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-02-img.gif',
                        caption: '이미지 색상 추출 및 데이터 처리',
                    },
                    problemSolving: [
                    {
                        title: 'Color-Thief 연산 반복으로 인한 성능 저하', 
                        content: '컬러 캐싱(colorCache) 기능을 구현하여 한 번 추출한 데이터는 Zustand 상태에 저장하고 재사용함으로써, 동일 포켓몬 카드 재렌더링 시 불필요한 색상 연산을 제거했습니다.',
                    },
                ],
                },
                // 3. 데이터 탐색 및 필터링 기능
                {
                    id: 'state-management-and-filtering',
                    featureTitle: '데이터 탐색 및 필터링 기능',
                    content: 'Zustand를 통해 필터링 기준, 검색어, 정렬 기준 등 전역 상태를 효율적으로 관리하여 컴포넌트 간의 데이터 흐름을 단순화했습니다. 포켓몬 타입별 필터링, 이름/도감번호 실시간 검색, 자동완성, 정렬 기능 등을 구현하여 사용자에게 직관적인 데이터 탐색 경험을 제공합니다.',
                    toolsUsed: ['Zustand', 'React', 'TypeScript'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-03-img.gif', 
                        caption: '타입 필터링 및 실시간 검색 UI',
                    },
                },
                // 4. GSAP 애니메이션 및 웹 접근성
                {
                    id: 'animation-and-accessibility',
                    featureTitle: '상세 정보 모달 및 애니메이션',
                    content: '카드 클릭 시 모달이 오픈되며 상세 정보를 표시합니다. 카드 플립 애니메이션, 모달 열림/닫힘 전환 효과 등 부드러운 동적 인터랙션을 구현했으며, 모달 오픈 후 배경 클릭 및 닫기 버튼 클릭 시에 닫기 애니메이션을 우선 실행 후 모달을 제거하는 안전한 로직 구현했습니다.',
                    toolsUsed: ['GSAP', 'React'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-04-img.gif', 
                        caption: 'GSAP을 활용한 모달 전환 애니메이션',
                    },
                    problemSolving: [
                    {
                        title: '자식 컴포넌트 DOM에 대한 GSAP 접근 실패', 
                        content: 'GSAP 애니메이션의 대상이 되는 DOM 노드가 자식 컴포넌트 내에 있어 부모 컴포넌트에서 직접 접근이 불가능하여 이를 해결하기 위해 useRef와 forwardRef를 사용하여 DOM 노드를 부모 컴포넌트까지 안전하게 전달하고, GSAP 애니메이션을 처리했습니다.',
                    },
                    {
                        title: '모달 키보드 접근성 개선 (계획)', 
                        content: '모달 오픈 시 키보드 포커스 트랩을 구현하여 포커스가 모달 내부 요소에만 머물도록 개선하며, ESC 키를 이용해 모달을 닫는 기능을 추가 예정입니다.',
                    },
                ],
                },
            ],
            
            // 디테일 페이지에 사용하는 이미지
            detailImages: {
                // 1. 상세 페이지 상단에 노출되는 주요 이미지/목업
                mainImages: { src: '/images/projects/pokemon-main-img.webp', caption: '전체 디자인 목업' },

                // 3. 마지막 하단에 배치되는 갤러리/와이드 이미지 (8장 등)
                gallery: [
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                ]
            },
        }
    },
    {
        // 1. 프로젝트 기본 정보 (공통 및 목록 사용)
        id: 'swim-shopping-mall', // URL에 사용될 고유 ID
        title: 'Swim Shopping Mall', // 목록 및 상세 페이지 제목
        summary: 'React 기반의 개인 쇼핑몰 구현 프로젝트',

        // 2. 썸네일 정보
        thumbnail: '/images/projects/shoppingmall-thumb-img.webp',
        isLatest: true,
        
        // 3. 외부 링크
        githubUrl: 'https://github.com/ohyeongrong/swim-shopping-mall',
        websiteUrl: 'https://ohyeongrong.github.io/swim-shopping-mall',

        // 4. 분류 및 개발 기간
        duration: 'July 2025',
        categories: ['Development', 'UI UX'],
        
        // 5. 사용한 핵심 툴 목록
        tools: ['React', 'Zustand', 'Axios', 'React Router', 'Swiper', 'Tailwind CSS' ], 

        // 6. 상세 페이지 내용
        details: {
            // 상세 페이지 상단에 들어가는 긴 프로젝트 설명
            description: 'React 기반으로 구현한 개인 쇼핑몰 프로젝트로, 상품 탐색 → 장바구니 → 주문/결제 완료에 이르는 실제 커머스 사이클을 처음부터 끝까지 구현하며 React 생태계와 상태 관리, 라우팅, 컴포넌트 설계 경험을 쌓았습니다. Zustand를 활용하여 장바구니, 유저 정보 등 핵심 전역 상태를 관리하고, Tailwind CSS를 이용해 반응형 UI를 구축했습니다.', 
            
            // 문제점 해결 방안 및 기술적 상세 설명 섹션
            keyFeatures: [
                // 1. 커머스 핵심 플로우 구현 및 데이터 처리
                {
                    id: 'ecommerce-flow',
                    featureTitle: '실제 커머스 플로우 구현 및 Mock API 연동',
                    content: '상품 목록부터 상세, 장바구니, 주문/결제에 이르는 전체 쇼핑몰 흐름(End-to-End Flow)을 구현했습니다. Axios를 사용하여 Mock 제품 데이터(JSON)를 비동기 로드했으며, 카테고리/검색 필터링 기능을 통해 데이터 탐색 기능을 제공합니다. 장바구니에서 상품 추가/삭제, 수량 변경, 전체 선택/삭제 등 핵심 로직을 직접 구현했습니다.',
                    toolsUsed: ['React', 'Axios', 'React Router'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-01-img.gif', 
                        caption: '쇼핑몰의 상품 탐색부터 주문 완료까지의 흐름도',
                    },
                    problemSolving: [
                        {
                            title: '데이터 통신 및 상태 관리의 필요성', 
                            content: 'Axios를 사용하여 Mock JSON 데이터를 로드하고, 이 데이터를 컴포넌트 간 효율적으로 공유하기 위해 Zustand를 도입했습니다.',
                        },
                    ],
                },
                // 2. Zustand 기반 핵심 전역 상태 관리
                {
                    id: 'zustand-core-state-management',
                    featureTitle: '핵심 전역 상태 및 인증 관리',
                    content: 'Zustand를 활용하여 장바구니 목록, 찜 기능, 사용자 인증 정보(로그인/회원가입), 리뷰 및 문의글 데이터 등 쇼핑몰 운영에 필수적인 핵심 상태들을 전역적으로 관리했습니다. 이로써 복잡한 Props 없이 컴포넌트들이 필요한 데이터를 직접 구독하여 데이터 흐름을 효율적으로 제어하고, 인증 상태 기반으로 UI 접근 권한을 동적으로 제어했습니다.',
                    toolsUsed: ['Zustand', 'React', 'React Router'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-02-img.gif', 
                        caption: 'Zustand를 이용한 장바구니, 유저, 리뷰 상태 관리 구조',
                    },
                },
                // 3. 리뷰/문의, 검색 필터링
                {
                    id: 'dynamic-data-management',
                    featureTitle: '리뷰 & 문의 시스템 및 검색 필터링 구현',
                    content: '제품별 C.R.U.D. (Create, Read, Update, Delete) 기반의 리뷰 및 문의글 관리 시스템을 구현했습니다. 특히, 전역 상태 관리를 활용하여 사용자 등록 후 데이터 목록이 즉시 갱신 되도록 처리하여 높은 사용자 경험을 제공했습니다. 또한, 상품 목록에서 키워드 기반의 통합 검색 로직을 구현하여 데이터 탐색 효율성을 극대화했습니다.',
                    toolsUsed: ['React', 'Zustand'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-03-img.gif', 
                        caption: '리뷰/문의, 검색 필터링',
                    },
                },
                // 4. 상품 상세페이지 이미지 슬라이드
                {
                    id: 'product-image-slider',
                    featureTitle: '이미지 슬라이더 구현',
                    content: '사용자 경험을 극대화하기 위해 Swiper.js 라이브러리를 적용했습니다. 이를 통해 데스크톱 환경은 물론, 모바일/태블릿 환경에서 터치 기반의 직관적인 이미지 탐색 경험을 제공합니다.',
                    toolsUsed: ['React', 'Swiper'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-04-img.gif', 
                        caption: '상품 이미지 슬라이더 구현',
                    },
                },
            ],
            
            // 디테일 페이지에 사용하는 이미지
            detailImages: {
                mainImages: { src: '/images/projects/shoppingmall-main-img.webp', caption: '쇼핑몰 메인 페이지 및 UI 목업' },

                gallery: [
                    { src: '/images/swim-mall-gallery-1.webp', caption: '상품 목록 및 필터링 기능' },
                    { src: '/images/swim-mall-gallery-2.webp', caption: '상품 상세 페이지 및 옵션 선택' },
                    { src: '/images/swim-mall-gallery-3.webp', caption: '장바구니 구현 (수량/전체 선택 로직)' },
                    { src: '/images/swim-mall-gallery-4.webp', caption: '주문서 작성 및 완료 플로우' },
                    { src: '/images/swim-mall-gallery-5.webp', caption: '로그인 및 회원가입 화면' },
                    { src: '/images/swim-mall-gallery-6.webp', caption: '제품 리뷰 및 문의 등록 기능' },
                    { src: '/images/swim-mall-gallery-7.webp', caption: 'Swiper를 이용한 이미지 슬라이더' },
                    { src: '/images/swim-mall-gallery-8.webp', caption: '모바일 하단 네비게이션 적용' },
                ]
            },
        }
    },
    {
        // 1. 프로젝트 기본 정보 (공통 및 목록 사용)
        id: 'portfolio', // URL에 사용될 고유 ID
        title: 'Personal Portfolio', // 목록 및 상세 페이지 제목
        summary: '개인 포트폴리오',

        // 2. 썸네일 정보
        thumbnail: '/images/projects/portfolio-thumb-img.webp',
        isLatest: true,
        
        // 3. 외부 링크
        githubUrl: '',
        websiteUrl: '',

        // 4. 분류 및 개발 기간
        duration: 'November 2025',
        categories: ['Development', 'UI UX'],
        
        // 5. 사용한 핵심 툴 목록
        tools: ['Next.js', 'TypeScript', 'Matter.js', 'GSAP', 'Motion', 'Swiper', 'Tailwind CSS', 'Figma'], 

        // 6. 상세 페이지 내용
        details: {
            // 상세 페이지 상단에 들어가는 긴 프로젝트 설명
            description: '개인 포트폴리오 웹사이트로, 디자인 경력과 프론트엔드 기술 역량을 함께 보여주는 프로젝트입니다. Next.js 기반의 성능 최적화 환경 위에서 matter.js, GSAP, Motion, Swiper 등 라이브러리를 활용하여 사이트 전반의 UI/UX, 인터랙션, 애니메이션, 반응형 레이아웃, 웹 접근성을 직접 구현하였습니다.', 
            
            // 문제점 해결 방안 및 기술적 상세 설명 섹션
            keyFeatures: [
                // 1. Matter.js 기반 동적 물리 인터랙션
                {
                    id: 'matter-interaction',
                    featureTitle: '동적 물리 인터랙션 구현',
                    content: '브라우저 환경에서 중력, 충돌, 마찰을 구현하는 Matter.js를 활용하여 몰입감 있는 동적 인터랙션을 구현했습니다. Matter.js는 물리 계산만 전담하고, 시각적 표현은 SVG로 분리 및 동기화하여 높은 디자인 자유도를 확보했으며, `window.resize` 이벤트 감지를 통해 반응형 환경에서도 물리 경계를 동적으로 재설정하여 정확성을 유지했습니다.',
                    toolsUsed: ['Matter.js'], 
                    featureImage: { 
                        src: '/images/projects/portfolio-feature-01-img.gif', 
                        caption: '동적 물리 인터랙션 구현',
                    },
                    problemSolving: [
                        {
                            title: 'Matter.js 요소의 반응형 처리 및 시각적 제약', 
                            content: '물리 계산과 시각적 렌더링을 분리하고, 뷰포트 크기 변화 시 물리 엔진과 경계를 동적으로 재계산하여 반응형 환경에서도 정확하고 자연스러운 물리 움직임을 유지했습니다.',
                        },
                    ],
                },
                // 2. GSAP & Motion 애니메이션 역할 분리
                {
                    id: 'animation-separation',
                    featureTitle: '애니메이션 역할 분리 및 최적화',
                    content: '애니메이션의 역할을 분리하여 렌더링 효율을 극대화했습니다. 스크롤 기반의 복잡한 시점 변화 인터랙션은 GSAP의 ScrollTrigger와 ScrollSmoother로 구현했으며, 시간 기반 애니메이션(페이지 전환, 마키 등)은 GSAP으로, Hover/Focus 등 즉각적인 반응이 필요한 UI 인터랙션은 Motion으로 처리했습니다.',
                    toolsUsed: ['GSAP', 'Motion'], 
                    featureImage: { 
                        src: '/images/projects/portfolio-feature-02-img.gif', 
                        caption: '애니메이션 역할 분리 및 최적화',
                    },
                    problemSolving: [
                        {
                            title: 'GSAP ScrollSmoother 적용 시 좌표 왜곡 문제', 
                            content: 'ScrollSmoother 적용 시 발생하는 fixed/sticky 요소의 좌표 왜곡 현상은 충돌 요소를 스크롤러 영향권 밖에 렌더링하고, GSAP pin 속성을 활용하여 해결했습니다. 커스텀 커서의 위치 오차는 CursorContext를 통해 글로벌 좌표를 관리하여 정렬했습니다.',
                        },
                    ],
                },
                // 3. Next.js App Router 기반 성능 최적화
                {
                    id: 'nextjs-optimization',
                    featureTitle: 'Next.js를 활용한 성능 및 최적화',
                    content: 'Next.js의 App Router기반으로 프로젝트를 구성하고, 변동성이 적은 콘텐츠는 SSG로 빌드하여 초기 로딩 속도를 개선했습니다. next/image 컴포넌트를 사용하여 LCP 개선 및 WebP 변환을 자동 적용했으며, 핵심 콘텐츠를 서버에서 정적 렌더링하여 SEO 및 검색 엔진 수집 가능성을 높였습니다.',
                    toolsUsed: ['Next.js'], 
                    featureImage: { 
                        src: '/images/projects/portfolio-feature-03-img.png', 
                        caption: 'Next.js를 활용한 성능 및 최적화',
                    },
                    problemSolving: [
                        {
                            title: '라우팅 시 스크롤 위치 잔존 문제', 
                            content: 'LoadingContext와 라우팅 이벤트를 연동하여 감지하고, 로딩 완료 시점에 GSAP ScrollSmoother 인스턴스를 제어하여 스크롤 위치를 최상단(0)으로 강제 초기화하는 로직을 적용했습니다.',
                        },
                    ],
                },
                // 4. 데이터 구조화, Swiper 슬라이드 적용 및 컴포넌트 구축
                {
                    id: 'data-structure-and-swiper',
                    featureTitle: '데이터 구조화 및 슬라이드 적용',
                    content: '프로젝트 상세 정보(제목, 기술 스택, 이미지 등)를 별도 상수 객체로 분리하여 UI 로직과 데이터를 분리했습니다. 이는 프로젝트 추가/수정 시 코드 수정 없이 데이터만 업데이트하여 유지보수성을 높입니다. 또한, 프로젝트 리스트는 Swiper 라이브러리를 적용하여 모바일/태블릿 환경에 최적화된 터치 기반 슬라이드 경험을 제공하며, Pagination 및 Loop 등의 기능을 활용했습니다.',
                    toolsUsed: ['TypeScript', 'Swiper' ], 
                    featureImage: { 
                        src: '/images/projects/portfolio-feature-04-img.gif', 
                        caption: '데이터 구조화 및 슬라이드 적용',
                    },
                    problemSolving: [
                        {
                            title: '콘텐츠 데이터 관리 시스템 부재 (개선 아이디어)', 
                            content: '현재 프로젝트 데이터가 코드 내 상수 객체로 존재하여 업데이트 시 개발자 개입이 필요했습니다. 향후 Headless CMS를 적용하여 콘텐츠 관리를 분리하고, 빌드 과정 없이 콘텐츠를 업데이트하는 유연성을 확보할 계획입니다.',
                        },
                    ],
                },
            ],
            
            // 디테일 페이지에 사용하는 이미지
            detailImages: {
                mainImages: { src: '/images/projects/portfolio-main-img.webp', caption: '포트폴리오 웹사이트 전체 디자인 목업' },

                gallery: [
                    { src: '/images/portfolio-gallery-1.webp', caption: 'Matter.js 동적 인터랙션' },
                    { src: '/images/portfolio-gallery-2.webp', caption: 'GSAP ScrollTrigger 섹션 전환' },
                    { src: '/images/portfolio-gallery-3.webp', caption: 'Swiper를 활용한 프로젝트 슬라이더' },
                    { src: '/images/portfolio-gallery-4.webp', caption: 'Framer Motion Hover 이펙트' },
                    { src: '/images/portfolio-gallery-5.webp', caption: '반응형 모바일 레이아웃' },
                    { src: '/images/portfolio-gallery-6.webp', caption: 'Next.js Image 최적화 적용 영역' },
                    { src: '/images/portfolio-gallery-7.webp', caption: '시멘틱 마크업 구조' },
                    { src: '/images/portfolio-gallery-8.webp', caption: 'TS 타입 정의 및 구조화' },
                ]
            },
        }
    },
    {
        // 1. 프로젝트 기본 정보 (공통 및 목록 사용)
        id: 'corporate-website-redesign', // URL에 사용될 고유 ID
        title: 'Corporate Website', // 목록 및 상세 페이지 제목
        summary: 'GSAP을 활용한 기업 웹사이트 리디자인',

        // 2. 썸네일 정보
        thumbnail: '/images/projects/corp-web-thumb-img.webp', // 썸네일 이미지 경로 (실제 경로로 변경 필요)
        isLatest: false,
        
        // 3. 외부 링크
        githubUrl: '', // 실제 주소로 변경 필요
        websiteUrl: '', // 실제 주소로 변경 필요

        // 4. 분류 및 개발 기간
        duration: 'June 2025 ', // 실제 기간으로 변경 필요
        categories: ['Publishing', 'UI UX'],
        
        // 5. 사용한 핵심 툴 목록
        tools: ['JavaScript', 'GSAP', 'Swiper', 'HTML', 'Tailwind CSS', 'Figma'], 

        // 6. 상세 페이지 내용
        details: {
            description: '이전에 직접 디자인했던 기업 홈페이지를 선정하여, HTML, Tailwind CSS, JavaScript를 사용하여 직접 코딩하고 구현한 퍼블리싱 프로젝트입니다. GSAP을 활용하여 사용자 경험을 높이는 동적 애니메이션을 다수 적용했으며, 특히 스크롤 기반 인터랙션 구현에 중점을 두어 퍼블리싱 및 애니메이션 구현 역량을 집중적으로 보여줍니다.', 
            
            keyFeatures: [
                // 1. GSAP 기반 스크롤 인터랙션
                {
                    id: 'gsap-scroll-interaction',
                    featureTitle: 'GSAP 기반의 스크롤 및 동적 인터랙션 구현',
                    content: 'GSAP ScrollTrigger를 활용하여 스크롤 위치에 반응하는 동적인 애니메이션을 구현했습니다. ScrollSmoother를 적용하여 페이지 스크롤의 부드러움을 극대화하여 시각적 몰입도를 높였습니다.',
                    toolsUsed: ['GSAP', 'JavaScript'], 
                    featureImage: { 
                        src: '/images/projects/corp-web-feature-01-img.webp', 
                        caption: 'GSAP 기반의 스크롤 및 동적 인터랙션 구현',
                    },
                },
                
                // 2. Swiper를 활용한 슬라이드 및 컴포넌트 구현
                {
                    id: 'swiper-and-component',
                    featureTitle: 'Swiper를 활용한 슬라이드 적용',
                    content: 'News & Media 정보 영역에 Swiper 라이브러리를 적용하여 사용자가 모바일 환경에서는 콘텐츠를 터치 기반으로 쉽게 탐색할 수 있는 슬라이드 기능을 구현했습니다.',
                    toolsUsed: ['Swiper', 'JavaScript'], 
                    featureImage: { 
                        src: '/images/projects/corp-web-feature-02-img.webp', 
                        caption: 'Swiper를 활용한 뉴스레터 섹션 슬라이드 UI',
                    },
                },
                // 3. 반응형 홈페이지 퍼블리싱 및 UI/UX 개선 
                {
                    id: 'corporate-homepage-renewal',
                    featureTitle: '반응형 홈페이지 퍼블리싱 및 UI/UX 개선',
                    content: '기존 디자인을 분석하여 UI를 개선하고, HTML5 시맨틱 마크업과 Tailwind CSS를 사용하여 퍼블리싱을 진행했습니다. PC와 모바일 환경에 완벽하게 대응하는 반응형 레이아웃을 구축하여 사용성을 높였습니다.',
                    toolsUsed: ['HTML', 'CSS', 'Tailwind CSS', 'Figma'], 
                    featureImage: { 
                        src: '/images/projects/corp-web-feature-03-img.webp', 
                        caption: '반응형 홈페이지 퍼블리싱 및 UI/UX 개선',
                    },
                },
            ],
            
            // 디테일 페이지에 사용하는 이미지
            detailImages: {
                mainImages: { src: '/images/projects/corp-web-main-img.webp', caption: '기업 홈페이지 리디자인 메인 이미지' },

                gallery: [
                    { src: '/images/corp-web-gallery-1.webp', caption: 'GSAP ScrollSmoother 적용된 메인 섹션' },
                    { src: '/images/corp-web-gallery-2.webp', caption: 'ScrollTrigger를 활용한 콘텐츠 등장 효과' },
                    { src: '/images/corp-web-gallery-3.webp', caption: 'Swiper 적용된 뉴스레터 슬라이드' },
                    { src: '/images/corp-web-gallery-4.webp', caption: 'Tailwind CSS 기반 Header/Footer' },
                    { src: '/images/corp-web-gallery-5.webp', caption: '메인 페이지 전체 레이아웃' },
                    { src: '/images/corp-web-gallery-6.webp', caption: '기업 소개 섹션 애니메이션' },
                    { src: '/images/corp-web-gallery-7.webp', caption: 'Contact us 페이지 UI' },
                    { src: '/images/corp-web-gallery-8.webp', caption: '사용된 HTML5 시맨틱 구조' },
                ]
            },
        }
    },
];

import { features } from "process";

export const PROJECT_DATA = [
    {
        // 1. 프로젝트 기본 정보 (공통 및 목록 사용)
        id: 'pokeomon', // URL에 사용될 고유 ID (예: 'commerce-renewal')
        title: 'Pokemon Color Palette', // 목록 및 상세 페이지 제목
        summary: '포켓몬 컬러 팔레트 도감',

        // 2. 썸네일 정보
        thumbnail: '/images/about-design-img-4.webp', // 썸네일 이미지 경로
        isLatest: true,
        
        // 3. 외부 링크
        githubUrl: 'https://github.com/your-repo/project-a',
        websiteUrl: 'https://project-a.vercel.app',

        // 4. 분류 및 개발 기간
        duration: 'October 2025',
        categories: ['Development', 'UI UX' ],
        
        // 5. 사용한 핵심 툴 목록 (ID는 STACK_DATA의 id를 사용)
        // 썸네일 뱃지 목록 및 상세 페이지의 '사용한 툴' 섹션에 사용 섬네일에서는 주요 3개~4개만 보여주기
        tools: ['React', 'TypeScipt', 'Color-thief', 'GSAP', 'Zustand', 'Tailwind CSS', 'Figma'], 

        // 6. 상세 페이지 내용
        // '프로젝트 주요 기술/문제점 해결 방안'을 구조화
        details: {
            // 상세 페이지 상단에 들어가는 긴 프로젝트 설명
            description: '포켓몬 API를 활용해 각 포켓몬의 대표 컬러를 추출하고, 시각적으로 보여주는 포켓몬 컬러 팔레트 도감 프로젝트입니다. 이미지 색상 추출, 상태관리, UI/UX, GSAP 애니메이션, 시멘틱 마크업 및 웹 접근성까지 프론트엔드, 디자인 전반의 기술을 직접 구현하며 경험을 쌓았습니다.', 
            
            // 문제점 해결 방안 및 기술적 상세 설명 섹션
            keyFeatures: [
                {
                    id: 'infinite-scroll',
                    featureTitle: '데이터 비주얼라이제이션',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'PokeAPI를 통해 포켓몬 데이터를 비동기적으로 로드하고, 디바운싱을 적용한 무한 스크롤로 성능을 최적화했습니다. Tailwind CSS 기반의 반응형 그리드로 화면 크기에 따라 카드 수를 유동적으로 조정하며, GSAP을 활용해 PC에서는 마우스 오버, 모바일에서는 터치 시 카드 플립 애니메이션이 작동하도록 구현했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['Axios', 'Zustand', 'TypeScipt', 'GSAP', 'TailWind CSS'], 
                    featureImage: { 
                        src: '/images/about-design-img-2.webp', 
                        caption: 'Intersection Observer 작동 원리',
                    },
                    problemSolving: [
                    {
                        // 1. 문제 해결 제목 (문제점 또는 목표)
                        title: '초기 로딩 속도 및 비동기 처리 문제', 
                        // 2. 문제 해결 내용 (해결 방안)
                        content: 'Promise.all() 병렬 요청을 통해 다수 API 요청을 효율적으로 처리하여 초기 로딩 속도를 크게 개선했습니다.',
                    },
                    {
                        title: '반응형 무한 스크롤 렌더링 성능 저하', 
                        content: '스크롤 이벤트에 디바운싱을 적용하고, 화면 크기에 따라 추가 데이터 수를 동적으로 조절했습니다.',
                    },
                ],
                },
            ],
            
            // 디테일 페이지에 사용하는 이미지
            detailImages: {
                // 1. 상세 페이지 상단에 노출되는 주요 이미지/목업
                mainImages: { src: '/images/about-design-img-1.webp', caption: '전체 디자인 목업' },

                // 3. 마지막 하단에 배치되는 갤러리/와이드 이미지 (8장 등)
                gallery: [
                    { src: '/images/about-design-img-4.webp', caption: '다양한 화면구성' },
                    { src: '/images/about-design-img-4.webp', caption: '...'},
                    // ... (총 8장)
                ]
            },
        }
    },
    
];

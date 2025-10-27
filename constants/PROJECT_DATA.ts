export const PROJECT_DATA = [
    {
        // 1. 프로젝트 기본 정보 (공통 및 목록 사용)
        id: 'project-a-slug', // URL에 사용될 고유 ID (예: 'commerce-renewal')
        title: 'Project Title', // 목록 및 상세 페이지 제목
        summary: '포켓몬 컬러 팔레트 도감',

        // 2. 썸네일 정보
        thumbnail: '/images/about-design-img-4.webp', // 썸네일 이미지 경로
        isLatest: true,
        
        // 3. 외부 링크
        githubUrl: 'https://github.com/your-repo/project-a',
        websiteUrl: 'https://project-a.vercel.app',

        // 4. 분류 및 개발 기간
        duration: '2024.08 ~ 2024.10',
        categories: ['UI UX', 'Development'],
        
        // 5. 사용한 핵심 툴 목록 (ID는 STACK_DATA의 id를 사용)
        // 썸네일 뱃지 목록 및 상세 페이지의 '사용한 툴' 섹션에 사용
        tools: ['Next.js', 'React', 'Ts', 'Tailwind', 'Figma'], 

        // 6. 상세 페이지 내용
        // '프로젝트 주요 기술/문제점 해결 방안'을 구조화
        details: {
            // 상세 페이지 상단에 들어가는 긴 프로젝트 설명
            description: '이 프로젝트는 OOO 문제를 해결하기 위해 ...', 
            
            // 문제점 해결 방안 및 기술적 상세 설명 섹션
            keyFeatures: [
                {
                    id: 'infinite-scroll-diagram',
                    featureTitle: '고성능 무한 스크롤 구현',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'Intersection Observer와 React Query(또는 SWR)를 결합하여, DOM 부하와 불필요한 API 요청을 최소화하고 렌더링 성능을 극대화했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['react', 'ts'], 
                    problemSolving: [
                    {
                        // 1. 문제 해결 제목 (문제점 또는 목표)
                        title: 'DOM 부하 및 성능 저하 문제 해결', 
                        // 2. 문제 해결 내용 (해결 방안)
                        content: 'Intersection Observer를 사용하여 뷰포트 외부의 컴포넌트 렌더링을 지연시키고, React Query의 캐싱 기능을 활용하여 API 요청 횟수를 획기적으로 줄였습니다.',
                    },
                    {
                        title: '데이터 무결성 유지 및 상태 관리 간소화', 
                        content: 'SWR(Stale-While-Revalidate)을 도입하여 서버 상태와 로컬 캐시를 분리하고, 전역 상태 없이 데이터 동기화를 자동화하여 코드 복잡성을 낮추었습니다.',
                    },
                ],
                },
                {
                    id: 'infinite-scroll-diagram',
                    featureTitle: 'GSAP 기반의 인터랙티브 UI',
                    content: 'GSAP ScrollTrigger를 활용하여 사용자의 스크롤 이벤트에 맞춰 요소가 동적으로 등장 및 사라지는 효과를 구현하여 사용자 경험을 향상시켰습니다.',
                    toolsUsed: ['gsap', 'html', 'css'],
                },
            ],
            
            // 디테일 페이지에 사용하는 이미지
            detailImages: {
                // 1. 상세 페이지 상단에 노출되는 주요 이미지/목업
                mainImages: [
                    { src: '/images/project-a-detail-1.webp', caption: '전체 디자인 목업' },
                    { src: '/images/project-a-detail-2.webp', caption: '기술 구조 다이어그램' },
                ],
                
                // 2. keyFeatures 설명 중간에 들어가는 기능별 이미지
                // keyFeatures의 제목과 이미지를 매칭하기 위한 식별자(id)가 있으면 좋습니다.
                featureImages: [
                    { 
                        id: 'infinite-scroll-diagram', // 이 ID를 keyFeatures 쪽에서 참조 가능
                        src: '/images/feature-scroll.webp', 
                        caption: 'Intersection Observer 작동 원리',
                    },
                    { 
                        id: 'gsap-animation-example',
                        src: '/images/feature-gsap.webp', 
                        caption: 'GSAP 애니메이션 예시',
                    },
                ],
                
                // 3. 마지막 하단에 배치되는 갤러리/와이드 이미지 (8장 등)
                gallery: [
                    { src: '/images/gallery-1.webp', caption: '다양한 화면구성' },
                    { src: '/images/gallery-2.webp', caption: '...'},
                    // ... (총 8장)
                ]
            },
        }
    },
    
];

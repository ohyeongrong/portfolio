
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
    codeView?: { src: string; };
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
                // 1. 비동기 요청 및 성능 최적화
                {
                    id: 'api-optimization',
                    featureTitle: '비동기 요청 및 성능 최적화',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'PokeAPI를 통해 포켓몬 데이터를 비동기적으로 로드하고, 조회된 타입 정보를 캐싱하여 중복 API 요청을 방지하고 초기 로딩 속도를 크게 개선했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['Axios', 'Zustand', 'TypeScipt'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-01-img.gif', 
                        caption: '비동기 요청 및 성능 최적화',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%25201.%2520%25EB%258B%25A4%25EC%2588%2598%25EC%259D%2598%2520%25EC%2583%2581%25EC%2584%25B8%2520%25EC%25A0%2595%25EB%25B3%25B4%2520%25EC%259A%2594%25EC%25B2%25AD%25EC%259D%2584%2520Promise.all%28%29%25EB%25A1%259C%2520%25EB%25B3%2591%25EB%25A0%25AC%2520%25EC%25B2%2598%25EB%25A6%25AC%250Aconst%2520detailResponses%2520%253D%2520await%2520Promise.all%28%250A%2520%2520%2520%2520pokemonList.map%28%28p%2520%253A%257B%2520url%253Astring%2520%257D%29%2520%253D%253E%2520axiosInstance.get%28p.url%29%29%250A%29%253B%250A%250Aconst%2520typeCache%253A%2520TypeCache%2520%253D%2520%257B%257D%253B%250A%250A%252F%252F%25202.%2520%25ED%2583%2580%25EC%259E%2585%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EC%25B2%2598%25EB%25A6%25AC%25ED%2595%2598%25EB%258A%2594%2520%25EA%25B3%25BC%25EC%25A0%2595%25EC%2597%2590%25EC%2584%259C%2520%25EC%25BA%2590%25EC%258B%25B1%2520%25EB%25A1%259C%25EC%25A7%2581%2520%25EC%25A0%2581%25EC%259A%25A9%250Aconst%2520types%2520%253D%2520await%2520Promise.all%28%250A%2520%2520%2520%2520detailData.types.map%28async%2520%28typeInfo%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520enType%2520%253D%2520typeInfo.type.name%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25EC%25BA%2590%25EC%258B%25B1%2520%25EB%25A1%259C%25EC%25A7%2581%253A%2520%25EC%259D%25B4%25EB%25AF%25B8%2520%25EC%25BA%2590%25EC%258B%259C%25EC%2597%2590%2520%25EC%259E%2588%25EC%259C%25BC%25EB%25A9%25B4%2520API%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EC%2583%259D%25EB%259E%25B5%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28typeCache%255BenType%255D%29%2520return%2520typeCache%255BenType%255D%253B%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520typeRes%2520%253D%2520await%2520axiosInstance.get%28typeInfo.type.url%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%25B6%2594%25EC%25B6%259C%2520%25EB%25B0%258F%2520typeCache%25EC%2597%2590%2520%25EC%25A0%2580%25EC%259E%25A5%29%2520...%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520typeObj%253B%250A%2520%2520%2520%2520%257D%29%250A%29%253B'
                    },
                    problemSolving: [
                    {
                        // 1. 문제 해결 제목 (문제점 또는 목표)
                        title: '데이터 직렬 처리로 인한 초기 렌더링 지연', 
                        // 2. 문제 해결 내용 (해결 방안)
                        content: 'Promise.all() 병렬 요청과 클라이언트 측 캐싱 전략을 도입하여 다수 API 요청을 효율적으로 처리함으로써, 초기 로딩 시간을 단축했습니다.',
                    },
                ],
                },
                // 2. 반응형 무한 스크롤 및 렌더링 최적화
                {
                    id: 'infinite-scroll-ux-optimization',
                    featureTitle: '반응형 무한 스크롤 및 렌더링 최적화',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'IntersectionObserver를 활용해 무한 스크롤 기능을 구현했습니다. 스크롤 및 리사이즈 이벤트에 디바운싱을 적용하고, 화면 크기에 따라 로드하는 카드 수를 동적으로 조절하여 불필요한 API 요청과 렌더링 성능 저하를 최소화했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['React', 'Zustand', 'TypeScipt'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-02-img.gif', 
                        caption: '반응형 무한 스크롤 및 렌더링 최적화',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EB%2594%2594%25EB%25B0%2594%25EC%259A%25B4%25EC%258A%25A4%2520%25ED%2595%25A8%25EC%2588%2598%2520%25EC%25A0%2595%25EC%259D%2598%2520%28%25EC%259D%25B4%25EB%25B2%25A4%25ED%258A%25B8%2520%25EA%25B3%25BC%25ED%2598%25B8%25EC%25B6%259C%2520%25EB%25B0%25A9%25EC%25A7%2580%29%250Afunction%2520debounce%253CT%2520extends%2520%28...args%253A%2520any%255B%255D%29%2520%253D%253E%2520void%253E%28func%253A%2520T%252C%2520delay%253A%2520number%29%2520%257B%250A%2520%2520%2520%2520let%2520timeoutId%253A%2520ReturnType%253Ctypeof%2520setTimeout%253E%253B%250A%2520%2520%2520%2520return%2520function%2520%28this%253A%2520ThisParameterType%253CT%253E%252C%2520...args%253A%2520Parameters%253CT%253E%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520clearTimeout%28timeoutId%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520timeoutId%2520%253D%2520setTimeout%28%28%29%2520%253D%253E%2520func.apply%28this%252C%2520args%29%252C%2520delay%29%253B%250A%2520%2520%2520%2520%257D%253B%250A%257D%250A%250A%252F%252F%2520IntersectionObserver%25EB%25A5%25BC%2520%25EC%259D%25B4%25EC%259A%25A9%25ED%2595%259C%2520%25EB%25AC%25B4%25ED%2595%259C%2520%25EC%258A%25A4%25ED%2581%25AC%25EB%25A1%25A4%2520%25ED%258A%25B8%25EB%25A6%25AC%25EA%25B1%25B0%250AuseEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520observer%2520%253D%2520new%2520IntersectionObserver%2520%28%2520entries%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28entries%255B0%255D%253F.isIntersecting%2520%2526%2526%2520%21loading%2520%2526%2526%2520hasMore%29%257B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520loadMore%28%29%253B%2520%252F%252F%2520%25EB%25A1%259C%25EB%258D%2594%2520%25EC%259A%2594%25EC%2586%258C%25EA%25B0%2580%2520%25ED%2599%2594%25EB%25A9%25B4%25EC%2597%2590%2520%25EB%25B3%25B4%25EC%259D%25BC%2520%25EB%2595%258C%25EB%25A7%258C%2520%25EC%258B%25A4%25ED%2596%2589%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%2520%252C%257B%2520threshold%253A%25201%2520%257D%29%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520if%28loaderRef.current%29%2520observer.observe%28loaderRef.current%29%253B%250A%2520%2520%2520%2520%252F%252F%2520...%2520%28Clean-up%2520%25ED%2595%25A8%25EC%2588%2598%2520%25EC%2583%259D%25EB%259E%25B5%29%2520...%250A%257D%252C%255BloadMore%252C%2520loading%252C%2520hasMore%255D%29%253B'
                    },
                    problemSolving: [
                    {
                        title: '스크롤 이벤트 과호출 및 불필요한 API 요청', 
                        content: 'IntersectionObserver를 사용하여 스크롤 이벤트 대신 타겟 요소의 가시성 변화로 API를 호출하여 성능을 개선했으며, 리사이즈 이벤트에 Debounce를 적용하여 불필요한 함수 호출을 제어했습니다.',
                    },
                ],
                },
                // 3. 이미지 색상 추출 및 데이터 처리
                {
                    id: 'color-extraction-and-caching',
                    featureTitle: '이미지 색상 추출 및 캐시 최적화',
                    content: 'Color-Thief 라이브러리를 활용하여 각 이미지에서 대표 컬러 3가지(Primary, Secondary, Accent)를 추출하여 적용했습니다. 특히, Zustand를 활용한 컬러 캐싱을 구현하여 재렌더링 시 불필요한 이미지 연산을 제거함으로써 성능을 최적화했습니다.',
                    toolsUsed: ['Color-thief', 'Zustand', 'TypeScript'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-03-img.gif',
                        caption: '이미지 색상 추출 및 캐시 최적화',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=const%2520fetchColors%2520%253D%2520useCallback%28%28%29%2520%253D%253E%2520%257B%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520%25EC%25BA%2590%25EC%258B%259C%2520%25ED%2599%2595%25EC%259D%25B8%253A%2520%25EC%259D%25B4%25EB%25AF%25B8%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EA%25B0%2580%2520%25EC%259E%2588%25EC%259C%25BC%25EB%25A9%25B4%2520%25EC%2583%2581%25ED%2583%259C%2520%25EC%2584%25A4%25EC%25A0%2595%2520%25ED%259B%2584%2520%25EB%25B0%2594%25EB%25A1%259C%2520%25EC%25A2%2585%25EB%25A3%258C%250A%2520%2520%2520%2520if%2520%28colorCache%255BpokemonId%255D%29%2520%257B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520setColors%28colorCache%255BpokemonId%255D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%252F%252F%25202.%2520%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25EB%25A5%25BC%2520%25EB%25A1%259C%25EB%2593%259C%25ED%2595%2598%25EA%25B3%25A0%2520ColorThief%2520%25EA%25B0%259D%25EC%25B2%25B4%2520%25EC%2583%259D%25EC%2584%25B1%2520%28%25EC%25BA%2590%25EC%258B%259C%25EC%2597%2590%2520%25EC%2597%2586%25EC%259D%2584%2520%25EB%2595%258C%25EB%25A7%258C%2520%25EC%258B%25A4%25ED%2596%2589%29%250A%2520%2520%2520%2520const%2520img%2520%253D%2520new%2520Image%28%29%250A%2520%2520%2520%2520img.crossOrigin%2520%253D%2520%2522Anonymous%2522%250A%2520%2520%2520%2520img.src%2520%253D%2520imageUrl%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520img.onload%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520const%2520colorThief%2520%253D%2520new%2520ColorThief%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%25202.%2520%25EA%25B3%25A0%25EB%25B9%2584%25EC%259A%25A9%2520%25EC%2597%25B0%25EC%2582%25B0%253A%2520Color-Thief%25EB%25A1%259C%2520%25EC%2583%2589%25EC%2583%2581%2520%25EC%25B6%2594%25EC%25B6%259C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520const%2520palette%2520%253D%2520colorThief.getPalette%28img%252C%25203%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520const%2520hexColors%2520%253D%2520palette.map%28rgbToHex%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520setColors%28hexColors%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25203.%2520%25EC%25BA%2590%25EC%258B%259C%2520%25EC%25A0%2580%25EC%259E%25A5%253A%2520%25EC%2583%2588%25EB%25A1%259C%2520%25EC%25B6%2594%25EC%25B6%259C%25ED%2595%259C%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520Zustand%2520%25EC%25BA%2590%25EC%258B%259C%25EC%2597%2590%2520%25EC%25A0%2580%25EC%259E%25A5%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520setColorCache%28pokemonId%252C%2520hexColors%29%253B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%253B%250A%257D%252C%2520%255BpokemonId%252C%2520imageUrl%252C%2520colorCache%252C%2520setColorCache%255D%29%253B'
                    },
                    problemSolving: [
                    {
                        title: 'Color-Thief 연산 반복으로 인한 성능 저하', 
                        content: '컬러 캐시(colorCache) 기능을 구현하여 한 번 추출한 데이터는 Zustand 상태에 저장하고 재사용함으로써, 동일 포켓몬 카드 재렌더링 시 추출 연산 없이 즉시 컬러를 적용하도록 해결했습니다.',
                    },
                ],
                },
                // 4. 데이터 탐색 및 필터링 기능
                {
                    id: 'state-management-and-filtering',
                    featureTitle: '데이터 탐색 및 필터링 기능',
                    content: 'Zustand를 통해 필터링 기준, 검색어, 정렬 기준 등 전역 상태를 효율적으로 관리하여 컴포넌트 간의 데이터 흐름을 단순화했습니다. 포켓몬 타입별 필터링, 이름/도감번호 실시간 검색, 자동완성, 정렬 기능 등을 구현하여 사용자에게 직관적인 데이터 탐색 경험을 제공합니다.',
                    toolsUsed: ['Zustand', 'React', 'TypeScript'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-04-img.gif', 
                        caption: '타입 필터링 및 실시간 검색 UI',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EC%259E%2590%25EB%258F%2599%25EC%2599%2584%25EC%2584%25B1%2520%25ED%2582%25A4%25EC%259B%258C%25EB%2593%259C%25EB%25B3%2584%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%2520%25EB%25B3%2580%25EA%25B2%25BD%250AgetSearchSuggestions%2520%253A%2520%28keyword%29%2520%253D%253E%2520%257B%250A%250A%2520%2520%2520%2520const%2520trimmedKeyword%2520%253D%2520keyword.trim%28%29.replace%28%252F%255Cs%252B%252Fg%252C%2520%2522%2522%29%253B%250A%250A%2520%2520%2520%2520if%28%21trimmedKeyword%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520set%28%257B%2520searchSuggestions%253A%2520%255B%255D%2520%257D%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%252F%252F%2520%25EC%259D%25B4%25EB%25A6%2584%2520%25EB%2598%2590%25EB%258A%2594%2520%25EB%258F%2584%25EA%25B0%2590%2520%25EB%25B2%2588%25ED%2598%25B8%25EB%25A1%259C%2520%25EA%25B2%2580%25EC%2583%2589%250A%2520%2520%2520%2520const%2520suggestions%2520%253D%2520get%28%29.allPokemonList.filter%28%28pokemon%29%2520%253D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520pokemon.name.includes%28trimmedKeyword%29%2520%257C%257C%250A%2520%2520%2520%2520%2520%2520%2520%2520pokemon.id.toString%28%29.includes%28trimmedKeyword%29%2520%250A%2520%2520%2520%2520%29%253B%250A%250A%2520%2520%2520%2520%252F%252F%2520%25EC%259E%2590%25EB%258F%2599%25EC%2599%2584%25EC%2584%25B1%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%25EB%25A5%25BC%2520%25EC%2583%2581%25EC%259C%2584%25205%25EA%25B0%259C%25EB%25A1%259C%2520%25EC%25A0%259C%25ED%2595%259C%250A%2520%2520%2520%2520set%28%257B%2520searchSuggestions%2520%253A%2520suggestions.slice%280%252C%25205%29%2520%257D%29%250A%257D%252C'
                    },
                },
                // 5. GSAP 애니메이션 및 웹 접근성
                {
                    id: 'animation-and-accessibility',
                    featureTitle: '동적 모달 전환 및 안전한 DOM 관리',
                    content: 'GSAP을 활용하여 모달의 열림/닫힘 시 스케일 전환 애니메이션**을 부드럽게 구현했습니다. 특히, 모달의 배경 클릭 및 버튼 클릭 이벤트 발생 시 닫기 애니메이션을 먼저 실행하고, 애니메이션 완료 후 Zustand 상태를 업데이트하여 모달 컴포넌트를 안전하게 제거하는 로직을 구축했습니다.',
                    toolsUsed: ['GSAP', 'React', 'zustand'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-05-img.gif', 
                        caption: '동적 모달 전환 및 안전한 DOM 관리',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%2599%2584%25EB%25A3%258C%2520%25ED%259B%2584%2520%25EC%2583%2581%25ED%2583%259C%2520%25EC%25A0%259C%25EA%25B1%25B0%250Aconst%2520handleCloseWithAnimation%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520if%2520%28%21contentRef.current%29%2520%257B%2520closeModal%28%29%253B%2520return%253B%2520%257D%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25EB%258B%25AB%25EA%25B8%25B0%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%250A%2520%2520%2520%2520gsap.fromTo%28contentRef.current%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520Start%253A%2520%25EB%25B3%25B4%25EC%259D%25B4%25EB%258A%2594%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520End%253A%2520%25EC%2582%25AC%25EB%259D%25BC%25EC%25A7%2580%25EB%258A%2594%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25E2%25AD%2590%25EF%25B8%258F%2520%25ED%2595%25B5%25EC%258B%25AC%253A%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%2599%2584%25EB%25A3%258C%2520%25ED%259B%2584%2520Zustand%2520%25EC%2583%2581%25ED%2583%259C%2520%25EB%25B3%2580%25EA%25B2%25BD%2520%28DOM%2520Unmount%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520onComplete%253A%2520closeModal%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%29%253B%250A%257D%253B%250A%250A%252F%252F%2520%25EC%259E%2590%25EC%258B%259D%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%2520DOM%25EC%2597%2590%2520%25EC%25A0%2591%25EA%25B7%25BC%2520%25EB%25B0%258F%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%25A0%2581%25EC%259A%25A9%250AuseEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520refObject%2520%253D%2520contentRef%2520as%2520React.RefObject%253CHTMLDivElement%253E%253B%2520%250A%250A%2520%2520%2520%2520if%2520%28refObject.current%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25EC%2597%25B4%25EB%25A6%25BC%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%25A0%2581%25EC%259A%25A9%250A%2520%2520%2520%2520%2520%2520%2520%2520gsap.fromTo%28refObject.current%252C%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520Start%253A%2520%25EC%2582%25AC%25EB%259D%25BC%25EC%25A7%2584%2520%25EC%2583%2581%25ED%2583%259C%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520End%253A%2520%25EB%2582%2598%25ED%2583%2580%25EB%2582%2598%25EB%258A%2594%2520%25EC%2583%2581%25ED%2583%259C%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%252C%2520%255BcontentRef%255D%29%253B'
                    },
                    problemSolving: [
                    {
                        title: '자식 컴포넌트 내부 DOM에 대한 GSAP 직접 접근 문제', 
                        content: 'GSAP 애니메이션의 대상이 되는 모달 콘텐츠 DOM이 자식 컴포넌트에 위치해 있어 직접 제어가 불가능했습니다. 이를 해결하기 위해 부모에서 전달한 useRef객체를 자식 컴포넌트에 prop으로 전달하여, DOM 노드에 안전하게 접근하고 애니메이션을 적용했습니다.',
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
                // 1. 쇼핑몰 전체 흐름 구현
                {
                    id: 'ecommerce-flow',
                    featureTitle: '쇼핑몰 전체 흐름 구현',
                    content: '상품 목록, 상세, 장바구니, 주문/결제, 마이페이지에 이르는 쇼핑몰의 모든 핵심 경로를 React Router로 정의했습니다. Layout 컴포넌트를 사용하여 공통 UI를 구성하고 중첩 라우팅을 적용하여 코드를 효율적으로 관리했습니다. 특히, 동적 라우팅을 통해 상세 페이지를 구현하고, <ProtectedRoute>를 활용해 인증 기반의 접근 권한을 제어하는 등 실제 커머스 환경에 준하는 라우팅 시스템을 구축했습니다.',
                    toolsUsed: ['React Router', 'React'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-01-img.gif', 
                        caption: '쇼핑몰 전체 흐름 구현',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%253CRoutes%253E%250A%2520%2520%2520%2520%253CRoute%2520element%253D%257B%253CLayout%252F%253E%257D%253E%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520Layout%25EC%259D%2584%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%259C%2520%25EC%25A4%2591%25EC%25B2%25A9%2520%25EB%259D%25BC%25EC%259A%25B0%25ED%258C%2585%2520%28%25EA%25B3%25B5%25ED%2586%25B5%2520UI%2520%25EA%25B4%2580%25EB%25A6%25AC%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252F%27%2520element%2520%253D%257B%253CHome%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25F0%259F%2592%25A1%25202.%2520%25EB%258F%2599%25EC%25A0%2581%2520%25EB%259D%25BC%25EC%259A%25B0%25ED%258C%2585%253A%2520%25EC%25A0%259C%25ED%2592%2588%2520ID%25EB%25A5%25BC%2520URL%2520%25ED%258C%258C%25EB%259D%25BC%25EB%25AF%25B8%25ED%2584%25B0%25EB%25A1%259C%2520%25EC%2582%25AC%25EC%259A%25A9%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252Fproduct%252F%253AprdId%27%2520element%2520%253D%257B%253CProduct%252F%253E%257D%2520%252F%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25F0%259F%2592%25A1%25203.%2520%25EC%259D%25B8%25EC%25A6%259D%2520%25ED%2595%2584%25EC%2588%2598%2520%25EA%25B2%25BD%25EB%25A1%259C%253A%2520%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8%25EB%2590%259C%2520%25EC%2582%25AC%25EC%259A%25A9%25EC%259E%2590%25EB%25A7%258C%2520%25EC%25A0%2591%25EA%25B7%25BC%2520%25ED%2597%2588%25EC%259A%25A9%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252Fmypage%27%2520element%253D%257B%253CProtectedRoute%253E%253CMypage%252F%253E%253C%252FProtectedRoute%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25EC%25A3%25BC%25EB%25AC%25B8%2520%25EB%25B0%258F%2520%25EA%25B2%25B0%25EC%25A0%259C%2520%25ED%259D%2590%25EB%25A6%2584%25EC%259D%2598%2520%25ED%2595%25B5%25EC%258B%25AC%2520%25EA%25B2%25BD%25EB%25A1%259C%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252Forder%27%2520element%253D%257B%253COrder%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252FOrderComplete%27%2520element%253D%257B%253COrderComplete%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520...%2520%28%25EB%2582%2598%25EB%25A8%25B8%25EC%25A7%2580%2520%25EA%25B2%25BD%25EB%25A1%259C%29%2520...%2520*%252F%257D%250A%2520%2520%2520%2520%253C%252FRoute%253E%250A%2520%2520%2520%2520%257B%252F*%2520%25EC%2597%2590%25EB%259F%25AC%2520%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580%25EB%25A5%25BC%2520%25ED%2586%25B5%25ED%2595%259C%2520UX%2520%25EA%25B0%259C%25EC%2584%25A0%2520*%252F%257D%250A%2520%2520%2520%2520%253CRoute%2520path%253D%27*%27%2520element%253D%257B%27error%27%257D%2520%252F%253E%2520%250A%253C%252FRoutes%253E'
                    },
                },
                // 2. Mock API 연동 및 초기 데이터 관리
                {
                    id: 'zustand-modular-design',
                    featureTitle: 'Mock API 연동 및 초기 데이터 관리',
                    content: '제품 데이터를 Axios를 사용하여 Mock JSON API로부터 비동기적으로 로드했습니다. 로드 성공 후, Zustand Store의 액션을 통해 해당 데이터를 전역 상태에 저장했습니다. 이 초기 데이터 공급 과정을 통해 검색, 필터링, 상세 정보 조회 등 후속 데이터 처리의 기반을 마련하고, 컴포넌트 간 효율적인 데이터 공유를 가능하게 했습니다.',
                    toolsUsed: ['Axios', 'Zustand', 'React'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-02-img.gif', 
                        caption: 'Mock API 연동 및 초기 데이터 관리',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Axios%2520%25EB%25B9%2584%25EB%258F%2599%25EA%25B8%25B0%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EB%25B0%258F%2520Zustand%2520%25EC%2597%2585%25EB%258D%25B0%25EC%259D%25B4%25ED%258A%25B8%250AuseEffect%28%28%29%253D%253E%257B%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520Axios%25EB%25A5%25BC%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%259C%2520%25EB%25B9%2584%25EB%258F%2599%25EA%25B8%25B0%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%259A%2594%25EC%25B2%25AD%250A%2520%2520%2520%2520axios.get%28%27%252Fswim-shopping-mall%252Fdata%252FswimwearProducts.json%27%29%250A%2520%2520%2520%2520.then%28response%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EC%2584%25B1%25EA%25B3%25B5%2520%25EC%258B%259C%252C%2520Zustand%2520%25EC%2595%25A1%25EC%2585%2598%25EC%259D%2584%2520%25ED%2598%25B8%25EC%25B6%259C%25ED%2595%2598%25EC%2597%25AC%2520%25EC%25A0%2584%25EC%2597%25AD%2520%25EC%2583%2581%25ED%2583%259C%2520%25EC%2597%2585%25EB%258D%25B0%25EC%259D%25B4%25ED%258A%25B8%250A%2520%2520%2520%2520%2520%2520%2520%2520addProducts%28response.data%29%253B%2520%250A%2520%2520%2520%2520%257D%29%250A%2520%2520%2520%2520.catch%28error%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520console.error%28%27%25F0%259F%259A%25A8%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EC%258B%25A4%25ED%258C%25A8%253A%27%252C%2520error.message%29%253B%2520%250A%2520%2520%2520%2520%257D%29%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25EC%259D%2598%25EC%25A1%25B4%25EC%2584%25B1%2520%25EB%25B0%25B0%25EC%2597%25B4%28dependency%2520array%29%25EC%259D%25B4%2520%25EB%25B9%2584%25EC%2596%25B4%2520%25EC%259E%2588%25EC%2596%25B4%2520%25EB%25A7%2588%25EC%259A%25B4%25ED%258A%25B8%2520%25EC%258B%259C%25201%25ED%259A%258C%25EB%25A7%258C%2520%25EC%258B%25A4%25ED%2596%2589%25EB%2590%25A8%250A%257D%252C%255B%255D%29%250A%250A%252F%252F%2520Zustand%2520Store%25EC%259D%2598%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EA%25B5%25AC%25EC%25A1%25B0%2520%25EB%25B0%258F%2520%25EC%2595%25A1%25EC%2585%2598%2520%25EC%25A0%2595%25EC%259D%2598%250Aconst%2520useProdcutStore%2520%253D%2520create%28%28set%252C%2520get%29%2520%253D%253E%2520%28%257B%250A%250A%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520%25EC%25A0%259C%25ED%2592%2588%2520%25EB%25AA%25A9%25EB%25A1%259D%25EC%259D%2584%2520%25EC%25A0%2580%25EC%259E%25A5%25ED%2595%25A0%2520%25EC%25B4%2588%25EA%25B8%25B0%2520%25EC%2583%2581%25ED%2583%259C%250A%2520%2520productsList%2520%253A%2520%255B%255D%252C%250A%250A%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520%25EC%2599%25B8%25EB%25B6%2580%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EB%25B0%259B%25EC%2595%2584%2520%25EC%2583%2581%25ED%2583%259C%25EB%25A5%25BC%2520%25EC%2584%25A4%25EC%25A0%2595%25ED%2595%2598%25EB%258A%2594%2520%25EC%2595%25A1%25EC%2585%2598%250A%2520%2520addProducts%253A%2520%28list%29%2520%253D%253E%2520set%28%28%29%2520%253D%253E%2520%28%257BproductsList%253A%2520list%257D%29%29%252C%250A%250A%2520%2520%252F%252F%2520...%2520%28%25EB%258B%25A4%25EB%25A5%25B8%2520%25ED%258C%258C%25EC%2583%259D%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EB%25B0%258F%2520%25EC%2595%25A1%25EC%2585%2598%29%2520...%250A%257D%29%29%253B'
                    },
                },
                // 3. 모듈화된 핵심 전역 상태 및 인증 관리
                {
                    id: 'user-authentication-management',
                    featureTitle: '사용자 인증 로직 및 접근 제어',
                    content: 'Zustand Store 내부에 회원가입, 로그인, 로그아웃, 비밀번호 변경 등 모든 핵심 인증 비즈니스 로직을 캡슐화하여 관리했습니다. 특히, 이메일 중복 확인 및 비밀번호 확인 로직을 구현하여 데이터 무결성을 확보하고, 상태 기반으로 접근 권한을 동적으로 제어합니다.',
                    toolsUsed: ['Zustand', 'React'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-03-img.gif', 
                        caption: '사용자 인증 로직 캡슐화 및 접근 제어',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8%2520%25EB%25A1%259C%25EC%25A7%2581%2520%28Zustand%2520Store%29%250Alogin%2520%253A%2520%28info%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520email%2520%253D%2520info.email%250A%2520%2520%2520%2520const%2520password%2520%253D%2520info.password%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520Store%2520%25EB%2582%25B4%25EB%25B6%2580%25EC%2597%2590%25EC%2584%259C%2520%25EC%259D%25B8%25EC%25A6%259D%2520%25EC%25A0%2595%25EB%25B3%25B4%2520%25EA%25B2%2580%25EC%25A6%259D%2520%28%25EB%25B9%2584%25EC%25A6%2588%25EB%258B%2588%25EC%258A%25A4%2520%25EB%25A1%259C%25EC%25A7%2581%2520%25EC%25BA%25A1%25EC%258A%2590%25ED%2599%2594%29%250A%2520%2520%2520%2520const%2520foundUser%2520%253D%2520get%28%29.memberList.find%250A%2520%2520%2520%2520%2520%2520%28user%2520%253D%253E%2520user.email%2520%253D%253D%253D%2520email%2520%2526%2526%2520user.password%2520%253D%253D%253D%2520password%29%250A%250A%2520%2520%2520%2520if%28%21foundUser%29%2520return%2520false%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520%25EA%25B2%2580%25EC%25A6%259D%2520%25EC%2584%25B1%25EA%25B3%25B5%2520%25EC%258B%259C%2520%25EC%25A0%2584%25EC%2597%25AD%2520%25EC%2583%2581%25ED%2583%259C%28loginUser%29%2520%25EC%2597%2585%25EB%258D%25B0%25EC%259D%25B4%25ED%258A%25B8%250A%2520%2520%2520%2520set%28%28%29%2520%253D%253E%2520%28%257BloginUser%2520%253A%2520foundUser%257D%29%29%253B%250A%250A%2520%2520%2520%2520return%2520true%250A%257D%252C'
                    },
                },
                // 4. 리뷰/문의, 검색 필터링
                {
                    id: 'dynamic-data-management',
                    featureTitle: '리뷰/문의 시스템 및 동적 데이터 갱신',
                    content: '제품별 리뷰 및 문의글 관리 시스템을 Zustand Store를 분리하여 구현했습니다. 모달 내부의 폼 데이터를 안전하게 수집하고, 전역 상태 등록 후 데이터 목록이 즉시 갱신되도록 처리하여 높은 사용자 경험을 제공했습니다. 또한, 상품 목록에서 키워드 기반의 통합 검색 로직을 구현하여 데이터 탐색 효율성을 극대화했습니다.',
                    toolsUsed: ['React', 'Zustand'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-04-img.gif', 
                        caption: '리뷰/문의 시스템 및 동적 데이터 갱신',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%253CFullScreenModal%2520%250A%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EB%25AA%25A8%25EB%258B%25AC%2520%25EC%2584%25A4%25EC%25A0%2595%2520%25EC%2583%259D%25EB%259E%25B5%29%2520...%250A%2520%2520%2520%2520onSubmit%253D%257B%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520ref%25EB%25A5%25BC%2520%25ED%2586%25B5%25ED%2595%25B4%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%2588%2598%25EC%25A7%2591%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520data%2520%253D%2520formRef.current%253F.getFormData%253F.%28%29%253B%2520%250A%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520Zustand%2520%25EC%2595%25A1%25EC%2585%2598%2520%25ED%2598%25B8%25EC%25B6%259C%253A%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EA%25B0%25B1%25EC%258B%25A0%250A%2520%2520%2520%2520%2520%2520%2520%2520addReviewList%28data%29%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25203.%2520%25EB%25AA%25A8%25EB%258B%25AC%2520%25EB%258B%25AB%25EA%25B8%25B0%250A%2520%2520%2520%2520%2520%2520%2520%2520hide%28%29%253B%2520%250A%2520%2520%2520%2520%257D%257D%250A%252F%253E%250A%250A%252F%252F%2520Ref%25EB%25A5%25BC%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%259C%2520%25EC%259E%2590%25EC%258B%259D%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%2520%25ED%258F%25BC%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%2588%2598%25EC%25A7%2591%250AuseImperativeHandle%28ref%252C%2520%28%29%2520%253D%253E%2520%28%257B%250A%2520%2520%2520%2520getFormData%253A%2520%28%29%2520%253D%253E%2520%28%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25ED%258F%25BC%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EA%25B0%259D%25EC%25B2%25B4%2520%25ED%2598%2595%25ED%2583%259C%25EB%25A1%259C%2520%25EB%25B0%2598%25ED%2599%2598%250A%2520%2520%2520%2520%2520%2520%2520%2520id%253A%2520reviewList.length%2520%252B%25201%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520writer%253A%2520%2522abcdefg%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520productId%253A%2520prdId%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520rating%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520sizeFeedback%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EB%2582%2598%25EB%25A8%25B8%25EC%25A7%2580%2520%25ED%258F%25BC%2520%25EC%2583%2581%25ED%2583%259C%29%2520...%250A%2520%2520%2520%2520%2520%2520%2520%2520writeAt%253A%2520new%2520Date%28%29.toISOString%28%29%252C%250A%2520%2520%2520%2520%257D%29%250A%257D%29%29%253B%250A%250A%252F%252F%2520ProductReview%2520-%2520%25EC%25A0%2584%25EC%2597%25AD%25EC%2597%2590%2520%25EC%2593%25B0%25EB%258A%2594%2520%25EB%25A6%25AC%25EB%25B7%25B0%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%250AreviewList%253A%2520%255B%255D%252C%250A%250A%252F%252F%2520%25F0%259F%2592%25A1%2520%25EC%2583%2588%25EB%25A1%259C%25EC%259A%25B4%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EA%25B8%25B0%25EC%25A1%25B4%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%25EC%2597%2590%2520%25EC%25B6%2594%25EA%25B0%2580%25ED%2595%2598%25EB%258A%2594%2520%25EC%2595%25A1%25EC%2585%2598%250AaddReviewList%2520%253A%2520%28write%29%2520%253D%253E%2520set%28%28state%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520return%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520reviewList%253A%2520%255B...state.reviewList%252C%2520write%255D%250A%2520%2520%2520%2520%257D%250A%257D%29%252C'
                    },
                    problemSolving: [
                        {
                            title: '모달 내부의 폼 데이터를 부모 컴포넌트에서 효율적으로 수집하는 문제', 
                            content: 'forwardRef를 통해 Ref를 전달받고, useImperativeHandle을 사용하여 폼 데이터를 반환하는 getFormData 함수를 노출했습니다. 이를 통해 React의 선언적 방식을 유지하며 모달 내부의 폼 데이터를 안전하게 수집하는 문제를 해결했습니다.',
                        },
                    ],
                },
                // 5. 상품 상세페이지 이미지 슬라이드
                {
                    id: 'product-image-slider',
                    featureTitle: '이미지 슬라이더 구현',
                    content: '사용자 경험을 극대화하기 위해 Swiper.js 라이브러리를 적용했습니다. 이를 통해 데스크톱 환경은 물론, 모바일/태블릿 환경에서 터치 기반의 직관적인 이미지 탐색 경험을 제공합니다.',
                    toolsUsed: ['Swiper'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-05-img.gif', 
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
                    featureTitle: '동적 물리 인터랙션 및 성능 최적화 구현',
                    content: '브라우저 환경에서 중력, 충돌, 마찰을 구현하는 Matter.js를 활용하여 몰입감 있는 동적 인터랙션을 구현했습니다. IntersectionObserver를 사용하여 캔버스가 화면에 보일 때만 엔진을 초기화하여 초기 성능을 최적화했으며, 뷰포트 크기 감지 및 동적 경계 재설정을 통해 반응형 환경에서도 정확성을 유지했습니다.',
                    toolsUsed: ['Matter.js'], 
                    featureImage: { 
                        src: '/images/projects/portfolio-feature-01-img.gif', 
                        caption: '동적 물리 인터랙션 및 성능 최적화 구현',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520isCanvasInView%2520%25EC%2583%2581%25ED%2583%259C%25EC%2597%2590%2520%25EB%2594%25B0%25EB%259D%25BC%2520Matter.js%2520%25EC%25B4%2588%25EA%25B8%25B0%25ED%2599%2594%2520%25EC%2597%25AC%25EB%25B6%2580%2520%25EA%25B2%25B0%25EC%25A0%2595%250Aconst%2520%255BisCanvasInView%252C%2520setIsCanvasInView%255D%2520%253D%2520useState%28false%29%253B%2520%250A%250AuseEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520el%2520%253D%2520sceneRef.current%253B%250A%2520%2520%2520%2520if%2520%28%21el%29%2520return%253B%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520Intersection%2520Observer%2520%25EC%25A0%2595%25EC%259D%2598%250A%2520%2520%2520%2520const%2520observer%253A%2520IntersectionObserver%2520%253D%2520new%2520IntersectionObserver%28%250A%2520%2520%2520%2520%2520%2520%28%255Bentry%255D%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25ED%2599%2594%25EB%25A9%25B4%25EC%2597%2590%2520%25EB%25B3%25B4%25EC%259D%25BC%2520%25EB%2595%258C%25EB%25A7%258C%2520%25EC%2583%2581%25ED%2583%259C%25EB%25A5%25BC%2520true%25EB%25A1%259C%2520%25EB%25B3%2580%25EA%25B2%25BD%25ED%2595%2598%25EA%25B3%25A0%2520%25EA%25B4%2580%25EC%25B0%25B0%2520%25EC%25A4%2591%25EC%25A7%2580%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28entry.isIntersecting%29%2520%257B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520setIsCanvasInView%28true%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520observer.unobserve%28el%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%257B%2520threshold%253A%25200.1%2520%257D%250A%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520observer.observe%28el%29%253B%250A%2520%2520%2520%2520return%2520%28%29%2520%253D%253E%2520observer.unobserve%28el%29%253B%250A%2520%2520%257D%252C%2520%255B%255D%29%253B'
                    },
                    problemSolving: [
                        {
                            title: '초기 로딩 최적화 및 메모리 누수 방지', 
                            content: 'IntersectionObserver를 사용하여 캔버스 진입 시에만 엔진을 초기화하여 초기 리소스 소모를 방지했습니다. 또한, useEffect 클린업 함수를 통해 모든 Matter.js 객체를 명시적으로 해제하여 메모리 누수를 완벽히 방지했습니다.',
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
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EC%2584%259C%25EB%25B2%2584%25EC%2597%2590%25EC%2584%259C%2520%25EB%25B9%2584%25EB%258F%2599%25EA%25B8%25B0%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EB%25A1%259C%25EB%2594%25A9%25EC%259D%2584%2520%25EC%2588%2598%25ED%2596%2589%25ED%2595%2598%25EB%258A%2594%2520%25EC%2584%259C%25EB%25B2%2584%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%250Aexport%2520default%2520async%2520function%2520ProjectDetail%28%257B%2520params%2520%257D%253A%2520ProjectDetailProps%29%2520%257B%2520%250A%250A%2520%2520%2520%2520const%2520projectId%2520%253D%2520params.id%253B%250A%2520%2520%2520%2520const%2520project%2520%253D%2520PROJECT_DATA.find%28p%2520%253D%253E%2520p.id%2520%253D%253D%253D%2520projectId%29%253B%250A%250A%2520%2520%2520%2520if%2520%28%21project%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520notFound%28%29%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EC%25A4%2591%25EB%259E%25B5%29%2520...%250A%2520%2520%2520%2520%29%253B%250A%257D%250A%250A%252F%252F%2520Next%252FImage%2520%250A%250Aconst%2520ImageBlock%2520%253D%2520%28%250A%2520%2520%2520%2520%253Cfigure%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560%2524%257BImageClasses%257D%2520aspect-%255B10%252F12%255D%2520relative%2520order-1%2560%257D%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520ref%253D%257Bel%2520%253D%253E%2520%257Bif%2520%28el%29%2520imgRefs.current%255Bi%255D%2520%253D%2520el%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25F0%259F%2592%25A1%2520Next.js%2520Image%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%2520%25EC%2582%25AC%25EC%259A%25A9%253A%2520%25EC%259E%2590%25EB%258F%2599%2520%25EC%25B5%259C%25EC%25A0%2581%25ED%2599%2594%252C%2520WebP%252C%2520LCP%2520%25EA%25B0%259C%25EC%2584%25A0%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CImage%2520className%253D%2522object-cover%2520rounded-2xl%2522%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257Bfeat.featureImage.src%257D%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257Bfeat.featureImage.caption%257D%2520fill%252F%253E%250A%2520%2520%2520%2520%253C%252Ffigure%253E%250A%29%253B'
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
                // 1. 비동기 요청 및 성능 최적화
                {
                    id: 'api-optimization',
                    featureTitle: '비동기 요청 및 성능 최적화',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'PokeAPI를 통해 포켓몬 데이터를 비동기적으로 로드하고, 조회된 타입 정보를 캐싱하여 중복 API 요청을 방지하고 초기 로딩 속도를 크게 개선했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['Axios', 'Zustand', 'TypeScipt'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-01-img.gif', 
                        caption: '비동기 요청 및 성능 최적화',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%25201.%2520%25EB%258B%25A4%25EC%2588%2598%25EC%259D%2598%2520%25EC%2583%2581%25EC%2584%25B8%2520%25EC%25A0%2595%25EB%25B3%25B4%2520%25EC%259A%2594%25EC%25B2%25AD%25EC%259D%2584%2520Promise.all%28%29%25EB%25A1%259C%2520%25EB%25B3%2591%25EB%25A0%25AC%2520%25EC%25B2%2598%25EB%25A6%25AC%250Aconst%2520detailResponses%2520%253D%2520await%2520Promise.all%28%250A%2520%2520%2520%2520pokemonList.map%28%28p%2520%253A%257B%2520url%253Astring%2520%257D%29%2520%253D%253E%2520axiosInstance.get%28p.url%29%29%250A%29%253B%250A%250Aconst%2520typeCache%253A%2520TypeCache%2520%253D%2520%257B%257D%253B%250A%250A%252F%252F%25202.%2520%25ED%2583%2580%25EC%259E%2585%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EC%25B2%2598%25EB%25A6%25AC%25ED%2595%2598%25EB%258A%2594%2520%25EA%25B3%25BC%25EC%25A0%2595%25EC%2597%2590%25EC%2584%259C%2520%25EC%25BA%2590%25EC%258B%25B1%2520%25EB%25A1%259C%25EC%25A7%2581%2520%25EC%25A0%2581%25EC%259A%25A9%250Aconst%2520types%2520%253D%2520await%2520Promise.all%28%250A%2520%2520%2520%2520detailData.types.map%28async%2520%28typeInfo%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520enType%2520%253D%2520typeInfo.type.name%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25EC%25BA%2590%25EC%258B%25B1%2520%25EB%25A1%259C%25EC%25A7%2581%253A%2520%25EC%259D%25B4%25EB%25AF%25B8%2520%25EC%25BA%2590%25EC%258B%259C%25EC%2597%2590%2520%25EC%259E%2588%25EC%259C%25BC%25EB%25A9%25B4%2520API%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EC%2583%259D%25EB%259E%25B5%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28typeCache%255BenType%255D%29%2520return%2520typeCache%255BenType%255D%253B%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520typeRes%2520%253D%2520await%2520axiosInstance.get%28typeInfo.type.url%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%25B6%2594%25EC%25B6%259C%2520%25EB%25B0%258F%2520typeCache%25EC%2597%2590%2520%25EC%25A0%2580%25EC%259E%25A5%29%2520...%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520typeObj%253B%250A%2520%2520%2520%2520%257D%29%250A%29%253B'
                    },
                    problemSolving: [
                    {
                        // 1. 문제 해결 제목 (문제점 또는 목표)
                        title: '데이터 직렬 처리로 인한 초기 렌더링 지연', 
                        // 2. 문제 해결 내용 (해결 방안)
                        content: 'Promise.all() 병렬 요청과 클라이언트 측 캐싱 전략을 도입하여 다수 API 요청을 효율적으로 처리함으로써, 초기 로딩 시간을 단축했습니다.',
                    },
                ],
                },
                // 2. 반응형 무한 스크롤 및 렌더링 최적화
                {
                    id: 'infinite-scroll-ux-optimization',
                    featureTitle: '반응형 무한 스크롤 및 렌더링 최적화',
                    // 문제점과 해결 방안을 한 문단으로 작성
                    content: 'IntersectionObserver를 활용해 무한 스크롤 기능을 구현했습니다. 스크롤 및 리사이즈 이벤트에 디바운싱을 적용하고, 화면 크기에 따라 로드하는 카드 수를 동적으로 조절하여 불필요한 API 요청과 렌더링 성능 저하를 최소화했습니다.',
                    // 이 주요 기술에 사용한 툴 (선택적)
                    toolsUsed: ['React', 'Zustand', 'TypeScipt'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-02-img.gif', 
                        caption: '반응형 무한 스크롤 및 렌더링 최적화',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EB%2594%2594%25EB%25B0%2594%25EC%259A%25B4%25EC%258A%25A4%2520%25ED%2595%25A8%25EC%2588%2598%2520%25EC%25A0%2595%25EC%259D%2598%2520%28%25EC%259D%25B4%25EB%25B2%25A4%25ED%258A%25B8%2520%25EA%25B3%25BC%25ED%2598%25B8%25EC%25B6%259C%2520%25EB%25B0%25A9%25EC%25A7%2580%29%250Afunction%2520debounce%253CT%2520extends%2520%28...args%253A%2520any%255B%255D%29%2520%253D%253E%2520void%253E%28func%253A%2520T%252C%2520delay%253A%2520number%29%2520%257B%250A%2520%2520%2520%2520let%2520timeoutId%253A%2520ReturnType%253Ctypeof%2520setTimeout%253E%253B%250A%2520%2520%2520%2520return%2520function%2520%28this%253A%2520ThisParameterType%253CT%253E%252C%2520...args%253A%2520Parameters%253CT%253E%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520clearTimeout%28timeoutId%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520timeoutId%2520%253D%2520setTimeout%28%28%29%2520%253D%253E%2520func.apply%28this%252C%2520args%29%252C%2520delay%29%253B%250A%2520%2520%2520%2520%257D%253B%250A%257D%250A%250A%252F%252F%2520IntersectionObserver%25EB%25A5%25BC%2520%25EC%259D%25B4%25EC%259A%25A9%25ED%2595%259C%2520%25EB%25AC%25B4%25ED%2595%259C%2520%25EC%258A%25A4%25ED%2581%25AC%25EB%25A1%25A4%2520%25ED%258A%25B8%25EB%25A6%25AC%25EA%25B1%25B0%250AuseEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520observer%2520%253D%2520new%2520IntersectionObserver%2520%28%2520entries%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28entries%255B0%255D%253F.isIntersecting%2520%2526%2526%2520%21loading%2520%2526%2526%2520hasMore%29%257B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520loadMore%28%29%253B%2520%252F%252F%2520%25EB%25A1%259C%25EB%258D%2594%2520%25EC%259A%2594%25EC%2586%258C%25EA%25B0%2580%2520%25ED%2599%2594%25EB%25A9%25B4%25EC%2597%2590%2520%25EB%25B3%25B4%25EC%259D%25BC%2520%25EB%2595%258C%25EB%25A7%258C%2520%25EC%258B%25A4%25ED%2596%2589%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%2520%252C%257B%2520threshold%253A%25201%2520%257D%29%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520if%28loaderRef.current%29%2520observer.observe%28loaderRef.current%29%253B%250A%2520%2520%2520%2520%252F%252F%2520...%2520%28Clean-up%2520%25ED%2595%25A8%25EC%2588%2598%2520%25EC%2583%259D%25EB%259E%25B5%29%2520...%250A%257D%252C%255BloadMore%252C%2520loading%252C%2520hasMore%255D%29%253B'
                    },
                    problemSolving: [
                    {
                        title: '스크롤 이벤트 과호출 및 불필요한 API 요청', 
                        content: 'IntersectionObserver를 사용하여 스크롤 이벤트 대신 타겟 요소의 가시성 변화로 API를 호출하여 성능을 개선했으며, 리사이즈 이벤트에 Debounce를 적용하여 불필요한 함수 호출을 제어했습니다.',
                    },
                ],
                },
                // 3. 이미지 색상 추출 및 데이터 처리
                {
                    id: 'color-extraction-and-caching',
                    featureTitle: '이미지 색상 추출 및 캐시 최적화',
                    content: 'Color-Thief 라이브러리를 활용하여 각 이미지에서 대표 컬러 3가지(Primary, Secondary, Accent)를 추출하여 적용했습니다. 특히, Zustand를 활용한 컬러 캐싱을 구현하여 재렌더링 시 불필요한 이미지 연산을 제거함으로써 성능을 최적화했습니다.',
                    toolsUsed: ['Color-thief', 'Zustand', 'TypeScript'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-03-img.gif',
                        caption: '이미지 색상 추출 및 캐시 최적화',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=const%2520fetchColors%2520%253D%2520useCallback%28%28%29%2520%253D%253E%2520%257B%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520%25EC%25BA%2590%25EC%258B%259C%2520%25ED%2599%2595%25EC%259D%25B8%253A%2520%25EC%259D%25B4%25EB%25AF%25B8%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EA%25B0%2580%2520%25EC%259E%2588%25EC%259C%25BC%25EB%25A9%25B4%2520%25EC%2583%2581%25ED%2583%259C%2520%25EC%2584%25A4%25EC%25A0%2595%2520%25ED%259B%2584%2520%25EB%25B0%2594%25EB%25A1%259C%2520%25EC%25A2%2585%25EB%25A3%258C%250A%2520%2520%2520%2520if%2520%28colorCache%255BpokemonId%255D%29%2520%257B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520setColors%28colorCache%255BpokemonId%255D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%252F%252F%25202.%2520%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25EB%25A5%25BC%2520%25EB%25A1%259C%25EB%2593%259C%25ED%2595%2598%25EA%25B3%25A0%2520ColorThief%2520%25EA%25B0%259D%25EC%25B2%25B4%2520%25EC%2583%259D%25EC%2584%25B1%2520%28%25EC%25BA%2590%25EC%258B%259C%25EC%2597%2590%2520%25EC%2597%2586%25EC%259D%2584%2520%25EB%2595%258C%25EB%25A7%258C%2520%25EC%258B%25A4%25ED%2596%2589%29%250A%2520%2520%2520%2520const%2520img%2520%253D%2520new%2520Image%28%29%250A%2520%2520%2520%2520img.crossOrigin%2520%253D%2520%2522Anonymous%2522%250A%2520%2520%2520%2520img.src%2520%253D%2520imageUrl%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520img.onload%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520const%2520colorThief%2520%253D%2520new%2520ColorThief%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%25202.%2520%25EA%25B3%25A0%25EB%25B9%2584%25EC%259A%25A9%2520%25EC%2597%25B0%25EC%2582%25B0%253A%2520Color-Thief%25EB%25A1%259C%2520%25EC%2583%2589%25EC%2583%2581%2520%25EC%25B6%2594%25EC%25B6%259C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520const%2520palette%2520%253D%2520colorThief.getPalette%28img%252C%25203%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520const%2520hexColors%2520%253D%2520palette.map%28rgbToHex%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520setColors%28hexColors%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25203.%2520%25EC%25BA%2590%25EC%258B%259C%2520%25EC%25A0%2580%25EC%259E%25A5%253A%2520%25EC%2583%2588%25EB%25A1%259C%2520%25EC%25B6%2594%25EC%25B6%259C%25ED%2595%259C%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520Zustand%2520%25EC%25BA%2590%25EC%258B%259C%25EC%2597%2590%2520%25EC%25A0%2580%25EC%259E%25A5%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520setColorCache%28pokemonId%252C%2520hexColors%29%253B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%253B%250A%257D%252C%2520%255BpokemonId%252C%2520imageUrl%252C%2520colorCache%252C%2520setColorCache%255D%29%253B'
                    },
                    problemSolving: [
                    {
                        title: 'Color-Thief 연산 반복으로 인한 성능 저하', 
                        content: '컬러 캐시(colorCache) 기능을 구현하여 한 번 추출한 데이터는 Zustand 상태에 저장하고 재사용함으로써, 동일 포켓몬 카드 재렌더링 시 추출 연산 없이 즉시 컬러를 적용하도록 해결했습니다.',
                    },
                ],
                },
                // 4. 데이터 탐색 및 필터링 기능
                {
                    id: 'state-management-and-filtering',
                    featureTitle: '데이터 탐색 및 필터링 기능',
                    content: 'Zustand를 통해 필터링 기준, 검색어, 정렬 기준 등 전역 상태를 효율적으로 관리하여 컴포넌트 간의 데이터 흐름을 단순화했습니다. 포켓몬 타입별 필터링, 이름/도감번호 실시간 검색, 자동완성, 정렬 기능 등을 구현하여 사용자에게 직관적인 데이터 탐색 경험을 제공합니다.',
                    toolsUsed: ['Zustand', 'React', 'TypeScript'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-04-img.gif', 
                        caption: '타입 필터링 및 실시간 검색 UI',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EC%259E%2590%25EB%258F%2599%25EC%2599%2584%25EC%2584%25B1%2520%25ED%2582%25A4%25EC%259B%258C%25EB%2593%259C%25EB%25B3%2584%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%2520%25EB%25B3%2580%25EA%25B2%25BD%250AgetSearchSuggestions%2520%253A%2520%28keyword%29%2520%253D%253E%2520%257B%250A%250A%2520%2520%2520%2520const%2520trimmedKeyword%2520%253D%2520keyword.trim%28%29.replace%28%252F%255Cs%252B%252Fg%252C%2520%2522%2522%29%253B%250A%250A%2520%2520%2520%2520if%28%21trimmedKeyword%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520set%28%257B%2520searchSuggestions%253A%2520%255B%255D%2520%257D%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%252F%252F%2520%25EC%259D%25B4%25EB%25A6%2584%2520%25EB%2598%2590%25EB%258A%2594%2520%25EB%258F%2584%25EA%25B0%2590%2520%25EB%25B2%2588%25ED%2598%25B8%25EB%25A1%259C%2520%25EA%25B2%2580%25EC%2583%2589%250A%2520%2520%2520%2520const%2520suggestions%2520%253D%2520get%28%29.allPokemonList.filter%28%28pokemon%29%2520%253D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520pokemon.name.includes%28trimmedKeyword%29%2520%257C%257C%250A%2520%2520%2520%2520%2520%2520%2520%2520pokemon.id.toString%28%29.includes%28trimmedKeyword%29%2520%250A%2520%2520%2520%2520%29%253B%250A%250A%2520%2520%2520%2520%252F%252F%2520%25EC%259E%2590%25EB%258F%2599%25EC%2599%2584%25EC%2584%25B1%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%25EB%25A5%25BC%2520%25EC%2583%2581%25EC%259C%2584%25205%25EA%25B0%259C%25EB%25A1%259C%2520%25EC%25A0%259C%25ED%2595%259C%250A%2520%2520%2520%2520set%28%257B%2520searchSuggestions%2520%253A%2520suggestions.slice%280%252C%25205%29%2520%257D%29%250A%257D%252C'
                    },
                },
                // 5. GSAP 애니메이션 및 웹 접근성
                {
                    id: 'animation-and-accessibility',
                    featureTitle: '동적 모달 전환 및 안전한 DOM 관리',
                    content: 'GSAP을 활용하여 모달의 열림/닫힘 시 스케일 전환 애니메이션**을 부드럽게 구현했습니다. 특히, 모달의 배경 클릭 및 버튼 클릭 이벤트 발생 시 닫기 애니메이션을 먼저 실행하고, 애니메이션 완료 후 Zustand 상태를 업데이트하여 모달 컴포넌트를 안전하게 제거하는 로직을 구축했습니다.',
                    toolsUsed: ['GSAP', 'React', 'zustand'], 
                    featureImage: { 
                        src: '/images/projects/pokemon-feature-05-img.gif', 
                        caption: '동적 모달 전환 및 안전한 DOM 관리',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%2599%2584%25EB%25A3%258C%2520%25ED%259B%2584%2520%25EC%2583%2581%25ED%2583%259C%2520%25EC%25A0%259C%25EA%25B1%25B0%250Aconst%2520handleCloseWithAnimation%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520if%2520%28%21contentRef.current%29%2520%257B%2520closeModal%28%29%253B%2520return%253B%2520%257D%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25EB%258B%25AB%25EA%25B8%25B0%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%250A%2520%2520%2520%2520gsap.fromTo%28contentRef.current%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520Start%253A%2520%25EB%25B3%25B4%25EC%259D%25B4%25EB%258A%2594%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520End%253A%2520%25EC%2582%25AC%25EB%259D%25BC%25EC%25A7%2580%25EB%258A%2594%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25E2%25AD%2590%25EF%25B8%258F%2520%25ED%2595%25B5%25EC%258B%25AC%253A%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%2599%2584%25EB%25A3%258C%2520%25ED%259B%2584%2520Zustand%2520%25EC%2583%2581%25ED%2583%259C%2520%25EB%25B3%2580%25EA%25B2%25BD%2520%28DOM%2520Unmount%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520onComplete%253A%2520closeModal%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%29%253B%250A%257D%253B%250A%250A%252F%252F%2520%25EC%259E%2590%25EC%258B%259D%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%2520DOM%25EC%2597%2590%2520%25EC%25A0%2591%25EA%25B7%25BC%2520%25EB%25B0%258F%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%25A0%2581%25EC%259A%25A9%250AuseEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520refObject%2520%253D%2520contentRef%2520as%2520React.RefObject%253CHTMLDivElement%253E%253B%2520%250A%250A%2520%2520%2520%2520if%2520%28refObject.current%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25EC%2597%25B4%25EB%25A6%25BC%2520%25EC%2595%25A0%25EB%258B%2588%25EB%25A9%2594%25EC%259D%25B4%25EC%2585%2598%2520%25EC%25A0%2581%25EC%259A%25A9%250A%2520%2520%2520%2520%2520%2520%2520%2520gsap.fromTo%28refObject.current%252C%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520Start%253A%2520%25EC%2582%25AC%25EB%259D%25BC%25EC%25A7%2584%2520%25EC%2583%2581%25ED%2583%259C%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%252F%252F%2520End%253A%2520%25EB%2582%2598%25ED%2583%2580%25EB%2582%2598%25EB%258A%2594%2520%25EC%2583%2581%25ED%2583%259C%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%252C%2520%255BcontentRef%255D%29%253B'
                    },
                    problemSolving: [
                    {
                        title: '자식 컴포넌트 내부 DOM에 대한 GSAP 직접 접근 문제', 
                        content: 'GSAP 애니메이션의 대상이 되는 모달 콘텐츠 DOM이 자식 컴포넌트에 위치해 있어 직접 제어가 불가능했습니다. 이를 해결하기 위해 부모에서 전달한 useRef객체를 자식 컴포넌트에 prop으로 전달하여, DOM 노드에 안전하게 접근하고 애니메이션을 적용했습니다.',
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
                // 1. 쇼핑몰 전체 흐름 구현
                {
                    id: 'ecommerce-flow',
                    featureTitle: '쇼핑몰 전체 흐름 구현',
                    content: '상품 목록, 상세, 장바구니, 주문/결제, 마이페이지에 이르는 쇼핑몰의 모든 핵심 경로를 React Router로 정의했습니다. Layout 컴포넌트를 사용하여 공통 UI를 구성하고 중첩 라우팅을 적용하여 코드를 효율적으로 관리했습니다. 특히, 동적 라우팅을 통해 상세 페이지를 구현하고, <ProtectedRoute>를 활용해 인증 기반의 접근 권한을 제어하는 등 실제 커머스 환경에 준하는 라우팅 시스템을 구축했습니다.',
                    toolsUsed: ['React Router', 'React'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-01-img.gif', 
                        caption: '쇼핑몰 전체 흐름 구현',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%253CRoutes%253E%250A%2520%2520%2520%2520%253CRoute%2520element%253D%257B%253CLayout%252F%253E%257D%253E%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520Layout%25EC%259D%2584%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%259C%2520%25EC%25A4%2591%25EC%25B2%25A9%2520%25EB%259D%25BC%25EC%259A%25B0%25ED%258C%2585%2520%28%25EA%25B3%25B5%25ED%2586%25B5%2520UI%2520%25EA%25B4%2580%25EB%25A6%25AC%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252F%27%2520element%2520%253D%257B%253CHome%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25F0%259F%2592%25A1%25202.%2520%25EB%258F%2599%25EC%25A0%2581%2520%25EB%259D%25BC%25EC%259A%25B0%25ED%258C%2585%253A%2520%25EC%25A0%259C%25ED%2592%2588%2520ID%25EB%25A5%25BC%2520URL%2520%25ED%258C%258C%25EB%259D%25BC%25EB%25AF%25B8%25ED%2584%25B0%25EB%25A1%259C%2520%25EC%2582%25AC%25EC%259A%25A9%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252Fproduct%252F%253AprdId%27%2520element%2520%253D%257B%253CProduct%252F%253E%257D%2520%252F%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25F0%259F%2592%25A1%25203.%2520%25EC%259D%25B8%25EC%25A6%259D%2520%25ED%2595%2584%25EC%2588%2598%2520%25EA%25B2%25BD%25EB%25A1%259C%253A%2520%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8%25EB%2590%259C%2520%25EC%2582%25AC%25EC%259A%25A9%25EC%259E%2590%25EB%25A7%258C%2520%25EC%25A0%2591%25EA%25B7%25BC%2520%25ED%2597%2588%25EC%259A%25A9%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252Fmypage%27%2520element%253D%257B%253CProtectedRoute%253E%253CMypage%252F%253E%253C%252FProtectedRoute%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25EC%25A3%25BC%25EB%25AC%25B8%2520%25EB%25B0%258F%2520%25EA%25B2%25B0%25EC%25A0%259C%2520%25ED%259D%2590%25EB%25A6%2584%25EC%259D%2598%2520%25ED%2595%25B5%25EC%258B%25AC%2520%25EA%25B2%25BD%25EB%25A1%259C%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252Forder%27%2520element%253D%257B%253COrder%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRoute%2520path%253D%27%252FOrderComplete%27%2520element%253D%257B%253COrderComplete%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520...%2520%28%25EB%2582%2598%25EB%25A8%25B8%25EC%25A7%2580%2520%25EA%25B2%25BD%25EB%25A1%259C%29%2520...%2520*%252F%257D%250A%2520%2520%2520%2520%253C%252FRoute%253E%250A%2520%2520%2520%2520%257B%252F*%2520%25EC%2597%2590%25EB%259F%25AC%2520%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580%25EB%25A5%25BC%2520%25ED%2586%25B5%25ED%2595%259C%2520UX%2520%25EA%25B0%259C%25EC%2584%25A0%2520*%252F%257D%250A%2520%2520%2520%2520%253CRoute%2520path%253D%27*%27%2520element%253D%257B%27error%27%257D%2520%252F%253E%2520%250A%253C%252FRoutes%253E'
                    },
                },
                // 2. Mock API 연동 및 초기 데이터 관리
                {
                    id: 'zustand-modular-design',
                    featureTitle: 'Mock API 연동 및 초기 데이터 관리',
                    content: '제품 데이터를 Axios를 사용하여 Mock JSON API로부터 비동기적으로 로드했습니다. 로드 성공 후, Zustand Store의 액션을 통해 해당 데이터를 전역 상태에 저장했습니다. 이 초기 데이터 공급 과정을 통해 검색, 필터링, 상세 정보 조회 등 후속 데이터 처리의 기반을 마련하고, 컴포넌트 간 효율적인 데이터 공유를 가능하게 했습니다.',
                    toolsUsed: ['Axios', 'Zustand', 'React'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-02-img.gif', 
                        caption: 'Mock API 연동 및 초기 데이터 관리',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Axios%2520%25EB%25B9%2584%25EB%258F%2599%25EA%25B8%25B0%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EB%25B0%258F%2520Zustand%2520%25EC%2597%2585%25EB%258D%25B0%25EC%259D%25B4%25ED%258A%25B8%250AuseEffect%28%28%29%253D%253E%257B%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520Axios%25EB%25A5%25BC%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%259C%2520%25EB%25B9%2584%25EB%258F%2599%25EA%25B8%25B0%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%259A%2594%25EC%25B2%25AD%250A%2520%2520%2520%2520axios.get%28%27%252Fswim-shopping-mall%252Fdata%252FswimwearProducts.json%27%29%250A%2520%2520%2520%2520.then%28response%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EC%2584%25B1%25EA%25B3%25B5%2520%25EC%258B%259C%252C%2520Zustand%2520%25EC%2595%25A1%25EC%2585%2598%25EC%259D%2584%2520%25ED%2598%25B8%25EC%25B6%259C%25ED%2595%2598%25EC%2597%25AC%2520%25EC%25A0%2584%25EC%2597%25AD%2520%25EC%2583%2581%25ED%2583%259C%2520%25EC%2597%2585%25EB%258D%25B0%25EC%259D%25B4%25ED%258A%25B8%250A%2520%2520%2520%2520%2520%2520%2520%2520addProducts%28response.data%29%253B%2520%250A%2520%2520%2520%2520%257D%29%250A%2520%2520%2520%2520.catch%28error%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520console.error%28%27%25F0%259F%259A%25A8%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%259A%2594%25EC%25B2%25AD%2520%25EC%258B%25A4%25ED%258C%25A8%253A%27%252C%2520error.message%29%253B%2520%250A%2520%2520%2520%2520%257D%29%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25EC%259D%2598%25EC%25A1%25B4%25EC%2584%25B1%2520%25EB%25B0%25B0%25EC%2597%25B4%28dependency%2520array%29%25EC%259D%25B4%2520%25EB%25B9%2584%25EC%2596%25B4%2520%25EC%259E%2588%25EC%2596%25B4%2520%25EB%25A7%2588%25EC%259A%25B4%25ED%258A%25B8%2520%25EC%258B%259C%25201%25ED%259A%258C%25EB%25A7%258C%2520%25EC%258B%25A4%25ED%2596%2589%25EB%2590%25A8%250A%257D%252C%255B%255D%29%250A%250A%252F%252F%2520Zustand%2520Store%25EC%259D%2598%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EA%25B5%25AC%25EC%25A1%25B0%2520%25EB%25B0%258F%2520%25EC%2595%25A1%25EC%2585%2598%2520%25EC%25A0%2595%25EC%259D%2598%250Aconst%2520useProdcutStore%2520%253D%2520create%28%28set%252C%2520get%29%2520%253D%253E%2520%28%257B%250A%250A%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520%25EC%25A0%259C%25ED%2592%2588%2520%25EB%25AA%25A9%25EB%25A1%259D%25EC%259D%2584%2520%25EC%25A0%2580%25EC%259E%25A5%25ED%2595%25A0%2520%25EC%25B4%2588%25EA%25B8%25B0%2520%25EC%2583%2581%25ED%2583%259C%250A%2520%2520productsList%2520%253A%2520%255B%255D%252C%250A%250A%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520%25EC%2599%25B8%25EB%25B6%2580%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EB%25B0%259B%25EC%2595%2584%2520%25EC%2583%2581%25ED%2583%259C%25EB%25A5%25BC%2520%25EC%2584%25A4%25EC%25A0%2595%25ED%2595%2598%25EB%258A%2594%2520%25EC%2595%25A1%25EC%2585%2598%250A%2520%2520addProducts%253A%2520%28list%29%2520%253D%253E%2520set%28%28%29%2520%253D%253E%2520%28%257BproductsList%253A%2520list%257D%29%29%252C%250A%250A%2520%2520%252F%252F%2520...%2520%28%25EB%258B%25A4%25EB%25A5%25B8%2520%25ED%258C%258C%25EC%2583%259D%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EB%25B0%258F%2520%25EC%2595%25A1%25EC%2585%2598%29%2520...%250A%257D%29%29%253B'
                    },
                },
                // 3. 모듈화된 핵심 전역 상태 및 인증 관리
                {
                    id: 'user-authentication-management',
                    featureTitle: '사용자 인증 로직 및 접근 제어',
                    content: 'Zustand Store 내부에 회원가입, 로그인, 로그아웃, 비밀번호 변경 등 모든 핵심 인증 비즈니스 로직을 캡슐화하여 관리했습니다. 특히, 이메일 중복 확인 및 비밀번호 확인 로직을 구현하여 데이터 무결성을 확보하고, 상태 기반으로 접근 권한을 동적으로 제어합니다.',
                    toolsUsed: ['Zustand', 'React'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-03-img.gif', 
                        caption: '사용자 인증 로직 캡슐화 및 접근 제어',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8%2520%25EB%25A1%259C%25EC%25A7%2581%2520%28Zustand%2520Store%29%250Alogin%2520%253A%2520%28info%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520email%2520%253D%2520info.email%250A%2520%2520%2520%2520const%2520password%2520%253D%2520info.password%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520Store%2520%25EB%2582%25B4%25EB%25B6%2580%25EC%2597%2590%25EC%2584%259C%2520%25EC%259D%25B8%25EC%25A6%259D%2520%25EC%25A0%2595%25EB%25B3%25B4%2520%25EA%25B2%2580%25EC%25A6%259D%2520%28%25EB%25B9%2584%25EC%25A6%2588%25EB%258B%2588%25EC%258A%25A4%2520%25EB%25A1%259C%25EC%25A7%2581%2520%25EC%25BA%25A1%25EC%258A%2590%25ED%2599%2594%29%250A%2520%2520%2520%2520const%2520foundUser%2520%253D%2520get%28%29.memberList.find%250A%2520%2520%2520%2520%2520%2520%28user%2520%253D%253E%2520user.email%2520%253D%253D%253D%2520email%2520%2526%2526%2520user.password%2520%253D%253D%253D%2520password%29%250A%250A%2520%2520%2520%2520if%28%21foundUser%29%2520return%2520false%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520%25EA%25B2%2580%25EC%25A6%259D%2520%25EC%2584%25B1%25EA%25B3%25B5%2520%25EC%258B%259C%2520%25EC%25A0%2584%25EC%2597%25AD%2520%25EC%2583%2581%25ED%2583%259C%28loginUser%29%2520%25EC%2597%2585%25EB%258D%25B0%25EC%259D%25B4%25ED%258A%25B8%250A%2520%2520%2520%2520set%28%28%29%2520%253D%253E%2520%28%257BloginUser%2520%253A%2520foundUser%257D%29%29%253B%250A%250A%2520%2520%2520%2520return%2520true%250A%257D%252C'
                    },
                },
                // 4. 리뷰/문의, 검색 필터링
                {
                    id: 'dynamic-data-management',
                    featureTitle: '리뷰/문의 시스템 및 동적 데이터 갱신',
                    content: '제품별 리뷰 및 문의글 관리 시스템을 Zustand Store를 분리하여 구현했습니다. 모달 내부의 폼 데이터를 안전하게 수집하고, 전역 상태 등록 후 데이터 목록이 즉시 갱신되도록 처리하여 높은 사용자 경험을 제공했습니다. 또한, 상품 목록에서 키워드 기반의 통합 검색 로직을 구현하여 데이터 탐색 효율성을 극대화했습니다.',
                    toolsUsed: ['React', 'Zustand'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-04-img.gif', 
                        caption: '리뷰/문의 시스템 및 동적 데이터 갱신',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%253CFullScreenModal%2520%250A%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EB%25AA%25A8%25EB%258B%25AC%2520%25EC%2584%25A4%25EC%25A0%2595%2520%25EC%2583%259D%25EB%259E%25B5%29%2520...%250A%2520%2520%2520%2520onSubmit%253D%257B%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25201.%2520ref%25EB%25A5%25BC%2520%25ED%2586%25B5%25ED%2595%25B4%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%2588%2598%25EC%25A7%2591%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520data%2520%253D%2520formRef.current%253F.getFormData%253F.%28%29%253B%2520%250A%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25202.%2520Zustand%2520%25EC%2595%25A1%25EC%2585%2598%2520%25ED%2598%25B8%25EC%25B6%259C%253A%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EA%25B0%25B1%25EC%258B%25A0%250A%2520%2520%2520%2520%2520%2520%2520%2520addReviewList%28data%29%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%25203.%2520%25EB%25AA%25A8%25EB%258B%25AC%2520%25EB%258B%25AB%25EA%25B8%25B0%250A%2520%2520%2520%2520%2520%2520%2520%2520hide%28%29%253B%2520%250A%2520%2520%2520%2520%257D%257D%250A%252F%253E%250A%250A%252F%252F%2520Ref%25EB%25A5%25BC%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%259C%2520%25EC%259E%2590%25EC%258B%259D%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%2520%25ED%258F%25BC%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EC%2588%2598%25EC%25A7%2591%250AuseImperativeHandle%28ref%252C%2520%28%29%2520%253D%253E%2520%28%257B%250A%2520%2520%2520%2520getFormData%253A%2520%28%29%2520%253D%253E%2520%28%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25ED%258F%25BC%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EA%25B0%259D%25EC%25B2%25B4%2520%25ED%2598%2595%25ED%2583%259C%25EB%25A1%259C%2520%25EB%25B0%2598%25ED%2599%2598%250A%2520%2520%2520%2520%2520%2520%2520%2520id%253A%2520reviewList.length%2520%252B%25201%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520writer%253A%2520%2522abcdefg%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520productId%253A%2520prdId%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520rating%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520sizeFeedback%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EB%2582%2598%25EB%25A8%25B8%25EC%25A7%2580%2520%25ED%258F%25BC%2520%25EC%2583%2581%25ED%2583%259C%29%2520...%250A%2520%2520%2520%2520%2520%2520%2520%2520writeAt%253A%2520new%2520Date%28%29.toISOString%28%29%252C%250A%2520%2520%2520%2520%257D%29%250A%257D%29%29%253B%250A%250A%252F%252F%2520ProductReview%2520-%2520%25EC%25A0%2584%25EC%2597%25AD%25EC%2597%2590%2520%25EC%2593%25B0%25EB%258A%2594%2520%25EB%25A6%25AC%25EB%25B7%25B0%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%250AreviewList%253A%2520%255B%255D%252C%250A%250A%252F%252F%2520%25F0%259F%2592%25A1%2520%25EC%2583%2588%25EB%25A1%259C%25EC%259A%25B4%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EB%25A5%25BC%2520%25EA%25B8%25B0%25EC%25A1%25B4%2520%25EB%25A6%25AC%25EC%258A%25A4%25ED%258A%25B8%25EC%2597%2590%2520%25EC%25B6%2594%25EA%25B0%2580%25ED%2595%2598%25EB%258A%2594%2520%25EC%2595%25A1%25EC%2585%2598%250AaddReviewList%2520%253A%2520%28write%29%2520%253D%253E%2520set%28%28state%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520return%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520reviewList%253A%2520%255B...state.reviewList%252C%2520write%255D%250A%2520%2520%2520%2520%257D%250A%257D%29%252C'
                    },
                    problemSolving: [
                        {
                            title: '모달 내부의 폼 데이터를 부모 컴포넌트에서 효율적으로 수집하는 문제', 
                            content: 'forwardRef를 통해 Ref를 전달받고, useImperativeHandle을 사용하여 폼 데이터를 반환하는 getFormData 함수를 노출했습니다. 이를 통해 React의 선언적 방식을 유지하며 모달 내부의 폼 데이터를 안전하게 수집하는 문제를 해결했습니다.',
                        },
                    ],
                },
                // 5. 상품 상세페이지 이미지 슬라이드
                {
                    id: 'product-image-slider',
                    featureTitle: '이미지 슬라이더 구현',
                    content: '사용자 경험을 극대화하기 위해 Swiper.js 라이브러리를 적용했습니다. 이를 통해 데스크톱 환경은 물론, 모바일/태블릿 환경에서 터치 기반의 직관적인 이미지 탐색 경험을 제공합니다.',
                    toolsUsed: ['Swiper'], 
                    featureImage: { 
                        src: '/images/projects/shoppingmall-feature-05-img.gif', 
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
                    featureTitle: '동적 물리 인터랙션 및 성능 최적화 구현',
                    content: '브라우저 환경에서 중력, 충돌, 마찰을 구현하는 Matter.js를 활용하여 몰입감 있는 동적 인터랙션을 구현했습니다. IntersectionObserver를 사용하여 캔버스가 화면에 보일 때만 엔진을 초기화하여 초기 성능을 최적화했으며, 뷰포트 크기 감지 및 동적 경계 재설정을 통해 반응형 환경에서도 정확성을 유지했습니다.',
                    toolsUsed: ['Matter.js'], 
                    featureImage: { 
                        src: '/images/projects/portfolio-feature-01-img.gif', 
                        caption: '동적 물리 인터랙션 및 성능 최적화 구현',
                    },
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520isCanvasInView%2520%25EC%2583%2581%25ED%2583%259C%25EC%2597%2590%2520%25EB%2594%25B0%25EB%259D%25BC%2520Matter.js%2520%25EC%25B4%2588%25EA%25B8%25B0%25ED%2599%2594%2520%25EC%2597%25AC%25EB%25B6%2580%2520%25EA%25B2%25B0%25EC%25A0%2595%250Aconst%2520%255BisCanvasInView%252C%2520setIsCanvasInView%255D%2520%253D%2520useState%28false%29%253B%2520%250A%250AuseEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520el%2520%253D%2520sceneRef.current%253B%250A%2520%2520%2520%2520if%2520%28%21el%29%2520return%253B%250A%250A%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520Intersection%2520Observer%2520%25EC%25A0%2595%25EC%259D%2598%250A%2520%2520%2520%2520const%2520observer%253A%2520IntersectionObserver%2520%253D%2520new%2520IntersectionObserver%28%250A%2520%2520%2520%2520%2520%2520%28%255Bentry%255D%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520%25F0%259F%2592%25A1%2520%25ED%2599%2594%25EB%25A9%25B4%25EC%2597%2590%2520%25EB%25B3%25B4%25EC%259D%25BC%2520%25EB%2595%258C%25EB%25A7%258C%2520%25EC%2583%2581%25ED%2583%259C%25EB%25A5%25BC%2520true%25EB%25A1%259C%2520%25EB%25B3%2580%25EA%25B2%25BD%25ED%2595%2598%25EA%25B3%25A0%2520%25EA%25B4%2580%25EC%25B0%25B0%2520%25EC%25A4%2591%25EC%25A7%2580%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28entry.isIntersecting%29%2520%257B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520setIsCanvasInView%28true%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520observer.unobserve%28el%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%257B%2520threshold%253A%25200.1%2520%257D%250A%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520observer.observe%28el%29%253B%250A%2520%2520%2520%2520return%2520%28%29%2520%253D%253E%2520observer.unobserve%28el%29%253B%250A%2520%2520%257D%252C%2520%255B%255D%29%253B'
                    },
                    problemSolving: [
                        {
                            title: '초기 로딩 최적화 및 메모리 누수 방지', 
                            content: 'IntersectionObserver를 사용하여 캔버스 진입 시에만 엔진을 초기화하여 초기 리소스 소모를 방지했습니다. 또한, useEffect 클린업 함수를 통해 모든 Matter.js 객체를 명시적으로 해제하여 메모리 누수를 완벽히 방지했습니다.',
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
                    codeView: {
                        src: 'https://carbon.now.sh/embed?bg=rgba%28250%2C247%2C246%2C1%29&t=3024-night&wt=none&l=auto&width=680&ds=true&dsyoff=1px&dsblur=44px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=11.5px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520%25EC%2584%259C%25EB%25B2%2584%25EC%2597%2590%25EC%2584%259C%2520%25EB%25B9%2584%25EB%258F%2599%25EA%25B8%25B0%2520%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%2520%25EB%25A1%259C%25EB%2594%25A9%25EC%259D%2584%2520%25EC%2588%2598%25ED%2596%2589%25ED%2595%2598%25EB%258A%2594%2520%25EC%2584%259C%25EB%25B2%2584%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%250Aexport%2520default%2520async%2520function%2520ProjectDetail%28%257B%2520params%2520%257D%253A%2520ProjectDetailProps%29%2520%257B%2520%250A%250A%2520%2520%2520%2520const%2520projectId%2520%253D%2520params.id%253B%250A%2520%2520%2520%2520const%2520project%2520%253D%2520PROJECT_DATA.find%28p%2520%253D%253E%2520p.id%2520%253D%253D%253D%2520projectId%29%253B%250A%250A%2520%2520%2520%2520if%2520%28%21project%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520notFound%28%29%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520...%2520%28%25EC%25A4%2591%25EB%259E%25B5%29%2520...%250A%2520%2520%2520%2520%29%253B%250A%257D%250A%250A%252F%252F%2520Next%252FImage%2520%250A%250Aconst%2520ImageBlock%2520%253D%2520%28%250A%2520%2520%2520%2520%253Cfigure%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560%2524%257BImageClasses%257D%2520aspect-%255B10%252F12%255D%2520relative%2520order-1%2560%257D%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520ref%253D%257Bel%2520%253D%253E%2520%257Bif%2520%28el%29%2520imgRefs.current%255Bi%255D%2520%253D%2520el%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520%25F0%259F%2592%25A1%2520Next.js%2520Image%2520%25EC%25BB%25B4%25ED%258F%25AC%25EB%2584%258C%25ED%258A%25B8%2520%25EC%2582%25AC%25EC%259A%25A9%253A%2520%25EC%259E%2590%25EB%258F%2599%2520%25EC%25B5%259C%25EC%25A0%2581%25ED%2599%2594%252C%2520WebP%252C%2520LCP%2520%25EA%25B0%259C%25EC%2584%25A0%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CImage%2520className%253D%2522object-cover%2520rounded-2xl%2522%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257Bfeat.featureImage.src%257D%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257Bfeat.featureImage.caption%257D%2520fill%252F%253E%250A%2520%2520%2520%2520%253C%252Ffigure%253E%250A%29%253B'
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

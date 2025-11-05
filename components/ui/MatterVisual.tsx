
'use client'

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

// ----------------------------------------------------
// 유틸리티 함수
// ----------------------------------------------------

/** 배열 요소를 무작위 섞기 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ----------------------------------------------------
// 기본 객체 생성 함수 (1): 원형과 타원형 배지 혼합 (수정됨)
// ----------------------------------------------------

// 💡 기준 뷰포트 너비 정의
const INITIAL_VP_WIDTH = 1920; 
const BASE_SCALE = 1.1; // 원래 설정했던 기본 스케일 값
const BASE_SCALE_ELLIPSE = 1.8; // 원래 설정했던 기본 스케일 값
const MIN_SCALE = 0.8;
const MIN_SCALE_ELLIPSE = 0.6;

export const createBadgeBodies = (Matter, dimensions) => {
    const { Bodies } = Matter;
    const centerX = dimensions.width / 2;
    const startY = -50;
    
    // 💡 동적 스케일 계산 및 최소 크기 제한 적용
    const calculatedScale = (dimensions.width / INITIAL_VP_WIDTH) * BASE_SCALE; 
    const dynamicScale = Math.max(calculatedScale, MIN_SCALE);
    
    const badges = [];
    
    // ... (ellipseBadgeData 생략 - 그대로 사용)
    const ellipseBadgeData = [
        { width: 234, height: 74 }, // i=4 (index 0)
        { width: 306, height: 74 }, // i=5 (index 1)
        { width: 272, height: 74 }, // i=6 (index 2)
        { width: 316, height: 74 }, // i=7 (index 3)
        { width: 227, height: 74 }, // i=8 (index 4)
    ];

    for (let i = 1; i <= 8; i++) {
        let body;
        
        const options = {
            restitution: 0.3, 
            friction: 0.1, 
            frictionStatic: 0.8,
            density: 0.0025,
            render: {
                sprite: {
                    texture: `/icons/hero-visual-badge-${i}.svg`,
                    // 💡 동적 스케일 적용
                    xScale: dynamicScale,
                    yScale: dynamicScale 
                }
            }
        };

        if (i <= 3) {
            // 원형 배지 (i=1, 2, 3)
            const radius = 46;
            // 💡 동적 스케일 적용
            body = Bodies.circle(centerX, startY, radius * dynamicScale, options); 
        } else {
            // 타원형 배지 (i=4 ~ 8)
            const dataIndex = i - 4;
            const { width, height } = ellipseBadgeData[dataIndex];
            
            // 💡 동적 스케일 적용
            body = Bodies.rectangle(centerX, startY, width * dynamicScale, height * dynamicScale, {
                ...options,
                chamfer: { radius: 30 * dynamicScale},
            });
        }
        badges.push(body);
    }

    return shuffleArray(badges);
};

// ----------------------------------------------------
// 기본 객체 생성 함수 (2): 타원형만 사용 (STACK_DATA용) (수정됨)
// ----------------------------------------------------

export const createEllipseBodies = (Matter, dimensions) => {
    const { Bodies } = Matter;
    const centerX = dimensions.width / 2;
    const startY = -50;
    
    // 💡 동적 스케일 계산 및 최소 크기 제한 적용
    const calculatedScale = (dimensions.width / INITIAL_VP_WIDTH) * BASE_SCALE_ELLIPSE; 
    const dynamicScale = Math.max(calculatedScale, MIN_SCALE_ELLIPSE);
    
    // 16개 타원형 객체 데이터 (수정된 텍스처 경로 사용)
    const ellipseData = [
        { width: 192, height: 75, texture: '/icons/stacktool-visual-badge-1.svg', radius: 37 },
        { width: 185, height: 75, texture: '/icons/stacktool-visual-badge-2.svg', radius: 37 },
        { width: 262, height: 75, texture: '/icons/stacktool-visual-badge-3.svg', radius: 37 },
        { width: 135, height: 75, texture: '/icons/stacktool-visual-badge-4.svg', radius: 37 },
        { width: 275, height: 75, texture: '/icons/stacktool-visual-badge-5.svg', radius: 37 },
        { width: 185, height: 75, texture: '/icons/stacktool-visual-badge-6.svg', radius: 37 },
        { width: 204, height: 75, texture: '/icons/stacktool-visual-badge-7.svg', radius: 37 },
        { width: 158, height: 75, texture: '/icons/stacktool-visual-badge-8.svg', radius: 37 },
        { width: 227, height: 75, texture: '/icons/stacktool-visual-badge-9.svg', radius: 37 },
        { width: 312, height: 75, texture: '/icons/stacktool-visual-badge-10.svg', radius: 37 },
        { width: 184, height: 75, texture: '/icons/stacktool-visual-badge-11.svg', radius: 37 },
        { width: 133, height: 75, texture: '/icons/stacktool-visual-badge-12.svg', radius: 37 },
        { width: 206, height: 75, texture: '/icons/stacktool-visual-badge-13.svg', radius: 37 },
        { width: 152, height: 75, texture: '/icons/stacktool-visual-badge-14.svg', radius: 37 },
        { width: 252, height: 75, texture: '/icons/stacktool-visual-badge-15.svg', radius: 37 },
        { width: 277, height: 75, texture: '/icons/stacktool-visual-badge-16.svg', radius: 37 },
    ];

    const newBodies = ellipseData.map((data, i) => {
        // 기존 코드에서 data.scale은 제거되었습니다. (dynamicScale 사용)
        const { width, height, texture, radius } = data; 
        
        const options = {
            restitution: 0.3, 
            friction: 0.1, 
            frictionStatic: 0.8,
            density: 0.0025,
            render: {
                sprite: {
                    texture: texture, 
                    // 💡 dynamicScale 적용
                    xScale: dynamicScale, 
                    yScale: dynamicScale 
                },
            },
        };

        const spawnRange = dimensions.width * 0.7;
        const minX = centerX - spawnRange / 2;
        const maxX = centerX + spawnRange / 2;
        
        const randomX = Math.random() * (maxX - minX) + minX;

        return Bodies.rectangle(
            randomX, 
            startY, 
            // 💡 dynamicScale 적용
            width * dynamicScale, 
            height * dynamicScale, 
            {
                ...options,
                chamfer: { radius: radius * dynamicScale },
            }
        );
    });

    return shuffleArray(newBodies);
};

// ----------------------------------------------------
// 메인 컴포넌트: Matter.js 엔진 초기화 및 캔버스 렌더링
// ----------------------------------------------------

const MatterVisual = ({ 
    isMouseControlEnabled = true, 
    createBodies = createBadgeBodies
}) => {
    const sceneRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    // ✨ 이 상태가 true가 되어야 Matter.js가 초기화됩니다.
    const [isCanvasInView, setIsCanvasInView] = useState(false); 

    // 💡 캔버스 크기 계산 로직 (기존과 동일)
    useEffect(() => {
        const setSize = () => {
            if (sceneRef.current) {
                setDimensions({
                    width: sceneRef.current.clientWidth,
                    height: sceneRef.current.clientHeight,
                });
            }
        };

        setSize();
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, []);
    
    // ✨ Intersection Observer 로직 (스크롤 진입 감지)
    useEffect(() => {
        const currentRef = sceneRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsCanvasInView(true); // 화면에 진입하면 상태 변경
                    observer.unobserve(currentRef); // 애니메이션은 한 번만 시작
                }
            },
            {
                root: null, 
                rootMargin: '0px',
                threshold: 0.1, // 요소의 10%가 보일 때 트리거
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);


    // 💡 Matter.js 엔진/렌더링 로직
    useEffect(() => {
        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
        
        // ✨ isCanvasInView가 true일 때만 초기화 및 실행
        if (!isCanvasInView || dimensions.width === 0 || dimensions.height === 0 || !sceneRef.current) {
            return;
        }

        // 1. 엔진 및 러너 생성
        const engine = Engine.create();
        const runner = Runner.create();
        const world = engine.world;
        world.gravity.y = 1;

        // 💡 엔진 정밀도 설정 추가 (떨림 현상 감소)
        engine.positionIterations = 8; // 기본값 6 -> 8로 증가 (충돌 감지 정밀도)
        engine.velocityIterations = 4; // 기본값 4 유지 또는 5로 증가 (속도 계산 정밀도)

        // 2. 렌더러 생성
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: dimensions.width,
                height: dimensions.height,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio,
                antialias: false,
            },
        });

        // 3. 경계 생성 (생략)
        const wallThickness = 24;
        const walls = [
            Bodies.rectangle(dimensions.width / 2, dimensions.height - wallThickness / 2, dimensions.width, wallThickness, { isStatic: true, render: { fillStyle: 'transparent' } }),
            Bodies.rectangle(dimensions.width / 2, -50, dimensions.width, wallThickness, { isStatic: true, render: { fillStyle: 'transparent' } }),
            Bodies.rectangle(wallThickness / 2, dimensions.height / 2, wallThickness, dimensions.height, { isStatic: true, render: { fillStyle: 'transparent' } }),
            Bodies.rectangle(dimensions.width - wallThickness / 2, dimensions.height / 2, wallThickness, dimensions.height, { isStatic: true, render: { fillStyle: 'transparent' } }),
        ];
        World.add(world, walls);
        
        // 4. 동적 물체 생성 및 시간차 추가
        const dynamicBodies = createBodies(Matter, dimensions);
        
        const timeouts = [];
        dynamicBodies.forEach((body, index) => {
            const timeout = setTimeout(() => {
                Matter.World.add(world, body);
            }, index * 500);
            timeouts.push(timeout);
        });

        // 5. 마우스 드래그 추가 (옵션 적용)
        if (isMouseControlEnabled) {
            const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: { stiffness: 0.9, render: { visible: false } },
            });
            World.add(world, mouseConstraint);
            render.mouse = mouse;
        }

        // 6. 실행
        Render.run(render);
        Runner.run(runner, engine);
        
        // 7. 클린업
        return () => {
            timeouts.forEach(clearTimeout);
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world, false);
            Engine.clear(engine);
            if (sceneRef.current && render.canvas) {
                render.canvas.remove();
                render.textures = {};
            }
        };

    }, [dimensions, isMouseControlEnabled, createBodies, isCanvasInView]); // isCanvasInView 의존성 추가

    return (
            <div
                ref={sceneRef}
                className="absolute inset-0 z-0"
            />
    );
};

export default MatterVisual;
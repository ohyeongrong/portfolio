'use client'

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const MatterVisualizer = () => {
    const sceneRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // 💡 캔버스 크기를 컨테이너 크기에 맞추기 위한 로직
    useEffect(() => {
        const setSize = () => {
            if (sceneRef.current) {
                setDimensions({
                    width: sceneRef.current.clientWidth,
                    height: sceneRef.current.clientHeight,
                });
            }
        };

        setSize(); // 초기 크기 설정
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, []);

    // 💡 Matter.js 초기화 로직
    useEffect(() => {
        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
        
        if (dimensions.width === 0 || dimensions.height === 0 || !sceneRef.current) {
            return; // 크기가 0이면 초기화하지 않음
        }

        // 1. 엔진 및 러너 생성
        const engine = Engine.create();
        const runner = Runner.create();
        const world = engine.world;
        
        // 중력 설정
        world.gravity.y = 1;

        // 2. 렌더러 생성
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: dimensions.width,
                height: dimensions.height,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio, // ✅ 고해상도 캔버스
                antialias: false,   
            },
        });

        

        // 3. 경계 및 객체 생성 (캔버스 크기에 맞춰 좌표 조정)
        const wallThickness = 24;

        // 바닥 (Ground)
        const ground = Bodies.rectangle(
            dimensions.width / 2,
            dimensions.height - wallThickness / 2,
            dimensions.width,
            wallThickness,
            { 
                isStatic: true, 
                render: { fillStyle: 'transparent' }
            }
        );

        const topWall = Bodies.rectangle(
            dimensions.width / 2,
            -50,
            dimensions.width,
            wallThickness,
            { isStatic: true, render: { fillStyle: 'transparent' } }
        );

          // 왼쪽, 오른쪽 벽 (경계)
        const leftWall = Bodies.rectangle(
            wallThickness / 2, 
            dimensions.height / 2, 
            wallThickness, 
            dimensions.height, 
            { isStatic: true, render: { fillStyle: 'transparent' } }
        );

        const rightWall = Bodies.rectangle(
            dimensions.width - wallThickness / 2, 
            dimensions.height / 2, 
            wallThickness, 
            dimensions.height, 
            { isStatic: true, render: { fillStyle: 'transparent' } }
        );
        
        const badges = [];
        const centerX = dimensions.width / 2;
        const startY = -50;

        for (let i = 1; i <= 7; i++) {
            const scale = 1.3; // 모든 배지 공통 스케일
            if (i <= 3) {
                // 원형
                const radius = 46;
                badges.push(
                    Bodies.circle(
                        centerX, 
                        startY, // 스케일에 따라 위로 이동
                        radius * scale, 
                        {
                            restitution: 0.9,
                            render: {
                                sprite: {
                                    texture: `/icons/hero-visual-badge-${i}.svg`,
                                    xScale: scale,
                                    yScale: scale
                                }
                            }
                        }
                    )
                );
            } else {
                // 타원형
                const width = 320;
                const height = 74;
                badges.push(
                    Bodies.rectangle(
                        centerX, 
                        startY, // 스케일에 따라 위로 이동
                        width * scale, 
                        height * scale, 
                        {
                            restitution: 0.9,
                            chamfer: { radius: 30 },
                            render: {
                                sprite: {
                                    texture: `/icons/hero-visual-badge-${i}.svg`,
                                    xScale: scale,
                                    yScale: scale
                                }
                            }
                        }
                    )
                );
            }
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // badges 배열 섞기
        const shuffledBadges = shuffleArray(badges);

        // 시간차로 추가
        shuffledBadges.forEach((badges, index) => {
            setTimeout(() => {
                Matter.World.add(world, badges)
            }, index * 500) // 0.5초 간격
        })

        World.add(world, [ground, leftWall, rightWall, topWall]);

        // 🔹 마우스 드래그 추가
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.9, // 끌 때 유연성
                render: {
                visible: false, // 선 안보이게
                },
            },
        });
        
        World.add(world, mouseConstraint);

        // 캔버스에 마우스 바인딩
        render.mouse = mouse;


        // 4. 엔진 및 렌더러 실행
        Render.run(render);
        Runner.run(runner, engine);
        
        // 5. 클린업 (매우 중요)
        return () => {
            // 엔진과 렌더러를 모두 명확하게 정지시키고 메모리에서 제거합니다.
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world, false);
            Engine.clear(engine);
            // 캔버스 요소를 DOM에서 제거합니다.
            if (sceneRef.current && render.canvas) {
                render.canvas.remove();
                render.textures = {};
            }
        };

    }, [dimensions]); // dimensions가 변경될 때마다 다시 초기화

    return (
            <div
                ref={sceneRef}
                className="absolute inset-0 z-0"
            />
    );
};

export default MatterVisualizer;

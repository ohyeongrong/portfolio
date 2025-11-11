'use client'

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { createBadgeBodies } from './MatterUtils';

// ----------------------------------------------------
// 메인 컴포넌트: Matter.js 엔진 초기화 및 캔버스 렌더링
// ----------------------------------------------------

const MatterVisual = ({ createBodies = createBadgeBodies }) => {
  const sceneRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isCanvasInView, setIsCanvasInView] = useState(false);

  // ✅ 1. 컨테이너 크기 계산
  useEffect(() => {
    const updateSize = () => {
      if (sceneRef.current) {
        setDimensions({
            width: sceneRef.current.clientWidth,
            height: sceneRef.current.clientHeight,
        });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // ✅ 2. Intersection Observer로 “보일 때만 실행”
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCanvasInView(true);
          observer.unobserve(el); // 한 번만 실행
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  // ✅ 3. Matter.js 초기화 및 렌더링
  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner } = Matter;

    if (!isCanvasInView || dimensions.width === 0 || dimensions.height === 0)
      return;

    // 엔진 생성
    const engine = Engine.create();
    const runner = Runner.create();
    const world = engine.world;
    world.gravity.y = 1;

    // 충돌 감지 정밀도 약간 향상
    engine.positionIterations = 8;
    engine.velocityIterations = 4;

    // 렌더러 생성
    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio > 1 ? 1.5 : 1,
        antialias: false,
      },
    });

    // 벽(경계) 생성
    const wallT = 24;
    const walls = [
      Bodies.rectangle(
        dimensions.width / 2,
        dimensions.height - wallT / 2,
        dimensions.width,
        wallT,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      ),
      Bodies.rectangle(
        wallT / 2,
        dimensions.height / 2,
        wallT,
        dimensions.height,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      ),
      Bodies.rectangle(
        dimensions.width - wallT / 2,
        dimensions.height / 2,
        wallT,
        dimensions.height,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      ),
    ];
    World.add(world, walls);

    // 배지 생성
    const badges = createBodies(Matter, dimensions);

    // 시간차로 추가 (부드럽게 떨어지게)
    const timeouts = badges.map((body, i) =>
      setTimeout(() => World.add(world, body), i * 400)
    );

    // 실행
    Render.run(render);
    Runner.run(runner, engine);

    // ✅ 클린업 (리소스 누수 방지)
    return () => {
      timeouts.forEach(clearTimeout);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
        render.textures = {};
      }
    };
  }, [dimensions, createBodies, isCanvasInView]);

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 z-0 cursor-default"
    />
  );
};

export default MatterVisual;

'use client'

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { createBadgeBodies, createEllipseBodies } from './MatterUtils';

// ----------------------------------------------------
// matterUtils
// ----------------------------------------------------
const bodyCreators = {
  badge: createBadgeBodies,
  ellipse: createEllipseBodies,
};

// ----------------------------------------------------
// matter visual
// ----------------------------------------------------
const MatterVisual = ({ type = 'badge' }) => {
  const sceneRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isCanvasInView, setIsCanvasInView] = useState(false);

  // 컨테이너 크기 계산
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

  // Intersection Observer
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCanvasInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  // Matter.js 초기화
  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner } = Matter;
    if (!isCanvasInView || dimensions.width === 0 || dimensions.height === 0) return;

    // 선택된 body 생성
    const createBodiesFn = bodyCreators[type] || createBadgeBodies;

    const engine = Engine.create();
    const runner = Runner.create();
    const world = engine.world;
    world.gravity.y = 1;

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

    // 벽
    const wallT = 24;
    const walls = [
      Bodies.rectangle(dimensions.width / 2, dimensions.height - wallT / 2, dimensions.width, wallT, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Bodies.rectangle(wallT / 2, dimensions.height / 2, wallT, dimensions.height, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Bodies.rectangle(dimensions.width - wallT / 2, dimensions.height / 2, wallT, dimensions.height, { isStatic: true, render: { fillStyle: 'transparent' } }),
    ];
    World.add(world, walls);

    // type에 따라 다른 body 생성
    const bodies = createBodiesFn(Matter, dimensions);

    // 부드럽게 등장
    const timeouts = bodies.map((body, i) =>
      setTimeout(() => World.add(world, body), i * 400)
    );

    Render.run(render);
    Runner.run(runner, engine);

    // 클린업
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
  }, [dimensions, type, isCanvasInView]);

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 z-0 cursor-default"
    />
  );
};

export default MatterVisual;

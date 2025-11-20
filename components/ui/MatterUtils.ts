
// ----------------------------------------------------
// 배열 무작위 섞기
// ----------------------------------------------------
    export const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    };

// ----------------------------------------------------
// 공통 설정값
// ----------------------------------------------------
    const INITIAL_VP_WIDTH = 1920;
    const BASE_SCALE = 1.1;
    const BASE_SCALE_ELLIPSE = 1.8;
    const MIN_SCALE = 0.8;
    const MIN_SCALE_ELLIPSE = 0.6;

// ----------------------------------------------------
// 타입정의
// ----------------------------------------------------

// dimensions 객체의 구조
    export interface IDimensions {
        width: number;
        height: number;
    }

// ----------------------------------------------------
// createBadgeBodies (Hero에서 사용)
// ----------------------------------------------------
    export const createBadgeBodies = (Matter: typeof import('matter-js'), dimensions: IDimensions): Matter.Body[]=> {
    const { Bodies } = Matter;
    const centerX = dimensions.width / 2;
    const startY = -50;

    const scale = Math.max((dimensions.width / INITIAL_VP_WIDTH) * BASE_SCALE, MIN_SCALE);

    const ellipseBadgeData = [
        { width: 234, height: 74 },
        { width: 306, height: 74 },
        { width: 272, height: 74 },
        { width: 316, height: 74 },
        { width: 227, height: 74 },
    ];

    const badges: Matter.Body[] = [] = [];

    for (let i = 1; i <= 8; i++) {
        const options = {
        restitution: 0.3,
        friction: 0.1,
        frictionStatic: 0.8,
        density: 0.0025,
        render: {
            sprite: {
            texture: `/icons/hero-visual-badge-${i}.svg`,
            xScale: scale,
            yScale: scale,
            },
        },
        };

        const body: Matter.Body =
        i <= 3
            ? Bodies.circle(centerX, startY, 46 * scale, options)
            : Bodies.rectangle(
                centerX,
                startY,
                ellipseBadgeData[i - 4].width * scale,
                ellipseBadgeData[i - 4].height * scale,
                { ...options, chamfer: { radius: 30 * scale } }
            );

        badges.push(body);
    }

    return shuffleArray(badges);
    };

// ----------------------------------------------------
// createEllipseBodies (Stack 섹션에서 사용)
// ----------------------------------------------------
    export const createEllipseBodies = (Matter: typeof import('matter-js'), dimensions: IDimensions): Matter.Body[] => {
    const { Bodies } = Matter;
    const centerX = dimensions.width / 2;
    const startY = -50;
    const scale = Math.max((dimensions.width / INITIAL_VP_WIDTH) * BASE_SCALE_ELLIPSE, MIN_SCALE_ELLIPSE);

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

    const bodies: Matter.Body[] = ellipseData.map((data) => {
        const { width, height, texture, radius } = data;
        const spawnRange = dimensions.width * 0.7;
        const minX = centerX - spawnRange / 2;
        const maxX = centerX + spawnRange / 2;
        const randomX = Math.random() * (maxX - minX) + minX;

        return Bodies.rectangle(randomX, startY, width * scale, height * scale, {
        restitution: 0.3,
        friction: 0.1,
        frictionStatic: 0.8,
        density: 0.0025,
        render: {
            sprite: {
            texture,
            xScale: scale,
            yScale: scale,
            },
        },
        chamfer: { radius: radius * scale },
        });
    });

    return shuffleArray(bodies);
    };

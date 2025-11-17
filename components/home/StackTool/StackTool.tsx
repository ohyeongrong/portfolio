
import SectionTitle from "@/components/ui/SectionTitle";
import MarqueeText from "../../ui/MarqueeText";
import MatterVisual from "@/components/ui/MatterVisual";
import StackList from "./StackList";

const STACK_DATA = [
    { 
        category: 'Language', 
        description: '웹 구조와 스타일을 정의하고, 핵심 로직 및 타입 안전성을 구현합니다.',
        tools: [
            { id: 'html', content: 'HTML', color: 'black'},
            { id: 'css', content: 'CSS', color: 'black'},
            { id: 'js', content: 'JavaScript', color: 'black'},
            { id: 'ts', content: 'TypeScript', color: 'black'},
        ]
    },
    { 
        category: 'Frameworks', 
        description: '컴포넌트 기반 UI 구축 및 서버 렌더링으로 고성능 웹 앱을 개발합니다.',
        tools: [
            { id: 'react', content: 'React', color: 'black' },
            { id: 'next', content: 'Next.js', color: 'black' },
            { id: 'tailwind', content: 'Tailwind CSS', color: 'white' },
        ]
    },
    { 
        category: 'UI & Utils', 
        description: '빠른 스타일링, 상태/애니메이션 관리 및 효율적 빌드로 생산성과 사용자 경험을 향상합니다.',
        tools: [
            { id: 'gsap', content: 'GSAP', color: 'white' }, 
            { id: 'vite', content: 'Vite', color: 'white' }, 
            { id: 'zustand', content: 'Zustand', color: 'white' },
        ]
    },
    { 
        category: 'Design Tool', 
        description: 'UI/UX 디자인 및 그래픽 리소스 제작을 통해 필요한 모든 시각적 요소를 직접 처리합니다.',
        tools: [
            { id: 'figma', content: 'Figma', color: 'gray' },
            { id: 'xd', content: 'XD', color: 'gray' },
            { id: 'illustrator', content: 'Illustrator', color: 'gray' },
            { id: 'photoshop', content: 'Photoshop', color: 'gray' },
        ]
    },
    { 
        category: 'Git', 
        description: '코드 이력 관리와 안전한 협업을 통해 개발 프로세스의 신뢰성을 유지합니다.',
        tools: [
            { id: 'git', content: 'Git', color: 'white' },
            { id: 'github', content: 'GitHub', color: 'white' },
        ]
    },
];


export default function StackTool() {

    return (
        <section className="panel">
            <div className="py-16 md:py-24 lg:py-32">
                <div className="px-6">
                    <h2 className="sr-only">Stack & Tool</h2>
                    <SectionTitle text='Stack & Tool'/>
                </div>
                <div className="flex flex-col lg:flex-row justify-between pt-16 lg:gap-16 h-fit">
                    <div className="w-full lg:w-1/2 relative h-[70vh] sm:h-[60vh] md:h-[50vh] lg:h-auto">
                        <h3 className="sr-only">Tool List</h3>
                        <MatterVisual type="ellipse" />
                    </div>
                    <StackList stack={STACK_DATA}/>
                </div>
                <div className="px-6">
                    <MarqueeText textContent={
                        <>
                            <span>©2025 Oh! YeongRong</span>
                            <span>©2025 Oh! YeongRong</span>
                        </>
                    }/>
                </div>
            </div>
        </section>
    )
}
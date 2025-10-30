import MarqueeText from "./MarqueeText";
import Badge from "./ui/Badge";
import MatterVisual, { createEllipseBodies } from "./ui/MatterVisual";


export const STACK_DATA = [
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


    //마우스 오버했을 때 툴 나오는거임.
    const badgeGroups = (tools) => {
        const groups = [];

        const dispalyTools = tools.slice(0, 4);

        for(let i = 0; i < dispalyTools.length; i += 2){
            const tool1 = dispalyTools[i]
            const tool2 = dispalyTools[i + 1]

            if (tool1 && tool2) {
                groups.push({
                    id: `${tool1.id}-${tool2.id}`, 
                    content: `${tool1.content} & ${tool2.content}`, 
                });
            } 
            else if (tool1) {
                groups.push({
                    id: `${tool1.id}`, 
                    content: `${tool1.content}`,
                });
            }
        }
        return groups;
    }


    return (
        <section>
            <div className="px-6 py-16 md:py-24 lg:py-32">
                <h2 className="text-[clamp(2.25rem,2.1rem+0.75vw,3rem)] tracking-tight leading-none">Stack & Tool</h2>
                <div className="flex flex-col lg:flex-row justify-between pt-16 gap-16">
                    {/* 뱃지 matter 적용 부분 */}
                    <div className="flex-1/2 relative">
                        <h3 className="sr-only">Tool List</h3>
                        <MatterVisual 
                                createBodies={createEllipseBodies}
                                isMouseControlEnabled={false}
                            />
                    </div>
                    {/* tool & stack의 설명 부분 */}
                    <div className="flex-1/2 tracking-tight">
                        {
                            STACK_DATA.map(stack => 
                                <dl key={stack.category} className="flex flex-col xl:flex-row xl:items-center gap-[clamp(0.5rem,0.3rem+1vw,1.5rem)] border-b border-[var(--color-gray-200)] py-[clamp(2rem,1.8rem+1vw,3rem)] relative">
                                    <dt className="flex-2/5 text-[clamp(3rem,2.85rem+0.75vw,3.75rem)] leading-none">{stack.category}</dt>
                                    {/* 마우스 오버 시 나오는건데 이거 나중에 따로 컴포넌트 분리하던가??  */}
                                    <div className=" absolute flex flex-col">
                                        {
                                            badgeGroups(stack.tools).map((tool, i)=>{
                                                const first = i === 0;
                                                const badgeClass = first
                                                ? 'relative z-10 rotate-5 translate-x-5'
                                                : '-rotate-15'
                                                const badgeColor = first
                                                ? 'gray'
                                                : 'white'
                                                
                                                return(
                                                    <Badge 
                                                    key={tool.id}
                                                    content={tool.content}
                                                    color={badgeColor} 
                                                    size="sm" 
                                                    className={badgeClass}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <dd className="flex-3/5 text-[clamp(1rem,0.975rem+0.125vw,1.125rem)] text-[var(--color-gray-500)]">{stack.description}</dd>
                                </dl>
                            )
                        }
                    </div>
                </div>
                {/* 하단 흐르는 텍스트 */}
                <MarqueeText/>
            </div>
        </section>
    )
}
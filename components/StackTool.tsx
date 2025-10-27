import MarqueeText from "./MarqueeText";
import Badge from "./ui/Badge";


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
            <div className="px-6 py-32">
                <h2 className="text-5xl tracking-tight">Stack & Tool</h2>
                <div className="flex justify-between pt-16">
                    {/* tool 뱃지들 예를들어 javaScript, HTML 등 이런 요소를 matter.js이용해서 위에서 떨어지게 대신 드래그 드롭은 안할거야  */}
                    <div className="flex-1/2">
                        <h3 className="sr-only">Tool List</h3>
                        <ul className="text-xl">
                            {
                                STACK_DATA.flatMap(category => category.tools)
                                .map(tool => 
                                    <li key={tool.id}>
                                        <Badge content={tool.content} color={tool.color}/>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    {/* tool & stack의 설명 부분 */}
                    <div className="flex-1/2 tracking-tight">
                        {
                            STACK_DATA.map(stack => 
                                <dl key={stack.category} className="flex items-center gap-6 border-b py-10 relative">
                                    <dt className="flex-2/5 text-6xl">{stack.category}</dt>
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
                                    <dd className="flex-3/5 text-lg text-[var(--color-gray-500)]">{stack.description}</dd>
                                </dl>
                            )
                        }
                    </div>
                </div>
                {/* 의미없는 그냥 장식 하단에서 크게 오른쪽에서 왼쪽으로 흐르는 */}
                <MarqueeText/>
            </div>
        </section>
    )
}
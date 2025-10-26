import Badge from "./ui/Badge"


const SKILL_BADGE = [
    { id: 'skill1', content: 'Development', color: 'black', size: 'xl'},
    { id: 'skill2', content: 'UX UI Design', color: 'white', size: 'xl'},
    { id: 'skill3', content: 'Planning', color: 'gray', size: 'xl'},
    { id: 'skill4', content: '', iconName: 'smile', iconSize: 55, color: 'gray', size: 'none'},
    { id: 'skill5', content: '', iconName: 'arrowOutward', iconSize: 55, color: 'black', size: 'none'},
    { id: 'skill6', content: '', iconName: 'asterisk', iconSize: 55, color: 'white', size: 'none'},
]


export default function Hero() {
    return (
        <section className="h-[95vh]">
            <h2 className="sr-only">hero</h2>
            {/*  matter.js 이용해서 위에서 요소들이 떨어지게 할거임 드래그 드롭도 가능 */}
            <div className="flex flex-col h-full justify-end">
                <div className="flex flex-col items-center justify-center w-full h-[50vh]">
                    <h3 className="sr-only">Skill</h3>
                    <ul>
                        {
                            SKILL_BADGE.map(badge =>
                                <li key={badge.id}>
                                    <Badge content={badge.content} color={badge.color} size={badge.size} iconName={badge.iconName} iconSize={badge.iconSize}/>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div aria-hidden="true" className="flex overflow-hidden justify-between items-center text-center text-[17vw] tracking-tighter leading-none">
                    <div className="flex-1">Oh!</div>
                    <div className="flex-1 text-transparent [-webkit-text-stroke:1px_black]">Oh!</div>
                    <div className="flex-1">Oh!</div>
                    <div className="flex-1 text-transparent [-webkit-text-stroke:1px_black]">Oh!</div>
                </div>
            </div>
        </section>
    )
}
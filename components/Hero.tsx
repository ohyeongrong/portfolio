
import MatterVisual from "./ui/MatterVisual"
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
        <section className="h-[95vh] w-dvw">
            <h2 className="sr-only">hero</h2>
            {/*  matter.js 이용해서 위에서 요소들이 떨어지게 할거임 드래그 드롭도 가능 */}
            <div className="w-full h-full flex flex-col justify-end">
                <div className="w-full h-full relative">
                    <MatterVisual />
                </div>
                <div aria-hidden="true" className="flex overflow-hidden justify-between items-center text-center w-full text-[17vw] tracking-tighter leading-none">
                    <div className="flex-1 ">Oh!</div>
                    <div className="flex-1 text-transparent [-webkit-text-stroke:1px_black]">Oh!</div>
                    <div className="flex-1">Oh!</div>
                    <div className="flex-1 text-transparent [-webkit-text-stroke:1px_black]">Oh!</div>
                </div>
            </div>
        </section>
    )
}
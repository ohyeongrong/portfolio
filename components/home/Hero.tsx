
import MarqueeText from "../ui/MarqueeText"
import MatterVisual from "../ui/MatterVisual"
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
            <div className="w-full h-full flex flex-col">
                {/*  matter.js 이용함 위에서 요소들 떨어지고 드래그 드롭도 가능 */}
                <div className="w-full h-full flex-1 relative">
                    <MatterVisual />
                </div>

                <MarqueeText textContent={
                    <>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                    </>
                }/>
            </div>
        </section>
    )
}
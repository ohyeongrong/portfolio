import SectionTitle from "@/components/ui/SectionTitle";
import MarqueeText from "../../ui/MarqueeText";
import MatterVisual, { createEllipseBodies } from "../../ui/MatterVisual";
import StackList from "./StackList";



export default function StackTool() {

    return (
        <section className="panel">
            <div className="py-16 md:py-24 lg:py-32">
                <div className="px-6">
                    <h2 className="sr-only">Stack & Tool</h2>
                    <SectionTitle text='Stack & Tool'/>
                </div>
                <div className="flex flex-col lg:flex-row justify-between pt-16 lg:gap-16 h-fit">
                    {/* 뱃지 matter 적용 부분 */}
                    <div className="w-full lg:w-1/2 relative h-[70vh] sm:h-[60vh] md:h-[50vh] lg:h-auto">
                        <h3 className="sr-only">Tool List</h3>
                        <MatterVisual 
                                createBodies={createEllipseBodies}
                                isMouseControlEnabled={false}
                            />
                    </div>
                    {/* tool & stack의 설명 부분 */}
                    <StackList/>
                </div>
                {/* 하단 흐르는 텍스트 */}
                <div className="px-6">
                    <MarqueeText textContent={
                        <>
                            <span>©2025 Oh! YeongRong</span>
                            <span>©2025 Oh! YeongRong</span>
                            <span>©2025 Oh! YeongRong</span>
                            <span>©2025 Oh! YeongRong</span>
                        </>
                    }/>
                </div>
            </div>
        </section>
    )
}
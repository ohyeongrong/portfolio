import MarqueeText from "../ui/MarqueeText"
import MatterVisual from "../ui/MatterVisual"

export default function Hero() {

    return (
        <section className="panel h-dvh w-dvw">
            <h2 className="sr-only">hero</h2>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full flex-1 relative">
                    <MatterVisual type="badge"/>
                </div>
                <MarqueeText textContent={
                    <>
                        <span>Oh!</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_black]">Oh!</span>
                    </>
                }/>
            </div>
        </section>
    )
}
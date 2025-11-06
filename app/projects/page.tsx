import ProjectSwiper from "@/components/projects/ProjectSwiper";
import SwiperNav from "@/components/projects/SwiperNav";


export default function Projects(){

    return (
        <section className="h-dvh py-[10vh]">
            <div className="h-[80vh]">
                <ProjectSwiper />
            </div>
            <SwiperNav />
        </section>
    )
}
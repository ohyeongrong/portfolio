import PageTransition from "@/components/project-detail/PageTransition";
import ProjectSwiper from "@/components/projects/ProjectSwiper";
import SwiperNav from "@/components/projects/SwiperNav";
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";



export default function Projects(){

    return (
        <section className="h-dvh py-[10vh] bg-[var(--color-primary-dark)]">
            <PageTransition>
                <div className="h-[80vh]">
                    <ProjectSwiper project={PROJECT_DATA}/>
                </div>
                <SwiperNav />
            </PageTransition>
        </section>
    )
}
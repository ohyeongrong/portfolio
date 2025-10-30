import Link from "next/link";
import Image from 'next/image';
import Badge from "./ui/Badge";
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import ProjectBadgeList from "./ui/ProjectBadgeList";


const GRID_CLASSES = [
    "lg:col-span-5 md:col-span-4 sm:col-span-3 sm:col-start-1", 
    
    "lg:col-span-4 md:col-span-3 sm:col-span-2 lg:col-end-13 md:col-end-9 sm:col-end-7", 
    
    "lg:col-span-5 md:col-span-4 sm:col-span-3 lg:col-start-5 md:col-start-4 sm:col-start-3", 
    
    "lg:col-span-4 md:col-span-3 sm:col-span-2 sm:col-start-1", 
    
    "lg:col-span-5 md:col-span-4 sm:col-span-3 lg:col-end-13 md:col-end-9 sm:col-end-7"
];

export default function LatestProjects() {

    const latestCount = 5;
    const latestProjects = PROJECT_DATA.filter(p => p.isLatest).slice(0, latestCount);

    return (
        <section>
            <div className="px-6 py-16 flex flex-col gap-16">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
                    <h2 className="text-[clamp(2.25rem,2.1rem+0.75vw,3rem)] tracking-tight leading-none">Latest Projects</h2>
                    <Link href="/projects">
                        <Badge content="View All" size="md" color="gray" iconName="arrowOutward" iconSize={20}/>
                    </Link>
                </div>
                {/* 최근 작업물 썸네일*/}
                <ul className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-[clamp(4rem,2.4rem+8vw,12rem)] sm:items-end">
                    {
                        latestProjects.map((project, i) => {
                            return(
                                <li key={project.id + i} className={GRID_CLASSES[i]}>
                                    <article className="w-full">
                                        <Link href={project.id}>
                                            <div className="aspect-[3/2] relative">
                                                <Image className="object-cover rounded-2xl" src={project.thumbnail} alt={project.summary} fill/>
                                            </div>
                                            <div className="w-full flex flex-col gap-2 md:flex-row md:justify-between md:items-center py-2">
                                                <h3 className="text-xl">{project.title}</h3>
                                                {/* 카테고리 및 사용 툴 뱃지 */}
                                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0.5">
                                                    <ProjectBadgeList categories={project.categories} tools={project.tools}/>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
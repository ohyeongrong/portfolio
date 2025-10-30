import Link from "next/link";
import Image from 'next/image';
import Badge from "./ui/Badge";
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import ProjectBadgeList from "./ui/ProjectBadgeList";


const GRID_CLASSES = [
    "col-span-5 col-start-1", 
    
    "col-span-4 col-end-13", 
    
    "col-span-5 col-start-5", 
    
    "col-span-4 col-start-1", 
    
    "col-span-5 col-end-13"
];

export default function LatestProjects() {

    const latestCount = 5;
    const latestProjects = PROJECT_DATA.filter(p => p.isLatest).slice(0, latestCount);

    return (
        <section>
            <div className="px-6 py-16 flex flex-col gap-16">
                <div className="flex items-center justify-between">
                    <h2 className="text-5xl tracking-tight">Latest Projects</h2>
                    <Link href="/projects">
                        <Badge content="View All" size="md" color="gray" iconName="arrowOutward" iconSize={20}/>
                    </Link>
                </div>
                {/* 최근 작업물 썸네일*/}
                <ul className="grid grid-cols-12 gap-y-48 items-end">
                    {
                        latestProjects.map((project, i) => {
                            return(
                                <li key={project.id} className={GRID_CLASSES[i]}>
                                    <article>
                                        <Link href={project.id}>
                                            <div className="aspect-[3/2] relative">
                                                <Image className="object-cover rounded-2xl" src={project.thumbnail} alt={project.summary} fill/>
                                            </div>
                                            <div className="flex justify-between items-center py-2">
                                                <h3 className="text-xl">{project.title}</h3>
                                                {/* 카테고리 및 사용 툴 뱃지 */}
                                                <div className="flex items-center gap-0.5">
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
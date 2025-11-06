
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import HoverFillBtn from "../../ui/HoverFillBtn";
import LatestList from "./LatestList";
import Link from "next/link";




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
                    <Link href='/projects'>
                        <HoverFillBtn 
                            content="View All"
                            iconName="arrowOutward"
                            iconSize={20}
                            initialTextColor={'var(--color-primary-dark)'}
                            hoverTextColor={'#fff'}
                            initialBgColor={'var(--color-gray-200)'}
                            hoverBgColor={'var(--color-primary-dark)'}
                            sizeClassName={'text-lg md:text-xl px-4 py-1.5 md:px-5 md:py-2'}
                        />
                    </Link>
                </div>
                {/* 최근 작업물 썸네일*/}
                <LatestList />
            </div>
        </section>
    )
}

import { PROJECT_DATA, ProjectDataType } from "@/constants/PROJECT_DATA";
import HoverFillBtn from "../../ui/HoverFillBtn";
import LatestList from "./LatestList";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

export default function LatestProjects() {

    const latestCount = 5;
    const latestProjects: ProjectDataType[] = PROJECT_DATA.filter(p => p.isLatest).slice(0, latestCount);

    return (
        <section className="panel">
            <div className="px-6 py-16 flex flex-col gap-16">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
                    <h2 className="sr-only">Latest Projects</h2>
                    <SectionTitle text={'Latest Projects'}/>
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
                <LatestList latestProjects={latestProjects}/>
            </div>
        </section>
    )
}
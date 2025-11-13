import Link from "next/link";
import Image from 'next/image';
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import { notFound } from 'next/navigation';
import TextLink from "@/components/ui/TextLink";
import ProjectBadgeList from "@/components/ui/ProjectBadgeList";
import Badge from "@/components/ui/Badge";
import HoverRevealText from "@/components/utility/HoverRevealText";
import ProjectDetailGallery from "@/components/project-detail/ProjectDetailGallery";
import ProjectDetailFeatureList from "@/components/project-detail/ProjectDetailFeatureList";

type ProjectDetailProps = {
    params: {
        id: string;
    };
};


export default async function ProjectDetail({ params }: ProjectDetailProps) {

    const projectId = params.id;

    const project = PROJECT_DATA.find(p => p.id === projectId);

    if (!project) {
        notFound();
    }

    //하단 갤러리 영역
    const imageWidths = ["w-[20vw]", "w-[30vw]", "w-[40vw]", "w-[20vw]"];
    
    const galleryData = project.details.detailImages.gallery || []; 

    const firstRow = galleryData.slice(0, 4);
    const secondRow = galleryData.slice(4, 8);

    const gitHub = <TextLink content="GitHub" iconName="arrowOutward" iconSize={18}/>
    const webSite = <TextLink content="WebSite" iconName="arrowOutward" iconSize={18}/>

    return (
        <section className="">
            {/* <div 
                className="w-full h-dvh bg-center bg-cover"
                style={{ 
                    backgroundImage: `url(${project.details.detailImages.mainImages.src})`
                }}
            ></div> */}
            {/* 상단 헤더 */}
            <div className="px-6 flex flex-col gap-4 pb-16">
                <div className="text-[clamp(0.875rem,0.846rem+0.128vw,1rem)]">
                    <time dateTime={ project.duration }>{ project.duration }</time>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="flex-1/2 flex flex-col gap-4">
                        <h2 className="text-[clamp(3rem,2.654rem+1.538vw,4.5rem)] tracking-tight leading-none">{ project.title }</h2>
                        <div className="flex flex-wrap gap-1">
                            <ProjectBadgeList tools={project.tools} categories={project.categories}/>
                        </div>
                    </div>
                    <div className="flex-1/2 flex flex-col lg:flex-row gap-8">
                        <div className="flex-2/3 lg:text-lg">
                            <p>{ project.details.description }</p>
                        </div>
                        <div className="flex-1/3 flex justify-end gap-2">
                            <Link href={ project.githubUrl }>
                                <HoverRevealText hoverContent={gitHub}>
                                    {gitHub}
                                </HoverRevealText>
                            </Link>
                            <Link href={ project.websiteUrl }>
                                <HoverRevealText hoverContent={webSite}>
                                    {webSite}
                                </HoverRevealText>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectDetailGallery project={project}/>
            <ProjectDetailFeatureList project={project}/>
        </section>
    )
}
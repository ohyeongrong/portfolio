
'use client'

import Link from "next/link";
import Image from 'next/image';
import TextLink from "@/components/ui/TextLink";
import ProjectBadgeList from "@/components/ui/ProjectBadgeList";
import HoverRevealText from "@/components/utility/HoverRevealText";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { ProjectDataType } from "@/constants/PROJECT_DATA";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailHeaderProps {
    project: ProjectDataType
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const gitHub = <TextLink content="GitHub" iconName="arrowOutward" iconSize={18}/>
    const webSite = <TextLink content="WebSite" iconName="arrowOutward" iconSize={18}/>

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    y: 100,
                    scale: 1.4,
                    ease: "none", 
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top", 
                        scrub: true,
                    }
                });
            }
        }, containerRef); 

        return () => ctx.revert();
    }, []);

    return (
            <div ref={containerRef} className="w-full h-dvh px-6 flex flex-col">
                <div className="flex flex-col gap-4 h-[50vh] lg:h-[25vh]">
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
                            <div className="flex-2/3 lg:text-lg font-(family-name:--font-pretendard)">
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
                <figure ref={imageRef} className="relative w-full h-[45vh] lg:h-[70vh]">
                    <Image className="object-cover rounded-2xl" src={project.details.detailImages.mainImages.src} alt={project.details.detailImages.mainImages.caption} fill/>
                </figure>
            </div>
    )
}
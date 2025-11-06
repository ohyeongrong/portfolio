import Link from "next/link";
import Image from 'next/image';
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import { notFound } from 'next/navigation';
import TextLink from "@/components/ui/TextLink";
import ProjectBadgeList from "@/components/ui/ProjectBadgeList";
import Badge from "@/components/ui/Badge";
import HoverRevealText from "@/components/utility/HoverRevealText";


export default function ProjectDetail({ params }) {

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
        <section className="pt-50 lg:py-60">
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
            <div className="flex flex-col md:gap-60">
                <div 
                    className="w-full h-dvh bg-center bg-cover"
                    style={{ 
                        backgroundImage: `url(${project.details.detailImages.mainImages.src})`
                    }}
                ></div>

                {
                    project.details.keyFeatures.map((feat, i) => {
                        
                        const isOdd = i % 2 !== 0;

                        const ImageClasses = isOdd 
                            ? "md:col-start-8 md:col-span-5 md:order-2" // 홀수: 오른쪽 배치, MD에서 순서 2
                            : "md:col-start-1 md:col-span-5 md:order-1" // 짝수: 왼쪽 배치, MD에서 순서 1

                        const ContentClasses = isOdd
                            ? "md:col-start-3 md:col-span-4 md:order-1" // 홀수: 왼쪽 배치, MD에서 순서 1
                            : "md:col-start-7 md:col-span-4 md:order-2" // 짝수: 오른쪽 배치, MD에서 순서 2 (이미지보다 나중에 옴)

                        
                        const ContentBlock = ( 
                            <div className={`${ContentClasses} order-2`}>
                                <div className="flex flex-col gap-8">
                                    <ul className="flex gap-0.5">
                                        {
                                            feat.toolsUsed.map((tool, i) =>
                                                <li key={tool + i}>
                                                    <Badge content={tool} size="xs" color="white"/>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <dl className="flex flex-col gap-4">
                                        <dt className="text-[clamp(2.5rem,2.212rem+1.282vw,3.75rem)] font-bold tracking-tight leading-none">{ feat.featureTitle }</dt>
                                        <dd className="lg:text-lg font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
                                            { feat.content }
                                        </dd>
                                    </dl>
                                    {
                                        feat.problemSolving &&
                                        <>
                                            <div className="border-b"></div>
                                            {
                                                feat.problemSolving.map((problem, i) => 
                                                    <dl key={problem.title + i} className="flex flex-col gap-1">
                                                        <dt className="font-bold text-lg lg:text-xl">{problem.title}</dt>
                                                        <dd className="lg:text-lg font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
                                                            {problem.content}
                                                        </dd>
                                                    </dl>
                                                )
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        );

                        const ImageBlock = (
                            <figure className={`${ImageClasses} aspect-[10/12] relative order-1`}>
                                <Image className="object-cover rounded-2xl" src={feat.featureImage.src} alt={feat.featureImage.caption} fill/>
                            </figure>
                        );

                        return (
                            <div key={feat.id} className="grid grid-cols-1 md:grid-cols-12 items-center px-6 gap-y-8 py-16">
                                {ImageBlock}
                                {ContentBlock}
                            </div>
                        )
                    })
                }

                {/* 하단 갤러리 영역 이미지 8장 */}
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 py-16">
                    {/* 첫째 줄 */}
                    <div className="w-full flex overflow-hidden flex-nowrap justify-center items-end gap-2 md:gap-4 lg:gap-6">
                        {
                            firstRow.map((image, i) => (
                                <figure 
                                    key={i} 
                                    className={`${imageWidths[i]} aspect-[3/2] relative flex-shrink-0`}
                                >
                                    <Image 
                                        className=" object-cover rounded-lg md:rounded-xl lg:rounded-2xl" 
                                        src={image.src} 
                                        alt={image.caption} 
                                        fill
                                    />
                                </figure>
                            ))
                        }
                    </div>
                    {/* 둘째 줄 */}
                    <div className="w-full flex overflow-hidden flex-nowrap justify-end items-start gap-2 md:gap-4 lg:gap-6 ">
                        {
                            secondRow.map((image, i) => (
                                <figure 
                                    key={i + 4}
                                    className={`${imageWidths[i]} aspect-[3/2] relative flex-shrink-0`}
                                >
                                    <Image 
                                        className=" object-cover rounded-lg md:rounded-xl lg:rounded-2xl" 
                                        src={image.src} 
                                        alt={image.caption} 
                                        fill
                                    />
                                </figure>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
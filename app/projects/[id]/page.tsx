import Link from "next/link";
import Image from 'next/image';
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import { notFound } from 'next/navigation';
import TextLink from "@/components/ui/TextLink";
import ProjectBadgeList from "@/components/ui/ProjectBadgeList";
import Badge from "@/components/ui/Badge";



export default function ProjectDetail({ params }) {

    const projectId = params.id;

    const project = PROJECT_DATA.find(p => p.id === projectId);

    if (!project) {
        notFound();
    }

    return (
        <section className="py-60">
            <div className="px-6 flex flex-col gap-4 pb-16">
                <div>
                    <time dateTime={ project.duration }>{ project.duration }</time>
                </div>
                <div className="flex justify-between">
                    <div className="flex-1/2 flex flex-col gap-4">
                        <h2 className="text-7xl">{ project.title }</h2>
                        <div className="flex flex-wrap gap-1">
                            <ProjectBadgeList tools={project.tools} categories={project.categories}/>
                        </div>
                    </div>
                    <div className="flex-1/2 flex">
                        <div className="flex-2/3">
                            <p>{ project.details.description }</p>
                        </div>
                        <div className="flex-1/3 flex justify-end gap-2">
                            <Link href={ project.githubUrl }>
                                <TextLink content="GitHub" iconName="arrowOutward" iconSize={18}/>
                            </Link>
                            <Link href={ project.websiteUrl }>
                                <TextLink content="WebSite" iconName="arrowOutward" iconSize={18}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-60">
                <div 
                    className="w-full h-dvh bg-center bg-cover" // 나머지 Tailwind 클래스는 유지
                    style={{ 
                        backgroundImage: `url(${project.details.detailImages.mainImages.src})` // 인라인 스타일로 URL 설정
                    }}
                ></div>
                {
                    project.details.keyFeatures.map((feat, i) => {
                        
                        const isEven = i % 2 === 1;

                        const imageClasses = isEven 
                        ? "col-end-13" 
                        : "col-start-1"

                    
                        const contentClasses = isEven
                        ? "col-start-3" 
                        : "col-start-7"

                        return (
                            <div key={feat.id} className="grid grid-cols-12 items-center px-6">
                                <figure className={`${imageClasses} col-span-5 aspect-[10/12] relative`}>
                                    <Image className="object-cover rounded-2xl" src={feat.featureImage.src} alt={feat.featureImage.caption} fill/>
                                </figure>
                                <div className={`${contentClasses} col-span-3`}>
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
                                            <dt className="text-4xl font-bold">{ feat.featureTitle }</dt>
                                            <dd className="font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
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
                                                            <dt className="font-bold text-lg">{problem.title}</dt>
                                                            <dd className="font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
                                                                {problem.content}
                                                            </dd>
                                                        </dl>
                                                    )
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="flex flex-col gap-6">
                    <div className="w-full flex overflow-hidden flex-nowrap justify-center items-end gap-6">
                        <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                        <figure className="w-[30vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                        <figure className="w-[40vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                        <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                    </div>
                    <div className="w-full flex overflow-hidden flex-nowrap justify-end items-start gap-6">
                        <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                        <figure className="w-[30vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                        <figure className="w-[40vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                        <figure className="w-[20vw] aspect-[3/2] relative flex-shrink-0">
                            <Image className=" object-cover rounded-2xl" src="/images/about-design-img-2.webp" alt="프로젝트 이미지" fill/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
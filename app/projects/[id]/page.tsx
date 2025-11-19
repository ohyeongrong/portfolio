import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import { notFound } from 'next/navigation';
import ProjectDetailGallery from "@/components/project-detail/ProjectDetailGallery";
import ProjectDetailFeatureList from "@/components/project-detail/ProjectDetailFeatureList";
import ProjectDetailHeader from "@/components/project-detail/ProjectDetailHeader";
import PageTransition from "@/components/project-detail/PageTransition";


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

    return (
        <PageTransition>
            <section className="w-full overflow-x-hidden py-[15vh]">
                <div className="flex flex-col gap-[30vh]">
                    <ProjectDetailHeader project={project}/>
                    <ProjectDetailFeatureList project={project}/>
                    {/* <ProjectDetailGallery project={project}/> */}
                </div>
            </section>
        </PageTransition>
    )
}
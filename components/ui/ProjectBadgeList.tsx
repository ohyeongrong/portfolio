import Badge from "./Badge"

interface ProjectBadgeListProps {
    categories: string[];
    tools: string[];
}

export default function ProjectBadgeList({categories, tools}: ProjectBadgeListProps) {
    return (
            <>
                <ul className="flex flex-wrap items-center gap-0.5">
                    {
                        categories.map(category =>
                            <li key={category}>
                                <Badge content={ category } size="xs" rounded={false}/>
                            </li>
                        )
                    }
                </ul>
                <ul className="flex flex-wrap items-center gap-0.5">
                    {
                        tools.map(tool =>
                            <li key={tool}>
                                <Badge content={tool} size="xs" color="white"/>
                            </li>
                        )
                    }
                </ul>
            </>
    )
}
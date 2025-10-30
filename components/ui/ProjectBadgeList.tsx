import Badge from "./Badge"

export default function ProjectBadgeList({categories, tools}) {
    return (
            <>
                <ul className="flex items-center gap-0.5">
                    {
                        categories.map(category =>
                            <li key={category}>
                                <Badge content={ category } size="xs" rounded={false}/>
                            </li>
                        )
                    }
                </ul>
                <ul className="flex items-center gap-0.5">
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
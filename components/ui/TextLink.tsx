import Icon from "./Icon";

type IconName = keyof typeof import('./Icon').ICONS;

interface TextLinkProps {
    content: string;
    className?: string;
    iconName?: IconName;
    iconSize?: number;
    iconClassName?: string;
}

export default function TextLink({ 
    content, 
    className,
    iconName,
    iconSize, 
    iconClassName 
}: TextLinkProps) {

    const showIcon = !!iconName;
    const hasTextAndIcon = content && showIcon;

    return (
        <span className={`border-b ${className} ${hasTextAndIcon ? 'gap-1' : ''}` }>
            {content}
            <Icon 
                name={iconName} 
                size={iconSize} 
                className={iconClassName} 
            />
        </span>
    )
}
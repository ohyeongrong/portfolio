import Icon from "./Icon";

type IconName = keyof typeof import('./Icon').ICONS;

type IconPosition = 'before' | 'after';
interface TextLinkProps {
    content: string;
    className?: string;
    iconName?: IconName;
    iconSize?: number;
    iconClassName?: string;
    iconPosition?: IconPosition; 
}

export default function TextLink({ 
    content, 
    className,
    iconName,
    iconSize, 
    iconClassName,
    iconPosition = 'after'
}: TextLinkProps) {

    const showIcon = !!iconName;
    const hasTextAndIcon = content && showIcon;

    const iconElement = showIcon && (
        <Icon 
            name={iconName} 
            size={iconSize} 
            className={iconClassName} 
        />
    );

    const renderBefore = iconPosition === 'before';

    return (
        <span className={`border-b flex items-center cursor-pointer ${className} ${hasTextAndIcon ? 'gap-1' : ''}` }>
            {renderBefore && iconElement}

            {content}

            {!renderBefore && iconElement}
        </span>
    )
}
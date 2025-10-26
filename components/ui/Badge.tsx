import Icon from "./Icon";

    type IconName = keyof typeof import('./Icon').ICONS;
    
    const STYLE_COLOR = {
        black: 'bg-[var(--color-primary-dark)] text-white',
        darkGray: 'bg-[var(--color-gray-900)] text-white',
        gray: 'bg-[var(--color-gray-200)]',
        white: 'border border-[var(--color-primary-dark)]',
    }

    const STYLE_SIZE = {
        xs: 'text-xs py-0.5 px-2',
        sm: 'text-lg px-4 py-1',
        md: 'text-xl px-5 py-2',
        lg: 'text-2xl px-6 py-3',
        xl: 'text-3xl px-8 py-4',
        none: 'p-4'
    }

    interface BadgeProps {
        color?: string;
        size?: string;
        content: string;
        rounded?: boolean;
        iconName?: IconName;
        iconSize?: number;
        iconClassName?: string;
    }


export default function Badge({ 
    content, 
    color='black', 
    size='lg', 
    rounded=true, 
    iconName,
    iconSize, 
    iconClassName 
}: BadgeProps) {

    const selectedColor = STYLE_COLOR[color] || '';
    const selectedSize = STYLE_SIZE[size] || '';

    const showIcon = !!iconName;
    const hasTextAndIcon = content && showIcon;

    return (
            <div className={`
                ${selectedColor} 
                ${selectedSize} 
                flex items-center w-fit h-fit 
                ${rounded ? 'rounded-full' : ''} 
                ${hasTextAndIcon ? 'gap-1' : ''}`}>
                    { content && <span>{ content }</span> }
                    {showIcon && (
                        <Icon 
                            name={iconName} 
                            size={iconSize} 
                            className={iconClassName} 
                        />
                    )}
            </div>
    )
}
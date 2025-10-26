export const ICONS = {
    smile: (
        <path d="M260-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-340q0 26-17.5 43T260-280Zm0-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-620q0 26-17.5 43T260-560Zm140 120v-80h160v80H400Zm288 200-66-44q28-43 43-92.5T680-480q0-66-21.5-124T598-709l61-51q48 57 74.5 128.5T760-480q0 67-19 127.5T688-240Z"/>
    ),
    arrowUp: (
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
    ),
    arrowOutward: (
        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
    ),
    asterisk: (
        <path d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>
    )
}

export default function Icon({ name, size = 24, className='' }) {
    const iconPath = ICONS[name];
    if (!iconPath) return null;

    return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width={size}
                height={size}
                fill="currentColor"
                className={className}
            >
                {iconPath}
            </svg>
    );
}
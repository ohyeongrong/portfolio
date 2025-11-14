
import { ImageResponse } from 'next/og';

export const runtime = 'edge'; 

export async function GET(request: Request) {

return new ImageResponse(
    (
    <div
        style={{
        fontSize: 60,
        background: 'var(--color-primary-dark)',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        }}
    >
        <p>©2025 Oh! YeongRong</p>
    </div>
    ),
    {
    width: 1200,
    height: 630,
    },
);
}
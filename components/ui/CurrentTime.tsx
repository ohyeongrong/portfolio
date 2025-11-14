'use client';
import React, { useState, useEffect } from 'react';

export default function CurrentTime() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [isClient, setIsClient] = useState(false);

    useEffect(()=>{

        setIsClient(true);

        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    },[]);

const formatTime = (date) => {
        
        const dayOptions = { weekday: 'short' };
        const day = date.toLocaleDateString('en-US', dayOptions);
        
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const time = date.toLocaleTimeString('en-US', timeOptions);
        
        return `${day} ${time}`;
    };

    if (!isClient) {
        return <time className="hidden sm:block" />; 
    }

    return (
            <time dateTime={currentTime.toISOString()} className="hidden sm:block">
                {formatTime(currentTime)}
            </time>
    )
}

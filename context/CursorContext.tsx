'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { motionValue, MotionValue } from 'framer-motion';

export type CursorType = 'default' | 'view' | 'badge' | string;

export interface HoverPosition {
    x: number;
    y: number;
}

// Badge 요소의 타입 정의 
interface BadgeData {
    id: string | number; 
    content: string;
}

// hoverData가 'stack' 타입일 때의 구조 정의
export interface StackHoverData {
    id: string | number;
    x: number;
    y: number;
    type: 'stack';
    badges: BadgeData[];
}
export interface CursorContextValue {
    cursorType: MotionValue<CursorType>;
    hoverPosition: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    };
    // 💡 hoverData는 StackHoverData 또는 null 이어야 합니다.
    hoverData: StackHoverData | null; 
    
    // setHoverData의 인자 타입도 수정
    setCursorType: (type: CursorType) => void;
    setHoverPosition: (position: HoverPosition) => void;
    setHoverData: (data: StackHoverData | null) => void; // 타입을 명확히 정의
}

const cursorType = motionValue<CursorType>('default');
const hoverX = motionValue(0);
const hoverY = motionValue(0);

const initialContextValue: CursorContextValue = {
    cursorType,
    hoverPosition: { x: hoverX, y: hoverY },
    hoverData: null,
    setCursorType: (type: CursorType) => cursorType.set(type),
    setHoverPosition: ({ x, y }: HoverPosition) => {
        hoverX.set(x);
        hoverY.set(y);
    },
    setHoverData: (data: StackHoverData | null) => {}, 
};

export const CursorContext = createContext<CursorContextValue>(initialContextValue);
interface CursorProviderProps {
    children: ReactNode;
}

export const CursorProvider = ({ children }: CursorProviderProps) => {

  const [hoverData, setHoverData] = React.useState<StackHoverData | null>(null);

  const value: CursorContextValue = {
    cursorType,
    hoverPosition: { x: hoverX, y: hoverY },
    hoverData,
    setCursorType: (type: CursorType) => cursorType.set(type),
    setHoverPosition: ({ x, y }: HoverPosition) => {
      hoverX.set(x);
      hoverY.set(y);
    },
    setHoverData: (data) => setHoverData(data),
  };
  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
};

export const useCursorContext = () => useContext(CursorContext);
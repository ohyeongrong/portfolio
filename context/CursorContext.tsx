'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { motionValue, MotionValue } from 'framer-motion';

export type CursorType = 'default' | 'view' | 'badge' | string;

export interface HoverPosition {
    x: number;
    y: number;
}
export interface CursorContextValue<T = unknown | null> {
    cursorType: MotionValue<CursorType>;
    hoverPosition: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    };
    hoverData: T; // 프로젝트에 맞게 구체적인 타입으로 변경 권장
    setCursorType: (type: CursorType) => void;
    setHoverPosition: (position: HoverPosition) => void;
    setHoverData: (data: T) => void;
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
    setHoverData: () => {}, 
};

export const CursorContext = createContext<CursorContextValue>(initialContextValue);
interface CursorProviderProps {
    children: ReactNode;
}

export const CursorProvider = ({ children }: CursorProviderProps) => {

  const [hoverData, setHoverData] = React.useState<unknown | null>(null);

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
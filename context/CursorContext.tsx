'use client';
import React, { createContext, useContext } from 'react';
import { motionValue } from 'framer-motion';

const cursorType = motionValue('default');
const hoverX = motionValue(0);
const hoverY = motionValue(0);

const CursorContext = createContext({
  cursorType,
  hoverPosition: { x: hoverX, y: hoverY },
  hoverData: null, 
  setCursorType: (type) => cursorType.set(type),
  setHoverPosition: ({ x, y }) => {
    hoverX.set(x);
    hoverY.set(y);
  },
  setHoverData: (data) => {},
});

export const CursorProvider = ({ children }) => {

  const [hoverData, setHoverData] = React.useState(null);

  const value = {
    cursorType,
    hoverPosition: { x: hoverX, y: hoverY },
    hoverData,
    setCursorType: (type) => cursorType.set(type),
    setHoverPosition: ({ x, y }) => {
      hoverX.set(x);
      hoverY.set(y);
    },
    setHoverData: (data) => setHoverData(data),
  };
  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
};

export const useCursorContext = () => useContext(CursorContext);

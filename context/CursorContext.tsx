'use client';

import React, { createContext, useContext, useState } from 'react';

// 1. Context 생성
const CursorContext = createContext({
  cursorType: 'default',
  setCursorType: () => {},
});

// 2. Provider 컴포넌트 정의
export const CursorProvider = ({ children }) => {
  // 'default', 'hovered', 'hidden' 등 커서의 상태를 저장
  const [cursorType, setCursorType] = useState('default');

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

// 3. 커스텀 훅 정의 (사용 편의성)
export const useCursorContext = () => useContext(CursorContext);
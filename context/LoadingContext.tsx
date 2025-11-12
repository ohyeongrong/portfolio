'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // 로딩 상태: 초기값은 true
  const [isLoading, setIsLoading] = useState(true);

  // 로딩 상태를 해제하는 함수
  const finishLoading = () => {
    // 애니메이션 지연 시간 등을 고려하여 시간차를 두고 상태를 해제할 수 있습니다.
    setIsLoading(false);
  };

  const contextValue = {
    isLoading,
    finishLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

// 커스텀 훅: 다른 컴포넌트에서 로딩 상태에 접근할 수 있게 합니다.
export const useLoading = () => useContext(LoadingContext);
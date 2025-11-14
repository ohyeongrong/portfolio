'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { usePathname } from 'next/navigation';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isInitialMount = useRef(true);
  const timeoutRef = useRef(null);

  // 로딩 시작
  const startLoading = useCallback(() => {
    // 중복 방지
    if (!isLoading) {
      setIsLoading(true);
    }
  }, [isLoading]);

  //로딩 종료
  const finishLoading = useCallback(() => {
    // 딜레이 애니메이션
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  // 초기 마운트 시 첫 진입만 처리
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, []);

    useEffect(() => {
        if (!isInitialMount.current && isLoading) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                finishLoading();
            }, 1200);
        }
    }, [pathname, finishLoading, isLoading]);

  // 클린업 
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const contextValue = {
    isLoading,
    startLoading,
    finishLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

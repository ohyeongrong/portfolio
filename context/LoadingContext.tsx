'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  finishLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isInitialMount = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 로딩 시작
  const startLoading = useCallback(() => {
    // 중복 방지
    if (!isLoading) {
      setIsLoading(true);
    }
  }, [isLoading]);

  //로딩 종료
  const finishLoading = useCallback(() => {

    if (timeoutRef.current) { 
        clearTimeout(timeoutRef.current);
    }
    // 딜레이 애니메이션
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
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                finishLoading();
            }, 1200);
        }
    }, [pathname, finishLoading, isLoading]);

  // 클린업 
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
  }, []);

  const contextValue: LoadingContextType = {
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

export const useLoading = () => {
    const context = useContext(LoadingContext);
    
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
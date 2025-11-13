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

  /** 🌀 로딩 시작 함수 — Preloader 등장 */
  const startLoading = useCallback(() => {
    // 이미 로딩 중이면 중복 방지
    if (!isLoading) {
      setIsLoading(true);
    }
  }, [isLoading]);

  /** 🌙 로딩 종료 함수 — Preloader 퇴장 */
  const finishLoading = useCallback(() => {
    // 약간의 딜레이를 줘서 애니메이션 자연스럽게
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  /** 🧩 초기 마운트 시 — 첫 진입만 처리 */
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, []);

    useEffect(() => {
        if (!isInitialMount.current && isLoading) {
            // isLoading 상태는 Header 클릭 시 true가 됩니다.
            // pathname이 변경되었다면, 새 페이지 로딩이 시작된 것이므로,
            // 1.2초 후 로딩을 종료하는 타이머만 설정합니다. (startLoading 호출 제외)
            
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                finishLoading();
            }, 1200);
        }
    }, [pathname, finishLoading, isLoading]);

  /** 🔒 클린업 — 메모리 누수 방지 */
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

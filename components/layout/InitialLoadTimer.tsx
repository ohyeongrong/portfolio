'use client';

import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

// 💡 최소 로딩 시간 설정 (예: 2.5초)
const MIN_LOAD_TIME_MS = 1500; 

export default function InitialLoadTimer() {
  const { finishLoading } = useLoading();

  useEffect(() => {
    // 💡 MIN_LOAD_TIME_MS 시간 후에 finishLoading을 호출하여 로딩을 해제합니다.
    const timer = setTimeout(() => {
      // finishLoading이 호출되면 LoadingProvider의 isLoading이 false로 바뀝니다.
      finishLoading();
    }, MIN_LOAD_TIME_MS);

    // 클린업 함수: 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [finishLoading]);

  // 이 컴포넌트는 화면에 아무것도 렌더링하지 않습니다.
  return null;
}
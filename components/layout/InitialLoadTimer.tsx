'use client';

import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

// 최소 로딩 시간
const MIN_LOAD_TIME_MS = 1500; 

export default function InitialLoadTimer() {
  const { finishLoading } = useLoading();

  useEffect(() => {

    const timer = setTimeout(() => {
      finishLoading();
    }, MIN_LOAD_TIME_MS);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return null;
}
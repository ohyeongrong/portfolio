// components/layout/ScrollConditionalWrapper.tsx 수정
'use client';

import { usePathname } from 'next/navigation';
import SmoothScrollWrapper from './SmoothScrollWrapper';
import Footer from '@/components/layout/Footer'; // 💡 Footer 컴포넌트를 import 합니다.

// 스무스 스크롤과 Footer를 적용하지 않을 경로 목록
const PATHS_TO_EXCLUDE = ['/projects']; 

export default function ScrollConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 현재 경로가 제외 목록에 포함되어 있는지 확인
  const isExcluded = PATHS_TO_EXCLUDE.some(path => pathname === path || pathname.startsWith(path + '/'));

  // 1. Projects 페이지 및 상세 페이지 (Footer와 Smooth Scroll 모두 제외)
  if (isExcluded) {
    return (
      <main>
        {children}
      </main>
      // 💡 Footer 없음
    );
  }

  // 2. Projects 외 나머지 페이지 (Footer와 Smooth Scroll 모두 적용)
  return (
    <SmoothScrollWrapper>
      <main>
        {children}
      </main>
      <Footer/> {/* 💡 SmoothScrollWrapper 안에 Footer를 렌더링 (기존 Layout 구조 유지) */}
    </SmoothScrollWrapper>
  );
}
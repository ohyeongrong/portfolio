
'use client';

import { usePathname } from 'next/navigation';
import SmoothScrollWrapper from './SmoothScrollWrapper';
import Footer from '@/components/layout/Footer';

const EXCLUDE_LIST_PATH = '/projects'; 

export default function ScrollConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isListExcluded = pathname === EXCLUDE_LIST_PATH;

  // Project 목록 페이지인 경우 (Footer와 Smooth Scroll 모두 제외)
  if (isListExcluded) {
    return (
      <main>
        {children}
      </main>
    );
  }

  // Project 상세 페이지 및 나머지 페이지 (Smooth Scroll 및 Footer 적용)
  return (
    <SmoothScrollWrapper>
      <main>
        {children}
      </main>
      <Footer/>
    </SmoothScrollWrapper>
  );
}
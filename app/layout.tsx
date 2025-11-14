import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from 'next/font/google';
import localFont from 'next/font/local'
import Header from '../components/layout/Header'
import CircleCursor from "@/components/ui/CircleCursor";
import { CursorProvider } from '@/context/CursorContext';
import ViewHover from "@/components/ui/ViewHover";
import StackHoverDisplay from "@/components/home/StackTool/StackHoverDisplay";
import ScrollConditionalWrapper from "@/components/layout/ScrollConditionalWrapper";
import { LoadingProvider } from "@/context/LoadingContext";
import Preloader from "@/components/layout/Preloader";
import InitialLoadTimer from "@/components/layout/InitialLoadTimer";


export const metadata: Metadata = {
  title: "©2025 Oh! YeongRong | Frontend Developer",
  description: "Frontend Developer Oh! YeongRong",
  
  openGraph: {
    title: "©2025 Oh! YeongRong | Frontend Developer",
    description: "Frontend Developer Oh! YeongRong",
    url: "https://yourportfolio.com", // 실제 배포된 URL로 변경
    siteName: "©2025 Oh! YeongRong",
    images: ["/api/og"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "©2025 Oh! YeongRong | Frontend Developer",
    description: "Frontend Developer Oh! YeongRong",
    images: ["api/og"],
  },
};

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  weight:'500'
});

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${bricolage.variable} ${pretendard.variable}`}>
      <body>
        <LoadingProvider>
          <Preloader />
          <InitialLoadTimer />
          <CursorProvider>
              <CircleCursor />
                  <Header/>
                    <ScrollConditionalWrapper>
                        {children}
                    </ScrollConditionalWrapper>
                <ViewHover/>
                <StackHoverDisplay />
          </CursorProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}

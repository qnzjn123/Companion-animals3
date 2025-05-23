import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "댕냥닥터 - 반려동물 질병 진단 AI",
  description: "반려동물의 건강 상태를 AI로 분석하는 댕냥닥터입니다",
  metadataBase: new URL('https://pet-doctor-ai.vercel.app'), // 실제 웹사이트 URL로 변경해주세요
  icons: {
    icon: [
      { url: '/favicon.svg' }
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: '댕냥닥터 - 반려동물 질병 진단 AI',
    description: '반려동물의 건강 상태를 AI로 분석하는 댕냥닥터입니다',
    url: 'https://pet-doctor-ai.vercel.app', // 실제 웹사이트 URL로 변경해주세요
    siteName: '댕냥닥터',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: '댕냥닥터 - 반려동물 질병 진단 AI',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '댕냥닥터 - 반려동물 질병 진단 AI',
    description: '반려동물의 건강 상태를 AI로 분석하는 댕냥닥터입니다',
    images: ['/og-image.svg'],
    creator: '@pet_doctor_ai', // 실제 트위터 계정으로 변경해주세요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* 추가 소셜 미디어 메타 태그 */}
        <meta property="og:image:type" content="image/svg+xml" />
        <meta name="naver-site-verification" content="네이버 사이트 인증 코드" />
        <meta name="msapplication-TileImage" content="/og-image.svg" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="theme-color" content="#2563EB" />
        
        {/* 카카오톡 썸네일 최적화 */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Facebook 최적화 */}
        <meta property="fb:app_id" content="페이스북 앱 ID" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

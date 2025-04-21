import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
import Script from "next/script";
// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "동현 ♥ 진희의 결혼식에 초대합니다.",
  description: "노동현 & 박진희의 모바일 청첩장",
  viewport: {
     width: 'device-width',
     initialScale: 1,
     maximumScale: 1
   }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
          strategy="beforeInteractive"
        />

        {children}
      </body>
    </html>
  );
}

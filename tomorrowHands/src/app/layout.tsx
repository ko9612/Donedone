import type { Metadata } from "next";
import { Roboto, Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopButton from "@/components/common/TopButton";

const roboto = Roboto({
  subsets: ["latin"],
});

const logo = Comfortaa({
  subsets: ["latin"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "TomorrowHands",
  description: "작은 손길이 모여 더 나은 내일을 만듭니다.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${logo.variable} max-w-screen-[1920px] mx-auto flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex flex-grow flex-col">{children}</main>
        <Footer />
        <TopButton />
      </body>
    </html>
  );
}

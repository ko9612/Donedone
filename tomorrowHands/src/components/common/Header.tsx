"use client";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Search from "../../../public/search.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const userName = "done1209";
  const isLogin = true;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolled]);

  return (
    <header
      className={twJoin(
        "fixed z-40 flex w-dvw items-center justify-center transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "shadow-none",
      )}
    >
      <div className="flex h-20 w-full max-w-[1440px] items-center justify-between max-2xl:px-4 max-sm:h-14">
        <Link href="/" className="flex items-center gap-1.5">
          <i className="w-8 max-sm:w-5">
            <Image src={Logo} alt="로고" />
          </i>
          <div className="font-logo flex items-center text-2xl font-bold max-sm:text-lg">
            <span className="text-tom-main">Tomorrow</span>
            <span
              className={twJoin(
                !scrolled && pathname === "/" ? "text-white" : "text-black",
              )}
            >
              Hands
            </span>
          </div>
        </Link>
        <div className="text-md flex h-fit items-center gap-4 font-medium max-sm:text-base">
          <Link href="/search">
            <i className="block rounded-full bg-white p-3">
              <Image className="w-5" src={Search} alt="검색" />
            </i>
          </Link>
          <Link
            href="/donation-list"
            className="bg-tom-main rounded-full px-4 py-3 text-white"
          >
            후원하기
          </Link>
          <Link
            href="/donation-list"
            className={`text-tom-main rounded-full bg-white px-4 py-3 ${isLogin ? "block" : "hidden"}`}
          >
            {userName}
          </Link>
          <Link
            href="/signin"
            className={twJoin(
              "rounded-full border border-white px-4 py-3",
              !scrolled && pathname === "/" ? "text-white" : "text-tom-text",
            )}
          >
            {isLogin ? "로그아웃" : "로그인"}
          </Link>
        </div>
      </div>
    </header>
  );
}

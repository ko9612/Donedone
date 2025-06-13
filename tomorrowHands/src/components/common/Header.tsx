"use client";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Search from "../../../public/search.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const pathname = usePathname();
  const outside = useRef<HTMLDivElement>(null);
  const userName = "done1209";
  const isLogin = true;
  const [showInfoDrop, setShowInfoDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menudivStyle = `ease my-1 h-1 w-6 transform rounded-full bg-white transition duration-300 ${!scrolled && pathname === "/" ? "bg-white" : "bg-tom-text"}`;

  const onBurgerClicked = () => {
    setShowInfoDrop(!showInfoDrop);
  };

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
        "fixed inset-x-0 top-0 z-40 flex w-dvw items-center justify-center transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "shadow-none",
      )}
    >
      <div className="flex h-20 w-full max-w-[1440px] items-center justify-between max-2xl:px-4 max-sm:h-14">
        <Link href="/" className="flex items-center gap-1.5">
          <i className="w-8 max-md:w-5">
            <Image src={Logo} alt="로고" />
          </i>
          <div className="font-logo flex items-center text-2xl font-bold max-md:text-lg max-sm:text-base">
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
            <i
              className={twJoin(
                "block rounded-full p-3 max-md:p-2",
                !scrolled && pathname === "/" ? "bg-white" : "bg-tom-border/30",
              )}
            >
              <Image className="w-5 max-md:w-4" src={Search} alt="검색" />
            </i>
          </Link>
          <Link
            href="/donation-list"
            className="bg-tom-main rounded-full px-4 py-3 text-white max-md:hidden max-md:p-2"
          >
            후원하기
          </Link>
          <Link
            href="/mypage"
            className={`text-tom-main rounded-full bg-white px-4 py-3 max-md:hidden max-md:p-2 ${isLogin ? "block" : "hidden"}`}
          >
            {userName}
          </Link>
          <Link
            href="/signin"
            className={twJoin(
              "rounded-full border-2 border-white px-4 py-3 max-md:hidden max-md:p-2",
              !scrolled && pathname === "/" ? "text-white" : "text-tom-text",
            )}
          >
            {isLogin ? "로그아웃" : "로그인"}
          </Link>
          <div ref={outside} className="flex items-center md:hidden">
            <button
              aria-label="menu"
              type="button"
              className="px-1"
              onClick={onBurgerClicked}
            >
              <div
                className={twMerge(
                  menudivStyle,
                  showInfoDrop && "translate-y-2 rotate-45",
                )}
              />
              <div
                className={twMerge(menudivStyle, showInfoDrop && "opacity-0")}
              />
              <div
                className={twMerge(
                  menudivStyle,
                  showInfoDrop && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
            <div
              className={twMerge(
                "transform overflow-hidden transition-all duration-300",
                showInfoDrop
                  ? "h-auto translate-y-0 opacity-100"
                  : "h-0 -translate-y-1 opacity-0",
              )}
            >
              <MobileHeader isLogin={isLogin} userName={userName} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

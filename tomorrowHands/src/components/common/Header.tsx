import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Search from "../../../public/search.svg";
import Link from "next/link";

export default function Header() {
  const userName = "done1209";
  const isLogin = true;
  return (
    <header className="flex w-dvw items-center justify-center">
      <div className="flex h-20 w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-1.5">
          <i className="w-10">
            <Image src={Logo} alt="로고" />
          </i>
          <div className="font-logo flex items-center text-3xl font-bold">
            <span className="text-tom-main">Tomorrow</span>
            <span>Hands</span>
          </div>
        </div>
        <div className="flex items-center gap-5 text-xl">
          <i>
            <Image src={Search} alt="검색" />
          </i>
          <Link href="/donation-list" className="text-tom-main">
            후원하기
          </Link>
          <Link
            href="/donation-list"
            className={`text-tom-main ${isLogin ? "block" : "hidden"}`}
          >
            {userName}
          </Link>
          <Link href="/signin" className="text-tom-text">
            {isLogin ? "로그아웃" : "로그인"}
          </Link>
        </div>
      </div>
    </header>
  );
}

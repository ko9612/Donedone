import Link from "next/link";

type MobileMenuProps = {
  isLogin: boolean;
  userName: string;
};

export default function MobileHeader({ isLogin, userName }: MobileMenuProps) {
  return (
    <ul className="border-tom-border absolute top-20 right-4 w-28 rounded-md border bg-white shadow-lg max-sm:top-14">
      <li>
        <Link href="/donation-list">
          <p className="text-tom-main hover:bg-tom-main/10 overflow-hidden p-2 text-center text-sm font-medium text-nowrap text-ellipsis">
            후원하기
          </p>
        </Link>
      </li>
      <li>
        <Link href="/mypage">
          <p className="text-tom-main hover:bg-tom-main/10 overflow-hidden p-2 text-center text-sm font-medium text-nowrap text-ellipsis">
            {userName}
          </p>
        </Link>
      </li>
      <li>
        <Link href="/signin">
          <p className="text-tom-main hover:bg-tom-main/10 py-2 text-center text-sm font-medium">
            {isLogin ? "로그아웃" : "로그인"}
          </p>
        </Link>
      </li>
    </ul>
  );
}

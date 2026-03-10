"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      <Link
        href="/"
        className={`${pathname === "/" ? "bg-neutral-800 outline-1 outline-neutral-800 hover:bg-neutral-800" : "bg-neutral-900 hover:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" ? "bg-neutral-800 outline-1 outline-neutral-800 hover:bg-neutral-800" : "bg-neutral-900 hover:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        About Me
      </Link>
      <Link
        href="/portfolio"
        className={`${pathname === "/portfolio" ? "bg-neutral-800 outline-1 outline-neutral-800 hover:bg-neutral-800" : "bg-neutral-900 hover:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Portfolio
      </Link>
    </nav>
  );
};

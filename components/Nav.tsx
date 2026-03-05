"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-4">
      <Link
        href="/"
        className={`${pathname === "/" ? "bg-slate-800 outline-1 outline-zinc-100 -outline-offset-1 hover:bg-slate-800" : "bg-neutral-900 hover:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Home
        {pathname === "/" ? null : <FaArrowRight />}
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" ? "bg-slate-800 outline-1 outline-zinc-100 -outline-offset-1 hover:bg-slate-800" : "bg-neutral-900 hover:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        About Me
        {pathname === "/about" ? null : <FaArrowRight />}
      </Link>
      <Link
        href="/portfolio"
        className={`${pathname === "/portfolio" ? "bg-slate-800 outline-1 outline-zinc-100 -outline-offset-1 hover:bg-slate-800" : "bg-neutral-900 hover:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Portfolio
        {pathname === "/portfolio" ? null : <FaArrowRight />}
      </Link>
    </nav>
  );
};

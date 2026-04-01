"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      <Link
        href="/"
        className={`${pathname === "/" ? "bg-neutral-600 text-neutral-100 dark:bg-neutral-800 hover:dark:bg-neutral-800" : "dark:bg-neutral-900 hover:bg-neutral-500 hover:text-neutral-200 hover:dark:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" ? "bg-neutral-600 text-neutral-100 dark:bg-neutral-800 hover:dark:bg-neutral-800" : "dark:bg-neutral-900 hover:bg-neutral-500 hover:text-neutral-200 hover:dark:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        About Me
      </Link>
      <Link
        href="/portfolio"
        className={`${pathname === "/portfolio" ? "bg-neutral-600 text-neutral-100 dark:bg-neutral-800 hover:dark:bg-neutral-800" : "dark:bg-neutral-900 hover:bg-neutral-500 hover:text-neutral-200 hover:dark:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        className={`${pathname === "/contact" ? "bg-neutral-600 text-neutral-100 dark:bg-neutral-800 hover:dark:bg-neutral-800" : "dark:bg-neutral-900 hover:bg-neutral-500 hover:text-neutral-200 hover:dark:bg-neutral-800 "} "shadow-[0_0_3px_-2px_#ccc] px-2 py-1 rounded-lg transition-all flex gap-2 items-center justify-between transition-all"`}
      >
        Contact
      </Link>
    </nav>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden bg-neutral-900 w-full py-4 px-6 z-20 border-b border-b-neutral-800 sticky top-0">
      <nav className="flex flex-wrap gap-2 text-lg sm:text-xl justify-between min-[450px]:justify-end min-[450px]:gap-4 items-center">
        <Link href="/">
          <Image
            className="hidden min-[450px]:block rounded-full outline outline-neutral-800 mx-auto bg-neutral-950 absolute top-4 left-4 pointer-cursor-default z-30"
            src="/profile.png"
            alt="Next.js logo"
            width={75}
            height={75}
            priority
          />
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? "bg-neutral-800 px-3 py-1 rounded-lg" : ""}`}
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className={`${pathname === "/portfolio" ? "bg-neutral-800 px-3 py-1 rounded-lg" : ""}`}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className={`${pathname === "/contact" ? "bg-neutral-800 px-3 py-1 rounded-lg" : ""}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

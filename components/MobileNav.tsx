"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden bg-neutral-900 w-full py-4 px-6 z-20 border-b border-b-neutral-800 sticky top-0">
      <nav className="flex gap-6 text-lg sm:text-xl justify-end">
        <Link href="/" className="uppercase">
          <Image
            className="rounded-full outline outline-neutral-800 mx-auto bg-neutral-950 absolute top-4 left-4 pointer-cursor-default z-30"
            src="/profile.png"
            alt="Next.js logo"
            width={75}
            height={75}
            priority
          />
        </Link>
        <Link href="/about" className="uppercase">
          About
        </Link>
        <Link href="/portfolio" className="uppercase">
          Portfolio
        </Link>
      </nav>
    </div>
  );
};

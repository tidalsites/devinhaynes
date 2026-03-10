"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden bg-neutral-950 bg-[linear-gradient(45deg,transparent_50%,rgba(60,60,90,.125)_50%,transparent_51%),linear-gradient(135deg,transparent_50%,rgba(60,60,90,.125)_50%,transparent_51%)] bg-size-[25px_25px] w-full py-4 px-6 z-20 border-b border-b-neutral-800 sticky top-0">
      <nav className="flex gap-6 text-lg sm:text-2xl justify-end">
        <Link href="/" className="uppercase">
          <Image
            className="rounded-full outline outline-neutral-800 mx-auto bg-background absolute top-4 left-4 pointer-cursor-default z-30"
            src="/profile.png"
            alt="Next.js logo"
            width={75}
            height={75}
            priority
          />
        </Link>
        {pathname !== "/about" && (
          <Link href="/about" className="uppercase">
            About
          </Link>
        )}

        {pathname !== "/portfolio" && (
          <Link href="/portfolio" className="uppercase">
            Portfolio
          </Link>
        )}
      </nav>
    </div>
  );
};

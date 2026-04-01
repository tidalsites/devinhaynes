import Image from "next/image";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Sidebar = () => {
  return (
    <>
      <aside className="hidden md:block w-62.5 py-4 px-6 z-20 bg-neutral-400 dark:bg-neutral-900 h-screen top-0 sticky border-r border-r-neutral-600 dark:border-r-neutral-800">
        <div className="flex flex-col gap-4 sticky top-4 h-full">
          <Image
            className="rounded-full outline outline-neutral-600 dark:outline-neutral-800 mx-auto mb-16 bg-neutral-500 dark:bg-neutral-950"
            src="/profile.png"
            alt="Next.js logo"
            width={150}
            height={150}
            priority
          />
          <Nav />
        </div>
      </aside>
      <MobileNav />
    </>
  );
};

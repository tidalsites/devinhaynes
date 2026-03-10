import Image from "next/image";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Sidebar = () => {
  return (
    <>
      <aside className="hidden md:block w-62.5 py-4 px-12 z-20 bg-neutral-950 bg-[linear-gradient(45deg,transparent_50%,rgba(60,60,90,.125)_50%,transparent_51%),linear-gradient(135deg,transparent_50%,rgba(60,60,90,.125)_50%,transparent_51%)] bg-size-[25px_25px] h-screen top-0 sticky border-r border-r-neutral-800">
        <div className="flex flex-col gap-4 sticky top-4 h-full">
          <Image
            className="rounded-full outline outline-neutral-800 mx-auto mb-16 bg-background"
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

import Image from "next/image";
import concrecal from "../../public/concrecal-web-min.png";
import atob from "../../public/atob-web-min.png";
import dwbuilders from "../../public/dwbuilders-web.png";
import xprt from "../../public/xprt-web-min.png";
import prosoft from "../../public/prosoft-web-min.png";
import harts from "../../public/hartshollergraphics-web-min.png";
import olokun from "../../public/olokun-web.webp";
import { Sidebar } from "../components/Sidebar";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <main className="flex min-h-screen grow flex-col items-center gap-12 py-24 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Portfolio
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400 dark:text-zinc-400">
            Here are a few website projects that I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-[1px_auto_1px] grid-rows-[1px_auto_1px]">
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] col-span-3"></div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)] row-span-3"></div>
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">Concrecal Proyectos</p>
              <p className="text-zinc-400 mb-2">Construction / Concrete</p>
              <Image
                className="rounded-2xl"
                src={concrecal}
                alt="Concrecal Proyectos"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
          <div className="grid grid-cols-[auto_1px] grid-rows-[1px_auto_1px]">
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] col-span-2"></div>
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">AtoB Towing Services</p>
              <p className="text-zinc-400 mb-2">Towing</p>
              <Image
                className="rounded-2xl"
                src={atob}
                alt="AtoB Towing"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="mt-auto w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
          <div className="grid grid-cols-[auto_1px] grid-rows-[1px_auto_1px]">
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] col-span-2"></div>
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">D.W. Builders</p>
              <p className="text-zinc-400 mb-2">Construction</p>
              <Image
                className="rounded-2xl"
                src={dwbuilders}
                alt="D.W Builders"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="mt-auto w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
          <div className="grid grid-cols-[1px_auto_1px] grid-rows-[auto_1px]">
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)] row-span-2"></div>
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">Olokun</p>
              <p className="text-zinc-400 mb-2">Engineering / Government</p>
              <Image
                className="rounded-2xl"
                src={olokun}
                alt="Olokun"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
          <div className="grid grid-cols-[auto_1px] grid-rows-[auto_1px]">
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">Prosoft Engineering</p>
              <p className="text-zinc-400 mb-2">Engineering / Government</p>
              <Image
                className="rounded-2xl"
                src={prosoft}
                alt="Prosoft Engineering"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
          <div className="grid grid-cols-[auto_1px] grid-rows-[auto_1px]">
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">Harts Holler Graphics</p>
              <p className="text-zinc-400 mb-2">Graphic Design</p>
              <Image
                className="rounded-2xl"
                src={harts}
                alt="Harts Holler Graphics"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
          <div className="grid grid-cols-[1px_auto_1px] grid-rows-[auto_1px]">
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)] row-span-2"></div>
            <div className="px-2 py-2">
              <p className="text-2xl uppercase -mb-1">XPRT Home Services</p>
              <p className="text-zinc-400 mb-2">Construction</p>
              <Image
                className="rounded-2xl"
                src={xprt}
                alt="XPRT Home Services"
                priority
              />
            </div>
            <div className="w-px h-full bg-[linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
            <div className="w-full h-px bg-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

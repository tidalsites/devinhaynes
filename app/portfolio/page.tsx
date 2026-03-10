import Image from "next/image";
import concrecal from "../../public/concrecal-web-min.png";
import atob from "../../public/atob-web-min.png";
import dwbuilders from "../../public/dwbuilders-web.png";
import xprt from "../../public/xprt-web-min.png";
import prosoft from "../../public/prosoft-web-min.png";
import harts from "../../public/hartshollergraphics-web-min.png";
import olokun from "../../public/olokun-web.webp";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-12 py-24 px-6 md:px-10 lg:px-12 sm:items-start">
      <div>
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight ">
          Portfolio
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-400 dark:text-zinc-400">
          Here are a few website projects that I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">Olokun</p>
            <p className="text-zinc-400 text-sm mb-2">
              Engineering / Government
            </p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={olokun}
              alt="Olokun"
            />
          </div>
        </div>
        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">AtoB Towing Services</p>
            <p className="text-zinc-400 text-sm mb-2">Towing</p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={atob}
              alt="AtoB Towing"
              priority
            />
          </div>
        </div>
        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">Concrecal Proyectos</p>
            <p className="text-zinc-400 text-sm mb-2">
              Construction / Concrete
            </p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={concrecal}
              alt="Concrecal Proyectos"
              priority
            />
          </div>
        </div>

        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">D.W. Builders</p>
            <p className="text-zinc-400 text-sm mb-2">Construction</p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={dwbuilders}
              alt="D.W Builders"
              priority
            />
          </div>
        </div>

        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">Prosoft Engineering</p>
            <p className="text-zinc-400 text-sm mb-2">
              Engineering / Government
            </p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={prosoft}
              alt="Prosoft Engineering"
            />
          </div>
        </div>
        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">Harts Holler Graphics</p>
            <p className="text-zinc-400 text-sm mb-2">Graphic Design</p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={harts}
              alt="Harts Holler Graphics"
            />
          </div>
        </div>
        <div>
          <div className="py-2">
            <p className="text-xl uppercase -mb-1">XPRT Home Services</p>
            <p className="text-zinc-400 text-sm mb-2">Construction</p>
            <Image
              className="rounded-xl border border-neutral-800"
              src={xprt}
              alt="XPRT Home Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

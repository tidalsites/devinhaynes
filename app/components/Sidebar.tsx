import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Nav } from "./Nav";

export const Sidebar = () => {
  return (
    <aside className=" w-fit py-4 px-12 shadow-[1px_0_4px_var(--background)] z-20 bg-neutral-950">
      <div className="flex flex-col gap-4 sticky top-4 h-full">
        <Image
          className="rounded-full outline outline-foreground mx-auto mb-16"
          src="/profile.png"
          alt="Next.js logo"
          width={150}
          height={150}
          priority
        />
        <Nav />
        <div className="flex gap-4 mx-auto mt-auto">
          <a
            href="https://github.com/devinhaynes"
            target="_blank"
            className="text-3xl bg-transparent"
            aria-label="Github"
          >
            <FaGithub className="hover:text-slate-500" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-3xl bg-transparent"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:text-slate-500" />
          </a>
          <a
            href="https://linkedin.com/in/devin-haynes"
            target="_blank"
            className="text-3xl bg-transparent"
            aria-label="Linkedin"
          >
            <FaLinkedinIn className="hover:text-slate-500" />
          </a>
        </div>
      </div>
    </aside>
  );
};

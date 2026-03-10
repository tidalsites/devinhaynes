import Link from "next/link";
import { ToolCard } from "./ToolCard";
import { Metadata } from "next";
import { LuGithub, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "About Devin Haynes",
  description:
    "Devin Haynes is a web developer specializing in modern website design, web applications, and cloud-based systems. He builds fast, scalable websites and software using technologies like React, Next.js, and AWS.",
};

export default function About() {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr_auto] justify-between min-h-screen grow max-w-7xl gap-12 py-24 px-6 md:px-16 ">
      <div>
        <div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-8">
            About Devin Haynes
          </h1>
        </div>
        <div className="flex flex-col gap-2 max-w-prose leading-8">
          <p>
            Devin Haynes is a web developer and software engineer specializing
            in modern website design, web application development, and
            cloud-based systems. He builds high-performance websites and
            applications using modern JavaScript frameworks and cloud
            infrastructure.
          </p>
          <p>
            Devin focuses on creating fast, responsive, and maintainable
            websites that provide excellent user experience while meeting real
            business needs. His work ranges from professional business websites
            and government contractor platforms to custom web applications and
            AI-powered interfaces.
          </p>
          <p>
            With experience across both front-end and back-end development,
            Devin builds systems that balance performance, scalability, and
            clean architecture. Many of his projects involve improving site
            performance, modernizing outdated web platforms, and developing
            custom solutions tailored to client needs.
          </p>
        </div>
      </div>

      <div className="flex flex-col ml-auto row-span-3">
        <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Tools & Tech
        </h2>
        <div className="flex flex-wrap xl:flex-col w-fit gap-8 mt-6">
          <ToolCard
            topic="Web Development"
            tools={[
              { name: "React" },
              { name: "Next.js" },
              { name: "TypeScript" },
              { name: "Tailwind CSS" },
              { name: "Node.js" },
              { name: "Express" },
            ]}
          />
          <ToolCard
            topic="Cloud & Infrastructure"
            tools={[
              { name: "AWS" },
              { name: "Docker" },
              { name: "Terraform" },
              { name: "CI/CD" },
              { name: "Azure" },
              { name: "Vercel" },
            ]}
          />
          <ToolCard
            topic="Development Tools"
            tools={[
              { name: "Git" },
              { name: "VS Code" },
              { name: "REST APIs" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Projects
        </h2>
        <p className="max-w-prose leading-8">
          Devin has worked on numerous professional and personal projects. You
          can view his Github here. Or check out his portfolio.
        </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/devinhaynes"
            target="_blank"
            className="outline outline-neutral-800 bg-neutral-900 hover:bg-slate-800 px-4 py-2 rounded-xl flex gap-2 items-center"
          >
            <LuGithub />
            Github
          </a>
          <Link
            href="/portfolio"
            className="outline outline-neutral-800 bg-neutral-900 hover:bg-slate-800 px-4 py-2 rounded-xl flex gap-2 items-center"
          >
            Portfolio
            <LuArrowRight />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Get in Touch
        </h2>
        <Link
          href="/contact"
          className="outline outline-neutral-800 bg-neutral-900 hover:bg-slate-800 px-4 py-2 rounded-xl flex gap-2 items-center w-fit"
        >
          Contact Me
          <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { ContactForm } from "./form";

export const metadata: Metadata = {
  title: "Contact | Devin Haynes",
  description:
    "Get in touch with me! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out through the contact form.",
};

export default function Contact() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-61px)] grid place-content-center bg-neutral-200 dark:bg-background">
      <div className="flex flex-col gap-4 px-16 py-8 border border-neutral-400 dark:border-neutral-800 rounded-md bg-neutral-300 dark:bg-neutral-900">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <ContactForm />
        <div className="h-px w-full bg-neutral-800"></div>
        <div className="flex gap-2 justify-center">
          <a
            href="https://github.com/devinhaynes"
            target="_blank"
            className="outline outline-neutral-400 dark:outline-neutral-800 bg-neutral-200 dark:bg-neutral-900 hover:bg-slate-500 hover:text-neutral-300 hover:dark:bg-slate-800 px-3 py-1 rounded-md flex gap-2 items-center"
          >
            <LuGithub />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/devin-haynes/"
            target="_blank"
            className="outline outline-neutral-400 dark:outline-neutral-800 bg-neutral-200 dark:bg-neutral-900 hover:bg-slate-500 hover:text-neutral-300 hover:dark:bg-slate-800 px-3 py-1 rounded-md flex gap-2 items-center"
          >
            <LuLinkedin />
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

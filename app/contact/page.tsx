import { LuLinkedin, LuGithub } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-61px)] grid place-content-center bg-neutral-200 dark:bg-background">
      <div className="flex flex-col gap-4 px-16 py-8 border border-neutral-400 dark:border-neutral-800 rounded-md bg-neutral-300 dark:bg-neutral-900">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form className="flex flex-col gap-4 ">
          <div>
            <label
              htmlFor="name"
              className="text-sm text-neutral-700 dark:text-neutral-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-neutral-400 dark:border-neutral-800 rounded-md px-2 py-1 bg-neutral-200 focus-visible:outline-slate-800 dark:focus-visible:outline-slate-500 focus-visible:outline autofill:bg-neutral-700"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm text-neutral-700 dark:text-neutral-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-neutral-400 dark:border-neutral-800 rounded-md px-2 py-1 bg-neutral-200 focus-visible:outline-slate-800 dark:focus-visible:outline-slate-500 focus-visible:outline autofill:bg-neutral-700"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm text-neutral-700 dark:text-neutral-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-neutral-400 dark:border-neutral-800 rounded-md px-2 py-1 bg-neutral-200 focus-visible:outline-slate-800 dark:focus-visible:outline-slate-500 focus-visible:outline autofill:bg-neutral-700"
            />
          </div>
          <button
            type="submit"
            className="border-neutral-400 dark:border-neutral-800 border px-4 py-1 rounded-md bg-slate-500 text-neutral-100 dark:bg-slate-800 hover:bg-slate-600 hover:dark:bg-slate-700"
          >
            Send Message
          </button>
        </form>
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

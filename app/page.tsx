import { HiArrowRightCircle } from "react-icons/hi2";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <main className="flex min-h-screen grow flex-col items-center gap-12 py-24 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-fit flex flex-col gap-12 mx-auto">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hi, I'm Devin.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Whether you are here personally or professionally, you can use the
              chat window below to help guide you to what you are looking for.
            </p>
          </div>
          <div className="flex sm:flex-row w-full max-w-3xl">
            <div className="flex gap-2 w-full">
              <input
                autoFocus
                className="bg-background rounded-full w-full max-w-3xl px-4 py-3 focus:outline-gray-400 focus:outline-1 h-10.5"
                type="text"
              />
              <button className="text-4xl" aria-label="Submit">
                <HiArrowRightCircle />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

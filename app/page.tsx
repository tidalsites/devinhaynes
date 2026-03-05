import { Sidebar } from "../components/Sidebar";
import Chat from "@/components/Chat";

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
          <Chat />
        </div>
      </main>
    </div>
  );
}

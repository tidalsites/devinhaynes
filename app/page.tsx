import { Sidebar } from "../components/Sidebar";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <main className="flex min-h-screen grow flex-col items-center gap-12 py-8 px-16 dark:bg-[linear-gradient(to_bottom_right,black_0%,rgba(0,0,10,.5)_25%,rgba(20,20,25,.75)_50%,rgba(30,30,35,.25)_65%,black),linear-gradient(to_top_right,black_0%,rgba(0,0,10,1)_25%,rgba(10,10,15,.75)_50%,rgba(30,30,35,.25)_65%,black)] sm:items-start">
        <Chat />
      </main>
    </div>
  );
}

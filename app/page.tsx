import { Sidebar } from "../components/Sidebar";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <main className="flex min-h-screen grow flex-col items-center gap-12 py-8 px-16 bg-white dark:bg-black sm:items-start">
        <Chat />
      </main>
    </div>
  );
}

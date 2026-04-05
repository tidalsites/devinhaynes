import Chat from "@/components/Chat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Devin Haynes",
  description:
    "Welcome to my personal website! I'm Devin Haynes, a passionate web developer and software engineer. Explore my portfolio, learn about my skills, and feel free to reach out for collaborations or inquiries.",
};

export default function Home() {
  return (
    <div className="flex items-center sm:justify-center pb-8 h-[calc(100vh-61px)] md:h-screen px-6 md:px-16 bg-neutral-300 dark:bg-background">
      <Chat />
    </div>
  );
}

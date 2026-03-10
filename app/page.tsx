import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="flex items-center sm:grid sm:place-content-center pt-16 pb-8 h-[calc(100vh-61px)] md:h-screen px-6 md:px-16">
      <Chat />
    </div>
  );
}

import { Sidebar } from "../components/Sidebar";

export default function About() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <main className="flex min-h-screen grow flex-col items-center gap-12 py-24 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Here are a few facts about me.
          </p>
        </div>
        <div className="flex flex-col">
          <p>
            My name is Devin Haynes. I am a software engineer and web developer.
          </p>
          <p className="max-w-prose">
            My professional career began in the Navy as an Information Systems
            Technician. I served 8 years on active duty. My primary taskings
            involved systems and network administration on a number of different
            systems. I served another 2 years in the Navy Reserves, while
            finishing up my bachelors degree in Software Engineering. From here,
            I dedicated my career to software development - particularly focused
            on web technologies.
          </p>
          <p>
            I love traveling and nature. I am a hiking enthusiast. I also enjoy
            basketball and chess.
          </p>
        </div>
      </main>
    </div>
  );
}

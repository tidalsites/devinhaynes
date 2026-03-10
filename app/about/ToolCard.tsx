type topic = string;
type tool = {
  name: string;
  icon?: any;
};

type Props = {
  topic: topic;
  tools: tool[];
};

export const ToolCard = ({ topic, tools }: Props) => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-400 dark:bg-slate-800 dark:bg-[linear-gradient(45deg,transparent_50%,rgba(60,60,90,.25)_50%,transparent_51%),linear-gradient(135deg,transparent_50%,rgba(60,60,90,.25)_50%,transparent_51%)] bg-size-[40px_40px] rounded-md p-6 outline-2 outline-[rgba(90,90,120,.5)] dark:border-slate-700 max-w-xs">
      <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
        {topic}
      </h3>
      <div className="flex flex-wrap gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-1 text-sm text-black dark:bg-zinc-700 dark:text-zinc-300"
          >
            {tool.icon}
            {tool.name}
          </div>
        ))}
      </div>
    </div>
  );
};

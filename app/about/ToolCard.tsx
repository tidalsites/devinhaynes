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
    <div className="flex flex-col gap-4 bg-neutral-400 dark:bg-slate-800 rounded-md p-6 border border-neutral-700 max-w-xs">
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

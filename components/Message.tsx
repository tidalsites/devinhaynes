type Props = {
  role: "assistant" | "user";
  text: string;
};

export const Message = ({ role, text }: Props) => {
  return (
    <div
      className={`${role === "assistant" ? "justify-self-start" : "justify-self-end"} max-w-10/12 rounded-2xl p-4 bg-neutral-300 dark:bg-neutral-900 w-fit`}
    >
      {text}
    </div>
  );
};

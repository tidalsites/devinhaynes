type Props = {
  role: "assistant" | "user";
  text: string;
};

export const Message = ({ role, text }: Props) => {
  return (
    <div
      className={`${role === "assistant" ? "justify-self-start" : "justify-self-end rounded-2xl p-4 bg-neutral-200 dark:bg-neutral-800 w-fit"} sm:max-w-10/12 `}
    >
      {text}
    </div>
  );
};

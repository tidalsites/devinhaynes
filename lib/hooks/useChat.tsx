import { useState, useCallback } from "react";
import type { ChatStatus } from "ai";

interface Message {
  id: string;
  role: "user" | "assistant";
  parts: Array<{ type: "text"; text: string }>;
}

interface UseChatReturn {
  messages: Message[];
  sendMessage: (params: { text: string }) => Promise<void>;
  status: ChatStatus;
  error: Error | undefined;
  setMessages: (messages: Message[]) => void;
  resetChat: () => void;
}

export function useChat(sessionId?: string): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<ChatStatus>("ready");
  const [error, setError] = useState<Error | undefined>();

  const sendMessage = useCallback(
    async ({ text }: { text: string }) => {
      if (!text.trim()) return;

      const userMessageId = `user-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`;

      const userMessage: Message = {
        id: userMessageId,
        role: "user",
        parts: [{ type: "text", text }],
      };

      setMessages((prev) => [...prev, userMessage]);
      setStatus("submitted");
      setError(undefined);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [...messages, userMessage],
            sessionId,
          }),
        });

        if (!response.ok) {
          if (response.status === 429) {
            const retryAfter = response.headers.get("Retry-After");
            const errorMessage = retryAfter
              ? `Rate limit exceeded. Please try again after ${retryAfter} seconds.`
              : "Rate limit exceeded. Please try again later.";
            throw new Error(errorMessage);
          }
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`,
          );
        }

        const data = await response.json();

        const assistantMessageId = `assistant-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

        const assistantMessage: Message = {
          id: assistantMessageId,
          role: "assistant",
          parts: [{ type: "text", text: data.content }],
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setStatus("ready");
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("An unknown error occurred");
        setError(error);
        setStatus("error");
        console.error("Error sending message to Bedrock:", error);
      }
    },
    [messages, sessionId],
  );

  const resetChat = () => {
    setMessages([]);
    setStatus("ready");
    setError(undefined);
  };

  return {
    messages,
    sendMessage,
    status,
    error,
    setMessages,
    resetChat,
  };
}

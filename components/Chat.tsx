"use client";

import { useChat } from "@/lib/hooks/useChat";
import { useAudioRecorder } from "@/lib/hooks/useAudioRecorder";
import {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  SubmitEventHandler,
  KeyboardEvent,
} from "react";
import { LuMic, LuCheck, LuX, LuCornerDownLeft } from "react-icons/lu";
import { Message } from "./Message";

export default function Chat() {
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => {
    return `session-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
  });

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize chat and audio hooks
  const { messages, sendMessage, error, status, resetChat } =
    useChat(sessionId);
  const {
    isRecording,
    startRecording,
    stopRecording,
    cancelRecording,
    transcribedText,
    recordingDuration,
    error: audioError,
  } = useAudioRecorder();

  // Track the last sent transcript to prevent duplicates
  const lastSentTranscriptRef = useRef<string | null>(null);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  if (error) {
    console.error(error);
  }

  if (audioError) {
    console.error("Audio error:", audioError);
  }

  const submitMessage = () => {
    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
      inputRef.current?.focus();
    }
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitMessage();
  };

  const handleVoiceClick = () => {
    startRecording();
  };

  const handleCancelRecording = () => {
    cancelRecording();
  };

  const handleSubmitRecording = () => {
    stopRecording();
  };

  // Format recording duration as MM:SS
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Determine if we should show centered layout (no messages)
  const showCentered = messages.length === 0;

  // Allow for using the enter key to submit form
  const handleTextAreaReturn = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
    }
  };

  // Send transcribed text when speech recognition completes
  useEffect(() => {
    if (transcribedText && transcribedText !== lastSentTranscriptRef.current) {
      sendMessage({ text: transcribedText });
      lastSentTranscriptRef.current = transcribedText;
    }
  }, [transcribedText, sendMessage]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef.current?.focus();
  }, [messages]);

  return (
    <div className="flex flex-col justify-center h-full w-full">
      {showCentered ? (
        <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto h-fit text-4xl text-center mb-24">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hi, I'm Devin.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore this site or ask the chatbot anything about me, my projects,
            or anything else you're curious about!
          </p>
        </div>
      ) : null}
      {/* Messages area - scrollable */}
      <div className={"overflow-auto"}>
        <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-y-8">
          {messages.map((message) => (
            <div key={message.id}>
              {message.parts
                .filter((part) => part.type === "text")
                .map((part, i) => (
                  <Message
                    key={`${message.id}-${i}`}
                    text={part.text}
                    role={message.role}
                  />
                ))}
            </div>
          ))}

          {/* Thinking indicator */}
          {status === "submitted" && (
            <div key="thinking">
              <div className="flex items-end gap-2 text-muted-foreground">
                <span className="text-sm">Thinking</span>
                <div className="flex gap-1 mb-1">
                  <div className="w-0.5 h-0.5 bg-current rounded-full animate-bounce [animation-delay:0ms]" />
                  <div className="w-0.5 h-0.5 bg-current rounded-full animate-bounce [animation-delay:150ms]" />
                  <div className="w-0.5 h-0.5 bg-current rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={conversationEndRef} />
        </div>
      </div>

      {/* Input area - fixed at bottom */}
      <div className="max-w-4xl w-full mx-auto p-4">
        {isRecording ? (
          // Recording state UI
          <div className="flex gap-2 items-center bg-card rounded-full border py-2 px-4">
            <div className="flex-1 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
                <span className="text-sm font-medium">Recording</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDuration(recordingDuration)}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="rounded-full h-10 w-10 shrink-0"
                onClick={handleCancelRecording}
              >
                <LuX className="h-4 w-4" />
              </button>
              <button
                className="rounded-full h-10 w-10 shrink-0"
                onClick={handleSubmitRecording}
              >
                <LuCheck className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          // Normal input state
          <div className="flex gap-2 items-start w-full">
            <form
              onSubmit={handleSubmit}
              className="flex gap-x-4 w-full"
              ref={formRef}
            >
              <textarea
                placeholder="Ask your questions here"
                className={`rounded-2xl px-4 py-2 outline-1 outline-neutral-100 resize-none grow field-sizing-content`}
                ref={inputRef}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(e.currentTarget.value)
                }
                onKeyDown={handleTextAreaReturn}
                value={input}
              />
              {input.trim() ? (
                <button
                  type="submit"
                  className="rounded-full outline-1 outline-neutral-100 p-2 w-10 h-10 grid place-content-center"
                >
                  <LuCornerDownLeft className="size-4" />
                </button>
              ) : (
                <button
                  className="rounded-full h-10 w-10 shrink-0 outline-1 outline-neutral-100 grid place-content-center"
                  onClick={handleVoiceClick}
                  disabled={status === "submitted"}
                >
                  <LuMic className="size-4" />
                </button>
              )}
            </form>
          </div>
        )}
        <div className="my-4">
          {messages.length > 0 && (
            <button
              onClick={resetChat}
              className="px-2 py-1 rounded-lg bg-neutral-800"
            >
              Reset Chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

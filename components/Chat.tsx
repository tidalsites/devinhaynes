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
import { LuMic, LuCheck, LuX, LuCornerDownLeft, LuTrash } from "react-icons/lu";
import { Message } from "./Message";
import { toast } from "react-toastify";

type Suggestion = "professional summary" | "hobbies" | "contact";

export default function Chat() {
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => {
    return `session-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
  });

  const MAX_MESSAGES = 20; // Max messages before disabling input to prevent overload
  const MAX_INPUT_LENGTH = 512; // Max characters allowed in input

  // simple debounce helper local to component
  const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number,
  ) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<F>) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

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
    toast.error(error.message);
  }

  if (audioError) {
    console.error("Audio error:", audioError);
  }

  // original message sender; takes the text to send so we can capture it
  const submitMessage = (text: string) => {
    if (text.trim() && messages.length <= MAX_MESSAGES) {
      sendMessage({ text });
      inputRef.current?.focus();
    }
  };

  // debounced version to avoid rapid-fire submissions
  const debouncedSubmit = useRef(
    debounce((text: string) => {
      submitMessage(text);
      // clear after scheduling the send so UI stays responsive
      setInput("");
    }, 300),
  ).current;

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (messages.length > MAX_MESSAGES) {
      toast.error(
        "Maximum conversation length reached. Please reset the chat to start a new conversation.",
      );
      return;
    }
    debouncedSubmit(input);
    setInput("");
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
      if (messages.length > MAX_MESSAGES) {
        toast.error(
          "Maximum conversation length reached. Please reset the chat to start a new conversation.",
        );
        return;
      }
      debouncedSubmit(input);
      setInput("");
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    if (messages.length > MAX_MESSAGES) {
      toast.error(
        "Maximum conversation length reached. Please reset the chat to start a new conversation.",
      );
      return;
    }
    switch (suggestion) {
      case "professional summary":
        sendMessage({
          text: "Can you summarize Devin Haynes' professional career?",
        });
        break;
      case "hobbies":
        sendMessage({ text: "What are Devin Haynes' hobbies?" });
        break;
      case "contact":
        sendMessage({ text: "How can I contact Devin Haynes?" });
        break;
      default:
        break;
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
    <div className="flex flex-col justify-between h-[calc(100vh-61px)] md:h-screen sm:justify-center w-full">
      {showCentered ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:relative sm:translate-x-0 sm:translate-y-0 sm:top-auto sm:left-auto flex flex-col gap-2 justify-center w-fit max-w-4xl mx-auto h-fit text-4xl text-center mb-4 md:mb-24">
          <h1 className="w-fit text-4xl mx-auto font-semibold leading-10 tracking-tight ">
            Hi, I'm Devin's AI Assistant.
          </h1>
          <p className="w-[calc(100vw-4rem)] max-w-md text-lg leading-8 text-neutral-800 dark:text-neutral-300">
            What would you like to know?
          </p>
        </div>
      ) : null}
      {/* Messages area - scrollable */}
      <div className="overflow-auto pt-16 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
      <div className="max-w-4xl w-full mx-auto sm:p-4 sticky bottom-0">
        {messages.length > 0 && (
          <button
            onClick={resetChat}
            className="px-2 py-1 rounded-lg dark:bg-neutral-800 outline outline-neutral-500 dark:outline-neutral-800 hover:bg-slate-500 hover:dark:bg-red-900 text-sm text-foreground flex items-center gap-1 ml-auto mb-4"
          >
            <span>Reset Chat</span>
            <LuTrash className="size-4 ml-1" />
          </button>
        )}
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
                aria-label="cancel recording"
              >
                <LuX className="h-4 w-4" />
              </button>
              <button
                className="rounded-full h-10 w-10 shrink-0"
                onClick={handleSubmitRecording}
                aria-label="submit recording"
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
                className="rounded-2xl px-4 py-2 bg-neutral-100 dark:bg-neutral-900 outline-1 outline-neutral-500 dark:outline-neutral-800 resize-none grow field-sizing-content"
                ref={inputRef}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(e.currentTarget.value)
                }
                onKeyDown={handleTextAreaReturn}
                value={input}
                maxLength={MAX_INPUT_LENGTH}
                disabled={
                  status === "submitted" || messages.length > MAX_MESSAGES
                }
              />
              {input.trim() ? (
                <button
                  type="submit"
                  className="rounded-full bg-neutral-100 dark:bg-neutral-900 outline-1 outline-neutral-500 dark:outline-neutral-800 hover:bg-slate-500 hover:dark:bg-slate-800 hover:text-neutral-300 p-2 w-10 h-10 grid place-content-center"
                  aria-label="submit"
                  disabled={
                    status === "submitted" || messages.length > MAX_MESSAGES
                  }
                >
                  <LuCornerDownLeft className="size-4" />
                </button>
              ) : (
                <button
                  className="dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full h-10 w-10 shrink-0 outline-1 outline-neutral-500 dark:outline-neutral-800 grid place-content-center hover:bg-slate-500 hover:dark:bg-slate-800 hover:text-neutral-300"
                  onClick={handleVoiceClick}
                  disabled={
                    status === "submitted" || messages.length > MAX_MESSAGES
                  }
                  aria-label="start voice recording"
                >
                  <LuMic className="size-4" />
                </button>
              )}
            </form>
          </div>
        )}
        {inputRef.current?.textLength === MAX_INPUT_LENGTH && (
          <p className="text-xs text-neutral-800 dark:text-neutral-500 mt-1">
            Maximum input length reached
          </p>
        )}
        {messages.length > MAX_MESSAGES && (
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
            For best performance, please keep conversations under {MAX_MESSAGES}{" "}
            messages.
          </p>
        )}
        <div className="hidden my-4 sm:flex gap-x-2 justify-between">
          <div className="flex flex-wrap gap-y-2 gap-x-2">
            <button
              onClick={() => handleSuggestionClick("professional summary")}
              className="px-2 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-900 outline outline-neutral-400 dark:outline-neutral-800 hover:bg-slate-500 hover:dark:bg-slate-800 hover:text-neutral-300 text-sm text-foreground flex items-center gap-1"
            >
              <span>Summarize Devin's professional career</span>
            </button>
            <button
              onClick={() => handleSuggestionClick("hobbies")}
              className="px-2 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-900 outline outline-neutral-400 dark:outline-neutral-800 hover:bg-slate-500 hover:dark:bg-slate-800 hover:text-neutral-300 text-sm text-foreground flex items-center gap-1"
            >
              <span>What are Devin's hobbies?</span>
            </button>
            <button
              onClick={() => handleSuggestionClick("contact")}
              className="px-2 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-900 outline outline-neutral-400 dark:outline-neutral-800 hover:bg-slate-500 hover:dark:bg-slate-800 hover:text-neutral-300 text-sm text-foreground flex items-center gap-1"
            >
              <span>How can I contact Devin?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

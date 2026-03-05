"use client";

import {
  PromptInput,
  PromptInputTextarea,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import {
  Conversation,
  ConversationContent,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { useBedrockChat } from "@/lib/hooks/useChat";
import { useAudioRecorder } from "@/lib/hooks/useAudioRecorder";
import { ChangeEvent, useState, useEffect, useRef, SubmitEvent } from "react";
import { MicIcon, CheckIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function Chat() {
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => {
    return `session-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
  });

  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize chat and audio hooks
  const { messages, sendMessage, error, status } = useBedrockChat(sessionId);
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

  const handleSubmit = (message: PromptInputMessage) => {
    if (input.trim()) {
      sendMessage({ text: message.text });
      setInput("");
      inputRef.current?.focus();
    }
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
    <div className="flex flex-col justify-center h-screen w-full">
      {/* Messages area - scrollable */}
      <div className={"overflow-auto"}>
        <div className="max-w-4xl w-full mx-auto p-4">
          <Conversation>
            <ConversationContent>
              {messages.map((message) => (
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts
                      .filter((part) => part.type === "text")
                      .map((part, i) => (
                        <MessageResponse key={`${message.id}-${i}`}>
                          {part.text}
                        </MessageResponse>
                      ))}
                  </MessageContent>
                </Message>
              ))}

              {/* Thinking indicator */}
              {status === "submitted" && (
                <Message from="assistant" key="thinking">
                  <div className="flex items-end gap-2 text-muted-foreground">
                    <span className="text-sm">Thinking</span>
                    <div className="flex gap-1 mb-1">
                      <div className="w-0.5 h-0.5 bg-current rounded-full animate-bounce [animation-delay:0ms]" />
                      <div className="w-0.5 h-0.5 bg-current rounded-full animate-bounce [animation-delay:150ms]" />
                      <div className="w-0.5 h-0.5 bg-current rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </Message>
              )}

              <div ref={conversationEndRef} />
            </ConversationContent>
          </Conversation>
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
              <PromptInputButton
                variant="outline"
                className="rounded-full h-10 w-10 shrink-0"
                onClick={handleCancelRecording}
              >
                <XIcon className="h-4 w-4" />
              </PromptInputButton>
              <PromptInputButton
                variant="default"
                className="rounded-full h-10 w-10 shrink-0"
                onClick={handleSubmitRecording}
              >
                <CheckIcon className="h-4 w-4" />
              </PromptInputButton>
            </div>
          </div>
        ) : (
          // Normal input state
          <div className="flex gap-2 items-start">
            <PromptInput
              className="flex gap-2 items-center"
              onSubmit={handleSubmit}
            >
              <PromptInputTextarea
                value={input}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(e.currentTarget.value)
                }
                placeholder="Type your message..."
                disabled={status === "submitted"}
                ref={inputRef}
                className="rounded-full"
              />
            </PromptInput>
            {input.trim() ? (
              <PromptInputSubmit
                variant="outline"
                disabled={!input.trim() || status === "submitted"}
                status={status}
                className="rounded-full h-12 w-12 shrink-0"
              />
            ) : (
              <PromptInputButton
                variant="outline"
                className="rounded-full h-12 w-12 shrink-0"
                onClick={handleVoiceClick}
                disabled={status === "submitted"}
              >
                <MicIcon className="h-5 w-5" />
              </PromptInputButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

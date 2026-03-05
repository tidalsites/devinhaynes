import { sendMessageToBedrockAgent } from "@/lib/services/bedrock";
import { UIMessage } from "ai";

type RequestData = {
  messages: UIMessage[];
  sessionId?: string;
};

export async function POST(req: Request) {
  try {
    const { messages, sessionId }: RequestData = await req.json();

    console.log(`Message: \n ${JSON.stringify(messages)}`);

    // Extract the last user message
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.role !== "user") {
      return new Response("Invalid message format", { status: 400 });
    }

    const textParts = lastMessage.parts.filter((part) => part.type === "text");
    const messageText = textParts
      .map((part) => (part as { type: "text"; text: string }).text)
      .join(" ");

    if (!messageText) {
      return new Response("No text content in message", { status: 400 });
    }

    // Bedrock Agent maintains conversation history internally via sessionId
    const agentConfig = {
      sessionId: sessionId,
    };

    const response = await sendMessageToBedrockAgent(messageText, agentConfig);
    console.log(response);

    return new Response(
      JSON.stringify({
        role: "assistant",
        content: response,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (e) {
    console.error("API /api/chat error:", e);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

import { sendMessageToBedrockAgent } from "@/lib/services/bedrock";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { UIMessage } from "ai";

type RequestData = {
  messages: UIMessage[];
  sessionId?: string;
};

// Rate limit configuration: 20 requests per minute per IP
const RATE_LIMIT_CONFIG = {
  limit: 20,
  window: 60000, // 1 minute
};

export async function POST(req: Request) {
  try {
    // Check rate limit
    const clientIp = getClientIp(req);
    const rateLimitResult = rateLimit(clientIp, RATE_LIMIT_CONFIG);

    if (!rateLimitResult.success) {
      return new Response(
        JSON.stringify({
          error: "Rate limit exceeded",
          message: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(
            (rateLimitResult.resetTime - Date.now()) / 1000,
          ),
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil(
              (rateLimitResult.resetTime - Date.now()) / 1000,
            ).toString(),
          },
        },
      );
    }

    const { messages, sessionId }: RequestData = await req.json();

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

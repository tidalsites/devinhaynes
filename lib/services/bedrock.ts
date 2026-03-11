import {
  BedrockAgentRuntimeClient,
  InvokeAgentCommand,
  InvokeAgentCommandInput,
} from "@aws-sdk/client-bedrock-agent-runtime";

const bedrockAgentClient = new BedrockAgentRuntimeClient({
  region: process.env._AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env._AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env._AWS_SECRET_ACCESS_KEY || "",
    sessionToken: process.env._AWS_SESSION_TOKEN,
  },
});

export interface BedrockAgentConfig {
  agentId?: string;
  agentAliasId?: string;
  sessionId?: string;
}

/**
 * Send a message to Amazon Bedrock Agent and get a response
 * Connects to your existing Bedrock Agent with knowledge base
 * The agent maintains its own instructions and conversation flow
 */
export async function sendMessageToBedrockAgent(
  message: string,
  config: BedrockAgentConfig = {},
): Promise<string> {
  const agentId = config.agentId || process.env.BEDROCK_AGENT_ID || "";
  const agentAliasId =
    config.agentAliasId || process.env.BEDROCK_AGENT_ALIAS_ID || "";
  const sessionId = config.sessionId || generateSessionId();

  if (!agentId || !agentAliasId) {
    throw new Error(
      "BEDROCK_AGENT_ID and BEDROCK_AGENT_ALIAS_ID must be configured",
    );
  }

  const input: InvokeAgentCommandInput = {
    agentId,
    agentAliasId,
    sessionId,
    inputText: message,
  };

  try {
    const command = new InvokeAgentCommand(input);
    const response = await bedrockAgentClient.send(command);

    // Process the streaming response
    const completion = response.completion;
    if (!completion) {
      return "I apologize, but I couldn't process your request.";
    }

    let fullResponse = "";

    // Iterate through the event stream
    for await (const event of completion) {
      if (event.chunk) {
        const chunk = event.chunk;
        if (chunk.bytes) {
          const decodedChunk = new TextDecoder().decode(chunk.bytes);
          fullResponse += decodedChunk;
        }
      }
    }

    return fullResponse || "I apologize, but I couldn't process your request.";
  } catch (error) {
    console.error("Error communicating with Bedrock Agent:", error);
    throw new Error(
      `Failed to communicate with Bedrock Agent: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
}

/**
 * Generate a unique session ID for conversation tracking
 */
function generateSessionId(): string {
  return `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Stream responses from Bedrock Agent in real-time
 * This provides true streaming as the agent generates responses
 */
export async function* streamBedrockAgentResponse(
  message: string,
  config: BedrockAgentConfig = {},
): AsyncGenerator<string, void, unknown> {
  const agentId = config.agentId || process.env.BEDROCK_AGENT_ID || "";
  const agentAliasId =
    config.agentAliasId || process.env.BEDROCK_AGENT_ALIAS_ID || "";
  const sessionId = config.sessionId || generateSessionId();

  if (!agentId || !agentAliasId) {
    throw new Error(
      "BEDROCK_AGENT_ID and BEDROCK_AGENT_ALIAS_ID must be configured",
    );
  }

  const input: InvokeAgentCommandInput = {
    agentId,
    agentAliasId,
    sessionId,
    inputText: message,
  };

  try {
    const command = new InvokeAgentCommand(input);
    const response = await bedrockAgentClient.send(command);

    const completion = response.completion;
    if (!completion) {
      yield "I apologize, but I couldn't process your request.";
      return;
    }

    // Stream chunks as they arrive
    for await (const event of completion) {
      if (event.chunk) {
        const chunk = event.chunk;
        if (chunk.bytes) {
          const decodedChunk = new TextDecoder().decode(chunk.bytes);
          yield decodedChunk;
        }
      }
    }
  } catch (error) {
    console.error("Error streaming from Bedrock Agent:", error);
    throw new Error(
      `Failed to stream from Bedrock Agent: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
}

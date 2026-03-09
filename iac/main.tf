provider "aws" {
  region = "us-east-1"
}

data "aws_caller_identity" "current" {}

data "aws_partition" "current" {}

data "aws_region" "current" {}

data "aws_iam_policy_document" "agent_trust" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      identifiers = ["bedrock.amazonaws.com"]
      type        = "Service"
    }
    condition {
      test     = "StringEquals"
      values   = [data.aws_caller_identity.current.account_id]
      variable = "aws:SourceAccount"
    }
    condition {
      test     = "ArnLike"
      values   = ["arn:${data.aws_partition.current.partition}:bedrock:${data.aws_region.current.region}:${data.aws_caller_identity.current.account_id}:agent/*"]
      variable = "AWS:SourceArn"
    }
  }
}

data "aws_iam_policy_document" "agent_permissions" {
  statement {
    actions = ["bedrock:InvokeModel"]
    resources = [
      "arn:${data.aws_partition.current.partition}:bedrock:${data.aws_region.current.region}::foundation-model/${var.foundation_model}",
    ]
  }
}

resource "aws_iam_role" "agent_role" {
  assume_role_policy = data.aws_iam_policy_document.agent_trust.json
  name_prefix        = "AmazonBedrockExecutionRoleForAgents_"
}

resource "aws_iam_role_policy" "agent_policy" {
  policy = data.aws_iam_policy_document.agent_permissions.json
  role   = aws_iam_role.agent_role.id
}

resource "aws_bedrockagent_agent" "agent" {
  agent_name                  = "devinhaynes-bot"
  agent_resource_role_arn     = aws_iam_role.agent_role.arn
  idle_session_ttl_in_seconds = 600
  instruction                 = file("${path.module}/agent_instruction.txt")
  foundation_model            = var.foundation_model
}

resource "aws_bedrockagent_agent_knowledge_base_association" "kb-association" {
  agent_id             = aws_bedrockagent_agent.agent.agent_id
  knowledge_base_id    = aws_bedrockagent_knowledge_base.kb.id
  description          = "Example Knowledge base"
  knowledge_base_state = "ENABLED"
}

resource "null_resource" "devinhaynes_asst_prepare" {
  triggers = {
    devinhaynes_kb_state  = sha256(jsonencode(aws_bedrockagent_knowledge_base.kb))
  }
  provisioner "local-exec" {
    command = "aws bedrock-agent prepare-agent --agent-id ${aws_bedrockagent_agent.agent.id}"
  }
  depends_on = [
    aws_bedrockagent_agent.agent,
    aws_bedrockagent_knowledge_base.kb
  ]
}
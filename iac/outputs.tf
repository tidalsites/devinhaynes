output "bedrock_agent_id" {
  description = "The ID of the Bedrock agent"
  value       = aws_bedrockagent_agent.agent.id
}

output "bedrock_agent_arn" {
  description = "The ARN of the Bedrock agent"
  value       = aws_bedrockagent_agent.agent.agent_arn
}

output "knowledge_base_id" {
  description = "The ID of the knowledge base"
  value       = aws_bedrockagent_knowledge_base.kb.id
}

output "knowledge_base_arn" {
  description = "The ARN of the knowledge base"
  value       = aws_bedrockagent_knowledge_base.kb.arn
}

output "s3_bucket_name" {
  description = "The name of the S3 bucket for knowledge base data"
  value       = aws_s3_bucket.devinhaynes_kb_bucket.bucket
}

output "agent_role_arn" {
  description = "The ARN of the IAM role for the Bedrock agent"
  value       = aws_iam_role.agent_role.arn
}

output "kb_role_arn" {
  description = "The ARN of the IAM role for the knowledge base"
  value       = aws_iam_role.kb_role.arn
}
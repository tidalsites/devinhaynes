variable "environment" {
  description = "Environment name (dev or prod)"
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "prod"], var.environment)
    error_message = "Environment must be either 'dev' or 'prod'."
  }
}

variable "foundation_model" {
  description = "The foundation model to use for the Bedrock agent."
  type        = string
  default     = "amazon.nova-micro-v1:0"
}

variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "agent_name" {
  description = "Name of the Bedrock agent"
  type        = string
  default     = "devinhaynes-bot"
}

variable "kb_name" {
  description = "Name of the knowledge base"
  type        = string
  default     = "devinhaynes-kb"
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket for knowledge base data"
  type        = string
  default     = "devinhaynes-kb-bucket"
}

variable "embedding_model" {
  description = "The embedding model to use for the knowledge base"
  type        = string
  default     = "amazon.titan-embed-text-v2:0"
}

variable "vector_dimensions" {
  description = "Dimensions for the vector embeddings"
  type        = number
  default     = 256
}

variable "idle_session_ttl" {
  description = "Idle session TTL for the agent in seconds"
  type        = number
  default     = 600
}
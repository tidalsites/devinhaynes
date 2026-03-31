# Terraform for DevinHaynes.com AI Chatbot

This folder defines AWS resources for a Bedrock Agent + Knowledge Base using S3 vectors.

## Prerequisites

- AWS CLI configured (`aws configure`)
- Terraform 1.14+ installed
- AWS account with Bedrock and S3 permissions in region (default `us-east-1`)

## Quick Start

```bash
cd iac
terraform init
terraform validate
terraform plan -out tfplan
terraform apply tfplan
```

## Variable overrides (optional)

Use `-var` for custom values. **Environment defaults to `dev`** but can be set to `dev` or `prod`:

### Dev environment (default)

```bash
terraform plan -out tfplan
terraform apply tfplan
```

### Dev environment (explicit)

```bash
terraform apply -var='environment=dev'
```

### Prod environment

```bash
terraform apply -var='environment=prod'
```

### Custom variables example

```bash
terraform apply \
  -var='environment=prod' \
  -var='region=us-east-1' \
  -var='agent_name=devinhaynes-bot' \
  -var='kb_name=devinhaynes-kb' \
  -var='foundation_model=amazon.nova-micro-v1:0' \
  -var='embedding_model=amazon.titan-embed-text-v2:0'
```

## What gets created

All resources include environment-specific naming (dev or prod suffix by default):

- `aws_s3_bucket.devinhaynes_kb_bucket` - S3 bucket for raw knowledge docs (e.g., `devinhaynes-kb-bucket-dev`).
- `aws_s3vectors_vector_bucket.vector_bucket` + `aws_s3vectors_index.vector_index` - S3 vectors index bucket (e.g., `devinhaynes-kb-vector-bucket-dev`).
- `aws_bedrockagent_knowledge_base.kb` - Bedrock knowledge base with environment suffix (e.g., `devinhaynes-kb-dev`).
- `aws_bedrockagent_agent.agent` - Bedrock agent with environment suffix (e.g., `devinhaynes-bot-dev`).
- IAM roles and policies for agents and KB (tagged with environment).
- `aws_bedrockagent_agent_knowledge_base_association.kb-association` - Agent-to-KB association.

## Text files synced to bucket

- `portfolio.txt`
- `resume.txt`
- `work-history.txt`
- `agent_instructions.txt`

## Notes

- **Environment isolation**: Resources are automatically named/tagged by environment (dev/prod). Deploy both environments independently by specifying `-var='environment=prod'`.
- If you changed the KB type (e.g. OpenSearch), update the config accordingly.
- Always destroy staging resources when not in use:

```bash
terraform destroy -auto-approve
```

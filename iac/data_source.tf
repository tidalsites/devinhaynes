resource "aws_s3_bucket" "devinhaynes_kb_bucket" {
  bucket = "${var.s3_bucket_name}-${var.environment}"
  tags = {
    Name        = "${var.s3_bucket_name}-${var.environment}"
    Environment = var.environment
    Project     = "devinhaynes.com"
  }
}

# Upload knowledge base files to S3
resource "aws_s3_object" "portfolio" {
  bucket = aws_s3_bucket.devinhaynes_kb_bucket.bucket
  key    = "portfolio.txt"
  source = "${path.module}/portfolio.txt"
  etag   = filemd5("${path.module}/portfolio.txt")
}

resource "aws_s3_object" "work_history" {
  bucket = aws_s3_bucket.devinhaynes_kb_bucket.bucket
  key    = "work-history.txt"
  source = "${path.module}/work-history.txt"
  etag   = filemd5("${path.module}/work-history.txt")
}

# Knowledge base data source
resource "aws_bedrockagent_data_source" "kb_data_source" {
  knowledge_base_id = aws_bedrockagent_knowledge_base.kb.id
  name              = "devinhaynes-data-source-${var.environment}"
  description       = "Data source for Devin's portfolio and work history (${var.environment})"

  data_source_configuration {
    type = "S3"
    s3_configuration {
      bucket_arn = aws_s3_bucket.devinhaynes_kb_bucket.arn
    }
  }

  vector_ingestion_configuration {
    chunking_configuration {
      chunking_strategy = "FIXED_SIZE"
      fixed_size_chunking_configuration {
        max_tokens         = 300
        overlap_percentage = 20
      }
    }
  }

  depends_on = [
    aws_bedrockagent_knowledge_base.kb,
    aws_s3_object.portfolio,
    aws_s3_object.work_history
  ]
}
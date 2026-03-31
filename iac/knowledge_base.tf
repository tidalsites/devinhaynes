resource "aws_s3vectors_vector_bucket" "vector_bucket" {
  vector_bucket_name = "devinhaynes-kb-vector-bucket-${var.environment}"
}

resource "aws_s3vectors_index" "vector_index" {
  index_name         = "vector-index-${var.environment}"
  vector_bucket_name = aws_s3vectors_vector_bucket.vector_bucket.vector_bucket_name

  data_type       = "float32"
  dimension       = 256
  distance_metric = "euclidean"
}

data "aws_iam_policy_document" "kb_trust" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["bedrock.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "aws:SourceAccount"
      values   = [data.aws_caller_identity.current.account_id]
    }
    condition {
      test     = "ArnLike"
      variable = "AWS:SourceArn"
      values   = ["arn:${data.aws_partition.current.partition}:bedrock:${data.aws_region.current.region}:${data.aws_caller_identity.current.account_id}:knowledge-base/*"]
    }
  }
}

data "aws_iam_policy_document" "kb_permissions" {
  statement {
    actions = [
      "s3:GetObject",
      "s3:ListBucket",
      "s3:PutObject"
    ]
    resources = [
      aws_s3_bucket.devinhaynes_kb_bucket.arn,
      "${aws_s3_bucket.devinhaynes_kb_bucket.arn}/*"
    ]
  }

  statement {
    actions = [      "s3vectors:GetVectors",
      "s3vectors:PutVectors",      "s3vectors:QueryVectors"
    ]
    resources = [
      aws_s3vectors_vector_bucket.vector_bucket.vector_bucket_arn,
      aws_s3vectors_index.vector_index.index_arn
    ]
  }

  statement {
    actions = [
      "bedrock:InvokeModel"
    ]
    resources = [
      "arn:${data.aws_partition.current.partition}:bedrock:${data.aws_region.current.region}::foundation-model/${var.embedding_model}"
    ]
  }
}

resource "aws_iam_role" "kb_role" {
  assume_role_policy = data.aws_iam_policy_document.kb_trust.json
  name_prefix        = "BedrockKBExecRole_"

  tags = {
    Name        = "BedrockKBExecRole"
    Environment = var.environment
    Project     = "devinhaynes.com"
  }
}

resource "aws_iam_role_policy" "kb_role_policy" {
  policy = data.aws_iam_policy_document.kb_permissions.json
  role   = aws_iam_role.kb_role.id
}

resource "aws_bedrockagent_knowledge_base" "kb" {
  name     = "${var.kb_name}-${var.environment}"
  role_arn = aws_iam_role.kb_role.arn

  knowledge_base_configuration {
    vector_knowledge_base_configuration {
      embedding_model_arn = "arn:aws:bedrock:${data.aws_region.current.region}::foundation-model/amazon.titan-embed-text-v2:0"
      embedding_model_configuration {
        bedrock_embedding_model_configuration {
          dimensions          = 256
          embedding_data_type = "FLOAT32"
        }
      }
    }
    type = "VECTOR"
  }

  storage_configuration {
    type = "S3_VECTORS"
    s3_vectors_configuration {
      index_arn = aws_s3vectors_index.vector_index.index_arn
    }
  }
}
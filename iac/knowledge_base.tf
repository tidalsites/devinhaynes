resource "aws_s3vectors_vector_bucket" "vector_bucket" {
  vector_bucket_name = "devinhaynes-kb-vector-bucket"
}

resource "aws_s3vectors_index" "verctor_index" {
  index_name         = "vector-index"
  vector_bucket_name = aws_s3vectors_vector_bucket.vector_bucket.vector_bucket_name

  data_type       = "float32"
  dimension       = 256
  distance_metric = "euclidean"
}

resource "aws_bedrockagent_knowledge_base" "kb" {
  name     = "devinhaynes-kb"
  role_arn = aws_iam_role.example.arn

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
      index_arn = aws_s3vectors_index.example.index_arn
    }
  }
}
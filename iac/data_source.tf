resource "aws_s3_bucket" "devinhaynes_kb_bucket" {
  bucket = "devinhaynes-kb-bucket"
  tags = {
    Name        = "devinhaynes-kb-bucket"
    Environment = "Dev"
    Project     = "devinhaynes.com"
  }
}
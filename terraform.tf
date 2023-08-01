module "lambda"{
source        = "./terraform"

function_name =  "lambda_function_name"
filename      = "dist.zip"
handler       = "dist/lambda"
runtime       = "nodejs18.x"
}

terraform {
 required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.9.0"
    }
  }
  cloud {
    organization = "Cataprato"

    workspaces {
      name = "cataprato-workspace"
    }
  }
}
provider "aws" {
    region = "us-east-1"
}

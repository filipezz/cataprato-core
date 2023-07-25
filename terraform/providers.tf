terraform {
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

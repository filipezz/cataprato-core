variable "ec2_keypair_name" {
    default= "" 
}

variable "ec2_instance_type" {
    default = "t2.micro" 
}
variable "ec2_image_id" {
    default = "ami-05548f9cecf47b442"
}

variable "ec2_tags" {
    default = "asbaba"
  
}
variable "ec2_count" {
    default = "1000"
}

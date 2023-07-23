resource "aws_lambda_function" "test_lambda" {
  function_name = "lambda_function_name"
  role          = aws_iam_role.iam_for_lambda.arn
}

resource "aws_instance" "ec2"{
    ami= var.ec2_image_id
    instance_type = var.ec2_instance_type
    key_name = var.ec2_keypair_name
    count = var.ec2_count
    tags = {
        Name = var.ec2_tags
    }

}

output "instance_ip" {
    value = aws_instance.ec2.*.public_ip
}
output "instance_private_ip" {
    value = aws_instance.ec2.*.private_ip
}

resource "aws_lambda_function" "test_lambda" {
  function_name     = "lambda_function_name"
  role              = data.aws_iam_role.iam_for_lambda.arn
  filename          = "./dist.zip"
  handler           = "dist/lambda.js.handler"
  runtime           = "nodejs18.x"
  source_code_hash  =  filebase64sha256("./dist.zip")
}

echo "Starting deploy Pondera.cl"
source .env
yarn install
yarn build
s3cmd --access_key=$educalabs_aws_key --secret_key=$educalabs_aws_secret sync dist/* s3://beta.pondera.cl

echo "Deploy readt: beta.pondera.cl "
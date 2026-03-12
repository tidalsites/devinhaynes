#/bin/bash
# This source writes the env variables for runtime on amplify


echo "_AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" >> .env
echo "_AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" >> .env
echo "_AWS_REGION=$AWS_REGION" >> .env
echo "BEDROCK_AGENT_ID=$BEDROCK_AGENT_ID" >> .env
echo "BEDROCK_AGENT_ALIAS_ID=$BEDROCK_AGENT_ALIAS_ID" >> .env
echo "SES_ACCESS_KEY=$SES_ACCESS_KEY" >> .env
echo "SES_SECRET_ACCESS_KEY=$SES_SECRET_ACCESS_KEY" >> .env
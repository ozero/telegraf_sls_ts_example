# Telegram bot for AWS Lambda (TS)

Example repository for Telegraf.js + Serverless framework + AWS Lambda (Node.js Typescript)

## Setup

1. Open Telegram app & Create your new bot with `@BotFather`, then get a bot token.

2. `$ cp serverless-env-dev.sample.json serverless-env-dev.json`

3. paste your bot token into `serverless-env-dev.json`

4. Set up AWS credentials for serverless fw, then `$ sls deploy`

5. Make sure your Lambda function exists & BOT_TOKEN was written in its Env vars.

6. Make sure thee URL of API endpoint, that executes your Lambda function.

7. Set webhook with Telegram API. Open `https://api.telegram.org/bot<BOT_TOKEN>/setWebHook?url=<API_ENDPOINT_URL>` in browser.
  - ( API_ENDPOINT_URL looks like: `https://abcdefghijk.execute-api.<REGION-NAME>.amazonaws.com/<STAGE>/<RESOURCE>` )

8. Open Telegram app & `/start` with your bot.



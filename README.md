# Telegram bot for AWS Lambda (TS)

Example repository for Telegraf.js + Serverless framework + AWS Lambda (Node.js Typescript)

## Setup

### Env

1. Clone this repo, path will be `/path/to/project/telegraf_sls_ts_example`
1. [Set up AWS CLI](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html). Serverless fw uses its credentials.
1. [Set up AWS SDK layer](https://aws.amazon.com/jp/premiumsupport/knowledge-center/lambda-layer-aws-sdk-latest-version/) for Lambda funtion in `/path/to/project/aws-sdk-layer/nodejs`
1. Install Node.js [from nodesource](https://github.com/nodesource/distributions).
1. [Install Serverless Framework With](https://www.serverless.com/framework/docs/getting-started) `$ npm install -g serverless`
1. Install required npm packages with `$ yarn install`


### Telegram Bot token

1. Open Telegram app & Create your new bot with `@BotFather`, then get a bot token.
1. `$ cp .env.dev.sample.json .env.dev.json`
1. paste your `BOT TOKEN` into `.env.dev.json`


### Code

1. Deploy into AWS Lambda with `$ yarn sls deploy`
1. Make sure these items:
   - Your Lambda function exists on AWS, specified region.
   - BOT_TOKEN was written in function's Environment variables.
   - Make sure your `API ENDPOINT URL` on deploy log, that executes your Lambda function.
1. Set webhook with Telegram API. Open `https://api.telegram.org/bot<BOT_TOKEN>/setWebHook?url=<API_ENDPOINT_URL>` in browser.
   - ( API_ENDPOINT_URL looks like: `https://abcdefghijk.execute-api.<REGION-NAME>.amazonaws.com/<STAGE>/<RESOURCE>` )
1. Open Telegram app & `/start` with your bot.
1. Let's code your function in `src/functions/webhook/handler.ts` then `$ yarn sls deploy dev -f webhook`



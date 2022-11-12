# Telegram bot for AWS Lambda (TS)

Example repository for Telegraf.js + Serverless framework + AWS Lambda (Node.js Typescript)

## Setup

1. Install Serverless Framework With `$ npm install -g serverless`
1. Open Telegram app & Create your new bot with `@BotFather`, then get a bot token.
1. `$ cp .env.dev.sample.json .env.dev.json`
1. paste your `BOT TOKEN` into `.env.dev.json`
1. Set up AWS credentials for serverless fw
1. Install npm packages with `$ yarn install`
1. Deploy into AWS Lambda with `$ yarn sls deploy`
1. Make sure your Lambda function exists & BOT_TOKEN was written in its Env vars.
1. Make sure your `API ENDPOINT URL`, that executes your Lambda function.
1. Set webhook with Telegram API. Open `https://api.telegram.org/bot<BOT_TOKEN>/setWebHook?url=<API_ENDPOINT_URL>` in browser.
   - ( API_ENDPOINT_URL looks like: `https://abcdefghijk.execute-api.<REGION-NAME>.amazonaws.com/<STAGE>/<RESOURCE>` )
1. Open Telegram app & `/start` with your bot.



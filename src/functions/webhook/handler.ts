import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Context, Telegraf } from 'telegraf'
import { Update } from 'typegram';

import schema from './schema';


// Create your bot and tell it about your context type
const bot = new Telegraf<Context<Update>>(
  process.env.BOT_TOKEN,
  { telegram: { webhookReply: true } }
);


const webhook: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  
  bot.start((ctx) => ctx.reply('Welcome'));
  bot.help((ctx) => ctx.reply('Send me a sticker'));
  bot.on('sticker', (ctx) => ctx.reply('👍'));
  bot.hears('hi', (ctx) => {
    ctx.reply('Hey there');
  });
  bot.command('oldschool', (ctx) => ctx.reply('Hello'));


  //console.log(event);
  console.log(event);
  
  let body = event.body;
  await bot.handleUpdate(body);

  return formatJSONResponse({
    message: 'ok',
    event,
  });
};

export const main = middyfy(webhook);



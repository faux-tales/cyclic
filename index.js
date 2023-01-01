const { Telegraf } = require('telegraf');

const token = '1747699706:AAHwvrWDMt3PQEYwmh4LQUw-D4m2yweLyXo';
const bot = new Telegraf(token);

bot.command('kek', (ctx) => {
  ctx.reply('Kek');
});

bot.launch();

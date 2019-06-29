let { Botkit } = require('botkit');

const controller = new Botkit();

controller.hears('hello','direct_message', function(bot, message) {
    bot.reply(message,'Hello yourself!');
});
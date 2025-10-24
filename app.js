import TelegramBot from "node-telegram-bot-api";
const TOKEN = "7950157125:AAHDGf63BCO1XnuYe3HoWQIwV8wK3nBbuao";
const bot = new TelegramBot(TOKEN, {polling: true});
bot.on("message", function (msg) {
    
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Salom");
}); 
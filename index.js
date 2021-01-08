const Discord = require('discord.js');
const client = new Discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm"); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  if (message.author.bot) return;
  let content = message.content;
  if (message.mentions && message.mentions.users && message.mentions.users.has(client.user.id)) return chatbot.getReply(content).then(r =>
  message.channel.send(r))
});

client.login('YOU BOT TOKEN');

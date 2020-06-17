const Discord = require('discord.js');
const token = require('./token');
const config = require('./config');
const client = new Discord.Client();
const Bot = require('./bot/src');
const dBot = new Bot(client, config);

client.on('ready', () => {
  dBot.hello();
});

client.on('message', (msg) => {
  dBot.message(msg);
});

client.login(token);

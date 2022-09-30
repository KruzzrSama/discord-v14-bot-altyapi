const Discord = require("discord.js");
const conf = require("../configs.json");

module.exports = message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(conf.prefix)) return;
  
  let command = message.content.split(' ')[0].slice(conf.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = message.client.elevation(message);
  let client = message.client;
  let functions = require("../utils/functions");
  let cmd;

  if (message.client.commands.has(command)) {
    cmd = message.client.commands.get(command);
  } else if (message.client.aliases.has(command)) {
    cmd = message.client.commands.get(message.client.aliases.get(command));
  }

  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, conf, Discord, functions);
  }
  if (message.channel.bot) return;
};
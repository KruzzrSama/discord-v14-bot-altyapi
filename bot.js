const Discord = require("discord.js");
const client = new Discord.Client({
    'intents': [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildBans,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
    'partials': [Discord.Partials.Channel]
});
const config = require('./configs.json');
const moment = require('moment');
const fs = require('fs');
const chalk = require('chalk');

require('./utils/eventloader')(client);

const Logger = (message, type = false) => {
    type == true ? console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`) : console.log(message);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commandspath = "./commands/";
fs.readdir(commandspath, (err, categry) => {
    if (err) console.error(err);
    Logger(`${categry.length} adet kategori yüklendi.`, true);
    for (const category of categry) {
        fs.readdir(`${commandspath+category}/`, (err, files) => {
            if (err) console.error(err);
            for (const file of files) {
                let props = require(`${commandspath+category}/${file}`);
                let prmlvlcolor = chalk.white;
                if (props.conf.permLevel >= 1 && props.conf.permLevel <= 3) prmlvlcolor = chalk.green;
                else if (props.conf.permLevel >= 4 && props.conf.permLevel <= 6) prmlvlcolor = chalk.blue;
                else if (props.conf.permLevel >= 7 && props.conf.permLevel <= 8) prmlvlcolor = chalk.yellow;
                else if (props.conf.permLevel == 9) prmlvlcolor = chalk.red;
                Logger(`Yüklenen komut: [${chalk.blue(category)}][${prmlvlcolor(props.conf.permLevel)}][${chalk.bold(props.help.name)}(${chalk.magenta(file)})]-(${chalk.green(props.help.description)})`);
                client.commands.set(props.help.name, props);
                for (const alias of props.conf.aliases) {
                    client.aliases.set(alias, props.help.name);
                }
            }
        });
    }
});

client.elevation = message => {
    if(!message.guild) return;
    let permlvl = 0;
    if (message.member.bot) permlvl = -1;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.KickMembers)) permlvl = 1;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.ViewChannel)) permlvl = 2;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.ManageRoles)) permlvl = 3;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) permlvl = 4;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) permlvl = 5;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.ViewAuditLog)) permlvl = 6;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) permlvl = 7;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) permlvl = 8;
    if (message.author.id === config.authorID) permlvl = 9;
    return permlvl;
};

client.login(config.token);
const Discord = require("discord.js");
const pt = require("path");
const fs = require("fs");
let conf = require("../configs.json");
const chalk = require("chalk");
const moment = require("moment");

module.exports = {
    messageSend(message, title, text, type, timeout) {
        message.channel.send({embeds: [new Discord.MessageEmbed()
        .setDescription(text)
        .setColor(type)
        .setTitle(title)
        .setFooter(`${message.client.user.username} - v${conf.version}`)]}).then(m => timeout ? m.delete({timeout: timeout}) : null);
    },
    thumbSend(message, thumb, text, type, timeout) {
        message.channel.send({embeds: [new Discord.MessageEmbed()
        .setDescription(text)
        .setColor(type)
        .setThumbnail(thumb)
        .setFooter(`${message.client.user.username} - v${conf.version}`)]}).then(m => timeout ? m.delete({timeout: timeout}) : null);
    },
    getFiles(path, pattern) {
        let results = [];
        const res = fs.readdir(path);

        for (const item of res) {
            const itm = pt.resolve(path, item);
            const prop = fs.statSync(itm);

            if (prop.isDirectory()) results = results.concat(getFiles(itm, pattern));

            if (prop.isFile() && itm.endsWith(pattern)) !itm.includes("template") ? results.push(itm) : null;
        }

        return results;
    },
    Logger(message, type, time = false) {
        if (type == "err" && "error") time == true
        ? console.log(`${chalk.red(`[${moment().format('YYYY-MM-DD HH:mm:ss')}][HATA]> ${message}`)}`)
        : console.log(`${chalk.red(`[HATA]> ${message}`)}`);

        if (type == "info" && "information") time == true
        ? console.log(`${chalk.blue(`[${moment().format('YYYY-MM-DD HH:mm:ss')}][BILGI]> ${message}`)}`)
        : console.log(`${chalk.blue(`[BILGI]> ${message}`)}`);

        if (type == "warn" && "warning") time == true
        ? console.log(`${chalk.yellow(`[${moment().format('YYYY-MM-DD HH:mm:ss')}][UYARI]> ${message}`)}`)
        : console.log(`${chalk.yellow(`[UYARI]> ${message}`)}`);

        if (type == "succ" && "success") time == true
        ? console.log(`${chalk.green(`[${moment().format('YYYY-MM-DD HH:mm:ss')}][BAŞARILI]> ${message}`)}`)
        : console.log(`${chalk.green(`[BAŞARILI]> ${message}`)}`);
    }
}
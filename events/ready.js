const chalk = require("chalk");
const fs = require("fs");
const conf = require("../configs.json");

module.exports = (client) => {
    var log1 = chalk.green("[------------] Asistant [-------------]");
    var log2 = chalk.green(`]> ${client.guilds.cache.size} tane sunucuya hizmet veriyor`);
    var log3 = chalk.green(`]> ${client.users.cache.size} kullaniciya hizmet veriyor`);
    var log4 = chalk.green(`]> ${client.channels.cache.size} kanala hizmet veriyor`);
    var log5 = chalk.green("]> Prefix: " + conf.prefix);
    var log7 = chalk.green("]> Bot ID'si: " + client.user.id);
    var log8 = chalk.green("]> Bot Isim: " + client.user.username);
    var log9 = chalk.green("[------------] Asistant [-------------]");

    console.log(
        log1 +
        "\n" +
        log2 +
        "\n" +
        log3 +
        "\n" +
        log4 +
        "\n" +
        log5 +
        "\n" +
        log7 +
        "\n" +
        log8 +
        "\n" +
        log9
    );

    var rich = [
        `Devarc | ${client.guilds.cache.size} Sunucu`,
        "!yardım | !help | !discord",
    ];

    setInterval(function () {
        var random = Math.floor(Math.random() * (rich.length - 0 + 0) + 0);
        client.user.setActivity(rich[random], null);
    }, 2 * 2500);
};
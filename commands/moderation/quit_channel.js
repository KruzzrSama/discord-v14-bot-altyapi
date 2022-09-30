const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
exports.run = async(client, message, args, conf, Discord, functions) => {
    const gettingchannel = getVoiceConnection(message.channel.guild.id);
    gettingchannel.destroy();
};

exports.conf = {
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'quit',
    description: 'Belirlenen bir kanaldan çıkar',
    usage: '!quit <kanal id>'
};
const { joinVoiceChannel } = require('@discordjs/voice');
exports.run = async(client, message, args, conf, Discord, functions) => {
    const connectVoice = joinVoiceChannel({
        channelId: args[0],
        guildId: message.channel.guild.id,
        adapterCreator: message.channel.guild.voiceAdapterCreator,
    });
};

exports.conf = {
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'join',
    description: 'Belirlenen bir kanala girer',
    usage: '!join <kanal id>'
};
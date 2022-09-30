exports.run = async(client, message, args, conf, Discord, functions) => {
    if(!message.guild) return message.author.send({embeds: [new Discord.EmbedBuilder()
    .setThumbnail(message.author.avatarURL())
    .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL() })
    .setFooter({ text: client.user.username })
    .setDescription('❌ Bu komut sadece sunucularda kullanılır.')]})
    if(args[0] >= 100) return message.channel.send({embeds: [new Discord.EmbedBuilder()
    .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL() })
    .setTimestamp()
    .setFooter({ text: client.user.username })
    .setDescription('❌ 100\'den fazla mesaj silmeme Discord API izin vermiyor, geçerli bir miktar giriniz.')]});
    if(!args[0]) return message.channel.send({embeds: [
        new Discord.EmbedBuilder().setDescription('❕ Silebilmem için bir miktar belirtmelisin.')
        .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL() })
        .setTimestamp()
        .setFooter({ text: client.user.username })
    ]});

    message.channel.bulkDelete(args[0], true).then(() => {
        message.channel.send({embeds: [new Discord.EmbedBuilder()
        .setColor("#00ff00")
        .setTimestamp()
        .setFooter({ text: client.user.username })
        .setDescription(`${args} adet mesaj silindi`)
        .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL() })]});
    });

};

exports.conf = {
    aliases: ["temizle", "delmsg"],
    permLevel: 4
};

exports.help = {
    name: 'sil',
    description: 'Mesajları siler',
    usage: '!sil <adet>'
};
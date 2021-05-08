const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('8030389282814033938') 
let prefix = ('tb!');
 
exports.run = async(client, message, args) => { 

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setImage('https://media.discordapp.net/attachments/835072325509971979/839071978375086080/standard.gif')
        .setColor("#0005ff")
        .setTitle(`<a:konfeti:836981704660746241> **Tinkie Bot Yardım Menüsüne Hoşgeldiniz** <a:konfeti:836981704660746241>`)
        .setDescription(`
***\`\`\`diff
- ${prefix}gif-yardım : Gif Menüsü Gösterir.
- ${prefix}özelkom-yardım : Özel Komut Menüsü Gösterir.
- ${prefix}boost-yardım : Boost Menüsü Gösterir.
- ${prefix}ticket-yardım : Ticket Menüsü Gösterir.
\`\`\`***
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**


`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
        .addField(`» Tinkie Bot Bağlantıları`, ` <a:tac:836979769475203172> [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=803038928281403393&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** <a:tac:836979769475203172>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};
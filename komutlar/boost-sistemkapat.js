const Discord = require('discord.js');
const db = require('croxydb')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`boostrol_${message.guild.id}`)  
 if(!rol) return message.reply(`:x: **Bu özellik zaten kapalı! **`)
 
 
 const oldu = new Discord.MessageEmbed()
 .setImage('https://media.discordapp.net/attachments/835072325509971979/839071978375086080/standard.gif')
 .setColor("#0005ff")
 .setDescription(`
***\`\`\`diff
- ► BAŞARILI
\`\`\`***
 **╔▬▬▬▬▬▬▬Boost Sistemi▬▬▬▬▬▬▬▬▬**
 **║► ✅ Boost Sistemi Deaktif Edildi.**
 **╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
 
***\`\`\`diff
- ► SİSTEM ARTIK ÇALIŞMAYACAK
\`\`\`***
 `)
  message.channel.send(oldu)
 
  db.delete(`boostrol_${message.guild.id}`)  
  db.delete(`boostlog_${message.guild.id}`) 
  db.delete(`boostmesaj_${message.guild.id}`)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-sistemi-kapat']
  };
  
  exports.help = {
    name: 'boostkapat',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
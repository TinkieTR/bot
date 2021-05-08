const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR'))

        return message.channel.send(' Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! ')

	
if(!args[0]) {
    const secenek = new Discord.MessageEmbed()
    .setColor('0005ff')
    .setTitle('HATA...')
    .setDescription('***Lütfen Geçerli Bir Seçenek Belirt, Belirtebileceğin 2 Seçenek Bulunmaktadır.***\n**`<ayarla> Yada <sıfırla>`**')
return message.channel.send(secenek) 
}
    if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
      const secenek = new Discord.MessageEmbed()
      .setColor('0005ff')
      .setTitle('HATA...')
      .setDescription('***Lütfen Geçerli Bir Seçenek Belirt, Belirtebileceğin 2 Seçenek Bulunmaktadır.***\n**`<ayarla> Yada <sıfırla>`**')
return message.channel.send(secenek)
    }
  if(args[0] == "ayarla") {
    if(!args[1]) {
        const secenek = new Discord.MessageEmbed()
        .setColor('0005ff')
        .setTitle('HATA...')
        .setDescription('***Lütfen Geçerli Bir Kanal Belirt***')
  return message.channel.send(secenek)
    } else {
      let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1])
      if(!kanal) {
        const secenek = new Discord.MessageEmbed()
        .setColor('0005ff')
        .setTitle('HATA...')
        .setDescription('***Böyle Bir Kanal Bulunamadı!***')
  return message.channel.send(secenek)
      } else {
       db.set(`boostlog_${message.guild.id}`, kanal.id)
       const oldu = new Discord.MessageEmbed()
.setImage('https://media.discordapp.net/attachments/835072325509971979/839071978375086080/standard.gif')
.setColor("#0005ff")
.setDescription(`
***\`\`\`diff
- ► BAŞARILI
\`\`\`***
**╔▬▬▬▬▬▬▬Boost Log▬▬▬▬▬▬▬▬▬**
**║► ✅ Boost Log Aktif Edildi.**
**║► ✅  **<#${kanal.id}>** Olarak Güncelledim! **
**╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**

***\`\`\`diff
- ► SİSTEM ÇALIŞIYOR
\`\`\`***
`)
 message.channel.send(oldu)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostlog_${message.guild.id}`)
    const oldu = new Discord.MessageEmbed()
    .setColor('0005ff')
    .setTitle('BAŞARILI...')
    .setDescription(`***Boost Log Kanalı Başarıyla SIFIRLANDI***.`)
message.channel.send(oldu)
  }
}
  
};
exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['boost-log'],

  permlevel: 0

}

exports.help = {

  name: 'boostlog',

  description: 'kız olarak kayıt eder',

  usage: '!kız @kullanıcı isim yaş'

}

const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {


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
        .setDescription('***Lütfen Geçerli Bir Mesaj Belirt***')
    return message.channel.send(secenek)  
   } else {
      let msj = args.slice(1).join(' ')
      if(!msj) {
        const secenek = new Discord.MessageEmbed()
        .setColor('0005ff')
        .setTitle('HATA...')
        .setDescription('***Lütfen Geçerli Bir Mesaj Belirt***')
    return message.channel.send(secenek)  
      } else {
       db.set(`boostmesaj_${message.guild.id}`, `${args.slice(1).join(' ')}`)
       const oldu = new Discord.MessageEmbed()
.setImage('https://media.discordapp.net/attachments/835072325509971979/839071978375086080/standard.gif')
.setColor("#0005ff")
.setDescription(`
***\`\`\`diff
- ► BAŞARILI
\`\`\`***
**╔▬▬▬▬▬▬▬Boost Mesaj▬▬▬▬▬▬▬▬▬**
**║► ✅ Boost Mesaj Aktif Edildi.**
**║►** ✅ ${args.slice(1).join(' ')} **Olarak Güncelledim! **
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
    db.delete(`boostmesaj_${message.guild.id}`)
    const oldu = new Discord.MessageEmbed()
    .setColor('0005ff')
    .setTitle('BAŞARILI...')
    .setDescription(`***Boost Mesajı Başarıyla SIFIRLANDI.***`)
message.channel.send(oldu)  
  }
}
  
};
exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['boost-mesaj'],

  permlevel: 0

}

exports.help = {

  name: 'boostmesaj',

  description: 'kız olarak kayıt eder',

  usage: '!kız @kullanıcı isim yaş'

}

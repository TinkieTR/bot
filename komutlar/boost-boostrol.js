const Discord = require('discord.js');
const db = require('croxydb')
exports.run = async (client, message, args) => { 
const ayarlar = require("../ayarlar.json");
let prefix = ('tb!') 
let rol = message.mentions.roles.first() 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:by:  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) {
 const secenek = new Discord.MessageEmbed()
        .setColor('0005ff')
        .setTitle('HATA...')
        .setDescription(`:x:  ***Lütfen Bir Rol Belirt!***\n***Rolü Etiketleyemiyorsan*** **\`Rolün Etiketleme Seçeneğini\`** ***Aktif Etmeyi Unutma*** \n**\`Örnek Kullanım\`** : \`${prefix}boost-rol @rol \`\n\n**\`Önemli Not!!\`**: **Boost Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
  return message.channel.send(secenek)
}
 
const oldu = new Discord.MessageEmbed()
.setImage('https://media.discordapp.net/attachments/835072325509971979/839071978375086080/standard.gif')
.setColor("#0005ff")
.setDescription(`
***\`\`\`diff
- ► BAŞARILI
\`\`\`***
**╔▬▬▬▬▬▬▬Boost Otorol▬▬▬▬▬▬▬▬▬**
**║► ✅ Boost Rol Aktif Edildi.**
**║► ✅  **${rol}** Olarak Güncelledim! **
**╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**

***\`\`\`diff
- ► SİSTEM ÇALIŞIYOR
\`\`\`***
`)
 message.channel.send(oldu)
  db.set(`boostrol_${message.guild.id}`, rol.id)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-rol']
  };
  
  exports.help = {
    name: 'boostrol',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };

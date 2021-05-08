const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()
.setImage('https://media.discordapp.net/attachments/835072325509971979/839071978375086080/standard.gif')
.setColor("#0005ff")
.setDescription(`
***\`\`\`diff
- • Komutlar
\`\`\`***
**\`\`\`fix
[tb!boostlog] → Log Kanalını Ayarlar.
[tb!boostmesaj] → Boost Mesajı Ayarlar.
[tb!boostrol] → Boost Rolünü Ayarlar.
[tb!booskapat] → Sistemi Kapatır.
\`\`\`**
**Tinkie Bot Bağlantıları**
<a:tac:836979769475203172> [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=803038928281403393&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|**  <a:tac:836979769475203172>

***\`\`\`diff
- • Bilgilendirme
\`\`\`***
**\`\`\`fix
Discord.js Sürümü : 12.5.3
Yapımcım : ⌞Łudøνicα⌝#2930
Sürümüm : 2.0.1
\`\`\`**
`)
 .setFooter('© 20201 Tinkie | Tüm Hakları Saklıdır.')


return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'boost-yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};
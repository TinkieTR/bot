const Discord = require("discord.js");
const moment = require("moment")
const ayarlar = require("./ayarlar.json")
const db = require("croxydb")
const jimp = require("jimp")
const client = new Discord.Client();
const express = require("express");
const app = express();
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const prefix = ('tb!')

//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Bot Başarıyla Uptime Ediliyor . . .");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________

client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);
});
//BOT ÇALIŞTIRICI______________________________________________________________
//client.login("ODAzMDM4OTI4MjgxNDAzMzkz.YA3-SA.qz_YeKzkUBptmHqOEqRWg2EEULs");
client.login('ODM1NDY2MjU1Njk5Mjc5ODcz.YIP2lQ.pq1sc2JNoL8Gl4GrahIk9jZKCf8')
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////// ÖZEL KOMUT SİSTEMİ /////////////////////////
client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${prefix}${ozelkomutYazi}`) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});
// 2.
client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut2_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${prefix}${ozelkomutYazi}`) {
      let mesaj = await db.fetch(`sunucuMesaj2_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});
//3.
client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut3_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${prefix}${ozelkomutYazi}`) {
    let mesaj = await db.fetch(`sunucuMesaj3_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});
//4.
client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut4_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${prefix}${ozelkomutYazi}`) {
    let mesaj = await db.fetch(`sunucuMesaj4_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

//5.
client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut5_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${prefix}${ozelkomutYazi}`) {
    let mesaj = await db.fetch(`sunucuMesaj5_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

/////////////////// BOOST SİSTEMİ ////////////////
const logs = require("discord-logs")
logs(client);

client.on('guildMemberBoost', (member) => {
  if(!member.guild) return;

  let boost = db.fetch(`boostmesaj_${member.guild.id}`) || 'Sunucuya Boost Bastığın İçin Teşekkürler'

  let kanal = db.fetch(`boostlog_${member.guild.id}`) || 'Ayarlanmamış'

  if(kanal !== 'Ayarlanmamış') {

  client.guilds.cache.get(member.guild.id).channels.cache.get(kanal).send(`${member.user.tag}, ${boost}`)

  } else {

    return;

  }

});
const codleak = require('discord-logs');

codleak(client);

client.on('guildMemberBoost', async member => {

let guild = member.guild;

if(member.user.bot) return;

let rol = await db.fetch(`boostrol_${member.guild.id}`)

guild.members.cache.get(member.user.id).roles.add(rol);

});
///////////////// TİCKET SİSTEMİ //////////////////////////////
const enmap = require('enmap');

const settings = new enmap({
  name: "settings",
  autoFetch: true,
  cloneLevel: "deep",
  fetchAll: true
});
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command == "ticket-kur") {
      // ticket-setup #channel

      let channel = message.mentions.channels.first();
      if(!channel) return message.reply("**`Kullanımı :` tb!ticket-kur #kanal**");

      let sent = await channel.send(new Discord.MessageEmbed()
          .setTitle("Ticket Oluşturma")
          .setDescription("Aşağıdaki 🎫 Tepkisine Basarak Ticket Açabilirsiniz.")
          .setFooter("Destek Kutusu")
          .setColor("#0005ff")
          );

      sent.react('🎫');
      settings.set(`${message.guild.id}-ticket`, sent.id);

      const tamam = new Discord.MessageEmbed()
      .setTitle('Başarılı!')
      .setDescription('Ticket Sistemi Başarıyla Kuruldu')
      message.channel.send(tamam)
  }

  if(command == "kapat") {
      if(!message.channel.name.includes("ticket-")) return message.channel.send("Burası Senin Destek Odan Değil!")
      message.channel.delete();
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if(user.partial) await user.fetch();
  if(reaction.partial) await reaction.fetch();
  if(reaction.message.partial) await reaction.message.fetch();

  if(user.bot) return;

  let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

  if(!ticketid) return;

  if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
      reaction.users.remove(user);

      reaction.message.guild.channels.create(`ticket-${user.username}`, {
          permissionOverwrites: [
              {
                  id: user.id,
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              },
              {
                  id: reaction.message.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"]
              }
          ],
          type: 'text'
      }).then(async channel => {
          channel.send(`@everyone`, new Discord.MessageEmbed().setTitle("Destek Odasına Hoşgeldin!").setDescription("Bu Sunucudaki Yetkililer Seninle Kısa Zamanda İlgilenecektirler. Lütfen Sabırla Bekleyin. \n\nTicketi Kapatmak İçin : **tb!kapat** Komutunu Kullanın.").setColor("#0005ff"))
        })
  }
});
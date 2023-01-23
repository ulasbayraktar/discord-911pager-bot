const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const { MessageButton } = require('discord-buttons')
const db = require('quick.db');
const generator = require('generate-password');

exports.run = async (client, message, args) => {
  if (message.author.id != '1066032549656281108' ) return;
if(!args[0]) return message.delete();
  const divizyon = args[0];
if(!divizyon) return message.delete();
  let memur = args[1];
  if (!memur) return message.delete();
  memur = memur.replace('_', ' ');
  let durum = args.slice(2).join(' ');
  if (!durum) return message.delete();
  
  const chars = {
  '(004)': 'ç',
  '(0004)': 'Ç',
  '(009)': 'ğ',
  '(0009)': 'Ğ',
  '(011)': 'ı',
  '(0012)': 'İ',
  '(019)': 'ö',
  '(0019)': 'Ö',
  '(023)': 'ş',
  '(0023)': 'Ş',
  '(026)': 'ü',
  '(0026)': 'Ü',
};

const convert = (str) => {
  const regex = /\((\d+)\)/g;
  return str.replace(regex, (match, p1) => chars[match]);
};

  
  durum = convert(durum)
  
  
  message.delete();
  const role = message.guild.roles.cache.get(divizyon == '1' ? '1063406521578430464' : (divizyon == '2' ? '1060975972679163955' : (divizyon == '3' ? '1065571277252853880' : '1063406969823703082')))
  client.channels.cache.get('1066793586529669261').send(`${role}`).then(m => m.delete())
//asu 
  if(role.name === 'Air Support Division') {
const asu = new MessageEmbed()
.setAuthor("LSPD Bot")
.setColor('17397C')
.setTitle(`UYARI — (${role.name})`)
.setTimestamp()
.addField(`**MEMUR**`, `${memur}`)
.addField(`**DİVİZYON**`, `${role}`)
.addField(`**İSTEK**`, `${durum}`)
.setThumbnail('https://i.imgur.com/8LnrLfy.png')
var asuid = generator.generate({
        length: 3,
        numbers: false,
    })
let asuyes = new MessageButton()
.setStyle('green')
.setLabel('ÇAĞRIYI BİTİR')
.setID(asuid)

db.set(`asumemur_${asuid}`, `${memur}`)
db.set(`asurol_${asuid}`, role.id)
  db.set(`asuid_${asuid}`, asuid)
db.set(`içerik_${asuid}`, `${durum}`)
 client.channels.cache.get('1066793586529669261').send({
  embed: asu,
  buttons: asuyes
})
  }
//metro
  if(role.name === 'Metropolitan') {
const metro = new MessageEmbed()
.setAuthor("LSPD Bot")
.setColor('17397C')
.setTitle(`UYARI — (${role.name})`)
.setTimestamp()
.addField(`**MEMUR**`, `${memur}`)
.addField(`**DİVİZYON**`, `${role}`)
.addField(`**İSTEK**`, `${durum}`)
.setThumbnail('https://i.imgur.com/m42V79o.png')
var metroid = generator.generate({
        length: 3,
        numbers: false,
    })
let metroyes = new MessageButton()
.setStyle('green')
.setLabel('ÇAĞRIYI BİTİR')
.setID(metroid)

db.set(`metromemur_${metroid}`, `${memur}`)
db.set(`metrorol_${metroid}`, role.id)
db.set(`metroid_${metroid}`, metroid)
db.set(`içerik_${metroid}`, `${durum}`)
 client.channels.cache.get('1066793586529669261').send({
  embed: metro,
  buttons: metroyes
})
  }
//ctd
  if(role.name === 'Traffic Enforcement Unit') {
  const ctd = new MessageEmbed()
.setAuthor("LSPD Bot")
.setColor('17397C')
.setTitle(`UYARI — (${role.name})`)
.setTimestamp()
.addField(`**MEMUR**`, `${memur}`)
.addField(`**DİVİZYON**`, `${role}`)
.addField(`**İSTEK**`, `${durum}`)
.setThumbnail('https://i.imgur.com/4MYO9nf.png')
  
  var ctdid = generator.generate({
        length: 3,
        numbers: false,
    })
  
let ctdyes = new MessageButton()
.setStyle('green')
.setLabel('ÇAĞRIYI BİTİR')
.setID(ctdid)

db.set(`ctdmemur_${ctdid}`, `${memur}`)
db.set(`ctdrol_${ctdid}`, role.id)
db.set(`ctdid_${ctdid}`, ctdid)
db.set(`içerik_${ctdid}`, `${durum}`)
client.channels.cache.get('1066793586529669261').send({
  embed: ctd,
  buttons: ctdyes
})
  }
//gnd
  if(role.name === 'Gang Enforcement Team') {
  const gnd = new MessageEmbed()
.setAuthor("LSPD Bot")
.setColor('17397C')
.setTitle(`UYARI — (${role.name})`)
.setTimestamp()
.addField(`**MEMUR**`, `${memur}`)
.addField(`**DİVİZYON**`, `${role}`)
.addField(`**İSTEK**`, `${durum}`)
.setThumbnail('https://i.imgur.com/M0YXmLg.png')
  
  var gndid = generator.generate({
        length: 3,
        numbers: false,
    })
  
let gndyes = new MessageButton()
.setStyle('green')
.setLabel('ÇAĞRIYI BİTİR')
.setID(gndid)

db.set(`gndmemur_${gndid}`, `${memur}`)
db.set(`gndrol_${gndid}`, role.id)
db.set(`gndid_${gndid}`, gndid)
db.set(`içerik_${gndid}`, `${durum}`)
client.channels.cache.get('1066793586529669261').send({
  embed: gnd,
  buttons: gndyes
})
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pager',
  description: 'pager',
  usage: "pager"
};
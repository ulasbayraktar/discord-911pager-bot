const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = '<'

module.exports = client => {

var randomMesajlar = [
"114 SUVARI"
]

setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(``);

}, 2 * 30000);
client.user.setStatus("dnd");
  };
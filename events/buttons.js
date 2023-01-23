const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
const moment = require("moment");
const db = require("quick.db");

module.exports = (button) => {
  const asuid = db.get(`asuid_${button.id}`);
  const metroid = db.get(`metroid_${button.id}`);
  const ctdid = db.get(`ctdid_${button.id}`);
  const gndid = db.get(`gndid_${button.id}`);

  if (button.id === `${asuid}`) {
    button.defer();
    const kabuleden = button.clicker.member;
    const tarih = moment().add(3, "hour").format("DD/MM/YYYY HH:mm:ss");
    const içerik = db.get(`içerik_${asuid}`);
    const memur = db.get(`asumemur_${asuid}`);
    const rol = db.get(`asurol_${asuid}`);
    var asu = new MessageEmbed()
      .setTitle(
        "UYARI — (CTSOB: Air Support Division) & ÇAĞRI SONUÇLANDIRILDI"
      )
      .setThumbnail(
        "https://i.imgur.com/8LnrLfy.png"
      )
      .setAuthor("LSPD Bot")
      .setColor("17397C")
      .addField(`**MEMUR**`, `${memur}`)
      .addField(`**DİVİZYON**`, `<@&${rol}>`)
      .addField(`**AÇIKLAMA**`, `${içerik}`)
      .addField(
        `**DURUM**`,
        `${kabuleden} tarafından ${tarih} tarihinde sonuçlandırıldı.`
      );
    return button.message.edit({
      embed: asu,
    });
  }

  if (button.id === `${metroid}`) {
    button.defer();
    const kabuleden = button.clicker.member;
    const tarih = moment().add(3, "hour").format("DD/MM/YYYY HH:mm:ss");
    const içerik = db.get(`içerik_${metroid}`);
    const memur = db.get(`metromemur_${metroid}`);
    const rol = db.get(`metrorol_${metroid}`);
    var metro = new MessageEmbed()
      .setTitle(
        "UYARI — (CTSOB: Metropolitan Division) & ÇAĞRI SONUÇLANDIRILDI"
      )
      .setThumbnail(
        "https://i.imgur.com/m42V79o.png"
      )
      .setAuthor("LSPD Bot")
      .setColor("17397C")
      .addField(`**MEMUR**`, `${memur}`)
      .addField(`**DİVİZYON**`, `<@&${rol}>`)
      .addField(`**AÇIKLAMA**`, `${içerik}`)
      .addField(
        `**DURUM**`,
        `${kabuleden} tarafından ${tarih} tarihinde sonuçlandırıldı.`
      );
    return button.message.edit({
      embed: metro,
    });
  }

  if (button.id === `${ctdid}`) {
    button.defer();
    const kabuleden = button.clicker.member;
    const tarih = moment().add(3, "hour").format("DD/MM/YYYY HH:mm:ss");
    const içerik = db.get(`içerik_${ctdid}`);
    const memur = db.get(`ctdmemur_${ctdid}`);
    const rol = db.get(`ctdrol_${ctdid}`);
    var ctd = new MessageEmbed()
      .setTitle(
        "UYARI — (TSB & OCB: Traffic Division) & ÇAĞRI SONUÇLANDIRILDI"
      )
      .setColor("17397C")
      .setAuthor("LSPD Bot")
      .setThumbnail(
        "https://i.imgur.com/4MYO9nf.png"
      )
      .addField(`**MEMUR**`, `${memur}`)
      .addField(`**DİVİZYON**`, `<@&${rol}>`)
      .addField(`**AÇIKLAMA**`, `${içerik}`)
      .addField(
        `**DURUM**`,
        `${kabuleden} tarafından ${tarih} tarihinde sonuçlandırıldı.`
      );
    return button.message.edit({
      embed: ctd,
    });
  }
  if (button.id === `${gndid}`) {
    button.defer();
    const kabuleden = button.clicker.member;
    const tarih = moment().add(3, "hour").format("DD/MM/YYYY HH:mm:ss");
    const içerik = db.get(`içerik_${gndid}`);
    const memur = db.get(`gndmemur_${gndid}`);
    const rol = db.get(`gndrol_${gndid}`);
    var gnd = new MessageEmbed()
      .setTitle(
        "UYARI — (DB: Gang and Narcotics Division) & ÇAĞRI SONUÇLANDIRILDI"
      )
      .setThumbnail(
        "https://i.imgur.com/M0YXmLg.png"
      )
      .setColor("17397C")
      .setAuthor("LSPD Bot")
      .addField(`**MEMUR**`, `${memur}`)
      .addField(`**DİVİZYON**`, `<@&${rol}>`)
      .addField(`**AÇIKLAMA**`, `${içerik}`)
      .addField(
        `**DURUM**`,
        `${kabuleden} tarafından ${tarih} tarihinde sonuçlandırıldı.`
      );
    return button.message.edit({
      embed: gnd,
    });
  }
};

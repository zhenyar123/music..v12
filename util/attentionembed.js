const { Client, Collection, MessageEmbed } = require("discord.js");
const {
  approveemoji,
  denyemoji,
  AVATARURL,
  BOTNAME,
  BOTCOLOR,
} = require(`../config.json`);
module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react(denyemoji);
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("<:emoji_74:815251307635015731>" + titel)
      .setColor("YELLOW")
      
      message.channel.send(resultsEmbed);
      message.react("<:emoji_74:815251307635015731>")
    return;

  }
};

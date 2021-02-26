////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { MessageEmbed } = require("discord.js");
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
 async canModifyQueue(member) {
    //define the EMBED
    let resultsEmbed = new MessageEmbed()
      .setTitle("You must be in the Same Voice Channel as me!")
      .setColor("83c0ff")
    //wenn memberchannel nicht der botchannel ist
    if (member.voice.channel !== member.guild.me.voice.channel) {
    //Send the message to the MEMBER
      member.send(resultsEmbed);
      member.react("<:emoji_48:814468558871461938>")
      //return false that it ends the command
      return false;
    }
    //return true that it continues the command
    return true;
  }
};

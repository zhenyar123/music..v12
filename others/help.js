const { MessageEmbed } = require("discord.js");

  const prefix = ("c!");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('83c0ff')
    .setTitle("Zooya Help")
  .setDescription(`
[Support](https://discord.gg/CHUKd9z87E) - [Invite](https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot)

**user Commands**
c!prefix - c!uptime - c!ping - c!invite
**Music Commands**
c!play - c!pause- c!skip - c!queue
c!resume - c!search - c!volume - c!skipto- c!shuffle - c!remove - c!lyrics - c!loop 
**Filter Commands**
c!filter bassboost - c!filter 8D - c!filter vaporwave - c!filter nightcore - c!filter phaser - c!filter tremolo - c!filter vibrato - c!filter surrounding - c!filter pulsator - c!filter subboost - c!filter clear

`)
    
       

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

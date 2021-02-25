const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`Zooya Help`)
    .setThumbnail(message.author.avatarURL())
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

  
   .setColor("83c0ff");
   message.react("<:emoji_48:814468558871461938>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

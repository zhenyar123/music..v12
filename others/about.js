const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "about",
  aliases: ["a"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()

   
    .setDescription(`
`)

  .addField("**Name** : ", `» ${client.user.tag} `, true)
  .addField("**ID Bot** : ", ` ${client.user.id} `, true)
  .addField("**Guilds** : ", `» ${client.guilds.cache.size}  guilds`, true)
  .addField("**Developers Bot** : ", `Calli#4415`, true)
  .setThumbnail(message.author.avatarURL());

   .setColor("83c0ff");
   message.react("<:emoji_48:814468558871461938>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

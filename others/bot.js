const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "bot",
  aliases: ["b"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()

   
    .setDescription(`
**About Zooya.**

[Support](https://discord.gg/CHUKd9z87E) - [Invite](https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot)

Developers Bot:
Calli4415

Set Status:
Online 

prefix Zooya:
{c!}

`)

  .setThumbnail(message.author.avatarURL());

   .setColor("83c0ff");
   message.react("<:emoji_48:814468558871461938>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

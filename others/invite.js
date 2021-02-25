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
    .setDescription(`

<:emoji_63:814468559823831050> [Invite](https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot)

<:emoji_63:814468559823831050> [Support](https://discord.gg/CHUKd9z87E)
`)

  
   .setColor("83c0ff");
   message.react("<:emoji_48:814468558871461938>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

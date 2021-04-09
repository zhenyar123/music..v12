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

<:all:830157072116351026>  [Click here](https://discord.com/api/oauth2/authorize?client_id=830137375010979870&permissions=8&scope=bot) **to invite the bot.**
`)

  
   .setColor("YELLOW");
   message.react("<:all:830157072116351026>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/815252825012568085/815266512414703656/image0.png `)
    .setTitle(`**Calli Help**`)
    .setDescription(`

**User Commands**
\`c!invite\` - \`c!support\` - \`c!about\`
\`c!ping\` - \`c!prefix\` - \`c!uptime\`

**Music Commands**
\`c!play\` - \`c!skip\` - \`c!skipto\`
\`c!stop\` - \`c!volume\` - \`nowplaying\`
\`c!suffle\` - \`c!search\` - \`c!resume\`
\`c!remove\` - \`c!queue\` - \`c!filter\`
\`c!loop\` - \`c!lyric\` - \`c!radio\`

<:emoji_63:814468559823831050> **Links**
[Support](https://discord.gg/CHUKd9z87E) - [Invite](h https://discord.com/api/oauth2/authorize?client_id=797017110776643645&permissions=3758096369&scope=bot)
`)

   .setFooter(`${message.author.tag}`, message.author.avatarURL())
   .setColor("YELLOW");
   message.react("<:emoji_74:815251307635015731>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

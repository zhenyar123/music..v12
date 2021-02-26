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
    .setThumbnail(`https://media.discordapp.net/attachments/809000331807424512/814581827192881152/image0.png `)
    .setTitle(`**Zooya Help**`)
    .setDescription(`
[Support](https://discord.gg/CHUKd9z87E) - [Invite](https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot)

 **User Commands**
\`c!invite\` - \`c!support\` - \`c!about\`
\`c!ping\` - \`c!prefix\` - \`c!uptime\`
**Music Commands**
\`c!play\` - \`c!skip\` - \`c!skipto\`
\`c!stop\` - \`c!volume\` - \`nowplaying\`
\`c!suffle\` - \`c!search\` - \`c!resume\`
\`c!remove\` - \`c!queue\` - \`c!filter\`
\`c!loop\` - \`c!lyric\` - \`c!radio\`
**Filter Commands**
\`c!fi bassboost\` - \`c!fi 8D\` - \`c!fi vaporwave\`
\`c!fi nightcore\` - \`c!fi phaser\` - \`c!fi tremolo\`
\`c!fi vibrato\` - \`c!fi surrounding\` - \`c!fi pulsator\`
\`c!fi subboost\` - \`c!fi clear\`

`)

   .setFooter(`Requested | ${message.author.tag}`, message.author.avatarURL())
   .setColor("83c0ff");
   message.react("<:emoji_48:814468558871461938>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

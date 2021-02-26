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
    .setTitle(`<:emoji_62:814468559613722634> | **Zooya**`)
    .setThumbnail(message.author.avatarURL())
    .setDescription(`

<:emoji_61:814468559597207572> c!play
<:emoji_61:814468559597207572> c!skip
<:emoji_61:814468559597207572> c!skipto
<:emoji_61:814468559597207572> c!stop
<:emoji_61:814468559597207572> c!volume
<:emoji_61:814468559597207572> c!nowplaying
<:emoji_61:814468559597207572> c!suffle
<:emoji_61:814468559597207572> c!search
<:emoji_61:814468559597207572> c!resume
<:emoji_61:814468559597207572> c!remove
<:emoji_61:814468559597207572> c!queue
<:emoji_61:814468559597207572> c!pause
<:emoji_61:814468559597207572> c!filter
<:emoji_61:814468559597207572> c!loop
<:emoji_61:814468559597207572> c!lyric
<:emoji_61:814468559597207572> c!radio
=================
<:emoji_61:814468559597207572> C!invite
<:emoji_61:814468559597207572> c!support
<:emoji_61:814468559597207572> c!about
<:emoji_61:814468559597207572> c!help
<:emoji_61:814468559597207572> c!uptime
<:emoji_61:814468559597207572> c!ping
=================
<:emoji_63:814468559823831050> Links

[Support](https://discord.gg/CHUKd9z87E) - [Invite](https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot)


`)

  
   .setColor("83c0ff");
   message.react("<:emoji_48:814468558871461938>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

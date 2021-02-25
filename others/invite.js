invite.js


const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<:emoji_48:814468558871461938>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("83c0ff").setTitle("<:emoji_63:814468559823831050> Please Invite me: ").setDescription("https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot")
    .setFooter("And enjoy listening to music!", ""));

  }
}

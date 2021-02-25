const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ping`,
  description: "(pg)Gives you the ping of the Bot",
  aliases: ["pg"],
  cooldown: 3,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<:emoji_48:814468558871461938>");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("83c0ff").setTitle("<:emoji_48:814468558871461938> `" + client.ws.ping + "ms`"));
  }
}

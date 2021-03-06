const Discord = require('discord.js');
const config = require('../config.json');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {
  if (args == 'help') {
    let embed = new Discord.RichEmbed()
      .setTitle(`${module.exports.help.name} Command Information`)
      .setDescription(`${module.exports.help.description}`)
      .addField('Usage', `${config.prefix}${module.exports.help.usage}`)
      .setColor(config.cyan)
    message.channel.send(embed);
    return
  };

  let embed = new Discord.RichEmbed()
    .setTitle('View the mod list and other information.')
    .setURL(process.env.spreadsheetlink)
    .setDescription('Clicking the blue link will take you to the Harmony Hollow Spreadsheet where you will find all of the mods in the modpack along with other information.')
  message.channel.send(embed);
  return
};

module.exports.help = {
  name: 'information',
  description: 'Gives the user information about development and the Mod List.',
  usage: `information`
};

const config = require('../config.json');
const chalk = require('chalk');

module.exports = async client => {
  client.user.setActivity("Booting...");

  let pluralnonpluralservers = (client.guilds.size > 1) ? 'Servers' : 'Server';
  let pluralnonpluralusers = (client.users.size > 1) ? 'Users' : 'User';

  console.log(`\n\n${client.user.username} is online.\nOperating on ${client.guilds.size} ${pluralnonpluralservers}.\nOperating for ${client.users.size} ${pluralnonpluralusers}.\n`);
  setActivity(); setInterval(setActivity, 60000);

  function setActivity() {
    // Sets Activity in a rotation
    const Gameinfo = [`Harmony Hollow Time!`, `Eyyy up!`];
    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)];

    client.user.setActivity(info);
    console.log(chalk.green('[Console]') + ` Activity set to (${info})`);
  }
};

const reqEvent = (event) => require(`../events/${event}`);
const conf = require("../configs.json");

module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('messageCreate', reqEvent('messageCreate'));
};
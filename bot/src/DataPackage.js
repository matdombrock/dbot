const PrefixCheck = require('./PrefixCheck');
const Permissions = require('./Permissions');
class DataPackage {
  // Data structure for incoming messages
  // Undefined values are OK!
  constructor(msg, client, config, modelList, CommandList) {
    this.msg = msg;
    this.client = client;
    this.config = config;
    this.modelList = modelList;
    this.CommandList = CommandList;
    this.isAdmin = msg ? Permissions.isAdmin(msg, config): false;
    this.isDM = msg ? msg.channel.type === 'dm': undefined;
  }
  get parsed() {
    // Prefix type, not the actual char
    const prefix = PrefixCheck.get(this);
    // Full message shift to lower and split to an array
    const split = this.msg.content.toLowerCase().split(' ');
    // The actual command as a string (no prefix)
    const command = split[0].substr(1);
    // A list of arguments without the command (each word is an argument)
    const args = split.slice(1);
    // The full message as a string
    const message = this.msg.content.split(' ').slice(1).join(' ');
    return {
      prefix,
      split,
      command,
      args, // array in lowercase
      message, // full message string
    };
  }
}
module.exports = DataPackage;

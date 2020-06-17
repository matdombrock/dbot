const Ignore = require('./Ignore');
const Reply = require('./Reply');
const DataPackage = require('./DataPackage');
const LogMsg = require('./LogMsg');
const Help = require('./Help');
const modelList = require('./ModelList');
const CommandList = require('./CommandList');

class Bot {
  constructor(client, config) {
    this.client = client;
    this.config = config;
  }
  hello() {
    const dPack = this._dPack();// No message
    LogMsg.hello(dPack);
  }
  message(msg) {
    const dPack = this._dPack(msg);
    // Check if the bot should listen to this message
    if (Ignore.check(dPack)===true) {
      return;
    }
    // Should listen, log message
    LogMsg.incomingMessage(dPack);
    const reply = new Reply(dPack.msg);
    const prefix = dPack.parsed.prefix;
    const command = dPack.parsed.command;
    if (CommandList.cMap.has(command)===false) {
      if (prefix === 'help') {
        // User entered JUST the help prefix
        Help.list(dPack, reply);
        return;
      }
      LogMsg.unknownCommand(command);
      return;
    }
    switch (prefix) {
      case 'command':
        this._command(dPack, reply);
        break;
      case 'help':
        Help.command(dPack, reply);
        break;
      default:
        LogMsg.unknownPrefix(prefix);
        break;
    }
  }
  _command(dPack, reply) {
    // Check restrictions
    if (CommandList.cMap.get(dPack.parsed.command).info.restricted===true) {
      if (dPack.isAdmin !== true) {
        // User is not an admin but is attempting a restricted command
        LogMsg.restrictedCommand();
        reply.send('You are not allowed to do that!');
        return;
      }
    }
    // Dm only?
    if (CommandList.cMap.get(dPack.parsed.command).info.direct &&
    dPack.config.enforce_direct) {
      if (dPack.isDM!==true) {
        reply.send('This can only be used in a DM!');
        reply.forceDM = true;
      }
    }
    // attempt command
    try {
      CommandList.cMap.get(dPack.parsed.command).fn(dPack, reply);
    } catch (err) {
      LogMsg.commandError(err);
    }
  }
  _dPack(msg) {
    return new DataPackage(
        msg,
        this.client,
        this.config,
        modelList,
        CommandList,
    );
  }
}
module.exports = Bot;

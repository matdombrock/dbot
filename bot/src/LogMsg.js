class LogMsg {
  constructor() {
    //
  }
  static hello(dPack) {
    console.log('Hello World!');
    console.log('I\'m currently active in the following server(s):');
    console.log(dPack.config.console_divider);
    for (const guild of dPack.client.guilds.cache) {
      console.log(`${guild[1].name } (${guild[0]})`);
    }
  }
  static incomingMessage(dPack) {
    console.log(dPack.config.console_divider);
    console.log('Received message:');
    console.log(`Author: ${dPack.msg.author.username} (${dPack.msg.author.id})`);
    console.log('Content:');
    console.log(dPack.msg.content);
    console.log('Parsed:');
    console.log(JSON.stringify(dPack.parsed, null, 2));
  }
  static sendReply(content) {
    console.log('-------');
    console.log('Sent Response:');
    console.log(content);
  }
  static unknownCommand(command) {
    console.log(`Can not find command: ${command}`);
  }
  static commandError(err) {
    console.log('There was an issue running the command...');
    console.log(err);
  }
  static unknownPrefix(prefix) {
    console.log(`Unknown prefix: ${prefix}`);
  }
  static restrictedCommand() {
    console.log('COMMAND BLOCKED!');
  }
}
module.exports = LogMsg;

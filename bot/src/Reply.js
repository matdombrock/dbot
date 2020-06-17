const LogMsg = require('./LogMsg');

class Reply {
  constructor(msg) {
    this.msg = msg;
    this.content = '';
    this.sendHistory = [];
    this.forceDM = false;
  }
  append(content, newLine = true) {
    if (newLine) {
      this.newLine();
    }
    this.content += content;
  }
  newLine() {
    this.content += '\r\n';
  }
  code(language) {
    this.content += '```';
    if (language!==undefined) {
      this.content += language;
    }
  }
  send(content, clearContent = true) {
    if (content===undefined) {
      content = this.content;
    }
    if (this.forceDM) {
      this.msg.author.send(content);
    } else {
      this.msg.reply(content);
    }
    this.sendHistory.push(content);
    LogMsg.sendReply(content);
    if (clearContent) {
      this.clearContent();
    }
  }
  clearContent() {
    this.content = '';
  }
  clearHistory() {
    this.sendHistory = [];
  }
  async awaitMsg() {
    const filter = (m) => this.msg.author.id === m.author.id;
    const messages = await this.msg.channel.awaitMessages(filter, {time: 60000, max: 1, errors: ['time']});
    return messages.first().content;
  }
}
module.exports = Reply;

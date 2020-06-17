class PrefixCheck {
  constructor() {
    //
  }
  static command(dPack) {
    return (dPack.msg.content.charAt(0)===dPack.config.command_prefix);
  }
  static help(dPack) {
    return (dPack.msg.content.charAt(0)===dPack.config.help_prefix);
  }
  static all(dPack) {
    return {
      command: this.command(dPack),
      help: this.help(dPack),
    };
  }
  static get(dPack) {
    // returns the first valid prefix
    const check = this.all(dPack);
    for (const prefix of Object.keys(check)) {
      if (check[prefix] === true) {
        return prefix;
      }
    }
    // no prefix (undefined)
    return;
  }
  static any(dPack) {
    const check = this.all(dPack);
    for (const prefix of Object.keys(check)) {
      if (check[prefix] === true) {
        return true;
      }
    }
    return false;
  }
}
module.exports = PrefixCheck;

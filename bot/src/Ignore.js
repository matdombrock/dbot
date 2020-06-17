const PrefixCheck = require('./PrefixCheck');
class Ignore {
  constructor() {
    //
  }
  static check(dPack) {
    // Should the message be ignored?
    console.log();
    if (this._fromSelf(dPack)===true) {
      return true;
    }
    if (dPack.config.always_listen===true) {
      return true;
    }
    if (PrefixCheck.get(dPack)===undefined) {
      return true;
    }
    // All good
    return false;
  }
  static _fromSelf(dPack) {
    if (dPack.msg.author.id===dPack.client.user.id) {
      // is self
      return true;
    }
    return false;
  }
}

module.exports = Ignore;

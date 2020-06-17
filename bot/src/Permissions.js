class Permissions {
  constructor() {

  }
  static getRoles(msg) {
    const roles = [];
    for (const role of msg.member.roles) {
      roles.push(role[1].name);
    }
    return roles;
  }
  static isAdmin(msg, config) {
    if (msg.member === null) {
      return false;
    }
    for (const role of msg.member._roles) {
      if (role[1].name===config.admin_role) {
        return true;
      }
    }
    return false;
  }
}
module.exports = Permissions;

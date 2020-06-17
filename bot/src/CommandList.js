const fs = require('fs');

const Command = require('./Command');

class CommandList {
  constructor() {
    this.cMap = new Map();
    this._init();
  }
  _init() {
    this._buildList('/commands/', 'core');
    this._buildList('/../../custom/commands/', 'custom');
  }
  _buildList(path, name) {
    path = __dirname + path;
    const dirListing = fs.readdirSync(path);
    if (dirListing.length === 0) {
      console.log(`Can not find commands in directory: ${name}`);
    }
    for (const command of dirListing) {
      if (command.charAt(0)==='_' || command.charAt(0)==='.') {
        // Ignore hidden files and readme
        continue;
      }
      const commandName = command.replace('-', '_').split('.')[0].toLowerCase();
      const commandData = require(path+command);
      this.cMap.set(commandName, new Command(commandData));
      console.log(`Loaded Command: ${commandName}`);
    }
  }
}

module.exports = new CommandList();

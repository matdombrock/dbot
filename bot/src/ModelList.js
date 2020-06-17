const fs = require('fs');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/../database.db`,
});
class ModelsList {
  constructor() {
    this.mMap = new Map();
    this._init();
  }
  async _init() {
    await this._buildList('/models/', 'core');
    await this._buildList('/../../custom/models/', 'custom');
  }
  async _buildList(path, name) {
    path = __dirname + path;
    if (fs.existsSync(path)===false) {
      return;
    }
    const dirListing = fs.readdirSync(path);
    if (dirListing.length === 0) {
      console.log(`Can not find models in directory: ${name}`);
      return;
    }
    for (const model of dirListing) {
      if (model.charAt(0)==='_' || model.charAt(0)==='.') {
        // Ignore hidden files and readme
        continue;
      }
      const modelName = model.replace('-', '_').split('.')[0];
      const modelData = require(path+model);
      this.mMap.set(
          modelName,
          sequelize.define(
              modelName,
              modelData.def(Sequelize),
          ),
      );
      await this.mMap.get(modelName).sync();
      console.log(`Loaded Model: ${modelName}`);
    }
  }
}

module.exports = new ModelsList();

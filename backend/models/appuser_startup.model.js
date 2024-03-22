const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Appuser_Startup = sequelize.define("appuser_startup", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    });
    return Appuser_Startup
}
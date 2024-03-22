const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Appuser_Appuser = sequelize.define("appuser_appuser", {
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
    return Appuser_Appuser
}
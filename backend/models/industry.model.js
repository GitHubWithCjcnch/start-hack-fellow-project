const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Industry = sequelize.define("industry", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    });
    return Industry
}
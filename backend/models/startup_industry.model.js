const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Startup_Industry = sequelize.define("startup_industry", {
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
    return Startup_Industry
}
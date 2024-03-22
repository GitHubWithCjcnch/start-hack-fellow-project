const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Startup = sequelize.define("startup", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(5000),
        allowNull: false
      },
      motivation: {
        type: Sequelize.STRING(5000),
        allowNull: false
      },
      fellowReason: {
        type: Sequelize.STRING(5000),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: enums.status,
        allowNull: false 
      },
      applicationStatus: {
        type: Sequelize.ENUM,
        values: enums.applicationStatus,
        allowNull: false 
      },
      foundersNumber: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      foundedYear: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      region: {
        type: Sequelize.ENUM,
        values: enums.region,
        allowNull: false 
      },
      batch: {
        type: Sequelize.ENUM,
        values: enums.batch,
        allowNull: false 
      },
      fileNamePitch: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bucketPathPitch: {
        type: Sequelize.STRING,
        allowNull: false
      },
      typePitch: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  
    return Startup;
  };
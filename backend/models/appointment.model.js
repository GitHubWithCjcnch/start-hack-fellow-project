const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("appointment", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      information: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY ,
        allowNull: true
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      durationMin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    });
  
    return Appointment;
  };
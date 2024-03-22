const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Appuser_Appointment = sequelize.define("appuser_appointment", {
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
    return Appuser_Appointment
}
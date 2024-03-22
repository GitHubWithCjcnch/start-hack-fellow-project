const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const CoachingRequest = sequelize.define("coachingRequest", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      problemDescription: {
        type: Sequelize.STRING(3000),
        allowNull: false,
        unique: true,
      },
      stage: {        
        type: Sequelize.ENUM,
        values: enums.stage,
        allowNull: false 
      }
    });
    return CoachingRequest
}
const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Appuser = sequelize.define("appuser", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      anrede: {
        type: Sequelize.ENUM,
        values: enums.anrede,
        allowNull: false 
      },
      birthdate: {
        type: Sequelize.DATEONLY ,
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      linkedIn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      region: {
        type: Sequelize.ENUM,
        values: enums.region,
        allowNull: false 
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      european: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      function: {
        type: Sequelize.STRING,
        allowNull: true
      },
      university: {
        type: Sequelize.STRING,
        allowNull: true
      }, 
      subject: {
        type: Sequelize.STRING,
        allowNull: true
      },
      studyLevel: {
        type: Sequelize.ENUM,
        values: enums.studyLevel,
        allowNull: true 
      },
      uniStartDate: {
        type: Sequelize.DATEONLY ,
        allowNull: true
      },    
      fileNameMatr: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bucketPathMatr: {
        type: Sequelize.STRING,
        allowNull: true
      },
      typeMatr: {
        type: Sequelize.STRING,
        allowNull: true
      },      
      fileNameEngl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bucketPathEngl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      typeEngl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      typeEenglProfngl: {
        type: Sequelize.ENUM,
        values: enums.englProf,
        allowNull: true 
      },
      levelEngl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    });
  
    return Appuser;
  };
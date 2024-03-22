const enums = require("./enums/index.js")();

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      topic: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      content: {
        type: Sequelize.STRING(50000),
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    });
  
    return Post;
  };
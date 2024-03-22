const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.appuser = require("./appuser.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.startup = require("./startup.model.js")(sequelize, Sequelize);
db.appointment = require("./appointment.model.js")(sequelize, Sequelize);
db.appuser_appointment = require("./appuser_appointment.model.js")(sequelize, Sequelize);
db.appuser_startup = require("./appuser_startup.model.js")(sequelize, Sequelize);
db.startup_industry = require("./startup_industry.model.js")(sequelize, Sequelize);
db.appuser_appuser = require("./appuser_appuser.model.js")(sequelize, Sequelize);
db.industry = require("./industry.model.js")(sequelize, Sequelize);
db.coachingRequest = require("./coachingRequest.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.appuser, {
  through: "appuser_roles",
  foreignKey: "roleId",
  otherKey: "appuserId"
});
db.appuser.belongsToMany(db.role, {
  through: "appuser_roles",
  foreignKey: "appuserId",
  otherKey: "roleId"
});

db.appuser.hasMany(db.appuser_appointment, {
  foreignKey: { 
    name: 'appuserId',
    allowNull: false
  }
});
db.appuser_appointment.belongsTo(db.appuser, {
  foreignKey: { 
    name: 'appuserId',
    allowNull: false
  }
});

db.appointment.hasMany(db.appuser_appointment, {
  foreignKey: { 
    name: 'appointmentId',
    allowNull: false
  }
});
db.appuser_appointment.belongsTo(db.appointment, {
  foreignKey: { 
    name: 'appointmentId',
    allowNull: false
  }
});
db.appuser.hasMany(db.appuser_appointment, {
  foreignKey: { 
    name: 'appuserId',
    allowNull: false
  }
});
db.appuser_appointment.belongsTo(db.appuser, {
  foreignKey: { 
    name: 'appuserId',
    allowNull: false
  }
});

db.startup.hasMany(db.appuser_startup, {
  foreignKey: { 
    name: 'startupId',
    allowNull: false
  }
});
db.appuser_startup.belongsTo(db.startup, {
  foreignKey: { 
    name: 'startupId',
    allowNull: false
  }
});
db.appuser.hasMany(db.appuser_startup, {
  foreignKey: { 
    name: 'appuserId',
    allowNull: false
  }
});
db.appuser_startup.belongsTo(db.appuser, {
  foreignKey: { 
    name: 'appuserId',
    allowNull: false
  }
});


db.industry.hasMany(db.startup_industry, {
  foreignKey: { 
    name: 'industryId',
    allowNull: false
  }
});
db.startup_industry.belongsTo(db.industry, {
  foreignKey: { 
    name: 'industryId',
    allowNull: false
  }
});
db.startup.hasMany(db.startup_industry, {
  foreignKey: { 
    name: 'startupId',
    allowNull: false
  }
});
db.startup_industry.belongsTo(db.startup, {
  foreignKey: { 
    name: 'startupId',
    allowNull: false
  }
});

 
db.appuser.hasMany(db.appuser_appuser, {
  foreignKey: { 
    name: 'fromuserId',
    allowNull: false
  },
  as: "fromUser"
});
db.appuser_appuser.belongsTo(db.appuser, {
  foreignKey: { 
    name: 'fromuserId',
    allowNull: false
  },
  as: "fromUser"
});
db.appuser.hasMany(db.appuser_appuser, {
  foreignKey: { 
    name: 'touserId',
    allowNull: false
  },
  as: "toUser"
});
db.appuser_appuser.belongsTo(db.appuser, {
  foreignKey: { 
    name: 'touserId',
    allowNull: false
  },
  as: "toUser"
});

db.ROLES = ["partner", "fellow", "organizer"];

module.exports = db;
const db = require("../models");
const ROLES = db.ROLES;
const Appuser = db.appuser;

checkDuplicateEmail = (req, res, next) => {

  Appuser.findOne({
    where: {
      email: req.body.email.toLowerCase()
    }
  }).then(appuser => {
    if (appuser) {
      res.status(400).send({
        message: "Failed! E-Mail is already in use!"
      });
      return;
    }  
      next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }  
  next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
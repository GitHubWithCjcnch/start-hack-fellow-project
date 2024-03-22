const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/index.js");
const Appuser = db.appuser;
const User = db.user;
verifyToken = (req, res, next) => {
  //let token = req.cookies["x-access-token"];
  let token = req.cookies["authToken"];
  //console.log(req.cookies);
  if (!token) {
    return res
      .status(403)
      .clearCookie("authToken")
      .clearCookie("userInfoToken")
      .send({
        message: "No token provided!",
      });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .clearCookie("authToken")
        .clearCookie("userInfoToken")
        .send({
          message: "Unauthorized!",
        });
    }
    req.userId = decoded.id;
    next();
  });
};

hasOne = (requiredRoles) => {
  return (req, res, next) => {
    Mitarbeiter.findByPk(req.userId).then((mitarbeiter) => {
      mitarbeiter.getRoles().then((roles) => {
        for (let i = 0; i < requiredRoles.length; i++) {
          for (let j = 0; j < roles.length; j++) {
            if (roles[j].name === requiredRoles[i]) {
              next();
              return;
            }
          }
        }
        res.status(403).send({
          message: "Insufficient user rights!",
        });
      });
    });
  };
};

const authJwt = {
  verifyToken: verifyToken,
  hasOne: hasOne,
};
module.exports = authJwt;

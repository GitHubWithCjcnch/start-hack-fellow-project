const db = require("../models");
const config = require("../config/auth.config");
const generalConfig = require("../config/general.config");

//var PasswordResetTemlate = require('../services/templates/resetPassword.template') 

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  db.appuser.findOne({
    where: {
      email: req.body.email.toLowerCase()
    }
    //,attributes: { exclude: ['password'] }
  })
    .then(appuser => {
      if (!appuser) {
        return res.status(404).send({ message: "Appuser konnte nicht gefunden werden." });
      }
      if (appuser.deleted) {
        return res.status(404).send({ message: "Appuser konnte nicht gefunden werden." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        appuser.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: appuser.id }, config.secret, {
        expiresIn: 24*60*60*1000 // 24 hours
      });

      var authorities = [];


      res.status(200)
      .setHeader("x-content-type-options", "nosniff")
      .setHeader("access-control-expose-headers", "Set-Cookie")
      .cookie('authToken', token, {
        httpOnly: true,
        maxAge: 8*60*60*1000, // 24 hours          
        secure: false,
        sameSite: true,
        path: '/'
      })
      .cookie('authToken', JSON.stringify({
        id: appuser.id,
        name: appuser.name,
        vorname: appuser.vorname,
        email: appuser.email,
        festnetz: appuser.festnetz,
        mobil: appuser.mobil,
        strasseNr: appuser.strasseNr,
        plz: appuser.plz,
        ort: appuser.ort
      }), {
        httpOnly: false,
        maxAge: 24*60*60*1000, // 24 hours          
        secure: false,
        sameSite: true,
        path: '/'
      })
      .send({
        id: appuser.id,
        name: appuser.name,
        vorname: appuser.vorname
        //accessToken: token
      });
        
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signout = (req, res) => {
    //console.log(req.cookies);
    res.status(200)
    res.clearCookie('authToken') 
    res.clearCookie('userInfoToken')    
    res.send({message: "Successfully logged out!"})
}


exports.test = (req, res) => {
  //console.log(req.cookies);
  res.status(200)
  res.send({message: "Successfully test!"})
}


const { authJwt, verifySignUp } = require("../middleware/index.js");
const controller = require("../controllers/industry.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/industry/get",
    //[authJwt.verifyToken, authJwt.hasOne(["organizer", "fellow", "partner"])],
    controller.get
  );

  /**
    app.post(
        "/api/industry/create",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/industry/edit",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/appuser/delete",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createOrganizer
    );
 */
};

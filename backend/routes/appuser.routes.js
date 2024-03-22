const { authJwt, verifySignUp } = require("../middleware");
const controller = require("../controllers/appuser.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/appuser/getFellowDashboard",
        [authJwt.verifyToken, authJwt.hasOne(["fellow"])],
        controller.getFellowDashboard
    );

    app.post(
        "/api/appuser/getEnums",
        //[authJwt.verifyToken, authJwt.hasOne(["fellow", "partner", "organizer"])],
        controller.getEnums
    );

    app.post(
        "/api/appuser/getStartups",
        //[authJwt.verifyToken, authJwt.hasOne(["fellow", "partner", "organizer"])],
        controller.getStartups
    );


    /** 
    app.post(
        "/api/appuser/createFellow",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/appuser/createPartner",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/appuser/createOrganizer",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createOrganizer
    );

    app.post(
        "/api/appuser/apply",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createOrganizer
    );

    app.post(
        "/api/appuser/addToStartup",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createOrganizer
    );
*/


}
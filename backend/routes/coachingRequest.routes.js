const { authJwt, verifySignUp } = require("../middleware");
const controller = require("../controllers/coachingRequest.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/coachingRequest/create",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/coachingRequest/changeStatus",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/appuser/delete",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createOrganizer
    );



}
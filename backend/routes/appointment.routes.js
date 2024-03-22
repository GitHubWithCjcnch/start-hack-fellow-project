const { authJwt, verifySignUp } = require("../middleware");
const controller = require("../controllers/appointment.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/appointment/create",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/appointment/edit",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createFellow
    );

    app.post(
        "/api/appointment/delete",
        [authJwt.verifyToken, authJwt.hasOne(["organizer"])],
        controller.createOrganizer
    );



}
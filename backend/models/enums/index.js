module.exports = () => {
    const enums = {};
    enums.anrede = require("./anrede.enum")();
    enums.englProf = require("./englProf.enum")();
    enums.studyLevel = require("./studyLevel.enum")();
    enums.stage = require("./stage.enum")();
    enums.status = require("./status.enum")();
    enums.applicationStatus = require("./applicationStatus.enum")();
    enums.region = require("./region.enum")();
    enums.batch = require("./batch.enum")();
    return enums;
}  
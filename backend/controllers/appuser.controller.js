const db = require("../models/index.js");
const enums = require("../models/enums/index.js")();
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

exports.getFellowDashboard = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const appuser = await db.appuser.findOne({
      where: {
        id: req.body.id,
      },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: db.startup,
          as: "startups",
        },
        {
          model: db.appuser_appointsments,
          as: "appuser_appointments",
          include: [
            {
              model: db.appointment,
              as: "appointment",
            },
          ],
        },
      ],
      order: [["id", "ASC"]],
      transaction: t,
    });
    await t.commit();
    res.status(200).send({ appuser: appuser });
  } catch (err) {
    console.log(err);
    await t.rollback();
    res.status(500).send({ message: err.message });
  }
};

exports.getEnums = async (req, res) => {
  try {
    res.status(200).send({
      anrede: enums.anrede,
      englProf: enums.englProf,
      studyLevel: enums.studyLevel,
      stage: enums.stage,
      status: enums.status,
      applicationStatus: enums.applicationStatus,
      region: enums.region,
      batch: enums.batch,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

exports.getStartups = async (req, res) => {
  try {
    let filter = req.body.filter;
    let inds = await db.industry.findAll();
    inds = inds.map((obj) => obj.name);
    let batches = enums.batch;

    let nameFilter = filter?.nameFilter ? filter.nameFilter.split(" ") : "";
    let batchFilter =
      filter?.batchFilter && filter?.batchFilter?.length > 0
        ? filter?.batchFilter
        : batches;
    let industryfilter =
      filter?.industryfilter && filter?.industryfilter.length > 0
        ? filter?.industryfilter
        : inds;

    const startup = await db.startup.findAndCountAll({
      where: {
        [Op.and]: [
          {
            batch: { [Op.in]: batchFilter },
            name: { [Op.iLike]: `%${nameFilter}%` },
            deleted: false,
          },
        ],
      },
      include: [
        {
          model: db.startup_industry,
          as: "startup_industries",
          required: true,
          duplicating: false,
          include: [
            {
              model: db.industry,
              as: "industry",
              required: true,
              duplicating: false,
              where: {
                [Op.or]: [{ name: { [Op.in]: industryfilter } }],
              },
            },
          ],
        },
      ],
      subQuery: false,
      order: [["name", "ASC"]],
    });

    res.status(200).send({ startups: startup });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

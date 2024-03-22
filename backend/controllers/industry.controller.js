const db = require("../models");
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

exports.get = async (req, res) => {
    const t = await sequelize.transaction();
    try{ 
        const industries = await db.industry.findAll({  
            where: {
                deleted: false
            },        
            order: [
                    ['name', 'ASC']
            ], 
            transaction: t
        }); 
        await t.commit();
        res.status(200).send({ industries: industries});
    }catch (err) {
        console.log(err);
        await t.rollback();
        res.status(500).send({ message: err.message });
    }
  };
  
const { cloudKnex, localKnex } = require('./../knex');
const TABLE_NAME = 'statistics';

/*(async () => {
    const copyDB = await localKnex(TABLE_NAME).select();
    await cloudKnex(TABLE_NAME).truncate();
    await cloudKnex(TABLE_NAME).insert(copyDB);
})().then(() => process.exit());*/


module.exports = {
  async getAllStatistics() {
      return localKnex(TABLE_NAME).select().orderBy('created_at', 'desc').limit(201);
  },
  async getOneStatistics(country) {
      return localKnex(TABLE_NAME).select().where({country});
  },
};

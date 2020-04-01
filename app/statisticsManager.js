//const knex = require('./../knex');
const TABLE_NAME = 'statistics';
const { fakeStatics, static } = require('./fake');

module.exports = {
  async getAllStatistics() {
      const data = fakeStatics;//await knex(TABLE_NAME).select().orderBy('created_at', 'desc').limit(201);
      return (data);
  },
  async getOneStatistics(country) {
      const data = static//await knex(TABLE_NAME).select().where({ country });
      return data;
  },
};

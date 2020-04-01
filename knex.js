const knex = require('knex');
module.exports = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        database: 'covid19',
        user: 'root',
        password: '',
    }
});

const knex = require('knex');
const localKnex = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        database: 'covid19',
        user: 'root',
        password: '',
    }
});
const cloudKnex = knex({
    client: 'mysql',
    connection: {
        host: '46.101.206.118',
        port: '33060',
        database: 'covid19',
        user: 'newMonty',
        password: 'gtnhjdbx',
    }
});

module.exports = {
    cloudKnex,
    localKnex,
}

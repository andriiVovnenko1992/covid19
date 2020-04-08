const fetch = require('node-fetch');
const knex = require('./knex');

function insert({active, total, recovered, country, time, death }) {
 return  knex('statistics').insert({ active, total, recovered, country, created_at: time, death });
}

async function process() {
    console.time('time');
    const res = await fetch('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
            "x-rapidapi-key": "c53a55f00amsh450dfc2ddaac17bp1c3a85jsn62788d3fd1e3",
        },
    });
    const {response} = await res.json();
    await Promise.all(response.map(({ country, time, cases, deaths }) => {
        const {active, total, recovered} = cases;
        const death = deaths.total;
        return insert({active, total, recovered, death, time, country});
    }));
    console.log('done');
    console.timeEnd('time');
    process.exit();
}

process();

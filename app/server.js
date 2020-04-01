const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const mainController = require('./mainController');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();

router
    .get('/statistics', mainController.getStatistics);

app
    .use(cors())
    .use(bodyParser())
    .use(router.routes());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server listen on ${PORT} port`);
});

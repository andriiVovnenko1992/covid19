const statisticsManager = require('./statisticsManager');

module.exports = {
    async getStatistics(ctx, next) {
        const { country } = ctx.request.query;
        ctx.body = !country ? (await statisticsManager.getAllStatistics())
            : await statisticsManager.getOneStatistics(country);
        next();
    },
};

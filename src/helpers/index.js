import moment from "moment";

export const sortByActive = (countries) => countries.sort((cur, prev) => prev.active - cur.active);
export const objectWithConvertedDate = (statistics) => statistics.map((obj) => Object.assign({}, obj, {created_at: moment(obj.created_at).format('MM-DD')}));
export const uniqByDate = (statistics) => {
    const result = [];
    for (let i = 0; i < statistics.length; i++) {
        if (i === 0 || statistics[i].created_at !== statistics[i - 1].created_at) {
            result.push(statistics[i]);
        }
    }
    return result;
};

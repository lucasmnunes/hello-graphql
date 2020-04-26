const { drivers } = require('../data/data.js')

module.exports = {
    hi() {
        return 'Hello, GraphQL V2!';
    },

    drivers() {
        return drivers;
    },

    driver(_, args) {
        let driversFiltered = drivers.filter(d => d.id == args.id);
        return driversFiltered ? driversFiltered[0] : null;
    }
}
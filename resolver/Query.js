const { drivers } = require('../data/data.js')

module.exports = {
    hi() {
        return 'Hello, GraphQL V2!';
    },

    getDrivers() {
        return drivers;
    }
}
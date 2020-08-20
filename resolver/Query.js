const {drivers, teams} = require('../data/data.js')

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
    },

    teams() {
        return teams;
    },

    team(_, args) {
        let teamsFiltered = teams.filter(t => t.id == args.id);
        return teamsFiltered ? teamsFiltered[0] : null;
    }
}
const {teams} = require('../data/data')

module.exports = {
    team(driver) {
        let teamsFiltered = teams.filter(t => t.id == driver.team_id);
        return teamsFiltered ? teamsFiltered[0] : null;
    }
}
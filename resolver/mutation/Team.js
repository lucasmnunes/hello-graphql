const { teams, sequenceTeam } = require('../../data/data.js')

module.exports = {
    addTeam(_, { data }) {
        const teamExists = teams.some(t => t.name === data.name);

        if (teamExists) {
            throw new Error('Team already exists!');
        }

        const team = {
            id: sequenceTeam(),
            ...data
        }

        teams.push(team);
        return team; 
    },

    deleteTeam(_, { filter }) {
        const teamIndex = getTeamIndexByTeamFilter(filter);
        
        if (!isIndexValid(teamIndex)) {
            return null;
        }

        const teamsDeleted = teams.splice(teamIndex, 1);
        return teamsDeleted ? teamsDeleted[0] : null;
    },

    alterTeam(_, { filter, data}) {
        const teamIndex = getTeamIndexByTeamFilter(filter);
        
        if (!isIndexValid(teamIndex)) {
            return null;
        }
        
        if (nonNull(data.name)) {
            teams[teamIndex].name = data.name;
        }

        if (nonNull(data.country)) {
            teams[teamIndex].country = data.country;
        }       

        return teams[teamIndex];
    }
}

function getTeamIndexByTeamFilter(filter) {
    let teamIndex = -1;

    const { id, name, country } = filter;
    if (id) {
        teamIndex = teams.findIndex(t => t.id === id);
    } else if (name) {
        teamIndex = teams.findIndex(t => t.name === name);
    } else if (country) {
        teamIndex = teams.findIndex(t => t.country === country);
    }

    return teamIndex;
}

function isIndexValid(index) {
    return index >= 0;
}

function nonNull(arg) {
    return arg;
}
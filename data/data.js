let idDriver = 1;

function sequenceDriver() {
    return idDriver++;
}

let idTeam = 1;

function sequenceTeam() {
    return idTeam++;
}

const drivers = [
    {
        id: sequenceDriver(),
        name: "Lewis Hamilton",
        country: "England",
        number: 44,
        team_id: 1
    },
    {
        id: sequenceDriver(),
        name: "Sebastian Vettel",
        country: "Germany",
        number: 5,
        team_id: 2
    },
    {
        id: sequenceDriver(),
        name: "Charles Leclerc",
        country: "Monaco",
        number: 16,
        team_id: 2
    },
    {
        id: sequenceDriver(),
        name: "Valtteri Bottas",
        country: "Finland",
        number: 77,
        team_id: 1
    },
    {
        id: sequenceDriver(),
        name: "Max Verstappen",
        country: "Netherlands",
        number: 33,
        team_id: 3
    }
];

const teams = [
    {
        id: sequenceTeam(),
        name: "Mercedes",
        country: "Germany"
    },
    {
        id: sequenceTeam(),
        name: "Ferrari",
        country: "Italy"
    },
    {
        id: sequenceTeam(),
        name: "Red Bull Racing",
        country: "England"
    }
];

module.exports = {
    sequenceDriver,
    sequenceTeam,
    drivers,
    teams
}
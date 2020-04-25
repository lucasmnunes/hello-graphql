let id = 1;
function sequence() {
    return id++;
}

const drivers = [
    {
        id: sequence(),
        name: "Lewis Hamilton",
        country: "England",
        number: 44
    },
    {
        id: sequence(),
        name: "Sebastian Vettel",
        country: "Germany",
        number: 5
    },
    {
        id: sequence(),
        name: "Charles Leclerc",
        country: "Monaco",
        number: 16
    },
    {
        id: sequence(),
        name: "Valtteri Bottas",
        country: "Finland",
        number: 77
    },
    {
        id: sequence(),
        name: "Max Verstappen",
        country: "Netherlands",
        number: 33
    }
];

module.exports = {
    sequence,
    drivers
}
const {drivers, sequenceDriver} = require('../../data/data.js')

module.exports = {
    addDriver(_, {data}) {
        const driverExists = drivers.some(d => d.name === data.name);

        if (driverExists) {
            throw new Error('Driver already exists!');
        }

        const driver = {
            id: sequenceDriver(),
            ...data
        }

        drivers.push(driver);
        return driver;
    },

    deleteDriver(_, {filter}) {
        const driverIndex = getDriverIndexByDriverFilter(filter);

        if (!isIndexValid(driverIndex)) {
            return null;
        }

        const driversDeleted = drivers.splice(driverIndex, 1);
        return driversDeleted ? driversDeleted[0] : null;
    },

    alterDriver(_, {filter, data}) {
        const driverIndex = getDriverIndexByDriverFilter(filter);

        if (!isIndexValid(driverIndex)) {
            return null;
        }

        if (nonNull(data.name)) {
            drivers[driverIndex].name = data.name;
        }

        if (nonNull(data.country)) {
            drivers[driverIndex].country = data.country;
        }

        return drivers[driverIndex];
    }
}

function getDriverIndexByDriverFilter(filter) {
    let driverIndex = -1;

    const {id, name} = filter;
    if (id) {
        driverIndex = drivers.findIndex(d => d.id === id);
    } else if (name) {
        driverIndex = driver.findIndex(d => d.name === name)
    }

    return driverIndex;
}

function isIndexValid(index) {
    return index >= 0;
}

function nonNull(arg) {
    return arg;
}
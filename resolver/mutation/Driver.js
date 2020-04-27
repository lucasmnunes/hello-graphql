const { drivers, sequence } = require('../../data/data.js')

module.exports = {
    addDriver(_, { dados }) {
        const driverExists = drivers.some(d => d.name === dados.name);

        if (driverExists) {
            throw new Error('Driver already exists!');
        }

        const driver = {
            id: sequence(),
            ...dados
        }

        drivers.push(driver);

        return driver; 
    }
}
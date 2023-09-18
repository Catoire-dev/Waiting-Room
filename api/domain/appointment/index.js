class AppointmentDomain {
    constructor(storage) {
        this.storage = storage;
    }

    list() {
        const results = this.storage.getAll();
        const waitingRooms = {
            A: [],
            B: [],
            C: [],
            D: [],
        };
        for(let reference in results) {
            waitingRooms[reference.charAt(1)].push({reference, ...results[reference]});
        }
        return waitingRooms;
    }

    get(reference) {
        const result = this.storage.get(`#${reference}`);
        return {reference: `#${reference}`, ...result};
    }

    update(reference) {
        const result = this.storage.get(`#${reference}`);
        return {reference: `#${reference}`, ...result};
    }
}

module.exports.AppointmentDomain = AppointmentDomain;
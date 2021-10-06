import Mongo from '../libs/Mongo';

export default class ResourcesService {
    /**
     * DAO mongoDB collections
     * @param {string} collection - collection name
     */
    constructor(collection) {
        this.collection = collection;
        this.client = new Mongo();
    }

    /**
     * recollect a collection as middleware builder
     * @returns {array} - response query mongoDB as array
     */
    async getResource() {
        const resource = await this.client.get(this.collection);
        return resource;
    }
}

import { MongoClient } from 'mongodb';
import config from '../config/envServer';
import ServerLog from '../utils/ServerLog';
import ServerError from '../utils/ServerError';

const { dbUser, dbPassword, dbName: DB_NAME, dbHost: DB_HOST } = config;
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

export default class Mongo {
    /**
     * client and connection specification
     * @constructor
     */
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
        this.dbName = DB_NAME;
    }
    /**
     * singleton pattern for pool connection
     * @throws {ErrorObject} - error connection
     * @returns {object} - connection client
     */
    async connect() {
        try {
            if (!Mongo.connection) {
                await this.client.connect();
                ServerLog.info(`Connected succesfully to ${DB_NAME}`);
                Mongo.connection = this.client.db(this.dbName);
            }
            return Mongo.connection;
        } catch ({ message }) {
            throw new ServerError(message).response('connection');
        }
    }
    /**
     * fetch all documents in collection
     * @param {string} collection - collection name
     * @throws {ErrorObject} - error to get resource
     * @returns {array} - response query mongoDB as array
     */
    async get(collection) {
        try {
            const db = await this.connect();
            return await db.collection(collection).find({}).toArray();
        } catch (error) {
            if (!error) throw new ServerError(error.message).response('get');
            throw error;
        }
    }
}

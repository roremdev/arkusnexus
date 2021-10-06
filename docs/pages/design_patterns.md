## Design Patters

In my experience, I've used some of creational design patters.

### Singleton

> A class of which only a single instance can exist.

For example, a driver connection to a database.
```javascript
/**
* singleton pattern for pool connection
* @throws {ErrorObject} - error connection
* @returns {object} - connection client
*/
async connect() {
    try {
        if (!MongoLib.connection) {
            await this.client.connect();
            Response.info(`Connected succesfully to ${DB_NAME}`);
            MongoLib.connection = this.client.db(this.dbName);
        }
        return MongoLib.connection;
    } catch ({ message }) {
        throw new ServerError('error connection').response(message);
    }
}
```

### Factory

> Creates an instance of several derived classes.

For example, a factory to create a client resource.
```javascript
/**
    * DAO mongoDB collections
    * @param {string} collection - collection name
    */
constructor(collection) {
    this.collection = collection;
    this.mongoDB = new MongoLib();
}

const service = new ResourcesService('User');
```

### Builder

> Separates object construction from its representation.

```javascript
/**
* payment builder response
* @param {object} user - user account register
* @returns {object} - payment response
*/
builderPayment(user) {
    const account = await new ClientBank(user);
    const disccount = await new BankConnection(user);
    return await new PaymentRecord(Promise.all([account, disccount]);
}
```

### Tasks

- ¿Qué patrones de diseño conoces y cómo funcionan?
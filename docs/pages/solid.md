## SOLID

> These principles establish practices that lend to developing software with considerations for maintaining and extending as the project grows.

Basically, the design patterns are a set of guidelines for creating software.

We can understand SOLID as a principle to design and developer a stable system through the following principles:

* S - Single responability principle.
* O - Open close principle.
* L - Liskov substitution principle.
* I - Interface segregation principle.
* D - Dependency inversion principle.

### Single responability principle

> The single responability principle states that every module or class should have responsibility over a single part of the system.

```javascript
export default class ResourcesService {
    //...more code
    /**
     * recollect a collection as middleware builder
     * @returns {array} - response query mongoDB as array
     */
    async getResource() {
        return await this.client.get(this.collection);
    }
}
```

Our logic is defined for get resources without matters which collection. If you like to manage more get actions it's other responsability.

### Open close principle

> The open close principle states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

```javascript
    /**
     * fetch all documents collection
     * if exist filter, fetch all documentos collection depending of text search
     * @param {[{filter: string, fields: array<string>, username: string}={}]} - for text search , projection
     * @throws {ErrorObject}
     * @returns {array} - response query mongoDB as array
     */
    async getResourceFilter({ filter, fields, username: user_name } = {}) {
        try {
            const query = user_name
                ? { user_name }
                : filter && { $text: { $search: filter } };
            const projection =
                fields &&
                fields.reduce((projection, field) => {
                    projection[field] = 1;
                    return projection;
                }, {});
            const resource = await this.mongoDB.get(
                this.collection,
                query,
                projection
            );
            return resource;
        } catch (error) {
            Response.error(error);
            throw error;
        }
    }
```

If we wanted to modify the way of get data (by filters or by fields), we can add a layer abstraccion for request to `get` request to driver.

### Liskov substitution principle

> The Liskov substitution principle states that if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering the correctness of the program.

This principle is used to ensure that classes do not depend on each other, and that classes do not have references to each other. Since, in Javascript this asspect is possbile through `Object.assign()` and `Object.getPrototypeOf()` methods.

### Interface segregation principle

> The interface segregation principle states that large interfaces should be made smaller and clients should only depend on interfaces that they use.

```javascript
// resource interface DAO model
class ResrourceInterface {
    // more methods
    /**
     * create a new document
     * @param {ModelObject} data - data document
     * @throws {ErrorObject} - error query
     * @return {ModelObject} - response query mongoDB as object
     */
    createResource(data);
    /**
     * update document data
     * @param {ModelObject} data - data document
     * @throws {ErrorObject} - error query
     * @return {ModelObject} - response query mongoDB as object
     */
    updateResource(data);
    /**
     * delete a document searched by it's _id
     * @param {string} id - objectID document
     * @throws {ErrorObject} - error query
     * @return {number} - 1 -> success, 0 -> without effect
     */
    deleteResource({ id });
};
```

### Dependency inversion principle

> The dependency inversion principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions.

As a dynamic language, JavaScript doesn’t require the use of abstractions to facilitate decoupling. Therefore, the stipulation that abstractions shouldn’t depend upon details isn’t particularly relevant to JavaScript applications.

```javascript
/**
 * get user operation
 * @name /api/user
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {ResponseObject}
 */
router.get('/', async (req, res, next) => {
    try {
        ServerLog.info('GET /api/user');
        const data = await userService.getResource();
        response(res, 200, 'user found', data);
    } catch (error) {
        next(error);
    }
});
```

For our implementation, we can code a `route` definition where `getResource` doesn't define the way to get data only a utility.

### Tasks

- ¿Qué es SOLID?
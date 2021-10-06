## Testing

> Testing is the process of running a program with the goal of finding errors. If the "testing" is successful, then we can be sure that the features are fulfilled.

The advantages of having testing are:

- We know better the code and its implications in other processes (integration testing).
- We reduce development time and review hours to find the "bug".

I've used the following testing tools:
- [Jest](https://jestjs.io/). It's a JavaScript testing framework.
- [Joi](https://joi.dev/api/?v=17.4.2). It's a JavaScript schema validation library.
- [Supertest](https://www.npmjs.com/package/supertest). It's a library for testing HTTP servers.

```javascript
/**
 * @description colleciton of test cases on root request
 * @param {string} - case name
 */
describe('routes - api', () => {
    describe('GET /api', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.get('/api');
            expect(status).toBe(200);
            expect(typeof response.data).toBe('string');
        });
    });
});
```

At example below, we can test a single response from the server.

## TDD

It is a development paradigm that consists of five stages:

1. Add test.
2. Preliminary phase.
3. Writing code.
4. Test phase.
5. Refactoring the code.

TDDs are used for unit, integration, or functional testing.

In context, it allows us to create modules, components or flows to cover a requirement in order to reach the "code complete" (term that determines whether or not any requirement was met).

```javascript
/**
 * @description colleciton of test cases on user request
 * @param {string} - case name
 */
describe('routes - api - user', () => {
    describe('GET /api/user', () => {
        it('should respond with array', async () => {
            await testUser.getUsers(request);
        });
    });
});
```

We can define a pool of test for test cases (end-to-end or unit test). Also, we can convine TDD and behabiour driven development (BDD).

### Tasks

- ¿Qué herramientas has utilizado para el manejos de errores?
- TDD
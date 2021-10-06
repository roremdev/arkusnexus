import supertest from 'supertest';

import app from '../index';
import testUser from './user';

const request = supertest(app);

/**
 * @description colleciton of test cases on root request
 * @param {string} - case name
 */
describe.skip('routes - api', () => {
    describe('GET /api', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.get('/api');
            expect(status).toBe(200);
            expect(typeof response.data).toBe('string');
        });
    });
});

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

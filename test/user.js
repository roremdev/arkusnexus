/**
 * tests collection to the user model
 *
 * @name getUsers
 * @description gets all users from the database
 * @param {Object} request - instance of server request
 */
export default {
    getUsers: async (request) => {
        const { status, body: response } = await request.get('/api/user');
        expect(status).toBe(200);
        expect(typeof response.data).toBe('object');
    },
};

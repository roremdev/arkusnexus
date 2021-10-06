import express from 'express';
import Resource from '../../services/Resource';

import ServerLog from '../../utils/ServerLog';
import { response } from '../../middlewares/Responses';

const router = express.Router();
const userService = new Resource('user');

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

export default router;

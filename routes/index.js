import express from 'express';

import ServerLog from '../utils/ServerLog';
import { response } from '../middlewares/Responses';

const router = express.Router();

/**
 * root request operation
 * @name /
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {string}
 */
router.get('/', (_, res) => {
    ServerLog.info('GET /');
    response(res, 200, 'Hello World!!', 'Welcome to the API');
});

export default router;

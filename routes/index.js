import express from 'express';

import ServerLog from '../utils/ServerLog';

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
    res.send('Hello World');
});

export default router;

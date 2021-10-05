import express from 'express';
import ServerLog from '../utils/ServerLog';

const router = express.Router();

router.get('/', (_, res) => {
    ServerLog.info('GET /');

    res.send('Hello World');
});

export default router;

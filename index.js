import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import ServerLog from './utils/ServerLog';
import config from './config/envServer';

const app = express();
const { mode, port, serverURL } = config;

app.use(cors());
app.use(express.json());
if (!(mode === 'dev')) {
    // ? global access cors
    app.use(helmet());
}

app.listen(port, () => ServerLog.listen());

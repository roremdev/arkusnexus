import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/envServer';

const app = express();
const { mode, port, serverURL } = config;

app.use(cors());
app.use(express.json());
if (!(mode === 'dev')) {
    // ? global access cors
    app.use(helmet());
}

app.listen(port, () => console.log(`server - ${mode} on ${serverURL}`));

// todo: add helmet middleware
import express from 'express';
import cors from 'cors';
import ServerLog from './utils/ServerLog';
import config from './config/envServer';
import root from './routes/index';

const { port } = config;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', root);

app.listen(port, () => ServerLog.listen());

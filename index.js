// todo: implement unit test
// todo: add helmet middleware
import express from 'express';
import cors from 'cors';
import ServerLog from './utils/ServerLog';
import config from './config/envServer';
import root from './routes/index';
import user from './routes/api/user';
import { errors } from './middlewares/Responses';

const { mode, port } = config;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', root);
app.use('/api/user', user);
app.use(errors);

if (mode !== 'test') app.listen(port, () => ServerLog.listen());
export default app;

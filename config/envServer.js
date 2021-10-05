require('dotenv').config();

export default {
    appName: process.env.APP_NAME,
    serverURL: `http://${process.env.SERVER}:${process.env.PORT}`,
    port: process.env.PORT,
    mode: process.env.MODE,
    cacheTimingSeconds: process.env.CACHE_TIMING_SECONDS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
};

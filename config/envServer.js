require('dotenv').config({ path: './config/.env' });

export default {
    appName: process.env.APP_NAME,
    serverURL:
        process.env.SERVER_URL ||
        `http://${process.env.SERVER}:${process.env.PORT}`,
    port: process.env.PORT,
    mode: process.env.NODE_ENV,
    cacheTimingSeconds: process.env.CACHE_TIMING_SECONDS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
};

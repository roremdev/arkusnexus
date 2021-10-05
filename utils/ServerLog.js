import chalk from 'chalk';
import Symbols from 'log-symbols';
import config from '../config/envServer';

const log = console.log;
const { appName, serverURL, mode } = config;

/**
 * render message
 * @param {string} header - symbolic message
 * @param {strig} body - main content message
 */
const render = (header, body) => {
    log(header);
    body && log(body);
    body && log('\n');
};

export default class ServerLog {
    // listen server response
    static listen() {
        const header = `${chalk.blue(`Server ${appName} on ${mode}`)}`;
        const body = `${chalk.cyan(
            `${Symbols.info} listening on ${serverURL}`
        )}`;
        render(header, body);
    }
}

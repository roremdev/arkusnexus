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
    /**
     * show status up-server
     */
    static listen() {
        const header = `${chalk.blue(`Server ${appName} on ${mode}`)}`;
        const body = `${chalk.cyan(
            `${Symbols.info} listening on ${serverURL}`
        )}`;
        render(header, body);
    }
    /**
     * info response ⚠
     * @param {string} message - body message
     */
    static info(message) {
        const header = `${Symbols.warning} ${chalk.yellowBright(
            'Info operation'
        )}`;
        render(header, message);
    }
    /**
     * error response ✖
     * @param {string} message - body message
     */
    static error(message, scope) {
        const header = `${Symbols.error} ${chalk.redBright('Error operation')}`;
        let body = `${Symbols.warning} message - ${chalk.yellowBright(
            message
        )}\n`;
        body = body + `${Symbols.warning} scope - ${chalk.yellowBright(scope)}`;
        render(header, body);
    }
}

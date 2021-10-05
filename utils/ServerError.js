/**
 * error component object for handle server errors
 * @typedef {Object} ErrorObject
 * @property {string} type - scope error by default ServerError
 * @property {number} code - code http error
 * @property {string} message - effective message to log
 * @property {string|undefined} error - error trace instance
 */

export default class ServerError extends Error {
    /**
     * constructor server-error
     * @param {string} message - error effect message
     * @param {number} [code=500] - error code server error
     */
    constructor(message, code = 500, name = 'ServerError') {
        super(message);
        this.name = name;
        this.code = code;
    }

    /**
     * error object response
     * @param {string} error - error reason message
     * @returns {ErrorObject}
     */
    response(error) {
        return {
            type: this.name,
            code: this.code,
            message: this.message,
            error: error ? error : undefined,
        };
    }
}

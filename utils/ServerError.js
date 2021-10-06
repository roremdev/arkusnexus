/**
 * error component object for handle server errors
 * @typedef {Object} ErrorObject
 * @property {string} type - scope error by default ServerError
 * @property {number} code - code http error
 * @property {string} message - error message
 * @property {string|undefined} scope - scope error
 */

export default class ServerError extends Error {
    /**
     * constructor server-error
     * @param {string} message - error message
     * @param {number} [code=500] - error code server error
     */
    constructor(message, code = 500, name = 'ServerError') {
        super(message);
        this.name = name;
        this.code = code;
    }

    /**
     * error object response
     * @param {string} scope - scope error
     * @returns {ErrorObject}
     */
    response(scope) {
        return {
            type: this.name,
            code: this.code,
            message: this.message,
            scope,
        };
    }
}

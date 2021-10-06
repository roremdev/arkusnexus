import ServerLog from '../utils/ServerLog';

/**
 * success object for response request
 * @typedef {Object} ResponseObject
 * @property {Object | Array} data - result of request
 */

/**
 * handler response in form error
 * @param {ErrorObject} err - error object from ServerError
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next function
 */
export const errors = (err, req, res, next) => {
    const { code, message, scope } = err;
    ServerLog.error(message, scope);
    res.status(code || 500).json({});
};

/**
 * handler response in form success
 * @param {Object} res - response object
 * @param {number} code - code of response
 * @param {string} message - message to log
 * @param {Object} data - data to response
 * @returns {ResponseObject}
 */
export const response = (res, code, message, data) => {
    ServerLog.info(message);
    res.status(code || 200).json({ data });
};

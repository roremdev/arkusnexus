"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.response = exports.errors = void 0;

var _ServerLog = _interopRequireDefault(require("../utils/ServerLog"));

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
var errors = function errors(err, req, res, next) {
  var code = err.code,
      message = err.message,
      scope = err.scope;

  _ServerLog["default"].error(message, scope);

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


exports.errors = errors;

var response = function response(res, code, message, data) {
  _ServerLog["default"].info(message);

  res.status(code || 200).json({
    data: data
  });
};

exports.response = response;
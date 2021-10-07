"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ServerLog = _interopRequireDefault(require("../utils/ServerLog"));

var _Responses = require("../middlewares/Responses");

var router = _express["default"].Router();
/**
 * root request operation
 * @name /
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {string}
 */


router.get('/', function (_, res) {
  _ServerLog["default"].info('GET /');

  (0, _Responses.response)(res, 200, 'Hello World!!', 'Welcome to the API');
});
var _default = router;
exports["default"] = _default;
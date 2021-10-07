"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _chalk = _interopRequireDefault(require("chalk"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

var _envServer = _interopRequireDefault(require("../config/envServer"));

var log = console.log;
var appName = _envServer["default"].appName,
    serverURL = _envServer["default"].serverURL,
    mode = _envServer["default"].mode;
/**
 * render message
 * @param {string} header - symbolic message
 * @param {strig} body - main content message
 */

var render = function render(header, body) {
  log(header);
  body && log(body);
  body && log('\n');
};

var ServerLog = /*#__PURE__*/function () {
  function ServerLog() {
    (0, _classCallCheck2["default"])(this, ServerLog);
  }

  (0, _createClass2["default"])(ServerLog, null, [{
    key: "listen",
    value:
    /**
     * show status up-server
     */
    function listen() {
      var header = "".concat(_chalk["default"].blue("Server ".concat(appName, " on ").concat(mode)));
      var body = "".concat(_chalk["default"].cyan("".concat(_logSymbols["default"].info, " listening on ").concat(serverURL)));
      render(header, body);
    }
    /**
     * info response ⚠
     * @param {string} message - body message
     */

  }, {
    key: "info",
    value: function info(message) {
      var header = "".concat(_logSymbols["default"].warning, " ").concat(_chalk["default"].yellowBright('Info operation'));
      render(header, message);
    }
    /**
     * error response ✖
     * @param {string} message - body message
     */

  }, {
    key: "error",
    value: function error(message, scope) {
      var header = "".concat(_logSymbols["default"].error, " ").concat(_chalk["default"].redBright('Error operation'));
      var body = "".concat(_logSymbols["default"].warning, " message - ").concat(_chalk["default"].yellowBright(message), "\n");
      body = body + "\x1B".concat(_logSymbols["default"].warning, " scope - ").concat(_chalk["default"].yellowBright(scope));
      render(header, body);
    }
  }]);
  return ServerLog;
}();

exports["default"] = ServerLog;
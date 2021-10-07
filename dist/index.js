"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _ServerLog = _interopRequireDefault(require("./utils/ServerLog"));

var _envServer = _interopRequireDefault(require("./config/envServer"));

var _index = _interopRequireDefault(require("./routes/index"));

var _user = _interopRequireDefault(require("./routes/api/user"));

var _Responses = require("./middlewares/Responses");

// todo: add helmet middleware
// todo: deploy to heroku and github pages
var mode = _envServer["default"].mode,
    port = _envServer["default"].port;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use('/api', _index["default"]);
app.use('/api/user', _user["default"]);
app.use(_Responses.errors);
if (mode !== 'test') app.listen(port, function () {
  return _ServerLog["default"].listen();
});
var _default = app;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongodb = require("mongodb");

var _envServer = _interopRequireDefault(require("../config/envServer"));

var _ServerLog = _interopRequireDefault(require("../utils/ServerLog"));

var _ServerError = _interopRequireDefault(require("../utils/ServerError"));

var dbUser = _envServer["default"].dbUser,
    dbPassword = _envServer["default"].dbPassword,
    DB_NAME = _envServer["default"].dbName,
    DB_HOST = _envServer["default"].dbHost;
var USER = encodeURIComponent(dbUser);
var PASSWORD = encodeURIComponent(dbPassword);
var MONGO_URI = "mongodb+srv://".concat(USER, ":").concat(PASSWORD, "@").concat(DB_HOST, "/").concat(DB_NAME, "?retryWrites=true&w=majority");

var Mongo = /*#__PURE__*/function () {
  /**
   * client and connection specification
   * @constructor
   */
  function Mongo() {
    (0, _classCallCheck2["default"])(this, Mongo);
    this.client = new _mongodb.MongoClient(MONGO_URI, {
      useUnifiedTopology: true
    });
    this.dbName = DB_NAME;
  }
  /**
   * singleton pattern for pool connection
   * @throws {ErrorObject} - error connection
   * @returns {object} - connection client
   */


  (0, _createClass2["default"])(Mongo, [{
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var message;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (Mongo.connection) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return this.client.connect();

              case 4:
                _ServerLog["default"].info("Connected succesfully to ".concat(DB_NAME));

                Mongo.connection = this.client.db(this.dbName);

              case 6:
                return _context.abrupt("return", Mongo.connection);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                message = _context.t0.message;
                throw new _ServerError["default"](message).response('connection');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
    /**
     * fetch all documents in collection
     * @param {string} collection - collection name
     * @throws {ErrorObject} - error to get resource
     * @returns {array} - response query mongoDB as array
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(collection) {
        var db;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.connect();

              case 3:
                db = _context2.sent;
                _context2.next = 6;
                return db.collection(collection).find({}).toArray();

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);

                if (_context2.t0) {
                  _context2.next = 13;
                  break;
                }

                throw new _ServerError["default"](_context2.t0.message).response('get');

              case 13:
                throw _context2.t0;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);
  return Mongo;
}();

exports["default"] = Mongo;
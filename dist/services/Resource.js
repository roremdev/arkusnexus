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

var _Mongo = _interopRequireDefault(require("../libs/Mongo"));

var ResourcesService = /*#__PURE__*/function () {
  /**
   * DAO mongoDB collections
   * @param {string} collection - collection name
   */
  function ResourcesService(collection) {
    (0, _classCallCheck2["default"])(this, ResourcesService);
    this.collection = collection;
    this.client = new _Mongo["default"]();
  }
  /**
   * recollect a collection as middleware builder
   * @returns {array} - response query mongoDB as array
   */


  (0, _createClass2["default"])(ResourcesService, [{
    key: "getResource",
    value: function () {
      var _getResource = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.get(this.collection);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getResource() {
        return _getResource.apply(this, arguments);
      }

      return getResource;
    }()
  }]);
  return ResourcesService;
}();

exports["default"] = ResourcesService;
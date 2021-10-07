"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * error component object for handle server errors
 * @typedef {Object} ErrorObject
 * @property {string} type - scope error by default ServerError
 * @property {number} code - code http error
 * @property {string} message - error message
 * @property {string|undefined} scope - scope error
 */
var ServerError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ServerError, _Error);

  var _super = _createSuper(ServerError);

  /**
   * constructor server-error
   * @param {string} message - error message
   * @param {number} [code=500] - error code server error
   */
  function ServerError(message) {
    var _this;

    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ServerError';
    (0, _classCallCheck2["default"])(this, ServerError);
    _this = _super.call(this, message);
    _this.name = name;
    _this.code = code;
    return _this;
  }
  /**
   * error object response
   * @param {string} scope - scope error
   * @returns {ErrorObject}
   */


  (0, _createClass2["default"])(ServerError, [{
    key: "response",
    value: function response(scope) {
      return {
        type: this.name,
        code: this.code,
        message: this.message,
        scope: scope
      };
    }
  }]);
  return ServerError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = ServerError;
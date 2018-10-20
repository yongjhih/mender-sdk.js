'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = exports.UUID = exports.Email = undefined;

var _flowRuntimeValidators = require('flow-runtime-validators');

var validators = _interopRequireWildcard(_flowRuntimeValidators);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Email = exports.Email = _flowRuntime2.default.type('Email', _flowRuntime2.default.string());

var UUID = exports.UUID = _flowRuntime2.default.type('UUID', _flowRuntime2.default.string());

var URL = exports.URL = _flowRuntime2.default.type('URL', _flowRuntime2.default.string());

Email.addConstraint(validators.length({ max: 250 }), function (it) {
  if (!_validator2.default.isEmail(it)) {
    return "must be valid Email";
  }
});
//Email.prototype.faker = (it: string): Email => { faker.internet.email(); };
UUID.addConstraint(function (it) {
  if (!_validator2.default.isUUID(it, 4)) {
    return "must be valid UUID v4";
  }
});
//UUID.prototype.faker = (it: string): UUID => { faker.random.uuid(); };

URL.addConstraint(function (it) {
  if (!_validator2.default.isURL(it)) {
    return "must be valid URL";
  }
});
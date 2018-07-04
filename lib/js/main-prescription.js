'use strict';

var _Prescription = require('./Prescription');

var _Prescription2 = _interopRequireDefault(_Prescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rx = new _Prescription2.default('amoxicillin', 30);
console.log(rx.getDrug());
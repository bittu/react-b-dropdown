'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var DropDown = (function (_Component) {
	_inherits(DropDown, _Component);

	function DropDown(props) {
		_classCallCheck(this, DropDown);

		_get(Object.getPrototypeOf(DropDown.prototype), 'constructor', this).call(this, props);
	}

	_createClass(DropDown, [{
		key: 'toggleClick',
		value: function toggleClick(e) {
			e.preventDefault();
			e.stopPropagation();

			if (this.open) {
				return false;
			}
			this.open = true;
			this.form.fldOpen = this.pos;
			var self = this;
			this.fld.className += ' nl-field-open';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'nl-field nl-dd' },
				_react2['default'].createElement(
					'a',
					{ className: 'nl-field-toggle', onClick: this.toggleClick.bind(this) },
					'anytime'
				),
				_react2['default'].createElement(
					'ul',
					null,
					_react2['default'].createElement(
						'li',
						{ 'class': 'nl-dd-checked' },
						'anytime'
					),
					_react2['default'].createElement(
						'li',
						null,
						'at 15 p.m.'
					),
					_react2['default'].createElement(
						'li',
						null,
						'at 8 p.m.'
					),
					_react2['default'].createElement(
						'li',
						null,
						'at 9 p.m.'
					)
				)
			);
		}
	}]);

	return DropDown;
})(_react.Component);

DropDown.defaultProps = {};
exports['default'] = DropDown;
module.exports = exports['default'];
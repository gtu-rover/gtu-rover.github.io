"use strict";

var _react = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders learn react link', () => {
  (0, _react.render)(<_App.default />);

  const linkElement = _react.screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
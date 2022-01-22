"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cards = require("./components/Cards");

var _Header = require("./components/Header");

var _Navbar = require("./components/Navbar");

var _SocialMedia = require("./components/SocialMedia");

var _Sponsors = _interopRequireDefault(require("./components/Sponsors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logo from './logo.svg';
// import './App.css';
function App() {
  return <body>
      <div class="elevator-wrapper"></div>
      <_Navbar.Navbar />
      <_Header.Header />
      <_Cards.Cards />
      <_SocialMedia.SocialMedia />
      <_Sponsors.default />

      {
      /* {% include footer_white_sep.html %} */
    }
    </body>;
}

var _default = App;
exports.default = _default;
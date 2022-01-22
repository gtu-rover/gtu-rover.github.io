"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _LanguageSwitch = require("./LanguageSwitch");

const Navbar = () => {
  return <div>
      <nav class="navbar navbar-light fixed-top">
        <a class="navbar-brand" href="{{ page.home }}">
          <img id="navbar-img1" src="/images/logo/logo.png" alt="" />
        </a>

        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <div style={{
          float: 'left'
        }}>
            <_LanguageSwitch.LanguageSwitch />
          </div>
          <a class="navbar-brand" href="#" style={{
          float: 'right',
          textAlign: 'center'
        }}>
            <img id="navbar-img2" src="/images/lets-white2.png" alt="" />
          </a>
        </div>
      </nav>
    </div>;
};

exports.Navbar = Navbar;
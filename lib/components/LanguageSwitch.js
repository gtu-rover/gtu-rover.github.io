"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSwitch = void 0;

const LanguageSwitch = () => {
  return <div class="en-tr-navbar">
      <label class="toggle-label">
        {
        /* <input id="lang" type="checkbox" onclick="langButton()" {{ page.checked }} /> */
      }
        <input id="lang" type="checkbox" onclick="langButton()" />
        <span class="back">
          <span class="toggle"></span>
          <span class="label on">TR</span>
          <span class="label off">EN</span>
        </span>
      </label>
    </div>;
};

exports.LanguageSwitch = LanguageSwitch;
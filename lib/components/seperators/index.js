"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeperatorUp = exports.SeperatorDown = void 0;

// TODO: merge into single component
const SeperatorUp = () => <svg className="svg-first-div header-separator-svg header-separator-svg__waves_svg_separator" xmlns="http://www.w3.org/2000/svg" version="1.0" width="auto" fill="#f1f2f4" height="40" viewBox="0 0 1200 30" preserveAspectRatio="none">
    <path d="M0,0S1.209,1.508,200.671,7.031C375.088,15.751,454.658,30,600,30V0H0ZM1200,0s-90.21,1.511-200.671,7.034C824.911,15.751,745.342,30,600,30V0h600Z"></path>
  </svg>;

exports.SeperatorUp = SeperatorUp;

const SeperatorDown = () => <svg class="svg-first-div2 header-separator-svg header-separator-svg__waves_svg_separator" xmlns="http://www.w3.org/2000/svg" version="1.0" width="auto" fill="#f1f2f4" height="40" viewBox="0 0 1200 30" preserveAspectRatio="none">
    <path d="M0,0S1.209,1.508,200.671,7.031C375.088,15.751,454.658,30,600,30V0H0ZM1200,0s-90.21,1.511-200.671,7.034C824.911,15.751,745.342,30,600,30V0h600Z"></path>
  </svg>;

exports.SeperatorDown = SeperatorDown;
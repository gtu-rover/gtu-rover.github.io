"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialMedia = void 0;

var _seperators = require("./seperators");

const SocialMedia = () => {
  return <section id="second-div" class="jumbotron jumbotron-fluid align-content-center" style={{
    marginBottom: 0
  }}>
      <_seperators.SeperatorDown />
      <div class="row-second-div row">
        <div class="col-lg-3 offset-lg-3" style={{
        paddingRight: 0
      }}>
          <script src="https://snapwidget.com/js/snapwidget.js"></script>
          <a href="https://www.instagram.com/gturover/" target="_blank" class="linkwrap">
            <div class="blocker"></div>
            <iframe src="https://snapwidget.com/embed/955104" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{
            border: 'none',
            overflow: 'hidden',
            width: '100%'
          }}></iframe>
          </a>
        </div>
        <div class="col-lg-3 text-left carousel-inner2" style={{
        paddingRight: 0
      }}>
          <h1 class="font-sifonn h1-second-div" style={{
          fontSize: 35
        }}>
            page.social.follow_us
          </h1>
          <div class="social-network-div">
            <ul class="social-network social-circle">
              <li>
                <a target="_blank" href="https://www.instagram.com/gturover/" class="icoInstagram" title="Instagram">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/gturover" class="icoTwitter" title="Twitter">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/gtu-rover" class="icoGithub" title="Github">
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/company/gtu-rover-team/" class="icoLinkedin" title="Linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.youtube.com/channel/UCclW9RIlXgHJA6vi88TzAxA" class="icoYoutube" title="Youtube">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://medium.com/gturover" class="icoMedium" title="Medium">
                  <i class="fa fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="btn-div">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf_C_8mD52A0YFe5Xr_c4iqDH2euC_XmJPTuo1T7mQJHz8h3g/viewform?usp=sf_link">
              <button type="button" class="btn-has-icon btn-second-div btn btn-info">
                <i class="fa-second-div fa fa-user" style={{
                marginRight: 5
              }}></i>
                page.social.join_us
              </button>
            </a>
          </div>
        </div>
      </div>
      <_seperators.SeperatorUp />
    </section>;
};

exports.SocialMedia = SocialMedia;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _seperators = require("./seperators");

const Header = () => {
  return <section id="first-div" class="jumbotron jumbotron-fluid align-content-center" // style="margin-bottom: 0;"
  >
      <div class="container-fluid text-center">
        <div class="row justify-content-between" id="first-div-first">
          <div class="col-lg-6 col-sm-12">
            <img class="animate__animated animate__zoomIn img-first-div" src="/images/rover/roverlast1.png" // style="margin-top: 65px; "
          />
          </div>
          <div class="col col-first-div text-left" // style="margin-top:auto;"
        >
            <h1 class="animate__animated animate__fadeInRight animate__faster h1-first-div">
              {' '}
              Gebze Teknik Üniversitesi
            </h1>

            <h1 class="animate__animated animate__fadeInRight  animate__fast font-sifonn h1-first-div-2 display-4" // style="font-size: 55px"
          >
              ROVER TEAM
            </h1>
            <p class="animate__animated animate__fadeInRight  p-first-div">
              {' '}
              Gebze Teknik Üniversitesi Rover takımı, dünyadışı ortam ve
              gezegenler arası misyonlarda geleceğin problemlerine, robotik
              çözümler üretmek amacıyla farklı disiplinlerden öğrencilerin bir
              araya gelmesiyle kurulmuştur.{' '}
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="mycol col-6 col-md-4">
              <a href="/members">
                <img class="first-div-icon" src="/images/icon/hexa7-min.png" />
              </a>
              <a class="index-first-div-linked" href="/members">
                <h4 class="h3-first-div-2"> Üyeler </h4>
              </a>
            </div>
            <div class="mycol col-6 col-md-4">
              <a class="index-first-div-linked" href="#sponsors">
                <img class="first-div-icon" src="/images/icon/hexa8-min.png" />
              </a>
              <a class="index-first-div-linked" href="#sponsors">
                <h4 class="h3-first-div-2"> Sponsorlar </h4>
              </a>
            </div>
            <div class="mycol col-6 col-md-4">
              <a class="index-first-div-linked" href="/rover">
                <img class="first-div-icon" src="/images/icon/hexa-rover.png" />
              </a>
              <a class="index-first-div-linked" href="/rover">
                <h4 class="h3-first-div-2"> Rover</h4>
              </a>
            </div>

            <div class="mycol col-6 col-md-4">
              <a class="index-first-div-linked" href="/about">
                <img class="first-div-icon" src="/images/icon/hexa10-min.png" />
              </a>
              <a class="index-first-div-linked" href="/about">
                <h4 class="h3-first-div-2">Hakkımızda</h4>
              </a>
            </div>
            <div class="mycol col-6 col-md-4">
              <a class="index-first-div-linked" href="#contact">
                <img class="first-div-icon" src="/images/icon/hexa9-min.png" />
              </a>
              <a class="index-first-div-linked" href="#contact">
                <h4 class="h3-first-div-2">İletişim</h4>
              </a>
            </div>
            <div class="mycol col-6 col-md-4">
              <a class="index-first-div-linked" href="/pdf/GTU Rover Sponsorluk Dosyası.pdf" target="_blank">
                <img class="first-div-icon" src="/images/icon/hexa12-min.png" />
              </a>
              <a class="index-first-div-linked" href="/pdf/GTU Rover Sponsorluk Dosyası.pdf" target="_blank">
                <h4 class="h3-first-div-2">Bize Destek Olun</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <_seperators.SeperatorUp />
    </section>;
};

exports.Header = Header;
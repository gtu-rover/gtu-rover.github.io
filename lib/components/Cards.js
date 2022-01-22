"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = void 0;
const cards = [{
  title: 'title',
  text: 'text',
  image: 'image',
  link: 'link'
}, {
  title: 'title',
  text: 'text',
  image: 'image',
  link: 'link'
}, {
  title: 'title',
  text: 'text',
  image: 'image',
  link: 'link'
}];

const Card = _ref => {
  let {
    title,
    text,
    image,
    link,
    imgPos,
    end
  } = _ref;
  const imageDiv = <div class="col-xs-12 col-md-6">
      <img class="lib-img-show" src={image} />
    </div>;
  const textDiv = <div class="col-xs-12 col-md-6">
      <div class="lib-row lib-header font-sifonn">
        <p class="p-lib-desc">{title}</p>
        <div class="seperator">
          <div class="lib-header-seperator"></div>
        </div>
      </div>
      <div class="lib-row lib-desc">
        <p class="p-lib-desc">{text}</p>
      </div>
    </div>;
  let content;

  switch (imgPos) {
    case 'right':
      content = <>
          {textDiv}
          {imageDiv}
        </>;
      break;

    case 'left':
    default:
      content = <>
          {imageDiv}
          {textDiv}
        </>;
      break;
  }

  const positionClass = end ? 'justify-content-md-end' : 'justify-content-md-start';
  return <a href={link} target="_blank">
      <div class={"row ".concat(positionClass, " justify-content-center")} style={{
      marginBottom: 60,
      marginTop: 40
    }}>
        <div class="lib-panel" style={{
        borderRadius: 10
      }}>
          <div class="row box-shadow ">{content}</div>
        </div>
      </div>
    </a>;
};

const Cards = () => {
  return <section id="third-div" class="triangle-bg jumbotron jumbotron-fluid align-content-center" style={{
    marginBottom: 0
  }}>
      <div class="container-fluid text-center">
        <div class="container">
          <Card title="title1" text="text1" image="/images/card/marsrovernedir-min.jpg" link="https://mars.nasa.gov/mars2020/spacecraft/rover/" imgPos="left" />
          <Card title="title1" text="text1" image="/images/card/ercnedir-min.jpg" link="https://roverchallenge.eu/en/main-page/" imgPos="right" end />
          <Card title="title1" text="text1" image="/images/card/urcnedir-min.jpg" link="http://urc.marssociety.org/" imgPos="left" />
        </div>
      </div>
    </section>;
  return <section id="third-div" class="triangle-bg jumbotron jumbotron-fluid align-content-center" //   style="margin-bottom: 0;"
  >
      <div class="container-fluid text-center">
        <div class="container">
          <a href="https://mars.nasa.gov/mars2020/spacecraft/rover/" target="_blank">
            <div class="row justify-content-md-start justify-content-center" //   style="margin-bottom: 60px; margin-top: 40px"
          >
              <div class="lib-panel" //   style="border-radius: 10px"
            >
                <div class="row box-shadow ">
                  <div class="col-xs-12 col-md-6">
                    <img class="lib-img-show" src="/images/card/marsrovernedir-min.jpg" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="lib-row lib-header font-sifonn">
                      <p class="p-lib-desc">page.cards.card_1.title</p>
                      <div class="seperator">
                        <div class="lib-header-seperator"></div>
                      </div>
                    </div>
                    <div class="lib-row lib-desc">
                      <p class="p-lib-desc">page.cards.card_1.text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://roverchallenge.eu/en/main-page/" target="_blank">
            <div class="row justify-content-md-end justify-content-center" //   style="margin-bottom: 60px"
          >
              <div class="lib-panel" //   style="border-radius: 10px"
            >
                <div class="row box-shadow ">
                  <div class="col-xs-12 col-md-6">
                    <div class="lib-row lib-header font-sifonn">
                      page.cards.card_2.title
                      <div class="seperator">
                        <div class="lib-header-seperator"></div>
                      </div>
                    </div>
                    <div class="lib-row lib-desc">
                      <p class="p-lib-desc">page.cards.card_2.text</p>
                    </div>
                  </div>
                  <div class="col-md-6 order-sm-first">
                    <img class="lib-img-show" src="/images/card/ercnedir-min.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="http://urc.marssociety.org/" target="_blank">
            <div class="row justify-content-md-start  justify-content-center" //   style="margin-bottom: 40px"
          >
              <div class="lib-panel" //   style="border-radius: 10px"
            >
                <div class="row box-shadow ">
                  <div class="col-md-6">
                    <img class="lib-img-show" src="/images/card/urcnedir-min.jpg" />
                  </div>
                  <div class="col-md-6">
                    <div class="lib-row lib-header font-sifonn">
                      page.cards.card_3.title
                      <div class="seperator">
                        <div class="lib-header-seperator"></div>
                      </div>
                    </div>
                    <div class="lib-row lib-desc">
                      <p class="p-lib-desc">page.cards.card_3.text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>;
};

exports.Cards = Cards;
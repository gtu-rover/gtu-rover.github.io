import { t } from 'i18next';
import { SeperatorDownWhite } from './seperators';

const Footer = ({ Seperator = SeperatorDownWhite }) => {
  return (
    <section
      id="contact"
      class="jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0, marginTop: 0 }}
    >
      <Seperator />
      <div class="container-fluid text-center last-div-container-fluid">
        <div class="container-last-div container">
          <hr class="contact-border" />
          <h1 class="h1-last-div">{t('contact').toUpperCase()}</h1>
          <hr style={{ height: 1, backgroundColor: 'rgb(151,103,223)' }} />
          <div
            class="row-last-div row justify-content-start"
            style={{ marginBottom: 40, marginTop: 40 }}
          >
            <div class="col-last-div col text-right">
              <a href="http://www.gtu.edu.tr/">
                <h2 class="h2-last-div">{t('gebze technical university')}</h2>
              </a>
              <a
                target="_blank"
                class="index-first-div-linked2"
                href="https://www.google.com.tr/maps/place/Cumhuriyet,+2254.+Sk.+No:2,+41400+Gebze%2FKocaeli/@40.8091319,29.3628288,17z/data=!3m1!4b1!4m5!3m4!1s0x14cade56ad9be727:0x6f7e7fd7b66e8326!8m2!3d40.8091279!4d29.3650175"
              >
                <p class="p-last-div">
                  Cumhuriyet, 2254. Sk. No:2, 41400 Gebze/Kocaeli
                </p>
              </a>
              <a class="mailto" href="mailto:rover@gtu.edu.tr">
                <p style={{ color: 'white' }} class="p-last-div last-p">
                  rover@gtu.edu.tr
                </p>
              </a>
            </div>
            <div class="col-lg-6 col-sm-12">
              <img
                class="border-img img-first-div"
                src="/images/atolye-yeni.jpg"
                width="auto"
                height="150px"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <script src="/js/jquery.min.js"></script> */}
      {/* <script type="text/javascript" src="/js/custom.js"></script> */}
    </section>
  );
};

export default Footer;

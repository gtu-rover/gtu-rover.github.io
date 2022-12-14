import { useTranslation } from 'react-i18next';
import { SeperatorDownWhite } from './seperators';

const Footer = ({ Seperator = SeperatorDownWhite }) => {
  const { t } = useTranslation();

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
          <h1 class="h1-last-div">{t('contact2').toUpperCase()}</h1>
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
                href="https://www.google.com/maps/place/Cumhuriyet,+GTU+Rover+At%C3%B6lyesi,+41400+Gebze%2FKocaeli/data=!4m2!3m1!1s0x14cadf43c7ab52d5:0x5b0b8f71cad0e0eb?utm_source=mstt_1&entry=gps&g_ep=CAESCjExLjU3LjQ4MDEYACCIJyoAQgJUUg%3D%3D"
              >
                <p class="p-last-div">{t('adress')}</p>
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

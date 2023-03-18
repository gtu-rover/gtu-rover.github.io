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
            <div
              class="col-lg-6 col-sm-12"
            >
              <iframe
                style={{
                  width: "90%",
                  height: "250px",
                  marginInline: "auto",
                  borderRadius: "15px"
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.295752149527!2d29.36477799953052!3d40.81119170697075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadf43c7ab52d5%3A0x5b0b8f71cad0e0eb!2sGTU%20Rover%20At%C3%B6lyesi!5e0!3m2!1str!2str!4v1679163899993!5m2!1str!2str"
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

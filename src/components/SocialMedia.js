import { useLayoutEffect, useRef, useEffect } from 'react';
import { SeperatorDown, SeperatorUpWhite } from './seperators';
import { useTranslation } from 'react-i18next';
import IconButton from './Button/iconButton';

const SocialMedia = ({ editable }) => {
  const instaWidget = useRef(null);
  const { t } = useTranslation();

  const updateWidgetHeight = () => {
    const element = instaWidget.current;
    if (element) {
      element.style.height = getComputedStyle(element).width;
    }
  };

  useEffect(() => {
    updateWidgetHeight();
  }, [instaWidget]);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateWidgetHeight);
    return () => window.removeEventListener('resize', updateWidgetHeight);
  }, []);

  return (
    <section
      id="second-div"
      class="jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0 }}
    >
      <SeperatorDown />
      <div class="row-second-div row">
        <div class="col-lg-3 offset-lg-3" style={{ paddingRight: 0 }}>
          <a
            href="https://www.instagram.com/gturover/"
            target="_blank"
            class="linkwrap"
          >
            <div class="blocker"></div>
            <iframe
              id="snappwidget-insta"
              ref={instaWidget}
              src="https://snapwidget.com/embed/990616"
              class="snapwidget-widget"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              style={{
                border: 'none',
                overflow: 'hidden',
                width: '100%',
              }}
            ></iframe>
          </a>
        </div>
        <div
          class="col-lg-3 text-left carousel-inner2"
          style={{ paddingRight: 0 }}
        >
          <h1 class="font-sifonn h1-second-div" style={{ fontSize: 35 }}>
            {t('follow us')}
          </h1>
          <div class="social-network-div">
            <ul class="social-network social-circle">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/gturover/"
                  class="icoInstagram"
                  title="Instagram"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/gturover"
                  class="icoTwitter"
                  title="Twitter"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/gtu-rover"
                  class="icoGithub"
                  title="Github"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/gtu-rover-team/"
                  class="icoLinkedin"
                  title="Linkedin"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCclW9RIlXgHJA6vi88TzAxA"
                  class="icoYoutube"
                  title="Youtube"
                >
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://medium.com/gturover"
                  class="icoMedium"
                  title="Medium"
                >
                  <i class="fa fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="btn-div">
            <IconButton
              faIcon={'fa-user'}
              link="https://docs.google.com/forms/d/e/1FAIpQLSdxwDM-VSIz-uqmpWr-eqho5g_Hmrk0206mP1YykJ0qHEDTnQ/viewform?usp=sf_link"
            >
              {t('join us')}
            </IconButton>
          </div>
        </div>
      </div>
      <SeperatorUpWhite />
    </section>
  );
};

export default SocialMedia;

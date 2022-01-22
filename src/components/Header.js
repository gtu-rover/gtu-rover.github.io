import { SeperatorUp } from './seperators';
import { useTranslation } from 'react-i18next';

const NavItem = ({ image, text, link }) => {
  return (
    <div class="mycol col-6 col-md-4">
      <a href={link}>
        <img class="first-div-icon" src={image} />
      </a>
      <a class="index-first-div-linked" href="/members">
        <h4 class="h3-first-div-2">{text}</h4>
      </a>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  return (
    <section
      id="first-div"
      class="jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0 }}
    >
      <div class="container-fluid text-center">
        <div class="row justify-content-between" id="first-div-first">
          <div class="col-lg-6 col-sm-12">
            <img
              class="animate__animated animate__zoomIn img-first-div"
              src="/images/rover/roverlast1.png"
              style={{ marginTop: 65 }}
            />
          </div>
          <div
            class="col col-first-div text-left"
            style={{ marginTop: 'auto' }}
          >
            <h1 class="animate__animated animate__fadeInRight animate__faster h1-first-div">
              {t('gebze technical university')}
            </h1>

            <h1
              class="animate__animated animate__fadeInRight  animate__fast font-sifonn h1-first-div-2 display-4"
              style={{ fontSize: 55 }}
            >
              {t('rover_team').toUpperCase()}
            </h1>
            <p class="animate__animated animate__fadeInRight  p-first-div">
              {t('header_text')}
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row text-center justify-content-center">
            <NavItem
              text={t('members')}
              image={'/images/icon/hexa7-min.png'}
              link={'/members'}
            />
            <NavItem
              text={t('sponsors')}
              image={'/images/icon/hexa8-min.png'}
              link={'#sponsors'}
            />
            <NavItem
              text={t('rover')}
              image={'/images/icon/hexa-rover.png'}
              link={'/rover'}
            />
            <NavItem
              text={t('about')}
              image={'/images/icon/hexa10-min.png'}
              link={'/about'}
            />
            <NavItem
              text={t('contact')}
              image={'/images/icon/hexa9-min.png'}
              link={'#contact'}
            />
            <NavItem
              text={t('support_us')}
              image={'/images/icon/hexa12-min.png'}
              link={'/pdf/GTU Rover Sponsorluk Dosyası.pdf'}
            />
          </div>
        </div>
      </div>

      <SeperatorUp />
    </section>
  );
};

export default Header;

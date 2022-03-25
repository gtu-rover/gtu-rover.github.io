import { SeperatorUp } from './seperators';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import { FileDrop } from 'react-file-drop';
import './Header.css';
import { updateSponsorhipFile } from './utils';
import { useSnackbar } from 'react-simple-snackbar';

const NavItem = ({ children, image, text, link, external = false }) => {
  if (link.startsWith('#')) {
    console.log('hash');
  }
  const Link = ({ to, ...rest }) =>
    external ? (
      <a target="_blank" href={to} {...rest} />
    ) : (
      <HashLink to={to} {...rest} />
    );

  return (
    <div class="mycol col-6 col-md-4">
      <Link to={link}>
        <img class="first-div-icon" src={image} />
        <a class="index-first-div-linked" href={link}>
          <h4 class="h3-first-div-2">{text}</h4>
          {children}
        </a>
      </Link>
    </div>
  );
};

const Header = ({ editable }) => {
  const { t } = useTranslation();
  const [sponsorshipFile, setSponsorshipFile] = useState({});
  const [openSnackbar, closeSnackbar] = useSnackbar();

  useEffect(() => {
    const getData = async () => {
      const documentsRef = doc(db, 'documents', 'sponsorshipFile');
      const docSnap = await getDoc(documentsRef);
      setSponsorshipFile(docSnap.data());
    };
    getData();
  }, []);

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
              link={'members'}
            />
            <NavItem
              text={t('sponsors')}
              image={'/images/icon/hexa8-min.png'}
              link={'#sponsors'}
            />
            <NavItem
              text={t('ERC 2021')}
              image={'/images/icon/hexa-rover.png'}
              link={'erc2021'}
            />
            <NavItem
              text={t('about')}
              image={'/images/icon/hexa10-min.png'}
              link={'about'}
            />
            <NavItem
              text={t('contact')}
              image={'/images/icon/hexa9-min.png'}
              link={'#contact'}
            />
            {editable ? (
              <NavItem
                text={t('support_us')}
                image={'/images/icon/hexa12-min.png'}
                link={sponsorshipFile.link || ''}
                external
              >
                <FileDrop
                  onDrop={(files, event) => {
                    openSnackbar('Uploading...');
                    updateSponsorhipFile(files[0]).then((url) => {
                      setSponsorshipFile({ link: url });
                      openSnackbar('Sponsorship file updated!');
                    });
                  }}
                ></FileDrop>
              </NavItem>
            ) : (
              <NavItem
                text={t('support_us')}
                image={'/images/icon/hexa12-min.png'}
                link={sponsorshipFile.link || ''}
                external
              />
            )}
          </div>
        </div>
      </div>

      <SeperatorUp />
    </section>
  );
};

export const HeaderBasic = ({ title, subtitle }) => {
  return (
    <section
      id="first-div"
      class="jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0 }}
    >
      <div class="container-fluid text-center">
        <div class="row justify-content-between" id="first-div-first">
          <div
            class="col col-first-div text-left"
            style={{ marginTop: 'auto' }}
          >
            <h1 class="animate__animated animate__fadeInRight animate__faster h1-first-div">
              {title}
            </h1>

            <h1
              class="animate__animated animate__fadeInRight  animate__fast font-sifonn h1-first-div-2 display-4"
              style={{ fontSize: 55 }}
            >
              {subtitle}
            </h1>
          </div>
        </div>
      </div>

      <SeperatorUp />
    </section>
  );
};

export default Header;

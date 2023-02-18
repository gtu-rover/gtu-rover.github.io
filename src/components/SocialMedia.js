import { useLayoutEffect, useRef, useEffect, useState, } from 'react';
import { SeperatorDown, SeperatorUpWhite } from './seperators';
import { useTranslation } from 'react-i18next';
import IconButton from './Button/iconButton';
import { Input, Label } from '@rebass/forms';
import { Button } from 'rebass';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useSnackbar } from 'react-simple-snackbar';

const SocialMedia = ({ onChange, editable = false }) => {
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

  const [joinLink, setjoinfile] = useState({});
  const [openSnackbar, closeSnackbar] = useSnackbar();

  useEffect(() => {
    const getData = async () => {
      const documentsRef = doc(db, 'links', 'joinLink');
      const docSnap = await getDoc(documentsRef);
      setjoinfile(docSnap.data());
    };
    getData();
  }, []);

  const [text, setText] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const ref = doc(db, 'links', 'joinLink');
    openSnackbar('Saving Link...', 15000);
    setDoc(ref, { link: text }).then(() => {
      openSnackbar('Link Saved');
      onChange();
    });
  };

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

              link={joinLink.link}

            >
              {t('join us')}
            </IconButton>
            {editable && (
              <form onSubmit={handleSubmit}>
                <Label>
                  <Input
                    placeholder="Enter Form Link"
                    class="form-inp"
                    type='text' value={text}
                    onChange={(e) => setText(e.target.value)}></Input>
                </Label>
                <Button backgroundColor="red" type='submit'>submit</Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <SeperatorUpWhite />
    </section>
  );
};

export default SocialMedia;

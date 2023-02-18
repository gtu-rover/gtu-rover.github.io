import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { SeperatorDown } from '../components/seperators';
import TeamDescription from '../components/TeamDescription';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <section
        id="sixth-div"
        class="jumbotron jumbotron-fluid align-content-center"
        style={{ marginBottom: 0 }}
      >
        <div class="container">
          <h1
            class="animate__animated animate__fadeInRight  animate__fast font-windlesham h1-first-div-2 display-4"
            style={{ fontSize: 55, marginTop: 75, marginBottom: 30 }}
          >
            {t('who are we')}
          </h1>

          <p class="animate__animated animate__fadeInRight p-sixth-div">
            {t('university description')}
          </p>
          <p class="animate__animated animate__fadeInRight p-sixth-div">
            {t('team description')}
          </p>
          <p
            class="animate__animated animate__fadeInRight p-sixth-div"
            style={{ marginBottom: 50 }}
          >
            {t('team tasks')}
          </p>
             <p>
             Hello
             </p>
          <TeamDescription>
            <TeamDescription.Title image="/images/icon/Software.png">
              {t('software team')}
            </TeamDescription.Title>
            <TeamDescription.Body>
              {t('autonomous description')}
            </TeamDescription.Body>
            <TeamDescription.Body>
              {t('interface description')}
            </TeamDescription.Body>
            <TeamDescription.Body>
              {t('object detection description')}
            </TeamDescription.Body>
          </TeamDescription>

          <hr class="hr-about" />

          <TeamDescription>
            <TeamDescription.Title image="/images/icon/Electronic.png">
              {t('electronics team')}
            </TeamDescription.Title>
            <TeamDescription.Body>
              {t('electronics team description')}
            </TeamDescription.Body>
          </TeamDescription>

          <hr class="hr-about" />

          <TeamDescription>
            <TeamDescription.Title image="/images/icon/Science.png">
              {t('science team')}
            </TeamDescription.Title>
            <TeamDescription.Body>
              {t('science team description')}
            </TeamDescription.Body>
          </TeamDescription>

          <hr class="hr-about" />

          <TeamDescription>
            <TeamDescription.Title image="/images/icon/TTS.png">
              {t('sponsorship team')}
            </TeamDescription.Title>
            <TeamDescription.Body>
              {t('sponsorship team description')}
            </TeamDescription.Body>
          </TeamDescription>

          <hr class="hr-about" />

          <TeamDescription>
            <TeamDescription.Title image="/images/icon/Mechanical.png">
              {t('mechanical team')}
            </TeamDescription.Title>
            <TeamDescription.Body>
              {t('mechanical team description')}
            </TeamDescription.Body>
          </TeamDescription>

          <hr class="hr-about" />

          <TeamDescription.Body>
            {t('our purpose description')}
          </TeamDescription.Body>
        </div>
      </section>

      <Footer Seperator={SeperatorDown} />
    </>
  );
};

export default About;

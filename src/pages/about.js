import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SocialMedia from '../components/SocialMedia';
import Sponsors from '../components/Sponsors';
import { SeperatorDown } from '../components/seperators';

const About = () => (
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
          page.who_are_we.title
        </h1>

        <p class="animate__animated animate__fadeInRight p-sixth-div">
          page.who_are_we.p1
        </p>
        <p class="animate__animated animate__fadeInRight p-sixth-div">
          page.who_are_we.p2
        </p>
        <p
          class="animate__animated animate__fadeInRight p-sixth-div"
          style={{ marginBottom: 50 }}
        >
          page.who_are_we.p3
        </p>

        <div class="container-fluid" style={{ marginBottom: 50 }}>
          <div class="row " style={{ marginBottom: 25 }}>
            <div class="col-xs-4 col-lg-2">
              <img
                class="first-div-icon"
                src="/images/icon/Software.png"
                alt="image"
              />
            </div>

            <div class="col-lg-3">
              <h3 class="h3-about1 font-windlesham">
                page.teams.software.title
              </h3>
            </div>
          </div>

          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.software.text1
          </p>
          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.software.text2
          </p>
          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.software.text3
          </p>
        </div>

        <hr class="hr-about" />

        <div
          class="container-fluid"
          // style="margin-bottom: 50px"
        >
          <div
            class="row "
            // style="margin-bottom: 25px"
          >
            <div class="col-xs-4 col-lg-2">
              <img
                class="first-div-icon"
                src="/images/icon/Electronic.png"
                alt="image"
              />
            </div>

            <div class="col-lg-3">
              <h3 class="h3-about1 font-windlesham">
                page.teams.electronics.title
              </h3>
            </div>
          </div>

          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.electronics.text
          </p>
        </div>

        <hr class="hr-about" />

        <div
          class="container-fluid"
          // style="margin-bottom: 50px"
        >
          <div
            class="row "
            // style="margin-bottom: 25px"
          >
            <div class="col-xs-4 col-lg-2">
              <img
                class="first-div-icon"
                src="/images/icon/Science.png"
                alt="image"
              />
            </div>

            <div class="col-lg-3">
              <h3 class="h3-about1 font-windlesham">
                page.teams.science.title
              </h3>
            </div>
          </div>

          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.science.text
          </p>
        </div>

        <hr class="hr-about" />

        <div
          class="container-fluid"
          // style="margin-bottom: 50px"
        >
          <div
            class="row "
            // style="margin-bottom: 25px"
          >
            <div class="col-xs-4 col-lg-2">
              <img
                class="first-div-icon"
                src="/images/icon/TTS.png"
                alt="image"
              />
            </div>

            <div class="col-lg-3">
              <h3 class="h3-about2 font-windlesham">
                page.teams.sponsorship.title
              </h3>
            </div>
          </div>

          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.sponsorship.text
          </p>
        </div>

        <hr class="hr-about" />

        <div
          class="container-fluid"
          // style="margin-bottom: 50px"
        >
          <div
            class="row "
            // style="margin-bottom: 25px"
          >
            <div class="col-xs-4 col-lg-2">
              <img
                class="first-div-icon"
                src="/images/icon/Mechanical.png"
                alt="image"
              />
            </div>

            <div class="col-lg-3">
              <h3 class="h3-about1 font-windlesham">
                page.teams.mechanical.title
              </h3>
            </div>
          </div>

          <p class="animate__animated animate__fadeInRight p-sixth-div">
            page.teams.mechanical.text1
          </p>
        </div>

        <hr class="hr-about" />

        <p class="animate__animated animate__fadeInRight p-sixth-div">
          page.teams.mechanical.text2
        </p>
      </div>
    </section>

    <Footer Seperator={SeperatorDown} />
  </>
);

export default About;

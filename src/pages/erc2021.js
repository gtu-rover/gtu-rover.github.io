import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { HeaderBasic } from '../components/Header';
import Navbar from '../components/Navbar';
import { AdminPill } from '../components/Pill';
import SocialMedia from '../components/SocialMedia';
import Sponsors from '../components/Sponsors';
import { useTranslation } from 'react-i18next';
import Gallery from '../components/Gallery';
import {
  SeperatorDown,
  SeperatorDownWhite,
  SeperatorUp,
  SeperatorUpWhite
} from '../components/seperators';
import VentureSpecs from '../components/RoverSpecs/venture';
import Members from './members';
import MemberList from '../components/MemberList';

const Erc21 = ({ editable = false }) => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <HeaderBasic
        title={t('gebze technical university rover team')}
        subtitle="ERC 2021"
      />
      <Gallery />
      <section
        id="second-div"
        class="jumbotron jumbotron-fluid align-content-center"
        style={{ marginBottom: 0 }}
      >
        <SeperatorDown />
        <div class="container">
          <div class="row-second-div row">
            <div class="col-lg-6 ta-center">
              <img
                src="/images/rover/rank-white.png"
                style={{ height: 400, margin: 'auto' }}
              />
            </div>
            <div class="col-lg-6">
              <img
                src="/images/rover/rover_venture.png"
                style={{ height: 500, margin: 'auto' }}
              />
            </div>
          </div>
        </div>
        <SeperatorUpWhite />
      </section>
      <Sponsors dbPath='sponsors-21' editable={editable} />
      <VentureSpecs />
      <MemberList dbPath='members-21' editable={editable} />
      <Footer Seperator={SeperatorDown} />
      {editable && <AdminPill />}
    </>
  );
};

export default Erc21;

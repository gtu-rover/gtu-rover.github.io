import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SocialMedia from '../components/SocialMedia';
import Sponsors from '../components/Sponsors';

const HomePage = ({ editable = false }) => (
  <>
    <Navbar />
    <Header />
    <Cards />
    <SocialMedia />
    <Sponsors editable={editable} />
    <Footer />
  </>
);

export default HomePage;

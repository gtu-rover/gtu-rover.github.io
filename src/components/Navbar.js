import { Link } from 'react-router-dom';
import { LanguageSwitch } from './LanguageSwitch';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light fixed-top">
        <Link to="/">
          <div class="navbar-brand">
            <img id="navbar-img1" src="/images/logo/logo.png" alt="" />
          </div>
        </Link>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div style={{ float: 'left' }}>
            <LanguageSwitch />
          </div>
          <a
            class="navbar-brand"
            href="#"
            style={{
              float: 'right',
              textAlign: 'center'
            }}
          >
            <img id="navbar-img2" src="/images/lets-white2.png" alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
import { Link } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light fixed-top">
        <div class="navbar-brand">
          <a
            class="navbar-brand"
            href="#"
            style={{
              float: "left",
              textAlign: "center",
            }}
          >
            <img id="navbar-img1" src="/images/logo/logo.png" alt="" />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ float: "left" }}>
            <LanguageSwitch />
          </div>
          <a
            class="navbar-brand"
            href="#"
            style={{
              float: "right",
              textAlign: "center",
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

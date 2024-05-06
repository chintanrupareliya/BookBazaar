import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../assets/images/logo-removebg-preview.png";
const Footer = () => {
  return (
    <div className={`${styles.footer_wrapper}`}>
      <footer className={`${styles.site_footer}`}>
        <div className={`${styles.bottom_footer}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.text_center}`}>
              <div className={`${styles.footer_logo}`}>
                <Link to="/" title="Logo">
                  <img
                    src={logo}
                    alt="site logo"
                    style={{
                      height: "50px",
                      width: "200px",
                    }}
                    A
                  />
                </Link>
              </div>
              <p>© 2015 Tatvasoft.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

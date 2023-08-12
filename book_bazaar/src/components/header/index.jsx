import React, { useMemo } from "react";
import styles from "./style.module.css";
import { AppBar, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import applogo from "../../assets/images/logo-removebg-preview.png";
import { RoutePaths } from "../../utils/enum";
import shared from "../../utils/shared";
import cartIcon from "../../assets/images/icons8-cart-50.png";
const Header = () => {
  const items = useMemo(() => {
    return shared.NavigationItems;
    // return shared.NavigationItems.filter(
    //   (item) =>
    //     !item.access.length || item.access.includes(authContext.user.roleId)
    // );
  }, []);
  const openMenu = () => {
    document.body.classList.toggle("open-menu");
  };
  return (
    <div className={`${styles.main_wrapper}`}>
      <AppBar className={`${styles.site_header}`} id="header" position="fixed">
        <div className={`${styles.bottom_header}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.header_wrapper}`}>
              <div className={`${styles.logo_wrapper}`}>
                <Link to="/" className={`${styles.site_logo}`}>
                  <img className={`${styles.logo}`} src={applogo} alt="logo" />
                </Link>
              </div>
              <div className={`${styles.nav_wrapper}`}>
                <div className={`${styles.top_right_bar}`}>
                  <List className={`${styles.top_nav_bar}`}>
                    <>
                      <ListItem>
                        <Link
                          to={RoutePaths.Login}
                          title="Login"
                          className={`${styles.nav_link}`}
                        >
                          Login
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          to={RoutePaths.Register}
                          title="Sign Up"
                          className={`${styles.nav_link}`}
                        >
                          Sign Up
                        </Link>
                      </ListItem>
                    </>
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <Link
                          to={item.route}
                          title={item.name}
                          className={`${styles.nav_link}`}
                        >
                          {item.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                  <List className={`${styles.cart_country_wrap}`}>
                    <ListItem className={`${styles.cart_link}`}>
                      <Link
                        to="/cart"
                        title="Cart"
                        className={`${styles.nav_link}`}
                      >
                        <img src={cartIcon} alt="cart.png" />
                        <span>{0}</span>
                        Cart
                      </Link>
                    </ListItem>
                    <ListItem
                      className={`${styles.hamburger}`}
                      onClick={openMenu}
                    >
                      <span></span>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;

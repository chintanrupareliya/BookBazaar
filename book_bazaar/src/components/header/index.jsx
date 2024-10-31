import React, { useMemo, useState } from "react";
import styles from "./style.module.css";
import { AppBar, List, ListItem, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import applogo from "../../assets/images/logo-removebg-preview.png";
import { RoutePaths } from "../../utils/enum";
import shared from "../../utils/shared";
import searchIcon from "../../assets/images/search_5186446.png";
import bookService from "../../service/book.service";
import cartIcon from "../../assets/images/icons8-cart-50.png";
const Header = () => {
  // const open = false;
  const [query, setquery] = useState("");
  const [bookList, setbookList] = useState([]);
  const [OpenSearchResult, setOpenSearchResult] = useState(false);
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
  const searchBook = async () => {
    const res = await bookService.searchBook(query);
    setbookList(res);
  };
  const search = () => {
    document.body.classList.add("search-results-open");
    searchBook();
    setOpenSearchResult(true);
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
        <div
          className="search-overlay"
          onClick={() => {
            setOpenSearchResult(false);
            document.body.classList.remove("search-results-open");
          }}
        ></div>
        <div className={`${styles.header_search_wrapper}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.header_search_outer}`}>
              <div className={`${styles.header_search_inner}`}>
                <div className={`${styles.text_wrapper}`}>
                  <TextField
                    id="text"
                    name="text"
                    placeholder="What are you looking for..."
                    variant="outlined"
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                  />
                  {OpenSearchResult && (
                    <>
                      <div className={`${styles.product_listing}`}>
                        {bookList?.length === 0 && (
                          <p className={`${styles.no_product}`}>No Product</p>
                        )}
                        <List className={`${styles.related_product_list}`}>
                          {bookList?.length > 0 &&
                            bookList.map((item, i) => {
                              return (
                                <ListItem key={i}>
                                  <div className={`${styles.inner_block}`}>
                                    <div className={`${styles.left_col}`}>
                                      <span className={`${styles.title}`}>
                                        {item.name}
                                      </span>
                                      <p>{item.description}</p>
                                    </div>
                                    <div className={`${styles.right_col}`}>
                                      <span className={`${styles.price}`}>
                                        {item.price}
                                      </span>
                                      <Link onClick={() => {}}>
                                        Add to cart
                                      </Link>
                                    </div>
                                  </div>
                                </ListItem>
                              );
                            })}
                        </List>
                      </div>
                    </>
                  )}
                </div>
                <Button
                  type="submit"
                  className={`${styles.color_btn} ${styles.btn}`}
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={search}
                  style={{ height: "57px", width: "auto", display: "flex" }}
                >
                  <em>
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src={searchIcon}
                      alt="search"
                    />
                  </em>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;

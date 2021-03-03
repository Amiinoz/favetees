import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,

} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import useStyles from './styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Navbar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';



  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );



  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={Logo} alt="Favetees" height="80px" className={classes.image} /> FaveTees
          </Typography>

          <div>
            <Tabs aria-label="ant example">
              <Tab label="Shop" component={Link} to="/" />
              <Tab label="Our Story" component={Link} to="/about" />
              <Tab label="Contact Us" component={Link} to="/contact" />
            </Tabs>
          </div>

          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};
export default Navbar;

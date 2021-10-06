import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  Button
} from '@material-ui/core';

import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        {/* <RouterLink to="/">
          <Logo />
        </RouterLink> */}
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/register">
          <Button style={{ backgroundColor: '#ffc002', borderRadius: '15px' }} color='inherit'><span style={{ color: '#002060', fontWeight: 'bold' }}>REGISTER / SIGN IN</span></Button>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;

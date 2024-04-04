import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../router/Router';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is the login or signup page
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/register';

  // Conditionally render the footer based on the current page
  const renderFooter = !isLoginPage && !isSignupPage;

  return (
    <>
      <Header />
      <Router />
      {renderFooter && <Footer />}
    </>
  );
};

export default Layout;

import * as React from 'react';
import {
  container,
  heading,
  navWrap,
} from './layout.module.css';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ pageTitle, children }) => {
  const shouldShowTitle = pageTitle && pageTitle !== "Home Page";

  return (
    <>
      <div id="navBar" className={navWrap}>
        <Navbar />
      </div>
      <div className={container}>
        <main>
          {shouldShowTitle && <h1 className={heading}>{pageTitle}</h1>}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

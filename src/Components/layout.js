import * as React from 'react';
import {
  container,
  heading,
  navWrap,
} from './layout.module.css';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ pageTitle, children }) => (
  <>
    <div id="navBar" className={navWrap}>
      <Navbar />
    </div>
    <div className={container}>
      <main>
        {
          !pageTitle ||
            pageTitle === "Home Page" ?
            null :
            <h1 className={heading}>{pageTitle}</h1>
        }
        {children}
      </main>
      <Footer />
    </div>
  </>
);


export default Layout;
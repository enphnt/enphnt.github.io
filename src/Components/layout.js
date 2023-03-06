import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navWrap,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => (
  <>
    <nav className={navWrap}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/#about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/#portfolio" className={navLinkText}>
            Portfolio
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/#testimonials" className={navLinkText}>
            Testimonials
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/#contact" className={navLinkText}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <div className={container}>
      <main>
        {
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
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import About from '../components/home/about';
import Portfolio from '../components/home/portfolio';
import Testimonials from '../components/home/testimonials';
import Contact from '../components/home/contact';
import Header from '../components/home/header';

import { landingPage } from "../components/layout.module.css";

const IndexPage = () => (
  <div className={landingPage}>
    <Header />

    <Layout pageTitle="Home Page">
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  </div>
);

export const Head = ({ location }) => <Seo title="Home Page" location={location} />;

export default IndexPage;
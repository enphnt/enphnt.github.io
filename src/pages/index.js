import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import About from '../components/home/about';
import Portfolio from '../components/home/portfolio';
import Testimonials from '../components/home/testimonials';
import Contact from '../components/home/contact';
import Header from '../components/home/header';

const IndexPage = () => (
  <>
    <Header />

    <Layout pageTitle="Home Page">
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  </>
);

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
import * as React from 'react';
import * as data from "../../data";
import Networks from './networks';

const currentYear = (new Date()).getFullYear();

const style = {
  textAlign: "center",
  padding: "75px 0 0",
};

function Footer() {
  return (
    <footer style={style} >
      <Networks />
      <div>&copy; Copyright {currentYear} {data.name}.</div>
    </footer>
  );
}

export default Footer;

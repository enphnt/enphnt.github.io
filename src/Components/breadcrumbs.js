import { Link } from 'gatsby';
import * as React from 'react';

const style = {
  breadcrumbs: {
    display: "flex",
    alignItems: "baseline",
    margin: 4,
    fontSize: "max(.85vw, .9em)",
  },
  breadcrumbLink: {
    paddingRight: 2,
    whiteSpace: "nowrap",
    textDecoration: "none"
  },
  breadcrumbLinkHighlight: {
    fontWeight: 600,
    textDecoration: "none"
  },
  breadcrumbLinkSeparator: {
    fontSize: ".75em",
    fontWeight: 600,
    margin: 3,
    paddingBottom: 4,
    color: "rgb(46, 107, 77)",
  },
};

const Breadcrumbs = ({ title, path }) => (
  <div style={style.breadcrumbs}>
    <Link aria-label="Home" style={style.breadcrumbLink} to="/">{'< '}Home</Link>
    <div style={style.breadcrumbLinkSeparator}>/</div>
    <Link aria-label={path} style={style.breadcrumbLink} to={`/${path}/`}>{path.charAt(0).toUpperCase() + path.slice(1)}</Link>
    <div style={style.breadcrumbLinkSeparator}>/</div>
    <Link aria-label={title} style={style.breadcrumbLinkHighlight} to={`./`}>{title}</Link>
  </div >
);

export default Breadcrumbs;
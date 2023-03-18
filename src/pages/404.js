import * as React from "react";
import { Link } from "gatsby";
import image from "../images/404.png";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: "96px 0 0",
  margin: 0,
  textAlign: "center",
  wordWrap: "wrap",
  backgroundColor: "#add8e685",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  right: 0,
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "6em",
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Uhhh... ...what?</h1>
      <h1>Error: 404 - Page not found.</h1>
      <StaticImage
        alt={"what...page not found"}
        src={`../images/404.png`}
        width={350}
      />
      <p style={paragraphStyles}>Sorry 😔, couldn’t find what you were looking for. </p>

      <Link to="/">{"< "}Back to homepage</Link>.
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

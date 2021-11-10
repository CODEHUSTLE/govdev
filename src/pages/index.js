import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// styles

const pageStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "800px",
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <StaticImage alt="GovDev Logo" src="../images/govdev-800x426.png" />
      </main>
    </Layout>
  );
};

export default IndexPage;

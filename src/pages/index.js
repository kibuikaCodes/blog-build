import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const PageContainer = styled.div`
margin-bottom: 2em;

`;

const RightContainer = styled.div`
float: right;

`;

const LeftContainer = styled.div`
float: left;

`;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageContainer >
      <LeftContainer>
      <h1>Hello There</h1>
      <p>Welcome my awesome blog</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem"
          }}
        >
        </div>
      </div>
      <Link to="/blog/">View all posts</Link>
      </LeftContainer>
      <RightContainer>
        hey
      </RightContainer>
    </PageContainer>
    <footer style={{alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '5em', position: 'absolute', bottom: 0}}>
          © {new Date().getFullYear()}, Built with love by Kibuika.
          {/* {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
  </Layout>
);
export default IndexPage;
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

const Title = styled.h1`
  font-size: 5vw;
  font-style: regular;
  font-weight: 800;
`;

const Tagline = styled.p`
  font-size: 1.5vw;
  font-style: regular;
  font-family: verdana;
`;

const DivButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ReadMore = styled.button`
    
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #663399;
  border-radius: 3px;
    
`;

const FooterDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  margin: 1em;
  right: 0;
  font-size: 1vw;
`;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageContainer >
      <LeftContainer>
      <Title>Hello There</Title>
      <Tagline>Welcome my little corner of the web.</Tagline>
        <DivButton>
            <ReadMore primary>
                <Link to={`/blog/`} style={{textDecoration: 'none'}}>Read my stuff</Link>
            </ReadMore>
        </DivButton>
      </LeftContainer>
      <RightContainer>
        hey
      </RightContainer>
    </PageContainer>
      <FooterDiv>
        <Footer>
            © {new Date().getFullYear()}, Built with love by Kibuika.
            {/* {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </Footer>
      </FooterDiv>
  </Layout>
);
export default IndexPage;
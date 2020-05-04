import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 8vw;
  font-style: regular;
  font-weight: 900;

`;

const Paragraph = styled.p`
  font-size: 2em
  font-style: regular;
  font-weight: 300;
`;

const Home = styled.button`
    
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #663399;
  border-radius: 3px;
    
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Title>NOT FOUND</Title>
      <Paragraph>Oit there mate! You seem to be lost init?</Paragraph>
      <Home>
        <Link to={`/`} style={{textDecoration: 'none'}}>Go home</Link>
      </Home>
    </Container>
  </Layout>
)

export default NotFoundPage

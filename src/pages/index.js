import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import HeaderImage from '../images/blog-header-python.jpg';
import { useStaticQuery, graphql } from "gatsby"


const PageContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  position: relative;
  color: white;
`;


const Title = styled.h1`
  font-size: 6vw;
  font-style: regular;
  font-weight: 800;
  position: absolute;
  margin-top: 3em;
  
`;

const Tagline = styled.p`
  font-size: 1.5vw;
  font-style: regular;
  font-family: verdana;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
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
  position: absolute;
    
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

const Image = styled.img`
    height: 10em;
    weight: 10em;
    margin-top: 7.5em;
    margin-right: 3em;
    margin-left: 2em;
    
`;

// testing
const Posts = styled.div`
 display: flex;
 flex-flow: column wrap;
 justify-content: space-evenly;
 align-items: center;
 align-content: center;
`;

const Post = styled.div`
  padding-bottom: 40px;
  margin-bottom: 16em;
  transition: 0.3s;
  width: 60rem;
  height: 18rem;
  margin-top: 1em;
 
`;

// const Title = styled.h2`
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   font-size: 2.4vw;
//   font-weight: 900;
//   font-style: regular;
// `;

const Date = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CreatedAt = styled.span`
  margin-top: .0009em;
  font-size: .7em;
  font-style: italic;
`;

const FeaturedImage = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

// const Image = styled.img`
//   width: 50%;
//   height: 10%;
// `;

const ExcerptDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Excerpt = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;
`;

// const DivButton = styled.div`
//   align-items: center;
//   justify-content: center;
//   display: flex;
// `;

// const ReadMore = styled.button`
    
//   background: white;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #663399;
//   border-radius: 3px;
// `;



const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
          edges {
            node {
              id
              exerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
              publishDate(formatString: "", locale: "")
              slug
              title
              featuredImage {
                file {
                  url
                }
                fluid(maxWidth: 750) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
              }
              createdAt(fromNow: true)
            }
          }
        }
      }
    `
  )

return (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageContainer>
    <img src={HeaderImage} alt='' style={{height: '100vh', width: '100vw', filter: 'brightness(50%)'}}/>
      <Title>Code Matata</Title>
      <p style={{position: 'absolute', marginTop: '19em', fontStyle:"regular", fontWeight:'500'}}>Code that matters</p>
    </PageContainer>
    <div style={{marginTop: '2em'}}>
      <Posts>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            
            <Post key={edge.node.id}>
              <Title>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </Title>
              <Date>
                <CreatedAt>Posted {edge.node.createdAt}</CreatedAt>
              </Date>
              {edge.node.featuredImage && (
                <FeaturedImage>
                <Image
                  src={edge.node.featuredImage.file.url}
                  alt={edge.node.title}
                />
                </FeaturedImage>
                
                
              )}
               <ExcerptDiv>
                  <Excerpt>
                    {edge.node.exerpt.childMarkdownRemark.excerpt}
                  </Excerpt>
                 </ExcerptDiv>             
              
              <DivButton>
              <ReadMore primary>
                <Link to={`/blog/${edge.node.slug}/`} style={{textDecoration: 'none'}}>Continue reading...</Link>
              </ReadMore>
              </DivButton>
              
              
              
            </Post>
            

          )
        })}
      </Posts>
      </div>
      <FooterDiv>
        <Footer>
            {/* © {new Date().getFullYear()}, Built with love by Kibuika. */}
            {/* {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </Footer>
      </FooterDiv>
  </div>
)
}
export default IndexPage;
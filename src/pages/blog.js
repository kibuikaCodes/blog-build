import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const Back = styled.div`
  font-size: 1em;
  font-style: regular;
  font-weight: bold;
  text-decoration: none;
  float: right;
  margin-right: 2em;
  margin-bottom: 2em;
`;

const Posts = styled.div`
 display: flex;
 flex-flow: row wrap;
 justify-content: center;
 align-items: center;
 align-content: center;
`;

const Post = styled.div`
  padding-bottom: 40px;
  margin-bottom: 2em;
  transition: 0.3s;
  width: 30rem;
  height: 18rem;
  margin-top: 1em;
  margin-left: 1em;
`;

const Title = styled.h2`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 2.4vw;
  font-weight: 900;
  font-style: regular;
`;

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

const Image = styled.img`
  width: 50%;
  height: 10%;
`;

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




const Blog = () => {
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
    <div style={{margin: '2em'}}>
      <SEO title="Blog" />
      <Back>
        <Link to="/" style={{textDecoration: 'none', paddingBottom: '1em'}}>&#8249;Back</Link>
      </Back>
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
      <FooterDiv>
        <Footer>
            Built with love by Kibuika.
            {/* {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </Footer>
      </FooterDiv>
      
    </div>
  )
}

export default Blog
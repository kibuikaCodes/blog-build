import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const Back = styled.p`
  font-size: 1em;
  font-style: regular;
  font-weight: bold;
  text-decoration: none;
`;

const Posts = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const Post = styled.li`
  padding-bottom: 40px;
  margin-bottom: 2em;
`;

const Title = styled.h2`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 3vw;
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
  width: 70%;
  height: 20%;
`;

const Excerpt = styled.p`
  margin-left: 7.5em;
  margin-top: 2em;
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
    <Layout>
      <SEO title="Blog" />
      <Back>
        <Link to="/" style={{textDecoration: 'none'}}>Back to home</Link>
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

              <Excerpt>
                {edge.node.exerpt.childMarkdownRemark.excerpt}
              </Excerpt>
              <DivButton>
              <ReadMore primary>
                <Link to={`/blog/${edge.node.slug}/`} style={{textDecoration: 'none'}}>Continue reading...</Link>
              </ReadMore>
              </DivButton>
              
            </Post>
            

          )
        })}
      </Posts>
      
    </Layout>
  )
}

export default Blog
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"



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


// new styles
const Main = styled.div`
  height: auto;
  
`;

const PostsDiv = styled.div`
  padding: 3em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  height: auto;
  width: auto;
  padding: .5em;
  margin-top: 1em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid black;
`;

const PostImageDiv = styled.div`
  height: 10em;
  width: 12em;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PostTextDiv = styled.div`
  height: 10em;
  width: 40em;
  margin-left: .5em;
  display: flex;
  flex-flow: column nowrap;
  
`;

const PostTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
`;


const PostExcerpt = styled.p`
  font-size: 1em;
  font-weight: 300;
`;






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
      <Main>
        <PostsDiv>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <Post key={edge.node.id}>
                <PostImageDiv>
                  <Image
                    src={edge.node.featuredImage.file.url}
                    alt={edge.node.title}
                  ></Image>
                </PostImageDiv>
                <PostTextDiv>
                  <PostTitle>
                  {edge.node.title}
                  </PostTitle>
                  <PostExcerpt>
                  {edge.node.exerpt.childMarkdownRemark.excerpt}
                  </PostExcerpt>
                  <Link to={`/blog/${edge.node.slug}/`} style={{textDecoration: 'none', alignSelf: 'flex-end'}}>Continue reading...</Link>
                </PostTextDiv>
              </Post>
              

            )
          })}
        </PostsDiv>

      </Main>

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
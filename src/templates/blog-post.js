import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

const Back = styled.p`
  font-size: 1em;
  font-style: regular;
  font-weight: bold;
  text-decoration: none;
  float: right;
`;

const Date = styled.p`
  margin-bottom: 1.5em;
  font-style: italic;
`;

const FooterDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Footer = styled.footer`
  margin-top: 5em;
  right: 0;
  font-size: 1vw;
`;



export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishDate(formatString: "Do MMMM, YYYY")
        featuredImage {
          fluid(maxWidth: 150) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
        body {
          json
        }
      }
  }
`

const BlogPost = props => {
    const options = {
        renderNode: {
          "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={url} />
          },
        },
      }
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Back>
        <Link to="/blog/" style={{textDecoration: 'none'}}>&#8249;Back</Link>
      </Back>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <Date>
            Posted on{` `}{props.data.contentfulBlogPost.publishDate}
        </Date>

        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

      </div>
      <FooterDiv>
        <Footer>
            Built with love by Kibuika.
            {/* {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </Footer>
      </FooterDiv>
    </Layout>
  )
}

export default BlogPost
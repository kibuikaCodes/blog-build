import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


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
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted {edge.node.createdAt}</span>
              </div>
              {edge.node.featuredImage && (
                <div>
                <img
                  src={edge.node.featuredImage.file.url}
                  alt={edge.node.title}
                />
                </div>
                
                
              )}

              <p className="excerpt">
                {edge.node.exerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
            

          )
        })}
      </ul>
      
    </Layout>
  )
}

export default Blog
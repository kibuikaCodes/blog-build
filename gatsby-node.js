
const path = require("path")

//Gatsby allows us to use an API function called createPages to dynamically generate a single post page based on the slug we fetched from Contentful.

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}


// Gatsby allows us to use an API function called createPages to dynamically generate a single post page based on the slug we fetched from Contentful.

// Notice we are using the async/await syntax to get a promise response from the graphql function. This response holds all of the data we need.

// So we looped through its edges array (which contains the list of posts) and then dynamically create each post page by calling the createPage function.

// In this function, we specified the parameters needed to create the pages.
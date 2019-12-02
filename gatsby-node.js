const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const { paginate } = require("gatsby-awesome-pagination")

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/startsidan",
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true,
  })

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
                yoast_meta {
                  yoast_wpseo_title
                  yoast_wpseo_metadesc
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const mall_ett = path.resolve("./src/templates/mall_ett.js")
        const pagePortfolioTemplate = path.resolve(
          "./src/templates/portfolioUnderContent.js"
        )
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          console.log("------------Template namn---------------------")
          console.log(edge.node.title, edge.node.template, edge.node.slug)
          console.log("---------------------------------")
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: (() => {
              if (edge.node.template === "portfolio.php") {
                return slash(pagePortfolioTemplate)
              }
              if (edge.node.template === "page-grid.php") {
                return slash(pageBrokenGrid)
              }
              if (edge.node.template === "page-mall_ett.php") {
                return slash(mall_ett)
              } else {
                return slash(pageTemplate)
              }
            })(),
            // slash(
            //   edge.node.template === "portfolio.php"
            //     ? pagePortfolioTemplate
            //     : pageTemplate
            // ),
            context: edge.node,
          })
          // createPage({
          //   // Each page is required to have a `path` as well
          //   // as a template component. The `context` is
          //   // optional but is often necessary so the template
          //   // can query data specific to each page.
          //   path: `/${edge.node.slug}/`,
          //   component: slash(
          //     edge.node.template === "page-mall_ett.php"
          //       ? mall_ett
          //       : pageTemplate
          //   ),
          //   context: edge.node,
          // })
        })
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    title
                    slug
                    excerpt
                    content
                    template
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            console.log("------------Template Post namn---------------------")
            console.log(edge.node.title, edge.node.template)
            console.log("---------------------------------")
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== END POSTS ====

      // ==== PORTFOLIO (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPage {
                edges {
                  node {
                    slug
                    id
                    title
                    excerpt
                    content
                    template
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const portfolioTemplate = path.resolve("./src/templates/mall_ett.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPage.edges, edge => {
            createPage({
              path: `/portfolio/${edge.node.slug}/`,
              component: slash(portfolioTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END PORTFOLIO ====
  })
}

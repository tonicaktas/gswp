import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import tangoLogo from "../images/favicon.jpg"
import Navigation from "./Navigation_R"

import { HeaderWrapper } from "./styles/HeaderMenuStyles"

const Header = () => {
  const {
    site,
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              object_slug
              wordpress_children {
                title
                url
                object_slug
              }
            }
            name
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src={tangoLogo} alt={site.siteMetadata.title} />
            </Link>
          </div>
          <div className="col-md-8 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header

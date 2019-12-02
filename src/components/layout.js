/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header_Logo from "./Header_Logo"
import Seo from "./seo.js"
import Hero_Center from "./Hero_Center"
import Header_Logo from "./Header_Logo"
import Header from "./Header_menu"
import Seo_Startsidan from "./SeoStartsidan"
import Footer_Basic_Form from "./FooterBasicForm"
import Fyra_Boxar from "./FyraBoxar.js"
import Gallery_Fyra from "./Gallery.js"
import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const Layout = ({ children, pageContext }) => {
  const wrapperStyle = {
    height: "auto",
    backroundSize: "cover",
    display: "flex",
    justifyConetent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
  }

  return (
    <div style={wrapperStyle}>
      <Seo />
      <Header />
      <Hero_Center />
      <Seo_Startsidan />
      <Fyra_Boxar />
      <Gallery_Fyra />
      <Footer_Basic_Form />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

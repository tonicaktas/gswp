import React from "react"
import Seo from "../components/seo.js"
import Header from "../components/Header_menu"
import "bootstrap/dist/css/bootstrap-grid.css"
import { MallettWrapper } from "../components/Styles/MallEttStyles"

export default ({ pageContext }) => (
  <>
    <Header />
    <MallettWrapper>
      <Seo
        title={pageContext.yoast_meta.yoast_wpseo_title}
        metaDescription={pageContext.yoast_meta.yoast_wpseo_metadesc}
      />

      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
    </MallettWrapper>
  </>
)

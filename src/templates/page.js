import React from "react"
import Layout from "../components/layout"

// hämtar proppen från gatsby-node context: edge.node(rad 69) och destructar den
export default ({ pageContext }) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

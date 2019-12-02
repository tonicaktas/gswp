import React from "react"
import { SeoStartsidan } from "./Styles/SeoStartsidanStyle"
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Image from "./image"

const Seo_Startsidan = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressAcfPages {
          edges {
            node {
              id
              acf {
                hero_bg {
                  id
                  source_url
                }
                seo_text
                namn
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SeoStartsidan>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <>
              <div
                className="seo-holder container"
                dangerouslySetInnerHTML={{ __html: loopen.node.acf.seo_text }}
              />
            </>
          ) : (
            console.log("jupi")
          )
        )}
      </SeoStartsidan>
    )}
  />
)

export default Seo_Startsidan

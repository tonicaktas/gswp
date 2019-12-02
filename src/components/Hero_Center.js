import React from "react"
import { HeroCenter } from "./Styles/HeroCenterStyles"
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Image from "./image"

const Hero_Center = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressAcfPages {
          edges {
            node {
              id
              acf {
                logo {
                  id
                  source_url
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                hero_bg {
                  id
                  source_url
                }
                hero_headline
                hero_subtext
                hero_contact
                hero_phone

                namn
                addres
                epost
                telefon
                facebook
                instagram
                twitter
              }
            }
          }
        }
      }
    `}
    render={props => (
      <HeroCenter>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <div
              key={loopen.node.acf.namn}
              style={{
                backgroundsize: "cover",
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)), url(" +
                  loopen.node.acf.hero_bg.source_url +
                  ")",
              }}
            >
              <img src={loopen.node.acf.logo.source_url} alt="Logo" />
              <h1>{loopen.node.acf.hero_headline} </h1>

              <p>{loopen.node.acf.hero_subtext} </p>
              <a href={"mailto:" + loopen.node.acf.hero_contact}>
                {loopen.node.acf.hero_contact}
              </a>
              <a href={"tel:" + loopen.node.acf.hero_phone}>
                {loopen.node.acf.hero_phone}
              </a>
            </div>
          ) : (
            console.log("jupi")
          )
        )}
      </HeroCenter>
    )}
  />
)

export default Hero_Center

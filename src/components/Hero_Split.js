import React from "react"
import { HeroSplit } from "./Styles/HeroSplitStyles"
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components"
import Hero_Center from "./Hero_Center.js"
import Form_Basic from "./Form_Basic.js"
// import Info_Basic from "./Info.js"
import Image from "./image"
import "bootstrap/dist/css/bootstrap-grid.css"
import { graphql, StaticQuery } from "gatsby"

const Hero_Split = () => (
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
      <HeroSplit>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <div
              className="split-holder "
              key={loopen.node.acf.namn}
              style={{
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)), url(" +
                  loopen.node.acf.hero_bg.source_url +
                  ")",
              }}
            >
              <div className="container">
                <div className=" col-xs-12 col-md-4">
                  <div className="infoholder">
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
                </div>

                <div className="col-xs-12 col-md-7 mx-auto ">
                  <Form_Basic />
                </div>
              </div>
            </div>
          ) : (
            console.log("jupi")
          )
        )}
      </HeroSplit>
    )}
  />
)

//   return (
//     <HeroSplit>
//       <div className="split-holder container-fluid">
//         <div className="col-sm-6">
//           <Hero_Center />
//         </div>
//         <div className="col-sm-6">
//           <Form_Basic />
//         </div>
//       </div>
//     </HeroSplit>
//   )
// }

export default Hero_Split

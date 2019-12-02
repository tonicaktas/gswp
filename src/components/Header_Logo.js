import React from "react";
import { HeaderLogo } from "./Styles/HeaderLogoStyles";
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "./image";

const Header_Logo = () => (
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
                      fluid(quality: 100, maxWidth: 4000) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={props => (
      <HeaderLogo>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <div
              key={loopen.node.acf.logo.id}
              // style={{
              //   background: "url(" + loopen.node.acf.logo.source_url + ")",
              // }}
            >
              <img src={loopen.node.acf.logo.source_url} alt="Logo" />

              {console.log(
                loopen.node.acf.logo.localFile.childImageSharp.fluid
              )}
            </div>
          ) : (
            console.log("jupi")
          )
        )}
      </HeaderLogo>
    )}
  />
);

export default Header_Logo;

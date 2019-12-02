import React from "react";
import { SeoTvaBoxar } from "./Styles/SeoTvaBoxarStyles";
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "./image";

const Seo_TvaBoxar = () => (
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
      <SeoTvaBoxar>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <>
              <div className="holder">
                <div
                  className="left"
                  dangerouslySetInnerHTML={{ __html: loopen.node.acf.seo_text }}
                />
                <div
                  className="right"
                  dangerouslySetInnerHTML={{ __html: loopen.node.acf.seo_text }}
                />
              </div>
            </>
          ) : (
            console.log("jupi")
          )
        )}
      </SeoTvaBoxar>
    )}
  />
);

export default Seo_TvaBoxar;

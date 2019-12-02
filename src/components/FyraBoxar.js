import React from "react";
import { FyraBoxar } from "./Styles/FyraBoxarStyle";
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "./image";

const Fyra_Boxar = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressAcfPages {
          edges {
            node {
              id
              acf {
                top_bild {
                  id
                  source_url
                }
                top_text
                bottom_bild {
                  id
                  source_url
                }
                bottom_text
              }
            }
          }
        }
      }
    `}
    render={props => (
      <FyraBoxar>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <>
              <div className="continaer-fluid fyrabox-holder">
                <div className="top">
                  <div
                    className="top-bild"
                    style={{
                      backgroundSize: "cover",
                      background:
                        "linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.5)), url(" +
                        loopen.node.acf.top_bild.source_url +
                        ")"
                    }}
                  ></div>
                  <div
                    className="top-text"
                    dangerouslySetInnerHTML={{
                      __html: loopen.node.acf.top_text
                    }}
                  />
                </div>
                <div className="bottom">
                  <div
                    className="bottom-text"
                    dangerouslySetInnerHTML={{
                      __html: loopen.node.acf.bottom_text
                    }}
                  />
                  <div
                    className="bottom-bild"
                    style={{
                      backgroundsize: "cover",
                      background:
                        "linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.5)), url(" +
                        loopen.node.acf.bottom_bild.source_url +
                        ")"
                    }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            console.log("jupi")
          )
        )}
      </FyraBoxar>
    )}
  />
);

export default Fyra_Boxar;

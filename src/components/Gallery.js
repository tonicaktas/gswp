import React from "react";
import { Gallery } from "./Styles/GalleryStyle";
// import WhiteLogo from "../images/tango_logo_white.svg"
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "./image";

const Gallery_Fyra = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressAcfPages {
          edges {
            node {
              id
              acf {
                gallery
              }
            }
          }
        }
      }
    `}
    render={props => (
      <Gallery>
        {props.allWordpressAcfPages.edges.map((loopen, i) =>
          loopen.node.acf ? (
            <>
              <div
                className="continaer-fluid fyrabox-holder"
                dangerouslySetInnerHTML={{ __html: loopen.node.acf.gallery }}
              />
            </>
          ) : (
            console.log("jupi")
          )
        )}
      </Gallery>
    )}
  />
);

export default Gallery_Fyra;

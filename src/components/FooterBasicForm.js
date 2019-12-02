import React from "react";
import { FooterBasicForm } from "./Styles/FooterBasicFormStyle";
// import WhiteLogo from "../images/tango_logo_white.svg"
import Form_Basic from "./FormBasic";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "./image";

const Footer_Basic_Form = () => (
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
      <FooterBasicForm>
        <div className="basicform-holder">
          {props.allWordpressAcfPages.edges.map((loopen, i) =>
            loopen.node.acf ? (
              <div key={loopen.node.id} className="col-sm-4">
                {<h2>{loopen.node.acf.namn} </h2>}
                {<p>{loopen.node.acf.addres} </p>}
                {
                  <a href={"mailto:" + loopen.node.acf.epost}>
                    {loopen.node.acf.epost}
                  </a>
                }
                {
                  <a href={"tel:" + loopen.node.acf.telefon}>
                    {loopen.node.acf.telefon}
                  </a>
                }
              </div>
            ) : null
          )}
          <Form_Basic />
        </div>
      </FooterBasicForm>
    )}
  />
);

export default Footer_Basic_Form;

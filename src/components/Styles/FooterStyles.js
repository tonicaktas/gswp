import styled from "styled-components"
import Img from "gatsby-image"

export const FooterBasic = styled.div`
  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  background: gray;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  div {
    overflow: hidden;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-family: "Barlow", sans-serif;
    padding: 35px 0;
  }

  h2 {
    color: white;
    font-family: "Barlow", sans-serif;
    letter-spacing: 1px;
    font-size: 1.75rem;
    margin: 0;
    margin-bottom: 25px;
  }
  p {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
`

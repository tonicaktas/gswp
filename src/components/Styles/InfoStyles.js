import styled from "styled-components"
import Img from "gatsby-image"

export const Info = styled.div`
  text-align: center;

  margin: 0 auto;

  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    height: 100vh;
  }

  img {
    max-width: 100px;
    width: 50%;
    width: 75px;
    margin: 35px;
    border-radius: 50%;
    @media only screen and (max-width: 767px) {
      margin: 5px;
    }
  }
  h1 {
    color: white;
    font-family: "Barlow", sans-serif;
    letter-spacing: 1px;
    font-size: 3rem;
  }

  p {
    @media only screen and (max-width: 767px) {
      margin: 5px;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`

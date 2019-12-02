import styled from "styled-components"
import Img from "gatsby-image"

export const HeroSplit = styled.div`
  background: red;
  box-shadow: 3px 3px 10pc gray;
  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  color: white;

  .split-holder {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    height: 80vh;

    @media only screen and (max-width: 767px) {
      height: auto;
    }
  }

  .container {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    @media only screen and (max-width: 1024px) {
      margin: 0;
      padding: 0;
      width: 100%;
      max-width: 1024px;
    }
  }

  .col-sm-6 {
    padding: 0;
    margin: 0;
  }

  .container > div {
    @media only screen and (max-width: 767px) {
      padding: 35px;
    }
  }

  .infoholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 100px;
    width: 50%;
    width: 75px;

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

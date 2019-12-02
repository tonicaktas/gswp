import styled from "styled-components";
import Img from "gatsby-image";

export const HeroCenter = styled.div`
  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 80vh;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-size: cover;

  @media only screen and (max-width: 767px) {
    height: 100vh;
  }

  div {
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-family: "Barlow", sans-serif;
    background-size: cover !important;
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
`;

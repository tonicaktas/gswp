import styled from "styled-components";
import Img from "gatsby-image";

export const SeoStartsidan = styled.div`
  background: white;

  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  div {
    margin: 70px;
    background: #f7f7f7;
    color: black;
    padding: 70px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 767px) {
      margin: 5px;
      padding: 10px;
    }
  }

  h2 {
    color: blue;
    font-size: 2rem;
    margin-bottom: 70px;
    font-family: "Barlow", sans-serif;
    letter-spacing: 1px;

    @media only screen and (max-width: 767px) {
      margin: 15px auto;
      font-size: 1.5rem;
    }
  }
  p {
    font-family: "Barlow", sans-serif;
    font-size: 1rem;

    @media only screen and (max-width: 767px) {
      font-size: 1.25rem;
      line-height: 25px;
    }
  }
`;

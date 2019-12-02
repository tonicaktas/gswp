import styled from "styled-components";
import Img from "gatsby-image";

export const SeoTvaBoxar = styled.div`
  text-align: center;
  max-width: 1920px;
  margin: 0 auto;

  color: white;

  @media only screen and (max-width: 767px) {
    height: 100vh;
  }

  div {
    margin: 30px;
  }

  .holder {
    padding: 30px;
    display: flex;
    ajustify-content: space-beetwen;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }
  .left {
    background: #ededed;
    padding: 50px;
    margin: 0;
    margin-right: 15px;
  }

  .right {
    background: #e0e0e0;
    padding: 50px;
    margin: 0;
    margin-left: 15px;
  }

  h2 {
    color: rgba(0, 0, 0, 0.6);
    font-family: "Barlow", sans-serif;
    letter-spacing: 1px;
    font-size: 2rem;
  }

  p {
    font-family: "Barlow", sans-serif;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);

    @media only screen and (max-width: 767px) {
      margin: 5px;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

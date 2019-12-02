import styled from "styled-components";
import Img from "gatsby-image";

export const HeaderLogo = styled.div`
  background: white;
  box-shadow: 3px 3px 10pc gray;
  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  div {
    overflow: hidden;
    width: 100%;
  }

  h1 {
    color: blue;
  }

  img {
    max-width: 100px;
    width: 50%;
    width: 75px;
    margin: 0;
  }
`;

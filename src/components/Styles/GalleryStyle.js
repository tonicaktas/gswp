import styled from "styled-components";
import Img from "gatsby-image";
import bg from "../../images/hero-bg.jpg";

export const Gallery = styled.div`
  height: auto;
  padding: 70px;
  width: 100%;

  .gallery-item {
    overflow: hidden;
  }

  img {
    height: 100%;
    width: 100%;
    min-height: 300px;
    margin: 5px;
  }
`;

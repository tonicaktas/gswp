import styled from "styled-components";
import Img from "gatsby-image";
import bg from "../../images/hero-bg.jpg";

export const FooterBasicForm = styled.div`
  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  padding: 70px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    ),
    url(${bg});
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    padding: 15px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 70px 10px;
  }

  .basicform-holder {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
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
`;

import styled from "styled-components";
import Img from "gatsby-image";
import bg from "../../images/hero-bg.jpg";

export const FyraBoxar = styled.div`
  width: 100%;

  .fyrabox-holder {
    width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .top {
    display: flex;
    height: 50vh;
    align-content: center;
    align-items: center;

    .top-bild {
      width: 50%;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      height: 100%;
    }
    .top-text {
      width: 50%;
      padding: 100px;
      text-align: left;
    }
  }

  .bottom {
    display: flex;
    height: 50vh;
    align-content: center;
    align-items: center;

    .bottom-bild {
      width: 50%;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      height: 100%;
    }
    .bottom-text {
      width: 50%;
      padding: 100px;
      text-align: left;
    }
  }
`;

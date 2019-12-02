import styled from "styled-components";
import Img from "gatsby-image";

export const FormBasic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }

  .form {
    height: 100%;
  }
  div {
    text-align: left;
  }

  input {
    overflow: visible;
    width: 90%;

    margin-bottom: 30px;
    height: 45px;
    background: none;
    border: 1px solid white;
    color: white;
    padding-left: 10px;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  textarea {
    overflow: visible;
    width: 100%;
    margin: -20px auto 15px;
    height: 196px;
    background: none;
    border: 1px solid white;
    color: white;
    padding: 10px;

    @media only screen and (max-width: 767px) {
      margin: 0;
    }
  }

  .button {
    overflow: visible;
    width: 100%;
    margin: 8px auto;
    height: 45px;
    background: white;
    border: 1px solid white;
    color: black;
    transition: 0.3s;

    position: relative;
    top: 15px;
  }
  .button:hover {
    background: black;
    color: white;
    border: 1px solid black;
    cursor: pointer;
  }

  .gdpr {
    display: flex;
    align-content: top;
  }

  .gdpr input {
    width: 25px;
  }
  .gdpr label {
    font-size: 12px;
    line-height: 20px;
    margin-top: 10px;
    width: 85%;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

import React from "react";
import { FormBasic } from "./Styles/FormBasicStyles.js";
import styled from "styled-components";

const Form_Basic = props => {
  return (
    <div className="form">
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <FormBasic>
          <div className="col-sm-6 col-xs-12">
            <input placeholder="Namn" type="text" name="name" id="name" />
            <input placeholder="Epost" type="text" name="email" id="email" />
            <input
              placeholder="Telefon"
              type="number"
              name="number"
              id="number"
            />
            <div className="gdpr">
              <input type="checkbox" name="checkbox" required />
              <label>
                Genom att skicka detta meddelande samtycker du till att vi tar
                del av de personuppgifter du valt att delge.
              </label>
            </div>
          </div>

          <div className="col-sm-6 col-xs-12">
            <textarea
              placeholder="Meddelande"
              name="message"
              id="textarea"
            ></textarea>

            {/* <div data-netlify-recaptcha="true"></div> */}

            <input className="button " type="submit" value="Skicka" />
          </div>
        </FormBasic>
      </form>
    </div>
  );
};

export default Form_Basic;
